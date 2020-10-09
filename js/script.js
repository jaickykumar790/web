 $(document).on('click', '#hidevideoplayer', function () {
     $('#video-player-container').remove();
 });

 $(document).on('click', '.video-wrapper', function () {
    var video = $(this).attr('href');
    $('body').append('<div div id = "video-player-container" > '+
            '<button id="hidevideoplayer">X</button>' +
            '<div id="video-player">' +
            '<video autoplay="" controls="" src="' + video + '"></video>' +
            '</div>' +
            '</div>'
            );
 });

 if (document.addEventListener) {
     document.addEventListener('contextmenu', function (e) {
         e.preventDefault();
     }, false);
 } else {
     document.attachEvent('oncontextmenu', function () {
         window.event.returnValue = false;
     });
 }