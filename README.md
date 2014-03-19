modaljs
=======

A lightweight jquery plugin for creating modal windows

Dependence :
jquery


### 1. Markup
Add modaljs to your page

	<link rel="stylesheet" href="modal.css">
	<script src="modal.js"></script>

### 2. Javascript
Running this code will create and show a modal window

	var modal = new Modal();

### 3. Creating modals
Use the create() method to create modal windows

	modal.create('gg'); // Create a new modal
	modal.unstage();    // Hide the modal
	modal.close();      // Same as unstage
	modal.stage();      // Show the last modal
	modal.destroy();    // Same as unstage() except that it will empty modal's contents

### 4. Css
The default css is made for jank free animations. It is recommended that you customize it to suit your
own needs.

Inside the modal, three classes are available

	.modal-head 
	.modal-body
	.modal-footer
	
Use them to create a structured modal window.

If you want a close button, add an a element with the classname 'modal-close'

### Parameters

	var modal = new Modal({
		backdrop : false // Default : true
	});


**Credits & license**

Created by shash7
Licensed under MIT license