interface InstagramPostProps {
	image: string;
	caption: string;
	date: string;
}

import { Heart, MessageCircle, Send, Bookmark } from 'lucide-react';

export default function InstagramPost({ image, caption, date }: InstagramPostProps) {
	return (
		<div className="max-w-[470px] bg-white rounded-lg shadow-sm border border-gray-200 mx-auto">
			{/* Post Header */}
			<div className="flex items-center p-3 gap-3">
				<div className="w-8 h-8 relative rounded-full overflow-hidden">
					<img
						src="./assets/userInstragram.png"
						alt="Foodieland profile picture"
						width={32}
						height={32}
						className="object-cover"
					/>
				</div>
				<div className="flex-1">
					<div className="flex items-center gap-1">
						<span className="font-semibold text-sm">Foodieland.</span>
						<svg
							className="w-3 h-3 text-blue-500"
							viewBox="0 0 24 24"
							fill="currentColor"
						>
							<path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
						</svg>
					</div>
					<p className="text-xs text-gray-500">Tokyo, Japan</p>
				</div>
				<button className="p-1">
					<svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
						<path d="M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
					</svg>
				</button>
			</div>

			{/* Post Image */}
			<div className="relative aspect-square">
				<img
					src={image || '/placeholder.svg'}
					alt="Instagram post"
					className="w-full object-cover"
				/>
				<div className="absolute top-3 right-3 bg-black/75 text-white text-xs px-2 py-1 rounded-full">
					1/3
				</div>
			</div>

			{/* Post Actions */}
			<div className="p-3">
				<div className="flex justify-between mb-2">
					<div className="flex gap-4">
						<Heart className="w-6 h-6" />
						<MessageCircle className="w-6 h-6" />
						<Send className="w-6 h-6" />
					</div>
					<Bookmark className="w-6 h-6" />
				</div>

				{/* Likes */}
				<div className="flex items-center gap-1 mb-2">
					<span className="text-sm font-semibold">
						Liked by craig_love and 44,686 others
					</span>
				</div>

				{/* Caption */}
				<div className="mb-2">
					<span className="text-sm">
						<span className="font-semibold">Foodieland.</span> {caption}
					</span>
				</div>

				{/* Date */}
				<p className="text-xs text-gray-500">{date}</p>
			</div>
		</div>
	);
}
