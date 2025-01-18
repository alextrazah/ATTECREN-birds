import { lang, lng } from '../services/language';
import BaseComponent from './base-component';
import hiddenBird from '../assets/images/hidden-bird.jpg';
import Player from './player';
import tnFlag from '../assets/images/tnFlag.png';

const NAME_ALIAS = '******';
const UNKNOWN_BIRD = 'Unknown bird';

class BirdCard extends BaseComponent {
  constructor(...data) {
    super('.bird-card.card');

    this.modal = this.createModal();
    this.image = new BaseComponent('img');
    this.image.element.style.cursor = 'pointer';

    const info = new BaseComponent('.info');
    this.commonName = new BaseComponent('h3.common-name');
    this.scientificName = new BaseComponent('span.scientific-name');
    this.player = new Player();

    info.append(this.commonName, this.scientificName, this.player);
    const infoWrapper = new BaseComponent('.info-wrapper');
    infoWrapper.append(this.image, info);

    this.desc = new BaseComponent('p.alimentation');
    this.alimentation = new BaseComponent('p.alimentation');
    this.species = new BaseComponent('p.description');
    this.lng = new BaseComponent('p.alimentation');
    this.span = new BaseComponent('p.alimentation');
    this.status = new BaseComponent('p.alimentation');

    this.setData(...data);
    this.append(
      infoWrapper,
      this.species,
      this.desc,
      this.alimentation,
      this.lng,
      this.span,
      this.status,
      this.modal, // Add modal to DOM
    );

    lang.change(() => this.render(), false);

    // Add event listener to image
    this.image.element.addEventListener('click', () => this.openModal());
  }

  createModal() {
    const modal = new BaseComponent('div.modal');
    modal.element.style.cssText = `
      display: none;
      position: fixed;
      z-index: 1000;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      overflow: auto;
      background-color: rgba(0, 0, 0, 0.8);
    `;

    const modalContent = new BaseComponent('div.modal-content');
    modalContent.element.style.cssText = `
      position: relative;
      margin: 10% auto;
      display: block;
      max-width: 80%;
      text-align: center;
    `;

    const modalImage = new BaseComponent('img');
    modalImage.element.style.cssText = `
      max-width: 100%;
      max-height: 80vh;
    `;

    // Close Icon
    const closeIcon = new BaseComponent('span.close-icon');
    closeIcon.element.style.cssText = `
      position: absolute;
      top: 10px;
      right: 15px;
      color: white;
      font-size: 30px;
      font-weight: bold;
      cursor: pointer;
      z-index: 1001;
    `;
    closeIcon.text = '×'; // Close symbol
    closeIcon.element.addEventListener('click', () => this.closeModal());

    modalContent.append(closeIcon, modalImage);
    modal.append(modalContent);

    modal.image = modalImage; // Store image reference for later updates
    return modal;
  }

  openModal() {
    const birds = lang.getText(lng.birdsData);
    const bird = birds[this.categoryIndex][this.birdIndex];
    const imageSrc = this.hidden ? hiddenBird : bird.image;

    this.modal.image.element.src = imageSrc; // Set modal image
    this.modal.element.style.display = 'block';

    // Preserve the current scroll position when opening the modal
    const scrollPosition = window.scrollY; // Get the current scroll position
    this.modal.element.style.top = `${scrollPosition}px`; // Set the modal's top position based on the current scroll

    // Optional: Add a smooth transition when opening the modal (if desired)
    this.modal.element.style.transition = 'top 0.3s ease'; // Smooth transition
  }

  closeModal() {
    this.modal.element.style.display = 'none';
  }

  setData(categoryIndex, birdIndex, options) {
    this.categoryIndex = categoryIndex || 0;
    this.birdIndex = birdIndex || 0;
    this.hidden = options && options.hidden;
    this.hideDescription = options && options.hideDescription;
    this.beforeAudio = options && options.beforeAudio ? options.beforeAudio : null;
    this.render();
  }

  render() {
    const birds = lang.getText(lng.birdsData);
    const bird = birds[this.categoryIndex][this.birdIndex];
    const { currentLanguage } = lang;
    const label0 = currentLanguage === 'en' ? 'Famille' : 'الفصيلة';
    const label1 = currentLanguage === 'en' ? 'Habitat' : 'الوسط المعيشي';
    const label2 = currentLanguage === 'en' ? 'Régime alimentaire' : 'النظام الغذائي';
    const label3 = currentLanguage === 'en' ? 'Longueur' : 'الطول';
    const label4 = currentLanguage === 'en' ? 'Envergure' : 'امتداد الجناحين';
    const label5 = currentLanguage === 'en' ? 'Situation actuelle ' : 'الوضعية الحالية ';

    if (currentLanguage !== 'en') {
      this.element.style.direction = 'rtl';
    } else {
      this.element.style.direction = 'ltr';
    }

    // Set image source
    this.image.element.src = this.hidden ? hiddenBird : bird.image;
    this.image.element.alt = this.hidden ? UNKNOWN_BIRD : bird.species;

    // Set common and scientific names
    console.log(bird.hasFlag);
    if (bird.hasFlag) {
      this.commonName.element.innerHTML = this.hidden
        ? NAME_ALIAS
        : `${bird.name} <img src="${tnFlag}" alt="French Flag" style="width: 20px; height: 15px; margin-left: 10px; vertical-align: middle;">`;
    } else {
      this.commonName.text = this.hidden ? NAME_ALIAS : bird.name;
    }
    this.scientificName.classList.toggle('hidden', this.hidden === true);
    this.scientificName.text = this.hidden ? NAME_ALIAS : bird.latinName;

    // Player configuration
    this.player.src = bird.audio;
    this.player.beforePlay(() => {
      if (this.beforeAudio) this.beforeAudio();
    });

    // Description and alimentation
    const hideDesc = this.hidden === true || this.hideDescription === true;
    this.desc.classList.toggle('hidden', hideDesc);
    this.species.classList.toggle('hidden', hideDesc);
    this.alimentation.classList.toggle('hidden', hideDesc);
    this.lng.classList.toggle('hidden', hideDesc);
    this.span.classList.toggle('hidden', hideDesc);
    this.status.classList.toggle('hidden', hideDesc);

    this.species.element.innerHTML = hideDesc
      ? NAME_ALIAS
      : `<span class="label">${label0} :</span> ${bird.species}`;

    this.desc.element.innerHTML = hideDesc
      ? NAME_ALIAS
      : `<span class="label">${label1}:</span> ${bird.description}`;

    this.alimentation.element.innerHTML = this.hidden
      ? NAME_ALIAS
      : `<span class="label">${label2}:</span> ${bird.alimentation}`;

    this.lng.element.innerHTML = this.hidden
      ? NAME_ALIAS
      : `<span class="label">${label3}:</span> ${bird.lng}`;

    this.span.element.innerHTML = this.hidden
      ? NAME_ALIAS
      : `<span class="label">${label4}:</span> ${bird.span}`;

    this.status.element.innerHTML = this.hidden
      ? NAME_ALIAS
      : `<span class="label">${label5}:</span> ${bird.status}`;
  }

  showNames() {
    this.hidden = false;
    this.render();
  }

  hideNames() {
    this.hidden = true;
    this.render();
  }

  stopAudio() {
    this.player.pause();
  }
}

export default BirdCard;
