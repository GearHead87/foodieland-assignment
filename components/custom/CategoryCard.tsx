import type { FoodCategory } from '@/data/categories';
import { cn } from '@/lib/utils';

interface CategoryCardProps {
	category: FoodCategory;
	className?: string;
}

export function CategoryCard({ category, className }: CategoryCardProps) {
	return (
		<div
			className={cn(
				'group relative flex flex-col items-center justify-center',
				'rounded-3xl p-6 transition-all hover:scale-105',
				category.backgroundColor,
				className
			)}
		>
			<div className="mb-4 h-20 w-20">
				<img
					src={category.image || '/placeholder.svg'}
					alt={`${category.name} category`}
					className="h-full w-full object-contain"
				/>
			</div>
			<h3 className={cn('text-lg font-medium', category.textColor)}>{category.name}</h3>
		</div>
	);
}
