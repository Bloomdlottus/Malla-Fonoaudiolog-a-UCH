// script.js

const data = [
  {
    semestre: "I Semestre",
    ramos: [
      { nombre: "Introducción a la Fonoaudiología", prerequisitos: [] },
      { nombre: "Bases teóricas y prácticas de la comunicación humana", prerequisitos: [] },
      { nombre: "Anatomía", prerequisitos: [] },
      { nombre: "Matemáticas", prerequisitos: [] },
      { nombre: "Física", prerequisitos: [] },
      { nombre: "Biología molecular y celular", prerequisitos: [] },
      { nombre: "CFG", prerequisitos: [] },
    ],
  },
  {
    semestre: "II Semestre",
    ramos: [
      { nombre: "Inglés I", prerequisitos: [] },
      { nombre: "Introducción a la salud pública", prerequisitos: ["Introducción a la Fonoaudiología"] },
      { nombre: "Morfología", prerequisitos: ["Biología molecular y celular"] },
      { nombre: "Fisiología I (Célular y neurofisiología)", prerequisitos: ["Biología molecular y celular", "Física"] },
      { nombre: "Física y fonética acústica", prerequisitos: ["Física"] },
      { nombre: "Sociedad, cultura y comunicación", prerequisitos: [] },
      { nombre: "Fonética y fonología españolas", prerequisitos: [] },
    ],
  },
  {
    semestre: "III Semestre",
    ramos: [
      { nombre: "Fundamentos cognitivos de la comunicación", prerequisitos: ["Fisiología I (Célular y neurofisiología)"] },
      { nombre: "Morfosintaxis española", prerequisitos: [] },
      { nombre: "Psicología del desarrollo infantil", prerequisitos: [] },
      { nombre: "Fisiología II (De sistemas)", prerequisitos: ["Anatomía", "Fisiología I (Célular y neurofisiología)"] },
      { nombre: "Neurología", prerequisitos: ["Fisiología I (Célular y neurofisiología)"] },
      { nombre: "Genética", prerequisitos: ["Biología molecular y celular"] },
      { nombre: "Promoción en salud", prerequisitos: ["Introducción a la salud pública", "Sociedad, cultura y comunicación", "Introducción a la Fonoaudiología"] },
      { nombre: "CFG II", prerequisitos: [] },
    ],
  },
  {
    semestre: "IV Semestre",
    ramos: [
      { nombre: "Intervención fonoaudiológica y bioética aplicada", prerequisitos: ["Psicología del desarrollo infantil", "Introducción a la Fonoaudiología"] },
      { nombre: "Semántica y discurso", prerequisitos: ["Sociedad, cultura y comunicación"] },
      { nombre: "Psicología del desarrollo en adolescentes y adultos", prerequisitos: ["Psicología del desarrollo infantil"] },
      { nombre: "Psiquiatría", prerequisitos: ["Neurología"] },
      { nombre: "Fisiopatología y farmacología", prerequisitos: ["Fisiología II (De sistemas)"] },
      { nombre: "Epidemiología y bioestadística", prerequisitos: ["Introducción a la salud pública"] },
      { nombre: "Inglés II", prerequisitos: ["Inglés I"] },
    ],
  },
  {
    semestre: "V Semestre",
    ramos: [
      { nombre: "Evaluación y diagnóstico auditivo y vestibular", prerequisitos: ["Física y fonética acústica", "Fisiopatología y farmacología"] },
      { nombre: "Motricidad orofacial", prerequisitos: ["Fisiopatología y farmacología"] },
      { nombre: "Evaluación y diagnóstico de la voz humana", prerequisitos: ["Bases teóricas y prácticas de la comunicación humana", "Física y fonética acústica", "Intervención fonoaudiológica y bioética aplicada"] },
      { nombre: "Diagnóstico de situación de salud y organización", prerequisitos: ["Epidemiología y bioestadística"] },
      { nombre: "Gestión I", prerequisitos: [] },
      { nombre: "Métodos de investigación cualitativos y cuantitativos", prerequisitos: ["Epidemiología y bioestadística"] },
      { nombre: "Módulo integrado interdisciplinario multiprofesional I (MIIM)", prerequisitos: [] },
    ],
  },
  {
    semestre: "VI Semestre",
    ramos: [
      { nombre: "Intervención auditiva y vestibular", prerequisitos: ["Evaluación y diagnóstico auditivo y vestibular"] },
      { nombre: "Intervención del habla", prerequisitos: ["Intervención fonoaudiológica y bioética aplicada", "Neurología"] },
      { nombre: "Intervención de la deglución y motricidad orofacial", prerequisitos: ["Neurología", "Intervención fonoaudiológica y bioética aplicada"] },
      { nombre: "Terapia y técnica de la voz humana", prerequisitos: ["Evaluación y diagnóstico de la voz humana"] },
      { nombre: "Evaluación y diagnóstico de la comunicación en niños y adolescentes en contexto clínico y educativo", prerequisitos: ["Psicología del desarrollo en adolescentes y adultos", "Intervención fonoaudiológica y bioética aplicada"] },
      { nombre: "Gestión II", prerequisitos: ["Gestión I"] },
      { nombre: "Diseño de proyecto de investigación", prerequisitos: ["Métodos de investigación cualitativos y cuantitativos"] },
      { nombre: "CFG III", prerequisitos: [] },
    ],
  },
  {
    semestre: "VII Semestre",
    ramos: [
      { nombre: "Terapia de la comunicación en niños y adolescentes en el contexto clínico y educativo", prerequisitos: ["Evaluación y diagnóstico de la comunicación en niños y adolescentes en contexto clínico y educativo", "Evaluación y diagnóstico auditivo y vestibular"] },
      { nombre: "Intervención del lenguaje y comunicación en adultos", prerequisitos: ["Fundamentos cognitivos de la comunicación", "Neurología", "Intervención fonoaudiológica y bioética aplicada"] },
      { nombre: "Intervención fonoaudiológica en el adulto mayor", prerequisitos: ["Terapia y técnica de la voz humana", "Intervención fonoaudiológica y bioética aplicada", "Intervención del habla", "Intervención auditiva y vestibular"] },
      { nombre: "Electivo de lingüística aplicada", prerequisitos: ["Semántica y discurso"] },
      { nombre: "Integrado clínico en salud primaria", prerequisitos: ["Terapia y técnica de la voz humana", "Intervención auditiva y vestibular", "Intervención del habla", "Evaluación y diagnóstico de la comunicación en niños y adolescentes en contexto clínico y educativo", "Intervención de la deglución y motricidad orofacial"] },
      { nombre: "Proyecto de investigación I", prerequisitos: ["Diseño de proyecto de investigación"] },
      { nombre: "CFG IV", prerequisitos: [] },
    ],
  },
  {
    semestre: "VIII Semestre",
    ramos: [
      { nombre: "Integrado educativo en niños", prerequisitos: ["Terapia de la comunicación en niños y adolescentes en el contexto clínico y educativo"] },
      { nombre: "Intervención cognitiva en adultos", prerequisitos: ["Intervención fonoaudiológica en el adulto mayor", "Fundamentos cognitivos de la comunicación"] },
      { nombre: "Integrado clínico en adultos", prerequisitos: ["Intervención fonoaudiológica en el adulto mayor", "Intervención del lenguaje y comunicación en adultos"] },
      { nombre: "Electivo disciplinar", prerequisitos: [] },
      { nombre: "Curso avanzado", prerequisitos: ["Intervención fonoaudiológica en el adulto mayor"] },
      { nombre: "Proyecto de investigación II", prerequisitos: ["Proyecto de investigación I"] },
      { nombre: "Módulo integrado interdisciplinario multiprofesional II (MIIM)", prerequisitos: ["Módulo integrado interdisciplinario multiprofesional I (MIIM)"] },
    ],
  },
  {
    semestre: "IX y X Semestre",
    ramos: [
      { nombre: "Internado profesional área Infanto-Juvenil", prerequisitos: ["Integrado clínico en adultos"] },
      { nombre: "Internado profesional área Adultos", prerequisitos: ["Integrado clínico en adultos"] },
      { nombre: "Internado profesional área Audiología", prerequisitos: ["Integrado clínico en adultos"] },
      { nombre: "Internado profesional área Voz", prerequisitos: ["Integrado clínico en adultos"] },
    ],
  },
];

const malla = document.getElementByI
