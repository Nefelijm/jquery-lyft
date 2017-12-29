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
   
});