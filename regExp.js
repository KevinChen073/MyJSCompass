/**一个字符串包含一定的语法,比如”你好吗?{name},请于{date}时间.........”
其中{}包含起 来的是变量,如{name}、{date},如何用正则判断:
这个字符串是否符合语法规则,就是{和}的数量是一样的,而且不支持嵌套 这个字符串有多少个变量?
*/
function useReg(str){

	var result = '';
	var newstr = str.replace(/\{[a-z]*[0-9]*\}/g,"__count__");
	if(-1 == newstr.search(/\{|\}/)){
		result+="符合语法规则,有";
	}else{
		result+="不符合语法规则，有";
	}
	var strArray = newstr.split("__count__");
	result += strArray.length-1+"个变量";
	return result;
}