import { Heading } from '../shared/Heading';
import { SubHeading } from '../shared/SubHeading';
import { Button } from '../ui/button';

export function ChefHero() {
  return (
    <section className="relative overflow-hidden py-8 md:py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* Text Content */}
          <div className="flex flex-col justify-center order-2 md:order-1 text-center md:text-left">
            <Heading className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6 max-w-[540px]">
              Everyone can be a chef in their own kitchen
            </Heading>
            <SubHeading className="mb-6 md:mb-8 text-gray-400 max-w-[540px]">
              Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqut enim ad minim
            </SubHeading>
            <div>
              <Button
                variant="secondary"
                size="lg"
                className="rounded-full bg-black text-white hover:bg-black/50 xl:p-8"
              >
                Learn More
              </Button>
            </div>
          </div>

          {/* Image Section */}
          <div className="relative min-h-[300px] sm:min-h-[400px] md:min-h-[500px] lg:min-h-[600px] bg-gradient-to-t from-[#E7F9FD] to-[#fff] order-1 md:order-2 rounded-2xl">
            {/* Floating Elements - Hidden on smallest screens */}
            <div className=" sm:block absolute left-1/4 top-8 h-8 w-8 md:h-12 md:w-12 animate-float">
              <img
                src="./assets/lunch.png"
                alt="Meat"
                className="h-full w-full object-contain"
              />
            </div>
            <div className=" sm:block absolute right-1/4 top-16 h-8 w-8 md:h-12 md:w-12 animate-float-delayed">
              <img
                src="./assets/dessert.png"
                alt="Onion"
                className="h-full w-full object-contain"
              />
            </div>
            <div className=" sm:block absolute left-1/3 top-32 h-8 w-8 md:h-12 md:w-12 animate-float">
              <img
                src="./assets/breakfast.png"
                alt="Lettuce"
                className="h-full w-full object-contain"
              />
            </div>
            <div className=" sm:block absolute right-1/3 bottom-32 h-8 w-8 md:h-12 md:w-12 animate-float-delayed">
              <img
                src="./assets/meat.png"
                alt="Tomato"
                className="h-full w-full object-contain"
              />
            </div>

            {/* Chef Image */}
            <img
              src="./assets/male-chef.png"
              alt="Chef presenting a dish"
              className="absolute bottom-0 right-0 h-[90%] md:h-full w-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}