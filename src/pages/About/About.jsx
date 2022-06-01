import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import styles from "./About.module.css";
import { ReactComponent as Youtube } from "../../assets/youtube-brands.svg";
import { ReactComponent as Facebook } from "../../assets/facebook-square-brands.svg";
import { ReactComponent as Instagram } from "../../assets/instagram-brands.svg";
import { ReactComponent as LinkedIn } from "../../assets/linkedin-brands.svg";
import { ReactComponent as Twitter } from "../../assets/twitter-square-brands.svg";

const About = () => {
  return (
    <div className={styles["page-container"]}>
      <NavBar />
      <div className={styles.header}>
        <div className={styles["header-blur"]} />
        <div className={styles["header-content"]}>
          <div className={styles["header-title"]}>
            <div className={styles.line}></div>
            ABOUT US
          </div>
          <div className={styles["header-subtitle"]}>
            {" "}
            Build for Sass <br /> and E-commerce{" "}
          </div>
          <div className={styles["header-text"]}>
            {" "}
            our tools are easy to set up and use with a user <br /> friendly
            dashboard that enables you to set up, <br /> launch, automate and
            manage multi-affiliate <br /> campaigns in 5 minutes.{" "}
          </div>
        </div>
      </div>
      <div className={styles.matricks}>
        <div className={styles["header-bottom"]}>
          Matricks was developed because just like <br /> you, we needed a
          produt that could give <br /> us <b>good value</b>
        </div>
      </div>
      <div className={styles.body}>
        <div className={styles.left}>
          <div className={styles.number}> 01</div>
          <div className={styles.top}>
            <div className={styles["number-border"]} />
            <div className={styles["left-title"]}>WHY US?</div>
          </div>
          <div className={styles.bottom}>
            <div className={styles["left-text"]}>
              {" "}
              We pride ourselves in out ability to innovate and <br /> create
              world-class tools that provide reliable and <br /> efficient
              touchpoints between advertisers and <br /> affiliates{" "}
            </div>
            <div className={styles["dotted-grid"]} />
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles["top-right"]}>
            <div className={styles.number}> 02</div>
            <div className={styles["top"]}>
              <div className={styles["number-border"]} />
              <div className={styles["left-title"]}>GROWING WITH YOU</div>
            </div>
          </div>
          <div className={styles["bottom-right"]}>
            <div className={styles["first-text"]}>
              {" "}
              Leveraging the best technology, we have developed an all-in-{" "}
              <br /> one affiliate marketing tracking software, a genius tool to
              help <br /> you track, automate and optimize your influencer
              campaigns, <br /> all from one dashboard{" "}
            </div>
            <div className={styles["second-text"]}>
              {" "}
              Our teams of experts are constantly brainstoriming, testing and{" "}
              <br /> developing new solutions with only one thing in mind - your{" "}
              <br /> business growth. Your success is out success and by giving
              you <br /> the tools you need to scale, we grow as well.{" "}
            </div>
          </div>
        </div>
      </div>
      <div className={styles.question}></div>
      <div className={styles.footer}>
        <div className={styles["socials-icon"]}>
          <Youtube
            className={styles.icon}
            height={20}
            width={20}
            fill="white"
          />
          <Facebook
            className={styles.icon}
            height={20}
            width={20}
            fill="white"
          />
          <LinkedIn
            className={styles.icon}
            height={20}
            width={20}
            fill="white"
          />
          <Instagram
            className={styles.icon}
            height={20}
            width={20}
            fill="white"
          />
          <Twitter
            className={styles.icon}
            height={20}
            width={20}
            fill="white"
          />
        </div>
        <div className={styles.links}>
          <p className={styles.link}>Terms of services</p>
          <p className={styles.link}>Privacy policy</p>
        </div>
        <div className={styles.copyright}>
          Copyright 2021 @ Peddle Technologies. All Rights Reserved.
        </div>
      </div>
    </div>
  );
};

export default About;
