import BaseComponent from "./base-component";
import rssIcon from "../assets/images/logo.jpg";
import githubIcon from "../assets/icons/github.svg";
import Link from "./link";
import { lng } from "../services/language";

const footerLinks = [
  { name: lng.rss, icon: rssIcon },
  { name: lng.github, icon: githubIcon, url: "https://github.com/alextrazah" },
];

class Footer extends BaseComponent {
  constructor() {
    const year = new BaseComponent("span.year");
    year.text = "Med Aziz Sahnoun";
    const links = footerLinks.map(
      ({ name, icon, url }) => new Link({ hint: name, url, icon })
    );
    super("footer");
    this.append(links[0], links[1]);
  }
}

const footer = new Footer();

export default footer;
