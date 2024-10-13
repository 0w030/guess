const questions = [
    {
        lyrics: "就算是我不懂，能不能原諒我", // 歌詞 1
        correctSong: "退後" // 正確的歌名
    },
    {
        lyrics: "在月光下一直找尋，那想念的身影", // 歌詞 2
        correctSong: "軌跡" // 正確的歌名
    },
    {
        lyrics: "糖果罐裡好多顏色，微笑卻不甜了", // 歌詞 3
        correctSong: "明明就" // 正確的歌名
    }
    
];

let currentQuestionIndex = 0;

function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    document.getElementById("lyrics").textContent = currentQuestion.lyrics;
    document.getElementById("songInput").value = '';
    document.getElementById("resultMessage").classList.add("hidden");
}

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

// 初始載入第一題
loadQuestion();
