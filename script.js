const questions = [
    {
        lyrics: "We're no strangers to love, you know the rules and so do I", // 歌詞 1
        correctSong: "Never Gonna Give You Up" // 正確的歌名 1
    },
    {
        lyrics: "I got this feeling inside my bones, it goes electric, wavy when I turn it on", // 歌詞 2
        correctSong: "Can't Stop the Feeling!" // 正確的歌名 2
    },
    {
        lyrics: "Just a small town girl, living in a lonely world", // 歌詞 3
        correctSong: "Don't Stop Believin'" // 正確的歌名 3
    }
];

let currentQuestionIndex = 0;

// 載入當前題目
function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    document.getElementById("lyrics").textContent = currentQuestion.lyrics;
    document.getElementById("songInput").value = '';
    document.getElementById("resultMessage").classList.add("hidden");
}

// 處理猜歌的按鈕點擊事件
document.getElementById("submitBtn").addEventListener("click", () => {
    const userGuess = document.getElementById("songInput").value.trim();
    const currentQuestion = questions[currentQuestionIndex];
    const resultMessage = document.getElementById("resultMessage");

    if (userGuess === currentQuestion.correctSong) {
        resultMessage.textContent = "恭喜你，答對了！";
        resultMessage.style.color = "green";
    } else {
        resultMessage.textContent = "錯誤，請再試一次！";
        resultMessage.style.color = "red";
    }

    resultMessage.classList.remove("hidden");

    // 如果猜對，載入下一題
    if (userGuess === currentQuestion.correctSong) {
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            setTimeout(() => {
                loadQuestion();
            }, 2000); // 等待 2 秒後載入下一題
        } else {
            resultMessage.textContent = "恭喜你完成所有挑戰！";
            document.getElementById("submitBtn").disabled = true; // 禁用按鈕
        }
    }
});

// 在頁面加載時自動載入第一題
window.onload = loadQuestion;
