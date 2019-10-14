import $ from 'jquery';

export const audio = () => {
  // $('audio#bubble')[0].play();
  const bubbleSong = document.getElementById('bubble');
  $('#bubble').on('click', () => bubbleSong.play());
  setTimeout(() => $('#bubble').click(), 1000);
};
