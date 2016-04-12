// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .


// Make an instance of two and place it on the page.
$(document).ready(function(){



var elem = document.getElementById('draw-shapes');
var params = { width: 600, height: 600 };
 two = new Two(params).appendTo(elem);

// two has convenience methods to create shapes.
 circle = two.makeCircle(72, 100, 50);
// var rect = two.makeRectangle(213, 100, 100, 100);

// The object returned has many stylable properties:
circle.fill = '#FF8000';
circle.stroke = 'orangered'; // Accepts all valid css color
circle.linewidth = 5;

// rect.fill = 'rgb(0, 200, 255)';
// rect.opacity = 0.75;
// rect.noStroke();

// Don't forget to tell two to render everything
// to the screen
two.update();

moveRand = function(){

	circle.translation.set(Math.floor(Math.random()*two.width), Math.floor(Math.random()*two.height));
	circle.scale = (Math.random()+1);
	two.update();

}


setInterval(moveRand, 100);

})


