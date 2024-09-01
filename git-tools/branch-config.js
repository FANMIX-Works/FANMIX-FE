const inquirer = require('inquirer');
const { execSync } = require('child_process');

const branchLabels = require('./constant');
const { showDecoratedMessage } = require('./util');

// 생성/전환/삭제 질문
async function ask() {
  const { action } = await inquirer.prompt([
    {
      type: 'list',
      name: 'action',
      message: '🛠️ 어떤 작업을 수행하시겠어요?',
      choices: [
        { name: '🌱 새 브랜치 생성', value: 'create' },
        { name: '🧬 브랜치 전환', value: 'checkout' },
        { name: '🔥 브랜치 삭제', value: 'delete' },
        { name: '🚪 종료', value: 'exit' },
      ],
    },
  ]);

  switch (action) {
    case 'create':
      await createBranch();
      break;
    case 'checkout':
      await checkOutBranch();
      break;
    case 'delete':
      await deleteBranch();
      break;
    case 'exit':
      console.log('👋 프로그램을 종료합니다.');
      return;
  }

  return;
}

// 브랜치 삭제
async function deleteBranch() {
  const branchNames = getCurrentBranchNames();
  const { branch } = await inquirer.prompt([
    {
      type: 'list',
      name: 'branch',
      message: '🔥 어떤 브랜치를 삭제할까요?',
      choices: branchNames,
    },
  ]);

  const { confirm } = await inquirer.prompt([
    {
      type: 'confirm',
      name: 'confirm',
      message: `❗ 정말로 '${branch}' 브랜치를 삭제하시겠어요? 이 작업은 되돌릴 수 없어요!`,
      default: false,
    },
  ]);

  if (confirm) {
    try {
      execSync(`git branch -d ${branch}`);
      showDecoratedMessage(`🗑️ '${branch}' 브랜치가 삭제되었어요.`);
    } catch (error) {
      if (error.message.includes('not fully merged')) {
        console.log(`❗ '${branch}' 브랜치가 완전히 병합되지 않았어요. 강제로 삭제하시겠어요?`);
        const { forceDelete } = await inquirer.prompt([
          {
            type: 'confirm',
            name: 'forceDelete',
            message: '강제 삭제를 진행할까요? (주의: 병합되지 않은 변경사항이 손실될 수 있어요)',
            default: false,
          },
        ]);

        if (forceDelete) {
          try {
            execSync(`git branch -D ${branch}`);
            showDecoratedMessage(`🗑️ '${branch}' 브랜치가 강제로 삭제되었어요.`);
          } catch (forceError) {
            console.error(`🙈 앗! 강제 삭제 중 오류가 발생했어요: ${forceError.message}`);
          }
        } else {
          showDecoratedMessage('👌 브랜치 삭제가 취소되었어요.');
        }
      } else {
        console.error(`🙈 앗! 오류가 발생했어요: ${error.message}`);
      }
    }
  } else {
    showDecoratedMessage('👌 브랜치 삭제가 취소되었어요.');
  }
}

// 브랜치 전환
async function checkOutBranch() {
  const branchNames = getCurrentBranchNames();
  const { branch } = await inquirer.prompt([
    {
      type: 'list',
      name: 'branch',
      message: '🧬 어떤 브랜치로 전환할까요?',
      choices: branchNames,
    },
  ]);

  try {
    execSync(`git checkout ${branch}`);
    showDecoratedMessage(`🎉 ${branch} 브랜치로 전환되었어요.`);
  } catch (error) {
    console.error(`🙈 앗! 오류가 발생했어요: ${error.message}`);
  }
}

// 브랜치 생성
async function createBranch() {
  const branchNames = getCurrentBranchNames();

  try {
    const answers = await inquirer.prompt([
      {
        type: 'list',
        name: 'baseBranch',
        message: '🌳 1. 어떤 브랜치에서 새 브랜치를 만들까요?',
        choices: branchNames,
      },
      {
        type: 'list',
        name: 'branchLabel',
        message:
          '🏷️  2. 새 브랜치의 이름을 라벨을 골라주세요! (위아래 화살표로 선택, 엔터로 확정):',
        choices: branchLabels,
      },
      {
        type: 'input',
        name: 'branchName',
        message: '🚀 3. 새 브랜치의 이름을 입력해주세요:',
        validate: (input) => input.trim() !== '' || '브랜치 이름을 입력해주세요!',
        filter: (input) => input.replace(/\s+/g, '-'), // 입력받은 문자열의 공백을 '-'로 치환
      },
      {
        type: 'input',
        name: 'issueNumber',
        message: '🔢 4. 관련된 이슈 번호를 입력해주세요:',
        validate: (input) => {
          const trimmed = input.trim();
          return /^\d+$/.test(trimmed) || '숫자만 입력해주세요!';
        },
      },
    ]);

    const { baseBranch, branchLabel, branchName, issueNumber } = answers;

    // base branch로 체크아웃
    execSync(`git checkout ${baseBranch}`);

    // 라벨이 대문자로 시작하도록 치환
    const transformed = branchLabel.replace(/\s+/g, '-');
    const chars = [...transformed];
    // '-' 다음 문자 = 라벨을 대문자로 수정
    const labelStart = chars.indexOf('-');
    if (chars[labelStart + 1]) {
      chars[labelStart + 1] = chars[labelStart + 1].toUpperCase();
    }
    const tarnsformedLabel = chars.join('');

    const finalBranchName = `${tarnsformedLabel}/#${issueNumber}-${branchName}`;

    // 새 브랜치 생성
    execSync(`git checkout -b ${finalBranchName}`);
    showDecoratedMessage(`🎉 야호! 새 브랜치가 생성되었어요: ${finalBranchName}`);
  } catch (error) {
    console.error(`🙈 앗! 오류가 발생했어요: ${error.message}`);
  }
}

// 현재 브랜치 리스트
function getCurrentBranchNames() {
  const branches = execSync('git branch --format="%(refname:short)"', { encoding: 'utf-8' })
    .trim()
    .split('\n');

  return branches.map((branch) => {
    return { value: branch, name: branch };
  });
}

ask();
