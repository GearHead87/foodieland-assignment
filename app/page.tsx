import { CategoriesSection } from '@/components/custom/CategoriesSection';
import { ChefHero } from '@/components/custom/ChefHero';
import { Footer } from '@/components/custom/Footer';
import InstagramFeed from '@/components/custom/InstragramFeed';
import Newsletter from '@/components/custom/Newsletter';
import RecipeHero from '@/components/custom/RecipeHero';
import RecipeSection from '@/components/custom/RecipeSection';
import { RecipesGrid } from '@/components/custom/RecipesGrid';

export default function Home() {
	return (
		<>
			<RecipeHero />
			<CategoriesSection />
			<RecipesGrid />
			<ChefHero />
			<InstagramFeed />
			<RecipeSection />
			<Newsletter />
			<Footer />
		</>
	);
}
