function upDate(element){
 document.getElementById("image").innerHTML = element.alt;
 document.getElementById("image").style.backgroundColor='#cccccc';
 document.getElementById("image").style.backgroundImage="url(" + element.src + ")";	}

function unDo(){
 document.getElementById("image").innerHTML = 'Hover over an image below to display here.';
 document.getElementById("image").style.backgroundColor='#cccccc';
 document.getElementById("image").style.backgroundImage='url()';
	}
