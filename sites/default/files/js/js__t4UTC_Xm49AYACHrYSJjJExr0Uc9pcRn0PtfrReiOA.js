/**
 * Sets a cookie in the user's browser
 * 
 * @param name of the cookie
 * @param value of the cookie
 * @param expiry_days from now, null for a session cookie
 */
function setCookie(name, value, expiry_days)
{
	// checking domains
	var domain_name = 'clubpenguin.com';
	var hostname = window.location.hostname;
	if (hostname.search(/cp.local/) > -1) {
		domain_name = hostname;
	}

	expiry_str = '';
	path_str = '; path=/';
	domain_str = '; domain='+domain_name;
	if(expiry_days) {
		var d = new Date();
		d.setDate(d.getDate() + expiry_days);
		expiry_str = ';expires=' + d.toGMTString();
	}
	
	document.cookie = name + '=' + escape(value) + expiry_str + path_str + domain_str;
}


/**
 * Gets the value of the cookie from the user's browser
 * 
 * @param name of the cookie
 * @return value of the cookie, null if the cookie isn't found
 */
function getCookie(name)
{
	var s = document.cookie.indexOf(name + "=");
	if(s == -1) {
		return null;
	}
	s += name.length + 1;
	var e = document.cookie.indexOf(";", s);
	if(e == -1) {
		e = document.cookie.length;
	}
	return unescape(document.cookie.substring(s, e));
}

/* 
The following checks for and records if a visitor is new or is a return visitor -- for A/B testing T&T
*/
if (!getCookie ('cpvisitor')) { 
	setCookie('cpvisitorsession', 'true', ''); 
	setCookie ('cpvisitor', 'new', 2400); 
} else { 
	if (!getCookie ('cpvisitorsession')) { 
		if ((getCookie ('cpvisitor')) == 'new') {
			setCookie ('cpvisitor', 'new', -1); 
			setCookie ('cpvisitor', 'return', 2400); 
		}			
	}
}


/* 
The following checks for and records the OAST source code present in a URL clicked on from a creative asset on an external site
*/

var qsParm = new Array();
function qs() {
var query = window.location.search.substring(1);
var parms = query.split('&');
	for (var i=0; i<parms.length; i++) {
	var pos = parms[i].indexOf('=');
		if (pos > 0) {
		var key = parms[i].substring(0,pos);
		var val = parms[i].substring(pos+1);
		qsParm[key] = val;
		}
	}
} 

qsParm['oast'] = null;
qs();

if (qsParm['oast'] != null) {
	if (getCookie ('oast')) { 
		setCookie ('oast', '', -1);
		setCookie ('oast', qsParm['oast'], 2400);
	} else {
		setCookie ('oast', qsParm['oast'], 2400);
	}
}


// -- BrowserID (cpBROWSERID)
browserid = getCookie('cpBROWSERID');
if (browserid == '-1' || browserid == "null" || browserid == null) {
	//Generate a GUID
	browserid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) { var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8); return v.toString(16); });
	try {
		setCookie('cpBROWSERID', browserid, 365);
	} catch (e){}
}


if(typeof jsAPI === 'undefined') {
	jsAPI = {};
}

jsAPI.showHTMLElements = function() {
	$('#membershipOptionsPrimary, #membershipOptions_real, #membershipOptions_other, #membershipOptionsSecondary, #membershipOptions_ca').css({"visibility":"visible"});
} 


jsAPI.mboxBackground = function() {
	try{
		$('#content').css({
			'background' : '#417DC5'
		});
		
		var IE7 =  ($.browser.msie  && parseInt($.browser.version) == 7);
		if (IE7){
			if ($('#membershipOptionsPrimary').length > 0){
				$('#membershipOptionsPrimary').css({
					'background' : 'url(/images/pricing_bg_ca_ie7.png) 0 0 no-repeat',
					'height':'135px',
					'margin': '8px 0 0 -14px'
				});	
			}
		} else{
			if ($('#membershipOptionsPrimary').length > 0){
				$('#membershipOptionsPrimary').css({
					'background' : 'url(/images/pricing_bg_ca_b.png) 0 0 no-repeat',
					'height':'135px',
					'margin': '8px 0 0 -14px'
				});	
			}
		}
		
		if ($('#membershipOptions_other').length > 0){
			$('#membershipOptions_other').css({
				'background' : 'url(/images/pricing_bg_ca_b.png) 0 0 no-repeat'
			});	
		}
		
		if ($('#membershipOptions_ca').length > 0){
			$('#membershipOptions_ca').css({
				'background' : 'url(/images/pricing_bg_ca_a.png) 0 0 no-repeat',
				'height':'154px',
				'margin-left': '-15px'
			});
		}
		
		if ($('#membershipOptions_real').length > 0){
			$('#membershipOptions_real').css({
				'background' : 'url(/images/pricing_bg_ca_b.png) 0 0 no-repeat',
				'height':'135px',
				'margin-left': '-15px'
			});	
		}		

		
		if ($('#content .padd').length > 2) {
			//euro style template with no padding
			$('#membershipOptions_other').css({
				'height':'135px',
				'margin': '8px 0 20px 15px'
			});	
		} else {
			//ar style template with padding already in place
			if (!$($('#membershipOptions_other').parent()).hasClass('padd')){
				$('#membershipOptions_other').css({
					'height':'135px',
					'margin': '8px 0 20px 15px'
				});	
			} else {
				$('#membershipOptions_other').css({
					'height':'135px',
					'margin': '8px 0 20px -15px'
				});	
			}
		}
	
		if ($('#content .padd').length > 1) {
			$($('#content .padd')[0]).css({
				'background' : '#fefde1',
				'border-bottom' : '3px solid #013A69'
			});
			var lastPad = $($('#content .padd')[($('#content .padd').length-1)]);
			if (lastPad.find('object').length == 0) {
				//last pad container doesn't contains flash
				lastPad.css({
					'background' : '#fff',
					'border-top' : '3px solid #013A69',
					'margin-top' : '25px'
				});
			} else {
				//last pad container contains both flash and purchase image
				if (lastPad.find('#membershipOptionsSecondary').length > 0) {
					$('#membershipOptionsSecondary').wrap('<div class="temporary-div" />');
					$('#content .padd').css({
						'padding-bottom':0
					});
				}
				
			}
		}

	}catch(e){}
}

	;
