///////////////////////////////////////////////////////
/*目录
/*1、前端实现当前导航提示
/*2、下拉菜单
/*3、APP的消息提示框
/*4、密码确认
/*5、删除确认
/*
///////////////////////////////////////////////////////


/*获取当前地址栏URL,根据此来判断当前页，从页实现页面导航不同样式*/
<!--
thisURL = document.URL;
$("#us_l ul li a").each(function(){
	if(this.href == thisURL){
		$(this).addClass("cururl");
		return false;
	}
});
$("#us_l ul li a").click(function(){
	$("#us_l ul li a").removeClass("cururl");
	$(this).addClass("cururl");
	setTimeout("toTop()", 50);
});
//-->

/**
//@fn bindHideShow
//@brief 绑定导航栏子菜单，
//@param jquery对象
//@author Kevin Chen
*/
function bindHideShow(selector1,selector2){
  liSelector.find(">a").attr("href","#");
  liSelector.on("mouseenter",function(){
    olSelector.show();
  });
  liSelector.on("mouseleave",function(){
    olSelector.hide();
  });
}

 /**
 * [bindHideShow 绑定下拉菜单]
 * @param  {[jquery对象]} liSelector [父元素]
 * @param  {[jquery对象]} olSelector [子元素]
 * @return {[type]}            [无]
 * @author Kevin Chen
 * @version v1.1
 */
function bindHideShow(liSelector,olSelector){
  liSelector.on("click",function(){
    if(liSelector.attr("isShown")=="1"){
      liSelector.attr("isShown","0");
      olSelector.slideUp();

      //修改样式
      $(this).find("img").attr("src","__APP__/Style/gold/images/modify707/icon_a_xiala.png");
    }else{
      liSelector.attr("isShown","1");
      olSelector.slideDown();

      $(this).find("img").attr("src","__APP__/Style/gold/images/modify707/icon_a_shouqi.png");
    }
  });
}
$(function(){
    //把列表进行绑定
    var h3 = $("#fxncontent>h3");
    var p = $("#fxncontent>p");
    for(var k in h3){
        bindHideShow(h3.eq(k),p.eq(k));
    }
});

/**
 * [appMsgDialog 在WebAPP中显示msg，并且点击可以使之消失]
 * @param  {string} msg [需要显示的文字]
 * @return {null}     [无]
 * @author Kevin Chen
 * @version v1.2
 */
function appMsgDialog(msg){
  var time = 5000;//显示的时间

  var dialog = $("<div class='appMsgDialog' id='__appMsgDia'><div><span>"+msg+"</span></div></div>");
  $("html").append(dialog);

  dialog.fadeIn();
  //使对话框在点击后消失
  dialog.on("click",function(){
    dialog.fadeOut(function(){
      dialog.remove();
    });
  });
  setTimeout(function(){
    dialog.fadeOut(function(){
      dialog.remove();
    })
  },time);
}

/*
css:
#__appMsgDia {
  position: fixed;
  top: 70%;
  width: 100%;
  height: auto;
  font-size: 14px;
  color: white;
  text-align: center;
}
  #__appMsgDia span {
    background: rgba(0, 0, 0, 0.5);
    width: 200px;
    margin: 0 auto;
    height: 100%;
    line-height: 20px;
    border-radius: 5px;
    padding: 5px;
    display: inline-block;
  }
 */


/**
 * [BlurPwd 检测密码是否正确]
 */
function BlurPwd() {
    var txt = "#txtPwd2";
    var td = "#dvPwd";
    var pat = new RegExp("^.{6,20}$", "i");
    var str = $(txt).val();
    if (pat.test(str)) {
        //格式正确
        $(td).html(GetP("reg_ok", arrOk["dvPwd"]));
    }
    else {
        $(td).html(GetP("reg_wrong", arrWrong["dvPwd"]));
    }
}

/**
 * [BlurRepwd 检测重复密码是否正确]
 */
function BlurRepwd() {
    var txt = "#txtRepwd";
    var td = "#dvRepwd";
    var str = $(txt).val();
    if (str == $("#txtPwd2").val() && str.length > 5) {
        //格式正确
        $(td).html(GetP("reg_ok", arrOk["dvRepwd"]));
    }
    else {
        $(td).html(GetP("reg_wrong", arrWrong["dvRepwd"]));
    }
}

//检验 验证码
function BlurCode() {
    var txt = "#txtCode";
    var td = "#dvCode";
    var pat = new RegExp("^[\\da-z]{4}$", "i");
    var str = $(txt).val();
    if (pat.test(str)) {
        //格式正确
        $.post("/member/common/ckcode/", { Action: "post", Cmd: "CheckVerCode", sVerCode: str }, AsyncVerCode);
    }
    else {
        $(td).html(GetP("reg_wrong", arrWrong["dvCode"]));
    }
}

//属性：使该输入框只能输入数字
html(onkeyup="this.value=this.value.replace(/\D/g,'')")


//删除确认
function delConfirm( message ){
    if(message == null){
        message = "��ㄧ‘瀹�瑕������ゆ��璁板�����锛�";
    }
    return window.confirm(message);
}
