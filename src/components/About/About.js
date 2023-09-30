import React from "react";
import { stackList } from "../../data/ProjectData";
import {
  Image,
  Technologies,
  Tech,
  TechImg,
  TechName,
  ContactWrapper,
} from "./AboutElements";
import ScrollAnimation from "react-animate-on-scroll";
function About() {
  return (
    <ContactWrapper id="about">
      <div className="Container">
        <div className="SectionTitle">About Me</div>
        <div className="BigCard">
          <ScrollAnimation animateIn="fadeInLeft">
            <Image src="/man-svgrepo-com.svg" alt="man-svgrepo" />
          </ScrollAnimation>
          <div className="AboutBio">
            <ScrollAnimation animateIn="fadeInLeft">
              Hello! My name is <strong>Amandeep Singh</strong>. During my time
              here, I gained valuable experience through various entry-level
              positions, which greatly enhanced my work ethic, communication
              skills, and adaptability.
            </ScrollAnimation>

            <br/>
            <br/>

            <ScrollAnimation animateIn="fadeInLeft">
              My journey into the world of technology began with a strong
              passion for problem-solving. Despite the challenges, I remained
              determined and forged lasting friendships that supported me
              throughout this demanding program. Throughout my studies at <strong>DTU</strong>, I
              had the opportunity to engage in fascinating projects. Notably, I
              contributed to the development of the <strong>EverythingForCP</strong> and <strong>QuickTalks</strong>,
              projects that garnered recognition from my colleagues and
              instructors.
            </ScrollAnimation>

            <br />
            <br />

            <ScrollAnimation animateIn="fadeInLeft">
              Working collaboratively within a team towards a shared objective
              has been an incredibly rewarding and unique experience for me. I
              am eager to continue exploring exciting projects in the future,
              with a particular interest in web development and cross-platform
              mobile development.
              <div className="tagline2">
                I have become confident using the following technologies:
              </div>
            </ScrollAnimation>

            <Technologies>
              {stackList.map((stack, index) => (
                <ScrollAnimation animateIn="fadeInLeft" key={index}>
                  <Tech key={index} className="tech">
                    <TechImg src={stack.img} alt={stack.name} />
                    <TechName>{stack.name}</TechName>
                  </Tech>
                </ScrollAnimation>
              ))}
            </Technologies>
          </div>
        </div>
      </div>
    </ContactWrapper>
  );
}

export default About;
