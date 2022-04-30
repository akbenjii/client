Drupal.locale = { 'strings': {"":{"Please wait...":"Aguarde...","By @name":"Por @name","Submit":"Enviar","Cancel":"Cancelar","The selected file %filename cannot be uploaded. Only files with the following extensions are allowed: %extensions.":"O arquivo %filename n\u00e3o \u00e9 suportado. S\u00f3 \u00e9 permitido enviar arquivos com as seguintes extens\u00f5es: %extensions.","Close":"FECHAR","Sunday":"Domingo","Monday":"Segunda","Tuesday":"Ter\u00e7a","Wednesday":"Quarta","Thursday":"Quinta","Friday":"Sexta","Saturday":"S\u00e1bado","reply":"responder","Download":"Baixar","OK":"OK","Next":"Pr\u00f3ximo","January":"Janeiro","February":"Fevereiro ","March":"Mar\u00e7o","April":"Abril","May":"Maio","June":"Junho","July":"Julho","August":"Agosto","September":"Setembro","October":"Outubro","November":"Novembro","December":"Dezembro","Pause":"Pausar","On":"Ligado","Off":"Desligado","Apple, the Apple logo, and iTunes are trademarks of Apple Inc. registered in the U.S. and other countries.":"Apple, o logo Apple e iTunes s\u00e3o marcas registradas da Apple Inc., registrados nos EUA e em outros pa\u00edses.\r\n","On Now!":"AGORA!","Change Penguin":"Altere o Pinguim","The Parent emails need to match.":"Email de Pais e Respons\u00e1veis.","The emails need to match.":"Email de Pais e Respons\u00e1veis.","Play":"Reproduzir","Stop":"Parar","Download FREE Song":"Baixar a m\u00fasica GR\u00c1TIS","Submit Your Pledge":"Envie sua Resposta","Please download the Club Penguin app to login and play on this device.":"Para entrar com o seu usu\u00e1rio e jogar neste dispositivo, \u00e9 necess\u00e1rio baixar o aplicativo Club Penguin.","By clicking below you are leaving Club Penguin and are about to go to appstore.com where a different Terms of Use and Privacy Policy will apply.":"Ao clicar abaixo, voc\u00ea estar\u00e1 saindo do Club Penguin e sendo direcionado \u00e0 appstore.com, onde diferentes Termos de Uso e Pol\u00edticas de Privacidade ser\u00e3o aplicados. ","Spooky":"Assustador","Oops! Club Penguin needs a newer version of your web browser. Ask a parent to help you upgrade. Visit the FAQ to find out which browsers you can use.":"Opa! Para executar o Club Penguin, \u00e9 preciso atualizar o navegador. Pe\u00e7a aos pais ou respons\u00e1veis para ajudar voc\u00ea a atualizar. Acesse a p\u00e1gina de Perguntas Frequentes para saber os navegadores compat\u00edveis.","Log off":"Sair","Incorrect, please try again.":"Incorreto. Por favor, tente de novo."}} };;
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
 * JavaScript behaviors for the front-end display of penguin pages
 */
//If this fails won't be able to access content in the calling page for overlays
try {
  document.domain = 'clubpenguin.com';
} catch (e) {}

