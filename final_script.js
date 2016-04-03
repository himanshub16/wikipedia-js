arr = document.getElementsByTagName('a');


function title_show(){

	var comp_extract ="";
	var title = k.title;
	console.log(title);
	
	var almost ="";
	
	var url = 'https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro=&explaintext=&titles=' + title;

	function getFile(filename) { 
	        			oxmlhttp = null; 
	        	
	        			try { 
	        				oxmlhttp = new XMLHttpRequest(); 
	        				oxmlhttp.overrideMimeType("text/html"); 
	        			} 
	        			catch(e) { 
	        				try { 
	        					oxmlhttp = new ActiveXObject("Msxml2.XMLHTTP"); 
	        				} 
	        				catch(e) { 
	        					return null; 
	        				} 
	        			} 

	        			if(!oxmlhttp) return null; 

	        			try { 
	        				oxmlhttp.open("GET",filename,false); 
	        				oxmlhttp.send(null); 
	        			} 
	        			catch(e) { 
	        				return null; 
	        			} 

	        			return oxmlhttp.responseText;
	        		}


	/*ew = document.createElement('div')
	ew.id = 'demo'
	document.body.appendChild(ew)*/

	comp_extract = getFile(url);

	if(comp_extract.indexOf('extract') > 0){

	setTimeout(function(){
	almost = comp_extract.slice(comp_extract.indexOf('"extract":'), comp_extract.indexOf('. ', comp_extract.indexOf('"extract":')));
	almost = almost.replace('"extract":"', '');
	//document.getElementById('demo') = almost;
	console.log(almost);
	console.log(k.title);
	almost = almost.replace(/ *\([^)]*\) */g, "");
	alert(almost);

	setTimeout(function(){
	k.title = almost;},2000);
	}, 1000);
}

}



var myr;

function on_lev(){
clearInterval(myr);
}

var k;
function on_ent(){
k = this;
myr = setTimeout(title_show, 1000);
}


for(i =0; i < 200; i++){

arr[i].addEventListener("mouseenter",on_ent,false);
arr[i].addEventListener("mouseleave",on_lev,false);
}