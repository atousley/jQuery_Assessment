var counter = 0;

$(document).ready(function() {

	$('#generate').append('<button class="genButton">Generate</button>');
	$('#generate').append('<p class="numClicks"></p>');
	$('.genButton').on('click', domButtonAdd);
});

function domButtonAdd () {
	counter++;

	$('#generate').append('<div class="container"></div>');
	$('.numClicks').replaceWith('<p class="numClicks">Click Number: ' + counter + '</p>');


	var $el = $('#generate').children().last();

	$el.append('<button class="delete">Delete</button>');
	$el.append('<button class="change">Change</button>');
}

