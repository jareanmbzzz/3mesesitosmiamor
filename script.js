const homeScreen = document.getElementById("homeScreen");
const letterScreen = document.getElementById("letterScreen");
const reasonsScreen = document.getElementById("reasonsScreen");
const finalScreen = document.getElementById("finalScreen");

const openLetterBtn = document.getElementById("openLetter");
const toReasonsBtn = document.getElementById("toReasons");
const toFinalBtn = document.getElementById("toFinal");
const readAgainBtn = document.getElementById("readAgain");

const musicToggle = document.getElementById("musicToggle");
const musicPanel = document.getElementById("musicPanel");
const playPauseBtn = document.getElementById("playPauseBtn");
const volumeRange = document.getElementById("volumeRange");
const volumeValue = document.getElementById("volumeValue");
const bgMusic = document.getElementById("bgMusic");
const reasonsList = document.getElementById("reasonsList");

const reasons = [
  "Prometo elegirte con amor todos los días.",
  "Prometo cuidar tu corazón con ternura.",
  "Prometo escucharte y estar siempre que necesites que este.",
  "Prometo tenerte paciencia en cada momento.",
  "Prometo recordarte lo mucho que te amo.",
  "Prometo sanar y mejorar todo.",
  "Prometo cuidar tus sentimientos.",
  "Prometo hacerte sonreír cada vez que pueda.",
  "Prometo tratarte con dulzura incluso en los días difíciles.",
  "Prometo no dar nunca por sentado tu amor.",
  "Prometo hacer tiempo para ti siempre.",
  "Prometo ser tu paz cuando la vida se sienta pesada.",
  "Prometo apoyar tus sueños.",
  "Prometo celebrar tus logros, incluso los más pequeños.",
  "Prometo sentirme orgulloso de ti cada día.",
  "Prometo abrazarte con palabras cuando te sientas mal.",
  "Prometo amarte de una forma que nadie mas lo hara.",
  "Prometo nunca dejar de agradecer que estes aqui conmigo.",
  "Prometo respetar tu corazón y tus límites.",
  "Prometo tratarte con cariño en cada etapa.",
  "Prometo ser leal a lo que sentimos.",
  "Prometo seguir aprendiendo a amarte mejor.",
  "Prometo estar para ti emocionalmente.",
  "Prometo guardar nuestros recuerdos con amor.",
  "Prometo no hacerte sentir sola.",
  "Prometo darte seguridad cuando la necesites.",
  "Prometo ser suave con tus miedos.",
  "Prometo animarte incluso desde lejos.",
  "Prometo hacer que los pequeños momentos sean los mejores.",
  "Prometo valorar siempre tu presencia en mi vida.",
  "Prometo hablarte con ternura siempre.",
  "Prometo ser real contigo siempre.",
  "Prometo extrañarte de la manera más bonita.",
  "Prometo agradecerte cada día.",
  "Prometo amar también tus pequeños detalles.",
  "Prometo no cansarme de cuidarte.",
  "Prometo darte espacio para sentir lo que sientes.",
  "Prometo ser alguien con quien te sientas segura.",
  "Prometo amarte con calma y no con confusión.",
  "Prometo llevar calidez a tus días.",
  "Prometo quedarme a tu lado de la manera en que pueda estarlo siempre.",
  "Prometo hacer que nuestro amor se sienta como hogar por siempre.",
  "Prometo notar las pequeñas cosas que son importantes para ti.",
  "Prometo no dejar de admirarte.",
  "Prometo entenderte cuando la vida se complique.",
  "Prometo elegir el amor antes que el orgullo.",
  "Prometo recordarte que eres importante para mí.",
  "Prometo cuidar tu sonrisa como algo valioso.",
  "Prometo ser cuidadoso con tu corazón.",
  "Prometo seguir intentándolo incluso cuando sea difícil.",
  "Prometo amarte más allá de la distancia.",
  "Prometo responderte siempre con cariño.",
  "Prometo hacerte sentir valorada.",
  "Prometo ser tu consuelo cuando pueda.",
  "Prometo nunca dejar de pensar bonito de ti.",
  "Prometo quedarme en los días buenos y en los no tan buenos.",
  "Prometo cuidar lo que construimos juntos.",
  "Prometo ser una parte bonita de tu vida.",
  "Prometo hacerte sentir acompañada.",
  "Prometo querer verte feliz siempre.",
  "Prometo apoyarte incluso cuando dudes de ti misma en algo.",
  "Prometo mirarte con amor siempre.",
  "Prometo no dejar que se apague lo bonito entre nosotros.",
  "Prometo quererte con intención.",
  "Prometo respetar tus silencios.",
  "Prometo estar orgulloso de la persona que eres.",
  "Prometo nunca olvidar lo especial que eres para mí.",
  "Prometo hacerte sentir amado en los detalles.",
  "Prometo cuidar nuestra conexión.",
  "Prometo elegir la comprensión antes que los enojos.",
  "Prometo ser paciente con nuestros procesos.",
  "Prometo alegrarme por tus avances.",
  "Prometo hacerte sentir en confianza conmigo.",
  "Prometo quedarme en tu corazón con amor bonito.",
  "Prometo nunca jugar con tus sentimientos.",
  "Prometo darte razones para sentirte querida.",
  "Prometo acompañarte incluso en la distancia.",
  "Prometo amarte con sinceridad.",
  "Prometo no dejar que olvides cuánto significas para mí.",
  "Prometo ser dulce contigo sin cansarme.",
  "Prometo darte mi atención de verdad.",
  "Prometo seguir eligiéndote una y otra vez.",
  "Prometo admirar tu esencia y no solo tus momentos lindos.",
  "Prometo querer tu alma, tu forma de ser y tu corazón.",
  "Prometo quedarme en tus recuerdos de la forma más hermosa.",
  "Prometo cuidar lo que me haces sentir.",
  "Prometo convertir el cariño en acciones.",
  "Prometo estar contigo con el corazón abierto siempre.",
  "Prometo darte amor sincero.",
  "Prometo no rendirme fácil con lo nuestro.",
  "Prometo ser un lugar bonito para tu corazón.",
  "Prometo amarte con detalles, tiempo y ternura.",
  "Prometo ser luz para ti cuando todo este oscuro en su vida.",
  "Prometo nunca dejar de hacerte sentir especial y unica.",
  "Prometo hablar de ti con cariño y mucho amor.",
  "Prometo ser tu calma cuando el mundo pese demasiado.",
  "Prometo construir contigo algo lindo y real por siempre.",
  "Prometo cuidar cada parte de este amor.",
  "Prometo amarte bonito, con paciencia, lealtad y verdad.",
  "Prometo que mi corazón y alma siempre va a guardar un lugar especial para ti."
];

