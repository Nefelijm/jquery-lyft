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
        
        var number = $(this).val();
        if ((number.length) === 9 ) {
            $('#next-page').removeAttr('disabled');
            $('#next-page').removeClass('color-disabled');
            $('#next-page').addClass('color-enabled');
        } else {
            $('#next-page').attr('disabled', 'disabled');
            $('#next-page').addClass('color-disabled');
            $('#next-page').removeClass('color-enabled');
        }           

    });













});