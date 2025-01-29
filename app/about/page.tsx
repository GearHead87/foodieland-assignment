import { AboutFeatures } from '@/components/custom/AboutFeatures';
import { AboutHero } from '@/components/custom/AboutHero';
import { AboutTeam } from '@/components/custom/AboutTeam';

export default function About() {
	return (
		<div className="min-h-screen bg-white">
			<AboutHero />
			<AboutFeatures />
			<AboutTeam />
		</div>
	);
}
