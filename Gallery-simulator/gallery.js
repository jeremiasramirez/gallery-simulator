 let imagenes = ["Imagenes/inicio.jpg","Imagenes/contacto.jpg"]


let over = document.getElementById("overlay")
	let imgs = over.querySelector('img')
 

	
	 over.addEventListener("click",function(e){
	  

		 let closes= document.createElement("span")
		 	 closes.setAttribute("class", "closes")
		 	 closes.textContent = "X";
		let elementOver = document.createElement("div")
			elementOver.setAttribute("class", "overlay")
			elementOver.appendChild(closes)
			let ims = document.createElement("img")
				ims.src = e.target.src
		
				elementOver.appendChild(ims)

				 closes.addEventListener("click", function(e){
				 	elementOver.remove(e.target)
				 })
			document.body.insertBefore(elementOver,document.body.firstElementChild)
			
	},false)