$(document).ready(function(){
    $('a').css('color','white')
   if($('a').hasClass('active')){
       $('a.active').css('color','#00b0eb')
   };
   $('li>a').click(function(){
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
   var title= ("{Hi, I'm Steven}").split("");
   var descriptions= ["I am a frontend developer","I am a coffee enthusiest","I am an owner of a lazy dog","I am a teacher","I am a mathematician","I am a guitarist","I am a vegan crossfitter","JK","Let's Talk"];
   var i=0;
   var g=0;
   setInterval(function(){
       if(i<title.length){
           $('.title').append(title[i]);
           i++
       }
   },80);

   setInterval(function(){
        if(g>=descriptions.length){
            g=0;
        }
            $('.descriptions').empty();
            $('.descriptions').append(descriptions[g]);
            g++;
            console.log(g)
    },2000);

   $('.arrow').hover(function () {
        $(".pointer").css("opacity","1");
        console.log('doge')
       }, function () {
        $(".pointer").css("opacity","0");
       }
   );

})