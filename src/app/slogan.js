import $ from 'jquery';

export const animateSlogan = () => {

$(document).ready(() => {
  $('.goRight').animate({ right: $(window).width(), }, 
  {
  duration: 2000,
  complete(){
    $('.goLeft').animate({ left: 500, }, 
    {
    duration: 2000,
            },
           );
         },
       },
      );
    },
)


