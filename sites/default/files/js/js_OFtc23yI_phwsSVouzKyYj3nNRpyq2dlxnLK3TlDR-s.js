/**
 * @file
 * Adds some show/hide to the admin form to make the UXP easier.
 */
(function($){
  Drupal.behaviors.video = {
    attach: function (context, settings) {
      //lets see if we have any jmedia movies
      if($.fn.media) {
        $('.jmedia').media();
      }
	
      if(settings.video) {
        $.fn.media.defaults.flvPlayer = settings.video.flvplayer;
      }
	
      //lets setup our colorbox videos
      $('.video-box').each(function() {
        var url = $(this).attr('href');
        var data = $(this).metadata();
        var width = data.width;
        var height= data.height;
        var player = settings.video.player; //player can be either jwplayer or flowplayer.
        $(this).colorbox({
          html: '<a id="video-overlay" href="'+url+'" style="height:'+height+'; width:'+width+'; display: block;"></a>',
          onComplete:function() {
            if(player == 'flowplayer') {
              flowplayer("video-overlay", settings.video.flvplayer, {
                clip: {
                  autoPlay: settings.video.autoplay,
                  autoBuffering: settings.video.autobuffer
                }
              });
            } else {
              $('#video-overlay').media({
                flashvars: {
                  autostart: settings.video.autoplay
                },
                width:width,
                height:height
              });
            }
          }
        });
      });
    }
  };
  
  Drupal.behaviors.videoEdit = function(context){
    // on change of the thumbnails when edit
    $(".video-thumbnails input").each(function() {
      var path = $(this).val();
      if($(this).is(':checked')) {
        var holder = $(this).attr('rel');
        var id = $(this).attr('id');
        var src = $('label[for="'+id+'"]').find('img').attr('src');
        $('.'+holder+' img').attr('src', src);
      }
    });
  }
})(jQuery);
;
/**
 * JavaScript behaviors for the front-end display of penguin forms
 * Either forms.js should be used or penguin.js, not both
 */
(function ($) {
  Drupal.forms = Drupal.forms || {};

  // Behavior
  Drupal.behaviors.forms = {
    attach:function(context,settings) {
      Drupal.forms.init(context);
    }
  }

  // Forms Init (behavior details)
  Drupal.forms.init = function(context) {
    var self = this;

    // -- MISC
    $('.option a, .description a').each( function(){
      this.tabIndex = -1;
    });

    // -- Inputs and labels
    $('label').click( function() {
      if (!$(this).hasClass('option')) {
        $(this).addClass('hide');
      }
    });
    $('input').focus( function() {
      //Hide label
      if (!$("label[for='"+$(this).attr('id')+"']").hasClass('option')) {
        $("label[for='"+$(this).attr('id')+"']").addClass('hide');
      }
    }).blur( function() {
        var value = $(this).val();
        if (value == "") {
          $("label[for='"+$(this).attr('id')+"']").removeClass('hide');
        }
        $("#tip-box").html('').hide();
    });
    $('form input:checked').each( function() {
      $("label[for='"+$(this).attr('id')+"']").addClass('checked');
    });
    $('input[type=text]').each( function() {
      // if input is not empty, hide label
      var value = $(this).val();
      if (value != "") {
        $("label[for='"+$(this).attr('id')+"']").addClass('hide');
      }
    });

    // -- Form Errors
    $('form').delegate('.row, .captcha.form-wrapper', 'click', function(event){
      $(this).find('.error-msg').hide();
      $(this).find('.error').removeClass('error');
      var errorFields =  $('.error');
    });

    // -- Enter keys
    $('#login-form #edit-submit').keydown( function(event){
      if(event.keyCode == 9) {
        event.preventDefault();
        $('#edit-name').focus();
       }
    });
  }

  // Goto
  $.fn.javascript_goto = function(href) {
    location.href = href;
  };

  // Refresh
  $.fn.javascript_refresh = function() {
    location.reload(true);
  };

  $.ajaxPrefilter( function( options, originalOptions, jqXHR ) {
    options.crossDomain ={
      crossDomain: true
    };
    options.xhrFields = {
      withCredentials: true
    };
  });

})(jQuery);
;
/**
 * @file: scripts for fan art, fan photo, etc.
 */

