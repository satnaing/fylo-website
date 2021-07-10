/* ========== Scroll Reveal Animation ========== */
const sr = ScrollReveal({
  origin: "top",
  distance: "30px",
  duration: 1800,
  reset: true,
});

sr.reveal(
  ".img__container, .intro__title, .intro__paragraph, .single__feature",
  {
    origin: "top",
    interval: 300,
  }
);

sr.reveal(".img__container", { origin: "top", scale: "0.75" });

sr.reveal(".card", { origin: "top", delay: "300", interval: "500" });

sr.reveal(".team__img__container", {
  origin: "left",
  distance: "100px",
  delay: "500",
});

sr.reveal(".team__data", {
  origin: "right",
  distance: "100px",
  delay: "200",
});
