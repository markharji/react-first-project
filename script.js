var input1 = document.getElementById("inputcolor1");
var input2 = document.getElementById("inputcolor2");
var output = document.getElementById("output");
var textoutput = document.getElementById("textoutput");
var text = document.getElementById("textinput");
var body = document.getElementById("grad");

function setBackground(){
	var x = body.style.background = "linear-gradient(to right, " + input1.value + ", " + input2.value + ")";
	output.textContent=x + ";";
}
text.addEventListener("input", function(){
	if(text.value!==""){
		textoutput.innerHTML=text.value;
	}
	else{
		textoutput.innerHTML="";
	
	}
	
})
console.log(body);
input1.addEventListener("input", setBackground);
input2.addEventListener("input", setBackground)	

