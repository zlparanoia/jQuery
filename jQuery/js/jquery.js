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

	$(".camera li").click(function() {
		$(this).clone(true).appendTo(".camera");
	});

	$("p").replaceWith("<strong>replace</strong>");
	$(".greet span").wrapInner("<strong></strong>");
	$(".greet").attr('id', 'greet');
	var id = $(".greet").attr("id");
	$(".display").removeClass("display");
	$(".tog").click(function() {
		$(".greet").toggleClass('har');
	});
	$(".tog").html();
	$("#email").focus(function() {
		var eval = $(this).val();
		if (eval === "请输入邮箱地址") {
			$(this).val("");
		}
	});
	$("#email").blur(function() {
		var eval = $(this).val();
		if (eval === "") {
			$(this).val("请输入邮箱地址");
		}
	});
	$("#single").val(["2号", "3号"]);
	$(document).bind("click", function(e) {
		$(e.target).closest('div').css({
			color: 'red'
		});
	});

});