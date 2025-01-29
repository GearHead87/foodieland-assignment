import { CategoriesSection } from '@/components/custom/CategoriesSection';
import { ChefHero } from '@/components/custom/ChefHero';
import RecipeHero from '@/components/custom/RecipeHero';
import { RecipesGrid } from '@/components/custom/RecipesGrid';

export default function Home() {
	return (
		<>
			<RecipeHero />
			<CategoriesSection />
			<RecipesGrid />
			<ChefHero />
		</>
	);
}
