// Mapeia os códigos dos áudios para seus respectivos arquivos
const audioMap = {};

for (let i = 1; i <= 1062; i++) {
    audioMap[i] = `./audios/${i}.mp3`;
}

let currentAudio = 1;

function playAudio() {
    const inputCode = document.getElementById('audioCode').value;
    const audioPlayer = document.getElementById('audioPlayer');

    if (audioMap[inputCode]) {
        audioPlayer.src = audioMap[inputCode];
        audioPlayer.play();
        currentAudio = parseInt(inputCode);
        document.getElementById('labelCurrentAudio').textContent = currentAudio;
    } else {
        alert('Código inválido. O áudio não existe.');
    }
}

function previousAudio() {
    currentAudio = Math.max(currentAudio - 1, 1);
    document.getElementById('audioCode').value = currentAudio;
    playAudio();
}

function nextAudio() {
    currentAudio = Math.min(currentAudio + 1, Object.keys(audioMap).length);
    document.getElementById('audioCode').value = currentAudio;
    playAudio();
}


document.getElementById('audioCode').addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        playAudio();
    }
});