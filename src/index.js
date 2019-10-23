/* import './public/style'; // entry point for styles */
import $ from 'jquery';
import { open, close, animateBike } from './app/hamburger';
import './app/toggle';
import './app/quizz';

animateBike();
$('#open').on('click', () => {
  open();
});

$('#close').on('click', () => {
  close();
});
