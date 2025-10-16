const faqNav = document.querySelectorAll("#faq");
const faqSection = document.querySelector(".faq");
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

function smoothScrolling(element, elementoTopo) {
  element.addEventListener("click", (event) => {
    event.preventDefault();
    window.scrollTo({
      top: elementoTopo.getBoundingClientRect().top - 20,
      left: 0,
      behavior: "smooth",
      block: "start",
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
  smoothScrolling(element, faqSection);
});
smoothScrolling(home);
accordion(accordionList);

slider(faqImages);
