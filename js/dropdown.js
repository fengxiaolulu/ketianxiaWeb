$(function() {
	var nav = document.getElementById('nav');
	var navlist = nav.querySelectorAll('.navlist');
	for(var i = 0; i < navlist.length; i++) {
		navlist[i].onmouseover = function() {
			var navdropdown = this.querySelector('.navdropdown');
			if(navdropdown) {
				navdropdown.style.display = 'block';
			}

		}
		navlist[i].onmouseout = function() {
			var navdropdown = this.querySelector('.navdropdown');
			if(navdropdown) {
				navdropdown.style.display = 'none';
			}

		}
	}
	
	var hid = document.getElementById('hid');
	var show = hid.querySelector('.p2');
	hid.onmouseover = function() {			
		show.style.display = 'block';
	}
	hid.onmouseout = function() {			
		show.style.display = 'none';
	}

})

/*禁止左右滑动*/
$(function() {
	$('body').bind('touchstart', function(e) {
		startX = e.originalEvent.changedTouches[0].pageX,
			startY = e.originalEvent.changedTouches[0].pageY;
	});
	$('body').bind('touchmove', function(e) {
		endX = e.originalEvent.changedTouches[0].pageX,
			endY = e.originalEvent.changedTouches[0].pageY;
		distanceX = endX - startX;
		distanceY = endY - startY;
		if(Math.abs(distanceX) > Math.abs(distanceY) && distanceX > 0) {
			e.preventDefault();
		} else if(Math.abs(distanceX) > Math.abs(distanceY) && distanceX < 0) {
			e.preventDefault();
		}
	});
	//			document.ontouchmove = function(e) {
	//				e.preventDefault();
	//			}	
})

$(function() {
	var windoWidth = $(window).width();
	var windowHeight = $(window).height();
	$(".navClick").click(function(e) {
		//$(".screen").toggle();
		$("body").toggleClass("body_Skin");
		e.stopPropagation();
	});

	$(".pages a").attr("style", "none");
	$(".pages span").attr("style", "none");
});

$(function () {
    $(window).scroll(function () {
        var scrollTop = $(window).scrollTop();

        if (scrollTop > 150) {
            $('#nytitle').addClass('nyhid');
        } else {

            $('#nytitle').removeClass('nyhid');
        }
    });
});

window._bd_share_config = {
	"common": {
		"bdSnsKey": {},
		"bdText": "",
		"bdMini": "2",
		"bdMiniList": false,
		"bdPic": "",
		"bdStyle": "1",
		"bdSize": "16"
	},
	"share": {},
	"selectShare": {
		"bdContainerClass": null,
		"bdSelectMiniList": ["qzone", "tsina", "tqq", "renren", "weixin"]
	}
};
with(document) 0[(getElementsByTagName('head')[0] || body).appendChild(createElement('script')).src = 'http://bdimg.share.baidu.com/static/api/js/share.js?v=89860593.js?cdnversion=' + ~(-new Date() / 36e5)];