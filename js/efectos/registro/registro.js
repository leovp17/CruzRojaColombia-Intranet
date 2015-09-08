var finalizacionRegistro = false;
jQuery(document).ready(function($) {
	
	

	$("#BtnContinuarPaso1").click(function(event) {
		event.preventDefault();



		var serializedData = $("#FormularioPaso1").serialize();
				
		//alert(serializedData);	 			 
			
		if($("#cedula").val() != "" && $("#codigo").val() != "")
		{
			
		

			 $.ajax({
				type: "POST",
				url: urlBase +"registro/comprobarCedulaYContrasena",
				data: serializedData,
				success: function(msg){
				
					//alert("DEVUELTO: " + msg);

					if(msg == "no")
					{
						alert("El usuario no existe");
						event.preventDefault();
					}
					else
					{
					
						var datos = msg.split("-");

						$("#IframeImagenRegistro").attr('src', urlBase + 'registro/iframeImagenRegistro/' + datos[0]);
						$("#cedulaGeneral").val(datos[0]);
						$("#nombreUsuario").html(datos[1]);

						//alert("paso 1 completado")
						$("#tabs li").removeClass("active");
						$("#tabs li:nth-child(2)").addClass("active");
						$(".tabContent").hide();
						$(".passregistro").fadeIn("slow");
					}
					
					
					
				
		
				}
			});	
						
		} 
		else
		{
			alert("Debe completar los campos");
		}



	});

	$("#BtnContinuarPaso2").click(function(event) {
		event.preventDefault();



		var serializedData = $("#FormularioPaso2").serialize();
				
		alert(serializedData);	 			 
			
		if($("#password").val() == $("#confirmPassword").val())
		{
			
			 $.ajax({
				type: "POST",
				url: urlBase +"registro/cambiarContrasena",
				data: serializedData,
				success: function(msg){
				
					alert("DEVUELTO: " + msg);

					//alert("paso 2 completado")
					$("#tabs li").removeClass("active");
					$("#tabs li:nth-child(3)").addClass("active");
					$(".tabContent").hide();
					$(".fotoregistro").fadeIn("slow");
				
					
					
				
		
				}
			});
							
		} 
		else
		{
			alert("La contraseña no coincide");
		}



	});





		
		$("#BtnFinalizarRegistro").click(function(event) {
			event.preventDefault();

			if(finalizacionRegistro)
			{
				alert("Tu registro se ha completado con exito");
				document.location.href = urlBase + "web/login";
				
			}	
			else
			{
				alert("Debes seleccionar una imagen");
			}
		});


});

function modificarFinalizacionRegistro()
{
	finalizacionRegistro = true;
}