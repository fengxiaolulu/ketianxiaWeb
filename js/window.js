$(function() {
	//浮窗
	$('#close_im').bind('click', function() {
		$('#main-im').css("height", "0");
		$('#im_main').hide();
		$('#open_im').show();
	});
	$('#open_im').bind('click', function(e) {
		$('#main-im').css("height", "272");
		$('#im_main').show();
		$(this).hide();
	});
	$('.go-top').bind('click', function() {
		$("body").animate({ scrollTop: "0" }, 1000);
	});
	$(".qq-container").bind('mouseenter', function() {
		$('#show1').show();
	})
	$(".qq-container").bind('mouseleave', function() {
		$('#show1').hide();
	})
	$("#weixin2").bind('mouseenter', function() {
		$('#show2').show();
	})
	$("#weixin2").bind('mouseleave', function() {
		$('#show2').hide();
	})
	$("#hid").bind('mouseenter', function() {
		$('.hid').show();
	})
	$("#hid").bind('mouseleave', function() {
		$('.hid').hide();
	})

	

	$(window).bind("scroll", function() {
		var sTop = $(window).scrollTop();
		console.log(sTop);

		if(sTop < 1300) {
			$(".wrap-list ul li").css({
				"opacity": "0",
				"transform": "translateY(200px) translateZ(-500px) rotateX(90deg)"
			})
		} else {
			$(".wrap-list ul li").css({
				"opacity": "1",
				"transition": "all 1.5s ease",
				"transform": "translateY(0px) translateZ(0px) rotateX(0deg)"
			})
		}
	});

	var i = 0;
	var $box_li = $("#banner div.btn ul li");
	var $ban_li = $("#banner ul li");
	var time = null;
	$box_li.hover(function() {
		i = $(this).index(); //i = 0-7
		play();
	});

	$("#banner").hover(function() { //鼠标移进来
		//显示
		clearInterval(time);
	}, function() { //鼠标移开
		//隐藏
		autoPlay1();
	});

	$(".next").click(function() { //鼠标点击
		i++; //i = i+1;
		play();
	});

	$(".pre").click(function() {
		i--;
		play();
	});

	function play() {
		i %= 3; //i=i%8余多少
		$box_li.eq(i).addClass("curry").siblings().removeClass("curry");
		$ban_li.eq(i).stop().fadeIn().siblings().stop().fadeOut();
	}

	function autoPlay1() {
		time = setInterval(function() {
			i++;
			play();
		}, 2000);
	}
	autoPlay1();

	window.onscroll = function() {
		var h = document.body.scrollTop;
		if(h < 80) {
			$(".fix").css("display", "none")
		} else {
			$(".fix").css("display", "block")
		}
	}
	var c = $("body").scrollTop();
	$(".fix").click(function() {
		$("body").animate({ scrollTop: "0" }, 1000);
	})
})