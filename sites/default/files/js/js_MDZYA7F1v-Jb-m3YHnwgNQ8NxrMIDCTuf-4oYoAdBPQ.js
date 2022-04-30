/*
  Formalize - version 1.1

  Note: This file depends on the jQuery library.
*/

// Module pattern:
// http://yuiblog.com/blog/2007/06/12/module-pattern
var FORMALIZE = (function($, window, document, undefined) {
  // Private constants.
  var PLACEHOLDER_SUPPORTED = 'placeholder' in document.createElement('input');
  var AUTOFOCUS_SUPPORTED = 'autofocus' in document.createElement('input');
  var IE6 = !!($.browser.msie && parseInt($.browser.version, 10) === 6);
  var IE7 = !!($.browser.msie && parseInt($.browser.version, 10) === 7);

  // Expose innards of FORMALIZE.
  return {
    // FORMALIZE.go
    go: function() {
      for (var i in FORMALIZE.init) {
        FORMALIZE.init[i]();
      }
    },
    // FORMALIZE.init
    init: {
      // FORMALIZE.init.ie6_skin_inputs
      ie6_skin_inputs: function() {
        // Test for Internet Explorer 6.
        if (!IE6 || !$('input, select, textarea').length) {
          // Exit if the browser is not IE6,
          // or if no form elements exist.
          return;
        }

        // For <input type="submit" />, etc.
        var button_regex = /button|submit|reset/;

        // For <input type="text" />, etc.
        var type_regex = /date|datetime|datetime-local|email|month|number|password|range|search|tel|text|time|url|week/;

        $('input').each(function() {
          var el = $(this);

          // Is it a button?
          if (this.getAttribute('type').match(button_regex)) {
            el.addClass('ie6-button');

            /* Is it disabled? */
            if (this.disabled) {
              el.addClass('ie6-button-disabled');
            }
          }
          // Or is it a textual input?
          else if (this.getAttribute('type').match(type_regex)) {
            el.addClass('ie6-input');

            /* Is it disabled? */
            if (this.disabled) {
              el.addClass('ie6-input-disabled');
            }
          }
        });

        $('textarea, select').each(function() {
          /* Is it disabled? */
          if (this.disabled) {
            $(this).addClass('ie6-input-disabled');
          }
        });
      },
      // FORMALIZE.init.autofocus
      autofocus: function() {
        if (AUTOFOCUS_SUPPORTED || !$(':input[autofocus]').length) {
          return;
        }

        $(':input[autofocus]:visible:first').focus();
      },
      // FORMALIZE.init.placeholder
      placeholder: function() {
        if (PLACEHOLDER_SUPPORTED || !$(':input[placeholder]').length) {
          // Exit if placeholder is supported natively,
          // or if page does not have any placeholder.
          return;
        }

        FORMALIZE.misc.add_placeholder();

        $(':input[placeholder]').each(function() {
          var el = $(this);
          var text = el.attr('placeholder');

          el.focus(function() {
            if (el.val() === text) {
              el.val('').removeClass('placeholder-text');
            }
          }).blur(function() {
            FORMALIZE.misc.add_placeholder();
          });

          // Prevent <form> from accidentally
          // submitting the placeholder text.
          el.closest('form').submit(function() {
            if (el.val() === text) {
              el.val('').removeClass('placeholder-text');
            }
          }).bind('reset', function() {
            setTimeout(FORMALIZE.misc.add_placeholder, 50);
          });
        });
      }
    },
    // FORMALIZE.misc
    misc: {
      // FORMALIZE.misc.add_placeholder
      add_placeholder: function() {
        if (PLACEHOLDER_SUPPORTED || !$(':input[placeholder]').length) {
          // Exit if placeholder is supported natively,
          // or if page does not have any placeholder.
          return;
        }

        $(':input[placeholder]').each(function() {
          var el = $(this);
          var text = el.attr('placeholder');

          if (!el.val() || el.val() === text) {
            el.val(text).addClass('placeholder-text');
          }
        });
      }
    }
  };
// Alias jQuery, window, document.
})(jQuery, this, this.document);

// Automatically calls all functions in FORMALIZE.init
jQuery(document).ready(function() {
  FORMALIZE.go();
});;
/**
 * @todo
 */

Drupal.omega = Drupal.omega || {};

