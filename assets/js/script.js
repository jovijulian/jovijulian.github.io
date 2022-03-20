// submit contact form to google sheet
const scriptURL = "https://script.google.com/macros/s/AKfycbyQxggsbUW41-3yk68Svv_w-f8Suu0qsG-1B76h9RXx3dbR7iLC8_p3RFa3H98Wne0/exec";
const form = document.forms["submit-to-google-sheet"];
const btnKirim = document.querySelector(".btn-send");
const btnLoading = document.querySelector(".btn-loading");
const myAlert = document.querySelector(".alert");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  //ketika tombol submit diklik
  //tampilkan tombol loading, hilangkan tombol kirim
  btnLoading.classList.toggle("d-none");
  btnKirim.classList.toggle("d-none");
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      //tampilkan tombol kirim, hilangkan tombol loading
      btnLoading.classList.toggle("d-none");
      btnKirim.classList.toggle("d-none");
      //tampilkan alert
      myAlert.classList.toggle("d-none");
      //reset form
      form.reset();
      console.log("Success!", response);
    })
    .catch((error) => console.error("Error!", error.message));
});

// function ketikan pada home
const typed = document.querySelector(".typed");
if (typed) {
  let typed_strings = typed.getAttribute("data-typed-items");
  typed_strings = typed_strings.split(",");
  new Typed(".typed", {
    strings: typed_strings,
    loop: true,
    typeSpeed: 100,
    backSpeed: 50,
    backDelay: 2000,
  });
}

// navbar aktif ketika di scroll
const sectionAll = document.querySelectorAll("section[id]");
window.addEventListener("scroll", () => {
  const scrollY = window.pageYOffset;
  sectionAll.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 200;
    const sectionId = current.getAttribute("id");
    if (scrollY > sectionTop && scrollY < sectionTop + sectionHeight) {
      document.querySelector('li a[href*="' + sectionId + '"]').classList.add("active");
    } else {
      document.querySelector('li a[href*="' + sectionId + '"]').classList.remove("active");
    }
    console.log(sectionId);
  });
});

// navbar transparant
window.addEventListener("scroll", () => {
  let nav = document.querySelector("nav");
  window.addEventListener("scroll", () => {
    if (window.pageYOffset > 100) {
      nav.classList.add("bg-dark");
    } else {
      nav.classList.remove("bg-dark");
    }
  });
});
