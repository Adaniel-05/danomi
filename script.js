const scenes = [
  {
    image: "img/omori0.1.gif",
    text: "Wuola mi amor, dejame contarte la historia de como alguien especial me cambio la vida.",
    bgColor: "#000000",
    textColor: "#ffffff",
    boxBg: "rgba(0, 0, 0, 0.8)"
  },
    {
    image: "img/omori.webp",
    text: "Érase una vez un chico que sonreía poco. Vivía en silencio, con el corazón cerrado y la idea de que el amor no era para él.",
    bgColor: "#000000",
    textColor: "#ffffff",
    boxBg: "rgba(0, 0, 0, 0.8)"
  },
  {
    image: "img/omori3.gif",
    text: "Su vida era gris, sin emoción. No buscaba a nadie, porque sentía que no tenía nada que ofrecer.",
    bgColor: "#2a0a1c",
    textColor: "#ffffff",
    boxBg: "rgba(42, 10, 28, 0.7)"
  },
  {
    image: "img/message.gif",
    text: "Pero un día, se atrevió. Dio un pequeño paso y escribió un 'hola' a una chica que encontró en internet.",
    bgColor: "#501631",
    textColor: "#ffffff",
    boxBg: "rgba(80, 22, 49, 0.65)"
  },
  {
    image: "img/mari0.gif",
    text: "Desde el primer momento, esa chica brilló. Con sus palabras, su ternura y su forma de ser, lo cautivó sin esfuerzo.",
    bgColor: "#80314e",
    textColor: "#ffffff",
    boxBg: "rgba(128, 49, 78, 0.55)"
  },
  {
    image: "img/omorismile.gif",
    text: "Su mundo cambió. Volvió a reír, a soñar, a desvelarse pensando en ella. Y sin darse cuenta, empezó a mejorar física y mentalmente, por ella y para ella.",
    bgColor: "#b85772",
    textColor: "#000000",
    boxBg: "rgba(184, 87, 114, 0.4)"
  },
  {
    image: "img/mari2.gif",
    text: "Se enamoró profundamente. Y empezó a imaginar un futuro juntos: una vida, un hogar, una familia... con ella.",
    bgColor: "#e89aaa",
    textColor: "#000000",
    boxBg: "rgba(232, 154, 170, 0.25)"
  },
  {
    image: "img/final.gif",
    text: "Ella le dio vuelta a su mundo. Le enseñó que el amor verdadero existe. Y él le prometió amarla incondicionalmente, por el resto de su vida.",
    bgColor: "#ffd1dc",
    textColor: "#000000",
    boxBg: "rgba(255, 209, 220, 0.2)"
  }
];



let currentScene = 0;
let charIndex = 0;
let typingInterval;
const textElement = document.getElementById("text");
const imageElement = document.getElementById("scene-image");

function typeText() {
  const fullText = scenes[currentScene].text;
  if (charIndex < fullText.length) {
    textElement.textContent += fullText.charAt(charIndex);
    charIndex++;
    typingInterval = setTimeout(typeText, 40);
  } else {
    // Mostrar el mensaje "Toca para continuar"
    document.getElementById("continue-hint").style.opacity = 1;
  }
}


function showScene() {
  textElement.textContent = "";
  charIndex = 0;
  imageElement.src = scenes[currentScene].image;
  clearTimeout(typingInterval);
  typeText();
  document.getElementById("container").style.backgroundColor = scenes[currentScene].bgColor;
    document.getElementById("text-box").style.color = scene.textColor;
  document.getElementById("text-box").style.backgroundColor = scene.boxBg;
}

function nextScene() {
  if (charIndex < scenes[currentScene].text.length) {
    clearTimeout(typingInterval);
    textElement.textContent = scenes[currentScene].text;
    charIndex = scenes[currentScene].text.length;

    // Mostrar el mensaje "Toca para continuar"
    document.getElementById("continue-hint").style.opacity = 1;
  } else {
    currentScene++;
    if (currentScene < scenes.length) {
      // Ocultar el mensaje al pasar de escena
      document.getElementById("continue-hint").style.opacity = 0;
      showScene();
    } else {
      textElement.textContent = "Continuara...Gracias por cambiarme la vida, por ser la luz en mi vida. Te amo mi Nomi ❤️";
      imageElement.style.display = "none";
      document.getElementById("continue-hint").style.display = "none";
    }
  }
}


// Iniciar primera escena
showScene();
