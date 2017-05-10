﻿var button = document.querySelectorAll('.navUl > .nav > li');

Array.prototype.forEach.call(button, function (b)
{
    b.addEventListener('click', createRipple);
});

function createRipple(e)
{
    var circle = document.createElement('div');
    this.appendChild(circle);

    var d = Math.max(this.clientWidth, this.clientHeight);

    circle.style.width = circle.style.height = d + 'px';

    circle.style.left = e.clientX - this.offsetLeft - d / 2 + 'px';
    circle.style.top = e.clientY - this.offsetTop - d / 2 + 'px';



    circle.classList.add('ripple');
}