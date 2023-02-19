// @ts-ignore
import Page from '@/modules/Page/Page.ts';
import Swiper, { Navigation, A11y } from 'swiper';
import 'swiper/scss';
// @ts-ignore
import userStore from '@/modules/Store/UserStore.ts';

export default class ExplorePage extends Page {
  readonly swiperSelector: string = '.exploreLastAddedSection__swiper';

  readonly swiperNavButtonPrevSelector: string = '.exploreLastAddedSection__navButton--prev';

  readonly swiperNavButtonNextSelector: string = '.exploreLastAddedSection__navButton--next';

  // eslint-disable-next-line class-methods-use-this
  public init(): void {
    super.init();

    // Setup Swiper slider
    this.setupSwiper();
  }

  /**
   * Render method for explore page
   * @returns {string} rendered template
   */
  public render(): string {
    const allRecipes: string[] = [];
    for (let i = 0; i < 20; i += 1) {
      allRecipes.push(`Example Recipe #${i + 1}`);
    }

    return super.render({
      lastAddedRecipes: allRecipes.slice(0, 5),
      recipes: allRecipes,
      isLoggedIn: userStore.isLoggedIn,
    });
  }

  /**
   * Create Swiper instance
   */
  private setupSwiper(): void {
    // eslint-disable-next-line no-unused-vars
    const swiperObj = new Swiper(this.swiperSelector, {
      modules: [Navigation, A11y],
      direction: 'horizontal',
      slidesPerView: 'auto',
      centeredSlides: true,
      spaceBetween: 17,
      loop: true,
      a11y: {
        prevSlideMessage: 'Previous slide',
        nextSlideMessage: 'Next slide',
      },
      keyboard: {
        enabled: true,
        onlyInViewport: false,
      },
      navigation: {
        nextEl: this.swiperNavButtonNextSelector,
        prevEl: this.swiperNavButtonPrevSelector,
      },
      breakpoints: {
        1700: {
          spaceBetween: 24,
        },
      },
    });
  }
}
