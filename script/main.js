$('.ba-heder__slider').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	infinite: true,
	arrows: false,	
	autoplay: true,
  	autoplaySpeed: 3000, 	
  	dots: true,
});

;(function($){
 'use strict'
		 $(function(){
        $('.ba-slider').slick({
            dots: true,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: true,
            fade: false,
            prevArrow: '.ba-slider-arrow__prev',
            nextArrow: '.ba-slider-arrow__next',
            autoplay: true,
  			autoplaySpeed: 3000, 
        });
    });
}(jQuery));


function initMap() {

        var styledMapType = new google.maps.StyledMapType(
            [
  {
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#f5f5f5"
      }
    ]
  },
  {
    "elementType": "labels.icon",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#616161"
      }
    ]
  },
  {
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#f5f5f5"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#bdbdbd"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#eeeeee"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#e5e5e5"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9e9e9e"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#ffffff"
      }
    ]
  },
  {
    "featureType": "road.arterial",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#dadada"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#616161"
      }
    ]
  },
  {
    "featureType": "road.local",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9e9e9e"
      }
    ]
  },
  {
    "featureType": "transit.line",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#e5e5e5"
      }
    ]
  },
  {
    "featureType": "transit.station",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#eeeeee"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#c9c9c9"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9e9e9e"
      }
    ]
  }
]
 ,
            {name: 'Styled Map'});

        var position = {lat: 40.6670526, lng: -73.9112205};

        var map = new google.maps.Map(document.getElementById('map'), {
          center: position,
          zoom: 15,
          mapTypeControlOptions: {
            mapTypeIds: ['roadmap', 'satellite', 'hybrid', 'terrain',
                    'styled_map']
          },

        });

        
        var marker = new google.maps.Marker({
        	position: position,
        	map: map,
          draggable: true,
          // animation: google.maps.Animation.BOUNCE,
          icon: 'imgs/point.png',
        	// icon: {
         //      // path: google.maps.SymbolPath.CIRCLE,
         //      // scale: 16,
         //      // fillColor: "#7e5aff",
         //      // fillOpacity: 0.5,
         //      // strokeWeight: 0.9,
         //      // strokeColor: "#7e5aff",
         //      // center: position
         //    }, 


        });

        var popupContent = '<p class="content">Here we are</p>',
              infowindow = new google.maps.InfoWindow({
            content: popupContent
        });
    
        map.mapTypes.set('styled_map', styledMapType);
        map.setMapTypeId('styled_map');
      };

;var $page = $('html, body');
$('a[href*="#"]').click(function() {
    $page.animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 400);
    return false;
});
