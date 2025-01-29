import { Button } from '@/components/ui/button';
import { Heading } from '../shared/Heading';
import { SubHeading } from '../shared/SubHeading';
import { UtensilsCrossed, Users2, Trophy, Clock } from 'lucide-react';

export function AboutHero() {
	return (
		<section className="relative overflow-hidden py-16 md:py-24 bg-gradient-to-b from-[#E7F9FD] to-white">
			<div className="mx-auto max-w-7xl px-4 sm:px-6">
				<div className="grid grid-cols-1 gap-12 md:grid-cols-2 items-center">
					{/* Text Content */}
					<div className="space-y-6 text-center md:text-left">
						<Heading className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
							Bringing Good Food Into Your Everyday Life
						</Heading>c
						<SubHeading className="text-gray-500 max-w-[540px]">
							We believe that cooking is an essential life skill and a form of
							creative expression. Our mission is to inspire and empower home chefs of
							all skill levels to create delicious, healthy meals in their own
							kitchens.
						</SubHeading>
						<div className="grid grid-cols-2 gap-6 pt-8">
							<div className="space-y-2">
								<p className="text-3xl font-bold text-orange-500">15k+</p>
								<p className="text-sm text-gray-600">Recipes Available</p>
							</div>
							<div className="space-y-2">
								<p className="text-3xl font-bold text-orange-500">8k+</p>
								<p className="text-sm text-gray-600">Active Users</p>
							</div>
						</div>
					</div>

					{/* Image */}
					<div className="relative">
						<img
							src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80&w=2070"
							alt="Chef cooking"
							className="rounded-2xl shadow-xl w-full aspect-[4/3] object-cover"
						/>
						<div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-lg hidden md:block">
							<div className="flex items-center gap-4">
								<div className="bg-orange-100 p-3 rounded-full">
									<Trophy className="h-6 w-6 text-orange-500" />
								</div>
								<div>
									<p className="font-semibold">Best Recipe Award</p>
									<p className="text-sm text-gray-500">2024 Winner</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
