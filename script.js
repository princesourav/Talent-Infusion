function menuAnimation() {
  var menu = document.querySelector("header p");
  var full = document.querySelector("#full-scr");
  var navimg = document.querySelector("header img");
  var flag = 0;
  menu.addEventListener("click", function () {
    if (flag == 0) {
      full.style.top = 0;
      navimg.style.opacity = 0;
      flag = 1;
    } else {
      full.style.top = "-200%";
      navimg.style.opacity = 1;
      flag = 0;
    }
  });

  document.querySelectorAll("#full-div1 a").forEach((link) => {
    link.addEventListener("click", () => {
      const fullScr = document.getElementById("full-scr");
      var navimg = document.querySelector("header img");

      fullScr.style.top = "-200%";
      navimg.style.opacity = 1;
    });
  });
}


function time() {
  function getCurrentTime() {
    var currentDate = new Date();
    var hours = currentDate.getHours();
    var minutes = currentDate.getMinutes();
    var ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    var currentTime = hours + ":" + minutes + " " + ampm;
    return currentTime;
  }

  function updateTime() {
    document.getElementById("currentTime").textContent = getCurrentTime();
  }

  updateTime();
  setInterval(updateTime, 1000);
}

function readMore() {
  const readMoreText = document.getElementById("readMoreText");
  const additionalContent = document.getElementById("additionalContent");

  readMoreText.addEventListener("click", function () {
    additionalContent.classList.toggle("hidden");

    if (additionalContent.classList.contains("hidden")) {
      readMoreText.textContent = "Read More";
    } else {
      readMoreText.textContent = "Read Less";

      setTimeout(function () {}, 500);
    }
  });
}

document.addEventListener("DOMContentLoaded", readMore);

function openPopup(card) {
  var title = card.querySelector('h3').innerText;
  var content = card.querySelector('p').innerText;
  var popup = document.getElementById('popup');
  popup.innerHTML = `<h2>${title}</h2><p>${content}</p>`;
  popup.style.display = 'block';
  document.querySelector('.overlay').style.display = 'block';
}

function closePopup() {
  document.getElementById('popup').style.display = 'none';
  document.querySelector('.overlay').style.display = 'none';
}


time();
menuAnimation();