if(typeof CP === 'undefined') {
	CP = {};
}

if(!CP.utils) {
	CP.utils = {};
}

CP.utils.Modal = function(options) {
	// options that can overwritten
	this.options = {
		overlayOpacity: 0.8,
		overlayClickClose: true,
		showClose: true,
		contentCloseDelegate: null,
		centerOnResize: true,
		transitionDuration: 250,
		onOpenComplete: function(){},
		onCloseComplete: function(){},
		onOpenStart: function(){},
		onCloseStart: function(){}
	};
	jQuery.extend(true, this.options, options);

	// states
	this.isOpen = false;
	this.isLoading = false;

	//Due to conflicts with Panels only run this on the homepage at this time.  -- Added to backlog for permanent fix.
	if (location.pathname.match(/(\/|\/fr|\/es|\/de|\/pt)(\/index.php)?/)) {
	  this.inject();
	  this.attach();
	}
};
CP.utils.Modal.prototype.inject = function(){
	 //create and embed required elements
	 this.overlay = jQuery('<div id="modal-overlay"></div>').appendTo('body');
	 this.loading = jQuery('<div id="modal-loading"></div>').appendTo('body');
	 this.modal = jQuery('<div id="modal-window"></div>').appendTo('body');
	 // optional - close button
	 if(this.options.showClose){
	  	this.closeButton = jQuery('<a id="modal-close" href="#">close</a>').appendTo(this.modal);
	 }
	 this.modalContent = jQuery('<div id="modal-content"></div>').appendTo(this.modal);
	 // set overlay opacity to value in options
	 this.overlay.css('opacity', this.options.overlayOpacity);
	 this.body = jQuery('body');
};
CP.utils.Modal.prototype.attach = function(){
	var self = this;
	// overlay and loading resize handler
	jQuery(window).resize(function(){
		self.positionOverlay();
		self.centerElement(self.loading);
	});

	// optional - content triggered close event
	if(this.options.contentCloseDelegate != null){
		this.modalContent.delegate(this.options.contentCloseDelegate, 'click', function(e){
			e.preventDefault();
			self.close();
		});
	}
	// optional - hide on overlay click
	this.overlay.click(function(e){
		e.stopPropagation();

		if(self.options.overlayClickClose){
			self.close();
		}
	});

	// optional - close button
	if(this.options.showClose){
		// hide on close button click
		this.closeButton.click(function(e){
			e.preventDefault();
			self.close();
		});
	}
	// optional - window resize handler
	if(this.options.centerOnResize){
		jQuery(window).resize(function(){
			self.centerElement(self.modal);
		});
	}
};
CP.utils.Modal.prototype.centerElement = function(element){
	// usefull dimensions
	var elementWidth = element.width();

	var elementHeight = element.height();
	var windowWidth = jQuery(window).width();
	var windowHeight = jQuery(window).height();
	var scrollTop = jQuery(window).scrollTop();
	// calculate center
	var left = (windowWidth / 2) - (elementWidth / 2);
	var top = scrollTop + ((windowHeight / 2) - (elementHeight / 2));
	// bounding
	if(top < 0 ) top = 0;
	if(left < 0) left = 0;
	// set position
	element.css({
		top: top,
		left: left
	});
}
CP.utils.Modal.prototype.positionOverlay = function(){
	// ie6 alternate overlay size other browsers use css
	if(jQuery.browser.msie && jQuery.browser.version === '6.0'){
		this.overlay.css('height', jQuery(document).height());
	}
};
CP.utils.Modal.prototype.positionModal = function(){
	this.centerElement(this.modal);
};
CP.utils.Modal.prototype.showLoading = function(){
	if(this.isOpen){
		// already open just show loading indicator
		this.modal.fadeOut(this.options.transitionDuration);
		this.loading.fadeIn(this.options.transitionDuration);
	}else{
		// not open yet
		this.overlay.fadeIn(this.options.transitionDuration);
		this.positionOverlay();
		this.loading.fadeIn(this.options.transitionDuration);
		this.centerElement(this.loading);
	}
	this.isLoading = true;
};
CP.utils.Modal.prototype.open = function(modalContent, openCallback, closeCallback){
	var self = this;
	if(!this.isOpen){
		if(this.isLoading){
			// modal is already in loading state just open content
			this.loading.hide();
			this.modalContent.append(modalContent);
			this.modal.fadeIn(this.options.transitionDuration, function() {
				// callbacks
				self.options.onOpenComplete();

				if(closeCallback) self.activeCloseCallback = closeCallback;
			});
			this.options.onOpenStart();
			if(openCallback) openCallback();
			this.centerElement(this.modal);
			// update state
			this.isOpen = true;
			this.isLoading = false;
			if (self.closeButton) {
				self.closeButton.show();
			}
			this.body.addClass('modal-active');
		} else{
			// fresh modal nothing is open yet
			this.overlay.fadeIn(self.options.transitionDuration, function(){
				self.modalContent.append(modalContent);
				self.modal.fadeIn(self.options.transitionDuration, function() {
					// callbacks
					self.options.onOpenComplete();

					if(closeCallback) self.activeCloseCallback = closeCallback;
				});
				self.options.onOpenStart();
				if (self.closeButton) {
					self.closeButton.show();
				}
				if(openCallback) openCallback();
				self.centerElement(self.modal);
				// update state
				self.isOpen = true;
				self.isLoading = false;
				self.body.addClass('modal-active');
			});
			this.positionOverlay();
		}
	}else{
		// window already open just refresh content
		this.modal.css({visibility: 'hidden'}); ////to support interapp linking, instead of //this.modal.hide();
		this.modalContent.empty();
		this.modalContent.append(modalContent);
		this.options.onOpenStart();
		this.modal.css({visibility: 'visible'}); //to support interapp linking, instead of //this.modal.show();
		this.centerElement(this.modal);
		// update state
		this.isOpen = true;
		this.isLoading = false;
		this.body.addClass('modal-active');
		// callbacks
		this.options.onOpenComplete();
		if(openCallback) openCallback();
		if(closeCallback) this.activeCloseCallback = closeCallback;
	}
};
CP.utils.Modal.prototype.close = function(callback){
	if(this.isOpen){
		var self = this;

		//If you are in IE, find all embedded objects and replace them with divs. fadeout doesn't play too nice them
		if(jQuery.browser.msie) {
			var embeddedObjects = self.modalContent.find('object'); //Pro, Swfobject 2.x only uses object element!

			embeddedObjects.each(function(index, embObj) {
				embeddedObjects.replaceWith('<div id="' + embeddedObjects.attr('id') + '" />');
			});
		}

		// callback
		this.options.onCloseStart();

		// hide everything
		this.modal.fadeOut(this.options.transitionDuration, function(){
			self.modalContent.empty();
			self.loading.hide();
			self.overlay.hide();
			if (self.closeButton) {
				self.closeButton.hide();
			}

			// update state
			self.isLoading = false;
			self.isOpen = false;

			// remove class to body to signify closed modal
			self.body.removeClass('modal-active');

			// callbacks
			self.options.onCloseComplete();
			if(callback) callback();
			if(self.activeCloseCallback) {
				self.activeCloseCallback();
				self.activeCloseCallback = null;
			}
		});
	}
};


