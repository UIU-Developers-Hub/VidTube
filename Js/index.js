const menu = document.querySelector(".menu");
const side_bar = document.querySelector(".side_bar");

function smallSidebarClick() {
	side_bar.classList.toggle("small_sidebar");
}
menu.addEventListener("click", smallSidebarClick);

const button = document.querySelector("#btn");
function subscribed() {
	if (button.innerHTML == "Subscribe") {
		button.innerHTML = "Subscribed";
		button.style.background = "#000";
	} else if (button.innerHTML === "Subscribed") {
		button.innerHTML = "Subscribe";
		button.style.background = "#E43333";
	}
}
function unSubscribe() {
	button.innerHTML = "Subscribe";
	button.style.background = "#E43333";
}

button.addEventListener("click", subscribed);
button.addEventListener("change", unSubscribe);
