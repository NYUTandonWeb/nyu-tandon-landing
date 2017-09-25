export function video() {

  $('img.js-pause').on('click',function(){
      $('img.js-pause').addClass('d-none');
      $('img.js-play').removeClass('d-none');
  });

  $('img.js-play').on('click',function(){
      $('img.js-play').addClass('d-none');
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


    // Fullscreen button controls
    $('.youtube').on('shown.bs.modal', function (e) {
      // console.log('fired modal show');
      instance.pause();
      $('img.js-pause').addClass('d-none');
      $('.fullscreen').addClass('d-none');
      $('img.js-play').removeClass('d-none');

    })

    $('.youtube').on('hidden.bs.modal', function (e) {
      // console.log('fired modal hide');
      instance.play();
      $('img.js-play').addClass('d-none');
      $('img.js-pause').removeClass('d-none');
      $('.fullscreen').removeClass('d-none');

    })

    // video click controls
    $('video').on('click',function(){
        $('img.js-pause').toggleClass('d-none');
        $('img.js-play').toggleClass('d-none');
      if ('video'.paused) {
        instance.play();
        $('img.js-pause').addClass('d-none');
        $('img.js-play').removeClass('d-none');
      } else if('video'.play) {
        instance.pause();
        $('img.js-play').addClass('d-none');
        $('img.js-pause').removeClass('d-none');
      }
    });

  });





//For Firefox we have to handle it in JavaScript

var vids = $("video");
$.each(vids, function(){
  this.controls = false;
});

//Loop though all Video tags and set Controls as false

// $("video").click(function() {
//   console.log('hello fucker');
//   if (this.paused) {
//     this.play();
//   } else {
//     this.pause();
//   }
// });





};