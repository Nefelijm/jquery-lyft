$(document).ready(function(){

 //Funcion para que cambien las banderas

$('#flag-argentina').click(function(){
var flag = $(this).attr('src');
$('#flag-peru').attr('src', flag);
  $('#postal').text('45');
})

$('#flag-brasil').click(function () {
  var flag = $(this).attr('src');
  $('#flag-peru').attr('src', flag);
    $('#postal').text('25');
 });

$('#flag-ecuador').click(function () {
  var flag = $(this).attr('src');
  $('#flag-peru').attr('src', flag);
    $('#postal').text('55');
});

//Funcion para validar la cantidad de numeros ingresados y habilitar el boton nex

    $("#phone").keyup(function () {
        
        var number = $(this).val();//obteniendo el valor
        if ((number.length) === 9 ) { //comparando la longitud del valor igual a 9
            $('#next-page').removeAttr('disabled');
            $('#next-page').removeClass('color-disabled');
            $('#next-page').addClass('color-enabled');
        } else {
            $('#next-page').attr('disabled', 'disabled');//agregando el atributo y valor
            $('#next-page').addClass('color-disabled');
            $('#next-page').removeClass('color-enabled');
        }           

    });

//Funcionalidad para generar codigo aleatorio

$('#next-page').click(function(){
    var RandomNumber1 = Math.floor(Math.random()*10).toString(); //Math.floor redondea el numero
    var RandomNumber2 = Math.floor(Math.random() * 10).toString(); //Math.random genera el numero aleatorio
    var RandomNumber3 = Math.floor(Math.random() * 10).toString(); //toString convierte el numero en cadena   
    alert( 'Tu codigo es LAB-'+ RandomNumber1 + RandomNumber2 + RandomNumber3);
    //Creando localStorage para guardar la informacion
    localStorage.Random1 = RandomNumber1; //localStorage guarda la informacion por meses,dias o años 
    localStorage.Random2 = RandomNumber2;
    localStorage.Random3 = RandomNumber3;
    window.location.href = '../views/verify-number.html'

});

});