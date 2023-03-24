import $ from "jquery";

export const scrollTo = (target, offset = 0) => {
  const timeScroll = 500;
  const offsetNav = $("#nav").height(); //$("#navigation").height();
  $("html, body").animate(
    {
      scrollTop: $("#" + target).offset().top - offsetNav - offset,
    },
    timeScroll
  );

  //On affiche la navigation après un scroll
  setTimeout(() => {
  }, timeScroll + 100);
};
