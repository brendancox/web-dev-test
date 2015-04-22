$(document).on('ready page:load', function(){
	$('#submit_form').click(function(event){
		var form_data_array = $('#cost_form').serializeArray();
		var form = {};
		//convert form data to JSON format
		for (var elem = 2; elem <= 6; elem++){
			form[form_data_array[elem].name.slice(5,-1)] = form_data_array[elem].value;
		}
		$.ajax({
			type:'post',
			url: 'https://web-dev-test.herokuapp.com/forms',
			data: {form},
			dataType: 'json',
			success: function(response){
				$('.response').html("<p>The total cost of your holiday will be $" + response + ".</p>");
			}
		});
	});
});