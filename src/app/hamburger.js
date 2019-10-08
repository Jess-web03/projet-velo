import $ from 'jquery';

export const animateBike = () => {
  // animation au début du site
  console.log($(window).width());

  $('#velo-dessin').animate(
    {
      left: $(window).width(),
    },
    {
      duration: 3000,
      complete() {
        $('#velo-dessin').animate(
          {
            left: 500,
          },
          {
            duration: 3000,

            complete() {
              $('.goRight').animate(
                { right: ($(window).width() / 2) - 110 },
                { duration: 2000 },
              );
              $('.goLeft').animate(
                { right: ($(window).width() / 2) + 325 },
                { duration: 2000 },
              );
            },
          },
        );
      },
    },
  );
};


// ouvrir -fermer menu
export const open = () => {
  document.getElementById('myNav').style.width = '100%';
  console.log('hello');
};
export const close = () => {
  document.getElementById('myNav').style.width = '0%';
};
