function navslide() {
    let burger = document.querySelector(".burger");
    let navlinks = document.querySelector(".navlinks");
  
    burger.addEventListener("click", () => {
      burger.classList.toggle("active");
      navlinks.classList.toggle("active");
    });
  }
  navslide();
  
  function bar() {
    const rangeInput = document.getElementById("myRange");
    const circle = document.querySelector(".circle");
    const percentageText = document.querySelector(".percentage");
  
    rangeInput.addEventListener("input", function () {
      const value = this.value;
      const percent = `${value}%`;
  
      percentageText.textContent = percent;
  
      circle.style.setProperty("--angle", `calc(${value} * 3.6deg)`);
    });
  }
  bar();
  



  function faqs(){
  const toggles = document.querySelectorAll(".faq-toggle");
  
  toggles.forEach((toggle) => {
    toggle.addEventListener("click", () => {
      toggle.parentNode.classList.toggle("active");
    });
  });
}
faqs()