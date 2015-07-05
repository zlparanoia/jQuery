$(function() {
	$(".parent > span").css({
		color: 'red'
	});
	$(".myUl li:lt(2)").css({
		color: 'red'
	});
	$("li:contains('line')").css({
		listStyle: 'none'
	});
	$("select :selected").css({
		border: '2px solid red'
	});

	var $camera = $(".camera li:gt(2)");
	$camera.hide();
	var $button = $(".display");
	$button.click(function() {
		if ($camera.is(":visible")) {
			$camera.hide();
			$(this).text('显示');
		} else {
			$camera.show();
			$(this).text('隐藏');
		}
	});

	$('<li></li>').appendTo(".myUl");
	$(".myLi").prepend('Some text');

	$("<strong>你好</strong>").insertAfter(".greet");
	$(".myLi").hover(function() {
		$(this).html("hover状态");
	}, function() {
		$(this).html("正常状态");
	});
	$(".myLi").click(function() {
		var test = $(".myLi").remove();
		$(".myUl").append(test);
	});
	
	

});