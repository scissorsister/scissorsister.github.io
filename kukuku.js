$(document).ready(function() { 
var slider = $('#layout .slider_holder');
var item = $('#layout .slide');
var total = item.length;
var width = item.width();
var index = 0;
var speed = 500;

slider.width( total * width );


function Slide(index) {
  slider.stop().animate({left: -index * width +'px'}, speed);
};

$('.slide-prev').on('click', function() {
  index -= 1;
  Slide( index = (index < 0) ? total - 1 : index );
});

$('.slide-next').on('click', function() {
  index += 1;
  Slide( index = (index > total - 1) ? 0 : index );
});
});
