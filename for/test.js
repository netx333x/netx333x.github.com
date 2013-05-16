// JavaScript Document

window.onload = function(){
	
	document.getElementById("bt").onclick = function(){
		
		var d = document.getElementById("tonegawa");
		
		d = d.cloneNode(true);
		
		d.id = "id"+(new Date()).getTime();
		
		document.getElementById("imgbox").appendChild(d);
		}
}