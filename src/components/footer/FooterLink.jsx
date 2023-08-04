import { useNavigate } from "react-router-dom";

const FooterLink = ({ heading, link1, link2, link3, link4, link5 }) => {
  const navigate = useNavigate();
  const goToPage = (link) => {
    const slink = link.split(" ").join("").toLowerCase();
    navigate(`/${slink}`);
  };
  return (
    <div className="linkfooter">
      <h6>{heading}</h6>
      <p onClick={() => goToPage(link1)}>{link1}</p>
      <p onClick={() => goToPage(link2)}>{link2}</p>
      <p onClick={() => goToPage(link3)}>{link3}</p>
      <p onClick={() => goToPage(link4)}>{link4}</p>
      <p onClick={() => goToPage(link5)}>{link5}</p>
    </div>
  );
};

export default FooterLink;
