export interface FoodCategory {
	name: string;
	image: string;
	backgroundColor: string;
	textColor: string;
}

export const foodCategories: FoodCategory[] = [
	{
		name: 'Breakfast',
		image: './assets/breakfast.png',
		backgroundColor: 'bg-[#E7F9EF]',
		textColor: 'text-[#00B207]',
	},
	{
		name: 'Vegan',
		image: './assets/vegan.png',
		backgroundColor: 'bg-[#E6F3E6]',
		textColor: 'text-[#1A973D]',
	},
	{
		name: 'Meat',
		image: './assets/meat.png',
		backgroundColor: 'bg-[#FFF3F3]',
		textColor: 'text-[#FF6B6B]',
	},
	{
		name: 'Dessert',
		image: './assets/dessert.png',
		backgroundColor: 'bg-[#FFF8E5]',
		textColor: 'text-[#FFB021]',
	},
	{
		name: 'Lunch',
		image: './assets/lunch.png',
		backgroundColor: 'bg-[#F3F3F3]',
		textColor: 'text-[#4A4A4A]',
	},
	{
		name: 'Chocolate',
		image: './assets/chocolate.png',
		backgroundColor: 'bg-[#FFF3ED]',
		textColor: 'text-[#FF9B70]',
	},
];
