import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);
const STORAGE_KEY = 'videoplayer-current-time';

const onPlay = function(data) {
};

localStorage.setItem(STORAGE_KEY, data.seconds);
    onPlay = throttle((data) => {
        localStorage.setItem(STORAGE_KEY, data.seconds);
    }, 1000);

player.on('timeupdate', onPlay);
player.getCurrentTime(STORAGE_KEY), then(function(seconds) {
}).catch(function(error) {
});

player.on('loaded', function () {
    if (localStorage.getItem(STORAGE_KEY)) {
        player.setCurrentTime(localStorage.getItem(STORAGE_KEY));
    }
});
    

