const changeImages = (() => {
	let link = "";
	const setPlace = document.getElementById("tshirt-option__image");
	
	return {
		allowDrop: (event) => {
			event.preventDefault();
		},
		
		dragStart: (event) => {
			link = event.target.src
		},
		
		onDrop: () => {
			setPlace.src = link;
			setPlace.style.display = "flex";
		},
		
		dropClean: () => {
			link = "";
			setPlace.src = link;
			setPlace.style.display = "none";
		}
	}
})();
