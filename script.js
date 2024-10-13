const questions = [
    {
        lyrics: "看不見你的笑我怎麼睡得著，你的聲音這麼近我卻抱不到", // 歌詞 1
        correctSong: "彩虹" // 正確的歌名
    },
    {
        lyrics: "城堡為愛守著秘密，而我為你守著回憶", // 歌詞 2
        correctSong: "明明就" // 正確的歌名
    },
    {
        lyrics: "愛才送到，你卻已在別人懷抱", // 歌詞 3
        correctSong: "開不了口" // 正確的歌名
    },
    {
        lyrics: "我很想記得可是我記不得", // 歌詞 3
        correctSong: "半島鐵盒" // 正確的歌名
    },
    {
        lyrics: "管家是一隻會說法語舉止優雅的豬", // 歌詞 3
        correctSong: "威廉古堡" // 正確的歌名
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
