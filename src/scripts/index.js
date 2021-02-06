import "regenerator-runtime/runtime";

function wait(ms) {
  return new Promise((res) => setTimeout(res, ms));
}

function nextFrame() {
  return new Promise((res) => requestAnimationFrame(res));
}

(function () {
  document.querySelectorAll('[class*="from:"]').forEach(async (el) => {
    const [, , value] = el.className.match(/(from:)([^\s]+)/);

    el.className = el.className.replace(/from:/, "");

    await nextFrame();

    el.className = el.className.replace(value, "");
  });
})();

(function () {
  document.querySelectorAll("a.animate-header").forEach((el) => {
    el.addEventListener("click", async (evt) => {
      evt.preventDefault();

      document
        .querySelector("header > div.transition-transform")
        .classList.add("-translate-y-full");

      await wait(1000);

      window.location = el.href;
    });
  });
})();

(function () {
  const scrollToTop = document.querySelector("#scroll-to-top");

  scrollToTop.addEventListener("click", () =>
    window.scrollTo({ top: 0, behavior: "smooth" })
  );

  const observer = new IntersectionObserver((entries) => {
    const attach = entries[0].boundingClientRect.y < 0;

    scrollToTop.classList.toggle("opacity-0", !attach);
    scrollToTop.classList.toggle("opacity-100", attach);
  });

  observer.observe(document.querySelector("#show-scroll-to-top"));
})();
