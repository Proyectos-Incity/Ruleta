//Modal

const botonSuerte = document.querySelector('#suerte');
const modalBg = document.querySelector('.modal-background');
const modal = document.querySelector('.modal');

botonSuerte.addEventListener('click', () => {
    modal.classList.add('is-active');
});

modalBg.addEventListener('click', () => {
    modal.classList.remove('is-active');
});

//Validación del formulario con JQuery
$(document).ready(function () {

    var emailreg = /^[a-zA-Z0-9_\.\-]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-\.]+$/;
    var dnireg = /^[0-9_\.\-]+$/;


    $("#submit").click(function () {
        $(".error").remove();
        if ($(".nombre").val() == "") {
            $(".nombre").focus().after(" ", "<span class='error'>Ingrese su nombre</p>");
            return false;

        } else if ($(".email").val() == "" || !emailreg.test($(".email").val())) {
            $(".email").focus().after("<span class='error'>Ingrese un email correcto</span>");
            return false;

        } else if ($(".dni").val() == "" || !dnireg.test($(".dni").val()) || ($(".dni").val().length < 7)) {
            $(".dni").focus().after("<span class='error'>Ingrese su DNI</span>");
            return false;

        // } else if ($(".checkbox").val() == "") {
        //     $(".checkbox").focus().after("<span class='error'>Por favor acepte para continuar</span>");
        //     return false;
        // }
        }
    });

    //Se elimina el error al colocar correctamente los campos (fadOut)
    $(".nombre, .email, .dni").keyup(function () {
        if ($(this).val() != "") {
            $(".error").fadeOut();
            return false;
        }
    });


    $("#checkbox").change(function () {
        if (this.checked) {
            $(".error").fadeOut();
            return false;
        }
    });

    // $( "form" ).submit(function() {
    //     return this.checked;
    //   });


    
});

// $(".checkbox").prop('checked', this.checked);

// $('#checkbox').required = true;