$('document').ready(function() {
// Funcion para activar y desactivar el boton next

  // Creando variables booleanas que nos ayudaran 
  var verifyFirstName = false;
  var verifyLastName = false;
  var verifyEmail = false;
  var verifycheck = false;

  function activeButton() {
    if (verifyFirstName && verifyLastName && verifyEmail && verifycheck) {
      $('#button-form').attr('disabled', false);
    } 
  }   
        
  function desactiveButton() {
    if (verifyFirstName && verifyLastName && verifyEmail && verifycheck) {
      $('#button-form').attr('disabled', true);
    }
  }      
     
  /** *******************************************************************/
  // Funcion para validar el input de nombre
  $('#first-name').on('input', function() {
    if ($(this).val() === '') {     
      $('#msj1').text('Ingrese su nombre por favor');
      $(this).focus();
      verifyFirstName = true;
      desactiveButton();
      return false;
    } else {
      $('#msj1').text('');
      verifyFirstName = true;
      activeButton();
    }
  });    

  // Funcion para validar el input de apellido
  $('#last-name').on('input', function() {
    if ($(this).val() === '') {
      $('#msj2').text('Ingrese su Apellido por favor');
      $(this).focus();
      desactiveButton();
      return false;
    } else {
      $('#msj2').text('');
      verifyLastName = true;
      activeButton();
    }
  });

  // Funcion para validar el input de email
  $('#email').on('input', function() {
    var parameterEmail = new RegExp(/^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/); // Expresiones regulares que nos ayudara a validar el email
    if (parameterEmail.test($(this).val()) === false || $(this).val() === '') {
      $('#msj3').text('Ingrese su correo correcto');
      $(this).focus();
      desactiveButton();                   
      return false;
    } else {
      $('#msj3').text('');
      verifyEmail = true;
      activeButton();
    }
  });
  // Funcion para validar checkbox

  $('#check').on('click', function() {
    if (($(this).prop('checked'))) {
      $('#msj4').text('acepto las condiciones');                      
      verifycheck = true;
      activeButton();
    } else {
      $('#msj4').text('no acepto');
      desactiveButton();
    }
  });
    
  // Enviando a la Vista end-up
  $('#button-form').click(function() {
    event.preventDefault();
    window.location.href = '../views/endUp.html';
  });
});