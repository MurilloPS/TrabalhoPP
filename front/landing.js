function startQuiz() {
    const level = document.getElementById("level-select").value;
    const topic = document.getElementById("topic-select").value;

    if (!level || !topic) {
        alert("Por favor, selecione um nível e um tema.");
        return;
    }

    localStorage.setItem("quizLevel", level);
    localStorage.setItem("quizTopic", topic);

    window.location.href = "index.html"; 
}
