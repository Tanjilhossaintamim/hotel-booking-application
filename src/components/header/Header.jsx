import "./header.scss";
import ContentWrapper from "../contentwrapper/ContentWrapper";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { AiOutlineCaretDown } from "react-icons/ai";
import { clearLoginErrorMessage, logout } from "../../store/loginSlice";
import { removeSignupError } from "../../store/signupSlice";
import { AiOutlineMenu } from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";

const Header = () => {
  const dispatch = useDispatch();
  const [mobileNavclass, setMobileNavclass] = useState("");
  const { catagories } = useSelector((state) => state.home);
  const { token } = useSelector((state) => state.login);
  const [navClass, setNavClass] = useState("");
  const loaction = useLocation();
  const navigate = useNavigate();
  const userLogout = () => {
    dispatch(logout());
  };
  const showNavbar = () => {
    setMobileNavclass("showmoblemenu");
  };
  const closeNavbar = () => {
    setMobileNavclass("");
  };

  const handelNavbar = () => {
    if (window.scrollY > 5) {
      setNavClass("hoverHeader");
    } else {
      setNavClass("");
    }
  };

  window.addEventListener("scroll", handelNavbar);
  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(removeSignupError());
    dispatch(clearLoginErrorMessage());
  }, [loaction]);

  return (
    <div className={`header ${navClass}`}>
      <ContentWrapper>
        <div className="navbar">
          <div className="logo" onClick={() => navigate("/")}>
            Seagull
          </div>
          {/* for mobile */}
          <div className="hamburger" onClick={showNavbar}>
            <AiOutlineMenu />
          </div>
          {/* ..... */}
          <div className="navlink">
            <ul className="navitems">
              <li className="navitem">
                <NavLink to={"/"}>Home</NavLink>
              </li>
              <li className="navitem dropdowncontainer">
                <NavLink to={"/"}>
                  Rooms <AiOutlineCaretDown />
                </NavLink>
                <div className="dropdown">
                  <ul>
                    {catagories?.map((item) => {
                      return (
                        <li key={item.id}>
                          <NavLink
                            to={`/catagory/${item.name
                              .split(" ")
                              .join("")
                              .toLowerCase()}/${item.id}`}
                          >
                            {item.name}
                          </NavLink>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </li>
              <li className="navitem">
                <NavLink to={"/"}>About</NavLink>
              </li>
              <li className="navitem">
                <NavLink to={"/"}>Contact</NavLink>
              </li>
              <li>
                {token ? (
                  <button className="logoutbtn" onClick={() => userLogout()}>
                    Logout
                  </button>
                ) : (
                  <button
                    className="loginbtn"
                    onClick={() => navigate("/login")}
                  >
                    Login
                  </button>
                )}
              </li>
            </ul>
          </div>
        </div>

        {/* mobile menu  */}
      </ContentWrapper>
      <div className={`mobilemenu ${mobileNavclass}`}>
        <span onClick={closeNavbar}>
          <RxCross1 />
        </span>
        <ul>
          <li>
            <NavLink to={"/"} onClick={closeNavbar}>
              Home
            </NavLink>
          </li>
          <li className="navitem">
            <NavLink to={"/"} onClick={closeNavbar}>Rooms</NavLink>
          </li>
          <li className="navitem">
            <NavLink to={"/"} onClick={closeNavbar}>About</NavLink>
          </li>
          <li className="navitem">
            <NavLink to={"/"} onClick={closeNavbar}>Contact</NavLink>
          </li>
          <li>
            {token ? (
              <button className="logoutbtn" onClick={() => {
                userLogout()
                closeNavbar()
                }}>
                Logout
              </button>
            ) : (
              <button className="loginbtn" onClick={() => {
                navigate("/login")
                closeNavbar()
                }}>
                Login
              </button>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
