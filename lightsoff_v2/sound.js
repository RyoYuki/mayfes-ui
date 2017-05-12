//var sample_play_sound = new Audio("Puzzle Theme1.wav");
// var sample_play_sound = new Audio("No Monkey.wav");
var sample_play_sound = new Audio("Defense Line.mp3");

function playSound()
{
    sample_play_sound.play();
}

function stopSound()
{
    sample_play_sound.pause();
    sample_play_sound.currentTime = 0;
}
