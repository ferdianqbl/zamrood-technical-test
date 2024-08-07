import ExperienceCard from "./experience-card";
import ExperiencesData from "./experience-content.json";
const Experience = () => {
  return (
    <div className="container">
      <h3 className="font-signature text-6xl text-center text-primary-400">
        Beyond Premium
      </h3>
      <p className="text-center text-3xl text-primary-500 font-bold font-unbounded">
        ELEVATE YOUR EXPERIENCE
      </p>

      <div className="flex flex-col lg:flex-row items-center gap-3 mt-16">
        {ExperiencesData.map((experience, index) => (
          <ExperienceCard
            key={index + experience.title}
            icon={experience.icon}
            title={experience.title}
            description={experience.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Experience;