/**
 * Common Mobile Interstitial
 * @see cp_sitewide_settings.module "cp_sitewide_settings_init()"
 */
(function($) {
  Drupal.behaviors.cp_mobile_interstitial = {
    attach: function (context,settings) {
    	var add_mobile_popup = false;
    	var mobile_slug = '';
      // Watching Play buttons for iOS devices
      if( (navigator.userAgent.match(/iP(hone|od|ad)/i)) ) {
      	add_mobile_popup = true;
      	mobile_slug = 'ios';
      }
      // Watching Play buttons for Android devices
      else if( (navigator.userAgent.match(/android/i)) ) {
      	add_mobile_popup = true;
      	mobile_slug = 'android';
      }
      // Inject mobile interstitial details
      if ( add_mobile_popup ) {
        var popup = settings.cp_mobile_interstitial;
        $('a.play-now, a.play-now-v2, a.cp-mobile-pop')
          .addClass('agegated-link')
          .attr('href', popup[ mobile_slug ].action_link )
          .attr('data-interstitial_ok', popup[ mobile_slug ].buttons.action )
          .attr('data-interstitial_cancel', popup[ mobile_slug ].buttons.cancel )
          .attr('data-interstitial_text', popup[ mobile_slug ].content )
          .attr('data-interstitial_title', popup[ mobile_slug ].title )
          .attr('data-interstitial_class', popup[ mobile_slug ].class )
      }
    }
  };

})(jQuery);
;
if (typeof CP === 'undefined') {
    CP = {};
}

if (typeof CP.global === 'undefined') {
    CP.global = {};
}

CP.global.defaults = {
    countryCode: 'US'
}

CP.global.runningVars = {
    rssURL: "http://www.clubpenguin.com/blog/rss.xml",
    hasFlash: true,
    blogInterval: null,
    blogDelay: 4000,
    currentBlog: 0,
    modal: null
};