(function($) {
  /**
   * @todo
   */
  var current;
  var previous;
  
  /**
   * @todo
   */
  var setCurrentLayout = function (index) {
    index = parseInt(index);
    previous = current;
    current = Drupal.settings.omega.layouts.order.hasOwnProperty(index) ? Drupal.settings.omega.layouts.order[index] : 'mobile';

    if (previous != current) {      
      $('body').removeClass('responsive-layout-' + previous).addClass('responsive-layout-' + current);      
      $.event.trigger('responsivelayout', {from: previous, to: current});
    }
  };
  
  /**
   * @todo
   */
  Drupal.omega.getCurrentLayout = function () {
    return current;
  };
  
  /**
   * @todo
   */
  Drupal.omega.getPreviousLayout = function () {
    return previous;
  };
  
  /**
   * @todo
   */
  Drupal.omega.crappyBrowser = function () {
    return $.browser.msie && parseInt($.browser.version, 10) < 9;
  };
  
  /**
   * @todo
   */
  Drupal.omega.checkLayout = function (layout) {
    if (Drupal.settings.omega.layouts.queries.hasOwnProperty(layout) && Drupal.settings.omega.layouts.queries[layout]) {
      var output = Drupal.omega.checkQuery(Drupal.settings.omega.layouts.queries[layout]);
      
      if (!output && layout == Drupal.settings.omega.layouts.primary) {
        var dummy = $('<div id="omega-check-query"></div>').prependTo('body');       

        dummy.append('<style media="all">#omega-check-query { position: relative; z-index: -1; }</style>');
        dummy.append('<!--[if (lt IE 9)&(!IEMobile)]><style media="all">#omega-check-query { z-index: 100; }</style><![endif]-->');
        
        output = parseInt(dummy.css('z-index')) == 100;

        dummy.remove();
      }
      
      return output;
    }

    return false;
  };
  
  /**
   * @todo
   */
  Drupal.omega.checkQuery = function (query) {
    var dummy = $('<div id="omega-check-query"></div>').prependTo('body');       
    
    dummy.append('<style media="all">#omega-check-query { position: relative; z-index: -1; }</style>');
    dummy.append('<style media="' + query + '">#omega-check-query { z-index: 100; }</style>');

    var output = parseInt(dummy.css('z-index')) == 100;
    
    dummy.remove();

    return output;
  };
  
  /**
   * @todo
   */
  Drupal.behaviors.omegaMediaQueries = {
    attach: function (context) {
      $('body', context).once('omega-mediaqueries', function () {
        var primary = $.inArray(Drupal.settings.omega.layouts.primary, Drupal.settings.omega.layouts.order);
        var dummy = $('<div id="omega-media-query-dummy"></div>').prependTo('body');

        dummy.append('<style media="all">#omega-media-query-dummy { position: relative; z-index: -1; }</style>');
        dummy.append('<!--[if (lt IE 9)&(!IEMobile)]><style media="all">#omega-media-query-dummy { z-index: ' + primary + '; }</style><![endif]-->');

        for (var i in Drupal.settings.omega.layouts.order) {
          dummy.append('<style media="' + Drupal.settings.omega.layouts.queries[Drupal.settings.omega.layouts.order[i]] + '">#omega-media-query-dummy { z-index: ' + i + '; }</style>');
        }

        $(window).bind('resize.omegamediaqueries', function () {
          setCurrentLayout(dummy.css('z-index'));
        }).load(function () {
          $(this).trigger('resize.omegamediaqueries');
        });
      });
    }
  };
})(jQuery);;
if (window.location.hostname.indexOf('clubpenguin.com') > -1) {
    document.domain = 'clubpenguin.com';
}

if(typeof CP === 'undefined') {
    CP = {};
}

