/*

Begin by following the steps in the workshop notes.

Next, add the following features:
- the gap goes red when the puck is over it
- the puck 'teleports' to the opposite boundary when it crosses one (think asteroids/snake)
- create an item that makes the puck bigger
- create an item that makes the puck smaller

*/

//declaring variables for puck
var puck_x = 210;
var puck_y = 210;

document.getElementById('puck').style.top = puck_y + 'px';
document.getElementById('puck').style.left = puck_x + 'px';

//move left
document.getElementById('left').addEventListener('click', function(){
    puck_x -= 50;
    document.getElementById('puck').style.left = puck_x + 'px'
});

//move right
document.getElementById('right').addEventListener('click', function(){
    puck_x += 50;
    document.getElementById('puck').style.left = puck_x + 'px'
});

//move up
document.getElementById('up').addEventListener('click', function(){
    puck_x -= 50;
    document.getElementById('puck').style.top = puck_x + 'px'
});

//move down
document.getElementById('down').addEventListener('click', function(){
    puck_x += 50;
    document.getElementById('puck').style.top = puck_x + 'px'
});