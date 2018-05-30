function ListaPassagens(){

 	$.getJSON( "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json", function( json ) {

 		$("#NumeroDePassagens").text(json.members.length);

 		for(var k in json.members) {

		   document.getElementById("ListaPassagens").innerHTML += "<br><span>"+json.members[k].name+"</div>";
		}
 		
 	
 	});

}