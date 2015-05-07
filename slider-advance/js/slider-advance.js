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
	//$(".idx_mainbanner .bannerLeftArrow").unbind("click");
	//$(".idx_mainbanner .bannerRightArrow").unbind("click");
	//
	var slideValue = parseFloat($('.right-content').width());
	var duringTime = 1000; //ms
	var picArray = $(".activeContent .pic-content div");
	var curContainer = $(".activeContent .curContent");
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

	//转换图片
	curContainer.animate({
		'left': -slideValue,
		'opacity':0
	}, duringTime, function() {
		curContainer.css('left', 0);
	}).removeClass("curContent").addClass("unCur");
	nextContainer.css('left', slideValue);
	nextContainer.animate({
		'left': 0,
		'opacity':1
	}, duringTime, function() {
		//recover btn function
		//$(".bannerLeftArrow").bind("click", "clickBtn(1)");
		//$(".bannerRightArrow").bind("click", "clickBtn(2)");
	}).addClass("curContent").removeClass("unCur");

	//转换文字
	var titleArray = $(".activeContent .titlelist > div");
	var curTitle = $(".activeContent .curTitle");
	var nextTitle = curTitle;
	if ("left" == dire) { //right btn
		if (curTitle.next().length) {
			nextTitle = curTitle.next();
		} else {
			nextTitle = titleArray.first();
		}
	} else {
		if (curTitle.prev().length) {
			nextTitle = curTitle.prev();
		} else {
			nextTitle = titleArray.last();
		}
	}
	curTitle.removeClass("curTitle").addClass("unCurTitle");
	nextTitle.addClass("curTitle").removeClass("unCurTitle");
}

function slider_select(num){
	var contentSelected = "#right-content"+num;
	var ListArray = $("#slider-advance .list li");

	//清除当前Content的active标记，并且隐藏
	$("#slider-advance .activeContent").hide().removeClass("activeContent");
	$("#slider-advance .active").removeClass("active");
	//为被选择Content增加Active标记，并且显示
	$(ListArray[num-1]).addClass("active");
	$(contentSelected).show().addClass("activeContent");
	//把当前图片Content中没显示的图片全部隐藏
	$(".activeContent .unCur").css("opacity",0);
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

$(function(){
	$("#right-content2").hide();
	$("#right-content3").hide();
	$("#right-content4").hide();
	$("#right-content5").hide();
	$(".activeContent .unCur").css("opacity",0);
});