(function($) {
  Drupal.penguin = Drupal.penguin || {};

  // Initialized values
  Drupal.penguin.showPasswordEnabled = false;
  Drupal.penguin.ajaxInProgress = false;
  Drupal.penguin.submitWaiting = false;
  Drupal.penguin.upsellRotateIndex = -1;
  Drupal.penguin.upsellNum = 0;

  // Behavior
  Drupal.behaviors.penguin = {
    attach:function(context,settings) {
      Drupal.penguin.init(context);
    }
  }

  // Prep for showing modals
  Drupal.penguin.showModalPrep = function() {
    $("#modal-overlay").remove();
    $("#modal-loading").remove();
    $("#modal-window").remove();
    CP.common.prototype.initModal();
  };

  // Show Inline Modal
  Drupal.penguin.showModal = function(popupid, openCallback, closeCallback) {
    Drupal.penguin.showModalPrep();
    $('#modal-content').html($('#'+popupid).html());
    CP.global.runningVars.modal.open();
  };

  // Show External Modal
  Drupal.penguin.showModalExternal = function(html) {
    Drupal.penguin.showModalPrep();
    $('#modal-content').html(html);
    CP.global.runningVars.modal.open();
  };

  // Close Modal
  Drupal.penguin.closeModal = function() {
    // Are we in a lightbox?
    if (window!=window.top) { 
      // I'm in a frame!
      try {
        window.parent.Disney.Membership.modal.close();
      } catch(e) {
        // change host to www.clubpenguin.com (critterized)
        newHostname = location.hostname.replace("secured","www");
        location.href = "http://" + newHostname  + Drupal.settings.penguin.langPath + "/light-box-close";
      }
    } else {
      if (window.location.href.search(/membership/) >= 0) {
        // change host to www.clubpenguin.com (critterized)
        newHostname = location.hostname; // .replace("secured","www");
        location.href = "https://" + newHostname  + Drupal.settings.penguin.langPath + "/membership";
      } else {
        // change host to play.clubpenguin.com (critterized)
        newHostname = location.hostname.replace("secured","play");
        location.href = "http://" + newHostname  + Drupal.settings.penguin.langPath;
      }
    }
  };

  // Processing Overlay toggle
  Drupal.penguin.processing_overlay = function(showHide) {
    if (showHide == 'show' || showHide == '' || typeof showHide == 'undefined') {
      $('#processing-overlay').show();
      $("#overlay-wrapper .close").hide();
    } else {
      $('#processing-overlay').hide();
      $("#overlay-wrapper .close").show();
    }
  };

  // Penguin Thanks image rotation
  Drupal.penguin.upsellRotate = function() {
    var oldIndex = Drupal.penguin.upsellRotateIndex;
    Drupal.penguin.upsellRotateIndex = ((Drupal.penguin.upsellRotateIndex+1) % Drupal.penguin.upsellNum);
    
    try {
      $(".upsell_slider .views-row-"+(oldIndex + 1)).hide();
      $(".upsell_slider .views-row-"+(Drupal.penguin.upsellRotateIndex + 1)).show();
    } catch(e) {
      $(".upsell_slider .views-row").show();
    }
  };

  // Create Form Specific - Show the form submit button?
  Drupal.penguin.createFormSubmitAllow = function(allow) {
    var submit_button = $('#create-form form input[type=submit]');
    var click_preventer = $('#submit-wrapper .preventer');
    if (allow) {
      submit_button.removeClass('disabled').removeAttr('disabled');
      click_preventer.hide();
    } else {
      submit_button.addClass('disabled').attr('disabled','disabled');
      click_preventer.show();
    }
  };

  // Penguin Init (behavior details)
  Drupal.penguin.init = function(context) {
    var self = this;

    // -- Misc
    $('.back').click( function() {
      window.history.back();
    });
    $('.modal-close').click( function(event){
      Drupal.penguin.closeModal();
    });
    $('body').delegate('.modal-inner-close', 'click', function(event){
      try {
        CP.global.runningVars.modal.close();
      } catch(e){}
    });
    $('.option a, .description a').each( function(){
      this.tabIndex = -1;
    });
    $('.play-now').click( function(event){
      try {
        if (window!=window.top) { 
          window.top.location = $(this).attr('href');
        }
      } catch(e){}
    });
    $('.about-membership').click( function(event){
      try {
        // change host to www.clubpenguin.com (critterized)
        newHostname = location.hostname;
        window.top.location = "https://" + newHostname + Drupal.settings.penguin.langPath + "/membership";
      } catch(e){}
    });
    
    // -- Membership Upsell Slider
    $('.upsell_slider img').removeAttr('width').removeAttr('height');
    Drupal.penguin.upsellNum = $('.upsell_slider .views-row').length;
    setInterval(Drupal.penguin.upsellRotate, 3000);

    // -- Form Errors
    $('form').delegate('.row, .captcha.form-wrapper', 'click', function(event){
      $(this).find(".error-msg, .success-msg").hide();
      $(this).find(".error").removeClass('error');
      var tipText = $(this).find(".description").html();
      var errorFields =  $(".error");
      // Only display tips if no error messages currently showing.
      if ((tipText != null) && tipText.length > 0 && errorFields.length == 0) {
        $('#tip-box').show().find('.tip-inner').html(tipText);
      }
    });

    // -- Paperdoll setup
    $('#paperdoll-wrap').once('paperdoll', function() {
      $.each($(this).find('.form-type-radio'), function(key, value) {
        var colorVal = $.trim($(this).text().toLowerCase()).replace(' ','-');
        $(this).addClass('item-'+key+'-wrap');
        $(this).find('label').addClass('item-'+key).addClass('color-'+colorVal);
      });
      $(this).find('.paperdoll').animate({opacity:1}, '300');
    });

    // -- Inputs and labels
    $('label').click( function() {
      if (!$(this).hasClass('option')) {
        $(this).hide();
      }
    });
    $('input').focus( function() {
      // Hide labels
      if (!$("label[for='"+$(this).attr('id')+"']").hasClass('option')) {
        $("label[for='"+$(this).attr('id')+"']").hide();
      }
    }).blur( function() {
      // Show labels
      var value = $(this).val();
      if (value == '') {
        $("label[for='"+$(this).attr('id')+"']").show();
      }
      $('#tip-box').hide().find('.tip-inner').html('');
    });
    $('form input:checked').each( function() {
      // if checked, add class
      $("label[for='"+$(this).attr('id')+"']").addClass('checked');
    });
    $('input[type=text]').each( function() {
      // if input is not empty, hide label
      var value = $(this).val();
      if (value != '') {
        $("label[for='"+$(this).attr('id')+"']").hide();
      }
    });

    // -- Enter keys
    $('#edit-submit').keydown( function(event){
      if (event.keyCode == 9) {
        event.preventDefault();
        $('#create-button').focus();
      }
    });
    $('#create-form #edit-submit, #create-button').keydown( function(event){
      if (event.keyCode == 9) {
        event.preventDefault();
        $('#edit-name').focus();
      }
    });

    // -- Popups
    $('.popup').click( function() {
      Drupal.penguin.showModal($(this).attr('id')+'-popup');
      return false;
    });
    $('a.popup-external').click( function(event) {
      event.preventDefault();
      var linkSrc = $(this).attr('href');
      var html = '<iframe id="modal-iframe" src="'+linkSrc+'" height="600" width="960" allowtransparency="true" marginheight="0" marginwidth="0" frameborder="0" ></iframe>';
      Drupal.penguin.showModalExternal(html);
    });

    // -- Form Submits
    $('.form-submit').ajaxStart( function() {
      Drupal.penguin.ajaxInProgress = true;
    });
    $('.form-submit').ajaxComplete( function() {
      Drupal.penguin.ajaxInProgress = false;
      var errorFields = $('.error');
      // Hide tips if error fields showing.
      if (errorFields.length > 0) {
        $('#tip-box').hide().find('.tip-inner').html('');
      }
      // Remove Processing loader if errors occurred
      if (errorFields.length != 0) {
        self.processing_overlay('hide');
      } else if (Drupal.penguin.submitWaiting) {
        // is a submit waiting?
        $('#overlay form').submit();
      }
    });
    $('#overlay form').submit( function(event) {
      Drupal.penguin.submitWaiting = false;
      self.processing_overlay('show');
      if (Drupal.penguin.ajaxInProgress) {
        Drupal.penguin.submitWaiting = true;
        event.returnValue = false;
        event.preventDefault();
        self.processing_overlay('hide');
        return false;
      }
    });

    // -- Login Form
    $('#login-form .form-submit').click( function(event) {
      self.processing_overlay('show');
    });

    // -- Create Form
    // Name suggestions
    $('#create-form .form-item-name, #name-update-form .form-item-name').delegate('.name-suggestion', 'click', function(event){
        $("#edit-name").val($(this).text());
        $("#edit-name").addClass("valid").focus().blur();
    });
    // Enable show password (in browsers that support changing input type)
    if ($('#create-form').length && !($.browser.msie && parseInt($.browser.version) < 9) && !Drupal.penguin.showPasswordEnabled) {
      $('.form-item-pass-show').show();
      $('#create-form #edit-pass').get(0).type='text';
      $('#create-form #edit-pass').attr('checked', 'checked');
      Drupal.penguin.showPasswordEnabled = true;
    }
    // Toggle Show Password
    $("#create-form form label[for='edit-pass-show']").live('click', function(){
      var status = $(this).find('.sp-val');
      if ($('#create-form #edit-pass-show').is(':checked')) {
        status.text(Drupal.t('Off')).removeClass('on');
        $('#create-form #edit-pass').get(0).type='password';
      } else {
        status.text(Drupal.t('On')).addClass('on');
        $('#create-form #edit-pass').get(0).type='text';
      }
    });
    // Set the penguin colour to match current selected value
    $('#paperdoll-wrap #edit-color input').each( function(event){
      if ($(this).is(':checked')) {
        self.colorName = $(this).paperdoll_color_setup();
      }
    });
    // Change penguin colour when selection changes
    $('#paperdoll-wrap #edit-color input').change( function(event){
      if ($(this).is(':checked')) {
        self.colorName = $(this).paperdoll_color_setup();
      }
    });
    // Create form error validation
    if ($('#create-form form').length) {
      var has_errors = false;
      if (typeof Drupal.settings.penguin.errors != 'undefined') {
        // Checking each field in the errors array
        $.each(Drupal.settings.penguin.errors, function(index, value) {
          // An error only if value == true
          if (value) { has_errors = true; }
        });
        // If we have less fields validated than our validation count
        if (Object.keys(Drupal.settings.penguin.errors).length < Drupal.settings.penguin.validation_count) {
          has_errors = true;
        }
      } else { 
        // Errors array is undefined, so that's not right
        has_errors = true; 
      }
      // Is tou is checked?
      if (!$('#edit-terms').is(':checked')) {
        has_errors = true;
      }
      // Allow the form submission?
      Drupal.penguin.createFormSubmitAllow(!has_errors);
    }
  }

  // Preload the processing icon
  var spinner = '/sites/default/modules/custom/penguin/img/processing-icon.gif';
  $('body').append('<div id="processing-overlay" style="display:none;background-image:url(' + spinner + ');"></div>');

  // Goto
  $.fn.javascript_goto = function(href) {
    location.href = href;
  };

  // Refresh
  $.fn.javascript_refresh = function() {
    location.reload(true);
  };

  // Paperdoll color callback
  $.fn.paperdoll_color_setup = function() {
    var value = $(this).attr('id');
    var colorName = $.trim($("label[for='"+value+"']").text());
    var toRemove = 'edit-';
    var newclass = value.replace(toRemove,'');
    $('#penguin-paper-doll').removeClass(function (index, css) {
      return (css.match (/(^|\s)color-\S+/g) || []).join(' ');
    }).addClass(newclass).addClass('color-'+colorName.toLowerCase().replace(' ','-'));
    return colorName;
  }

  // Geopalz specific header
  try {
    var vars = [], hash;
    var q = document.URL.split('?')[1];
    if (q != undefined){
      q = q.split('&');
      for (var i = 0; i < q.length; i++) {
        hash = q[i].split('=');
        vars.push(hash[1]);
        vars[hash[0]] = hash[1];
      }
    }
    if (vars['aff'] && vars['aff'] == 'geopalz') {
      $('#overlay #overlay-header.membership').addClass('geopalz');
    }
  } catch(e){}

})(jQuery);
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
