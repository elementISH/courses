// countdown

let end = new Date('12/31/2021 11:50 AM');
    
let sec = 1000;
let min = sec * 60;
let hr = min * 60;
let d = hr * 24;
let timer;

function showRemaining() {
    let now = new Date();
    let distance = end - now;
    if (distance < 0) {

        clearInterval(timer);
        document.getElementById('countdown').innerHTML = 'ITS OUT!';

        return;
    }
    let days = Math.floor(distance / d);
    let hours = Math.floor((distance % d) / hr);
    let minutes = Math.floor((distance % hr) / min);
    let seconds = Math.floor((distance % min) / sec);

    document.getElementById('days').innerHTML = ('0' + days).slice(-2);
    document.getElementById('hours').innerHTML = ('0' + hours).slice(-2);
    document.getElementById('mins').innerHTML = ('0' + minutes).slice(-2);
    document.getElementById('seconds').innerHTML = ('0' + seconds).slice(-2);
}

timer = setInterval(showRemaining, 1000);

// initializing swiper

var swiper = new Swiper(".mySwiper", {
    grabCursor: true,
    effect: "creative",
    creativeEffect: {
      prev: {
        shadow: true,
        translate: [0, 0, -400],
      },
      next: {
        translate: ["100%", 0, 0],
      },
    },
});

// increment numbers

$(document).ready(function() {
  getNumberElements()
});

function getNumberElements(){
  $('.increment-numbers').each(function(numberInList, element) {
      incrementNumbers(element)
  }).promise().done( function(element){
      $.fn.digits = function(){ 
          return this.each(function(){ 
              $(this).text( $(this).text().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,") ); 
          })
      }
      $(element).digits()
  })
}

function incrementNumbers(element){
  $(element).prop('Counter',0).animate({
      Counter: $(element).text()
  }, {
      duration: 4000,
      easing: 'swing',
      step: function (now) {
          $(element).text(Math.ceil(now));
        }
  
  });
}
