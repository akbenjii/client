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
