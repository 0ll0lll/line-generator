var names = ['Tom', 'Mike', 'Nina', 'Sam', 'Boris', 'Claire', 'Ralph', 'Susan', 'Jim', 'Marry', 'Winston', 'Alice', 'Grace', 'Patric', 'Aaron', 'Kisha']
var verbs = ['hates', 'likes', 'follows', 'doesn\'t know', 'is looking for', 'lies to' ]

$(document).ready(function () {
	$('.ok').click(function(){
		var randomN = Math.round(Math.random() * (names.length -1))
		var randomV = Math.round(Math.random() * (verbs.length - 1))
		var randomNN = Math.round(Math.random() * (names.length -1))
		$('.quote').append('<p>' + names[randomN] + ' ' + verbs[randomV] + ' ' + names[randomNN] + '</p>')
	})

	$('.clear').click(function(){
		$('.quote p').remove();
	})

	// $('.ok').mousedown(function(){
	// 	$(this).css({'top': '2px', 'background-color': 'rgb(0, 0, 210)', 'border': '2px solid rgb(0, 0, 210)'})
	// })
	//
	// $('.ok').mouseup(function(){
	// 	$(this).css({'top': '0px', 'background-color': '', 'border': ''})
	// })
	//
	// $('.clear').mousedown(function(){
	// 	$(this).css({'top': '2px', 'background-color': 'rgb(210, 0, 0)', 'border': '2px solid rgb(210, 0, 0)'})
	// })
	//
	// $('.clear').mouseup(function(){
	// 	$(this).css({'top': '0px', 'background-color': '', 'border': ''})
	// })
});
