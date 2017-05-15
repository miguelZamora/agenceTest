/*+++++++++++++++++++++++++++++++++++*/
$(document).ready(function() 
	{
		$('.pasar').click(function() { return !$('#origen option:selected').remove().appendTo('#destino'); });  
		$('.quitar').click(function() { return !$('#destino option:selected').remove().appendTo('#origen'); });
		$('.pasartodos').click(function() { $('#origen option').each(function() { $(this).remove().appendTo('#destino'); }); });
		$('.quitartodos').click(function() { $('#destino option').each(function() { $(this).remove().appendTo('#origen'); }); });
		$('.submit').click(function() { $('#destino option').prop('selected', 'selected'); });



$("#por_consultor").addClass("active")


$("#por_consultor").click(function()
		{
			evaluacion = $("#por_cliente").attr("class");
			var n = evaluacion.search("active");
			alert(n)
			if (n > 0)
				{
					$("#por_cliente").attr("class","btn btn-default");
					$("#por_consultor").attr("class","btn btn-default active");
				}
			if (n < 0)
				{
					$("#por_consultor").attr("class","btn btn-default");	
					$("#por_cliente").attr("class","btn btn-default  active");
				}
		});

$("#por_cliente").click(function()
		{
			evaluacion = $("#por_consultor").attr("class");
			var n = evaluacion.search("active");
			alert(n)
			if (n < 0)
					{
						$("#por_consultor").attr("class","btn btn-default");
						$("#por_cliente").attr("class","btn btn-default active");
					}
		});

}); 
