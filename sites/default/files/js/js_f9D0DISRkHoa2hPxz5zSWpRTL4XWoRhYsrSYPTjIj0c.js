
/**
 * @todo
 */

(function($) {

  /**
   * @todo
   */
  Drupal.behaviors.colorbox_close_prehide = {
    attach: function (context, settings) {

      $('.cboxElement').colorbox({onOpen: function() {
        $('#cboxClose, #cboxNext, #cboxPrevious').hide();
      }});
    }
  };

  /**
   * @todo
   */
  Drupal.behaviors.colorbox_close_hide = {
    attach: function (context, settings) {

      $('.cboxElement').colorbox({onLoad: function() {
        $('#cboxClose, #cboxNext, #cboxPrevious').hide(3);
      }});

    }
  };

  /**
   * @todo
   */
  Drupal.behaviors.coorbox_close_show = {
    attach: function (context, settings) {

      $('.cboxElement').colorbox({onComplete: function() {
        setTimeout(function(){
          $('#cboxClose, #cboxNext, #cboxPrevious').show();
        },0);

      }});

    }
  };


})(jQuery);;
(function($){
  Drupal.behaviors.ajaxfix = (function(){
    return {
      attach:function(context, settings){
        $.ajaxSetup({
          beforeSend: function(jqXHR, settings) {
            settings.error = function(jqXHR, textStatus, errorThrown) {
            //do nothing... end user doesn't need to see debugging info, uncomment console log code to debug
            //{console.log('ajax error: ' + textStatus);};
            };
          }
        });
      }
    }
  })();
})(jQuery);;
