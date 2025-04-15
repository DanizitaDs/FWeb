function mudarSaudacao() {
    const mensagens = [
      "Você é meu doce preferido nessa Páscoa!",
      "Uma Páscoa cheia de amor e chocolate!",
      "Você faz meu coração derreter como chocolate!",
      "Que essa Páscoa seja só alegria ao seu lado!"
    ];
    const texto = document.getElementById("mensagem");
    texto.innerHTML = mensagens[Math.floor(Math.random() * mensagens.length)];
  }
  
  function revelarSurpresa() {
    const img = document.createElement("img");
    img.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnO77C2AknNpsH6_EIYGp3IybZm-Z4MJYqMg&s"; // imagem de coelhinho
    img.classList.add("surpresa");
    document.getElementById("cartao").appendChild(img);
  }
  
  function mudarCores() {
    const cores = ["#fffafc", "#ffeef6", "#e0ffff", "#fffde7"];
    const cartao = document.getElementById("cartao");
    cartao.style.background = cores[Math.floor(Math.random() * cores.length)];
  }
  
  function tocarSom() {
    const som = document.getElementById("somPascoa");
    som.play();
  }
  
  document.body.addEventListener("click", () => {
    for (let i = 0; i < 8; i++) {
      const confete = document.createElement("div");
      confete.className = "confete";
      confete.style.background = getRandomColor();
      confete.style.left = Math.random() * window.innerWidth + "px";
      confete.style.top = "-20px";
      document.body.appendChild(confete);
      setTimeout(() => confete.remove(), 1500);
    }
  });
  
  function getRandomColor() {
    const cores = ["#ff69b4", "#add8e6", "#ffd700", "#90ee90", "#dda0dd"];
    return cores[Math.floor(Math.random() * cores.length)];
  }