(function($){

  // Behavior
  Drupal.behaviors.fan_ugc = {
    attach:function(context,settings){
      // Show/hide the upload button depending on if a file
      // was actually uploaded
      if ($('input[name=ugc_image_remove_button][').length) {
        $('.submit-wrapper').show();
      } else {
        $('.submit-wrapper').hide();
      }
    }
  }

  // On form load, reattach beahviors since this form is ajax'd
  var ugc_form = $('#penguin-ugcimage-form');
  Drupal.attachBehaviors(ugc_form);

  // Listeners
  $('input[type=file]').live('mousedown', function() {
    // removing error messages
    ugc_form.find('.messages.error').remove();
    ugc_form.find('.error').removeClass('error');
  });

})(window.jQuery);
;
(function ($) {

  Drupal.behaviors.captcha = {
    attach: function (context) {

      // Turn off autocompletion for the CAPTCHA response field.
      // We do it here with Javascript (instead of directly in the markup)
      // because this autocomplete attribute is not standard and
      // it would break (X)HTML compliance.
      $("#edit-captcha-response").attr("autocomplete", "off");

    }
  };

  Drupal.behaviors.captchaAdmin = {
    attach: function (context) {
      // Add onclick handler to checkbox for adding a CAPTCHA description
      // so that the textfields for the CAPTCHA description are hidden
      // when no description should be added.
      // @todo: div.form-item-captcha-description depends on theming, maybe
      // it's better to add our own wrapper with id (instead of a class).
      $("#edit-captcha-add-captcha-description").click(function() {
        if ($("#edit-captcha-add-captcha-description").is(":checked")) {
          // Show the CAPTCHA description textfield(s).
          $("div.form-item-captcha-description").show('slow');
        }
        else {
          // Hide the CAPTCHA description textfield(s).
          $("div.form-item-captcha-description").hide('slow');
        }
      });
      // Hide the CAPTCHA description textfields if option is disabled on page load.
      if (!$("#edit-captcha-add-captcha-description").is(":checked")) {
        $("div.form-item-captcha-description").hide();
      }
    }

  };

})(jQuery);
;
(function ($) {

/**
 * A progressbar object. Initialized with the given id. Must be inserted into
 * the DOM afterwards through progressBar.element.
 *
 * method is the function which will perform the HTTP request to get the
 * progress bar state. Either "GET" or "POST".
 *
 * e.g. pb = new progressBar('myProgressBar');
 *      some_element.appendChild(pb.element);
 */
Drupal.progressBar = function (id, updateCallback, method, errorCallback) {
  var pb = this;
  this.id = id;
  this.method = method || 'GET';
  this.updateCallback = updateCallback;
  this.errorCallback = errorCallback;

  // The WAI-ARIA setting aria-live="polite" will announce changes after users
  // have completed their current activity and not interrupt the screen reader.
  this.element = $('<div class="progress" aria-live="polite"></div>').attr('id', id);
  this.element.html('<div class="bar"><div class="filled"></div></div>' +
                    '<div class="percentage"></div>' +
                    '<div class="message">&nbsp;</div>');
};

/**
 * Set the percentage and status message for the progressbar.
 */
Drupal.progressBar.prototype.setProgress = function (percentage, message) {
  if (percentage >= 0 && percentage <= 100) {
    $('div.filled', this.element).css('width', percentage + '%');
    $('div.percentage', this.element).html(percentage + '%');
  }
  $('div.message', this.element).html(message);
  if (this.updateCallback) {
    this.updateCallback(percentage, message, this);
  }
};

/**
 * Start monitoring progress via Ajax.
 */
Drupal.progressBar.prototype.startMonitoring = function (uri, delay) {
  this.delay = delay;
  this.uri = uri;
  this.sendPing();
};

/**
 * Stop monitoring progress via Ajax.
 */
Drupal.progressBar.prototype.stopMonitoring = function () {
  clearTimeout(this.timer);
  // This allows monitoring to be stopped from within the callback.
  this.uri = null;
};

/**
 * Request progress data from server.
 */
Drupal.progressBar.prototype.sendPing = function () {
  if (this.timer) {
    clearTimeout(this.timer);
  }
  if (this.uri) {
    var pb = this;
    // When doing a post request, you need non-null data. Otherwise a
    // HTTP 411 or HTTP 406 (with Apache mod_security) error may result.
    $.ajax({
      type: this.method,
      url: this.uri,
      data: '',
      dataType: 'json',
      success: function (progress) {
        // Display errors.
        if (progress.status == 0) {
          pb.displayError(progress.data);
          return;
        }
        // Update display.
        pb.setProgress(progress.percentage, progress.message);
        // Schedule next timer.
        pb.timer = setTimeout(function () { pb.sendPing(); }, pb.delay);
      },
      error: function (xmlhttp) {
        pb.displayError(Drupal.ajaxError(xmlhttp, pb.uri));
      }
    });
  }
};

/**
 * Display errors on the page.
 */
Drupal.progressBar.prototype.displayError = function (string) {
  var error = $('<div class="messages error"></div>').html(string);
  $(this.element).before(error).hide();

  if (this.errorCallback) {
    this.errorCallback(this);
  }
};

})(jQuery);
;
