import { NAVIGATION_LINKS } from "@/app/config/routes";
import Section from "../../layout/Section";
import Button from "../../ui/Button";

const CallToAction = () => {
  return (
    <Section>
      <div className="bg-dark py-12 px-8 md:py-20 md:px-16 rounded-2xl">
        <div className="mx-auto text-center lg:text-left md:mx-0 md:max-w-3xl">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
            Let’s Build the Future Together
          </h2>
          <p className="mt-6 text-base sm:text-lg text-gray-300 leading-relaxed">
            Have a tech idea? Whether it’s a product, platform, or bold solution
            — we’re here to help shape it into a scalable, real-world
            application.
          </p>
          <p className="mt-4 text-sm sm:text-base text-gray-400">
            Join hands with us and transform possibilities into impactful
            digital products.
          </p>
          <div className="mt-8 flex justify-center lg:justify-start">
            <Button
              link={NAVIGATION_LINKS?.contact}
              size="large"
              label="Get Started"
            />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default CallToAction;
