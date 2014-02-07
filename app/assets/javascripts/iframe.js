$(window).load(function() {
    var v_port;
//    alert('ready');


     var num = 0;
    $.app =  $.app || {};

    $.app.finish_and_reset = function(){
        NProgress.done();
        alert('Hey!');
        $('.pace-inactive-indexes div:first').each(function(){
            num += 1;
            console.log(num);
            $(this).addClass('nprogress');
        });
    };

//    $.app.count_progress = function(){
//        alert("hey");
//        var repeat = 0;
//        var i = 1;
////        console.log(i);
//        function myLoop () {
////            console.log("Repeat: " + repeat);
//            setTimeout(function () {    //  call a 3s setTimeout when the loop is called
//                var matrix = $('[role="bar"]').css('WebkitTransform');
//                var values = matrix.match(/-?[0-9\.]+/g);
//                if (values != null) {
//                    var curvalol = values[4];
////                    alert("hey");
//                }
//                alert("hey");
//                console.log(i);
//                console.log(values);
//                console.log(curvalol);
////            if (index_flag == 1 && curvalol <= -790){
////                $('.blank_overlay_indexes').css('display', 'none');
////            } else if (tracking_flag == 1 &&  curvalol <= -470 ){
////                $('.blank_overlay_tracking').css('display', 'none');
////            }
//                i++;                                 //  increment the counter
//                if (i < 600) {                       //  if the counter < 10, call the loop function
//                    myLoop();                         //  ..  again which will trigger another
//                }                                   //  ..  setTimeout()
//            }, 200)
//
//        }
//    }


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
