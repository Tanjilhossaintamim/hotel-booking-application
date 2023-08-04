import ContentWrapper from "../contentwrapper/ContentWrapper";
import FooterLink from "./FooterLink";
import {
  BiLogoFacebook,
  BiLogoInstagram,
  BiLogoLinkedin,
} from "react-icons/bi";
import { AiOutlineTwitter } from "react-icons/ai";
import "./footer.scss";

const Footer = () => {
  return (
    <div className="footerwrapper">
      <ContentWrapper>
        <div className="footer">
          <div className="about">
            <h6>About</h6>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat
              quos rem ullam, placeat amet.
            </p>
            <button>Read More</button>
          </div>
          <FooterLink
            heading={"Quick Menu"}
            link1={"About"}
            link2={"Services"}
            link3={"Approach"}
            link4={"Careers"}
            link5={"News"}
          />
          <FooterLink
            heading={"Ministries"}
            link1={"Children"}
            link2={"Women"}
            link3={"Bible Study"}
            link4={"Church"}
            link5={"Missionaries"}
          />
          <div className="socialicon">
            <h6>Social Icons</h6>
            <div className="icon" style={{ display: "flex" }}>
              <span>
                <BiLogoFacebook />
              </span>
              <span>
                <AiOutlineTwitter />
              </span>
              <span>
                <BiLogoLinkedin />
              </span>
              <span>
                <BiLogoInstagram />
              </span>
            </div>
          </div>
        </div>
      </ContentWrapper>
    </div>
  );
};

export default Footer;
