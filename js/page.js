// // Monitor page scroll

// //Last Position
// var lastPosition;
// // var
// function scrollFunc(e){
//     var wheelnum=0;
//     if(e.wheelDelta){//IE/Opera/Chrome 
//         wheelnum=e.wheelDelta; 
//     }else if(e.detail){//Firefox 
//         wheelnum=e.detail; 
//     }
//     scrollTab(wheelnum);
// }

// if(document.addEventListener){ 
//     document.addEventListener('DOMMouseScroll',scrollFunc,true); 
// }//W3C 
// window.onmousewheel=document.onmousewheel=scrollFunc;//IE/Opera/Chrome 

// function scrollTab(wheelnum){
//     // var window_offset = $(window).scrollTop();
//     var nearest_offset=0;
//     var nearest_dom;
//     // console.log($(window).scrollTop());
//     if(wheelnum==120||wheelnum==-30){
//         //向上滚动
        
//         $(".area").each(function(){
//             var this_offset=$(this).offset().top;
//             // console.log(this_offset);

//             if(this_offset>=0 && nearest_offset<=0){
//             // if(this_offset<=window_offset&&this_offset>=nearest_offset){
//                 nearest_dom = $(this).attr("id");
//                 nearest_offset = this_offset;
//             }else{
//                 nearest_offset = this_offset;
//             }
//         });
//         console.log(nearest_dom);
//         // console.log( $("#"+nearest_dom).offset().top);
//         $('html,body').animate({scrollTop: $("#"+nearest_dom).offset().top}, 'fast'); 
//         }
//     }
