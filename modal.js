/*
 * modal.js
 */

;(function($, window, document, undefined) {
	
	"use strict";
	
	function Modal(settings) {
		
		
		settings = settings || {};
		var closeOnClick = null;
		var isActive = false;
		
		if(settings.closeOnClick === false || settings.closeOnClick === true) {
			closeOnClick = settings.closeOnClick;
		} else {
			closeOnClick = true;
		}
		if(!ifExists('.modal') && !ifExists('.blanket')) {
			$('body').append('<div class="blanket"><div class="modal"></div></div>');
		}
		
		$('.blanket').click(function() {
			if(closeOnClick) {
				unstage();
			}
		});
		
		function ifExists(selector) {
			if($(selector).length < 1) {
				return false;
			} else {
				return true;
			}
		}
		
		
		/* ---- public functions ---- */
		function create(data) {
			if (isActive) {
				destroy();
			}
			$('.modal').html(data);
			stage();
		}
		
		function stage() {
			if(!isActive) {
				$('.modal').addClass('active');
				$('.blanket').addClass('active');
				isActive = true;
			}
		}
		
		function unstage() {
			if(isActive) {
				$('.modal').removeClass('active');
				$('.blanket').removeClass('active');
				isActive = false;
			}
		}
		
		function destroy() {
			if(isActive) {
				unstage();
				isActive = false;
			}
			$('.modal').append('');
		}
		
		return {
			create  : create,
			stage   : stage,
			unstage : unstage,
			destroy : destroy
		};
	}
	
	window.Modal = Modal;
	
})(jQuery, window, document);