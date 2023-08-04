import "./singelfeature.scss";
const SingelFeature = ({ src, title }) => {
  return (
    <div className="singelfeature">
      <img src={src} alt="" />
      <h5>{title}</h5>
    </div>
  );
};

export default SingelFeature;
