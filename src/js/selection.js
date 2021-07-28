const selection = document.querySelector('.selection');
const clickedTrays = {};

function randomNumber(multiplyBy, init = 1) {
	return Math.floor(Math.random() * multiplyBy) + init;
}

function removeFromDOM(elementId) {
	const elementToRemove = document.querySelector(elementId);
	if (elementToRemove) elementToRemove.remove();
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
	const audioCoin = document.querySelector('#coin');
	audioCoin.load();

	document.querySelector('figcaption').style.display = 'block';
	document.getElementById('face').innerHTML = `<img src="img/gifs/${characterName}_face.gif">`;
	document.getElementById('p').innerHTML = characterName.replace('_', ' ');
	sortAndPlaySound(characterName, clickedParent);
}

function sortAndPlaySound(characterName, clickedParent) {
	let randNum = randomNumber(8);

	const CharacterNotExitsInArray = !clickedTrays[characterName];
	if (CharacterNotExitsInArray) clickedTrays[characterName] = [];

	const isRepeatedSound = clickedTrays[characterName].includes(randNum);

	if (clickedTrays[characterName].length == 8) {
		clickedTrays[characterName] = [];
	}

	if (isRepeatedSound) {
		displayCharacter(clickedParent);
		return;
	}

	if (!isRepeatedSound) {
		clickedTrays[characterName].push(randNum);

		document.querySelector('#img').innerHTML = `<img src="img/gifs/${characterName}/${randNum}.gif">`;

		const elementUrl = `audio/${characterName}/${randNum}.wav`;
		const characterVoice = document.querySelector('#characterVoice');
		characterVoice.setAttribute('src', elementUrl);
		characterVoice.load();
	}
}


/*function createAudioElement(elementId, elementUrl, appendToId) {
	const audio = document.createElement('audio');
	const appendTo = document.querySelector(appendToId);
	audio.autoplay = true;
	audio.setAttribute('id', elementId);
	audio.setAttribute('src', elementUrl);
	appendTo.appendChild(audio);
	appendTo.childNodes[0].load();
}*/