$(function(){
	$('#left').hover(function(){
		$('.s_menu').show();
	},function(){
		$('.s_menu').hide();
	});
	//	从cookie中获取商品详情
	var arr=$.cookie("cart");
	
//	console.log(arr)
	if(arr){
		$('.cart').show();
		$('.cart_noitems').hide();
		arr=JSON.parse(arr);
		for (var i=0;i<arr.length;i++) {
			var td1=$("<td class='col_checkbox'><input type='checkbox' class='item_checkbox'/></td>");
			var td2=$("<td class='product_thumbnail col_9'><a href=''><img class='small_pic' src='"+arr[i].pics+"'/></a></td>");
			var td3=$("<td class='col_11'><div class='product_name'>"+arr[i].id+"</div><div class='item_options'>"+arr[i].name+"</div></td>");
			var td4=$("<td class='col_12'><span class='item_weight'>"+1450+"</span></td>");
			var td5=$("<td class='a_center col_13 unit_price'><span class='cart_price'>"+arr[i].pri+"</span></td>");
			var td6=$("<td class='col_14 a_center cart_qty'></td>").append("<div class='qty_ctrl clear'><a class='qty_sub'href='javascript:;'></a><input type='text' class='cart_num' value='1'/><a class='qty_add' href='javascript:;'></a></div>");
			var td7=$("<td class='col_15 subtotal'><span class='cart_prices'>"+arr[i].pri+"</span></td>");
			var td8=$("<td class='col_16 a_center'><a href='###' class='btn_remove'>"+'删除'+"</a></td>")
			var tr=$("<tr id='details'></tr>").append(td1,td2,td3,td4,td5,td6,td7,td8);
			$('.suppliers tbody').append(tr);
//			console.log($('.suppliers tbody').html());
		//购物车数量变化
			$('#cartCount').text(arr.length);
		}
	}else{
		$('.cart').hide();
		$('.cart_noitems').show();
		$('#cartCount').text(0);
	}
//	清空购物车
	$('.col_8').click(function(){
		$.cookie("cart","",{expires:0,path:"/"});
	});
	
	//单条商品删除
	$('.btn_remove').click(function(){
		var index=$(this).parents("#details").index()-1;
//		console.log(index,arr)
		arr.splice(index,1);
//		 console.log(arr)
		$(this).parents("#details").remove();
		$.cookie("cart",JSON.stringify(arr),{expires:30,path:"/"})
		if($.cookie("cart")=="[]"){
			$.cookie("cart","",{expires:0,path:"/"});
			$('.cart').hide();
			$('.cart_noitems').show();
		}
		$('#cartCount').text(arr.length);
	})


//计算总数的方法
	function GETcounts(){
		var counts=0;
		$('.item_checkbox').each(function(){
			if($(this).is(":checked")){
				for (var i=0;i<$(this).length;i++) {
					counts+=parseInt($(this).parents('.col_checkbox').siblings('.subtotal').children('.cart_prices').text());
					console.log(counts)
				}
			}
		});
		$('.all_grandtotal').html((counts).toFixed(2))
	}
	
//	都打勾时
//	$('#DE').click(function(){
//		
//				GETcounts();
//			
//		
//	})
	//商品加
	$('.qty_add').click(function(){
		var num = parseInt($(this).siblings('.cart_num').val())+1;
//		console.log(num)
		$(this).siblings('.cart_num').val(num);
		var price=$(this).parents('.cart_qty').siblings('.col_13').children('.cart_price').text();
//		console.log(price)
		var price_num=price.split("￥");
		var hah=price_num[1];
		$(this).parents('.cart_qty').siblings('.col_15').children('.cart_prices').text((hah*num).toFixed(2));
		GETcounts();
		if(num>2){
			$('#checkout').css({background:"#666",cursor:"not-allowed"});
			$("#checkout").attr("disabled","disabled");
		}
		
	})
//	商品减 
	$('.qty_sub').click(function(){
		
		var sub=parseInt($(this).siblings('.cart_num').val());
		if(sub==1){
			sub=1
		}else{
			sub-=1;
		}
		$(this).siblings('.cart_num').val(sub);
		var price=$(this).parents('.cart_qty').siblings('.col_13').children('.cart_price').text();
//		console.log(price)
		var price_num=price.split("￥");
		var hah=price_num[1];
		$(this).parents('.cart_qty').siblings('.col_15').children('.cart_prices').text((hah*sub).toFixed(2));
		GETcounts();
		if(sub<=2){
			$('#checkout').css({background:"#f44",cursor:"pointer"});
			$("#checkout").attr("disabled",false);
		}
		
	})
	
//	
	

//勾选框改变颜色
	$('#DE').click(function(){
		if($('#DE').is(":checked")){
			$('.vendor_info').css({background:"#f33",color:"#fff",borderColor:"#f33"});
			$('.country_part').css("border-color","#f33");
			$('.item_checkbox').attr("checked",true);
//			$('.all_grandtotal').text(price_num[1]);
//			GETcounts();
		}else{
			$('.vendor_info').css({background:"#fafafa",color:"#000",borderColor:"#ccc"});
			$('.country_part').css("border-color","#E6E6E6");
			$('.item_checkbox').attr("checked",false);
			$('.all_grandtotal').text("0.00");
//			GETcounts();
		}
			
	})
	$('.item_checkbox').click(function(){
		if($('.item_checkbox').is(":checked")){
			$('.vendor_info').css({background:"#f33",color:"#fff",borderColor:"#f33"});
			$('.country_part').css("border-color","#f33");
			$('#DE').attr("checked",true);
//			$('.all_grandtotal').text(price_num[1]);
//GETcounts();
		}else{
			$('.vendor_info').css({background:"#fafafa",color:"#000",borderColor:"#ccc"});
			$('.country_part').css("border-color","#E6E6E6");
			$('#DE').attr("checked",false);
			$('.all_grandtotal').text("0.00");
//			GETcounts();
		}
	})
	

})