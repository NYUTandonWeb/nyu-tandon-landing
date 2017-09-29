export function video() {

  $('img.js-pause').on('click',function(){
      $('img.js-pause').addClass('d-none');
      $('img.js-play').removeClass('d-none');
  });

  $('img.js-play').on('click',function(){
      $('img.js-play').addClass('d-none');
      $('img.js-pause').removeClass('d-none');
  });


$("#video-info").popover({ trigger: "manual" , html: true, animation:false})
.on("mouseenter", function () {
    var _this = this;
    $(this).popover("show");
    $(".popover").on("mouseleave", function () {
        $(_this).popover('hide');
    });
}).on("mouseleave", function () {
    var _this = this;
    setTimeout(function () {
        if (!$(".popover:hover").length) {
            $(_this).popover("hide");
        }
    }, 0);
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


    $('.logo').on('click', function(){

      instance.pause();
        $('img.js-pause').addClass('d-none');
        $('img.js-play').removeClass('d-none');

    });

    $('.overlay-close').on('click', function(){

      instance.play();
        $('img.js-play').addClass('d-none');
        $('img.js-pause').removeClass('d-none');
    });


    $('.youtube').on('show.bs.modal', function (e) {

      instance.pause();

      $('.bs-tooltip-right .arrow').hide();

    })

    $('.youtube').on('hidden.bs.modal', function (e) {

      instance.play();

      //$('.tooltip.bs-tooltip-right .arrow').show();

      $('#video-info').tooltip('hide')

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


$('#video-info').on('shown.bs.tooltip', function () {
      $('.tooltip.bs-tooltip-right .arrow').show();
});


(($ => {
  $(() => {
    $.prototype.fullscreen = function()
    {
      var $e = $(this);
      if(!$e.hasClass('modal-fullscreen')) return;
      bind($e);
    }

    function cssn($e, props) {
      let sum = 0;
      props.forEach(p => {
        sum += parseInt($e.css(p).match(/\d+/)[0]);
      });
      return sum;
    }
    function g($e)
    {
      return {
        width: cssn($e, ['margin-left', 'margin-right', 'padding-left', 'padding-right', 'border-left-width', 'border-right-width']),
        height: cssn($e, ['margin-top', 'margin-bottom', 'padding-top', 'padding-bottom', 'border-top-width', 'border-bottom-width']),
      };
    }
    function calc($e)
    {
      const wh = $(window).height();
      const ww = $(window).width();
      const $d = $e.find('.modal-dialog');
      $d.css('width', 'initial');
      $d.css('height', 'initial');
      $d.css('max-width', 'initial');
      $d.css('margin', '20px');
      const d = g($d);
      const $h = $e.find('.modal-header');
      const $f = $e.find('.modal-footer');
      const $b = $e.find('.modal-body');
      $b.css('overflow-y', 'scroll');
      const bh = wh - $h.outerHeight() - $f.outerHeight() - ($b.outerHeight()-$b.height()) - d.height;
      $b.height(bh);
    }
    function bind($e)
    {
       $e.on('show.bs.modal', e => {
        const $e = $(e.currentTarget).css('visibility', 'hidden');
       });
       $e.on('shown.bs.modal', e => {
        calc($(e.currentTarget));
        const $e = $(e.currentTarget).css('visibility', 'visible');
       });
    }
    $(window).resize(() => {
      calc($('.modal.modal-fullscreen.in'));
    });
    bind($('.modal-fullscreen'));
  });
}))(jQuery);


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