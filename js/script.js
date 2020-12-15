$('button').on('click', function() {
  var activeClass = 'active';
  var nextElement = $(this).next().attr('id'),
      sound = document.getElementById(nextElement);
  sound.play();

  var buttons = document.querySelectorAll('button');
  buttons.forEach((button) => {
    $(button).removeClass('active');
  });
  $(this).toggleClass(activeClass);
});

function ativarTecla(tecla) {
  var activeClass = 'active';
  var [...buttons] = document.querySelectorAll('button');
  buttons.forEach((button) => {
    $(button).removeClass(activeClass);
    if (button.innerHTML == tecla) {
      button.classList.toggle(activeClass);
    }
  });
}

Mousetrap.bind('a', function() { document.getElementById('a').play(); this.ativarTecla('a'); });
Mousetrap.bind('b', function() { document.getElementById('b').play(); this.ativarTecla('b'); });
Mousetrap.bind('c', function() { document.getElementById('c').play(); this.ativarTecla('c'); });
Mousetrap.bind('d', function() { document.getElementById('d').play(); this.ativarTecla('d'); });
Mousetrap.bind('e', function() { document.getElementById('e').play(); this.ativarTecla('e'); });
Mousetrap.bind('f', function() { document.getElementById('f').play(); this.ativarTecla('f'); });
Mousetrap.bind('g', function() { document.getElementById('g').play(); this.ativarTecla('g'); });
Mousetrap.bind('h', function() { document.getElementById('h').play(); this.ativarTecla('h'); });
Mousetrap.bind('i', function() { document.getElementById('i').play(); this.ativarTecla('i'); });
Mousetrap.bind('j', function() { document.getElementById('j').play(); this.ativarTecla('j'); });
Mousetrap.bind('k', function() { document.getElementById('k').play(); this.ativarTecla('k'); });
Mousetrap.bind('l', function() { document.getElementById('l').play(); this.ativarTecla('l'); });
Mousetrap.bind('m', function() { document.getElementById('m').play(); this.ativarTecla('m'); });
Mousetrap.bind('n', function() { document.getElementById('n').play(); this.ativarTecla('n'); });
Mousetrap.bind('o', function() { document.getElementById('o').play(); this.ativarTecla('o'); });
Mousetrap.bind('p', function() { document.getElementById('p').play(); this.ativarTecla('p'); });
Mousetrap.bind('q', function() { document.getElementById('q').play(); this.ativarTecla('q'); });
Mousetrap.bind('r', function() { document.getElementById('r').play(); this.ativarTecla('r'); });
Mousetrap.bind('s', function() { document.getElementById('s').play(); this.ativarTecla('s'); });
Mousetrap.bind('t', function() { document.getElementById('t').play(); this.ativarTecla('t'); });
Mousetrap.bind('u', function() { document.getElementById('u').play(); this.ativarTecla('u'); });
Mousetrap.bind('v', function() { document.getElementById('v').play(); this.ativarTecla('v'); });
Mousetrap.bind('w', function() { document.getElementById('w').play(); this.ativarTecla('w'); });
Mousetrap.bind('x', function() { document.getElementById('x').play(); this.ativarTecla('x'); });
Mousetrap.bind('y', function() { document.getElementById('y').play(); this.ativarTecla('y'); });
Mousetrap.bind('z', function() { document.getElementById('z').play(); this.ativarTecla('z'); });