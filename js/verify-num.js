$(document).ready(function() {

  //funcion que genera nuevo random
    function Random() {
     var RandomNumber1 = Math.floor(Math.random() * 10).toString();
     var RandomNumber2 = Math.floor(Math.random() * 10).toString();
     var RandomNumber3 = Math.floor(Math.random() * 10).toString();
     var linkRandom = RandomNumber1 + RandomNumber2 + RandomNumber3;
        return linkRandom;
    }

  //Creando variables para definir si los numeros son iguales
    var conditionNum1 = false;
    var conditionNum2 = false;
    var conditionNum3 = false;

  //Creando funcion para habilitar y desabilitar el boton
    function buttonEnabled() {
        if (conditionNum1 === true && conditionNum2 === true && conditionNum3 === true) {
            $('#verify-nex').removeAttr('disabled');
            $('#verify-nex').addClass('color-enabled');
            $('#verify-nex').removeClass('color-disabled');

        } else {
            $('#verify-nex').attr('disabled', 'disabled');
            $('#verify-nex').removeClass('.color-enabled');
            $('#verify-nex').addClass('color-disabled');
        }
    }

  //Validando si el valor del input1 es igual al random1 guardado en el localStorage de la vista anterior
    $('#input1').keyup(function () {
        if ($(this).val() === localStorage.Random1) {

            conditionNum1 = true;
        }
        else {
            conditionNum1 = false;
        }
        buttonEnabled;

    });

  //Validando si el valor del input2 es igual al random2 guardado en el localStorage de la vista anterior
    $('#input2').keyup(function () {
        if ($(this).val() === localStorage.Random2) {

            conditionNum2 = true;
        }
        else {
            conditionNum2 = false;
        }
        buttonEnabled;

    });

  //Validando si el valor del input3 es igual al random3 guardado en el localStorage de la vista anterior
    $('#input3').keyup(function () {
        if ($(this).val() === localStorage.Random3) {

            conditionNum3 = true;
        }
        else {
            conditionNum3 = false;
        }
        buttonEnabled;

    });

/*********************** Funcion cuando haces click en el boton Resend Code ***************/

    $('#resend-code').click(function () {
        var Resend = Random();
    
    //Creando alert con el nuevo random
        alert('LAB-' + Resend);
    });

   //Verificando el valor del input1 si es igual al codigo de alert
    $('#input1').val(""); //limpiando el input1
    $("#input1").keyup(function () {
        var number1 = (parseInt(Resend[0])).toString(); //separando nuevamente los numeros para ver si es igual al nuevo random del alert
        if ($(this).val() === number1) {

            conditionNum1 = true;
        }
        else {
            conditionNum1 = false;
        }
        buttonEnabled;
    });
   
    //Verificando el valor del input2 si es igual al codigo de alert
    $('#input2').val("");//limpiando el input2
    $("#input2").keyup(function () {
        var number2 = (parseInt(Resend[1])).toString(); //separando nuevamente los numeros para ver si es igual al nuevo random del alert
        if ($(this).val() === number2) {

            conditionNum2 = true;
        } else {
            conditionNum2 = false;
        }

        buttonEnabled;

    });
   
    //Verificando el valor del input3 si es igual al codigo de alert
    $('#input3').val("");//limpiando el input3
    $("#input3").keyup(function () {
        var number3 = (parseInt(Resend[2])).toString(); //separando nuevamente los numeros para ver si es igual al nuevo random del alert
        if ($(this).val() === number3) {

            conditionNum3 = true;
        } else {
            conditionNum3 = false;
        }

        buttonEnabled;
    });
   
    //Enviando a la Vista del Formulario
    $('#verify-nex').click(function () {
        window.location.href = '../views/form.html';
    });
    
});