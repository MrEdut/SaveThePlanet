const faqNav = document.querySelectorAll("#faq");
const home = document.querySelector("#home");
const accordionList = document.querySelectorAll(".faqItemContainer");
const faqImages = document.querySelectorAll(".reflectionContainer img");

function accordion(element) {
  element.forEach((event) => {
    event.addEventListener("click", () => {
      if (event.classList.contains("active")) {
        event.classList.remove("active");
      } else {
        element.forEach((event) => event.classList.remove("active"));

        console.log(event);
        event.classList.toggle("active");
      }
    });
  });
}

function smoothScrolling(element, positon) {
  element.addEventListener("click", (event) => {
    event.preventDefault();
    window.scrollTo({
      top: positon, // posição vertical
      left: 0, // posição horizontal (opcional)
      behavior: "smooth",
      block: "start", // animação suave
    });
  });
}

function slider(elementArray) {
  let current = 0;

  elementArray.forEach((el) => (el.style.opacity = 0));

  elementArray[current].style.opacity = 1;

  setInterval(() => {
    elementArray[current].style.opacity = 0;
    current = (current + 1) % elementArray.length;
    elementArray[current].style.opacity = 1;
  }, 5000);
}

faqNav.forEach((element) => {
  smoothScrolling(element, 896);
});
smoothScrolling(home, 0);
accordion(accordionList);

slider(faqImages);
