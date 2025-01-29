'use client';

import { useState } from 'react';
import { Clock, Utensils, Heart } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { Recipe } from '@/data/recipes';

interface RecipeCardProps {
	recipe: Recipe;
	className?: string;
}

export function RecipeCard({ recipe, className }: RecipeCardProps) {
	const [isLiked, setIsLiked] = useState(recipe.liked);

	if (recipe.isPromo) {
		return (
			<div
				className={cn(
					'relative overflow-hidden rounded-2xl bg-[#002D1B]',
					'flex items-center justify-center text-center p-8',
					className
				)}
			>
				<div className="space-y-4">
					<div className="mx-auto h-32 w-32 rounded-full bg-white p-4">
						<img
							src={recipe.image || '/placeholder.svg'}
							alt="Healthy food"
							className="h-full w-full scale-[2] mt-5 object-cover"
						/>
					</div>
					<h3 className="text-xl font-semibold text-white">{recipe.title}</h3>
					<p className="text-sm text-white/80">www.foodieland.com</p>
				</div>
			</div>
		);
	}

	return (
		<div className={cn('group relative overflow-hidden rounded-2xl bg-white', className)}>
			{/* Image */}
			<div className="aspect-[4/3] w-full">
				<img
					src={recipe.image || '/placeholder.svg'}
					alt={recipe.title}
					className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
				/>
			</div>

			{/* Like Button */}
			<button
				onClick={() => setIsLiked(!isLiked)}
				className="absolute right-4 top-4 rounded-full bg-white p-2 shadow-lg transition-transform hover:scale-110"
			>
				<Heart
					className={cn(
						'h-5 w-5',
						isLiked ? 'fill-red-500 text-red-500' : 'text-gray-600'
					)}
				/>
			</button>

			{/* Content */}
			<div className="space-y-3 bg-[#E7F9FD] p-4">
				<h3 className="text-lg font-semibold leading-tight">{recipe.title}</h3>
				<div className="flex items-center gap-4 text-sm text-gray-600">
					<div className="flex items-center gap-1">
						<Clock className="h-4 w-4" />
						<span>{recipe.time}</span>
					</div>
					<div className="flex items-center gap-1">
						<Utensils className="h-4 w-4" />
						<span>{recipe.type}</span>
					</div>
				</div>
			</div>
		</div>
	);
}
