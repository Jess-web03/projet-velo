// pour ouvrir/fermer les différentes sections
import $ from 'jquery';
// code de a-propos.html
$(document).ready(() => {
  $('.toggle').click(() => {
    $('.team').slideToggle();
  });
});

// code de mecano.html
$(document).ready(() => {
  $('.gloToggle').click(() => {
    $('.glossaire').slideToggle(1000);
  });
});
$(document).ready(() => {
  $('.gesteToggle').click(() => {
    $('.geste').slideToggle();
  });
});
$(document).ready(() => {
  $('.secuToggle').click(() => {
    $('.secu').slideToggle();
  });
});
