jQuery(document).ready(function($) {
	

	$("#iniciar-sesion").click(function(event) {
		event.preventDefault();



		var serializedData = $("#FormularioLogin").serialize();
				
		//alert(serializedData);	 			 
			
		if($("#cedula").val() != "" && $("#contrasena").val() != "")
		{
			
		

			 $.ajax({
				type: "POST",
				url: urlBase +"login/comprobarCedulaYContrasena",
				data: serializedData,
				success: function(msg){
				
					alert("DEVUELTO: " + msg);

					if(msg == "si")
					{
						document.location.href = urlBase + "web"
					}
					else
					{
					
						$("#MensajeToolTip").show();
					}
					
					
					
				
		
				}
			});				
		} 
		else
		{
			alert("Debe completar los campos");
		}



	});

	



		
	


});

