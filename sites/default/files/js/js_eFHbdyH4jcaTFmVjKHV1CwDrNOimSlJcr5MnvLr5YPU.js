/**
 * JavaScript behaviors for the front-end display of metaplace clients.
 */
try {
  document.domain = 'clubpenguin.com';
} catch (e) {}

(function($) {

  Drupal.behaviors.plans = Drupal.behaviors.plans || {};

  Drupal.behaviors.plans.attach = function(context) {

    Drupal.plans.init(context);
  };

  Drupal.plans = Drupal.plans || {};

  Drupal.plans.init = function(context) {
    Drupal.plans.initCurrencySelector();
  };

  Drupal.plans.initCurrencySelector = function() {
    var self = this;
    $('#currency-drop-down').click(function(e) {
      if (!$(this).hasClass('hover')) {
        $(this).addClass('hover');
        $('.currency-drop-down-prompt span').show();
        $('.currency-drop-down-value.active').css({
          'display': 'block',
          'position': 'relative',
          'top': 'auto'
        });
        if (typeof e.target.href !== 'undefined') {
          return !$(e.target).parent().hasClass('active');
        }
        return false;
      } else {
        $(this).removeClass('hover');
        $('.currency-drop-down-prompt span').hide();
        $('.currency-drop-down-value.active').css({
          'display': 'block',
          'position': 'absolute',
          'top': '0'
        });
      }
    });

    $('#currency-drop-down.hover').live('mouseleave', function() {
      $(this).removeClass('hover');
      $('.currency-drop-down-prompt span').hide();
      $('.currency-drop-down-value.active').css({
        'display': 'block',
        'position': 'absolute',
        'top': '0'
      });
    });

    $('.currency-drop-down-prompt span').hide();
    $('.currency-drop-down-value.active').css({
      'display': 'block',
      'position': 'absolute',
      'top': '0'
    });

  };

  Drupal.plans.cardActivation = function() {
    if (location.search.indexOf('card=activate') != -1 && $('#mc-activate-now').length) {
      $('#mc-activate-now').click();
    }
  };
})(jQuery);

window.jQuery(document).ready(function($) {
  Drupal.plans.cardActivation();
});
;
