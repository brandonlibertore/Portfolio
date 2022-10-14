let isModalOpen = false;
let contrastToggle = false;
const scaleFactor = 1 / 40;

function toggleContrast() {
  contrastToggle = !contrastToggle;
  if (contrastToggle) {
    document.body.classList += " dark-theme";
  } else {
    document.body.classList.remove("dark-theme");
  }
}

function moveBackground(event) {
  const shapes = document.querySelectorAll(".shape");
  const x = event.clientX * scaleFactor;
  const y = event.clientY * scaleFactor;

  for (let i = 0; i < shapes.length; ++i) {
    // EVEN
    if (i % 2 == 0) {
      shapes[i].style.transform = `translate(${x}px, ${y}px)`;
    }
    // ODD
    else {
      shapes[i].style.transform = `translate(-${x}px, -${y}px)`;
    }
  }
}

function contact(event) {
  event.preventDefault();
  const loading = document.querySelector(".modal__overlay--loading");
  const success = document.querySelector(".modal__overlay--success");
  loading.classList += " modal__overlay--visibile";
  emailjs
    .sendForm(
      "service_b6w94eq",
      "template_goi76kf",
      event.target,
      "X0qt-ljzMULF553SN"
    )
    .then(() => {
      loading.classList.remove("modal__overlay--visibile");
      success.classList += " modal__overlay--visibile";
    })
    .catch(() => {
      loading.classList.remove("modal__overlay--visibile");
      alert(
        "The email service is temporarily unavailable. Please contact me directly on brandon@brandonlibertore.net"
      );
    });
}

function removeSuccess() {
  const success = document.querySelector(".modal__overlay--success");
  success.remove("modal__overlay--visibile");
}

function toggleModal() {
  if (isModalOpen) {
    isModalOpen = false;
    return document.body.classList.remove("modal--open");
  }
  isModalOpen = true;
  document.body.classList += " modal--open";
}
