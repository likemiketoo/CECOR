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

//Automatic Page scrolling
var $root = $('html, body');

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

$('.carousel').carousel({
    pause: true,
    interval: false
});