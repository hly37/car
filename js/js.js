$(".swiper-wrapper").css({
	width:$(window).width(),
	height:$(window).height()
})

$().ready(function(){
	var mySwiper = new Swiper(".swiper-container",{
		mousewheelControl:true,
		direction : 'vertical',
		onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
		    swiperAnimateCache(swiper); //隐藏动画元素 
		    swiperAnimate(swiper); //初始化完成开始动画
		}, 
		onSlideChangeEnd: function(swiper){ 
		    swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
		    if (swiper.activeIndex=="0") {
		    	
		    }
		    if(swiper.activeIndex == 2){
				var startX,endX,a = 0,b = 0,n = 0;
				$(document).on("touchstart",function(e){
					startX = e.originalEvent.touches[0].pageX;
				});
				$(document).on("touchmove",function(e){
					e.preventDefault();
					endX = e.originalEvent.touches[0].pageX;
					a = parseInt((endX - startX)/10);
					if(a > b){
						n--;
						if(n < 0){
							n = 71;
						}
					}else if(a == b){
						n=n;
					}else{
						n++;
						if(n > 71){
							n = 0;
						}
					}
					b = a;
					$(".car-box img").eq(n).show().siblings().hide();
				})
			}
		    
		}
	})
});

$("#music-a")[0].play();
var flag,flag1,flag2,flag3,flag4,flag5,flag6,flag7 = true;

$(".music img").click(function(){
	flag = !flag;
	if(flag){
		$(".music img").css({
			animationPlayState:"running",
		});
		$("#music-a")[0].play();
		$("#music-b")[0].pause();
	}else{
		$(".music img").css({
			animationPlayState:"paused",
			transform:"rotateZ(0)"
		});
		$("#music-a")[0].pause();
	}
});

$(".vido").click(function(){
	flag1 = !flag1;
	if(flag1){
		$(".music img").css({
			animationPlayState:"paused",
		});
		$("#music-a")[0].pause();
		$("#music-b")[0].play();
	}else{
		$(".music img").css({
			animationPlayState:"running",
		});
		$("#music-a")[0].play();
		$("#music-b")[0].pause();
	}
});

$(".shou").on("click",function(){
	$(this).css({display:"none"})
});

$(".text1").click(function(){
	flag2 = !flag2;
	if(flag2){
		$(".car-big").css({
			left:"10%",
			top:"13%"
		})
	}else{
		$(".car-big").css({
			left:"-30%",
			top:"20%"
		})
	}
})
$(".text2").click(function(){
	flag4 = !flag4;
	if(flag4){
		$(".deng").hide();
	}else{
		$(".deng").show();
	}
})
$(".text3").click(function(){
	flag3 = !flag3;
	if(flag3){
		$(".car-big").css({
			left:"-50%",
			top:"8%"
		})
	}else{
		$(".car-big").css({
			left:"-30%",
			top:"20%"
		})
	}
})
var time = null;
$("#r360").click(function(){
	flag5 = !flag5;
	if(flag5){
		clearInterval(time);
		var j = 0;
		time = setInterval(function(){
			j++;
			if(j>=71){
				j = 0;
			}
			$(".car-box img").eq(j).show().siblings().hide();
		},100)
	}else{
		clearInterval(time);
	}
});
$("#Add").click(function(){
	flag6 = !flag6;
	if(flag6){
		$(".car-box img").css({
			width:"150%",
		    left: "-25%",
		    top: "13%"
		})
	}else{
		$(".car-box img").css({
			width:"90%",
		    left: "5%",
		    top: "13%"
		})
	}
	
});
$("#Sub").click(function(){
	flag7 = !flag7;
	if(flag7){
		$(".car-box img").css({
			width:"60%",
		    left: "20%",
		    top: "13%"
		})
	}else{
		$(".car-box img").css({
			width:"90%",
		    left: "5%",
		    top: "13%"
		})
	}
	
});

$(".air1").click(function(){
	$(".air1").hide(1000);
	$(".air2").hide(1000);
	var time1 = setTimeout(function(){
		$(".a").show(1000);
		$(".b").show(1000);
	},2000);
	var time2 = setTimeout(function(){
		$(".a").hide(1000);
		$(".b").hide(1000);
	},4000);
	setTimeout(function(){
		$(".c").show(1000);
		$(".d").show(1000);
	},6000);
	setTimeout(function(){
		$(".c").hide(1000);
		$(".d").hide(1000);
	},8000);
	setTimeout(function(){
		$(".air1").show();
		$(".air2").show();
	},10000);
});

$("#tbig").on("click",function(){
	$("#tbig").hide();
	$("#cir").hide();
	$(".back").hide();
})

