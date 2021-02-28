$( document ).ready(function(){
    var the_timeout;

    // Red - Yellow CoLOORS Switching in EarthGood.html
    $('#before').hover(function(){
        $('#Mindful_Recipes_Bottom').toggleClass("redOn");
    })
    $('#after').hover(function(){
        $('#Mindful_Products_Bottom').toggleClass("yellowOn");
    })

    $('#scroll_up').on('click',function(e){
        $('html, body').animate({scrollTop:0}, 750);
    })
    
    // Scroll Button 
    $(window).scroll(function() {
        if($(window).scrollTop() > 300) {
            $('#scroll_up').fadeIn(200);
        }
        else $('#scroll_up').fadeOut(200);
     });

    $('#Search_Bar').click(function(){
        $('#search').toggle(300)
    })
    $('#search img').click(function(){
        alert("Searchhhh")
    })

    //  Mindful Products Content Animation
    $('.Any').hover(function(){
        clearTimeout(the_timeout);
        $('.btn', this).css("display","none")
        $('.btn', this).css("display","block")
    }).mouseleave(function(){ 
        clearTimeout(the_timeout);
        var that = this;
        the_timeout = setTimeout(function(){ 
            $('.btn', that).css("display","none")
        }  , 500 );
    })

    // Plus Sign In Good For The Planet
    $('.back_ground').hover(function(){
        $('.ctn#' + $(this).attr('id')).toggle()
        $(this).css("filter","brightness(50%)")
        // alert($(this).closest().hasClass('ctn'))
    }).mouseleave(function(){
        $(this).css("filter","brightness(100%)")
    })

    // MindfulRecipes Animation
    $('#cll').hover(function(){
        $('#cll #spans').toggle()
    })



    // Subscribe Button Joke :p
    $('button#subs').click(function(){alert('yey :D')})
})