/*
 *  jQuery Boilerplate - v3.3.1
 *  A jump-start for jQuery plugins development.
 *  http://jqueryboilerplate.com
 *
 *  Made by Zeno Rocha
 *  Under MIT License
 */
;(function ( $, window, document, undefined ) {
	
		var pluginName = "modal",
				defaults = {
				closeOnClick : true
		};

		// The actual plugin constructor
		function Plugin ( element, options ) {
				this.element = element;
				// jQuery has an extend method which merges the contents of two or
				// more objects, storing the result in the first object. The first object
				// is generally empty as we don't want to alter the default options for
				// future instances of the plugin
				this.settings = $.extend( {}, defaults, options );
				this._defaults = defaults;
				this._name = pluginName;
				this.init();
		}

		Plugin.prototype = {
				init: function () {
					var settings = $.extend({}, defaults);
            $.data(document, 'modal', settings);
					if(!this.ifExists('.modal') && !this.ifExists('.blanket')) {
						$('body').append('<div class="blanket"><div class="modal"></div></div>');
					}
					$('.blanket').click(function() {
						if(this.settings.closeOnClick) {
							this.unstage();
						}
					});
					for(settings in this.settings) {
						console.log(settings);
						if(this.isObject(settings)) {
							if(settings.create) {
								this.create(settings.create);
							}
						} else {
							if(settings.stage) {
								this.stage();
							}
						}
					}
				},
				ifExists : function(selector) {
					if($(selector).length < 1) {
						return false;
					} else {
						return true;
					}
				},
				isObject : function(object) {
					if(typeof object && object instanceof Array === false) {
						return true;
					} else {
						return false;
					}
				},
				create : function(text) {
					console.log(text);
				},
				stage : function() {
					console.log('stage');
				},
				unstage : function() {
					console.log('unstage');
				}
		};

		// A really lightweight plugin wrapper around the constructor,
		// preventing against multiple instantiations
		$.fn[ pluginName ] = function ( options ) {
				return this.each(function() {
						if ( !$.data( this, "plugin_" + pluginName ) ) {
								$.data( this, "plugin_" + pluginName, new Plugin( this, options ) );
						}
				});
		};

})( jQuery, window, document );