function setOverlay(open) {
  document.body.classList.toggle("overlay-open", open);
}

function hideAllScreens() {
  letterScreen.classList.add("hidden");
  reasonsScreen.classList.add("hidden");
  finalScreen.classList.add("hidden");
  setOverlay(false);
}

function showScreen(screen) {
  hideAllScreens();
  screen.classList.remove("hidden");
  setOverlay(true);
}

function fillReasons() {
  reasonsList.innerHTML = "";
  reasons.forEach((reason) => {
    const li = document.createElement("li");
    li.textContent = reason;
    reasonsList.appendChild(li);
  });
}

fillReasons();

openLetterBtn.addEventListener("click", () => {
  showScreen(letterScreen);
});

toReasonsBtn.addEventListener("click", () => {
  showScreen(reasonsScreen);
});

toFinalBtn.addEventListener("click", () => {
  showScreen(finalScreen);
});

readAgainBtn.addEventListener("click", () => {
  hideAllScreens();
  window.scrollTo({ top: 0, behavior: "smooth" });
});

[letterScreen, reasonsScreen, finalScreen].forEach((screen) => {
  screen.addEventListener("click", (e) => {
    if (e.target === screen) {
      hideAllScreens();
    }
  });
});

volumeRange.addEventListener("input", () => {
  const volume = Number(volumeRange.value) / 100;
  bgMusic.volume = volume;
  volumeValue.textContent = `${volumeRange.value}%`;
});

bgMusic.volume = 0;

function updateMusicIcons() {
  const icon = bgMusic.paused ? "▶" : "Ⅱ";
  playPauseBtn.textContent = icon;
  musicToggle.querySelector(".music-toggle-icon").textContent = icon;
}

function openMusicPanel() {
  musicPanel.classList.remove("hidden");
  musicToggle.setAttribute("aria-expanded", "true");
}

function closeMusicPanel() {
  musicPanel.classList.add("hidden");
  musicToggle.setAttribute("aria-expanded", "false");
}

musicToggle.addEventListener("click", () => {
  const isHidden = musicPanel.classList.contains("hidden");

  if (isHidden) {
    openMusicPanel();
  } else {
    closeMusicPanel();
  }
});

playPauseBtn.addEventListener("click", async () => {
  try {
    if (bgMusic.paused) {
      await bgMusic.play();
    } else {
      bgMusic.pause();
    }
    updateMusicIcons();
  } catch (error) {
    console.log("Audio blocked until user interaction:", error);
  }
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    hideAllScreens();
    closeMusicPanel();
  }
});

bgMusic.addEventListener("play", updateMusicIcons);
bgMusic.addEventListener("pause", updateMusicIcons);

updateMusicIcons();
