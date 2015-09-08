var cedulaGeneral = $("#cedula").val();
jQuery(document).ready(function($) {
	
		// Botón para subir la firma
		var btn_firma = $('#addImage'), interval;
			alert(cedulaGeneral);
			new AjaxUpload('#addImage', {
				action: urlBase + 'registro/cargarImagenAjax/' + cedulaGeneral,
				onSubmit : function(file , ext){
					if (! (ext && /^(jpg|png)$/.test(ext))){
						// extensiones permitidas
						alert('Sólo se permiten Imagenes .jpg o .png');
						// cancela upload
						return false;
					} else {
						alert(cedulaGeneral);
						//$('#loaderAjax').show();
						btn_firma.text('Espere por favor');
						this.disable();
					}
				},
				onComplete: function(file, response){

					//alert(response);
					
					btn_firma.text('Cambiar Imagen');
					
					respuesta = $.parseJSON(response);

					if(respuesta.respuesta == 'done'){
						$('#fotografia').removeAttr('scr');
						$('#fotografia').attr('src',urlBase + 'administrador/recursos/getimage.php?carpeta=usuarios/'+ cedulaGeneral +'/&img='+ respuesta.fileName+'&w=243&h=180&exact');
						$('#loaderAjax').show();
						// alert(respuesta.mensaje);
					}
					else{
						alert(respuesta.mensaje);
					}
						
					$('#loaderAjax').hide();	
					this.enable();	

					parent.modificarFinalizacionRegistro();

				}
		});


		
	


});