import $ from 'jquery';

const colors = ['#a862ea', '#6383ea','#b0ea62', '#f782c2','#f9c46b', '#85951b', '#571368'];

export function changeColor() {
  const color = colors[Math.floor(Math.random() * colors.length)];
    $('body, #new-quote, #tweet-quote').each(function() {
      $(this).css({'background-color': color, 'transition': '1s'});
    });
    $('#text, #author, .fa-solid').each(function() {
      $(this).css({'color': color, 'transition': '1s'});
    });
}