var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/1559798617_1.png') {
      myImage.setAttribute ('src','images/liza.png');
    } else {
      myImage.setAttribute ('src','images/1559798617_1.png');
    }
}
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');
function setUserName() {
    var myName = prompt('Тогда пошли гулять скорее. Введи число');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Увидимся, ' + myName + "Сообщите Вове он удалит сайт";
  }
  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'До встречи, ' + storedName;
  }
 myButton.onclick = function() {
    setUserName();
  }