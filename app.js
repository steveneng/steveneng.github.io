$(document).ready(function() {
    $('a').css('color', 'white')
    if ($('a').hasClass('active')) {
        $('a.active').css({'color':'#00b0eb',
                            'box-shadow':'0 2px 5px 0 rgba(0,0,0,.26)'

                        })
    };
    $('li>a').click(function() {
        $('a.active').css({'color':'white',
                            'box-shadow':'0px 0px 0px transparent'})
        $('a.active').removeClass('active');
        $(this).addClass('active');
        $(this).css({'color':'#00b0eb',
                    'box-shadow':'0 2px 5px 0 rgba(0,0,0,.26)'})

    });
    $(window).on('scroll', function() {
        if ($(".splash").height() -  $('nav').height()-16 < $(window).scrollTop()) {
            $('nav').css('background-color', '#64F1EC');
            $('nav').css('box-shadow','0 2px 5px 0 rgba(0,0,0,.26)');
        } else {
            $('nav').css('background-color', 'transparent');
            $('nav').css('box-shadow','');
        }
    });
    var title = ("Hi, I'm Steven").split("");
    var descriptions = ["I am a frontend developer", "I am a coffee enthusiast", "I am an owner of a lazy dog", "I am a teacher", "I am a mathematician", "I am a guitarist", "Let's Talk"];
    var i = 0;
    var g = 0;
    setInterval(function() {
        if (i < title.length) {
            $('.title').append(title[i]);
            i++
        }
    }, 100);

    setInterval(function() {
        if (g >= descriptions.length) {
            g = 0;
        }
        $('.descriptions').empty();
        $('.descriptions').append(descriptions[g]).hide();
        $('.descriptions').fadeIn(500);
        g++;
    }, 1500);

    $('.arrow').hover(function() {
        $(".pointer").animate({
            opacity: 1
        })
    }, function() {
        $(".pointer").animate({
            opacity: 0
        });
    });

})
