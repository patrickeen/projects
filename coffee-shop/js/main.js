$(function(){

	$.ajax({
		type: 'GET',
		url: 'https://raw.githubusercontent.com/patrickeen/projects/master/coffee-shop/api/orders.json',
		success: function(data){
			console.log('success',data);
		}
	});

});