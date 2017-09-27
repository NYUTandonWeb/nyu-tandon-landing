import 'bootstrap';
import css from './app.scss';

import {video} from './js/video.js';

import {menu} from './js/menu.js';

$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})


video();
menu();




console.log('test');