(function($){

    CP.home = function(options) {
        this.options = {
            //supported width thresholds in desc order
            widths : {}
        };
        $.extend(true, this.options, options);
        this.currentIndex = 0;
        this.numBillboards = 0;
        this.autoRotate = null;
        this.load();
    };

    CP.home.prototype.initBBNav = function() {
        var self = this;
        var string = '';
        var isFlash;
        var j=1;
        $('#billboards a').each(function(i, link) {
            isFlash = false;
            if ($(link).hasClass('flash-billboard')){
                isFlash = true;
            }
            if (!isFlash || (isFlash && CP.global.runningVars.hasFlash)) {
                self.numBillboards = (i+1);
            }
            string += '<div class="indicator '+(isFlash?'is-flash':'no-flash')+'" '+(i==0?'id="ind-scene"':'')+'><a href="javascript:void(0);" '+(i==0? 'class="active"' : '')+'>'+j+'</a></div>';
            if (!isFlash || CP.global.runningVars.hasFlash) {
                j++;
            }
        });
        if ($('#billboards a').length > 1) {
            $('#indicators').html(string);
            if ($('.indicator').first().hasClass('no-flash')) {
                $("#billboards").show();
            }
        } else {
            $('#billboard-arrows').hide();
            $("#billboard-welcome").show();
        }
    };

    CP.home.prototype.initPromo = function(){
        var self = this;

        //Get the geotargetted promo boxes from server
        var request = jQuery.ajax({
            type: "GET",
            url: window.location.protocol + "//" + window.location.host + "/" + CP.global.runningVars.langPath + "json/homepage/promos/" + CP.runningVars.countryCode,
            data: '',
            async: true,
            success: function(result) {
                $.each(result, function( index, promo ) {
                    // First things first, hide promo box if requested.
                    if (promo.homepage_item_toggle && promo.homepage_item_toggle[0].value == '1') {
                        return true; // Works like 'continue' to next iteration
                    }

                    // Get promo box data values.
                    var nid = promo.nid;
                    var type = promo.promo_box_type[0].value;
                    var onnow = promo.on_now_badge_color[0].value;
                    var color = promo.homepage_promo_color[0].value;
                    var text = promo.homepage_promo_text[0].value;
                    var title = promo.title;

                    // Checking for values that may be empty.
                    var bi_tracking_text = ((promo.homepage_promo_bi_tracking) ? promo.homepage_promo_bi_tracking[0].value : title);  // In case BI tracking field isn't set, use the node title
                    var thumb = promo.homepage_promo_image[0].uri;
                    var thumb_alt_text = ((promo.homepage_promo_image_alt) ? promo.homepage_promo_image_alt[0].value : bi_tracking_text);  // default to bi tracking text
                    var embed = ((promo.homepage_promo_video_embed) ? promo.homepage_promo_video_embed[0].value : false);
                    var legal = ((promo.homepage_promo_legal_text) ? promo.homepage_promo_legal_text[0].value : '');
                    var ga_title = bi_tracking_text.split(' ').join('_');
                    var link = ((promo.homepage_promo_cp_link) ? promo.homepage_promo_cp_link[0].url : '');
                    var link_text = ((promo.homepage_promo_cp_link) ? promo.homepage_promo_cp_link[0].title : '');
                    
                    // Set interstitial overrides.
                    try {
                        var interstial_overrides = '';
                        $.each(promo.homepage_promo_cp_link[0].attributes.data, function( index, value) {
                                interstial_overrides += 'data-'+index+'="'+value+'" ';
                        });
                    } catch(e) {
                        var interstial_overrides = '';
                    }

                    // Get extra classes.
                    var classes = '';
                    $.each(promo.personalize_promo, function( index, class_name) {
                        classes += class_name.value + ' ';
                    });

                    // Create PromoBox based on the type.
                    var promobox_output = '';
                    if (type == 'plain_image') {
                        var plain_image = ((promo.homepage_promo_custom_imag) ? promo.homepage_promo_custom_imag[0].uri : '');
                        promobox_output += '\
                            <div class="promo-block ' + classes + '">\
                                <a href="' + link + '" '+interstial_overrides+' data-ga="'+ga_title+'"><img src="' + plain_image + '" alt="' + thumb_alt_text + '" /></a>\
                            </div>';

                    } else if (type == 'video_image') {
                        var plain_image = ((promo.homepage_promo_custom_imag) ? promo.homepage_promo_custom_imag[0].uri : '');
                        promobox_output += '\
                            <div class="promo-block ' + classes + '">\
                                <a class="trigger-video" href="#" id="trigger-' + nid + '" data-ga="'+ga_title+'"><img src="' + plain_image + '" alt="' + thumb_alt_text + '" /></a>\
                            </div>';

                    } else if (type == 'cfc_counter') {
                        var coins_total = "0";
                        var currTime = new Date();
                        var m = (parseInt((currTime.getMinutes())/15) * 15) % 60;
                        var timestamp = String(currTime.getMonth()) + String(currTime.getDate()) + String(currTime.getHours()) + String(m)
                        var coins_request = jQuery.ajax({
                            type: "GET",
                            url: window.location.protocol + "//" + window.location.host + "/json/cfc_total/" + timestamp,
                            data: '',
                            async: false,
                            success: function(result) {
                                coins_total = result.coins_total;
                            }
                        });
                        var coins_total_display = "";
                        for(var i = 0; i < coins_total.length; i++) {
                            coins_total_span = "<span>" + coins_total[i] + "</span>";
                            coins_total_display +=  coins_total_span;
                        }
                        promobox_output += '<div class="promo-block cfc_counter ' + classes + '"><span class="cfc_total">' + coins_total_display + '</span></div>';

                    } else if (type == 'itunes') {
                        var output_link_class = (embed != '' ? 'trigger-video' : '');
                        promobox_output += '\
                            <div class="promo-block purple ' + classes + '">\
                                <div class="promo-' + type + '">\
                                    <a class="' + output_link_class + '" href="' + link + '" id="thumb-' + nid + '" '+interstial_overrides+' data-ga="'+ga_title+'">\
                                        <img src="' + thumb + '" alt="' + thumb_alt_text + '" />\
                                    </a>\
                                </div>\
                                <div class="song-info">\
                                    <div class="title">' + text + '</div>\
                                    <a class="download-from-itunes agegated-link" href="' + link + '" '+interstial_overrides+' data-ga="'+ga_title+'">' + Drupal.t('Download on iTunes') + '</a>\
                                    <div class="legalese">' + Drupal.t('Apple, the Apple logo, and iTunes are trademarks of Apple Inc. registered in the U.S. and other countries.') + '</div>\
                                </div>\
                            </div>';

                    } else if (type == 'audio' && promo.homepage_promo_audio) {
                        var audio_file_url = promo.homepage_promo_audio[0].uri;
                        var audio_file_name = audio_file_url.split('/').pop();
                        // TODO: At this point it's difficult to get a CDN version of the URL that works in all our environments
                        // to stream, this is due to the way that module 'dimg_json_node' works, see 'dimg_json_node()'
                        var audio_file_url_stream = audio_file_url.replace('https','http'); // quick fix for https vs http known issue
                        var audio_file_url_download = '/download/audio/' + audio_file_name;
                        var audio_file_title = ((promo.homepage_promo_audio_title) ? promo.homepage_promo_audio_title[0].value : '');
                        var audio_file_subtitle = ((promo.homepage_promo_audio_sub) ? promo.homepage_promo_audio_sub[0].value : '');
                        var audio_file_upload_type = (audio_file_name.toLowerCase().indexOf('.m4a') > -1 ? 'm4a' : 'mp3');  // Determine upload type (mp3, mp4) and set data-uploadtype.
                        var ga_link_download = ga_title + '_download';
                        var ga_link_play = ga_title + '_play';

                        // Prepare jPlayer output
                        var audio_player_output = '\
                            <div id="audio-player-' + nid + '" class="audio-player jp-jplayer"></div>\
                                <div id="jp_container_1" class="jp-audio audio-container">\
                                <div class="jp-type-single">\
                                    <div class="jp-gui jp-interface">\
                                        <div class="title">' + audio_file_title + '</div>\
                                        <div class="sub-title">' + audio_file_subtitle + '</div>\
                                        <ul class="jp-controls">\
                                            <li><a href="javascript:;" class="jp-play" tabindex="2" data-ga="'+ga_link_play+'"><span class="icon"></span><span class="label">' + Drupal.t('Play') + '</span></a></li>\
                                            <li><a href="javascript:;" class="jp-pause" tabindex="2"><span class="icon"></span><span class="label">' + Drupal.t('Pause') + '</span></a></li>\
                                            <li><a href="javascript:;" class="jp-stop" tabindex="2"><span class="icon"></span><span class="label">' + Drupal.t('Stop') + '</span></a></li>\
                                        </ul>\
                                        <div class="jp-progress">\
                                            <div class="jp-seek-bar">\
                                                <div class="jp-play-bar"><div class="jp-scrubber"></div></div>\
                                            </div>\
                                        </div>\
                                        <div class="jp-timers">\
                                            <span class="jp-current-time current"></span>\
                                            <span class="jp-duration total"></span>\
                                        </div>\
                                    </div>\
                                </div>\
                            </div>';

                        promobox_output = '\
                            <div class="promo-block promo-block-audio ' + color + ' ' + classes + '">\
                                <div class="promo-audio">\
                                    <img src="' + thumb + '" alt="' + thumb_alt_text + '" />\
                                </div>\
                                <div class="promo-info" data-url="' + audio_file_url_stream + '" data-uploadtype="' + audio_file_upload_type + '">\
                                    ' + audio_player_output + '\
                                    <div class="download-area">\
                                        <a href="' + audio_file_url_download + '" class="btn-download" '+interstial_overrides+' data-ga="'+ga_link_download+'"><span>' + Drupal.t('Download FREE Song') + '</span></a>\
                                    </div>\
                                </div>\
                            </div>';

                    } else {
                        var onnow_color_class = (type=='on_now' ? onnow : '');
                        var onnow_label = (type=='on_now' ? '<span class="on_now_label">' + Drupal.t('On Now!') + '</span>' : '');
                        var video_link_class = (type=='video' ? 'trigger-video' : '');
                        var link_output = (type=='video' ? '#' : link);

                        promobox_output += '\
                            <div class="promo-block ' + color + ' ' + classes + '">\
                                <div class="promo-' + type + ' ' + onnow_color_class + '">' + onnow_label + '\
                                    <a class="' + video_link_class + '" href="' + link_output + '" id="thumb-' + nid + '" '+interstial_overrides+' data-ga="'+ga_title+'">\
                                        <img src="' + thumb + '" alt="' + thumb_alt_text + '" />\
                                    </a>\
                                </div>\
                                <div class="promo-info">\
                                    <div class="title">' + text + '</div>\
                                    <a class="cta ' + video_link_class + '" href="' + link_output + '" id="trigger-' + nid + '" '+interstial_overrides+' data-ga="'+ga_title+'">' + link_text + '</a>\
                                    <div class="legal">' + legal + '</div>\
                                </div>\
                            </div>';
                    }

                    if (embed) {
                        promobox_output += '<div style="display:none" class="video-embed-code" id="embed-' + nid + '"><!--' + embed + '--></div>';
                    }

                    // Add the promo box to the output
                    $("#promo-blocks").append(promobox_output);

                    // For audio, we need the HTML output first before initializing
                    if (type == 'audio') { self.setupAudioPlayer(); }
                });
                
                var maximum = $('.promo-block').length-2;
                var hidden = 0;
                $('.promo-block').each(function(i,block){
                    if(!$(block).hasClass(self.options.UTYPE) && hidden<maximum){
                        $(block).hide();
                        hidden++;
                    }
                });

                // Initialize Promo Interstitials
                try {
                    window.agegate.initLinks('#promo-blocks a');
                } catch(e){}

                // Now that the content is all ready, show the container.
                $("#promo-blocks").slideDown();
            }
        });
    };

    CP.home.prototype.setupAudioPlayer = function() {
        var audio_promo_block = $('.promo-block-audio .promo-info');
        var audio_container_id = "#" + audio_promo_block.find('.audio-container').attr('id');
        var audio_url = audio_promo_block.data('url');
        var current_time = audio_promo_block.find('.jp-timers .current');
        var total_time = audio_promo_block.find('.jp-timers .total');
        var upload_type = audio_promo_block.data('uploadtype');
        var jplayer_setmedia = { m4a:audio_url };
        if (upload_type=='mp3') {
            jplayer_setmedia = { mp3:audio_url };
        }

        $.jPlayer.timeFormat.padMin = false;
        audio_promo_block.find('.audio-player').jPlayer({
            ready: function (event) {
                $(this).jPlayer("setMedia", jplayer_setmedia);
            },
            swfPath: "/sites/all/libraries/jplayer",
            supplied: upload_type,
            wmode: "window",
            solution: "flash,html",
            keyEnabled: true,
            ended: function(event) {
                current_time.hide();
                total_time.show();
            },
            play: function(event) {
                current_time.show();
                total_time.hide();
            },
            pause: function(event) {}
        });
    }

    CP.home.prototype.setupAutoRotate = function() {
        var is_safari = navigator.userAgent.toLowerCase().indexOf('safari/') > -1;
        var self = this;
        if (this.numBillboards > 1) {
            this.autoRotate = setInterval(function(){
                if ($("#indicators a").length) {
                    self.currentIndex = ((self.currentIndex+1) % self.numBillboards);
                    if (is_safari) {
                        //manual trigger - Safari/win
                        var evObj = document.createEvent('MouseEvents');
                        evObj.initMouseEvent('click', true, true, window);
                        $("#indicators a").get(self.currentIndex).dispatchEvent(evObj);
                    } else {
                        $("#indicators a").get(self.currentIndex).click();
                    }
                    self.setupAutoRotate();
                }
            }, 10000);
        }
    };

    CP.home.prototype.initListeners = function() {
        var self = this;

        // Modal stuff.
        $(".trigger-video").live('click', function() {
            var embedContainerId = this.id.replace('trigger-', 'embed-');
            embedContainerId = embedContainerId.replace('thumb-', 'embed-');
            temp = $('#'+embedContainerId).html();
            $('#modal-content').html(temp.replace('<!--','').replace('-->',''));
            CP.runningVars.modal.open();
            return false;
        });

         // Billboard indicators numbers.
        $('.indicator').live('click', function(e) {
            clearInterval(self.autoRotate);

            var billboardindex;
            if ($(this).hasClass('is-flash')){
                $("#billboards").hide();
                billboardindex = $(".indicator.is-flash").index(this);
            } else {
                $("#billboards").show();
                billboardindex = $(".indicator.no-flash").index(this);
                $("#billboards a").hide();
                $($("#billboards a.no-flash").get(billboardindex)).show();
            }
            $("#indicators a").removeClass("active");
            $(this).find('a').addClass("active");
        });


        // Billboard arrows.
        $('#arrow-right, #arrow-left')
        .mouseover(function(e){
            $(this).addClass("active");
        })
        .mouseout(function(e){
            $(this).removeClass("active");
        });

        var is_safari = navigator.userAgent.toLowerCase().indexOf('safari/') > -1;

        $('#arrow-left').live('click', function(e){
            self.currentIndex = (self.currentIndex-1);
            if (self.currentIndex < 0) {
                self.currentIndex =(self.numBillboards-1);
            }
            try{
                if (is_safari) {
                    //manual trigger - Safari/win
                    var evObj = document.createEvent('MouseEvents');
                    evObj.initMouseEvent('click', true, true, window);
                    $("#indicators a").get(self.currentIndex).dispatchEvent(evObj);
                } else {
                    $("#indicators a").get(self.currentIndex).click();
                }
            } catch(e){}
        });
        $('#arrow-right').live('click', function(e){
            self.currentIndex = ((self.currentIndex+1) % self.numBillboards);
            try {
                if (is_safari) {
                    //manual trigger - Safari/win
                    var evObj = document.createEvent('MouseEvents');
                    evObj.initMouseEvent('click', true, true, window);
                    $("#indicators a").get(self.currentIndex).dispatchEvent(evObj);
                } else {
                    $("#indicators a").get(self.currentIndex).click();
                }
            } catch(e){}
        });
    };

    CP.home.prototype.initBB = function(){
        var self = this;
        
        //Determine billboard deeplink
        var deeplink = window.location.hash.substr(2);
        if (deeplink.length <= 0) {
            deeplink = 'none'; //no deeplink
        }
        if( (navigator.userAgent.match(/iPhone/i)) || (navigator.userAgent.match(/iPod/i)) || (navigator.userAgent.match(/iPad/i)) ) {
            deeplink = 'on_mobile';
        }

        //Get the geotargetted billboards from server
        var request = jQuery.ajax({
            type: "GET",
            url: window.location.protocol + "//" + window.location.host + "/" + CP.global.runningVars.langPath + "json/homepage/billboards/" + CP.runningVars.countryCode + "/" + deeplink,
            data: '',
            async: false,
            success: function(result) {
                $.each(result, function( index, billboard ) {
                    // First things first, hide billboard if requested.
                    if (billboard.homepage_item_toggle && billboard.homepage_item_toggle[0].value == '1') {
                        return true; // Works like 'continue' to next iteration
                    }

                    var html = "";
                    var classes = "no-flash ";
                    $.each(billboard.personalize_billboard, function( index, class_name) {
                        classes += class_name.value + " ";
                    });
                    var bb_link = ((billboard.homepage_billbard_link[0].url) ? billboard.homepage_billbard_link[0].url : '');
                    var bb_ga = billboard.title.split(' ').join('_');
                    
                    // Set interstitial overrides.
                    try {
                        var interstial_overrides = '';
                        $.each(billboard.homepage_billbard_link[0].attributes.data, function( index, value) {
                            if (value.length > 0) {
                                interstial_overrides += 'data-'+index+'="'+value+'" ';
                            }
                        });
                    } catch(e) {
                        var interstial_overrides = '';
                    }

                    html = '<a class="'+classes+'" href="'+bb_link+'" '+interstial_overrides+' data-ga="'+bb_ga+'">';
                    html += '<img alt="'+billboard.title+'" src="'+billboard.homepage_billboard_file_up[0].uri+'">';
                    html += '</a>';
                    $("#billboard-welcome").before(html);
                    $("#billboard-welcome").hide();
                });

                var maximum = $('#billboards a').length;
                var hidden = 0;
                $('#billboards a').each(function(i,link){
                    if (!$(link).hasClass(self.options.UTYPE) && hidden<maximum){
                        $(link).remove();
                        hidden++;
                    }
                    if (i>0) {
                        $(link).hide();
                    }
                });

                // Initialize the nav arrows and indicators
                self.initBBNav();

                // Initialize BB Interstitials
                try {
                    window.agegate.initLinks('#billboards a');
                } catch(e){}
            }
        });
    };

    CP.home.prototype.load = function() {
        //utype
        this.options.UTYPE = getCookie('cpvisitor') || "new";

        var self = this;
        this.initLanguage();
        this.initModal();
        this.initOverlay();
        this.initCountry();

        this.initBB();
        this.initPromo();
        this.setupAutoRotate();
        this.initListeners();

        if (!CP.global.runningVars.hasFlash) {
            $(".indicator.is-flash").remove();
            $("#billboards a.is-flash").remove();
            $("#billboards").show();
            try{
                $($("#billboards a.no-flash").get(0)).show();
            } catch(e){}
        }
    };

    CP.home.prototype.initLanguage = function() {
        var currentURL = window.location.pathname;
        var pathArray = currentURL.split("/");
        var langPath = pathArray[1];
        if ((langPath != "es") && (langPath != "fr") && (langPath != "pt") && (langPath != "de") && (langPath != "ru")) { langPath="" }
        CP.global.runningVars.langPath = (langPath == "" ? langPath : langPath + "/");
    }

    CP.home.prototype.initModal = function() {
        $("#modal-overlay").remove();
        $("#modal-loading").remove();
        $("#modal-window").remove();

        CP.runningVars.modal = new CP.utils.Modal({
            showClose: true,
            contentCloseDelegate: '.modal-close',
            onOpenComplete: function() {},
            onCloseComplete: function() {},
            onCloseStart: function() {},
            onOpenStart: function() {}
        });
    };

    CP.home.prototype.initCountry = function() {
        CP.runningVars.countryCode = "US";
    };

    CP.home.prototype.initOverlay = function() {
        //Check to see if the url Parameter is set
        var results = new RegExp('[\\?&]overlay=([^&#]*)').exec(window.location.href);
        var urlOverlayUrl = false;
        if (results) {
            urlOverlayUrl =  decodeURIComponent(results[1]);
            var regEx = new RegExp("^https:\/\/(stage.)?secured.clubpenguin.com\/(pt\/|es\/|de\/|fr\/|ru\/)?(penguin|membership)\/activate(\/([a-zA-Z0-9]+)*\/?([a-zA-Z0-9]+)*)?", "i");

            // determine match for CP link
            var overlayMatch = urlOverlayUrl.match(regEx);
            if (overlayMatch) {
                // get env
                var env = overlayMatch[1];
                if (typeof overlayMatch[1] == 'undefined') { env = ''; }
                // get langPath
                var langPath = overlayMatch[2];
                if (typeof overlayMatch[2] == 'undefined') { langPath = ''; }
                // additional paramaters
                var additionaParams = '';
                if (typeof overlayMatch[5] != 'undefined' && typeof overlayMatch[6] != 'undefined') { additionaParams += overlayMatch[5] + '/' + overlayMatch[6]; }
                // reconstruct URL
                var redirectUrl = "https://" + env + "secured.clubpenguin.com/" + langPath + overlayMatch[3] + '/activate/' + additionaParams;
                window.location.href = redirectUrl;
            }
        }
    };

})(window.jQuery);

window.jQuery(document).ready(function(){
    window.home = new CP.home();
});

/**
 * function to launch agegate/interstitial from within flash
 */
function itunesInterstitial() {
    $("#itunesLink").mousedown();
}
;
