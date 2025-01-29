export interface FoodCategory {
	name: string;
	image: string;
	backgroundColor: string;
	textColor: string;
}

export const foodCategories: FoodCategory[] = [
	{
		name: 'Breakfast',
		image: '/placeholder.svg?height=80&width=80',
		backgroundColor: 'bg-[#E7F9EF]',
		textColor: 'text-[#00B207]',
	},
	{
		name: 'Vegan',
		image: '/placeholder.svg?height=80&width=80',
		backgroundColor: 'bg-[#E6F3E6]',
		textColor: 'text-[#1A973D]',
	},
	{
		name: 'Meat',
		image: '/placeholder.svg?height=80&width=80',
		backgroundColor: 'bg-[#FFF3F3]',
		textColor: 'text-[#FF6B6B]',
	},
	{
		name: 'Dessert',
		image: '/placeholder.svg?height=80&width=80',
		backgroundColor: 'bg-[#FFF8E5]',
		textColor: 'text-[#FFB021]',
	},
	{
		name: 'Lunch',
		image: '/placeholder.svg?height=80&width=80',
		backgroundColor: 'bg-[#F3F3F3]',
		textColor: 'text-[#4A4A4A]',
	},
	{
		name: 'Snacks',
		image: '/placeholder.svg?height=80&width=80',
		backgroundColor: 'bg-[#FFF3ED]',
		textColor: 'text-[#FF9B70]',
	},
];
