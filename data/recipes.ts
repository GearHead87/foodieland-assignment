export interface Recipe {
	id: string;
	title: string;
	image: string;
	time: string;
	type: string;
	liked: boolean;
	isPromo?: boolean;
}

export const recipes: Recipe[] = [
	{
		id: '1',
		title: 'Big and Juicy Wagyu Beef Cheeseburger',
		image: './assets/recipe1.png',
		time: '30 Minutes',
		type: 'Snack',
		liked: true,
	},
	{
		id: '2',
		title: 'Fresh Lime Roasted Salmon with Ginger Sauce',
		image: './assets/recipe2.png',
		time: '30 Minutes',
		type: 'Fish',
		liked: false,
	},
	{
		id: '3',
		title: 'Strawberry Oatmeal Pancake with Honey Syrup',
		image: './assets/recipe3.png',
		time: '30 Minutes',
		type: 'Breakfast',
		liked: false,
	},
	{
		id: '4',
		title: 'Fresh and Healthy Mixed Mayonnaise Salad',
		image: './assets/recipe4.png',
		time: '30 Minutes',
		type: 'Healthy',
		liked: true,
	},
	{
		id: '5',
		title: 'Chicken Meatballs with Cream Cheese',
		image: './assets/recipe5.png',
		time: '30 Minutes',
		type: 'Meat',
		liked: false,
	},
	{
		id: 'promo',
		title: "Don't forget to eat healthy food",
		image: './assets/recipePromo.png',
		time: '',
		type: '',
		liked: false,
		isPromo: true,
	},
	{
		id: '6',
		title: 'Fruity Pancake with Orange & Blueberry',
		image: './assets/recipe6.png',
		time: '30 Minutes',
		type: 'Sweet',
		liked: true,
	},
	{
		id: '7',
		title: 'The Best Easy One Pot Chicken and Rice',
		image: './assets/recipe7.png',
		time: '30 Minutes',
		type: 'Snack',
		liked: false,
	},
	{
		id: '8',
		title: 'The Creamiest Creamy Chicken and Bacon Pasta',
		image: './assets/recipe8.png',
		time: '30 Minutes',
		type: 'Noodles',
		liked: false,
	},
];
