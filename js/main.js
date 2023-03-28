let modeBtn = document.getElementById("dark-light");

modeBtn.addEventListener("click", function () {
  if (document.body.className != "dark") {
    this.firstElementChild.src = "icon/light.svg";
  } else {
    this.firstElementChild.src = "icon/dark.svg";
  }
  document.body.classList.toggle("dark");
});

window.addEventListener("scroll", function () {
  shrink();
});

let navbar = document.getElementById("navbar");

function shrink() {
  if (scrollY > 100) {
    navbar.classList.add("navbar-shrink");
  } else {
		navbar.classList.remove("navbar-shrink");
	}
}

const loading = document.getElementById("loading");
setTimeout(() => {
  loading.classList.add('loading-none');
}, 3000);