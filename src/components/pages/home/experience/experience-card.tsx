import Image from "next/image";
import { FC } from "react";

type Props = {
  icon: string;
  title: string;
  description: string;
};

const ExperienceCard: FC<Props> = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col items-center">
      <Image src={icon} alt={title} width={100} height={100} />
      <p className="text-center mt-4 text-uppercase text-primary-400 font-semibold text-xl">
        {title}
      </p>
      <p className="text-center">{description}</p>
    </div>
  );
};

export default ExperienceCard;
