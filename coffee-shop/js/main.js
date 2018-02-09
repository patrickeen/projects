$(function(){

	var $orders = $('#orders');
	var $name = $('#name');
	var $drink = $('#drink');
	$.ajax({
		type: 'GET',
		//url: 'https://learnwebcode.github.io/json-example/animals-1.json',
		//url: 'https://raw.githubusercontent.com/patrickeen/projects/master/coffee-shop/api/orders.json',
		url: 'api/orders.json',
		success: function(orders){
			$.each(orders,function(i,order){
				$orders.append('<li>name: ' + order.name + ', drink: ' + order.drink + '</li>');
			});
		},
		error: function(){
			alert('error loading orders');
		}

	});
	
	//adding new orders
	$('#add-order').on('click',function(){

		var order = {
			name: $name.val(),
			drink: $drink.val(),
		};

		$.ajax({
			type: 'POST',
			url: 'api/orders.json',
			data: order,
			success: function(newOrder){
				$orders.append('<li>name: ' + order.name + ', drink: ' + order.drink + '</li>');
			},
			error: function(){
				alert('error saving order');
			}
		});

	});

});