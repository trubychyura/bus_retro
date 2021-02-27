$(function () {
  const commonProps = {
    infinite: true,
    fade: true,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  $('.header__slider').slick({
    ...commonProps,
    prevArrow:
      ' <div class="slider-arrows slider-arrows_prev"><img src="img/arrows-prev.svg" alt="" class="slider-arrow__img" /></div>',
    nextArrow:
      '<div class="slider-arrows slider-arrows_next"><img src="img/arrows-next.svg" alt="" class="slider-arrow__img" /></div>',
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          fade: false,
        },
      },
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 2,
          fade: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          fade: false,
        },
      },
    ],
  });

  $('.gallery__box').slick({
    ...commonProps,
    mobileFirst: true,
    prevArrow:
      ' <div class="slider-arrows slider-arrows_prev"><img src="img/arrows-prev.svg" alt="" class="slider-arrow__img" /></div>',
    nextArrow:
      '<div class="slider-arrows slider-arrows_next"><img src="img/arrows-next.svg" alt="" class="slider-arrow__img" /></div>',
    responsive: [
      {
        breakpoint: 770,
        settings: 'unslick',
      },
    ],
  });

  $('.reviews__inner').slick({
    ...commonProps,
    mobileFirst: true,
    prevArrow:
      '<img class="reviews__slider-arrows reviews__slider-arrows_prev" src="img/review-arrow_prev.svg" />',
    nextArrow:
      '<img class="reviews__slider-arrows reviews__slider-arrows_next" src="img/review-arrow_next.svg" />',
    dots: true,
    dotsClass: 'slick-dots',
    responsive: [
      {
        breakpoint: 770,
        settings: 'unslick',
      },
    ],
  });

  $('.rent-rules__toggle').on('click', function () {
    const $this = $(this);
    const $content = $(this).prev('ol.rent-rules__list');
    let btnTextItem = $this.children('.rent-rules__toggle-text');
    let btnArrow = $this.children('.rent-rules__toggle-arrow');
    let btnText = btnTextItem.text();

    if (btnText == 'Развернуть') {
      btnText = 'Свернуть';
      $content.removeClass('rent-rules__list_hide rent-rules__list_lighten');
      $content.addClass('rent-rules__list_show');
    } else {
      btnText = 'Развернуть';
      $content.removeClass('rent-rules__list_show');
      $content.addClass('rent-rules__list_hide rent-rules__list_lighten');
    }

    btnArrow.toggleClass('rent-rules__toggle-arrow_active');
    btnTextItem.text(btnText);
  });

  new WOW().init();
});
