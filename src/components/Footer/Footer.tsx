import { Link } from "react-router-dom";
import "../../styles/footer.scss";
function Footer() {
  return (
    <footer className="footer">
      <div className="logo">
        <Link to="/">
          <img
            alt="stuff"
            src="https://raw.githubusercontent.com/tamkovich-yana/stuff/2afc0e21d8f155454113405912fe0653d6f9628d/src/images/logo.svg"
          />
        </Link>
      </div>
      <div className="rights">
        Developed by
        <a href="google.com" target="_blank" rel="norefferrer">
          Stratoslav
        </a>
      </div>
      <div className="socials">
        <a href="google.com" target="_blank" rel="norefferrer">
          <svg className="icon-cart">
            <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#instagram`} />
          </svg>
        </a>
        <a href="google.com" target="_blank" rel="norefferrer">
          <svg className="icon-cart">
            <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#facebook`} />
          </svg>
        </a>
        <a href="google.com" target="_blank" rel="norefferrer">
          <svg className="icon-cart">
            <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#youtube`} />
          </svg>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
