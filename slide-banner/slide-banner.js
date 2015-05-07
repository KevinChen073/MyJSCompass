/**
@fn SlideItem
@brief 该函数用于首页的banner自动转换图片,使用闭包存储当前curPic
@param dire:原背景离开的方向,true为左，false为右,如果参数非bool，则默认为向左
*/
var SlideItem = function(dire) {
	if(dire != 'left' && dire != 'right'){
		dire = 'right';//set default
	}
	//stop btn function
	$(".idx_mainbanner .bannerLeftArrow").unbind("click");
	$(".idx_mainbanner .bannerRightArrow").unbind("click");
	//
	var slideValue = parseFloat($('.idx_mainbanner').width());
	var duringTime = 1000; //ms
	var picArray = $(".bgContainer");
	var picLen = picArray.length;
	var curContainer = $(".active");
	var nextContainer = curContainer;
	if ("left" == dire) { //right btn
		if (curContainer.next().length) {
			nextContainer = curContainer.next();
		} else {
			nextContainer = picArray.first();
		}
		slideValue = -slideValue;
	} else {
		if (curContainer.prev().length) {
			nextContainer = curContainer.prev();
		} else {
			nextContainer = picArray.last();
		}
	}

	curContainer.animate({
		'left': -slideValue,
		'opacity':0
	}, duringTime, function() {
		curContainer.css('left', 0);
	}).removeClass("active").addClass("unactive");
	nextContainer.css('left', slideValue);
	nextContainer.animate({
		'left': 0,
		'opacity':1
	}, duringTime, function() {
		//recover btn function
		//$(".bannerLeftArrow").bind("click", "clickBtn(1)");
		//$(".bannerRightArrow").bind("click", "clickBtn(2)");
	}).addClass("active").removeClass("unactive");
}



var timer = setInterval(SlideItem,5000);

//设置index页面转换js
var clickBtn = function(dire){
	//reset time
	if (timer){
		clearInterval(timer)
		timer = setInterval(SlideItem,5000);
	}
	SlideItem(dire);
}