






function EvalSound(id){
	 var thissound=document.getElementById(id);
  thissound.Play();
}
/*validacion de numeros*/
function validaruno(){
	var uno = document.calculador.numeros.value;
	document.calculador.numeros.value= uno +"1";
	}
	
	
	function validardos(){
	var dos = document.calculador.numeros.value;
	document.calculador.numeros.value= dos +"2";
	}
	
	
	function validartres(){
	var tres = document.calculador.numeros.value;
	document.calculador.numeros.value= tres +"3";
	}
	
		function validarcuatro(){
	var cuatro = document.calculador.numeros.value;
	document.calculador.numeros.value= cuatro +"4";
	}
	
		function validarcinco(){
	var cinco = document.calculador.numeros.value;
	document.calculador.numeros.value= cinco +"5";
	}
	
		function validarseis(){
	var seis = document.calculador.numeros.value;
	document.calculador.numeros.value= seis +"6";
	}
	
		function validarsiete(){
	var siete = document.calculador.numeros.value;
	document.calculador.numeros.value= siete +"7";
	}
	
		function validarocho(){
	var ocho = document.calculador.numeros.value;
	document.calculador.numeros.value= ocho +"8";
	}
		function validarnueve(){
	var nueve = document.calculador.numeros.value;
	document.calculador.numeros.value= nueve +"9";
	}
		function validarcero(){
	var cero = document.calculador.numeros.value;
	document.calculador.numeros.value= cero +"0";
	}
	
	
	/*validar operadores*/
		function validarPunto(){
	var punto = document.calculador.numeros.value;
	document.calculador.numeros.value= punto +".";
	}
		function validarSuma(){
	var suma = document.calculador.numeros.value;
	document.calculador.numeros.value= suma +"+";
	}
		function validarResta(){
	var resta = document.calculador.numeros.value;
	document.calculador.numeros.value= resta +"-";
	}
		function validarDivision(){
	var division = document.calculador.numeros.value;
	document.calculador.numeros.value= division +"/";
	}
		function validarMulti(){
	var multi = document.calculador.numeros.value;
	document.calculador.numeros.value= multi +"*";
	}
		function Calcular(){//funcion para  realizar las operaciones
	var calcular = document.calculador.numeros.value;
	document.calculador.numeros.value= eval(calculador.numeros.value);
	}
	
	
		function borrar(){//funcion para  realizar borrar
	var borrar = document.calculador.numeros.value;
	document.calculador.numeros.value= "";
	}
	
	


	
	