import React from "react";
import Heading from "../../ui/Heading";

type Props = {};

const About = (props: Props) => {
  return (
    <section className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <Heading text="About us" />
          <div className="space-y-3">
            <p className="text-gray-500 text-sm sm:text-base md:text-lg leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
              exercitationem impedit voluptate enim quis eos, voluptas quia
              magni delectus aliquid iusto quas nulla cupiditate ratione
              veritatis atque vero, eaque minus omnis voluptatibus deleniti
              ipsum aperiam nobis sequi! Quo, quisquam perferendis consequatur
              tempora tempore, quaerat veniam quas vel, nihil laborum quis est.
              Error quisquam, ducimus nihil quaerat pariatur eius beatae unde
              necessitatibus.
            </p>
            <p className="text-gray-500 text-sm sm:text-base md:text-lg leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
              exercitationem impedit voluptate enim quis eos, voluptas quia
              magni delectus aliquid iusto quas nulla cupiditate ratione
              veritatis atque vero, eaque minus omnis voluptatibus deleniti
              ipsum aperiam nobis sequi! Quo, quisquam perferendis consequatur
              tempora tempore, quaerat veniam quas vel, nihil laborum quis est.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
