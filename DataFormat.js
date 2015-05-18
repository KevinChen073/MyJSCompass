/**
如何显示当前的日期?如何计算两个时间相差多少天、小时、分、秒?
*/
function MyDate(){
	this.curDate = new Date();
	/**
	*	@fn 	formatMyDate
	*	@param 	formatStr:格式 yyyy 表示年份   mm 月份  dd 日期   hh 时间  mm 分钟  ss 秒   
	*	@param 	curDate:Date()对象即可
	*	@brief 	日期格式化
	*/
	function formatMyDate(formatStr,curDate){
	    var str = formatStr;  
	    str=str.replace("yyyy",curDate.getFullYear());    
	    str=str.replace("mm",curDate.getMonth()>9?curDate.getMonth().toString():'0' + curDate.getMonth());
	    str=str.replace("dd",curDate.getDate()>9?curDate.getDate().toString():'0' + curDate.getDate());    
	    str=str.replace("hh",curDate.getHours()>9?curDate.getHours().toString():'0' + curDate.getHours());    
	    str=str.replace("mm",curDate.getMinutes()>9?curDate.getMinutes().toString():'0' + curDate.getMinutes());    
	    str=str.replace("ss",curDate.getSeconds()>9?curDate.getSeconds().toString():'0' + curDate.getSeconds());    
	    return str;    
	}
	/**
	*	@fn 	subDate
	*	@param 	d1\d2为需要计算的两个日期
	*	@param 	type可选为d\h\m\s分别为计算日、时、分、秒
	*	@brief 	两日期的差
	*	@return 根据参数中type的值，返回相差的时间
	*/
	function subDate(d1,d2,type){
		var sub = d1>d2?d1-d2:d2-d1;
		var sec = 1000;
		var min = sec*60;
		var hour = min*60;
		var day = hour*24;
		var result;
		switch(type){
			case 'd':
				result = Math.floor(sub/day);
			break;
			case 'h':
				result =  Math.floor(sub/hour);
			break;
			case 'm':
				result =  Math.floor(sub/min);
			break;
			case 's':
				result =  Math.floor(sub/sec);
			break;
		}
		return result;
	}

	console.log(this.formatMyDate("yyyy-mm-dd",curDate));

}