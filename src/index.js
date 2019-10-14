/* import './public/style'; // entry point for styles */
import $ from 'jquery';
import { open, close, animateBike } from './app/hamburger';
import {} from './app/toggle';

// play sound is impossible in new browser
// import { audio } from './app/audio';
// $(document).ready(() => audio());


animateBike();
$('#open').on('click', () => {
  open();
});

$('#close').on('click', () => {
  close();
});
