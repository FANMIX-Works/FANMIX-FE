import { cn } from '@/lib/utils';
import { forwardRef, HTMLAttributes } from 'react';

export interface HashTagListProps extends HTMLAttributes<HTMLUListElement> {
  contents: string[];
}

const HashTagList = forwardRef<HTMLUListElement, HashTagListProps>(
  ({ className, contents, ...props }, ref) => {
    return (
      <ul ref={ref} className={cn('flex gap-1.5 text-sub1-m', className)} {...props}>
        {contents.map((content) => (
          <li
            key={content}
            className="w-fit rounded-full border-[0.7px] border-orange-200 px-2.5 py-[2px] text-orange-200 flex-center">
            {`#${content}`}
          </li>
        ))}
      </ul>
    );
  },
);

HashTagList.displayName = 'HashTagList';

export { HashTagList };
