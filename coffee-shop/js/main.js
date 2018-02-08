$(function(){

	var $orders = $('#orders');

	$.ajax({
		type: 'GET',
		url: 'https://raw.githubusercontent.com/patrickeen/projects/master/coffee-shop/api/orders.json',
		success: function(orders){
			$.each(orders, function(i, order){
				$orders.append('<li>my order</li>')
			});
		}
	});

});