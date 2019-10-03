/* import './public/style'; // entry point for styles */
import $ from 'jquery';
import { open, close, animateBike } from './app/hamburger';
import {} from './app/toggle';

animateBike();
$('#open').on('click', () => {
  open();
});

$('#close').on('click', () => {
  close();
});
