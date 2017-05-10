var trans = 0;
var firstTime = 0;

$(document).ready(function()
{
    var image = $(".container > img");
    var container = $(".container");
    var button = $('.container>button');


    var lastScrollTop = 0;
    container.scroll(function(event)
    {
        event.preventDefault();
        window.scrollBy(0,50);
        var st = $(this).scrollTop();
        console.log(st);
        if (st > lastScrollTop)
        {
            // downscroll code
            letsScroll("down");
        } 
        else 
        {
            // upscroll code
            letsScroll("up");
        }
        lastScrollTop = st;
    });



    $(document).keydown(function(e)
    {
        e.preventDefault();
        switch(e.which)
        {
            case 37:
                console.log("left");
                
                break;
            case 38:
                // console.log("up");
                letsScroll("up");
                break;
            case 39:
                console.log("right");
                break;
            case 40:
                // console.log("down");
                letsScroll("down");
                break;
        }
    });



    function letsScroll(direction)
    {
        var imagePosition = image.position();

        var ceilNumber, floorNumber;
        ceilNumber = Math.ceil(imagePosition.top);
        console.log("Asli position:" + imagePosition.top)
        console.log("CeilNumber " + ceilNumber);


        if(imagePosition.top <= 9 && imagePosition.top >= -15000)
        {
            //For checking if the watch is in initial position or in final position.
            //When image is in initial position, and someone presses "up". 
            if(ceilNumber == 9 && direction == "up")
            {
                alert("Scroll down now.");
                exit;
            }
            //When image is in final position, and someone presses "down".
            else if(ceilNumber <= -14491 && direction == "down")
            {
                alert("Scroll up now.");
                exit;
            }

            //What to do when down and up buttons are pressed.
            if(direction === "down")
            {
                trans -= 500;
                image.css("transform","translateY("+ trans +"px)")
            }
            else if(direction === "up")
            {
                trans += 500;
                image.css("transform","translateY("+ trans +"px)")
            }
        }
        
       
    }


    



});