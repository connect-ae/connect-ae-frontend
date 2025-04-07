import { TEAM_DATA } from "@/app/config/constant";
import TeamCard from "../../feedback/TeamCard";
import Heading from "../../ui/Heading";
import Section from "../../layout/Section";

const Team = () => {
  return (
    <Section>
      <Heading
        text="Meet Our Team"
        description="Our diverse team is united by a common goal — excellence."
      />

      <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-10">
        {TEAM_DATA.map((member, index) => (
          <TeamCard
            key={index}
            name={member.name}
            role={member.role}
            image={member.image}
          />
        ))}
      </div>
    </Section>
  );
};

export default Team;
