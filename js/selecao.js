const selection = document.querySelector('.selection');

selection.addEventListener('click', function (e) {
	e.preventDefault();
	e.stopPropagation();
	const clickedParent = e.target.parentElement;
	const isCharacterElement = clickedParent.hasAttribute('data-character');

	if (isCharacterElement) {
		const characterName = clickedParent.getAttribute('data-character');
		console.log(characterName);

		e.preventDefault();

		document.getElementById('img').innerHTML = `<img src="img/gifs/${characterName}.gif">`;

		document.querySelector('figcaption').style.display = 'block';

		document.getElementById('face').innerHTML = `<img src="img/gifs/${characterName}_face.gif">`;

		document.getElementById('p').innerHTML = characterName.replace('_', ' ');

		document.getElementById('coin').innerHTML = '<audio src="audio/select.mp3" autoplay volume="0.2"></audio>';

		const randomSound = Math.floor(Math.random() * 8) + 1;

		document.getElementById('som').innerHTML = `<audio src="audio/${characterName}/${randomSound}.wav" autoplay></audio>`;
	}
});



































