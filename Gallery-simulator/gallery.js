

function setGallery(over){
 	// contenedor de las imagenes
 	let imgs = over.querySelectorAll('img');

	for(let i=0;i<imgs.length; i++){
// cuando a cada a unos de las imagenes
	 imgs[i].addEventListener("click",(e)=>{

	 	let valScroll = window.scrollY;
	 	over.style.height = valScroll+'%';
	 	   
	 	  // boton de salir de la imagen abierta
		 let closes= document.createElement("span")
		 	 closes.setAttribute("class", "closes")
		 	 closes.textContent = "X";

		 	 // contenedor del overlay
		let elementOver = document.createElement("div")
			elementOver.setAttribute("class", "overlay")
			elementOver.appendChild(closes)
			elementOver.style.top=window.scrollY-50+'px';

			let ims = document.createElement("img")
				ims.src = e.target.src
		
				elementOver.appendChild(ims)
				// al darle click al boton cierra la imagen
				 closes.addEventListener("click", (e)=>{
				 	elementOver.remove(e.target)
				 	 document.body.classList.remove("filter")
				 })

			document.body.insertBefore(elementOver,document.body.firstElementChild)
			
	},false)
  }
}

let over = document.getElementById("overlay");


setGallery(over);