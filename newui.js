var v = document.createElement('nav');
v.id = 'menu';
v.className = 'menu-right';
v.style.width = "18%";
v.style.display = 'none';
v.style.position = "fixed";
v.style.backgroundColor = 'rgba(0,0,0,.7)';
v.style.zIndex = '100';
v.style.top = '0';
v.style.right = '0%'
v.style.height = '100vh';
document.body.appendChild(v);

$('#menu').append(document.getElementById('toc'));
z = '<style>.toctext{color = white}</style>'
document.getElementById('toc').style.width = "100%";

document.getElementById('toc').style.height = "100vh";
//document.getElementById('toc').style.width = "80%";
document.getElementById('toc').style.align = "center";
document.getElementById('toc').style.float = "right";
document.getElementById('toc').style.padding = "10px";
document.getElementById('menu').style.right = "0px"

try { document.getElementById('mw-page-base').remove(); } catch(err) {}
try { document.getElementById('mw-head-base').remove(); } catch(err) {}
try { document.getElementById('mw-head').remove(); } catch(err) {}
try { document.getElementById('mw-navigation').remove(); } catch(err) {}
document.getElementsByClassName('mw-body')[0].style.marginLeft = '0px';

document.getElementsByClassName('mw-body')[0].style.padding = '3.25em 4.5em 5.5em 2.5em';
document.getElementsByClassName('mw-body')[0].style.margin = '10px';
document.getElementById('firstHeading').style.fontSize = '4.5em';

function func_show(){
	if(document.getElementById('menu').style.display == "none"){
		document.getElementById('menu').style.display = "block";
		document.getElementById('menubtn').style.right = "20%";
		document.getElementById('curtains').style.display = 'block';
		setTimeout(function(){document.getElementById('curtains').style.opacity = 1}, 500);
	}
	else{
		document.getElementById('menu').style.display = "none";
		document.getElementById('menubtn').style.right = "2%";
		document.getElementById('curtains').style.opacity = 0;
		setTimeout(function(){document.getElementById('curtains').style.display = 'none';}, 500);
	}
}

var g =document.createElement('div');
g.id = "curtains";
g.style.position = 'fixed';
g.style.display = 'none';
g.style.backgroundColor = 'rgba(0,0,0,.4)';
g.style.transition ="all .5s";
g.style.top =  '0px';
g.style.right = '0px';
g.style.width = "100%";
g.style.height = "100vh";
document.body.appendChild(g);

var x =document.createElement('div');
x.id = 'menubtn';
x.innerHTML = '<i></i><i></i><i></i>'
x.style.position = 'fixed';
x.style.transition ="all .5s";

x.style.top =  '10px';
x.style.right = '10px';
x.addEventListener("click",func_show, false);
x.style.display = 'block';
var y = "<style>#menu{font-family:serif; font-size:16px; }  #menubtn {	position: fixed;	width: 50px;	float: right;	right: 7px;	height: 50px;	display: inline-block;	cursor: pointer;	z-index: 12;} #menubtn i {	position: absolute;	display: block;	height: 2px;	background: #FA5656;	width: 30px;	left: 10px;	transition: all .3s}#menubtn i:nth-child(1) {	top: 16px;}#menubtn i:nth-child(2) {	top: 24px;}#menubtn i:nth-child(3) {top: 32px;}#menubtn.on {-webkit-transform: translate(-240px, 35px);-moz-transform: translate(-240px, 30px);	transform: translate(-240px, 30px);}#menubtn.on i:nth-child(1) {	top: 25px;	-webkit-transform: rotateZ(135deg);	transform: rotateZ(135deg);}#menubtn.on i:nth-child(2) {	background: transparent;}#menubtn.on i:nth-child(3) {	top: 25px;-webkit-transform: rotateZ(-135deg);transform: rotateZ(-135deg);} </style>"
x.innerHTML += y;
document.body.appendChild(x);



// final script
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
myr = setTimeout(title_show, 0);
}


for(i =0; i < 200; i++){

arr[i].addEventListener("mouseenter",on_ent,false);
arr[i].addEventListener("mouseleave",on_lev,false);
}
