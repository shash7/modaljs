/*
 * modal.js
 * Made by shash7
 * Fork this project at github
 * https://github.com/shash7/modaljs
 * Licensed under the MIT license
 */

;(function($, window, document, undefined) {
	
	"use strict";
	
	function Modal(settings) {
		
		// Defaults
		settings = settings || {};
		
		settings.backdrop = settings.backdrop || true;
		var isActive = false;
		
		$('body').append('<div class="modal-outer"><div class="modal"></div></div><div class="blanket"></div>');
		
		// Used for registering clicks to close modal	
		document.getElementsByClassName('modal-outer')[0].addEventListener('click', function(e) {
			// Used for checking if click happened on the backdrop only
			if(e.target === e.currentTarget) {
				unstage();
			}
		});
		
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
				$('body').addClass('modal-open');
				$('.blanket').addClass('active');
				$('.modal-outer').addClass('active');
				isActive = true;
			}
		}
		
		function unstage() {
			if(isActive) {
				$('.modal').removeClass('active');
				$('body').removeClass('modal-open');
				$('.blanket').removeClass('active');
				$('.modal-outer').removeClass('active');
				isActive = false;
			}
		}
		
		function close() {
			unstage();
		}
		
		function destroy() {
			if(isActive) {
				unstage();
				isActive = false;
			}
			$('.modal').append('');
		}
		
		$(document).on('keyup', function(e) {
			console.log(e);
		});
		
		return {
			create  : create,
			stage   : stage,
			unstage : unstage,
			close   : close,
			destroy : destroy
		};
	}
	
	window.Modal = Modal;
	
})(jQuery, window, document);