(function($) {

    CP.common = function(options) {
        this.options = {};
        $.extend(true, this.options, options);
        this.load();
    };

    CP.common.prototype.initListeners = function() {

        //language select dropdown
        $('#langdropdown a.top-level').click(function(e) {
            e.preventDefault();
            $(this).addClass('active');
            $('#languages').css('display', 'block');
        });
        $('#langdropdown').mouseleave(function() {
            $('a.top-level').removeClass('active');
            $('#languages').hide();
        });


        //footer language select
        $('#language-select a.top-level').click(function(e) {
            e.preventDefault();
            $(this).addClass('active');
            $('#bottom-languages').css('display', 'block');
        });
        $('#language-select').mouseleave(function() {
            $('a.top-level').removeClass('active');
            $('#bottom-languages').hide();
        });

    };

    CP.common.prototype.load = function() {
        if (typeof swfobject == "undefined") {
            CP.global.runningVars.hasFlash = false;
        } else {
            CP.global.runningVars.hasFlash = swfobject.hasFlashPlayerVersion("9");
        }
        this.initListeners();
        if ($('.blogscroll').length > 0) {
            this.autoRotateBlogTitles();
        }
        //this.styleMobileFoooter();
        if (window.location.href.indexOf('/de/') > 0 && $('#bucket-fire').length > 0 && $('#bucket-puffle').length > 0) {
            $('#bucket-fire').show();
            $('#bucket-puffle').hide();
        } else {
            $('#bucket-fire').hide();
            $('#bucket-puffle').show();
        }
        //this.initModal();
    };

    CP.common.prototype.initModal = function() {
        CP.global.runningVars.modal = new CP.utils.Modal({
            showClose: false,
            contentCloseDelegate: '.modal-close',
            onOpenComplete: function() {},
            onCloseComplete: function() {},
            onCloseStart: function() {},
            onOpenStart: function() {}
        });
    };

    CP.common.prototype.showModal = function(htmlFile, wrapId, openCallback, closeCallback) {
        $('#modal-content').load(htmlFile + ' #' + wrapId, function() {
            //open modal
            if (!closeCallback) closeCallback = null;
            if (!openCallback) openCallback = null;
            CP.global.runningVars.modal.open('', openCallback, closeCallback);
        });
    };

    CP.common.prototype.closeModal = function() {
        CP.global.runningVars.modal.close();
    }

    CP.common.prototype.showBlogTitle = function(index) {
        var self = this;
        if ($('#nav ul.blogscroll').length > 0) {
            $('#nav ul.blogscroll li.active').fadeOut(200, function() {
                $(this).removeClass('active');
                $($('#nav ul.blogscroll li')[index]).fadeIn(200, function() {
                    $(this).addClass('active');
                });
            });
        }
    };

    CP.common.prototype.autoRotateBlogTitles = function() {
        var self = this;
        CP.global.runningVars.blogInterval = setInterval(function() {
            self.showBlogTitle(CP.global.runningVars.currentBlog);
            CP.global.runningVars.currentBlog = ((CP.global.runningVars.currentBlog + 1) % 3);
        }, CP.global.runningVars.blogDelay);
    };

    CP.common.prototype.styleMobileFoooter = function() {
        /* legacy footer */
        $("#submit").hide();

        $("#page-changer select").change(function() {
            window.location = $("#page-changer select option:selected").val();
        });

        $.fn.extend({
            customStyle: function(options) {
                return this.each(function() {
                    var currentSelected = $("option:first");
                    $(this).after('<span class="customStyleSelectBox"><span class="customStyleSelectBoxInner">' + currentSelected.text() + '</span></span>').css({
                        position: 'absolute',
                        opacity: 0,
                        fontSize: $(this).next().css('font-size')
                    });
                    var selectBoxSpan = $(this).next();
                    var selectBoxWidth = parseInt($(this).width()) - 40;
                    var selectBoxSpanInner = selectBoxSpan.find(':first-child');
                    // //selectBoxSpan.css({display:'inline-block'});
                    // selectBoxSpanInner.css({width:selectBoxWidth, display:'inline-block'});
                    // var selectBoxHeight = parseInt(selectBoxSpan.height()) + parseInt(selectBoxSpan.css('padding-top')) + parseInt(selectBoxSpan.css('padding-bottom'));
                    //$(this).height(selectBoxHeight).change(function(){
                    //  selectBoxSpanInner.text($(this).val()).parent().addClass('changed');
                    //});
                });
            }
        });

        $(function() {
            $('select.styled').customStyle();
        });
    }

     /**
      * @function {static public} getCountryCode
      * This functino will get the country code by searching the following in order :
      *   <ul>
      *     <li>URL Param</li>
      *     <li>Cookie</li>
      *     <li>Default (currently US)/li>
      *   </ul>
      *   
      * @return {String} A two character string representing the Country Code. Example: US or RU
      */
    CP.common.getCountryCode = function() {

        //product and parent section
        //snippet to parse url parameter
        $.myUrlParam = function(name) {
            var results = new RegExp('[\\?&]' + name + '=([^&#]*)').exec(window.location.href);
            return results ? results[1] : null;
        };

        var countryCode = $.myUrlParam('country') || getCookie('CP_OVERRIDE_LOCATION');
        if (!countryCode || countryCode == '--') {
            countryCode = CP.global.defaults.countryCode;
        }
        return countryCode;
    };


    Drupal.behaviors.append_parameter = {
        attach: function(context, settings) {

            // Checks for nochrome
            if (window.location.href.indexOf('nochrome=1') >= 0) {
                // hide some divs that shouldn't be there on mobile
                $('#printButton,#downloadButton,#nav').hide();

                if (!getCookie('nochrome')) {
                    setCookie('nochrome', '1');
                }

                // New rule - disallow any link in blog content that is external
                $('.page-blog .views-field-body a, .node-type-cp-blog .views-field-body a').each(function() {
                    var href = this.href;
                    if (href.indexOf('clubpenguin.com') == -1 && href.indexOf('localhost') == -1) {
                        $(this).replaceWith($(this).text()); //deactivate link
                    }
                    //disable links to contact us section from within the blog
                    if (href.indexOf('clubpenguin.com/help/contact') > -1 || href.indexOf('localhost:8082/help/contact') > -1) {
                        $(this).replaceWith($(this).text()); //deactivate link
                    }

                });

                // Look at every link and ensure nochrome var
                $('a').each(function() {
                    var href = this.href;
                    if (href.indexOf('clubpenguin.com') != -1 || href.indexOf('localhost') != -1) {
                        // don't append if already have nochrome var, propagate it
                        if (href.indexOf("nochrome=1") < 0) {
                            if (href.indexOf('?') != -1) {
                                href = href + '&nochrome=1';
                            } else {
                                href = href + '?nochrome=1';
                            }
                            $(this).attr('href', href);
                        }
                    }
                });
            }


            var countryCode = window.CP.common.getCountryCode();

            $('a[href*="products"]').each(function() {
                // grab the url
                var href = this.href;

                // don't append if already have country code var
                if (href.indexOf("country=") >= 0) {
                    return;
                }

                // find out if there's a hashtag, set that aside
                var hashtag = '';
                var indexOfHash = href.indexOf('#');
                if (indexOfHash >= 0) {
                    hashtag = href.substr(indexOfHash);
                    // if there's a hashtag, remove it from the url
                    hashtagLength = hashtag.length;
                    hrefLength = href.length;
                    href = href.substr(0, hrefLength - hashtagLength);
                }

                // continue on with the country tweaks
                if (href.indexOf('?') != -1) {
                    href = href + '&country=' + countryCode;
                } else {
                    href = href + '?country=' + countryCode;
                }

                // add the hashtag back in at the end
                href = href + hashtag;
                $(this).attr('href', href);
            });

        }
    };
})(window.jQuery);

