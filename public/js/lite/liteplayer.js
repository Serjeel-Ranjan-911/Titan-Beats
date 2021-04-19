import { getPath } from '../desert/player.js';
import { changeQuote } from './quote.js';

window.onload = function () {
	var audio = document.getElementById('audio');
	audio.src = '/introTune/silence.mp3';
	audio.play();
	changeQuote();
	const player = function () {
		//const mood = window.location.href.substring(window.location.href.lastIndexOf("/") + 1);
		const mood = document.getElementById('getMood').value;

		getPath((path) => {
			audio.src = `/music/${mood}/` + path;
			audio.load();
			audio.play();
			changeQuote();
		}, mood);

		audio.play();
	};

	audio.addEventListener('ended', player);
};
