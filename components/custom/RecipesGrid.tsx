import { recipes } from '@/data/recipes';
import { RecipeCard } from './RecipeCard';

export function RecipesGrid() {
	return (
		<section className="py-12">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
					{recipes.map((recipe) => (
						<RecipeCard key={recipe.id} recipe={recipe} />
					))}
				</div>
			</div>
		</section>
	);
}
