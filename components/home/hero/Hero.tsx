import Image from "next/image";
import { motion } from "framer-motion";
import { StandardButton } from "@/components/buttons/StandardButton";
import { Reveal } from "@/components/utils/Reveal";
import { DotGrid } from "./DotGrid";
import styles from "./hero.module.scss";
import Profile from "@/public/jb.jpg";

export const Hero = () => {
  return (
    <section className={`section-wrapper ${styles.hero}`}>
      <div style={{ pointerEvents: "none" }} className={styles.heroGrid}>
        <div className={styles.copyWrapper}>
          <Reveal>
            <h1 className={styles.title}>
              Hello, <br />
              I'm Harikrishnan<span>.</span>
            </h1>
          </Reveal>
          <Reveal>
            <h2 className={styles.subTitle}>
            Am <span>IoT and Embedded Developer</span>
            </h2>
          </Reveal>
          <Reveal>
            <p className={styles.aboutCopy}>
            I've spent the last year developing and scaling IoT and embedded systems projects for individuals. I also create innovative personal projects in my free time. Let's connect!
            </p>
          </Reveal>
          <Reveal>
            <StandardButton
              onClick={() =>
                document.getElementById("contact")?.scrollIntoView()
              }
            >
              Contact me
            </StandardButton>
          </Reveal>
        </div>
        <motion.div
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          style={{ pointerEvents: "auto" }}
        >
          <Image
            className={styles.profile}
            src={Profile}
            priority
            alt="IoT and Embedded Developer"
            width={200}
            height={300}
          />
        </motion.div>
      </div>
      <DotGrid />
    </section>
  );
};
