$(function(){
	var $dl=$('.list').eq(2);
	console.log($dl)
	var index=0;
	$(window).on('scroll',function(){
		var scrolltop=$(window).scrollTop();
		//文档内容高度
		var docHeight=$(document).height();
		//窗口高度
		var winHeight=$(document).height();
		
		//滚动条到底部触发
		if(scrolltop>=docHeight-winHeight){
			index++;
			if(index<=2){
				$('.loading').show();
				setTimeout(function(){
					$('.loading').hide();
					ajax(showImg);
					$('.ab').show();
					$('.ab .react').show();
				},500)
			}
		} 
		
		//返回顶部
		$('.top-btn').click(function(){
//			console.log(1)
		$('html,body').stop().animate({scrollTop:0},800)
		});
		if(scrolltop>=500){
			
			$('.top-btn').show();
		}else{
			$('.top-btn').hide();
		}
		
		
});
	
	//请求数据
	function ajax(callback){
		var i=(index==1) ? index : index*15;
		$.ajax({
			url:'http://diviner.jd.com/diviner?p=610009&uuid=12396477&lid='+i+'&lim=15&cb=tempGuessLikeCallback',
			dataType:'jsonp',
			jsonp:'callback',
			jsonpCallback: 'tempGuessLikeCallback',
			scriptCharset: 'gb2312',
			success:function(res){
				var data=res.data;
//				console.log(data);
				var _html='';
				
				$.each(data,function(idx,obj){
					_html='<a class="react" href="'+obj.clk+'"><div class="dealcard"><div class="imgbox"><img src="" data-lazy-img="http://img13.360buyimg.com/n1/s200x200_'+ obj.img +'"/></div><div class="dealcard-block-right"><div class="title text-block">"'+unescape(obj.t)+'"</div><div class="price"><span class="strong">'+obj.jp+'</span><span class="strong-color">元</span><span class="tag">新用户五元抢</span><span class="line-right">已售222231件</span></div></div></div></a>';
					$('<dd/>').addClass('list-'+index).html(_html).appendTo($dl);
				});
			
//				console.log(typeof callback=='function')
				
				//回调函数，等数据全部拼接完在执行
				if(typeof callback=='function'){
					callback();
				}
			}
		})
	}
	
	//用data-lazy-img属性替换src属性
	function showImg(){
		$('.list-'+index+' img').each(function(){
			$(this).animate({opacity:0.3},500,function(){
				$(this).attr('src',$(this).attr('data-lazy-img')).animate({opacity:1},500);
			})
		})
	}
	
	//倒计时
	var timer=null;
	 timer=setInterval(function(){
		var EndTime=new Date("2016/11/13 21:33:00");
		var NowTime=new Date();
		var Nms=EndTime.getTime()-NowTime.getTime();
		var myD=Math.floor(Nms/(1000*3600*24));//取天
		var myH=Math.floor(Nms/(1000*3600))%24;//取小时
		var myM=Math.floor(Nms/(1000*60))%60;//取分钟
		var myS=Math.floor(Nms/1000)%60;//取秒
		if(myH>=0||myD>=1){
			myH=myD*24+myH;
			$('.time-hour').html(myH);
			$('.time-min').html(myM);
			$('.time-sec').html(myS);
			
		}else{
			$('.time-hour').html("已");
			$('.time-min').html("结");
			$('.time-sec').html("束");
			clearInterval(timer);
		}
	},1000);
});
