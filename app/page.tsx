import { CategoriesSection } from '@/components/custom/CategoriesSection';
import RecipeHero from '@/components/custom/RecipeHero';
import { RecipesGrid } from '@/components/custom/RecipesGrid';
import Image from 'next/image';

export default function Home() {
	return (
		<>
			<RecipeHero />
			<CategoriesSection />
			<RecipesGrid />
		</>
	);
}
