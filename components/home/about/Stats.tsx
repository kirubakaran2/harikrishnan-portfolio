import styles from "./stats.module.scss";
import { AiFillCode, AiFillSmile } from "react-icons/ai";
import { Reveal } from "@/components/utils/Reveal";

export const Stats = () => {
  return (
    <div className={styles.stats}>
      <Reveal>
        <div className={styles.statColumn}>
          <h4>
            <AiFillCode size="2.4rem" color="var(--brand)" />
            <span>Skills</span>
          </h4>
          <div className={styles.statGrid}>
            <span className="chip">Core Java</span>
            <span className="chip">Embedded C</span>
            <span className="chip">HTML</span>
            <span className="chip">CSS</span>
            <span className="chip">Python for IoT</span>
            <span className="chip">C language</span>
            <span className="chip">SQL</span>
            <span className="chip">GitHub</span>
          </div>
        </div>
      </Reveal>
      <Reveal>
        <div className={styles.statColumn}>
          <h4>
            <AiFillSmile size="2.4rem" color="var(--brand)" />
            <span>Learning</span>
          </h4>
          <div className={styles.statGrid}>
            <span className="chip">PCB designing</span>
            <span className="chip">AOT</span>
            <span className="chip">Machine learing</span>
            <span className="chip">AWS IoT</span>
            <span className="chip">3D Printing</span>
          </div>
        </div>
      </Reveal>
    </div>
  );
};
