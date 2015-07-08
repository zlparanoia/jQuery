$(function() {
	$(".tooltip").mouseover(function(e) {
		this.myTitle = this.title;
		this.title = "";
		var tooltip = "<div id='tooltip'>" + this.myTitle + "</div>";
		$("body").append(tooltip);
		$("#tooltip").css({
			"position": "absolute",
			"top": (e.pageY+10) + "px",
			"left": (e.pageX+10) + "px",
			"backgroundColor": "#272822",
			"color": "#fff"
		}).show("fast");
	}).mouseout(function() {
		this.title = this.myTitle;
		$("#tooltip").remove();
	}).mousemove(function(e) {
		$("#tooltip").css({
			"position": "absolute",
			"top": (e.pageY+10) + "px",
			"left": (e.pageX+10) + "px",
		});
	});

	$(".tool").mouseover(function(e) {
		this.myTitle = this.title;
		this.title = "";
		var tool = "<div id='tool'><img src='" + this.href + "' alt='预览图'><br/>" + this.myTitle +"</div>";
		$("body").append(tool);
		$("#tool").css({
			"position": "absolute",
			"top": (e.pageY+10) + "px",
			"left": (e.pageX+10) + "px",
			"backgroundColor": "#272822",
			"color": "#fff"
		}).show("fast");
	}).mouseout(function() {
		this.title = this.myTitle;
		$("#tool").remove();
	}).mousemove(function(e) {
		$("#tool").css({
			"top": (e.pageY+10) + "px",
			"left": (e.pageX+10) + "px"
			});
	});

	var page = 1;
	var i = 4;
	$("span.next").click(function() {
		var $parent = $(this).parents("div.v_show");
		var $v_show = $parent.find("div.v_content_list");
		var $v_content = $parent.find("div.v_content");

		var v_width = $v_content.width();
		var len = $v_show.find("li").length;
		var page_count = Math.ceil(len / i);

		if (!$v_show.is(":animated")) {
			if (page == page_count) {
				$v_show.animate({
					position: "absolute",
					left: "0px"
				}, "slow");
				page = 1;
			} else {
				$v_show.animate({
					position: "absolute",
					left: "-="+v_width
				}, "slow");
				page++;
			}
			$parent.find("span").eq((page - 1)).addClass('current')
				   .siblings().removeClass('current');
		}
	});
});

