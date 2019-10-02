let link;
const setPlace = document.getElementById("tshirt-option__image");

const allowDrop = (event) => {
	event.preventDefault();
}

const dragStart = (event) => {
	link = event.target.src
}

const drop = () => {
	setPlace.src = link;
	setPlace.style.display = "flex";
}

const dropClear = () => {
	link = "";
	setPlace.src = link;
	setPlace.style.display = "none";
}