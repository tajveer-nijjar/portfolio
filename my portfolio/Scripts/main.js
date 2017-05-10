$(document).ready(function()
{
    //For Hamburger sign for phone.    
    $(window).on("orientationchange", function ()
    {
        showHamburger();
    });

    showHamburger();
    
    var showBuger = false;
    var $ul = $('.nav-content div.navUl');

    
    $(".body-content").click(function()
    {
        var ulVisible = $ul.is(":visible");
        if (showBuger === true && ulVisible === true)
        {
            $ul.css('visibility', 'hidden');
            showBuger = false;
        }
    });

    var width = $(window).width();

    $('img.hamburger, div.navUl ul.nav li').click(function (e)
    {
        var condition = (width <= 768);
        if (condition)
        {
            //For hiding/showing nav menu on click of hamburger sign
            if (showBuger === true)
            {
                $ul.css('visibility', 'hidden');
                showBuger = false;
            }
            else if(showBuger === false)
            {
                $ul.css('visibility', 'visible');
                showBuger = true;
            }
        }

    });



    //For showing hamburger sign
    function showHamburger()
    {
        var width = $(window).width();
        var condition = (width <= 768);
        if (condition)
        {
            $('img.hamburger').css(
            {
                'visibility': 'visible',
                'float': 'right'
            });
        }
        else
        {
            $('img.hamburger').css(
            {
                'visibility': 'hidden'

            });
        }
    }


    //If on Projects page, then dont highlight "Home" navigation link.
    var url = window.location.pathname;
    //var indexOfHash = url.indexOf('#');

    if (url !== '/')
    {
        $("div.navUl > ul.nav >li:first-child").removeClass("active");
    }



    //*************To show Sublist of Work done*************//
    var $workLi = $("div.navUl > ul.nav >li:contains('Work')");
    
    //If on home page.
    if (url.indexOf('Projects') !== -1)
    {
        $('div.navUl > ul.nav >li > ul.workSublist').slideDown(10);
        $workLi.addClass("active");
    }
    //If not on home page.
    else
    {
        $('div.navUl > ul.nav >li > ul.workSublist').slideUp(10);
    }

    //This is so that if we are on home page, the "WORK" button should work. 
    //  But if we are on "projects" page, the "WORK" button should not work.
    $workLi.on('click', function(e)
    {
        var anotherCondition = (e.target.innerText === 'WORK');
        
        //Means that we are on home page.
        var condition = url.indexOf('Projects') === -1;
        if (condition)
        {
            $('div.navUl > ul.nav >li > ul.workSublist').slideToggle(200);
        }
        //Means we are on projects page and clicking on "WORK" button
        else if (anotherCondition)
        {
            e.preventDefault();
            $('div.navUl > ul.nav >li > ul.workSublist').slideToggle(200);
        }
    });
    //******************************************************//

    
    //*******************For SlidingUp**********************//
    $('.clickHere').on('click', function ()
    {
        var $hello = $('p#hello');
        var $name = $('h1#name');
        var $youMust = $('p#youMust');
        var $slideUp = $('div.slideUp');



        $slideUp.slideUp(500, function()
        {
            $slideUp.css('width', '470px');

            $hello.html("Please scroll down");
            $name.html("To know why");

            $youMust.html("I am <i>not</i> ");


            $slideUp.slideDown(500);

            $('.clickHere').css('display', 'none');
        });
    });

    //WHITE slider for "CLICK HERE" button.
    var $whiteSlider = $('.whiteSlider');
    setInterval(function ()
    {
        $whiteSlider.animate(
        {
            "left": "100px"
        },
        700,
        function()
        {
            $whiteSlider.css(
            {
                "left": "-30px"
            });
        });
    }, 2500);

    //******************************************************//





    //************To calculate height of the page***********//
    var windowHeight = $(window).height();

    //Set the padding-top of the Hi! I'm Tajveer.......................
    var slideUpHeight = $("div.slideUp").height();
    var slideUpPadding = (windowHeight - slideUpHeight) / 2;
    $("div.slideUp").css("padding-top", slideUpPadding);


    //Set the padding-top for .nav-content in leftnav
    var navContentHeight = $("div.nav-content").height();
    var navContentPadding = (windowHeight - navContentHeight) / 2;
    $("div.nav-content").css("padding-top", navContentPadding - 100);


    //Set the padding-left of ul in leftnav
    var leftNavWidth = $("#mainNavBar>ul.nav").width();

    var liPaddingLeft = leftNavWidth * .125;

    $("#mainNavBar>ul.nav>li").css("padding-left", liPaddingLeft);


    //Set the padding-left of Contact Me
    var contactMeWidth = $("div.contactMe>ul").width();
    var contactMeMarginLeft = (leftNavWidth - contactMeWidth) / 2;
    
    $("div.contactMe>ul").css("margin-left", contactMeMarginLeft);
    //******************************************************//



    //***************For Project Selector Links*************//
    var allProjectsLink = $(".projectSelector > ul > li > a#all");
    var websiteProjectsLink = $(".projectSelector > ul > li > a#web");
    var webdesignProjectsLink = $(".projectSelector > ul > li > a#design");
    var appProjectsLink = $(".projectSelector > ul > li > a#apps");

    var websiteDivsContainer = $(".content > .allProjects > .webProjects");
    var websiteDivs = $(".content > .allProjects > .webProjects  .website");
    var appDivsContainer = $(".content > .allProjects > .appProjects");
    var appDivs = $(".content > .allProjects > .appProjects  .mobileApp");
    var designDivsContainer = $(".content > .allProjects > .webDesignProjects");
    var designDivs = $(".content > .allProjects > .webDesignProjects  .webDesign");

    allProjectsLink.click(function (e)
    {
        e.preventDefault();
        websiteDivsContainer.removeClass("notActive").addClass("active");
        appDivsContainer.removeClass("notActive").addClass("active");
        designDivsContainer.removeClass("notActive").addClass("active");
        

        //websiteDivs.addClass("active");
        //appDivs.addClass("active");
        //designDivs.addClass("active");
    });

    websiteProjectsLink.click(function (e)
    {
        e.preventDefault();

        websiteDivsContainer.removeClass("notActive").addClass("active animated fadeIn");
        //websiteDivsContainer.addClass("active animated fadeIn");
        appDivsContainer.addClass("notActive");
        designDivsContainer.addClass("notActive");


        //websiteDivs.addClass("active");
        //designDivs.removeClass("active");
    });


    appProjectsLink.click(function (e)
    {
        e.preventDefault();

        appDivsContainer.removeClass("notActive");
        appDivsContainer.addClass("active animated fadeIn");
        websiteDivsContainer.addClass("notActive");
        designDivsContainer.addClass("notActive");


    });



    webdesignProjectsLink.click(function (e)
    {
        e.preventDefault();

        designDivsContainer.removeClass("notActive");
        designDivsContainer.addClass("active animated fadeIn");
        websiteDivsContainer.addClass("notActive");
        appDivsContainer.addClass("notActive");


    });

    //******************************************************//


    

});