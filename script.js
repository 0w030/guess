const correctSong = "彩虹"; // 請替換成正確的歌名
const submitBtn = document.getElementById("submitBtn");
const songInput = document.getElementById("songInput");
const resultMessage = document.getElementById("resultMessage");

submitBtn.addEventListener("click", () => {
    const userGuess = songInput.value.trim();
    if (userGuess === correctSong) {
        resultMessage.textContent = "恭喜你，答對了！";
        resultMessage.style.color = "green";
    } else {
        resultMessage.textContent = "錯誤，請再試一次！";
        resultMessage.style.color = "red";
    }
    resultMessage.classList.remove("hidden");
});
