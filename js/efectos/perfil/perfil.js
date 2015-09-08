jQuery(document).ready(function($) {
	

	$("#guardarcambios").click(function(event) {
		event.preventDefault();



		var serializedData = $("#FormularioEditarPerfil").serialize();
				
		alert(serializedData);	 			 
			
		
		

			 $.ajax({
				type: "POST",
				url: urlBase +"web/guardarPerfilUsuarios",
				data: serializedData,
				success: function(msg){
				
					alert("DEVUELTO: " + msg);

	
				
		
				}
			});				
		


	});

	



		
	


});

