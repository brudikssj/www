


// Instagram parallax
$('.parallax-instagram').parallax({
  imageSrc: 'assets/img/instagram.jpg'

});

// Portada parallax
$('.parallax-portada').parallax({
  imageSrc: 'assets/img/portada.jpg'
});

// ----------------------



// Cuenta Regresiva:

// Set the date we're counting down to
var countDownDate = new Date(fechaCuentaRegresiva).getTime();

// Update the count down every 1 second
var x = setInterval(function () {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("reloj").innerHTML = days + " días, " + hours + "hs, " +
    minutes + "m, " + seconds + "s ";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("reloj").innerHTML = "¡Llegó el gran día!";
    $('#reloj').prev('p').html('Listo...');
  }
}, 1000);

// ----------------------

// 2. This code loads the IFrame Player API code asynchronously.
      var tag = document.createElement('script');

      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[1];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      // 3. This function creates an <iframe> (and YouTube player)
      //    after the API code downloads.
      var player;

      function onYouTubeIframeAPIReady() {
        player = new YT.Player('player-musica-fondo', {
          height: '10',
          width: '10',
          playerVars: {
            playlist: 'pT68FS3YbQ4',
            loop: 1
          },
          events: {
            'onReady': onPlayerReady
          }
        })
      }

      // 4. The API will call this function when the video player is ready.
      function onPlayerReady(event) {
        event.target.setVolume(80)
        // event.target.playVideo();
      }

      // Pausar video
      function pauseVideo() {
        player.pauseVideo();
      }


      // Click en controlador musica
      $('body').on('click', '#play-pause-music', function(e) {

        e.preventDefault()

        // Estado actual
        var estadoMusic = $(this).attr('data-estado-music')

        // Pause music
        if (estadoMusic == 'pause') {
          $(this).attr('data-estado-music', 'play');
          // animMusicAnimIcon.play()
          player.playVideo()

        }

        // Play music
        if (estadoMusic == 'play') {
          $(this).attr('data-estado-music', 'pause');
          player.pauseVideo();
         // animMusicAnimIcon.stop();
        }


      });

onYouTubeIframeAPIReady()

