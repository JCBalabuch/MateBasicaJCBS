const PREGUNTAS = [
  {
    test: "5 - 10",
    respuesta: -5,
  },
  {
    test: "15 + 1",
    respuesta: 16,
  },
  {
    test: "20 * 2",
    respuesta: 40,
  },
  {
    test: "10 / 5",
    respuesta: 2,
  },
  {
    test: "23 + 12",
    respuesta: 35,
  },
  {
    test: "18 - 12",
    respuesta: 6,
  },
  {
    test: "15 * 3",
    respuesta: 45,
  },
  {
    test: "20 / 2",
    respuesta: 10,
  },
];

const HEADER$$ = document.querySelector("#header");
const APP$$ = document.querySelector("#app");
const COMPROBAR$$ = document.querySelector(".comprobar");
const FOOTER$$ = document.querySelector("#footer");


const Header = () => {
  const header = document.createElement("div");
  const imgHeader = document.createElement("img");
  imgHeader.src = "./assets/MatesLogo.png";
  imgHeader.alt = "Logo Mates";

  HEADER$$.appendChild(header);
  header.appendChild(imgHeader);
};


const pintarPreguntas = (preguntas) => {
  for (let i = 0; i < PREGUNTAS.length; i++) {
    let pregunta = preguntas[i];

    const pregunta$$ = document.createElement("div");
    const test$$ = document.createElement("h2");
    const igual$$ = document.createElement("p");
    const respuesta$$ = document.createElement("input");

    test$$.textContent = pregunta.test;
    igual$$.textContent = "=";
    test$$.className = "test";
    igual$$.className = "igual";
    respuesta$$.className = "respuesta";
    pregunta$$.className = "pregunta";

    respuesta$$.type = "number";

    APP$$.appendChild(pregunta$$);
    pregunta$$.appendChild(test$$);
    pregunta$$.appendChild(igual$$);
    pregunta$$.appendChild(respuesta$$);
  }
};

pintarPreguntas(PREGUNTAS);

console.log(`La cantidad de preguntas es ${PREGUNTAS.length}`);

const comprobar = () => {
  const ALLRESPUESTAS$$ = document.querySelectorAll(".respuesta");

  let acertadas = 0;

  console.log(`La cantidad de respuestas es ${ALLRESPUESTAS$$.length}`);

  for (let i = 0; i < ALLRESPUESTAS$$.length; i++) {
    if (parseInt(ALLRESPUESTAS$$[i].value) === PREGUNTAS[i].respuesta) {
      acertadas++;
    }
    console.log(`La cantidad de respuestas acertadas es ${acertadas}`);
  }

  if (acertadas >= ALLRESPUESTAS$$.length / 2) {
    APP$$.innerHTML = `
      <h2>Has aprobado acertando ${acertadas} respuestas!</h2>
      <img src="https://media.tenor.com/oY2kjO3cQXQAAAAj/cocopry-stich.gif" class="final">
      `;
  } else {
    APP$$.innerHTML = `
      <h2>Has suspendido. Solo acertaste ${acertadas} respuestas!</h2>
      <img src="https://gifdb.com/images/thumbnail/stitch-tired-faint-sticker-ul95pjxetslklhjy.gif" class="final">
      `;
  }

  COMPROBAR$$.style.display = "none";
};

COMPROBAR$$.addEventListener("click", comprobar);


const Footer = () => {

  const lnkIn = document.createElement("a");
  lnkIn.href = "https://www.linkedin.com/in/jenifferbalabuch/";
  lnkIn.target = "blank";
  const lnkInImg = document.createElement("img");
  lnkInImg.src = "./assets/LinkedInLogo.png";
  lnkInImg.alt = "LinkedIn Logo";
  lnkIn.appendChild(lnkInImg);

  const gitHub = document.createElement("a");
  gitHub.href = "https://github.com/JCBalabuch";
  gitHub.target = "blank";
  const gitHubImg = document.createElement("img");
  gitHubImg.src = "./assets/GitHubLogo.png";
  gitHubImg.alt = "Github Logo";
  gitHub.appendChild(gitHubImg);

  const paragraph = document.createElement("p");
  paragraph.textContent = "Created by Jeniffer Balabuch";

  const jcbs = document.createElement("img");
  jcbs.src = "./assets/LogoJCBS.png";
  jcbs.alt = "Personal Logo";

  FOOTER$$.appendChild(lnkIn);
  FOOTER$$.appendChild(gitHub);
  FOOTER$$.appendChild(paragraph);
  FOOTER$$.appendChild(jcbs);

  document.body.appendChild(FOOTER$$);
};

Header();
Footer();
