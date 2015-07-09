$(function() {
	// $(".parent > span").css({
	// 	color: 'red'
	// });
	// $(".myUl li:lt(2)").css({
	// 	color: 'red'
	// });
	// $("li:contains('line')").css({
	// 	listStyle: 'none'
	// });
	// $("select :selected").css({
	// 	border: '2px solid red'
	// });

	// var $camera = $(".camera li:gt(2)");
	// $camera.hide();
	// var $button = $(".display");
	// $button.click(function() {
	// 	if ($camera.is(":visible")) {
	// 		$camera.hide();
	// 		$(this).text('显示');
	// 	} else {
	// 		$camera.show();
	// 		$(this).text('隐藏');
	// 	}
	// });

	// $('<li></li>').appendTo(".myUl");
	// $(".myLi").prepend('Some text');

	// $("<strong>你好</strong>").insertAfter(".greet");
	// $(".myLi").hover(function() {
	// 	$(this).html("hover状态");
	// }, function() {
	// 	$(this).html("正常状态");
	// });
	// $(".myLi").click(function() {
	// 	var test = $(".myLi").remove();
	// 	$(".myUl").append(test);
	// });

	// $(".camera li").click(function() {
	// 	$(this).clone(true).appendTo(".camera");
	// });

	// $("p").replaceWith("<strong>replace</strong>");
	// $(".greet span").wrapInner("<strong></strong>");
	// $(".greet").attr('id', 'greet');
	// var id = $(".greet").attr("id");
	// $(".display").removeClass("display");
	// $(".tog").click(function() {
	// 	$(".greet").toggleClass('har');
	// });
	// $(".tog").html();
	// $("#email").focus(function() {
	// 	var eval = $(this).val();
	// 	if (eval === "请输入邮箱地址") {
	// 		$(this).val("");
	// 	}
	// });
	// $("#email").blur(function() {
	// 	var eval = $(this).val();
	// 	if (eval === "") {
	// 		$(this).val("请输入邮箱地址");
	// 	}
	// });
	// $("#single").val(["2号", "3号"]);
	// $(document).bind("click", function(e) {
	// 	$(e.target).closest('div').css({
	// 		color: 'red'
	// 	});
	// });

	// $(".header").bind("click", function() {
	// 	$(this).next().toggle();
	// });

	// $("span").bind("click", function(event) {
	// 	var text = $("#msg").html() + "<p>内层div被单击</p>";
	// 	$("#msg").html(text);
	// 	event.stopPropagation();
	// });
	// $("#content").bind("click", function(event) {
	// 	var text = $("#msg").html() + "<p>外层div被单击</p>";
	// 	$("#msg").html(text);
	// 	event.stopPropagation();
	// });

	// $("#sub").bind("click", function(event) {
	// 	if ($("#user").val() === "") {
	// 		$("#tip").html("用户名不能为空");
	// 		return false;
	// 	}
	// });

	// $("#btn").bind("click", myFun1 = function() {
	// 	$("#word").append("<p>绑定函数1</p>");
	// }).one("click", myFun2 = function() {
	// 	$("#word").append("<p>绑定函数2</p>");
	// }).bind("click", myFun3 = function() {
	// 	$("#word").append("<p>绑定函数3</p>");
	// });

	// $("#but").click(function() {
	// 	$("#btn").unbind('click', myFun2);
	// });

	// $("#btn").click();
	// $("#but").bind("mouseover mouseout", function() {
	// 	$(this).toggleClass("over");
	// });

	// $("#but").bind("click", function() {
	// 	$(".opa").slideToggle("slow", function() {
	// 		$(this).css({
	// 			color: "red"
	// 		});
	// 	});
	// });
	// $("#btn").bind("click", function() {
	// 	$(".panel").animate({
	// 			left: "100px",
	// 			height: "150px"
	// 		}, 1000)
	// 		.animate({
	// 			left: "200px",
	// 			width: "300px"
	// 		}, 2000, function() {
	// 			$(this).css({
	// 				border: "1px solid #000"
	// 			});
	// 		});
	// });
	// $(".panel").hover(function() {
	// 	$(this).stop(true)
	// 		.animate({
	// 			height: "200px",
	// 			width: "300px"
	// 		}, 2000)
	// 		.animate({
	// 			height: "400px",
	// 			width: "200px"
	// 		});
	// }, function() {
	// 	$(this).stop(true)
	// 		   .animate({
	// 		   	height: "100px",
	// 		   	width: "100px"
	// 		   }, 2000)
	// 		   .animate({
	// 		   	height: "200px",
	// 		   	width: "50px"
	// 		   });
	// });

	// $("#bigger").bind("click", function() {
	// 	$("#text").animate({
	// 		height: "+=50px",
	// 		scrollTop: "+=50px"
	// 	});
	// });
	// $("#smaller").bind("click", function() {
	// 	if ($("#text").height() > 50) {
	// 		$("#text").height($("#text").height() - 50);
	// 	}
	// });

	$("#checkedAll").click(function() {
		$("[name=items]:checkbox").prop("checked", true)
	});
	$("#checkedNo").click(function() {
		$("[name=items]:checkbox").prop("checked", false);
	});
	$("#checkedRev").click(function() {
		$("[name=items]:checkbox").each(function() {
			this.checked = !this.checked;
		});
	});

	$("#add").click(function() {
		var $options = $("#select1 option:selected");
		$options.appendTo('#select2');
	});
	$("#add_all").click(function() {
		var $opts = $("#select1 option");
		$opts.appendTo('#select2');
	});
	$("#remove").click(function() {
		var $options = $("#select2 option:selected");
		$options.appendTo('#select1');
	});
	$("#remove_all").click(function() {
		var $opts = $("#select2 option");
		$opts.appendTo('#select1');
	});
});

