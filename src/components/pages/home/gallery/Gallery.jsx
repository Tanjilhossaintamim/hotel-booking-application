import ContentWrapper from "../../../contentwrapper/ContentWrapper";
import "./gallery.scss";

const Gallery = () => {
  return (
    <div className="gallerywapper">
      <ContentWrapper>
        <div className="heading">
          <h1>Our Gallery</h1>
          <div className="border"></div>
        </div>
        <div className="gallery">
          <div>
            <img src="/gallery/g1.jpg" alt="" />
          </div>
          <div>
            <img src="/gallery/g2.jpg" alt="" />
          </div>
          <div>
            <img src="/gallery/g3.jpg" alt="" />
          </div>
          <div>
            <img src="/gallery/g4.jpg" alt="" />
          </div>
          <div>
            <img src="/gallery/g5.jpg" alt="" />
          </div>
          <div>
            <img src="/gallery/g6.jpg" alt="" />
          </div>
          <div>
            <img src="/gallery/g7.jpg" alt="" />
          </div>
          <div>
            <img src="/gallery/g8.jpg" alt="" />
          </div>
        </div>
      </ContentWrapper>
    </div>
  );
};

export default Gallery;
