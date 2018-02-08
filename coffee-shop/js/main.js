$(function(){

	$.ajax({
		type: 'GET',
		url: 'order.json',
		success: function(data){
			console.log('success',data);
		}
	});

});