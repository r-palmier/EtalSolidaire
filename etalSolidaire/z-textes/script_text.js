const page = document.querySelector('.page');

document.body.addEventListener('dblclick',(e) =>{
  	console.log("doubleclick");
	let targP = e.target;
	do {
		if(targP.classList.contains("text")) {
			//c'est bon
		} else {
			targP = targP.parentNode;
		}

		if(targP == document.body) {
			break;
		}
	} while(!targP.classList.contains("text"));
	// console.log(targP);
	if(targP.classList.contains("text")){
		//entrée en mode texte
		targP.setAttribute("contentEditable","true");
		targP.style.height = "auto";
		targP.style.height = "fit-content";

		// remClass("selected");
		remClass("depl");
		targP.classList.add("editable");

	} else {
		//sortie du mode texte
		remClass('editable');

	}
	
}); 


//enlever le select
document.body.addEventListener("click", (e) => {
    let targP = e.target;
    do {
		if(targP.classList.contains("text")) {
			//c'est bon
		} else {
			targP = targP.parentNode;
		}

		if(targP === document.body) {
			break;
		}
	} while(!targP.classList.contains("text") );
    
    if(!targP.classList.contains("editable") && !targP.classList.contains("toolbar")){
		const texts = document.querySelectorAll('[contenteditable]');

		texts.forEach (item => {
			item.setAttribute("contentEditable","false");
			remClass('editable');
		});
	}
});

function remClass(classToRem) {
    const cl = document.body.querySelectorAll("."+classToRem);
    cl.forEach((item) => {
        item.classList.remove(classToRem);
    });
}
