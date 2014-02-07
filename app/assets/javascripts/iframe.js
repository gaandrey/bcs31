$(window).load(function() {
//    var v_port;
//     var num = 0;
//    $.app =  $.app || {};
//
//    $.app.finish_and_reset = function(){
//        NProgress.done();
//        $('.pace-inactive-indexes div:first').each(function(){
//            num += 1;
//            console.log(num);
//            $(this).addClass('nprogress');
//        });
//    };


     //////////////////  callus iframe
    $(".button_call_us.redish, .call_us_span").on('click', function(){
        $('.iframe_container_callus').css("display" , "block");
        $('.callus_iframe').css("display" , "block");
        $('.closing_cross').css("display" , "block");
    });
    $('.closing_cross').on('click', function(evt){
        evt.preventDefault();
        $('.callus_iframe').css("display" , "none");
        $('.closing_cross').css("display" , "none");
        $('.iframe_container_callus').css("display" , "none");
    });
     ////////////////// indexes iframe
    $("a.service_link.indexes").on('click', function(){
        v_port = $(window).height();
        $('.indexes_iframe_container').css({'height': v_port -100 + "px", 'display': 'block'});
        $('#indexes_iframe').css({'height': v_port + 900 + "px", 'display': 'block'});
        $('.closing_cross.index').css("display" , "block");
//        console.log(v_port);
    });
    $('.closing_cross.index').on('click', function(evt){
        evt.preventDefault();
        $('#indexes_iframe').css("display" , "none");
        $('.closing_cross.index').css("display" , "none");
        $('.indexes_iframe_container').css("display" , "none");
    });
    ////////////////// tracking iframe
    $("a.service_link.tracking").on('click', function(){
        v_port = $(window).height();
        $('.tracking_iframe_container').css({'height': v_port - 150 + "px", 'display': 'block'});
        $('#tracking_iframe').css({'height': v_port + 500 + "px", 'display': 'block'});
        $('.closing_cross.tracking').css("display" , "block");
//        console.log(v_port);
    });
    $('.closing_cross.tracking').on('click', function(evt){
        evt.preventDefault();
        $('#tracking_iframe').css("display" , "none");
        $('.closing_cross.tracking').css("display" , "none");
        $('.tracking_iframe_container').css("display" , "none");
    });

    ///////////////////////////PROGRESS-BAR/////////////////////////
    var index_flag = 0;
    var tracking_flag = 0;
    $('.service_link.tracking').on('click', function(){
       $('.indexes_iframe_container .nprogress').removeClass('nprogress');
       $('.iframe_container_callus .nprogress').removeClass('nprogress');
       NProgress.start();
//        $.app.count_progress('.tracking_iframe_container')
//       $('.indexes_iframe_container .pace-progress').attr("role", "foo");
//       tracking_flag = 1;
//       index_flag = 0;
//        $.app.count_progress();

    });

    $('.service_link.indexes').on('click', function(){
        $('.iframe_container_callus .nprogress').removeClass('nprogress');
        $('.tracking_iframe_container .nprogress').removeClass('nprogress');
        NProgress.start();
//        tracking_flag = 0;
//        index_flag = 1;
//        $.app.count_progress();
    });

    $('.button_call_us.reddish').on('click', function(){
        $('.tracking_iframe_container .nprogress').removeClass('nprogress');
        $('.indexes_iframe_container .nprogress').removeClass('nprogress');
        NProgress.start();
//        $.app.count_progress();
    });

//
});

//$('.tracking_iframe_container #nprogress').attr('id', 'nprogress');
//$('.tracking_iframe_container .pace-progress').attr("role", "bar");
//
//$('.indexes_iframe_container #nprogress').attr('id', 'nprogress');
//$('.indexes_iframe_container .pace-progress').attr("role", "bar");
