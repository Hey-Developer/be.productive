import React from "react";
import {
  ContentSection,
  HeroBg,
  HeroWrapper,
  IconWrapper,
  LogoWrapper,
  TabBtn,
} from "./hero.styles.tw";
import asideBg from "../../assets/asideBG.svg";
import logo from "../../assets/logo.svg";

// Font Awesome Imports
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Library Creation
library.add(fas, fab);

const Hero = ({ setTabValue }) => {
  return (
    <HeroWrapper>
      <LogoWrapper>
        <img src={logo} alt="logo" />
      </LogoWrapper>
      <ContentSection>
        <h1>
          Be. <br />
          <span>Productive</span>
        </h1>
        <p>
          A more simple approach to <span>be.productive</span> all your work at
          one place, i.e{" "}
          <span>create markup as well as manage your todo's</span>.
        </p>

        <article>
          <TabBtn active={true} onClick={() => setTabValue(0)}>
            MockUp
          </TabBtn>
          &nbsp;
          <span>+</span>
          &nbsp;
          <TabBtn active={false} onClick={() => setTabValue(1)}>
            ToDo
          </TabBtn>
        </article>
      </ContentSection>
      <HeroBg src={asideBg} alt="HeroBg" />
      <div className="flex m-10">
        <IconWrapper href="#">
          <FontAwesomeIcon icon={["fab", "github"]} />
        </IconWrapper>
        <IconWrapper href="#">
          <FontAwesomeIcon icon={["fab", "linkedin"]} />
        </IconWrapper>
      </div>
    </HeroWrapper>
  );
};

export default React.memo(Hero);
