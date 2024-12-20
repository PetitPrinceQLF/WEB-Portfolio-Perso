'use strict';



// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }



// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });

// modal variable
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");


// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const filterBtns = document.querySelectorAll("[data-filter-btn]");
const filterItems = document.querySelectorAll("[data-filter-item]");


// Fonction de filtrage
const filterFunc = (selectedValue) => {
  console.log(selectedValue);
  
  filterItems.forEach((item) => {
    const category = item.dataset.category;

    if (selectedValue === "all" || category === selectedValue) {
      item.classList.add("active");
      
    } else {
      item.classList.remove("active");
    }
  });
};

if (select) {
  select.addEventListener("click", () => elementToggleFunc(select));

  selectItems.forEach((item) => {
    item.addEventListener("click", () => {
      const selectedValue = item.getAttribute("data-select-item");
      elementToggleFunc(select);
      filterFunc(selectedValue);
      selectItems.forEach((selectItem) =>
        selectItem.classList.remove("active")
      );
      item.classList.add("active");
    });
  });
}

filterBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const selectedValue = btn.getAttribute("data-filter-btn");
    filterFunc(selectedValue);
    filterBtns.forEach((filterBtn) =>
      filterBtn.classList.remove("active")
    );
    btn.classList.add("active");
  });
});


// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {

    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }

  });
}



// Page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// Add event to all nav links
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {
    const targetPage = this.getAttribute("data-nav-link");

    for (let j = 0; j < pages.length; j++) {
      if (pages[j].dataset.page === targetPage) {
        pages[j].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[j].classList.remove("active");
        navigationLinks[j].classList.remove("active");
      }
    }
  });
}


function envoieMail() {
   const emailInput = document.getElementById("email");
   const emailValue = emailInput.value;
   alert( emailValue);

  //TODO rajouter la methode d'appel a la librairie EmailJsa avec en paramètre emailValue
}