import { SectionHeader } from "@/components/utils/SectionHeader";
import { ExperienceItem } from "./ExperienceItem";

export const Experience = () => {
  return (
    <section className="section-wrapper" id="experience">
      <SectionHeader title="Experience." dir="l" />
      {experience.map((item) => (
        <ExperienceItem key={item.title} {...item} />
      ))}
    </section>
  );
};

const experience = [
  {
    title: "Freelancer",
    position: "IoT and Embedded",
    time: "Mar 2019 - Present",
    location: "CPuducherry, India",
    description:
      "Elevated IoT & Embedded project performance by 100% through expertise gained from developing over 100+ projects as a freelancer.",
    tech: [
     
    ],
  },
  {
    title: "IOT INTERNSHIP",
    position: "Intern",
    time: "May 30th - June 29th, 2024",
    location: "",
    description:
      "Achieved significant skill enhancement and in-depth IoT knowledge through hands-on experience during a one-month internship at NoviTech R&D Private Limited.",
    tech: [
    ],
  },

  {
    title: "WORKSHOP FOR HR. SEC STUDENTS",
    position: "Workshop Leader",
    time: "Jan - Feb 2023 ",
    location: "Karaikal, India",
    description:
      "Better project outcomes by 80% via an interactive IoT and embedded systems workshop for students, offering hands-on experience and practical insights",
    tech: [
    ],
  },
];
