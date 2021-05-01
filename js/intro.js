const body = document.querySelector("body");
const introPage = document.querySelector(".intro");
const introForm = introPage.querySelector(".intro__form");
const scene = document.querySelector(".scene__certificate");
const scene2 = document.querySelector(".scene__money");

const userName = introForm.querySelector("#username"),
  userGrade = introForm.querySelector("#usergrades");

function paintResult(gM, cG) {
  // Variables
  const week = 52;
  const defaultLabor = 8720;
  //Html
  const result0 = document.querySelector("#result__0");
  const resultContent = document.querySelector(".result__content"),
    result1 = resultContent.querySelector("#result__1");
  const resultKey = document.querySelector(".result__key");

  result0.textContent = `${cG}학기 등록`;
  result1.textContent = `위 사람은 ${cG}학기 등록하여 총 ${gM}원을 지불하였습니다.`;

  resultKey.textContent = `학위번호 : 서울대${week * defaultLabor * cG}`;
}

function paintScene2() {
  const scene2Text = scene2.querySelector("h1");
  const currentName = userName.value;
  const currentGrade = Number(userGrade.value);
  const gradeMoney = currentGrade * 3653000;
  scene2Text.textContent = `${currentName}님은 이를 위해 ${gradeMoney}원을 쓰셨네요`;
  paintResult(gradeMoney, currentGrade);
}

function handleSubmit(e) {
  e.preventDefault();
  body.style.overflowY = "visible";
  scene.scrollIntoView({ block: "start", behavior: "smooth" });
  paintScene2();
}

function makeClock() {
  // Variables
  const date = new Date();
  const year = date.getFullYear();
  const monthText = date.getMonth() + 1;
  const day = date.getDate();
  // Html
  const resultTime = document.querySelectorAll(".result__time");
  resultTime.forEach(function(e) {
    e.querySelector("span").textContent = `${year}년 ${monthText}월 ${day}일`
  });

}

function refresh() {
  window.location.reload("Refresh");
}

function init() {
  introForm.addEventListener("submit", handleSubmit);
  makeClock();
}
init();
