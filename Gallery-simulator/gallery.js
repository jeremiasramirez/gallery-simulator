

let over = document.getElementById("overlay")
	let imgs = over.querySelectorAll('img')


	for(let i=0;i<imgs.length; i++){

	 imgs[i].addEventListener("click",function(e){
	  
	 	console.log(window.scrollY)

		 let closes= document.createElement("span")
		 	 closes.setAttribute("class", "closes")
		 	 closes.textContent = "X";
		let elementOver = document.createElement("div")
			elementOver.setAttribute("class", "overlay")
			elementOver.appendChild(closes)
			elementOver.style.top=window.scrollY+'px';
			let ims = document.createElement("img")
				ims.src = e.target.src
		
				elementOver.appendChild(ims)

				 closes.addEventListener("click", function(e){
				 	elementOver.remove(e.target)
				 })
			document.body.insertBefore(elementOver,document.body.firstElementChild)
			
	},false)

	}
