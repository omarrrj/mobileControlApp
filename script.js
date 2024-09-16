document.addEventListener('DOMContentLoaded', () => {
    const tempDisplay = document.getElementById('temp-display');
    const tempIncreaseButton = document.getElementById('temp-increase');
    const tempDecreaseButton = document.getElementById('temp-decrease');
    const tempOffButton = document.getElementById('temp-off');
  
    let currentTemp = 78; // Initial temperature

    
  
    function updateTemperature() {
      tempDisplay.textContent = `${currentTemp}°F`;
    }
  
    tempIncreaseButton.addEventListener('click', () => {
      currentTemp += 1;
      updateTemperature();
    });
  
    tempDecreaseButton.addEventListener('click', () => {
      currentTemp -= 1;
      updateTemperature();
    });
  
    tempOffButton.addEventListener('click', () => {
      currentTemp = 0;
      updateTemperature();
    });
  
    updateTemperature(); // Initial display update
  });

  document.addEventListener('DOMContentLoaded', () => {
    const lightToggle = document.getElementById('light-toggle');
    const toggleStatus = document.getElementById('toggle-status');
  
    if (lightToggle && toggleStatus) {
      // Initialize the toggle status
      toggleStatus.textContent = lightToggle.checked ? 'On' : 'Off';
  
      // Update status when toggle is changed
      lightToggle.addEventListener('change', () => {
        toggleStatus.textContent = lightToggle.checked ? 'On' : 'Off';
      });
    } else {
      console.error('Light toggle or status element not found.');
    }
  });
  
  

  document.addEventListener('DOMContentLoaded', () => {
    const songDisplay = document.getElementById('song-display');
    const musicPlayButton = document.getElementById('music-play');
    const musicPauseButton = document.getElementById('music-pause');
    const musicStopButton = document.getElementById('music-stop');
    const musicNextButton = document.getElementById('music-next');
  
    const songs = [
      "The Funky Chicken Dance",
      "I’m a Banana",
      "Hamster Dance",
      "Crazy Frog",
      "What Does the Fox Say?",
      "Baby Shark"
    ];
  
    let currentSongIndex = 0;
    let isPlaying = false;
  
    function displaySong() {
      songDisplay.textContent = songs[currentSongIndex];
    }
  
    musicPlayButton.addEventListener('click', () => {
      if (!isPlaying) {
        displaySong();
        isPlaying = true;
      }
    });
  
    musicPauseButton.addEventListener('click', () => {
      isPlaying = false;
      songDisplay.textContent = "Paused";
    });
  
    musicStopButton.addEventListener('click', () => {
      isPlaying = false;
      songDisplay.textContent = "Stopped";
    });
  
    musicNextButton.addEventListener('click', () => {
      if (isPlaying) {
        currentSongIndex = (currentSongIndex + 1) % songs.length;
        displaySong();
      }
    });
  });
  
  