import { Button } from '@/components/ui/button';
import { Heading } from '../shared/Heading';
import { SubHeading } from '../shared/SubHeading';

export function ChefHero() {
	return (
		<section className="relative overflow-hidden">
			<div className="mx-auto max-w-7xl">
				<div className="grid md:grid-cols-2">
					{/* Text Content */}
					<div className="flex flex-col justify-center p-6 md:p-12 lg:p-16">
						<Heading className="mb-6 text-black md:max-w-md">
							Everyone can be a chef in their own kitchen
						</Heading>
						<SubHeading className="mb-8 text-left text-gray-400 md:max-w-md">
							Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
							tempor incididunt ut labore et dolore magna aliqut enim ad minim
						</SubHeading>
						<div>
							<Button
								variant="secondary"
								size="lg"
								className="rounded-full bg-black text-white hover:bg-black/50"
							>
								Learn More
							</Button>
						</div>
					</div>

					{/* Image Section */}
					<div className="relative min-h-[400px] md:min-h-[600px] bg-gradient-to-t from-[#E7F9FD]  to-[#fff] ">
						{/* Floating Elements */}
						<div className="absolute left-1/4 top-8 h-12 w-12 animate-float">
							<img
								src="./assets/lunch.png"
								alt="Meat"
								className="h-full w-full object-contain"
							/>
						</div>
						<div className="absolute right-1/4 top-16 h-12 w-12 animate-float-delayed">
							<img
								src="./assets/dessert.png"
								alt="Onion"
								className="h-full w-full object-contain"
							/>
						</div>
						<div className="absolute left-1/3 top-32 h-12 w-12 animate-float">
							<img
								src="./assets/breakfast.png"
								alt="Lettuce"
								className="h-full w-full object-contain"
							/>
						</div>
						<div className="absolute right-1/3 bottom-32 h-12 w-12 animate-float-delayed">
							<img
								src="./assets/meat.png"
								alt="Tomato"
								className="h-full w-full object-contain"
							/>
						</div>

						{/* Chef Image */}
						<img
							src="./assets/male-chef.png"
							alt="Chef presenting a dish"
							className="absolute bottom-0 right-0 h-full w-auto object-contain"
						/>
					</div>
				</div>
			</div>
		</section>
	);
}
