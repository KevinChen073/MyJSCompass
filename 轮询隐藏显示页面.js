//参数：需要添加函数的列表
function showHide (){
	var newHandOnContent = $("#news-new-hand-on");
	var newAddContent = $("#news-new-add");
	var newPublicContent = $("#news-new-public");
	var newsAllContent = $("#news-all");
	//隐藏不需要的页面
	newAddContent.hide();
	newPublicContent.hide();
	newHandOnContent.hide();

	contentArray = [newsAllContent,newHandOnContent,newAddContent,newPublicContent];
	var curTr = $("#news-page .nav tr").children();
	for(var c = 0;c<curTr.length;c++){
		$(curTr[c]).bind("click",clickFn);
	}
}

function clickFn(event){
	var curTr = $("#news-page .nav tr").children();
	var tar = event.target;
	var cacheC;
	for (var k in curTr){
		if (curTr[k] == tar){
			cacheC = k;
		}
	}
	for(var k in contentArray){
		if(cacheC == k){
			contentArray[k].show();
		}else{
			contentArray[k].hide();
		}
	}
}