function getPilihanComputer() {
  const comp = Math.random();
  if (comp < 0.34) return "gajah";
  if (comp >= 0.34 && comp < 0.67) return "orang";
  return "semut";
}

function getHasil(comp, player) {
  if (player == comp) return "SERI!";
  if (player == "gajah") return comp == "orang" ? "MENANG!" : "KALAH!";
  if (player == "orang") return comp == "gajah" ? "KALAH!" : "MENANG!";
  if (player == "semut") return comp == "orang" ? "KALAH!" : "MENANG!";
  return "memasukkan pilihan yang salah!";
}

function putar() {
  const imgComp = document.querySelector(".img-komputer");
  const gambar = ["gajah", "semut", "orang"];
  let i = 0;
  const waktuMulai = new Date().getTime();

  const intervalId = setInterval(function () {
    if (new Date().getTime() - waktuMulai > 1000) {
      clearInterval(intervalId); // ✅ stop setelah 1 detik
      return;
    }
    imgComp.setAttribute("src", "img/" + gambar[i++] + ".png");
    if (i === gambar.length) i = 0;
  }, 100);
}

const pilihan = document.querySelectorAll("li img");
pilihan.forEach(function (p) {
  p.addEventListener("click", function () {
    const pilihanComputer = getPilihanComputer();
    const pilihanPlayer = p.className;
    const hasil = getHasil(pilihanComputer, pilihanPlayer);

    putar(); // animasi komputer berputar

    setTimeout(function () {
      const imgComp = document.querySelector(".img-komputer");
      imgComp.setAttribute("src", "img/" + pilihanComputer + ".png");

      const info = document.querySelector(".info");
      info.innerHTML = hasil;
    }, 1000); // delay sesuai durasi putar()
  }); // ✅ tutup eventListener
}); // ✅ tutup forEach

const scorePlayer = document.querySelector("#score-player");
const scoreComputer = document.querySelector("#score-komputer");
let playerWinCount = 0;
let computerWinCount = 0;
const info = document.querySelector(".info");

const pilihan2 = document.querySelectorAll("li img");
pilihan2.forEach(function (p) {
  p.addEventListener("click", function () {
    const pilihanComputer = getPilihanComputer();
    const pilihanPlayer = p.className;
    const hasil = getHasil(pilihanComputer, pilihanPlayer);

    putar(); // animasi komputer berputar

    setTimeout(function () {
      const imgComp = document.querySelector(".img-komputer");
      imgComp.setAttribute("src", "img/" + pilihanComputer + ".png");
      if (hasil === "MENANG!") {
        playerWinCount++;
        scorePlayer.innerHTML = playerWinCount;
      } else if (hasil === "KALAH!") {
        computerWinCount++;
        scoreComputer.innerHTML = computerWinCount;
      }
      info.innerHTML = hasil;
    }, 1000); // delay sesuai durasi putar()
  }); // ✅ tutup eventListener
}); // ✅ tutup forEach

//mereset ulang score
const resetButton = document.querySelector("#reset");
resetButton.addEventListener("click", function () {
  playerWinCount = 0;
  computerWinCount = 0;
  scorePlayer.innerHTML = "00";
  scoreComputer.innerHTML = "00";
  info.innerHTML = "SCORE TELAH DI RESET";
});

//   const pilihanPlayer = pGajah.className;
//   const hasil = getHasil(pilihanComputer, pilihanPlayer);

//   const imgComp = document.querySelector(".img-komputer");
//   imgComp.setAttribute("src", "img/" + pilihanComputer + ".png");

//   const info = document.querySelector(".info");
//   info.innerHTML = hasil;
// });
// const pOrang = document.querySelector(".orang");
// pOrang.addEventListener("click", function () {
//   const pilihanComputer = getPilihanComputer();
//   const pilihanPlayer = pOrang.className;
//   const hasil = getHasil(pilihanComputer, pilihanPlayer);

//   const imgComp = document.querySelector(".img-komputer");
//   imgComp.setAttribute("src", "img/" + pilihanComputer + ".png");
//   const info = document.querySelector(".info");
//   info.innerHTML = hasil;
// });
// const pSemut = document.querySelector(".semut");
// pSemut.addEventListener("click", function () {
//   const pilihanComputer = getPilihanComputer();
//   const pilihanPlayer = pSemut.className;
//   const hasil = getHasil(pilihanComputer, pilihanPlayer);

//   const imgComp = document.querySelector(".img-komputer");
//   imgComp.setAttribute("src", "img/" + pilihanComputer + ".png");
//   const info = document.querySelector(".info");
//   info.innerHTML = hasil;
// });
