// 'use client';

// import { useState } from 'react';
import Link from 'next/link';
import { Facebook, Twitter, Instagram, Menu } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Lobster } from 'next/font/google'

const lobster = Lobster({
	subsets: ['cyrillic', 'latin'],
	weight:['400']
})

export default function Navbar() {
	// const [isOpen, setIsOpen] = useState(false);

	return (
		<nav className="border-b">
			<div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
				{/* Logo */}
				<div className="flex lg:flex-1">
					<Link href="/" className={`${lobster.className} text-xl font-bold`}>
						Foodieland.
					</Link>
				</div>

				{/* Mobile menu button */}
				<div className="lg:hidden">
					<Sheet>
						<SheetTrigger asChild>
							<Button variant="ghost" size="icon">
								<Menu className="h-6 w-6" />
								<span className="sr-only">Open menu</span>
							</Button>
						</SheetTrigger>
						<SheetContent side="right">
							<div className="mt-6 flow-root">
								<div className="space-y-4">
									<Link
										href="/"
										className="block px-3 py-2 text-base font-medium hover:text-gray-600"
									>
										Home
									</Link>
									<Link
										href="/recipes"
										className="block px-3 py-2 text-base font-medium hover:text-gray-600"
									>
										Recipes
									</Link>
									<Link
										href="/blog"
										className="block px-3 py-2 text-base font-medium hover:text-gray-600"
									>
										Blog
									</Link>
									<Link
										href="/contact"
										className="block px-3 py-2 text-base font-medium hover:text-gray-600"
									>
										Contact
									</Link>
									<Link
										href="/about"
										className="block px-3 py-2 text-base font-medium hover:text-gray-600"
									>
										About us
									</Link>
								</div>
								<div className="mt-6 flex items-center space-x-4">
									<Link href="#" className="text-gray-600 hover:text-gray-800">
										<Facebook className="h-5 w-5" />
									</Link>
									<Link href="#" className="text-gray-600 hover:text-gray-800">
										<Twitter className="h-5 w-5" />
									</Link>
									<Link href="#" className="text-gray-600 hover:text-gray-800">
										<Instagram className="h-5 w-5" />
									</Link>
								</div>
							</div>
						</SheetContent>
					</Sheet>
				</div>

				{/* Desktop menu */}
				<div className="hidden lg:flex lg:gap-x-8">
					<Link href="/" className="text-sm font-medium hover:text-gray-600">
						Home
					</Link>
					<Link href="/recipes" className="text-sm font-medium hover:text-gray-600">
						Recipes
					</Link>
					<Link href="/blog" className="text-sm font-medium hover:text-gray-600">
						Blog
					</Link>
					<Link href="/contact" className="text-sm font-medium hover:text-gray-600">
						Contact
					</Link>
					<Link href="/about" className="text-sm font-medium hover:text-gray-600">
						About us
					</Link>
				</div>

				{/* Social Icons - Desktop */}
				<div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-4">
					<Link href="#" className="text-gray-600 hover:text-gray-800">
						<Facebook className="h-5 w-5" />
						<span className="sr-only">Facebook</span>
					</Link>
					<Link href="#" className="text-gray-600 hover:text-gray-800">
						<Twitter className="h-5 w-5" />
						<span className="sr-only">Twitter</span>
					</Link>
					<Link href="#" className="text-gray-600 hover:text-gray-800">
						<Instagram className="h-5 w-5" />
						<span className="sr-only">Instagram</span>
					</Link>
				</div>
			</div>
		</nav>
	);
}
