import type React from 'react';
import { cn } from '@/lib/utils';

interface SubHeadingProps extends React.HTMLAttributes<HTMLParagraphElement> {
	children: React.ReactNode;
	className?: string;
}

export function SubHeading({ children, className, ...props }: SubHeadingProps) {
	return (
		<p
			className={cn(
				'font-inter text-base font-normal leading-7',
				'text-center underline-offset-from-font decoration-skip-ink-none',
				'text-gray-500',
				className
			)}
			{...props}
		>
			{children}
		</p>
	);
}
