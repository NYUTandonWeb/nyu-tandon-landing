export function video() {

        $('img.js-pause').on('click',function(){
            $(this).addClass('d-none');
            $('img.js-play').removeClass('d-none');
        });

        $('img.js-play').on('click',function(){
            $(this).addClass('d-none');
            $('img.js-pause').removeClass('d-none');
        });

  // This is the bare minimum JavaScript. You can opt to pass no arguments to setup.
  // e.g. just plyr.setup(); and leave it at that if you have no need for events
  var instances = plyr.setup({
    // Output to console
    debug: false
  });

  // Get an element
  function get(selector) {
    return document.querySelector(selector);
  }

  // Custom event handler (just for demo)
  function on(element, type, callback) {
    if (!(element instanceof HTMLElement)) {
      element = get(element);
    }
    element.addEventListener(type, callback, false);
  }

  // Loop through each instance
  instances.forEach(function(instance) {

    // Play
    on('.js-play', 'click', function() {
      instance.play();
    });


    // Pause
    on('.js-pause', 'click', function() {
      instance.pause();
    });

    // Pause
    on('.js-player', 'click', function() {
      instance.pause();
    });


  });


//For Firefox we have to handle it in JavaScript

var vids = $("video");
$.each(vids, function(){
  this.controls = false;
});

//Loop though all Video tags and set Controls as false

$("video").click(function() {
  console.log('hello fucker');
  if (this.paused) {
    this.play();
  } else {
    this.pause();
  }
});





};