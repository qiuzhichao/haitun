$(function(){
	$('#left').hover(function(){
		$('.s_menu').show();
	},function(){
		$('.s_menu').hide();
	});
	$('.more_views ul li img').hover(function(){
		var src=$(this).attr("src");
		var atr=src.split(".");
		var NEWatr=atr[0]+"(1)."+atr[1]
//		console.log(NEWatr);
		$('.change').attr("src",NEWatr);
		$('.big').attr('src',NEWatr);
	})
	$('.more_views ul li').hover(function(){
		$(this).addClass('current').siblings('li').removeClass('current');
	});
	
//	放大镜
	$('.mark').hover(function(){
		$('.float_layer,.big_pic').show()
	},function(){
		$('.float_layer,.big_pic').hide()
	})
	$('.mark').mousemove(function(ev){
		var evt=ev||event;
		
		var left=evt.clientX-$('.product_img_zoom').offset().left-$('.float_layer').width()/2;
		var top=evt.clientY-$('.product_img_zoom').offset().top-$('.float_layer').height()/2;
		
		var minWidth=$('.mark').outerWidth()-$('.float_layer').outerWidth();
		var minHeight=$('.mark').outerHeight()-$('.float_layer').outerHeight();
		
		if(left<0){
			left=0
		}else if(left>minWidth){
			left=minWidth;
		}
		
		if(top<0){
			top=0
		}else if(top>minHeight){
			top=minHeight;
		}
//		console .log(left,top);
		$('.float_layer').css({"left":left,"top":top})
		
		var scoreX=left/minWidth;
		var scoreY=top/minHeight;
		
		var DistanceX=$('.big').outerWidth()-$('.big_pic').outerWidth();
		var DistanceY=$('.big').outerHeight()-$('.big_pic').outerHeight();
		
		$('.big').css({"left":(-scoreX*DistanceX),"top":(-scoreY*DistanceY)});
	})
	
//	商品加
	var i=1;
	var haha=$('.rmb_prices').text();
	var hehe=haha.split("￥")
	var xixi=hehe[1];
	var nub=$('.count em').eq(0).text();
	console.log(nub)
	$('.qty_add').click(function(){
		i++;
//		是否超出购物量
		if(i>nub){
			$('#cart_btn').css("cursor","not-allowed");
			$('#cart_btn').attr("disabled","disabled");
			$('.btn_cart').css({backgroundColor:"#fff",color:"#999"});
			
		}
//		判断钱有没有超额
		$('#qty').val(i);
		if(xixi*i>1000){
			$('.money').show();
		}
		
	})
	
//	商品减
	$('.qty_sub').click(function(){
		i--;
		if(i<1){
			i=1;
		}
		$('#qty').val(i);
		
//		console.log(i)
		if(i<=nub){
			$('#cart_btn').css("cursor","pointer");
			$('#cart_btn').attr("disabled",false);
			$('.btn_cart').css({backgroundColor:"#f44",color:"#fff"});
		}
//		判断钱有没有下降回来
		if(xixi*i<1000){
			$('.money').hide();
		}
	})
	
//	JSON请求数据

	$.ajax({
		url:"data/goods.json",
		type:"get",
		"dataType":"json",
		success:function(arr){
			var urll=window.location.search;
			var IDs=urll.split("=");
			var isID=IDs[1]
//			console.log(arr)
			$.each(arr,function(index,ele){
				if(ele.goodsId==isID){
					$('.h1').text(ele.ah1);
					$('.product_name h2').text(ele.ah2);
					$('.brand').text(ele.brands);
					$('.attr').text(ele.attrs);
					$('.rmb_prices').text(ele.price);
					$('.prices b').text(ele.bb);
					$(".prices del").text(ele.dell);
					$('.change').attr("src",ele.img1);
					$('.big').attr("src",ele.img2);
					$('.small1').attr("src",ele.img3);
					$('.small2').attr("src",ele.img4);
				}
				
			})
		}
	})
	
//	点击加入购物车
		$('#cart_btn').click(function(){
			//要加入购物车的商品信息
			var goodsID=$('.h1').text();
			var options=$('.product_name h2').text();
			var pic=$('.small1').attr("src");
			var pric=$('.rmb_prices').text();
			
			//获取之前保存在cookie中的购物车信息
			var arr=$.cookie("cart")?JSON.parse($.cookie("cart")):[];
			
			//遍历查找是否之前的购物车cookie中存在即将添加的商品
			var isExists=false;
			for (var i=0;i<arr.length;i++) {
				if(goodsID==arr[i].id){
					arr[i].num++
					isExists=true;
				}
			}
			
			//如果不存在，则添加一个新产品
			if(!isExists){
				//商品对象
				var goods={
					id:goodsID,
					name:options,
					pics:pic,
					pri:pric
				}
				arr.push(goods);
			}
			
			//保存到cookie中
			$.cookie("cart",JSON.stringify(arr),{expires:30,path:"/"});
			//遮罩层浮现于撤销
			$('#overlay').show();
			$('#easyDialogBox').show()
			$(".easyDialog_wrapper").show();
				$(".close_btn").click(function(){
					$('#overlay').hide();
					$('#easyDialogBox').hide()
					$(".easyDialog_wrapper").hide();
				})
				$('.btn_normal').click(function(){
					$('#overlay').hide();
					$('#easyDialogBox').hide()
					$(".easyDialog_wrapper").hide();
				})
				$('.btn_heightlight').click(function(){
					location.href="cart.html";
				})
		})
//		购物车数量变化
		var arr=$.cookie("cart");
			arr=JSON.parse(arr);
			if(arr){
				$('#cartCount').text(arr.length);
			}else{
				$('#cartCount').text(0);
			}

})