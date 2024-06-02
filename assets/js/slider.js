var getSlideActiveIndex, slide, getSlideCaptionText, getSlideCreditText;

var imageGallerySlider = new Swiper(".imageGallerySlider", {
  direction: "horizontal",
  loop: true,
  noSwiping: true,
  on: {
    init: function () {
      getSlideActiveIndex = this.activeIndex; //start from 1
      slide = this.slides[getSlideActiveIndex];
      getSlideCaptionText = $(slide).find("span.slideCaptionText").text();
      getSlideCreditText = $(slide).find("span.slideCreditText").text();
      updateSlideProfile(getSlideCaptionText, getSlideCreditText);
    },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".imageGallerySwiperPagination",
  },
});

imageGallerySlider.on("slideChange", function () {
  getSlideActiveIndex = this.activeIndex; //start from 1
  slide = this.slides[getSlideActiveIndex];
  getSlideCaptionText = jQuery(slide).find("span.slideCaptionText").text();
  getSlideCreditText = jQuery(slide).find("span.slideCreditText").text();
  updateSlideProfile(getSlideCaptionText, getSlideCreditText);
});

function updateSlideProfile(captionText, creditText) {
  jQuery(".caption-box .caption-text").text(captionText);
  jQuery(".photo-credit").text(creditText);
}

jQuery(".caption-icon").click(function () {
  if (!$(this).parent().hasClass("close")) {
    jQuery(this)
      .parent()
      .animate(
        {
          width: "100%",
        },
        500,
        function () {
          jQuery(".caption-text").css("display", "inline");
        }
      );
    jQuery(this).parent().addClass("close");
  } else {
    jQuery(".caption-text").css("display", "none");
    jQuery(this).parent().animate(
      {
        width: "40px",
      },
      500
    );
    jQuery(this).parent().removeClass("close");
  }
});
