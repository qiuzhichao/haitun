$(function(){
	$('.item').hover(function(){
		var index=$(this).index();
		$('.sec_menu').eq(index-4).show();
		$('.icon').eq(index-3).css('background-position','0 -3.5px');
	},function(){
		var index=$(this).index();
		$('.sec_menu').eq(index-4).hide();
		$('.icon').eq(index-3).css('background-position','0 0');
	})
	$('.moblie').hover(function(){
		$('.top_appcode').show();
	},function(){
		$('.top_appcode').hide();
	})
	$('.s_list').hover(function(){
		var index=$(this).index();
		var arry=["red","green","yellow","purple","pink","brown","orange"];
//		console.log(arry(index))
		$('.hidepop').eq(index).show();
		$(this).css({backgroundColor:"#fff",borderLeft:"5px solid "+arry[index]+""});
	},function(){
		var index=$(this).index();
		$('.hidepop').eq(index).hide();
		$(this).css({backgroundColor:"#f1fafd",borderLeft:"none"});
	})
})