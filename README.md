modaljs
=======

A lightweight jquery plugin for creating modal windows

Dependencies :
* jquery


### 1. Markup
Add modaljs to your page

	<link rel="stylesheet" href="modal.css">
	<script src="modal.js"></script>

### 2. Javascript
Running this code will create and show a modal window

	var modal = new Modal();

### 3. Creating modals
Use the create() method to create modal windows

	modal.create('gg');

	modal.unstage(); //Hide the modal
	modal.stage(); //Show the last modal
	modal.destroy(); //Same as unstage() except that it will empty modal's contents

### 4. Css
The default css is made for jank free animations. It is recommended that you customize it to suit your
own needs.

Inside the modal, four classes are available

	.modal-head 
	.modal-body
	.close

### Parameters

	var modal = new Modal({
		closeOnClick : false //Default : true
	});


**Credits & license**

Created by shash7
Licensed under MIT license