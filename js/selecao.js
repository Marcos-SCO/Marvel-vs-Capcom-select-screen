const selection = document.querySelector('.selection');

const clickedTrays = {};

function randomNumber(multiplyBy, init = 1) {
	return Math.floor(Math.random() * multiplyBy) + init;
}

selection.addEventListener('click', characterElement);

function characterElement(e) {
	e.preventDefault();
	e.stopPropagation();
	const clickedParent = e.target.parentElement;
	const isCharacterElement = clickedParent.hasAttribute('data-character');

	if (isCharacterElement) displayCharacter(clickedParent);
}

function displayCharacter(clickedParent) {
	const characterName = clickedParent.getAttribute('data-character');
	// clickedParent.preventDefault();

	document.getElementById('img').innerHTML = `<img src="img/gifs/${characterName}.gif">`;

	document.querySelector('figcaption').style.display = 'block';

	document.getElementById('face').innerHTML = `<img src="img/gifs/${characterName}_face.gif">`;

	document.getElementById('p').innerHTML = characterName.replace('_', ' ');

	document.getElementById('coin').innerHTML = '<audio src="audio/select.mp3" autoplay volume="0.2"></audio>';

	sortAndPlaySound(characterName, clickedParent);

}

function sortAndPlaySound(characterName, clickedParent) {
	let randomSound = randomNumber(8);

	const CharacterNotExitsInArray = !clickedTrays[characterName];
	if (CharacterNotExitsInArray) clickedTrays[characterName] = [];

	const isRepeatedSound = clickedTrays[characterName].includes(randomSound);

	if (clickedTrays[characterName].length == 8) {
		clickedTrays[characterName] = [];
	}

	if (isRepeatedSound) {
		displayCharacter(clickedParent);
		return;
	}

	if (!isRepeatedSound) {
		clickedTrays[characterName].push(randomSound);
		document.getElementById('som').innerHTML = `<audio src="audio/${characterName}/${randomSound}.wav" autoplay></audio>`;
	}
}































