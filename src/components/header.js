import BaseComponent from './base-component';
import LanguageSwitch from './language-switch';
import Menu from './menu';
import Score from './score';
import logoImage from '../assets/images/logoSmall.png'; // Path to your logo image

class Header extends BaseComponent {
  constructor() {
    const logo = new BaseComponent('img.logo');
    logo.element.src = logoImage; // Set the image source
    logo.element.alt = 'ATEECREN Logo'; // Accessibility alt text

    super('header');
    this.append(logo, new Score(), new Menu(), new LanguageSwitch());
  }
}

const header = new Header();

export default header;
