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
});

