$(function(){
//	失去焦点事件
$(".J_phone_input").blur(function(){
	if($.trim($(".J_phone_input").val()).length==0){
				$('.wrong').text("请输入账号").show().parents('.form_group').addClass('form_error');
				
			}
})
//获得焦点
//$(".J_phone_input").focus(function(){
//	$('.wrong').parents('.form_group').removeClass('form_error');
//})

$('#Password').blur(function(){
	if($.trim($('#Password').val()).length<6||$.trim($('#Password').val()).length>16){
			$('.Ppassword').text("6-16个数字、字母或符号区分大小写").show().parents('.form_group').addClass('form_error');
			}
})
$('#Password').focus(function(){
	$('.Ppassword').hide().parents('.form_group').removeClass('form_error');
})

	//点击登录按钮
	$('.submit_btn').click(function(){
		
		//获取cookie中注册过的所有用户
		var users=$.cookie("users");
		if(users){
			users=JSON.parse(users);
			//遍历查找是否有匹配的用户
			var isExist=false; //表示是否存在该用户
			
			for(var i=0;i<users.length;i++){
				if($(".J_phone_input").val()==users[i].name&&$("#Password").val()==users[i].passwords){
					isExist=true;
					window.location.href="index.html";
//					$('.topbar_list').firstChild().text($(".J_phone_input").val());
				}
			}
			if(!isExist){
				$('.wrong').show().parents('.form_group').addClass('form_error');
			}
		}
	})
})