window.jQuery(document).ready(function() {
    window.common = new CP.common();
});;
!function(){function t(t){this.converter=t.converter,this.data=t.path||t.data,this.imageData=[],this.multiplier=t.multiplier||1,this.padding=t.padding||0,this.fps=t.fps||25,this.stepsPerFrame=~~t.stepsPerFrame||1,this.trailLength=t.trailLength||1,this.pointDistance=t.pointDistance||.05,this.domClass=t.domClass||"sonic",this.backgroundColor=t.backgroundColor||"rgba(0,0,0,0)",this.fillColor=t.fillColor,this.strokeColor=t.strokeColor,this.stepMethod="string"==typeof t.step?a[t.step]:t.step||a.square,this._setup=t.setup||i,this._teardown=t.teardown||i,this._preStep=t.preStep||i,this.pixelRatio=t.pixelRatio||null,this.width=t.width,this.height=t.height,this.fullWidth=this.width+2*this.padding,this.fullHeight=this.height+2*this.padding,this.domClass=t.domClass||"sonic",this.setup()}var i=function(){},s=t.argTypes={DIM:1,DEGREE:2,RADIUS:3,OTHER:0},e=t.argSignatures={arc:[1,1,3,2,2,0],bezier:[1,1,1,1,1,1,1,1],line:[1,1,1,1]},h=t.pathMethods={bezier:function(t,i,s,e,h,a,l,r,o){t=1-t;var n=1-t,p=t*t,c=n*n,u=p*t,d=3*p*n,f=3*t*c,g=c*n;return[u*i+d*a+f*r+g*e,u*s+d*l+f*o+g*h]},arc:function(t,i,s,e,h,a){var l=(a-h)*t+h,r=[Math.cos(l)*e+i,Math.sin(l)*e+s];return r.angle=l,r.t=t,r},line:function(t,i,s,e,h){return[(e-i)*t+i,(h-s)*t+s]}},a=t.stepMethods={square:function(t){this._.fillRect(t.x-3,t.y-3,6,6)},fader:function(t){this._.beginPath(),this._last&&this._.moveTo(this._last.x,this._last.y),this._.lineTo(t.x,t.y),this._.closePath(),this._.stroke(),this._last=t}};t.prototype={calculatePixelRatio:function(){var t=window.devicePixelRatio||1,i=this._.webkitBackingStorePixelRatio||this._.mozBackingStorePixelRatio||this._.msBackingStorePixelRatio||this._.oBackingStorePixelRatio||this._.backingStorePixelRatio||1;return t/i},setup:function(){var t,i,a,l,r=this.data;this.canvas=document.createElement("canvas"),this._=this.canvas.getContext("2d"),null==this.pixelRatio&&(this.pixelRatio=this.calculatePixelRatio()),this.canvas.className=this.domClass,1!=this.pixelRatio?(this.canvas.style.height=this.fullHeight+"px",this.canvas.style.width=this.fullWidth+"px",this.fullHeight*=this.pixelRatio,this.fullWidth*=this.pixelRatio,this.canvas.height=this.fullHeight,this.canvas.width=this.fullWidth,this._.scale(this.pixelRatio,this.pixelRatio)):(this.canvas.height=this.fullHeight,this.canvas.width=this.fullWidth),this.points=[];for(var o=-1,n=r.length;++o<n;){if(t=r[o].slice(1),a=r[o][0],a in e)for(var p=-1,c=t.length;++p<c;){switch(i=e[a][p],l=t[p],i){case s.RADIUS:l*=this.multiplier;break;case s.DIM:l*=this.multiplier,l+=this.padding;break;case s.DEGREE:l*=Math.PI/180}t[p]=l}t.unshift(0);for(var u,d=this.pointDistance,f=d;1>=f;f+=d)f=Math.round(1*f/d)/(1/d),t[0]=f,u=h[a].apply(null,t),this.points.push({x:u[0],y:u[1],progress:f})}this.frame=0,this.converter&&this.converter.setup&&this.converter.setup(this)},prep:function(t){if(!(t in this.imageData)){this._.clearRect(0,0,this.fullWidth,this.fullHeight),this._.fillStyle=this.backgroundColor,this._.fillRect(0,0,this.fullWidth,this.fullHeight);{var i,s,e,h=this.points,a=h.length;this.pointDistance}this._setup();for(var l=-1,r=a*this.trailLength;++l<r&&!this.stopped;)s=t+l,i=h[s]||h[s-a],i&&(this.alpha=Math.round(1e3*(l/(r-1)))/1e3,this._.globalAlpha=this.alpha,this.fillColor&&(this._.fillStyle=this.fillColor),this.strokeColor&&(this._.strokeStyle=this.strokeColor),e=t/(this.points.length-1),indexD=l/(r-1),this._preStep(i,indexD,e),this.stepMethod(i,indexD,e));return this._teardown(),this.imageData[t]=this._.getImageData(0,0,this.fullWidth,this.fullWidth),!0}},draw:function(){this.prep(this.frame)||(this._.clearRect(0,0,this.fullWidth,this.fullWidth),this._.putImageData(this.imageData[this.frame],0,0)),this.converter&&this.converter.step&&this.converter.step(this),this.iterateFrame()||this.converter&&this.converter.teardown&&(this.converter.teardown(this),this.converter=null)},iterateFrame:function(){return this.frame+=this.stepsPerFrame,this.frame>=this.points.length?(this.frame=0,!1):!0},play:function(){this.stopped=!1;var t=this;this.timer=setInterval(function(){t.draw()},1e3/this.fps)},stop:function(){this.stopped=!0,this.timer&&clearInterval(this.timer)}},window.Sonic=t}();;
if (typeof CP === 'undefined') {
    CP = {};
}

