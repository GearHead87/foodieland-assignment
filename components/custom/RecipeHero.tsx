import { Clock, ThumbsUp, Utensils, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export default function RecipeHero() {
	return (
		<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
			<div className="overflow-hidden rounded-[32px] bg-gradient-to-r from-[#e7fafe] to-white">
				<div className="grid gap-8 md:grid-cols-2 md:gap-12">
					{/* Left Column */}
					<div className="p-6 md:p-12 lg:p-16">
						{/* Hot Recipes Tag */}
						<div className="mb-6">
							<Badge
								variant="outline"
								className="rounded-full bg-white px-4 py-1 text-sm"
							>
								📦 Hot Recipes
							</Badge>
						</div>

						{/* Title */}
						<h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
							Spicy delicious chicken wings
						</h1>

						{/* Description */}
						<p className="mb-8 text-gray-600">
							Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
							tempor incididunt ut labore et dolore magna aliqut enim ad minim
						</p>

						{/* Info Tags */}
						<div className="mb-8 flex flex-wrap gap-4">
							<div className="flex items-center gap-2 rounded-full bg-white px-4 py-2">
								<Clock className="h-5 w-5" />
								<span>30 Minutes</span>
							</div>
							<div className="flex items-center gap-2 rounded-full bg-white px-4 py-2">
								<Utensils className="h-5 w-5" />
								<span>Chicken</span>
							</div>
						</div>

						{/* Author Info and CTA */}
						<div className="flex flex-wrap items-center justify-between gap-4">
							<div className="flex items-center gap-3">
								<img
									src="/placeholder.svg?height=48&width=48"
									alt="John Smith"
									className="h-12 w-12 rounded-full"
								/>
								<div>
									<p className="font-semibold">John Smith</p>
									<p className="text-sm text-gray-600">15 March 2022</p>
								</div>
							</div>
							<Button className="rounded-full bg-black text-white hover:bg-black/90">
								View Recipes
								<ArrowRight className="ml-2 h-4 w-4" />
							</Button>
						</div>
					</div>

					{/* Right Column - Image */}
					<div className="relative">
						<div className="absolute right-6 top-6 z-10 md:right-12 md:top-12">
                            <img src='./assets/heroBadge.png'/>
							{/* <div className="flex h-16 w-16 items-center justify-center rounded-full bg-black p-4">
								<ThumbsUp className="h-8 w-8 text-white" />
							</div>
							<div className="mt-2 text-center text-xs font-medium">
								<span className="block">HANDPICKED</span>
								<span className="block">RECIPES</span>
							</div> */}
						</div>
						<img
							src="./assets/hero.png"
							alt="Spicy chicken wings with sauce"
							className="h-full w-full object-cover"
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
