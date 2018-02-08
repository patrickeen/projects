$(function(){

	var $orders = $('#orders');

	$.ajax({
		type: 'GET',
		//url: 'https://learnwebcode.github.io/json-example/animals-1.json',
		url: 'https://raw.githubusercontent.com/patrickeen/projects/master/coffee-shop/api/orders.json',
		success: function(orders){
			$.each(orders,function(i,order){
				$orders.append('<li>my order</li>');
			});
		}
	});

});