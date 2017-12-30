$('document').ready(function () {

    //Funcion para validar el input de nombre
  $('#first-name').on('input',function(){
    if ($(this).val() === '') {     
       $('#msj1').text('Ingrese su nombre por favor')
       $(this).focus();
       return false;
    } else {
        $('#msj1').text('');
    }
   });    

   //Funcion para validar el input de apellido
   $('#last-name').on('input', function () {
          if ($(this).val() === '') {
              $('#msj2').text('Ingrese su Apellido por favor')
              $(this).focus();
              return false;
          } else {
              $('#msj2').text('');
          }
    });

    //Funcion para validar el input de email
     $('#email').on('input', function () {
         var parameterEmail = new RegExp(/^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/); //Expresiones regulares que nos ayudara a validar el email
         if (parameterEmail.test($(this).val()) === false || $(this).val() === '') {
                  $('#msj3').text('Ingrese su correo correcto')
                  $(this).focus();
                  return false;
              } else {
                  $('#msj3').text('');
              }


   });
    
    










});