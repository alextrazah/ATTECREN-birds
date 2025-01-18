import BaseComponent from '../components/base-component';
import BirdCard from '../components/bird-card';
import { lang, lng } from '../services/language';
import { EVENTS, PAGES, state } from '../services/state';
import Page from './page';

class LibraryPage extends Page {
  constructor() {
    super('library');
    this.wrapper = new BaseComponent('.library-wrapper');
    this.append(this.wrapper);

    // Pagination state
    this.itemsPerPage = 10; // Adjust this to the number of birds per page
    this.currentPage = 1;

    state.listen(EVENTS.beforePageChange, (pageIndex, newPageIndex) => {
      if (newPageIndex === PAGES.library.id) this.render();
      if (pageIndex === PAGES.library.id) this.pauseAllAudio();
    });
  }

  render() {
    if (this.birds) return;

    const birdsData = lang.getText(lng.birdsData);
    this.birds = [];
    birdsData.forEach((category, categoryIndex) => {
      category.forEach((_, birdIndex) => {
        this.birds.push(new BirdCard(
          categoryIndex,
          birdIndex,
          { beforeAudio: () => this.pauseAllAudio() },
        ));
      });
    });

    this.updatePage();
    this.createPaginationControls();
  }

  updatePage() {
    // Calculate the start and end indices for the current page
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    const birdsToShow = this.birds.slice(startIndex, endIndex);

    // Clear the current birds and append the selected page's birds
    this.wrapper.clear();
    this.wrapper.append(...birdsToShow);
  }

  createPaginationControls() {
    const paginationWrapper = new BaseComponent('.pagination-wrapper');
    this.append(paginationWrapper);

    // Previous button
    const prevButton = new BaseComponent('button');
    prevButton.text = lng === 'ru' ? 'الصفحة السابقة' : 'page précédente';
    prevButton.onclick(() => {
      if (this.currentPage > 1) {
        this.currentPage -= 1;
        this.updatePage(); // Re-render the page with the updated birds
        window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to top smoothly
      }
    });

    // Next button
    const nextButton = new BaseComponent('button');
    nextButton.text = lng === 'ru' ? 'الصفحة التالية' : 'page suivante';
    nextButton.onclick(() => {
      const totalPages = Math.ceil(this.birds.length / this.itemsPerPage);
      if (this.currentPage < totalPages) {
        this.currentPage += 1;
        this.updatePage(); // Re-render the page with the updated birds
        window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to top smoothly
      }
    });

    paginationWrapper.append(prevButton, nextButton);
  }

  pauseAllAudio() {
    this.birds.forEach((bird) => bird.player.pause());
  }
}

const libraryPage = new LibraryPage();

export default libraryPage;
