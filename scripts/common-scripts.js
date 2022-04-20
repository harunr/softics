;
(function ($) {
    $(function () {

        // Begin input common focus and blur for value.
        var input = $('input:text, input:password,input[type="email"],input[type="tel"],input[type="number"],input[type="search"], textarea');

        $(input).each(function () {
            var inputText = $(this).attr('placeholder')
            $(this).focus(function () {
                if ($(this).val().length === 0) {
                    $(this).attr('placeholder', '');
                } else {
                    $(this).parent().removeClass('hasValue')
                }
            }).blur(function () {
                if ($(this).val().length === 0) {
                    $(this).attr('placeholder', inputText);
                } else {
                    $(this).parent().addClass('hasValue')
                }
            });
        });
        // Ends input common focus and blur for value.

        //header nav style 
        if ($(window).width() > 991) {
            $('.nav ul li:nth-last-of-type(-n+2)').wrapAll('<div class="nav-last-item"></div>')
        }


        $('.phone-nav').on('click', function () {
            $('.header').toggleClass('open');
            $('.main-navigation').slideToggle();
            if ($(this).find('dfn').text() === 'MENU') {
                $(this).find('dfn').text('ClOSE');
            } else {
                $(this).find('dfn').text('MENU')
            }
        });
        
        var navHeight = $("header.header").outerHeight();
        
        $('.nav ul li a[href*="#"]').on('click', function (e) {
            //e.preventDefault();
            
            if($(window).width() > 991 ){
                $('html, body').animate({
                    scrollTop: $($(this).attr('href')).offset().top - 0
                }, 500, 'linear');
            }else{
                
                $('html, body').animate({
                    scrollTop: $($(this).attr('href')).offset().top - 0
                }, 500, 'linear');
                
                $(".main-navigation").slideUp();
                $("header.header").removeClass('open');
                if ($('.phone-nav').find('dfn').text() === 'MENU') {
                    $('.phone-nav').find('dfn').text('ClOSE');
                } else {
                    $('.phone-nav').find('dfn').text('MENU')
                }
            }

        });
        
        
        $(".benefit-row > .benefit-item").hide();
        $(".benefit-row > .benefit-item").eq(0).fadeIn();
        $("#benefits .benefit-type").each(function(i){
            $(this).click(function(){
                if($(this).hasClass('active')) return false
                else{
                    $("#benefits .benefit-type").removeClass("active");
                    $(this).addClass("active");
                    $(".benefit-row > .benefit-item").fadeOut();
                    $(".benefit-row > .benefit-item").eq(i).fadeIn();
                }
            })
        })



        //this is for sticky header
        if ($(window).width() > 767) {
            var $header = $("header"),
                $headerHeight = $header.outerHeight() + 5,
                lastPos = 0;

            $(window).on("scroll", function () {
                var fromTop = $(window).scrollTop();
                if (fromTop > $headerHeight * 1) {
                    if (fromTop > lastPos) {
                        $header.css('top', '-' + $headerHeight + 'px');
                    } else {
                        $header.css('top', 0);
                    }
                    lastPos = fromTop;
                }
            });
            
            $(window).on("resize", function () {
                $headerHeight = $header.outerHeight() + 5;
                totalHeight(".benefit-item", ".benefit > .benefit-row");
            });

        }


        //this function for selectric
        if ($("select.styled-select").length) {
            $('select.styled-select').selectric({
                onChange: function (element) {
                    $('.input-row .selectric-wrapper').addClass('changed');
                }
            });
        }
        if ($(".questions-dropdown").length) {
            $('.questions-dropdown').selectric({
                onBeforeInit: function () {
                    $('.qestion-lead h2').append(this);
                },
            });
        }


        //testimonial
        $('.client-praise').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: true,
            asNavFor: '.client-profile-carousel',
            infinite: true,
            centerMode: true,
            autoPlay: true,
        });
        $('.client-profile-carousel').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            asNavFor: '.client-praise',
            centerMode: true,
            focusOnSelect: true,
            centerPadding: 0,
            autoPlay: true,
            infinite: true,
        });

        if ($(window).width() < 768) {

            if ($('.single-media').length < 3) {
                $('.media').append($('.single-media:first-child').clone());
            }
            $('.media').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                centerPadding: 0,
                autoPlay: true,
                infinite: true,
                dots: true,
                arrows: false,
            });
            $('#service').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                centerPadding: 0,
                autoPlay: true,
                infinite: true,
                dots: true,
                arrows: false,
            });
        }
        
        
        // Question tab function
        $(".question-content .question-item").hide();
        $(".question-content .question-item").eq(0).show();
        
        $(".selectric-questions-dropdown .selectric-items li").each(function(i){
            $(this).click(function(){
                if($(this).hasClass('active')) return false
                else{
                    $(".selectric-questions-dropdown .selectric-items li").removeClass('active');
                    $(this).addClass('active');
                    $(".question-content .question-item").hide();
                    $(".question-content .question-item").eq(i).show();
                }
            })
        })

        $(".question").click(function () {
            $(this).css('border-bottom', '0')
            $(".question-ans").slideUp(function () {
                $(this).parent().find('.question').css('border-bottom', '1px solid #b1b1b1');
            });
            $(".single-question").removeClass("show")

            if ($(this).parent().find(".question-ans:visible").length) {
                $(this).parent().find(".question-ans").slideUp(function () {
                    $(this).parent().find('.question').css('border-bottom', '1px solid #b1b1b1');
                });
                $(this).parent().removeClass("show");
            } else {
                $(this).parent().find(".question-ans").slideDown(function () {
                    $(this).parent().find('.question').css('border-bottom', '0');
                })
                $(this).parent().addClass("show");

            }
        })


        $(".benefit-content-item h5").click(function () {
            $(".benefit-content-item p").slideUp();
            $(".benefit-content-item").removeClass("show");

            if ($(this).parent().find("p:visible").length) {
                $(this).parent().find("p").slideUp();
                $(this).parent().removeClass("show");
            } else {
                $(this).parent().find("p").slideDown();
                $(this).parent().addClass("show");
            }
        });


        //input the counter date;
        $('.single-step').each(function (i) {
            var getNumber = i + 1;
            if (getNumber < 9) getNumber = '0' + getNumber;
            $(this).find('.step-content').prepend('<span class="counter">' + getNumber + '</span');
        });
        
        // Set total element height on parent
        function totalHeight(element, elementParent){
            var elementHeight = $(element).outerHeight();
            $(elementParent).css('height', elementHeight);
        }
        totalHeight(".benefit-item", ".benefit > .benefit-row");

        function eventListeners() {
            $(window).on('resize', function () {
                matchHeight();
                questionHeight();
            });
        }

        function matchHeight() {
            var groupName = $('.media-content');
            var groupHeights = [];
            

            groupName.css('min-height', 'auto');

            groupName.each(function () {
                groupHeights.push($(this).outerHeight());
            });

            var maxHeight = Math.max.apply(null, groupHeights);
            groupName.css('min-height', maxHeight);
            //console.log(groupHeights)
        };
        
        function questionHeight() {
            var groupName = $('.question');
            var groupHeights = [];
            groupName.css('min-height', 'auto');
            groupName.each(function () {
                groupHeights.push($(this).outerHeight());
            });
            var maxHeight = Math.max.apply(null, groupHeights);
            groupName.css('min-height', maxHeight);

        };

        
        function equalHeight() {
            eventListeners();
            matchHeight();
            questionHeight();
        }

        equalHeight();
        
        
        
        
         // This function for scroll from bottom animation
        
        var $animation_elements = $('.animate');
        var $window = $(window);

        function check_if_in_view() {
            var window_height = $window.height();
            var window_top_position = $window.scrollTop();
            var window_bottom_position = (window_top_position + window_height);

            $.each($animation_elements, function() {
                var $element = $(this);
                var element_height = $element.outerHeight();
                var element_top_position = $element.offset().top;
                var element_bottom_position = (element_top_position + element_height);

                //check to see if this current container is within viewport
                if (element_top_position <= window_bottom_position) {
                    $element.addClass('in-view');
                } else {
                    $element.removeClass('in-view');
                }
            });
        }

        $window.on('scroll resize', check_if_in_view);
        $window.trigger('scroll');
        // End animation function
        
        
        if($(".step-graphics-wrap").length){
            var graphicsHeight = $(".static-raod").outerHeight();
            $(window).on("scroll", function(){
                if($(window).scrollTop() > $(".work-process").offset().top - 0 ){
                    $(".animated-graph").animate({
                        height: graphicsHeight
                    }, 1800)
                }
            })
        
        }


    }) // End ready function.

  

})(jQuery)