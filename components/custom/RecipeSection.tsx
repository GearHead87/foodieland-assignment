'use client';

import type { Recipe } from '@/data/recipes';
import { Heading } from '../shared/Heading';
import { SubHeading } from '../shared/SubHeading';
import { RecipeCard } from './RecipeCard';

const recipes: Recipe[] = [
	{
		id: '1',
		title: 'Mixed Tropical Fruit Salad with Superfood Boosts',
		time: '30 Minutes',
		type: 'Healthy',
		image: './assets/recipe9.png',
		liked: false,
		isPromo: false,
	},
	{
		id: '2',
		title: 'Big and Juicy Wagyu Beef Cheeseburger',
		time: '30 Minutes',
		type: 'Western',
		image: './assets/recipe10.png',
		liked: true,
		isPromo: false,
	},
	{
		id: '3',
		title: 'Healthy Japanese Fried Rice with Asparagus',
		time: '30 Minutes',
		type: 'Healthy',
		image: './assets/recipe11.png',
		liked: true,
		isPromo: false,
	},
	{
		id: '4',
		title: 'Cauliflower Walnut Vegetarian Taco Meat',
		time: '30 Minutes',
		type: 'Eastern',
		image: './assets/recipe12.png',
		liked: false,
		isPromo: false,
	},
	{
		id: '5',
		title: 'Rainbow Chicken Salad with Almond Honey Mustard Dressing',
		time: '30 Minutes',
		type: 'Healthy',
		image: './assets/recipe13.png',
		liked: true,
		isPromo: false,
	},
	{
		id: '6',
		title: 'Barbeque Spicy Sandwiches with Chips',
		time: '30 Minutes',
		type: 'Snack',
		image: './assets/recipe14.png',
		liked: false,
		isPromo: false,
	},
	{
		id: '7',
		title: 'Firecracker Vegan Lettuce Wraps - Spicy!',
		time: '30 Minutes',
		type: 'Seafood',
		image: './assets/recipe15.png',
		liked: true,
		isPromo: false,
	},
	{
		id: '8',
		title: 'Chicken Ramen Soup with Mushroom',
		time: '30 Minutes',
		type: 'Japanese',
		image: './assets/recipe16.png',
		liked: false,
		isPromo: false,
	},
];

export default function RecipeSection() {
	return (
		<section className="py-16 px-4">
			<div className="max-w-7xl mx-auto">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
					<Heading>Try this delicious recipe to make your day</Heading>
					<SubHeading className="md:text-left md:pt-4">
						Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor
						incididunt ut labore et dolore magna aliqut enim ad minim
					</SubHeading>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
					{recipes.map((recipe, index) => (
						<RecipeCard key={index} recipe={recipe} />
					))}
				</div>
			</div>
		</section>
	);
}
