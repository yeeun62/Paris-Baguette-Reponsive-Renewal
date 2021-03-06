/* preventDefault */
$(function(){
            $('a[href="#"]').click(function(event){
                event.preventDefault();
            })
        })

/* main menu */
$(function(){
    $('.middle_right li,.header_bottom').mouseenter(function(){
        $('.header_bottom').stop().slideDown();
    })
    $('.middle_right li,.header_bottom').mouseleave(function(){
        $('.header_bottom').stop().slideUp();
    })
})

/* tablet nav*/
$(function(){
    /* gnb 열기 */
    $('.tb_btn').click(function(){
        $('.gnb_bg').show();
        $('.table_nav').css({right:'0'});
    })
   
    /* gnb 닫기 */
    $('.tablet_nav_close').click(function(){
        $('.gnb_bg').hide();
        $('.table_nav').css({right:'-100%'});
    })
    
    /* depth1 설정 */
    $('.tb_depth1>a').click(function(){
        $(this).toggleClass('on');
        $(this).parent().siblings().children().removeClass('on');
        $(this).siblings('.tb_depth2').stop().slideToggle();
        $(this).parent().siblings().children('.tb_depth2').stop().slideUp();
        $('.tb_depth2 li').removeClass('on');
        $(this).siblings('.dep_down').children('img').attr({src:'img/tablet/dep1_up.png'});
        $(this).parent().siblings().children('.dep_down').children('img').attr({src:'img/tablet/dep1_down.png'});
        var value=$(this).hasClass('on');
        if(value){
            $(this).siblings('.dep_down').children('img').attr({src:'img/tablet/dep1_up.png'});
        }else{
            $(this).siblings('.dep_down').children('img').attr({src:'img/tablet/dep1_down.png'});
        }
    })
    
    /* 슬라이드 버튼 클릭시 설정 */
    $('.dep_down').click(function(){
        $(this).siblings('a').toggleClass('on');
        $(this).parent('.tb_depth1').siblings().children('a').removeClass('on');
        $(this).siblings('.tb_depth2').stop().slideToggle();
        $(this).parent().siblings().children('.tb_depth2').stop().slideUp();
        $(this).children('img').attr({src:'img/tablet/dep1_up.png'});
        $(this).parent().siblings().children('.dep_down').children('img').attr({src:'img/tablet/dep1_down.png'});
        var val=$(this).siblings('a').hasClass('on');
        if(val){
            $(this).children('img').attr({src:'img/tablet/dep1_up.png'});
        }else{
            $(this).children('img').attr({src:'img/tablet/dep1_down.png'});
        }
    })
    
    /* depth2 on 설정 */
    $('.tb_depth2 li').click(function(){
        $(this).addClass('on');
        $(this).siblings().removeClass('on');
    })
    
    /* 닫기버튼 클릭시 열린 dep2 닫은채로 표시 */
    $('.tablet_nav_close').click(function(){
        $('.tb_depth2').slideUp();
        $('.tb_depth1>a').removeClass('on');
        $('.dep_down').children('img').attr({src:'img/tablet/dep1_down.png'})
    })
    
    
    /* sns hover */
    $('#sns_1').mouseenter(function(){
        $(this).children('a').children('img').attr({src:'img/main/sns_img_over_01.png'});
    })
    $('#sns_1').mouseleave(function(){
        $(this).children('a').children('img').attr({src:'img/main/sns_img_01.png'});
    })
    $('#sns_2').mouseenter(function(){
        $(this).children('a').children('img').attr({src:'img/main/sns_img_over_02.png'});
    })
    $('#sns_2').mouseleave(function(){
        $(this).children('a').children('img').attr({src:'img/main/sns_img_02.png'});
    })
    $('#sns_3').mouseenter(function(){
        $(this).children('a').children('img').attr({src:'img/main/sns_img_over_03.png'});
    })
    $('#sns_3').mouseleave(function(){
        $(this).children('a').children('img').attr({src:'img/main/sns_img_03.png'});
    })
    $('#sns_4').mouseenter(function(){
        $(this).children('a').children('img').attr({src:'img/main/sns_img_over_04.png'});
    })
    $('#sns_4').mouseleave(function(){
        $(this).children('a').children('img').attr({src:'img/main/sns_img_04.png'});
    })
    $('#sns_5').mouseenter(function(){
        $(this).children('a').children('img').attr({src:'img/main/sns_img_over_05.png'});
    })
    $('#sns_5').mouseleave(function(){
        $(this).children('a').children('img').attr({src:'img/main/sns_img_05.png'});
    })
})









