// Get selector
let ar_hour     = document.querySelector('.hour');
let ar_minute   = document.querySelector('.minute');
let ar_second   = document.querySelector('.second');
let timer_d     = document.querySelector('.time');
let clock       = document.querySelector('.clock');

// digital time selector get
let d_hour = document.querySelector('.hour');
let d_minute = document.querySelector('.minute');
let d_second = document.querySelector('.second'); 

let synth = window.speechSynthesis;


setInterval(()=> {
  // get date object
  let time      = new Date();
  let hours     = time.getHours();
  let minutes   = time.getMinutes();
  let seconds   = time.getSeconds();

  let sound = new Audio("data:audio/wav;base64,//uQxAAAAAAAAAAAAAAAAAAAAAAASW5mbwAAAA8AAAADAAAGhgBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVWqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqr///////////////////////////////////////////8AAAA8TEFNRTMuOTlyAc0AAAAAAAAAABSAJAOkQgAAgAAABobXqlfbAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//uQxAAAElTlJnQ3gAsrLGn/MYAAAAABPREREREAwN9AAAJ1YrHkT/CkNATcQsI+DnBzhIxxq4SQALAH4N8XMnZBx6yFmWdBoE4HoHoJwaDgpycFwcFOSsW8etC1ILeJuLmPWQsuZ1ucBD0PZ90ePIlP83ve9//SlNf4vffpSms0ePHkSjgwAEYCMw8PDwx3/sR///xw94eHn/gI/AADw8Pf//+AeHh8S1vessIqmogBAQDJZW1v8BLEWckg7i9m1LcOb171TiVgv0RjAmmGkJjOGBgiCZ4GC/7IFU1TO+zpYZaL+lknijVDae9+kAjv01DAtaT1aGA3DcGu7EksyPskgO+5TW5fJ37o1bmXUr7W7VDOXq1ypyWTcXiE58RzjNNg78HSi/MTuFipFJXT0m70bt9cnG/e1PQNUo5FLbF7GO27VLLYbi9XefN2/xf9iLhSm9Krr81qWrEss7HP/tf95c////////+MUv5HkK3hsapFVodiUyAJIKlZ8hauJjwEYh2RXaag4pavVnbsuKr7GUNwAQAcouJpMUNQoXFg//uSxBcAEr1dU/2HgBq9Mak+sPACtrjusNxhS3esUNxfPo3isTNCfbtChRZGZijRawn2cbkfMS1llzXDFGttmewt7xGhb3W1reWb99luZt6/rnf//zSe295rbG3r7OpYkv///////rXUkb//+38HP///94teovyOFYyf82SMiQ7ohkSiCnOosVRmBZFUyBZgqPifY0VI9JNhi/hE5opeMTmCUPxwTTIrDrY3FIKBsJ5AsrDkiFvJgytqjZ3+9Uj7ampQTKQ5H3hJybagiZ2yN63SG7ruHvw7v49IbQzyVj6h4pN4D1XwHG8RymzEyzuG8x5M7hUvCeWeOc+mP3dscJ4/fUa+8tE/pqn7/4h31jGsZve8ff/////u9y9i5+8xvf3/zE1P/mvy2o62VYcKgJgJgGYFQLRYLB+PxQA4JGEBABAiYQBf+YLAQ0eDCwLoP8FAkwJZ3TMCBX/P8DPHgR6TJ/zIAmqGQP0jAmXf/jKAICE0dMXNpTjOF//6iCrREHdIQg5TZfV9pd///hYQYQrGC+15Zdb6t79////l3aVaIf/7ksQ6gBXdJVn5zQAQAAA0g4AABGAsqa2l7z91f3S////+SAUWEvopDbS6ekr1qbOVS6Z1lv/////+LO84MSiURpn6l12c/62//WVY79JMQU1FMy45OS41qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqo=");

  ar_hour.style.transform   = `rotate(${getKeyPos(hours, 12)}deg)`;
  ar_minute.style.transform = `rotate(${getKeyPos(minutes, 60)}deg)`;
  ar_second.style.transform = `rotate(${getKeyPos(seconds, 60)}deg)`;

  sound.autoplay = true;
  sound.load();



  // check whether the hours is less then 10
  let hr;
  if (time.getHours() > 12) {
    // set hours
    hr = `0${time.getHours() - 12}`;
  } else {
    hr = time.getHours();
  }

  // check whether the minutes is less then 10
  let mn;
  if (time.getMinutes() < 10) {
    //set minuies
    mn = `0${time.getMinutes()}`;
  } else {
    //set minuies
    mn = time.getMinutes();
  }

  // check whether the seconds is less then 10
  let sec;
  if (time.getSeconds() < 10) {
    //set seconds
    sec = `0${time.getSeconds()}`;
  } else {
    //set seconds
    sec = time.getSeconds();
  }

  timer_d.innerHTML = '<span>' + '<strong>' + hr + '</strong>' + ' : ' + mn + ' : ' + '<small>' + sec +'</small>'+ '</span>';

}, 1000);

setInterval(()=> {
  let time = new Date();
  

  let hour;
  if (time.getHours() > 12) {
    // set hours
    hour = `${time.getHours() - 12}`;
  } else {
    hr = time.getHours();
  }

  // check whether the minutes is less then 10
  let min;
  if (time.getMinutes() < 10) {
    //set minuies
    min = `${time.getMinutes()}`;
  } else {
    //set minuies
    min = time.getMinutes();
  }

  var utterThis = new SpeechSynthesisUtterance(`The time is ${hour} ${min}`);
	synth.speak(utterThis);
}, 10000);



// create getKeyPos function 
function getKeyPos(current, range){
  return (current*360)/range;
}

function getRandomColor() {
  let letters = '0123456789ABCDEF';
  let color = '#';
  for (var i = 0; i < 6; i++ ) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

