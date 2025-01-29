import { UtensilsCrossed, Users2, BookOpen, ChefHat } from 'lucide-react';

export function AboutFeatures() {
  return (
    <section className="py-16 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Why Choose Us</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            We&apos;re more than just recipes - we&apos;re a community of food lovers dedicated to making cooking accessible and enjoyable for everyone.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: <UtensilsCrossed className="h-6 w-6" />,
              title: "Tested Recipes",
              description: "Every recipe is tested multiple times to ensure success in your kitchen"
            },
            {
              icon: <Users2 className="h-6 w-6" />,
              title: "Expert Chefs",
              description: "Our recipes are created and verified by professional chefs"
            },
            {
              icon: <BookOpen className="h-6 w-6" />,
              title: "Easy to Follow",
              description: "Step-by-step instructions that make cooking simple and enjoyable"
            },
            {
              icon: <ChefHat className="h-6 w-6" />,
              title: "Community Driven",
              description: "Join thousands of food enthusiasts sharing their culinary journey"
            }
          ].map((feature, index) => (
            <div key={index} className="text-center p-6 rounded-2xl bg-gradient-to-t from-[#E7F9FD] to-white">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-orange-100 text-orange-500 mb-4">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-500 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}