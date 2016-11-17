$(function(){
	//轮播图
	$('.slider').eq(0).css("background-color","rgb(255,242,197)");
	$('.slider').eq(1).css("background-color","rgb(254,254,246)");
	$('.slider').eq(2).css("background-color","rgb(234,231,224)");
	$('.slider').eq(3).css("background-color","rgb(251,77,126)");
	$('.slider').eq(4).css("background-color","rgb(33,77,126)");
	$('.slider').eq(0).show();
	var timer=null;
	var i=0;
	var length=$('.slider').length;
	$('.slider_pagination>li').eq(0).addClass('active');
//	console.log(length);
	function  carousel(){
		i++;
		if(i==length){
			i=0;
		}
		$('.slider').eq(i).fadeIn(300).siblings('.slider').fadeOut(300);
		$('.slider_pagination>li').eq(i).addClass('active').siblings().removeClass('active');
		
	}
	function left(){
		i--;
		if(i==-1){
			i=length-1;
		}
//		console.log(i);
		$('.slider').eq(i).fadeIn(300).siblings('.slider').fadeOut(300);
		$('.slider_pagination>li').eq(i).addClass('active').siblings().removeClass('active');
		
	}
	$('.slider_pagination>li').hover(function(){
		var j=$(this).index();
		$('.slider').eq(j).fadeIn(300).siblings('.slider').fadeOut(300);
		$('.slider_pagination>li').eq(j).addClass('active').siblings().removeClass('active');
	})
	
	$('.btn_prev').click(function(){
		left();
	});
	
	$('.btn_right').click(function(){
		carousel();
	});
	
	$('.slider_wrap').hover(function(){
		$('.btn_prev').show();
		$('.btn_right').show();
		clearInterval(timer);
	},function(){
		$('.btn_prev').hide();
		$('.btn_right').hide();
		timer=setInterval(function(){
		carousel();
	},3000);
	});
	// 定时器
	timer=setInterval(function(){
		carousel();
	},2500);
	
	
	//content
	
	$('.sales_list>li').hover(function(){
		$(this).stop().animate({paddingTop:15},300);
	},function(){
		$(this).stop().animate({paddingTop:25},300);
	})
	
	$('.bottom>li').hover(function(){
		$(this).stop().animate({marginTop:-5},300);
	},function(){
		$(this).stop().animate({marginTop:0},300);
	})
	
	$('.goods_last').hover(function(){
		$(this).stop().animate({paddingTop:0},300);
	},function(){
		$(this).stop().animate({paddingTop:8},300)
	})
	$('.goods').hover(function(){
		$(this).stop().animate({paddingTop:0},300);
	},function(){
		$(this).stop().animate({paddingTop:8},300);
	})
//	/母婴轮播图/
	$('.classify_mb .slidersjs_newitem').eq(0).show();
	$('.classify_mb .slidersjs_pagination_item').eq(0).addClass('black');
	
	var smallTimer=null;
	var j=0;
	var smalllength=$('.classify_mb .slidersjs_newitem').length;
	function small(){
		j++;
		if(j==smalllength){
			j=0;
		}
		$('.classify_mb .slidersjs_newitem').eq(j).fadeIn(300).siblings('.slidersjs_newitem').fadeOut(300);
		$('.classify_mb .slidersjs_pagination_item').eq(j).addClass('black').siblings('.slidersjs_pagination_item').removeClass('black');
	}
	smallTimer=setInterval(function(){
		small();
	},2000);
	
	$('.classify_mb .slidersjs_pagination_item').hover(function(){
		var k=$(this).index();
		$('.slidersjs_newitem').eq(k).fadeIn(300).siblings('.slidersjs_newitem').fadeOut(300);
		$('.slidersjs_pagination_item').eq(k).addClass('black').siblings('.slidersjs_pagination_item').removeClass('black');
	});
	
	$('.classify_mb .slidersjs_control').hover(function(){
		clearInterval(smallTimer);
	},function(){
		smallTimer=setInterval(function(){
		small();
	},2000);
	})
	
	$('.goods_new_pic').hover(function(){
		$(this).stop().animate({marginTop:-5},50);
	},function(){
		$(this).stop().animate({marginTop:0},50);
	})
	//玩具轮播图
	$('.classify_toy .slidersjs_newitem').eq(0).show();
	$('.classify_toy .slidersjs_pagination_item').eq(0).addClass('black');
	
	var smallTimer2=null;
	var a=0;
	var smalllength2=$('.classify_toy .slidersjs_newitem').length;
	function small2(){
		a++;
		if(a==smalllength2){
			a=0;
		}
		$('.classify_toy .slidersjs_newitem').eq(a).fadeIn(300).siblings('.slidersjs_newitem').fadeOut(300);
		$('.classify_toy .slidersjs_pagination_item').eq(a).addClass('black').siblings('.slidersjs_pagination_item').removeClass('black');
	}
	smallTimer2=setInterval(function(){
		small2();
	},2500);
	
	$('.classify_toy .slidersjs_pagination_item').hover(function(){
		var k=$(this).index();
		$('.slidersjs_newitem').eq(k).fadeIn(300).siblings('.slidersjs_newitem').fadeOut(300);
		$('.slidersjs_pagination_item').eq(k).addClass('black').siblings('.slidersjs_pagination_item').removeClass('black');
	});
	
	$('.classify_toy .slidersjs_control').hover(function(){
		clearInterval(smallTimer2);
	},function(){
		smallTimer2=setInterval(function(){
		small2();
	},2500);
	})
	
//	营养轮播图
$('.classify_hn .slidersjs_newitem').eq(0).show();
	$('.classify_hn .slidersjs_pagination_item').eq(0).addClass('black');
	
	var smallTimer3=null;
	var b=0;
	var smalllength3=$('.classify_toy .slidersjs_newitem').length;
	function small3(){
		b++;
		if(b==smalllength3){
			b=0;
		}
		$('.classify_hn .slidersjs_newitem').eq(a).fadeIn(300).siblings('.slidersjs_newitem').fadeOut(300);
		$('.classify_hn .slidersjs_pagination_item').eq(a).addClass('black').siblings('.slidersjs_pagination_item').removeClass('black');
	}
	smallTimer3=setInterval(function(){
		small3();
	},2000);
	
	$('.classify_hn .slidersjs_pagination_item').hover(function(){
		var k=$(this).index();
		$('.slidersjs_newitem').eq(k).fadeIn(300).siblings('.slidersjs_newitem').fadeOut(300);
		$('.slidersjs_pagination_item').eq(k).addClass('black').siblings('.slidersjs_pagination_item').removeClass('black');
	});
	
	$('.classify_hn .slidersjs_control').hover(function(){
		clearInterval(smallTimer3);
	},function(){
		smallTimer3=setInterval(function(){
		small3();
	},2000);
	});
//	美容轮播图
$('.classify_beauty .slidersjs_newitem').eq(0).show();
	$('.classify_beauty .slidersjs_pagination_item').eq(0).addClass('black');
	
	var smallTimer4=null;
	var c=0;
	var smalllength4=$('.classify_beauty .slidersjs_newitem').length;
	function small4(){
		c++;
		if(c==smalllength4){
			c=0;
		}
		$('.classify_beauty .slidersjs_newitem').eq(a).fadeIn(300).siblings('.slidersjs_newitem').fadeOut(300);
		$('.classify_beauty .slidersjs_pagination_item').eq(a).addClass('black').siblings('.slidersjs_pagination_item').removeClass('black');
	}
	smallTimer4=setInterval(function(){
		small4();
	},2500);
	
	$('.classify_beauty .slidersjs_pagination_item').hover(function(){
		var k=$(this).index();
		$('.slidersjs_newitem').eq(k).fadeIn(300).siblings('.slidersjs_newitem').fadeOut(300);
		$('.slidersjs_pagination_item').eq(k).addClass('black').siblings('.slidersjs_pagination_item').removeClass('black');
	});
	
	$('.classify_beauty .slidersjs_control').hover(function(){
		clearInterval(smallTimer4);
	},function(){
		smallTimer4=setInterval(function(){
		small4();
	},2500);
	});
//	护理轮播图
$('.classify_care .slidersjs_newitem').eq(0).show();
	$('.classify_care .slidersjs_pagination_item').eq(0).addClass('black');
	
	var smallTimer5=null;
	var d=0;
	var smalllength5=$('.classify_care .slidersjs_newitem').length;
	function small5(){
		d++;
		if(d==smalllength5){
			d=0;
		}
		$('.classify_care .slidersjs_newitem').eq(a).fadeIn(300).siblings('.slidersjs_newitem').fadeOut(300);
		$('.classify_care .slidersjs_pagination_item').eq(a).addClass('black').siblings('.slidersjs_pagination_item').removeClass('black');
	}
	smallTimer5=setInterval(function(){
		small5();
	},2000);
	
	$('.classify_care .slidersjs_pagination_item').hover(function(){
		var k=$(this).index();
		$('.slidersjs_newitem').eq(k).fadeIn(300).siblings('.slidersjs_newitem').fadeOut(300);
		$('.slidersjs_pagination_item').eq(k).addClass('black').siblings('.slidersjs_pagination_item').removeClass('black');
	});
	
	$('.classify_care .slidersjs_control').hover(function(){
		clearInterval(smallTimer5);
	},function(){
		smallTimer5=setInterval(function(){
		small5();
	},2000);
	});
//	厨卫轮播
$('.classify_hk .slidersjs_newitem').eq(0).show();
	$('.classify_hk .slidersjs_pagination_item').eq(0).addClass('black');
	
	var smallTimer6=null;
	var e=0;
	var smalllength6=$('.classify_hk .slidersjs_newitem').length;
	function small6(){
		e++;
		if(e==smalllength6){
			e=0;
		}
		$('.classify_hk .slidersjs_newitem').eq(a).fadeIn(300).siblings('.slidersjs_newitem').fadeOut(300);
		$('.classify_hk .slidersjs_pagination_item').eq(a).addClass('black').siblings('.slidersjs_pagination_item').removeClass('black');
	}
	smallTimer6=setInterval(function(){
		small6();
	},2500);
	
	$('.classify_hk .slidersjs_pagination_item').hover(function(){
		var k=$(this).index();
		$('.slidersjs_newitem').eq(k).fadeIn(300).siblings('.slidersjs_newitem').fadeOut(300);
		$('.slidersjs_pagination_item').eq(k).addClass('black').siblings('.slidersjs_pagination_item').removeClass('black');
	});
	
	$('.classify_hk .slidersjs_control').hover(function(){
		clearInterval(smallTimer6);
	},function(){
		smallTimer6=setInterval(function(){
		small6();
	},2500);
	});
//	美食轮播
$('.classify_food .slidersjs_newitem').eq(0).show();
	$('.classify_food .slidersjs_pagination_item').eq(0).addClass('black');
	
	var smallTimer7=null;
	var f=0;
	var smalllength7=$('.classify_hk .slidersjs_newitem').length;
	function small7(){
		f++;
		if(f==smalllength7){
			f=0;
		}
		$('.classify_food .slidersjs_newitem').eq(a).fadeIn(300).siblings('.slidersjs_newitem').fadeOut(300);
		$('.classify_food .slidersjs_pagination_item').eq(a).addClass('black').siblings('.slidersjs_pagination_item').removeClass('black');
	}
	smallTimer7=setInterval(function(){
		small7();
	},2000);
	
	$('.classify_food .slidersjs_pagination_item').hover(function(){
		var k=$(this).index();
		$('.slidersjs_newitem').eq(k).fadeIn(300).siblings('.slidersjs_newitem').fadeOut(300);
		$('.slidersjs_pagination_item').eq(k).addClass('black').siblings('.slidersjs_pagination_item').removeClass('black');
	});
	
	$('.classify_food .slidersjs_control').hover(function(){
		clearInterval(smallTimer7);
	},function(){
		smallTimer7=setInterval(function(){
		small7();
	},2000);
	});
	
	$('.bill_item').eq(0).show();
	var lastTimer=null;
	var z=0;
	var numbers=$('.bill_item').length;
	function smallRight(){
		z++;
		if(z==numbers){
			z=0;
		}
//		console.log(z)
		$('.bill_item').eq(z).fadeIn(200).siblings('.bill_item').fadeOut(300);
		$('.bill_cur').text(z+1);
	}
	function smallLeft(){
		z--
		if(z==-1){
			z=numbers-1;
		}
		$('.bill_item').eq(z).fadeIn(200).siblings('.bill_item').fadeOut(300);
		$('.bill_cur').text(z+1);
	}
	lastTimer=setInterval(function(){
		smallRight();
	},3500);
	$('.bill').hover(function(){
		clearInterval(lastTimer);
	},function(){
		lastTimer=setInterval(function(){
		smallRight();
	},3500);
	})
	
	$('.bill_prev').click(function(){
		smallLeft();
	});
	$('.bill_next').click(function(){
		smallRight();
	});
//	楼梯

$(window).scroll(function(){
	//滚动条的距离
	var scrollTop=$(this).scrollTop();
	//当滚动距离超过780px时，显示楼梯
	if(scrollTop>740){
		$('.sidebar').fadeIn();
	}else{
		$('.sidebar').fadeOut();
	}
	
	//图表随着楼层改变
	
	$('.classify').each(function(index,louti){
		
		//判断临界点
		if(scrollTop>=$(this).offset().top-$(this).outerHeight()/2){
			$('.ite_name').stop().hide().removeClass('cnorm').eq(index).show().addClass('cnorm');
		}
	});
	//返回顶部
	$('.backtop').click(function(){
		$('html,body').stop().animate({scrollTop:0},1000);
	});

	//悬浮顶部搜选框浮现
	if(scrollTop>=780){
		$('.topseach_wrap').fadeIn();
	}else{
		$('.topseach_wrap').fadeOut();
	}
});
//二维码浮现
$('.app_wrap').hover(function(){
	$('.side_appcode').fadeIn();
	
},function(){
	$('.bars_appcode').fadeIn();
	$('.side_appcode').fadeOut();
});
//每个图标的鼠标滑动效果
$('.locate_list>a').hover(function(){
	var index=$(this).index();
	$('.ite_name').eq(index).show();
	$('.bars').eq(index).hide();
},function(){
	var index=$(this).index();
	$('.bars').eq(index).show();
	$('.ite_name').eq(index).not('.cnorm').hide();
});
//每个图标点击后的效果
$('.locate_list>a').click(function(){
	var index=$(this).index();
	$('.ite_name').eq(index).fadeIn();
});

//跳转购物车
	$('.item_cart').click(function(){
		window.location.href="cart.html"
	})
	
	//购物车数量变化
	var arr=$.cookie("cart");
	arr=JSON.parse(arr);
	if(arr){
		$('#cartCount').text(arr.length);
	}else{
		$('#cartCount').text(0);
	}
})