import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

const player = new Player('vimeo-player');

player.on('timeupdate', throttle(onUpdate, 1000));

function onUpdate (data) {{}
    localStorage.setItem("videoplayer-current-time", data.seconds); 
    const current = localStorage.getItem("videoplayer-current-time");

    player.setCurrentTime(current).then(function(seconds) {   
    }).catch(function(error) {
        switch (error.name) {
            case 'RangeError':
                break;
            default:
                break;
        }
    });
  
};


