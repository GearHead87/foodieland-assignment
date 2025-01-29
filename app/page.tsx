import { CategoriesSection } from '@/components/custom/CategoriesSection';
import RecipeHero from '@/components/custom/RecipeHero';
import Image from 'next/image';

export default function Home() {
	return (
		<>
			<RecipeHero />
			<CategoriesSection />
		</>
	);
}
