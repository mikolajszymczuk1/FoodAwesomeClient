// @ts-ignore
import Page from '@/modules/Page/Page.ts';
// @ts-ignore
import NavigationBar from '@/modules/Navigation/Navigation.ts';
import Swiper, { Navigation, A11y } from 'swiper';

import 'swiper/scss';

export default class ExplorePage extends Page {
  readonly swiperSelector: string = '.exploreLastAddedSection__swiper';

  readonly swiperNavButtonPrevSelector: string = '.exploreLastAddedSection__navButton--prev';

  readonly swiperNavButtonNextSelector: string = '.exploreLastAddedSection__navButton--next';

  // eslint-disable-next-line class-methods-use-this
  public init(): void {
    // Init Navigation
    const navigation = new NavigationBar();
    navigation.init();

    // Setup Swiper slider
    this.setupSwiper();
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
      spaceBetween: 15,
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
        768: {
          spaceBetween: 30,
        },
      },
    });
  }
}
