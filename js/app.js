//Animates particle effects
particlesJS('particles-js',
{
    "particles":
    {
        "number":
        {
            "value": 90,
            "density":
            {
                "enable": true,
                "value_area": 800
            }
        },
        
        "color":
        {
            "value": "#484848"
        },
        
        "shape":
        {
            "type": "circle",
            "stroke":
            {
                "width": 0,
                "color": "#000000"
            },
            
            "polygon":
            {
                "nb_sides": 5
            },
            
            "image":
            {
                "src": "Assets/asteriskParticle.png",
                "width": 100,
                "height": 100
            }
        },
        
        "opacity":
        {
            "value": 0.5,
            "random": false,
            "anim":
            {
                "enable": true,
                "speed": .6,
                "opacity_min": 0.1,
                "sync": false
            }
        },
        
        "size":
        {
            "value": 5,
            "random": true,
            "anim":
            {
                "enable": false,
                "speed": 40,
                "size_min": 0.1,
                "sync": false
            }
        },
        
        "line_linked":
        {
            "enable": true,
            "distance": 150,
            "color": "#000000",
            "opacity": 0.5,
            "width": 1
        },
        
        "move":
        {
            "enable": true,
            "speed": .8,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "attract":
            {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
            }
        }
    },
    
    "interactivity":
    {
        "detect_on": "canvas",
        "events":
        {
            "onhover":
            {
                "enable": true,
                "mode": "grab"
            },

            "onclick":
            {
                "enable": true,
                "mode": "repulse"
            },

            "resize": true
        },

        "modes":
        {
            "grab":
            {
                "distance": 250,
                "line_linked":
                {
                    "opacity": 1
                }
            },

            "bubble":
            {
                "distance": 400,
                "size": 40,
                "duration": 2,
                "opacity": 8,
                "speed": 3
            },

            "repulse":
            {
                "distance": 200
            },

            "push":
            {
                "particles_nb": 4
            },

            "remove":
            {
                "particles_nb": 2
            }
        }
    },
    
    "retina_detect": true,
    "config_demo":
    {
        "hide_card": false,
        "background_color": "#b61924",
        "background_image": "",
        "background_position": "50% 50%",
        "background_repeat": "no-repeat",
        "background_size": "cover"
    }
}

);

var $root = $('html, body');

//Animates slide ou menu
$('#navBtn').click(function()
{
	$root.animate({
		scrollTop: $( $.attr(this, 'href') ).offset().top
	}, 900);
	return false;
});

$('#scrollAnim1').click(function()
{
	$root.animate({
		scrollTop: $( $.attr(this, 'href') ).offset().top
	}, 900);
	return false;
});

$('#scrollAnim2').click(function()
{
	$root.animate({
		scrollTop: $( $.attr(this, 'href') ).offset().top
	}, 900);
	return false;
});

$('#scrollAnim3').click(function()
{
	$root.animate({
		scrollTop: $( $.attr(this, 'href') ).offset().top
	}, 900);
	return false;
});


$("#menu-toggle").click(function(e)
{
	e.preventDefault();
	$("#wrapper").toggleClass("toggled");
 });

//$('.carousel').carousel({
//    pause: true,
//    interval: false
//});

//Expands image modal on click
$('#picCol1').click(function()
{
	$('#myModal1').css(
	{
		'display':'block',
		'animation-name':'zoomIn',
    	'animation-duration':'0.3s'
	});
});

$('#picCol2').click(function()
{
	$('#myModal2').css(
	{
		'display':'block',
		'animation-name':'zoomIn',
    	'animation-duration':'0.3s'
	});
});

$('#picCol3').click(function()
{
	$('#myModal3').css(
	{
		'display':'block',
		'animation-name':'zoomIn',
    	'animation-duration':'0.3s'
	});
});

$('#picCol4').click(function()
{
	$('#myModal4').css(
	{
		'display':'block',
		'animation-name':'zoomIn',
    	'animation-duration':'0.3s'
	});
});

$('#picCol5').click(function()
{
	$('#myModal5').css(
	{
		'display':'block',
		'animation-name':'zoomIn',
    	'animation-duration':'0.3s'
	});
});

$('#picCol6').click(function()
{
	$('#myModal6').css(
	{
		'display':'block',
		'animation-name':'zoomIn',
    	'animation-duration':'0.3s'
	});
});

$('#picCol7').click(function()
{
	$('#myModal7').css(
	{
		'display':'block',
		'animation-name':'zoomIn',
    	'animation-duration':'0.3s'
	});
});

$('#picCol8').click(function()
{
	$('#myModal8').css(
	{
		'display':'block',
		'animation-name':'zoomIn',
    	'animation-duration':'0.3s'
	});
});

$(".close").click(function()
{
	$('#myModal1').css(
	{
		'display':'none',
		'animation-name':'zoomOut',
		'animation-duration':'0.3s'
	});
	
	$('#myModal2').css(
	{
		'display':'none',
		'animation-name':'zoomOut',
		'animation-duration':'0.3s'
	});
	
	$('#myModal3').css(
	{
		'display':'none',
		'animation-name':'zoomOut',
		'animation-duration':'0.3s'
	});
	
	$('#myModal4').css(
	{
		'display':'none',
		'animation-name':'zoomOut',
		'animation-duration':'0.3s'
	});
	
	$('#myModal5').css(
	{
		'display':'none',
		'animation-name':'zoomOut',
		'animation-duration':'0.3s'
	});
	
	$('#myModal6').css(
	{
		'display':'none',
		'animation-name':'zoomOut',
		'animation-duration':'0.3s'
	});
	
	$('#myModal7').css(
	{
		'display':'none',
		'animation-name':'zoomOut',
		'animation-duration':'0.3s'
	});
	
	$('#myModal8').css(
	{
		'display':'none',
		'animation-name':'zoomOut',
		'animation-duration':'0.3s'
	});
});



$(function(){

    // Remove svg.radial-progress .complete inline styling
    $('svg.radial-progress').each(function( index, value)
	{		
		$(this).find($('circle.complete')).removeAttr( 'style' );
    });

    // Activate progress animation on scroll
    $(window).scroll(function(){
        $('svg.radial-progress').each(function( index, value ) { 
            // If svg.radial-progress is approximately 25% vertically into the window when scrolling from the top or the bottom
            if ( 
                $(window).scrollTop() > $(this).offset().top - ($(window).height() * 0.75) &&
                $(window).scrollTop() < $(this).offset().top + $(this).height() - ($(window).height() * 0.25)
            ) {
                // Get percentage of progress
                percent = $(value).data('percentage');
                // Get radius of the svg's circle.complete
                radius = $(this).find($('circle.complete')).attr('r');
                // Get circumference (2πr)
                circumference = 2 * Math.PI * radius;
                // Get stroke-dashoffset value based on the percentage of the circumference
                strokeDashOffset = circumference - ((percent * circumference) / 100);
                // Transition progress for 1.25 seconds
                $(this).find($('circle.complete')).animate({'stroke-dashoffset': strokeDashOffset}, 1250);
            }
        });
    }).trigger('scroll');

});