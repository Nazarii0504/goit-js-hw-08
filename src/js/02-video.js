import throttle from 'lodash.throttle';
import Player from '@vimeo/player';


const KEY = 'videoplayer-current-time';

const player = new Player('vimeo-player');
const key = localStorage.getItem(KEY);
if (key) {
  player.setCurrentTime(parseFloat(key));
}

player.on(
  'timeupdate',
  throttle(data => {
    localStorage.setItem(KEY, data.seconds.toString());
  }, 1000),
);

