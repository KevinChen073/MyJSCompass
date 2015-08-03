/**
 * [EasyCrypto 用于简单加密，加密原理为对AscII字符进行加减]
 * @type {Object}
 * @method : compile
 * @method : uncompile
 * @author : 远宏
 * @version: 1.0
 */
var EasyCrypto = {
	compile : function(code){
		var newStr ="";
		for( var k in code){
			var cur=String.fromCharCode(code.charCodeAt(k)+code.length);
			newStr = newStr + cur;
		}
		return newStr;
	},

	uncompile : function(code){
		var newStr ="";
		for( var k in code){
			var cur=String.fromCharCode(code.charCodeAt(k)-code.length);
			newStr = newStr + cur;
		}
		return newStr;
	}
};

//test
//encode:var k =EasyCrypto.compile("i dont know")
//decode:EasyCrypro.uncompile(k);