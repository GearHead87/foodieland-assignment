import Link from 'next/link';
import { Facebook, Twitter, Instagram } from 'lucide-react';

export function Footer() {
	return (
		<footer className="border-t border-gray-200 bg-white">
			<div className="mx-auto max-w-7xl px-4 py-12">
				<div className="flex flex-col justify-between gap-8 md:flex-row md:items-start">
					{/* Left Section */}
					<div className="space-y-4 md:max-w-xs">
						<h2 className="text-xl font-bold">Foodieland.</h2>
						<p className="text-sm text-gray-500">
							Lorem ipsum dolor sit amet, consectetuipisicing elit,
						</p>
					</div>

					{/* Right Section - Navigation */}
					<nav>
						<ul className="flex flex-col items-center gap-6 text-sm md:flex-row">
							<li>
								<Link href="/recipes" className="text-gray-600 hover:text-gray-900">
									Recipes
								</Link>
							</li>
							<li>
								<Link href="/blog" className="text-gray-600 hover:text-gray-900">
									Blog
								</Link>
							</li>
							<li>
								<Link href="/contact" className="text-gray-600 hover:text-gray-900">
									Contact
								</Link>
							</li>
							<li>
								<Link href="/about" className="text-gray-600 hover:text-gray-900">
									About us
								</Link>
							</li>
						</ul>
					</nav>
				</div>

				{/* Bottom Section */}
				<div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-gray-200 pt-8 md:flex-row">
					<p className="text-sm text-gray-500">
						© 2024{' '}
						<Link href="/" className="text-orange-500 hover:text-orange-600">
							SpaceZee
						</Link>
					</p>

					{/* Social Links */}
					<div className="flex gap-6">
						<Link
							href="#"
							className="text-gray-400 hover:text-gray-500"
							aria-label="Facebook"
						>
							<Facebook className="h-5 w-5" />
						</Link>
						<Link
							href="#"
							className="text-gray-400 hover:text-gray-500"
							aria-label="Twitter"
						>
							<Twitter className="h-5 w-5" />
						</Link>
						<Link
							href="#"
							className="text-gray-400 hover:text-gray-500"
							aria-label="Instagram"
						>
							<Instagram className="h-5 w-5" />
						</Link>
					</div>
				</div>
			</div>
		</footer>
	);
}
