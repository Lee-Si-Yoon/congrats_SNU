const body = document.querySelector('body');
const introPage = document.querySelector('.intro');
const introForm = introPage.querySelector('.intro__form');
const scene = document.querySelector('.scene__certificate');
const scene2 = document.querySelector('.scene__money');

const userName = introForm.querySelector('#username'),
  userGrade = introForm.querySelector('#usergrades');

function paintScene2(){
  const scene2Text = scene2.querySelector('h1');
  const currentName = userName.value;
  const currentGrade = Number(userGrade.value);
  const gradeMoney = currentGrade * 3653000;
  scene2Text.textContent = `${currentName}님은 이를 위해 ${gradeMoney}원을 쓰셨네요`;
}

function handleSubmit(e){
  e.preventDefault();
  body.style.overflowY = 'visible';
  scene.scrollIntoView({ block: 'start',  behavior: 'smooth' });
  paintScene2();
}

function refresh(){
  window.location.reload("Refresh")
}

function init(){
  introForm.addEventListener('submit', handleSubmit);
}
init();