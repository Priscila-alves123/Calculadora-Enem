function calcular(){
	var campo1 = document.form1.text1.value.replace(",", ".");
	var campo2 = document.form1.text2.value.replace(",", ".");
	var campo3 = document.form1.text3.value.replace(",", ".");
	var campo4 = document.form1.text4.value.replace(",", ".");
	var campo5 = document.form1.text5.value.replace(",", ".");

	var peso1 = document.form1.peso1.value.replace(",", ".");
	var peso2 = document.form1.peso2.value.replace(",", ".");
	var peso3 = document.form1.peso3.value.replace(",", ".");
	var peso4 = document.form1.peso4.value.replace(",", ".");
	var peso5 = document.form1.peso5.value.replace(",", ".");


	var resultado = ((parseFloat(campo1)* parseFloat(peso1)) + (parseFloat(campo2)* parseFloat(peso2)) + (parseFloat(campo3)* parseFloat(peso3)) + (parseFloat(campo4)* parseFloat(peso4)) + (parseFloat(campo5)* parseFloat(peso5)))/5;
	
	alert("Sua média no ENEM:" + resultado);
}
function nova_consulta(){
	if(document.querySelectorAll('#text1, #text2, #text3, #text4, #text5, #peso1, #peso2, #peso3, #peso4, #peso5').value!="") {
	document.getElementById('text1').value="";
	document.getElementById('text2').value="";
	document.getElementById('text3').value="";
	document.getElementById('text4').value="";
	document.getElementById('text5').value="";
	document.getElementById('peso1').value="";
	document.getElementById('peso2').value="";
	document.getElementById('peso3').value="";
	document.getElementById('peso4').value="";
	document.getElementById('peso5').value="";
}	
}

function Onlynumbers(e)
{
	var tecla=new Number();
	if(window.event) {
		tecla = e.keyCode;
	}
	else if(e.which) {
		tecla = e.which;
	}
	else {
		return true;
	}
	if((tecla >= "97") && (tecla <= "122")){
		return false;
	}
}
