var iframe = document.getElementsById('iframeid');
var player = $f( iframe );

player.addEventListener('click', function() {
    player.api('setVolume', 0); 
});