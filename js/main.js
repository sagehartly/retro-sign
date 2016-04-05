var $svg = $('svg');

$('.btn').on('click', function () {
  $('svg').addClass('lineEngage');
  $('svg').removeClass('lines');
  $('.engage').addClass('is-engaged');
});
