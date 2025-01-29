import { foodCategories } from '@/data/categories';
import { CategoryCard } from './CategoryCard';
import { Button } from '@/components/ui/button';
import { Heading } from '../shared/Heading';

export function CategoriesSection() {
	return (
		<section className="py-12">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div className='flex justify-between items-center mb-10'>
					<Heading className='text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900'>Categories</Heading>
					<div className="">
						<Button
							variant="secondary"
							className="rounded-full bg-[#E7F9FD] text-black hover:bg-[#E7F9FD]/90"
						>
							View All Categories
						</Button>
					</div>
				</div>
				<div className="relative">
					{/* Categories Grid */}
					<div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
						{foodCategories.map((category) => (
							<CategoryCard key={category.name} category={category} />
						))}
					</div>

					{/* View All Button */}
				</div>
			</div>
		</section>
	);
}
