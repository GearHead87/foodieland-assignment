import InstagramPost from './InstragramPost';
import { Button } from '@/components/ui/button';
import { Instagram } from 'lucide-react';
import { Heading } from '../shared/Heading';
import { SubHeading } from '../shared/SubHeading';

export default function InstagramFeed() {
	const posts = [
		{
			id: 1,
			image: './assets/instragram1.png',
			caption: 'The vegetables dishes need to have certain vitamin for those people',
			date: 'September 19',
		},
		{
			id: 2,
			image: './assets/instragram2.png',
			caption:
				"Sweet food can bring someone into happiness as long as they don't eat to much",
			date: 'September 19',
		},
		{
			id: 3,
			image: './assets/instragram3.png',
			caption: 'What are you doing before start cooking? prepare the tools or ingredients?',
			date: 'September 19',
		},
		{
			id: 4,
			image: './assets/instragram4.png',
			caption: "Steak never be wrong, it's suitable for you who want romantic dinner",
			date: 'September 19',
		},
	];

	return (
		<section className="py-16 px-4 bg-gradient-to-t from-[#E7F9FD]  to-[#fff] ">
			<div className="max-w-6xl mx-auto">
				<div className="text-center mb-12">
					<Heading className='text-center'>Check out @foodieland on Instagram</Heading>
					<SubHeading>
						Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor
						incididunt ut labore et dolore magna aliqut enim ad minim
					</SubHeading>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
					{posts.map((post) => (
						<InstagramPost
							key={post.id}
							image={post.image}
							caption={post.caption}
							date={post.date}
						/>
					))}
				</div>

				<div className="text-center">
					<Button variant="default" className="gap-2 px-6">
						<Instagram className="w-5 h-5" />
						Visit Our Instagram
					</Button>
				</div>
			</div>
		</section>
	);
}
