#!/bin/bash

# Husky 스크립트에 실행 권한 부여
chmod +x .husky/pre-commit
chmod +x .husky/commit-msg

# scripts 폴더 내 쉘 스크립트에 실행 권한 부여
chmod +x scripts/*.sh

echo "File permissions updated successfully."