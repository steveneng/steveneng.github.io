$(document).ready(function(){
    $('a').css('color','white')
   if($('a').hasClass('active')){
       $('a.active').css('color','#00b0eb')
   };
   $('a').click(function(){
       console.log('doge');
       $('a.active').css('color','white')
        $('a.active').removeClass('active');
        $(this).addClass('active');
        $(this).css('color','#00b0eb')
        
   });
   $(window).on('scroll',function(){
       if($(".splash").height()-30<$(window).scrollTop()){
           $('nav').css('background-color','#64F1EC')
       }
       else{
        $('nav').css('background-color','transparent')
       }
   });
   var title= ("{Frontend Developer}").split("");
   var i=0;
   setInterval(function(){
       if(i<title.length){
           $('.title').append(title[i]);
           i++
       }
   },150);


})