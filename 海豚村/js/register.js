$(function(){
	function isPhoneNo(phone){
		var reg=/^1[3578]\d{9}$/;
		return reg.test(phone);
	}
	//当获得焦点时(再次输入时)去掉之前的警示
		$('.J_phone_input').focus(function(){
			$('.wrong').parents('.form_group').removeClass('form_error');
		})
			//当获得焦点时(再次输入时)去掉之前的警示
		$('#Password').focus(function(){
			$('.Ppassword').parents('.form_group').removeClass('form_error');
		})
		//当获得焦点时(再次输入时)去掉之前的警示
			$('#Repassword').focus(function(){
				$('.repeat').parents('.form_group').removeClass('form_error');
			})
			//每个文本框失去焦点时触发判断  (号码)
			$('.J_phone_input').blur(function(){
				if($.trim($('.J_phone_input').val()).length==0){
			$('.wrong').show().parents('.form_group').addClass('form_error');
			
			}else{
			if(isPhoneNo($.trim($('.J_phone_input').val()))==false){
				$('.wrong').text("请输入正确的号码").show().parents('.form_group').addClass('form_error');
				
			}
		}
	})
			//每个文本框失去焦点时触发判断  (密码)
			$('#Password').blur(function(){
				if($.trim($('#Password').val()).length==0){
			$('.Ppassword').show().parents('.form_group').addClass('form_error');
			
			}else{
			if($.trim($('#Password').val()).length<6||$.trim($('#Password').val()).length>16){
			$('.Ppassword').text("6-16个数字、字母或符号区分大小写").show().parents('.form_group').addClass('form_error');
			
				}
			}
		})
			//每个文本框失去焦点时触发判断  (重复密码)
			$('#Repassword').blur(function(){
				if($.trim($('#Repassword').val()).length==0){
			$('.repeat').show().parents('.form_group').addClass('form_error');
			
			}else{
			if($('#Repassword').val()!=$('#Password').val()){
			$('.repeat').text("两次密码输入不一致").show().parents('.form_group').addClass('form_error');
			
				}
			}
		})
	$('#by_phone').click(function(){
//		判断号码
		if($.trim($('.J_phone_input').val()).length==0){
			$('.wrong').show().parents('.form_group').addClass('form_error');
			return;
		}else{
			if(isPhoneNo($.trim($('.J_phone_input').val()))==false){
				$('.wrong').text("请输入正确的号码").show().parents('.form_group').addClass('form_error');
				return;
				}
		}
		
//		判断密码
		if($.trim($('#Password').val()).length==0){
			$('.Ppassword').show().parents('.form_group').addClass('form_error');
			return;
		}else{
			if($.trim($('#Password').val()).length<6||$.trim($('#Password').val()).length>16){
			$('.Ppassword').text("6-16个数字、字母或符号区分大小写").show().parents('.form_group').addClass('form_error');
			return;
		}
	}
		
//		判断重复密码
		if($.trim($('#Repassword').val()).length==0){
			$('.repeat').show().parents('.form_group').addClass('form_error');
			return;
		}else{
			if($('#Repassword').val()!=$('#Password').val()){
			$('.repeat').text("两次密码输入不一致").show().parents('.form_group').addClass('form_error');
			return;
			}
		}
		//点击注册按钮后
		//现获取之前保存在cookie中的用户
		var users=$.cookie("users")?JSON.parse($.cookie("users")):[]
		//遍历users数组，判断是否存在该用户，如果存在则不能注册
		for(var i=0;i<users.length;i++){
			if($('.J_phone_input').val()==users[i].name){
				$('.wrong').text("已有该用户").show().parents('.form_group').addClass('form_error');
				return;
			}
		}
		//需要注册的用户(保存到cookie中)
			var user={
				 name:$('.J_phone_input').val(),
				 passwords:$('#Password').val()
			}
			users.push(user);//添加新用户
			//保存到cookie中
			$.cookie("users",JSON.stringify(users),{expires:30,path:"/"})
			
		window.location.href="enter.html";	
	})
	//不勾选协议不能点确认
	$("input[type=checkbox]").click(function(){
		if($("input[type=checkbox]").is(":checked")){
			$(".submit_btn").css("cursor","pointer");
			$(".submit_btn").attr("disabled",false);
		}else{
			$(".submit_btn").css("cursor","not-allowed");
			$(".submit_btn").attr("disabled","disabled")
		}
	
	})
	
})