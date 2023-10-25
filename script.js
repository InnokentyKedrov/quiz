const TOKEN = "6576357682:AAEasTAVcLjZ46ikfLlx--OtG66QinL79IM";
const CHAT_ID = "-1002069195468";
const URI_API = `https:\\api.telegram.org/bot${TOKEN}/sendMessage`;
const main = document.querySelector(".main");

document.querySelector(".form").addEventListener("submit", function (e) {
  e.preventDefault();

  let message = `<b>Опрос об Илье Муромце</b>\n`;
  message += `<b>1. </b>${this.hero.value}\n`;
  message += `<b>2. </b>${this.area.value}\n`;
  message += `<b>3. </b>${this.murom.value}`;

  fetch(URI_API, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      chat_id: CHAT_ID,
      parse_mode: "html",
      text: message,
    }),
  })
    .then(() => {
      main.innerHTML = `<h1 class="title">Спасибо большое!<br>Ответ получен.</h1>`;
    })
    .catch((err) => console.warn(err))
    .finally(() => console.log("Конец"));
});