(function($) {

    /* Custom Easing
    ------------------------------------------------------------------*/
    $.easing.easeInOutQuint = function(x, t, b, c, d) {
        if ((t /= d / 2) < 1) return c / 2 * t * t * t * t * t + b;
        return c / 2 * ((t -= 2) * t * t * t * t + 2) + b;
    }

    /* First Time Experience Customization
    ------------------------------------------------------------------*/
    CP.first_time = function(options) {
        this.options = {};
        $.extend(true, this.options, options);
        this.easing = 'easeInOutQuint';
        this.videoAlreadyPlayed = false;
        this.load();
    };

    CP.first_time.prototype.load = function() {
        this.initListeners();
    };

    CP.first_time.prototype.initListeners = function() {
        var self = this;

        // Header goto home
        $('a.link-home').live('click', function(e) {
            e.preventDefault();
            var c = setCookie('cpWELCOME', 'false', 30);
            window.location = $(this).attr('href');
        });

        // Language select
        $('#language-select a.top-level').live('click', function(e) {
            e.preventDefault();
            $(this).addClass('active');
            $('#bottom-languages').css('display', 'block');
        });
        $('#language-select').mouseleave(function() {
            $('a.top-level').removeClass('active');
            $('#bottom-languages').hide();
        });

        // Inject loading animation
        self.loadingAnimation('start');

        // Awaiting cp_geo:ready trigger
        $(document).bind('cp.geo:ready', function(e, countryCode) {
            // NOW do ajax call to get video
            if (countryCode == '--') { countryCode = 'US'; }
            var lang_w_slash = Drupal.settings.cp_extra.lang_w_slash;
            var request = $.ajax({
                type: "GET",
                url: window.location.protocol + "//" + window.location.host + "/" + lang_w_slash + "welcome_video/" + countryCode,
                async: true,
                success: function(result) {
                    self.loadingAnimation('stop');
                    $('.region-preface-first-inner').html(result);
                    self.initModal();
                    self.videoPlayer = $('.media-video .video-wrap');
                    // 'Watch Video' button click
                    $('a.block-media.video').live('mousedown', function(e) {
                        e.preventDefault();
                        $('#modal-content').html(self.videoPlayer);
                        CP.runningVars.modal.open();
                    });
                }
            });
        });
    };

    CP.first_time.prototype.initModal = function() {
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

    CP.first_time.prototype.loadingAnimation = function(startStop) {
        var self = this;
        var d, a, container = document.getElementById('loader');

        if (startStop == 'start') {
            var loadingOptions = {
                width: 100,
                height: 100,
                stepsPerFrame: 1,
                trailLength: 1,
                pointDistance: .02,
                fps: 30,
                fillColor: '#e8ab24',
                step: function(point, index) {
                    this._.beginPath();
                    this._.moveTo(point.x, point.y);
                    this._.arc(point.x, point.y, index * 7, 0, Math.PI*2, false);
                    this._.closePath();
                    this._.fill();
                },
                path: [
                    ['arc', 50, 50, 30, 0, 360]
                ]
            };
            d = document.createElement('div');
            d.className = 'l';
            a = new Sonic(loadingOptions);
            d.appendChild(a.canvas);
            container.appendChild(d);
            a.play();
        } else {
            container.remove();
        }
    };

})(window.jQuery);


window.jQuery(document).ready(function() {
    window.first_time = new CP.first_time();
});;
String.prototype.trim = function() {
    return this.replace(/^\s+|\s+$/g, "");
};

if (typeof CP === 'undefined') {
    CP = {};
}
CP.runningVars = {
    layoutDirty: true,
    isTouchDevice: false,
    cleanWidth: 0,
    firstLoad: true,
    langDir: ""
};

(function($) {

    CP.agegate = function(isGated, cutoffYear, langDir) {
        CP.runningVars.cutoffYear = cutoffYear;
        CP.runningVars.isGated = isGated;
        CP.runningVars.langDir = langDir;
        $.extend(true, this.options, {});
        this.load();
    };

    CP.agegate.prototype.initListeners = function() {
        var self = this;
        var htmltext = "";
        var hideContinue = false;

        $('#agegate label').live("click", function() {
            if (!$(this).hasClass('option')) {
                $(this).hide();
            }
        });

        $("#agegate input").live("focus", function() {
            //Hide label
            if (!$("label[for='" + $(this).attr('id') + "']").hasClass('option')) {
                $("label[for='" + $(this).attr('id') + "']").hide();
            }
        });

        $("#agegate input").live("blur", function() {
            var value = $(this).val();
            if (value == "") {
                $("label[for='" + $(this).attr('id') + "']").css('display', 'inline-block');
            }
            $("#tip-box").html('');
            $("#tip-box").hide();
        });

        //agegate -- Gated Link Pressed
        $('.agegated-link').live('mousedown', function() {
            CP.runningVars.clickedLink = this;
            CP.runningVars.pendingUrl = $(this).attr("href");
            CP.runningVars.interstitialText = $(this).attr("rel");
            CP.runningVars.interstitialData = $(this).data();
            if (typeof CP.runningVars.interstitialText == 'undefined') {
                CP.runningVars.interstitialText = false;
            }

            CP.runningVars.visitorAge = getCookie('cpvisitor-yob') || null;
            if (!(CP.runningVars.isGated || self.isLinkGated(CP.runningVars.pendingUrl))
                || (CP.runningVars.visitorAge != null && parseInt(CP.runningVars.visitorAge) <= CP.runningVars.cutoffYear)) {

                //show interstitial
                self.showAgegate(function() {

                    $('#modal-window #modal-close').hide();
                    $('#agegate .question').hide();
                    $('#agegate .sorry').hide();
                    if (CP.runningVars.interstitialData) {
                        if (CP.runningVars.interstitialData.interstitial_title) {
                            $('#agegate h3.interstitial').html(CP.runningVars.interstitialData.interstitial_title);
                        }

                        if (CP.runningVars.interstitialData.interstitial_text) {
                            $('#agegate #interstitial').html(CP.runningVars.interstitialData.interstitial_text);
                        }

                        if (CP.runningVars.interstitialData.interstitial_cancel) {
                            $('#agegate #cancel').html(CP.runningVars.interstitialData.interstitial_cancel);
                        }

                        if (CP.runningVars.interstitialData.interstitial_ok) {
                            if (CP.runningVars.interstitialData.interstitial_ok == 'hide') {
                                hideContinue = true;
                            } else {
                                $('#agegate #continue').html(CP.runningVars.interstitialData.interstitial_ok);
                            }
                        }

                        if (CP.runningVars.interstitialData.interstitial_class) {
                            $('#agegate').addClass(CP.runningVars.interstitialData.interstitial_class);
                        }
                    } else if (CP.runningVars.interstitialText) {
                        htmltext = CP.runningVars.interstitialText.split("|");
                        if (htmltext.length >= 2) {
                            $('#agegate h3.interstitial').html(htmltext[0]);
                            $('#agegate #interstitial').html(htmltext[1]);
                            //custom text for cancel button
                            if (htmltext.length >= 3) {
                                $('#agegate #cancel').html(htmltext[2]);
                            }
                            //custom text for ok button
                            if (htmltext.length >= 4) {
                                if (htmltext[3] == 'hide') {
                                    hideContinue = true;
                                } else {
                                    $('#agegate #continue').html(htmltext[3]);
                                }
                            }
                            //add class to the agegate wrapper
                            if (htmltext.length >= 5) {
                                $('#agegate').addClass(htmltext[4]);
                            }
                        }
                    }

                    try {
                        var clickedLinkUrl = CP.runningVars.clickedLink.href.split('/');
                        if (clickedLinkUrl.length > 2) {
                            clickedLinkUrl = clickedLinkUrl[0] + '/' + clickedLinkUrl[1] + '/' + clickedLinkUrl[2];
                        } else {
                            clickedLinkUrl = clickedLinkUrl[0];
                        }
                    } catch (e) {
                        clickedLinkUrl = ""
                    };
                    var newText = $('#interstitial').text().replace('%1', clickedLinkUrl);
                    $('#interstitial').text(newText);

                    $('#agegate .interstitial').show();
                    $('#agegate #cancel').show();
                    if (hideContinue) {
                        $('#agegate #continue').hide();
                    } else {
                        $('#agegate #continue').show();
                    }
                    $('#agegate #submit').hide();
                });
                return false;
            } else {
                //show age gate question
                self.showAgegate(function() {
                    $('#modal-window #modal-close').hide();
                    $('#agegate .question').show();
                    $('#agegate .sorry').hide();
                    $('#agegate .interstitial').hide();
                    $('#agegate #cancel').hide();
                    $('#agegate #continue').hide();
                    $('#agegate #submit').show();
                });
                return false;
            }
        }).live('click', function() {
            return false
        });

        // Age gate -- submit date
        $('#agegate #submit').live('click', function() {

            var month = $('#agegate #edit-month').val();
            var day = $('#agegate #edit-day').val();
            var year = $('#agegate #edit-year').val();
            if (month.length == 0 || month <= 0 || month > 31 //for ease of implementing MM/DD/YYYY and DD/MM/YYYY we just reverse the labels.
                || day.length == 0 || day <= 0 || day > 31 //for ease of implementing MM/DD/YYYY and DD/MM/YYYY we just reverse the labels.
                || year.length == 0 || year <= 1900 || year >= 2100) {
                $('#agegate h3').css({
                    'color': '#f00'
                });
            } else {
                $('#agegate h3').css({
                    'color': '#fff'
                });
                //write cookie
                setCookie('cpvisitor-yob', year, null);
                if (parseInt(year) < parseInt(CP.runningVars.cutoffYear)) {

                    $('#agegate .question').fadeOut(200, function() {
                        if (CP.runningVars.interstitialText) {
                            htmltext = CP.runningVars.interstitialText.split("|");
                            if (htmltext.length >= 2) {
                                $('#agegate h3.interstitial').html(htmltext[0]);
                                $('#agegate #interstitial').html(htmltext[1]);
                            }
                            //custom text for cancel button
                            if (htmltext.length >= 3) {
                                $('#agegate #cancel').html(htmltext[2]);
                            }
                            //custom text for ok button
                            if (htmltext.length >= 4) {
                                $('#agegate #continue').html(htmltext[3]);
                            }
                            //add class to the agegate wrapper
                            if (htmltext.length >= 5) {
                                $('#agegate').addClass(htmltext[4]);
                            }

                        }

                        try {
                            var clickedLinkUrl = CP.runningVars.clickedLink.href.split('/');
                            if (clickedLinkUrl.length > 2) {
                                clickedLinkUrl = clickedLinkUrl[0] + '/' + clickedLinkUrl[1] + '/' + clickedLinkUrl[2];
                            } else {
                                clickedLinkUrl = clickedLinkUrl[0];
                            }
                        } catch (e) {
                            clickedLinkUrl = ""
                        };
                        var newText = $('#interstitial').text().replace('%1', clickedLinkUrl);
                        $('#interstitial').text(newText);

                        $('#agegate .interstitial').fadeIn(200);
                        $('#agegate #submit').hide();
                        $('#agegate #cancel').show();
                        $('#agegate #continue').show();
                    });

                } else {
                    $('#agegate .question').fadeOut(200, function() {
                        $('#agegate .sorry').fadeIn(200);
                        $('#agegate #submit').hide();
                        $('#agegate #cancel').show();
                    });
                }
            }
        });

        // Age gate -- insterstitial answers
        $('#agegate #continue').live('click', function() {
            CP.runningVars.modal.close();
            window.location.href = CP.runningVars.pendingUrl;
        });

        $('#agegate #cancel').live('click', function() {
            CP.runningVars.modal.close();
        });
    };

    CP.agegate.prototype.initLinks = function(selector) {
        selector = selector || 'a';
        //determine external links
        $(selector).each(function(i, link) {
            var isExternal = (link.href.indexOf('clubpenguin.com') < 0 &&
                link.href.indexOf('cpassets-a') < 0 &&
                link.href.indexOf('cpsslassets-a') < 0 &&
                link.href.indexOf('clubpenguin.de') < 0 &&
                link.href.indexOf('clubpenguinimg') < 0 &&
                link.href.indexOf('clubpenguin-island') < 0 &&
                link.href.indexOf('clubpenguinisland') < 0 &&
                link.href.indexOf('disneycareers.com') < 0 &&
                link.href.indexOf('disneytermsofuse.com') < 0 &&
                link.href.indexOf('disneyprivacycenter.com') < 0 &&
                link.href.indexOf('clubpenguinoffer.com') < 0 &&
                link.href.indexOf('clubpenguintv.com') < 0 &&
                link.href.indexOf('getclubpenguin.com') < 0 &&
                link.href.indexOf('tryclubpenguin.com') < 0 &&
                link.href.indexOf('www.disneylatino.bumeran.com.ar') < 0 &&
                link.href.indexOf('disney.com') < 0 &&
                link.href.indexOf('localhost') < 0 &&
                link.href.indexOf('cp.local') < 0 &&
                link.href.indexOf('javascript:') < 0 &&
                link.href.indexOf('#nogo') < 0 &&
                link.href.indexOf('mailto:') < 0 &&
                !$(link).hasClass("ui-selectmenu") &&

                link.href.length > 0 &&
                link.href.indexOf('204.') < 0);
            if (isExternal) {
                if (link.href.indexOf("?nochrome=1") < 0) {
                    $(link).addClass('agegated-link');
                    $(link).attr('target', '_blank');
                }
            }

        });
    };
    
    //Is this link age gated for all users (not just specific regions)
    //ie twitter.
    CP.agegate.prototype.isLinkGated = function(href) {
        var isGated = (href.indexOf('twitter.com') >= 0)
        return isGated;
    };

    CP.agegate.prototype.initModal = function() {
        $("#modal-overlay").remove();
        $("#modal-loading").remove();
        $("#modal-window").remove();

        CP.runningVars.modal = new CP.utils.Modal({
            showClose: false,
            contentCloseDelegate: '.modal-close',
            onOpenComplete: function() {},
            onCloseComplete: function() {},
            onCloseStart: function() {},
            onOpenStart: function() {}
        });
    };

    CP.agegate.prototype.showAgegate = function(openCallback, closeCallback) {
        var host = window.location.host;
        // if (host.indexOf("play") > -1) {
        //     host = host.replace("play","www");
        // }
        var url = window.location.protocol + "//" + host + CP.runningVars.langDir + "/geoip/agegate-overlay";

        // Allow Cross Domain
        $.ajaxPrefilter( function(options, originalOptions, jqXHR) {
            options.crossDomain = { crossDomain: true };
            options.xhrFields = { withCredentials: true };
        });

        // Get Agegate Overlay
        $.ajax({
            type: "GET",
            url: url,
            success: function(overlay) {
                //open modal
                if (!closeCallback) closeCallback = null;
                if (!openCallback) openCallback = null;
                CP.runningVars.modal.open(overlay, openCallback, closeCallback);
            }
        });
    };

    CP.agegate.prototype.load = function() {
        var self = this;
        CP.runningVars.visitorAge = getCookie('cpvisitor-yob') || null;
        this.initLinks();
        this.initListeners();
        this.initModal();

        if (window.PIE) {
            $('.base a.button, .menu li a').each(function() {
                PIE.detach(this);
                PIE.attach(this);
            });
        }

        try {
            imgSizer.collate();
        } catch (e) {}
        CP.runningVars.firstLoad = false;
    };

})(window.jQuery);

/*
Copyright (c) 2014 Matthew Hudson

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the "Software"), to deal in the Software without
restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.

*/
(function() {
  var previousDevice, _addClass, _doc_element, _find, _handleOrientation, _hasClass, _orientation_event, _removeClass, _supports_orientation, _user_agent;

  previousDevice = window.device;

  window.device = {};

  _doc_element = window.document.documentElement;

  _user_agent = window.navigator.userAgent.toLowerCase();

  device.ios = function() {
    return device.iphone() || device.ipod() || device.ipad();
  };

  device.iphone = function() {
    return _find('iphone');
  };

  device.ipod = function() {
    return _find('ipod');
  };

  device.ipad = function() {
    return _find('ipad');
  };

  device.android = function() {
    return _find('android');
  };

  device.androidPhone = function() {
    return device.android() && _find('mobile');
  };

  device.androidTablet = function() {
    return device.android() && !_find('mobile');
  };

  device.blackberry = function() {
    return _find('blackberry') || _find('bb10') || _find('rim');
  };

  device.blackberryPhone = function() {
    return device.blackberry() && !_find('tablet');
  };

  device.blackberryTablet = function() {
    return device.blackberry() && _find('tablet');
  };

  device.windows = function() {
    return _find('windows');
  };

  device.windowsPhone = function() {
    return device.windows() && _find('phone');
  };

  device.windowsTablet = function() {
    return device.windows() && _find('touch');
  };

  device.fxos = function() {
    return (_find('(mobile;') || _find('(tablet;')) && _find('; rv:');
  };

  device.fxosPhone = function() {
    return device.fxos() && _find('mobile');
  };

  device.fxosTablet = function() {
    return device.fxos() && _find('tablet');
  };

  device.meego = function() {
    return _find('meego');
  };

  device.mobile = function() {
    return device.androidPhone() || device.iphone() || device.ipod() || device.windowsPhone() || device.blackberryPhone() || device.fxosPhone() || device.meego();
  };

  device.tablet = function() {
    return device.ipad() || device.androidTablet() || device.blackberryTablet() || device.windowsTablet() || device.fxosTablet();
  };

  device.portrait = function() {
    return Math.abs(window.orientation) !== 90;
  };

  device.landscape = function() {
    return Math.abs(window.orientation) === 90;
  };

  device.noConflict = function() {
    window.device = previousDevice;
    return this;
  };

  _find = function(needle) {
    return _user_agent.indexOf(needle) !== -1;
  };

  _hasClass = function(class_name) {
    var regex;
    regex = new RegExp(class_name, 'i');
    return _doc_element.className.match(regex);
  };

  _addClass = function(class_name) {
    if (!_hasClass(class_name)) {
      return _doc_element.className += " " + class_name;
    }
  };

  _removeClass = function(class_name) {
    if (_hasClass(class_name)) {
      return _doc_element.className = _doc_element.className.replace(class_name, "");
    }
  };

  if (device.ios()) {
    if (device.ipad()) {
      _addClass("ios ipad tablet");
    } else if (device.iphone()) {
      _addClass("ios iphone mobile");
    } else if (device.ipod()) {
      _addClass("ios ipod mobile");
    }
  } else if (device.android()) {
    if (device.androidTablet()) {
      _addClass("android tablet");
    } else {
      _addClass("android mobile");
    }
  } else if (device.blackberry()) {
    if (device.blackberryTablet()) {
      _addClass("blackberry tablet");
    } else {
      _addClass("blackberry mobile");
    }
  } else if (device.windows()) {
    if (device.windowsTablet()) {
      _addClass("windows tablet");
    } else if (device.windowsPhone()) {
      _addClass("windows mobile");
    } else {
      _addClass("desktop");
    }
  } else if (device.fxos()) {
    if (device.fxosTablet()) {
      _addClass("fxos tablet");
    } else {
      _addClass("fxos mobile");
    }
  } else if (device.meego()) {
    _addClass("meego mobile");
  } else {
    _addClass("desktop");
  }

  _handleOrientation = function() {
    if (device.landscape()) {
      _removeClass("portrait");
      return _addClass("landscape");
    } else {
      _removeClass("landscape");
      return _addClass("portrait");
    }
  };

  _supports_orientation = "onorientationchange" in window;

  _orientation_event = _supports_orientation ? "orientationchange" : "resize";

  if (window.addEventListener) {
    window.addEventListener(_orientation_event, _handleOrientation, false);
  } else if (window.attachEvent) {
    window.attachEvent(_orientation_event, _handleOrientation);
  } else {
    window[_orientation_event] = _handleOrientation;
  }

  _handleOrientation();

}).call(this);
;
