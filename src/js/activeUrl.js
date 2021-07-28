const selectContainer = document.querySelector('.selectContainer');
const introduction = document.querySelector('.introduction');
const selectBtn = document.querySelector('#selectBtn');

function getUrlVars() {
  var vars = {};
  var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (m, key, value) {
    vars[key] = value;
  });
  return vars;
}

function playSelectionSong() {
  const characterSelectAudio = document.querySelector('#characterSelectAudio');
  characterSelectAudio.autoplay = true;
  // characterSelectAudio.play();
  characterSelectAudio.load();
  characterSelectAudio.volume = 0.35;
}


function showActivePage() {
  const selectionPage = getUrlVars().page == 'selecao';
  if (selectionPage) {
    selectContainer.classList.add('active');
    introduction.classList.add('hide');
    playSelectionSong();
  }
}

showActivePage();

selectBtn.addEventListener('click', (e) => {
  e.preventDefault();
  window.history.pushState(null, null, '?page=selecao');
  playSelectionSong();
  showActivePage();
});