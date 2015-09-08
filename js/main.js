$(function() {
	
	//Tabs Registro
	$(".tabContent").hide();
    $(".codigoregistro").fadeIn("slow");

	$("#tabs li a").click(
		function(e){
            e.preventDefault();
            //alert("hola");
			var tab = $(this);
            //alert( $(tab).attr("href") );

            if( $(tab).attr("href") == $("body").attr("id") ){
            	//alert("actual");
            	e.preventDefault();
            }
            else{
            	//alert("oculto");
            	$("#tabs li a").parent().removeClass("active");
            	$(this).parent().addClass("active");
            	var tabContent = $(this).attr("href");
            	$(".tabContent").hide();
            	$("."+tabContent).show();
            	$("body").attr('id', $(this).attr("href") );

            	
            	$(".bg").css('background-image','url(../img/bg-registro'+$(this).text()+'.jpg)');

            	
            }
		});

	//cambiar foto
	$("#profile-photo").hover( function(){
		  $(".btn-cambiar-foto").fadeIn('Slow').click(
                function() {
                    $("#cambiofoto.overlay").show();
                    return false;
                }
            );
    },
      function(){
          $(".btn-cambiar-foto").hide();
    });
    

    //Servicios Corporativos
    $("#c-incapacidades, #c-formatos").show();
    $("#menuservicios li a").click(
        function(e){
            e.preventDefault();
            $("#menuservicios li a").removeClass("active")
            $(".tabContent").hide();
            var tab = $(this).addClass("active").attr("href");
            $(tab).fadeIn();
        });

    //mostrar formulario contacto
    $("#contacts .contact .sendmessage").click(
        function (e) {
            e.preventDefault();
            $(this).parent().parent().parent().append("<!-- formulario contacto --><div class='clear'></div><div class='formbox'><a class='button close' href=''>x</a><p>Asunto</p><input type='text' id='asunto' value=''><div class='clear'></div><div class='tipomensaje'><p>Tipo de Mensaje</p><label><input type='radio' name='tipoMensaje' value='queja' id='tipoMensaje_0' /><p>Queja</p></label><label><input type='radio' name='tipoMensaje' value='reclamo' id='tipoMensaje_1' /><p>Reclamo</p></label></div><div class='clear'></div><p>Mensaje</p><textarea name='mensaje'></textarea><input type='submit' id='enviar' value='Enviar'><p class='footnote'>* Lorem ipsum dolor sit amet.</p><div class='clear'></div></div>");
        }
    );
    $(".formbox a.close").click(
        function (e) {
            e.preventDefault();
            $(this).parent().hide();
        }
    );

    //slider
    $('#banner').unslider({
                fluid: true,
                dots: true,
                speed: 500
            });







});
//Ocultar overlay cambio foto al cliquear afuera:
$(document).mouseup(function (e) {
        var overlay = $("#login");

        if (!overlay.is(e.target) //if the target of the click isn't the overlay...
            && overlay.has(e.target).length === 0) //... nor a descendant of he overlay
        {
            $("#cambiofoto.overlay").fadeOut("fast");
        }
    }
);
