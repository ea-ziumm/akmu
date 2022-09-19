$(function(){
    var $visual = $('#visual')
    var $c_all = $('#c_all')
    var $c_sec = $('#c_all>section')
    var $hide = $('#hide p')
    var $top = $('#top')
    var $logo = $('#top>h1>a>img')
    var $menu = $('#menu .m_li>li')
    var $leaf = $('.leaf')
    var $arr = $('.menu li .step em>img')
    var $rec = $('#visual .rec img:first-child()')
    var $face = $('#visual .face li')
    var $prof = $('#visual .prof li')
    var $profX = $('#visual .prof li .prox')
    var $c_list = $('#cont>.list>ul>li')
    var $c_con = $('#cont>.list_con>ul')
    var $tList = $('#cont>.list_con .track .t_list .tit')
    var $video = $('#cont>.list_con .frame>li')
    var $vList = $('#cont>.list_con .v_list>li')
    var $galLi = $('section .list_con ul .gallery li')
    var $this = $('#this')
    var $thisLogo = $('#this>article>.this_logo')
    var $thisArr = $('#this>article>.this_arr')
    
    
    var nowTop = $c_all.position().top
    $c_sec.on("mousewheel",function(event,delta){
        if(delta > 0){
            if(nowTop>=0){nowTop=-700}
            $c_all.stop().animate({top:nowTop+700},1500)
            nowTop = nowTop+700
            menuOn()
            function menuOn(){
                if(nowTop>=0){
                    showTop()
                }else if(nowTop<0 && nowTop>=-700){
                    $menu.removeClass('on')
                    $menu.eq(0).addClass('on')
                }else if(nowTop<=-1400){
                    $menu.removeClass('on')
                    $menu.eq(1).addClass('on')
                }
            }

        }else if(delta < 0){
            hideTop()
            if(-1400>=nowTop){nowTop=-700}
            $c_all.stop().animate({top:nowTop-700},1500)
            nowTop = nowTop-700
            menuOn()
            function menuOn(){
                if(nowTop<0 && nowTop>=-700){
                    $menu.removeClass('on')
                    $menu.eq(0).addClass('on')
                    $visual.animate({opacity:0},700)
                }else if(nowTop<=-1400){
                    $menu.removeClass('on')
                    $menu.eq(1).addClass('on')
                }
            }
        }
    })
    
    $thisLogo.click(thisClick)
    function thisClick(){
        $this.fadeOut(500)
         $visual.delay(1500).animate({
            opacity:1
        },2000,'easeInOutBounce')

        $top.delay(500).animate({
            top: -60,
            opacity:1
        },3000,'easeOutElastic')

    }
    
    $logo.click(logoClick)
    function logoClick(){
        $c_all.animate({top:0},100)
        showTop()
    }
    function showTop(){
        
        $menu.removeClass('on')
        $visual.delay(500).animate({opacity:1},700)
        $hide.delay(500).animate({
            left:532
        },700)
        $hide.animate({width:330},1000)

        $top.css('width','170px')

        $top.animate({
            left:610
        },1000)
        $top.find('h1 img').animate({
            width:170
        },1000)
        $top.find('h2').animate({
            left: -25,
            top: 200
        },500)
        $top.find('h2 img').animate({
            width:220
        },1000)
    }
    $menu.find('.pic').click(menuClick)

    function menuClick(){

        $visual.animate({opacity:0},700)
        $menu.removeClass('on')
        $(this).parent().addClass('on')
        /*setInterval(arrMove,200)

        function arrMove(){
            $arr.animate({left:76})
            $arr.animate({left:78})
        }*/
        hideTop()
        var index = $(this).parent().index()
        var num = -700*(index+1)
        $c_all.animate({
            top:num
        },1500)
    }
    function hideTop(){
        $hide.animate({
            width: 520
        },1000)
        $hide.animate({left:90},1000) 
        $top.css('width','430px')
        $top.find('h1 img').animate({
            width:110
        },1000,function(){
            $top.animate({
                left:160,
                top:-50
            },1000)
        })
        $top.find('h2').animate({
            left: 170,
            top: 38
        },500,function(){
            $top.find('h2 img').animate({width:190},1000)
        })
    }
    setInterval(recMove,2000)
    function recMove(){
        $rec.delay(1000).animate({left:0},0)
        $rec.delay(1000).animate({left:-75},0)
    }
    
    
    $face.click(faceClick)
    function faceClick(){
        $(this).addClass('on')
        var index = $(this).index()
        if(index == 0){
            $prof.eq(0).animate({top:0,opacity:1},1000,'easeOutQuart')
        } else{
            $prof.eq(1).animate({top:0,opacity:1},1000,'easeOutQuart')
        }
    }
    
    $profX.click(profClick)
    function profClick(){
        var index = $(this).parent().index()
        $face.eq(index).removeClass('on')
        $prof.eq(index).animate({top:100,opacity:0},1000,'easeOutQuart')
    }
    
    $c_list.click(c_liClick)
    function c_liClick(){
        var index = $(this).index()
        var num = -730*index
        var $c_con = $(this).parents('.list').siblings('.list_con').children('ul')
        var cTop = $c_con.position().top
        $(this).siblings().removeClass('on')
        $(this).addClass('on')
        $c_con.animate({
            left: num
        },1000)
    }

    $vList.click(vlistClick)
    function vlistClick(){
        var index = $(this).index()
        var vList = $(this).parents('.v_list').siblings('.frame').find('li')
        $(this).siblings().removeClass('play')
        $(this).addClass('play')
        vList.removeClass('play')
        vList.eq(index).addClass('play')
    }

    $tList.click(tClick)
    function tClick(){
        $(this).siblings().removeClass('on')
        $(this).addClass('on')
    }

    $galLi.mouseenter(galEnter)
    function galEnter(){
        $(this).siblings().stop().animate({width:138,opacity:0.3})
        $(this).stop().animate({width:316,opacity:1})
    }

    $('#c_all>section').eq(1).find($galLi).eq(0).trigger('mouseenter')
    $('#c_all>section').eq(2).find($galLi).eq(0).trigger('mouseenter')
    
    setInterval(thisArr,1000)
    function thisArr(){
        $thisArr.animate({
            left: 875
        },500,function(){
            $thisArr.animate({
                left: 870
            },500)
        })
    }
})