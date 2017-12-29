$(document).ready(function() {

//Funcion cuando haces click en el boton Resend Code
$('#resend-code').click(function(){
//funcion que genera nuevo random
    function Random() {
        var RandomNumber1 = Math.floor(Math.random() * 10).toString();
        var RandomNumber2 = Math.floor(Math.random() * 10).toString();
        var RandomNumber3 = Math.floor(Math.random() * 10).toString();
        var linkRandom = RandomNumber1 + RandomNumber2 + RandomNumber3;
        return linkRandom ;
    }
   var Resent = Random();
 //Creando alert con el nuevo random
   alert('LAB-'+ Resent);








   
});




















   
});