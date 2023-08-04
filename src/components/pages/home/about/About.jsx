import "./about.scss";
import ContentWrapper from "../../../contentwrapper/ContentWrapper";

const About = () => {
  return (
    <div className="aboutwrapper">
      <ContentWrapper>
        <div className="about">
          <div className="aboutImg">
            <img src="images/double1.jpg" alt="" className="firtimg"/>
            <img src="images/singel1.jpg" alt="" />
          </div>
          <div className="aboutdes">
            <div className="alltext">
              <h1>About Us</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aspernatur illum aperiam temporibus cumque! Voluptatibus ipsam
                nemo laborum eaque vel dignissimos optio facilis et voluptatem
                ullam mollitia, officia praesentium! At, amet?
              </p>
              <button>Watch More</button>
            </div>
          </div>
        </div>
      </ContentWrapper>
    </div>
  );
};

export default About;
