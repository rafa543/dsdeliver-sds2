import './styles.css';
import { ReactComponent as InstagramIcon } from './instagram.svg';
import { ReactComponent as LinkedinIcon } from './linkedin.svg';
import { ReactComponent as YoutubeIcon } from './youtube.svg';

function Footer() {
  return (
    <footer className="main-footer">
      App desenvolvido durante a 2ª ed. do evento Semana DevSuperior
      <div className="footer-icons">
        <a href="teste" target="_new">
          <InstagramIcon />
        </a>
        <a href="linkedin">
          <LinkedinIcon />
        </a>
        <a href="instagram" target="_new">
          <YoutubeIcon />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
