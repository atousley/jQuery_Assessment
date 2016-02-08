var counter = 0;

$(document).ready(function() {

	$('#generate').append('<button class="genButton">Generate</button>');
	$('#generate').append('<p class="numClicks">Click Number: 0</p>');
	$('.genButton').on('click', domButtonAdd);
	$('.container').on('click', '.delete', deleteButton);
	$('.container').on('click', '.change', changeColor);
});

function domButtonAdd() {
	counter++;

	$('.container').append('<div class="buttons"></div>');
	$('.numClicks').replaceWith('<p class="numClicks">Click Number: ' + counter + '</p>');


	var $el = $('.container').children().last();

	$el.append('<button class="delete">Delete</button>');
	$el.append('<button class="change">Change</button>');
}

function deleteButton() {
	$(this).parent().remove();
}

function changeColor() {
	$(this).parent().toggleClass('highlight');
}
