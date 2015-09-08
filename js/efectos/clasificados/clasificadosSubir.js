var cedulaGeneral = $("#Ndocihv").val();
jQuery(document).ready(function($) {
	



		// Botón para subir imagen destacado
		var btn_firma = $('#BtnSeleccionarImagenDestacado'), interval;
			alert("LA CEDULA ES: " + cedulaGeneral);
			new AjaxUpload('#BtnSeleccionarImagenDestacado', {
				action: urlBase + 'web/cargarImagenAjaxClasificado/' + cedulaGeneral + '/destacado_',
				onSubmit : function(file , ext){
					if (! (ext && /^(jpg|png)$/.test(ext))){
						// extensiones permitidas
						alert('Sólo se permiten Imagenes .jpg o .png');
						// cancela upload
						return false;
					} else {
						alert("ESTO VA PRIMERO QUE EL AJAX " + $("#ImagenDestacado").attr("src"));

						var rutaImagenAnterior = urlBase + 'img/clasificado-destacado.jpg';
						if($("#ImagenDestacado").attr("src") != rutaImagenAnterior)
						{
							alert("ENTRA");
							var ruta = $("#ImagenDestacado").attr("src");
							ruta = ruta.split("&");
							var imagen = ruta[1];
							var imagenDos = imagen.split("=");

							alert("CONTENIDO DE LA IMAGEN " + imagenDos[1]);

							$.ajax({
								type: "POST",
								url: urlBase +"web/eliminarImagenClasificado/" + cedulaGeneral,
								data: "imagen=" + imagenDos[1],
								success: function(msg){
								
									alert("DEVUELTO: " + msg);
			
						
								}
							});
						}
						
	

						//alert(cedulaGeneral);
						//$('#loaderAjax').show();
						btn_firma.text('Espere por favor');
						this.disable();
					}
				},
				onComplete: function(file, response){

					alert(response);
					
					btn_firma.text('Cambiar Imagen');
					
					respuesta = $.parseJSON(response);

					if(respuesta.respuesta == 'done'){
						$('#ImagenDestacado').removeAttr('scr');
						$('#ImagenDestacado').attr('src',urlBase + 'administrador/recursos/getimage.php?carpeta=usuarios/'+ cedulaGeneral +'/clasificados/&img='+ respuesta.fileName+'&w=223&h=222&exact');
						$('#loaderAjax').show();
						// alert(respuesta.mensaje);
					}
					else{
						alert(respuesta.mensaje);
					}
						
					$('#loaderAjax').hide();	
					this.enable();	

					

				}
		});












		var contadorImagenesGenerales = 0;

		// Botón para subir imagen general
		var btn_imagen_general = $('#BtnSeleccionarImagenGeneral'), interval;
			alert("LA CEDULA ES: " + cedulaGeneral);
			new AjaxUpload('#BtnSeleccionarImagenGeneral', {
				action: urlBase + 'web/cargarImagenAjaxClasificado/' + cedulaGeneral + '/general_',
				onSubmit : function(file , ext){
					if (! (ext && /^(jpg|png)$/.test(ext))){
						// extensiones permitidas
						alert('Sólo se permiten Imagenes .jpg o .png');
						// cancela upload
						return false;
					} else {
						
						
	

						//alert(cedulaGeneral);
						//$('#loaderAjax').show();
						btn_imagen_general.text('Espere por favor');
						this.disable();
					}
				},
				onComplete: function(file, response){

					alert(response);
					
					btn_imagen_general.text('Cambiar Imagen');
					
					respuesta = $.parseJSON(response);

					

					if(respuesta.respuesta == 'done'){

						contadorImagenesGenerales++;

						if(contadorImagenesGenerales == 1)
						{
							$(".thumb").remove();
						}
					

						var htmlImagen = '<div class="thumb"><img src="'+ urlBase +'administrador/recursos/getimage.php?carpeta=usuarios/'+ cedulaGeneral +'/clasificados/&img='+ respuesta.fileName+'&w=50&h=50&exact" alt="thumb"/></div>';

						$('#ImagenesGeneralesAntes').before(htmlImagen);

						

						/*$('#ImagenDestacado').removeAttr('scr');
						$('#ImagenDestacado').attr('src',urlBase + 'administrador/recursos/getimage.php?carpeta=usuarios/'+ cedulaGeneral +'/clasificados/&img='+ respuesta.fileName+'&w=223&h=222&exact');
						$('#loaderAjax').show();*/
						// alert(respuesta.mensaje);
					}
					else{
						alert(respuesta.mensaje);
					}
						
					$('#loaderAjax').hide();	
					this.enable();	

					

				}
		});





		$("#BtnSubirClasificado").click(function(event) {
			
			event.preventDefault();
			var serializedData = $("#FormularioClasificado").serialize();
				
			alert(serializedData);	 			 
				
		
				
			

				 $.ajax({
					type: "POST",
					url: urlBase +"web/guardarInformacionClasificado",
					data: serializedData,
					success: function(msg){
					
						alert("DEVUELTO: " + msg);

						if(msg == "")
						{
							alert("pasa");
							//document.location.href = urlBase + "web"
						}
						else
						{
						
							alert("Ocurrio un error");
						}
						
						
						
					
			
					}
				});				
			



		});


		
	


});