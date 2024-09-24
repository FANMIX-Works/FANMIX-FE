'use client';

import { forwardRef } from 'react';
import React from 'react';
import { cn } from '@/lib/utils';
import { Input, InputProps } from '@/components/ui/input';

export interface IconInputProps extends InputProps {
  svgIcon: JSX.Element;
}

const IconInput = forwardRef<HTMLInputElement, IconInputProps>(
  ({ className, svgIcon, ...props }, ref) => {
    return (
      <div className="relative flex-center">
        <div className="absolute inset-y-0 left-0 ml-3 flex-center">
          {React.cloneElement(svgIcon, { className: 'h-[18px] w-[18px] fill-neutral-300' })}
        </div>
        <Input
          {...props}
          ref={ref}
          className={cn('pl-10', 'max-w-3xl', 'text-neutral-500 placeholder:body2-r', className)}
        />
      </div>
    );
  },
);

IconInput.displayName = 'IconInput';

export default IconInput;
