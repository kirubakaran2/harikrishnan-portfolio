import { Reveal } from "@/components/utils/Reveal";
import styles from "./contact.module.scss";
import { AiFillMail } from "react-icons/ai";
import Link from "next/link";

export const Contact = () => {
  return (
    <section className="section-wrapper" id="contact">
      <div className={styles.contactWrapper}>
        <Reveal width="100%">
          <h4 className={styles.contactTitle}>
            Contact<span>.</span>
          </h4>
        </Reveal>
        <Reveal width="100%">
          <p className={styles.contactCopy}>
          Do you have any ideas to discuss? Send me an email if you want to connect! You can also find me on{" "}
            <Link
              href="https://www.linkedin.com/in/harikrishnan-m-aa31a724a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app "
              target="_blank"
              rel="nofollow"
            >
              Linkedin
            </Link>{" "}
            or{" "}
            <Link
              href="https://github.com/HariHK22"
              target="_blank"
              rel="nofollow"
            >
              Github
            </Link>{" "}
            .
          </p>
        </Reveal>
        <Reveal width="100%">
          <Link href="mailto:harikrishnanhk2293@gmail.com">
            <div className={styles.contactEmail}>
              <AiFillMail size="2.4rem" />
              <span>Send email</span>
            </div>
          </Link>
        </Reveal>
      </div>
    </section>
  );
};
