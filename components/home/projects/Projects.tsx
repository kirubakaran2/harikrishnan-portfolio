import { SectionHeader } from "@/components/utils/SectionHeader";
import { Project } from "./Project";
import styles from "./projects.module.scss";

export const Projects = () => {
  return (
    <section className="section-wrapper" id="projects">
      <SectionHeader title="Projects" dir="r" />

      <div className={styles.projects}>
        {projects.map((project) => {
          return <Project key={project.title} {...project} />;
        })}
      </div>
    </section>
  );
};

const projects = [
  {
    title: "ECO-Flow",
    imgSrc: "/project-imgs/ECO-Flow.jpg",
    code: "https://github.com/HariHK22/Ecoflow.git",
    projectLink: "https://github.com/HariHK22/Ecoflow.git",
    tech: ["ESP8266", "Embedded C", "Blynk Cloud"],
    description: "Prototype",
    modalContent: (
      <>
        <p>
        EcoFlow revolutionizes public bathroom infrastructure by integrating smart sensors, water management systems, and disinfection technology. This innovative solution aims to mitigate water wastage, reduce energy consumption, and enhance hygiene standards in public restrooms. By detecting user presence, optimizing resource usage, and deploying fog-based disinfection, EcoFlow ensures a sustainable and hygienic environment. With its environmental and social benefits, EcoFlow represents a significant step towards promoting sustainability and improving public health.
          <br/>
      </p>
      </>
    ),
  },
  {
    title: "IND - MUMB",
    imgSrc: "/project-imgs/MUMB.jpg",
    code: "https://github.com/HariHK22/IND---MUMB.git",
    projectLink: "https://github.com/HariHK22/IND---MUMB.git",
    tech: [
      "Rashberry pi","ESP8266","ESP32 cam", "Embedded C", "Blynk Cloud",
    ],
    description: " The Multi-Utility Mechatronics Bot",
    modalContent: (
      <>
        <p>
           The Multi-Utility Mechatronics Bot, designed for COVID-19 pandemic scenarios, integrates with a mobile app for video and audio communication between doctors and patients. It facilitates remote medical consultations, delivers medicines and essentials, and ensures sanitization of surroundings. With capabilities for mining research and rescue missions, and the ability to navigate and claim staircases, it serves as a versatile tool for diverse industries and emergency situations.
        </p>
      </>
    ),
  },
  {
    title: "Health Guardian",
    imgSrc: "/project-imgs/Health.jpg",
    code: "https://github.com/HariHK22/Health-Guardian.git",
    projectLink: "https://github.com/HariHK22/Health-Guardian.git",
    tech: ["ESP8266", "I2c OLED",  "Sensor integration", "Actuator control","IoT Cloud"],
    description: " Smart Health Monitoring and Emergency Alert System",
    modalContent: (
      <>
        <p>
        This innovative IoT project integrates a comprehensive health monitoring system capable of calculating SpO2, contactless temperature, and heart pulse, with added features of urination and defecation detection. The system includes gesture-based SOS alerts for emergencies, ensuring prompt assistance. All health data is displayed on an OLED screen and can be accessed globally, promoting proactive health management and swift emergency response.
        </p>
      </>
    ),
  },
  
  
  
  {
    title: "Smart Agricultural Protection and Monitoring System",
    imgSrc: "/project-imgs/eagri.jpeg",
    code: "https://github.com/HariHK22/Eagri.git",
    projectLink: "https://github.com/HariHK22/Eagri.git",
    tech: ["ESP32", "Bylnk mobile app", "Sensor integration", "Actuator control"],
    description: "Agriculture project prototype",
    modalContent: (
      <>
        <p>
        An agricultural project to prevent animals and birds from electric shock involved building an alert sound system to scare off the animals and birds. It also provided a small amount of food and water to protect our large investment in plant cultivation from the animals and birds based on their numbers. Additionally, we created an IoT app to adjust the post height while growing maize plants, allowing us to monitor the temperature, humidity, and plant temperature using solar electricity.
        </p>
      </>
    ),
  },
];
