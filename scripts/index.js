$(function(){
	$('.nav-home').hover(function(){
		$(this).find('a').css({color:'#c40000',textDecoration:' underline'});
	},function(){
		$(this).find('a').css({color:'#999',textDecoration:'none'});
	})
	$('.mask-cart').hover(function(){
		$(this).find('.cart-iconfont').css({color:'#ffffff'});
	},function(){
		$(this).find('.cart-iconfont').css({color:'#c40000'});
	})
	$('.register').hover(function(){
		$(this).css({color:'#c40000',textDecoration:' underline'});
	},function(){
		$(this).css({color:'#999',textDecoration:'none'});
	})
	$('.menu-item a').hover(function(){
		$(this).css({color:'#c40000',textDecoration:' underline'});
	},function(){
		$(this).css({color:'#999',textDecoration:'none'});
	})
	$('.hot a').hover(function(){
		$(this).css({textDecoration:' underline'});
	},function(){
		$(this).css({textDecoration:'none'});
	})
	$('.menu-item').hover(function(){
		$(this).find('.menuhd').show();
	},function(){
		$(this).find('.menuhd').hide();
	})
	
	$('.pic').hover(function(){
		$(this).animate({marginRight:'10px'},100);
	},function(){
		$(this).animate({marginRight:'0'},100);
	})
	$('.banner').hover(function(){
		$(this).animate({marginRight:'5px'},200);
	},function(){
		$(this).animate({marginRight:'0'},200);
	})
	$('.menunav').hover(function(){
		$(this).css({background:'#c40000',width:'180px'});
		$(this).animate({paddingLeft:'10px'},10);
	},function(){
		$(this).css({background:'#000000'});
		$(this).animate({paddingLeft:'0'},10);
	})

	$('.grid-row-255').hover(function(){
		$(this).find('img').css({webkitTransform:' translateX(-5px)'},100);
	},function(){
		$(this).find('img').css({webkitTransform:' translateX(0px)'},100);
	})
	$('.grid-row-166').hover(function(){
		$(this).find('img').css({webkitTransform:' translateX(-5px)'},100);
	},function(){
		$(this).find('img').css({webkitTransform:' translateX(0px)'},100);
	})

	$('.brand-img-item').hover(function(){
		$(this).find('.img1').show();
	},function(){
		$(this).find('.img1').hide();
	})
//-------------------楼层--------------------
	$('.floornvz-item').each(function(i){
    	$(this).data('index',i);
	 });
	$('.floornvz-item').hover(function(){
		$(this).css({background:'#c40000'});
		$(this).find('.floornvz-iconfont').css({display:'none'});
		$(this).find('p').css({display:'block'});
		
	},function(){
		if($(this).attr('aa')){return;};
		$(this).css({background:''});
		$(this).find('.floornvz-iconfont').show();
		$(this).find('p').hide();
	})
	$('.floornvz-item').click(function(){
	   var i = $(this).data('index');
	   var newtop = $( $('.floor')[i] ).offset().top-80;
	   $({top: $(window).scrollTop()}).animate(
	      {top: newtop},
	      {
	        duration: 700,
			step: function() {
		  		$(window).scrollTop(this.top);
			}
	      }
	    );
	});

//------------------左边导航一一对应------------------------
// var kaiguan=true;
// $('.floornvz-item').mousedown(function(){
// 	kaiguan=false;
// })
// $('floornvz-item').mouseup(function(){
// 	setTimeout(function(){
// 		kaiguan=true;
// 	},2000);
// })
var lou=[];
$('.floor').each(function(i){
	lou.push($($('.floor')[i]).offset().top-200);
});
$(window).scroll(function(){
	
		for(var i=0;i<lou.length;i++){
			if($(window).scrollTop()>=lou[i] && $(window).scrollTop()<lou[i+1]){
				$($('.floornvz-item')[i]).find('.floornvz-iconfont').hide();
				$($('.floornvz-item')[i]).css({background:'#c40000'});
				$($('.floornvz-item')[i]).find('p').show();
				$('.floornvz-item').removeAttr('aa');
				$($('.floornvz-item')[i]).attr('aa',true);
			}else{
				$($('.floornvz-item')[i]).find('.floornvz-iconfont').show();
				$($('.floornvz-item')[i]).find('p').hide();
				$($('.floornvz-item')[i]).css({background:''})
			}
		}

	
})

//-----------------显示顶部--------------------------
	var top;
	$(window).scroll(function(){
		if($(window).scrollTop() > 500){
      	clearTimeout(top);
      	top = setTimeout(function(){
	$('.daohang').show();
      	},500);
    }else{
      clearTimeout(top);
    $('.daohang').hide();
    };
  });



//------------------轮播----------------------------
var colors=['#FB402D','#DBDBDB','#6DD5E2','#DBDBDB','#FFDFF0'];
var index = 0;
var lunbo  =  function(){
	$('.category-banner-img').hide();
    var el = $('.category-banner-img')[index];
    $(el).show();
    $('.category-b').css({background:colors[index]});

    $('.icon-y').removeClass('active');
    $($('.icon-y')[index]).addClass('active');

    index += 1;
    if( index === $('.category-banner-img').length ){
      index = 0;
    }
}
$('.icon-y').each(function(i){
    $(this).data('index',i)
});

$('.icon-y').hover(function(){
    clearInterval(timerId);
    $('.icon-y').removeClass('active');
    $(this).addClass('active');
    var i = $(this).data('index');
    $('.category-banner-img').hide();
    $( $('.category-banner-img')[i] ).show();
    $('.category-b').css({background:colors[i]});
    index = i;
},function(){
    clearInterval(timerId);
    timerId = setInterval(lunbo,1500);
});
var timerId = setInterval(lunbo,1500);
//-------------------左侧一一对应-------------------------------
var color=['#B0B0B0','#D58F76','#30C4FF','#DBDBDB','#FFC3D3','#C15BFC','#FC4563','#FEF8FA','#DBDBDB','#6BD3E0','#DBDBDB','#EE0403','#FFDDDC','#FECCE7'];
$('.menunav').each(function(i){
    $(this).data('index',i);
});
$('.menunav').hover(function(){
  	clearInterval(timerId);
  	var i=$(this).data('index');
  	$($('.sub')[i+1]).show();
    $($('.sub-img')[i+1]).show();
    $('.category-b').css({background:color[i]});
  },function(){
  	clearInterval(timerId);
  	$('.sub-img').hide();
  	$('.sub').hide();
  	$('.category-b').css({background:colors[index-1]});
  	timerId = setInterval(lunbo,1500);
  });	
$('.menunav1').hover(function(){
	clearInterval(timerId);
	timerId=setInterval(lunbo,1500);
	$(this).find('.sub').show();
},function(){
	$(this).find('.sub').hide();
})

 //--------------------回到顶部-------------------------

$('.totop').click(function(){
    $({top: $(window).scrollTop()}).animate(
      {top: 0},
      {
        duration: 700,
	step: function() {
	  $(window).scrollTop(this.top);
	}
      }
    );
  });

var showtop;
	$(window).scroll(function(){
		if($(window).scrollTop() > 500){
      	clearTimeout(showtop);
      	showtop = setTimeout(function(){
	$('.totop').show();
      	},500);
    }else{
      clearTimeout(showtop);
    $('.totop').hide();
    };
  });

//-----------------------右侧-------------------------------
$('.mui-tab').hover(function(){
    $('.mui-tab').stop();
    $(this).find('.mui-tab-hh').show(0,function(){
      $(this).animate({right:40},200);
    });
    $(this).find('.tab_arrow').show(0,function(){
      $(this).animate({right:24},200);
    });
  },function(){
    $('.mui-tab').stop();
    $(this).find('.mui-tab-hh').hide(0);
    $(this).find('.tab_arrow').hide(0);
  });
//-----------------------小轮播-----------------------------
var lunbo1=function(a,b,c){
	var slides=$(a);
	var index=0,next=0;
	$(slides[index]).attr('style',function(){return 'left:0'});
	var move=function(){
		index+=1;
		if(index==slides.length){
			index=0;
		}
		$(slides[index]).animate({left:0},700);
		$(slides[next]).animate({left:-90},700,function(){
			$(this).css({left:90})
		});
		next=index;
	};
	$(b).click(function(){
		index+=1;
		if(index==slides.length){
			index=0;
		}
		$(slides[index]).animate({left:0},700);
		$(slides[next]).animate({left:-90},700,function(){
			$(this).css({left:90})
		});
		
		next=index;
	});
	$(c).click(function(){
		index-=1;
		if(index<0){
			index=slides.length-1;
		}
		$(slides[index]).animate({left:-90},1);
		$(slides[next]).animate({left:90},700);
		$(slides[index]).animate({left:0},700);
		next=index;
	});

	var time1=setInterval(move,2000);

	$(b).hover(function(){
		clearInterval(time1);
	},function(){
		time1=setInterval(move,2000);
	})
	$(c).hover(function(){
		clearInterval(time1);
	},function(){
		time1=setInterval(move,2000);
	})
  
};
lunbo1('.floor1 .middle-slides','.floor1 .left','.floor1  .right-r');
lunbo1('.floor2 .middle-slides','.floor2 .left','.floor2  .right-r');
lunbo1('.floor3 .middle-slides','.floor3 .left','.floor3  .right-r');
lunbo1('.floor4 .middle-slides','.floor4 .left','.floor4  .right-r');
lunbo1('.floor5 .middle-slides','.floor5 .left','.floor5  .right-r');
lunbo1('.floor8 .middle-slides','.floor8 .left','.floor8  .right-r');


//----------------------选项卡------------------------------
$('.aa').each(function(i){
	$(this).data('index',i);
})
$('.aa').click(function(){
	var i=$(this).data('index');
	$('.brand-img-z').hide();
	$($('.brand-img-z')[i]).show();
	$('.aa').css({fontWeight:300,borderBottom:'none'});
	$($('.aa')[i]).css({fontWeight:'bold',borderBottom:'2px solid #666'});
})
var shu=0;
$('.ul3-a').click(function(){
	shu+=1;
	$('.brand-img-z').hide();
	$($('.brand-img-z')[shu]).show();
	if(shu==$('.brand-img-z').length-1){
		shu=0;
	}
})


//------------显示左侧导航-------------------
$(window).scroll(function(){
	if($(window).scrollTop() > 1000){
		$('.floornvz').show();
	}else{
		$('.floornvz').hide();
	}
});








//代码中不要使用table和空格混排
// $('#id');
// $($('.aa')[0]);
// var aa=$('<span>1</span>');
// $(function(){});
// console.dir(aa[0].innerHTML);

})

