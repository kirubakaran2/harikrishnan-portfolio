import { MyLinks } from "@/components/nav/components/MyLinks";
import { Reveal } from "@/components/utils/Reveal";
import { SectionHeader } from "@/components/utils/SectionHeader";
import styles from "./about.module.scss";
import { Stats } from "./Stats";
import { AiOutlineArrowRight } from "react-icons/ai";

export const About = () => {
  return (
    <section id="about" className="section-wrapper">
      <SectionHeader title="About" dir="l" />
      <div className={styles.about}>
        <div>
          <Reveal>
            <p className={`${styles.aboutText} ${styles.highlightFirstLetter}`}>
              How are you? I'm Harikrishnan, an award-winning IoT specialist and freelancer. With extensive experience in IoT, embedded systems,   driving technological innovation and creating impactful solutions globally. My expertise includes advanced IoT solutions, sensor integration, and sustainable technology development.
              <br />
              <br />
              With over 150 completed projects, I have a proven track record in IoT and embedded systems. My work includes developing advanced IoT solutions that optimize performance by 95%. I have led workshops, sharing hands-on experience and practical insights with students.
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
            I excel in using Arduino IDE, ESP8266, sensors, actuators, Python, and AWS IoT for IoT solutions. My expertise extends to Raspberry Pi, ESP32, Blynk console, and real-time communication. I specialize in creating high-performance, integrated systems.
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
            I enjoy repairing and enhancing hardware and electronics, with a passion for DIY projects. My interests include robotics, home automation, and 3D printing. I believe in maintaining a healthy work-life balance and constantly seek new tech challenges.
            </p>
          </Reveal>
          <Reveal>
            <div className={styles.links}>
              <div className={styles.linksText}>
                <span>My links</span>
                <AiOutlineArrowRight />
              </div>
              <MyLinks />
            </div>
          </Reveal>
        </div>
        <Stats />
      </div>
    </section>
  );
};
