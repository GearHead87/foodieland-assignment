export function AboutTeam() {
	return (
		<section className="py-16 bg-gradient-to-b from-white to-[#E7F9FD]">
			<div className="mx-auto max-w-7xl px-4 sm:px-6">
				<div className="text-center mb-12">
					<h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
					<p className="text-gray-500 max-w-2xl mx-auto">
						The passionate individuals behind our delicious recipes and culinary
						innovations.
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{[
						{
							name: 'Hosan Ul Islam',
							role: 'Full Stack Developer',
							image: 'https://avatars.githubusercontent.com/u/57955583?v=4',
							description: '1+ years of experience',
						},
						{
							name: 'Michael Chen',
							role: 'Recipe Developer',
							image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=2070',
							description: 'Specializes in Asian fusion cuisine',
						},
						{
							name: 'Emily Rodriguez',
							role: 'Food Photographer',
							image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=2070',
							description: 'Makes food look as good as it tastes',
						},
					].map((member, index) => (
						<div key={index} className="group">
							<div className="relative overflow-hidden rounded-2xl bg-white p-3">
								<img
									src={member.image}
									alt={member.name}
									className="w-full aspect-[3/4] object-cover rounded-xl transition-transform duration-300 group-hover:scale-105"
								/>
								<div className="p-4 text-center">
									<h3 className="text-lg font-semibold">{member.name}</h3>
									<p className="text-orange-500 font-medium mb-2">
										{member.role}
									</p>
									<p className="text-sm text-gray-500">{member.description}</p>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
