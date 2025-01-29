import { Clock, ThumbsUp, Utensils, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export default function RecipeHero() {
	return (
		<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8">
			<div className="overflow-hidden rounded-[20px] sm:rounded-[32px] bg-gradient-to-r from-[#e7fafe] to-white">
				<div className="grid gap-6 md:grid-cols-2 md:gap-12">
					{/* Left Column */}
					<div className="order-2 md:order-1 p-4 sm:p-6 md:p-8 lg:p-16">
						{/* Hot Recipes Tag */}
						<div className="mb-4 sm:mb-6">
							<Badge
								variant="outline"
								className="rounded-full bg-white px-3 py-1 text-xs sm:px-4 sm:text-sm"
							>
								📦 Hot Recipes
							</Badge>
						</div>

						{/* Title */}
						<h1 className="mb-3 sm:mb-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
							Spicy delicious chicken wings
						</h1>

						{/* Description */}
						<p className="mb-6 sm:mb-8 text-sm sm:text-base text-gray-600">
							Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
							tempor incididunt ut labore et dolore magna aliqut enim ad minim
						</p>

						{/* Info Tags */}
						<div className="mb-6 sm:mb-8 flex flex-wrap gap-2 sm:gap-4">
							<div className="flex items-center gap-1.5 sm:gap-2 rounded-full bg-white px-3 sm:px-4 py-1.5 sm:py-2 text-sm">
								<Clock className="h-4 w-4 sm:h-5 sm:w-5" />
								<span>30 Minutes</span>
							</div>
							<div className="flex items-center gap-1.5 sm:gap-2 rounded-full bg-white px-3 sm:px-4 py-1.5 sm:py-2 text-sm">
								<Utensils className="h-4 w-4 sm:h-5 sm:w-5" />
								<span>Chicken</span>
							</div>
						</div>

						{/* Author Info and CTA */}
						<div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
							<div className="flex items-center gap-3">
								<img
									src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=faces"
									alt="John Smith"
									className="h-10 w-10 sm:h-12 sm:w-12 rounded-full"
								/>
								<div>
									<p className="font-semibold text-sm sm:text-base">John Smith</p>
									<p className="text-xs sm:text-sm text-gray-600">
										15 March 2022
									</p>
								</div>
							</div>
							<Button className="w-full sm:w-auto rounded-full bg-black text-white hover:bg-black/90 p-8">
								View Recipes
								<ArrowRight className="ml-2 h-4 w-4" />
							</Button>
						</div>
					</div>

					{/* Right Column - Image */}
					<div className="relative order-1 md:order-2">
						<div className="absolute left-1 top-4 z-10 sm:right-6 sm:top-6 md:right-12 md:top-12 ">
							<img src="./assets/badge1.png" />
						</div>
						<img
							src="./assets/hero.png"
							alt="Spicy chicken wings with sauce"
							className="h-[300px] sm:h-[400px] md:h-full w-full object-cover"
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
