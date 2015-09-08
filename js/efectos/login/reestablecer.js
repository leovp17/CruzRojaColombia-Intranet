jQuery(document).ready(function($) {
	

	$("#BtnEnviarCorreoReestablecer").click(function(event) {
		event.preventDefault();



		var serializedData = $("#FormularioReestablecer").serialize();
				
		//alert(serializedData);	 			 
			
		if($("#cedula").val() != "" )
		{
		
		

			 $.ajax({
				type: "POST",
				url: urlBase +"login/enviarCorreoReestablecerContrasena",
				data: serializedData,
				success: function(msg){
				
					//alert("DEVUELTO: " + msg);

					alert("Se ha enviado la información a su dirección de e-mail.");
					
					
				
		
				}
			});				
		} 
		else
		{
			alert("Debe completar los campos");
		}



	});

	



		
	


});

