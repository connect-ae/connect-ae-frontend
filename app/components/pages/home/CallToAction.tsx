import { NAVIGATION_LINKS } from "@/app/config/routes";
import Section from "../../layout/Section";
import Button from "../../ui/Button";

const CallToAction = () => {
  return (
    <Section>
      <div className="bg-dark py-12 px-8 md:py-20 md:px-16 rounded-2xl">
        <div className="mx-auto text-center lg:text-left md:mx-0 md:max-w-3xl">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
            You bring the vision. We’ll bring the clicks.
          </h2>
          <p className="mt-6 text-base sm:text-lg text-gray-300 leading-relaxed max-w-lg">
            Share your tech-related business ideas with us. We'll support you
            transform your dreams into reality!
          </p>

          <div className="mt-8 flex justify-center lg:justify-start">
            <Button
              link={NAVIGATION_LINKS?.contact}
              size="large"
              label="Let’s connect."
            />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default CallToAction;
