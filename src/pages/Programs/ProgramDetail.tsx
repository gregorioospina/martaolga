import { Grid, Typography, useMediaQuery, useTheme } from "@material-ui/core";
import React, { useEffect, useMemo, useState } from "react";
import CallToAction from "./components/CallToAction";
import Columns from "./components/Columns";
import Header from "./components/Header";
import Topics from "./components/Topics";

import p1_main from "../../pages/Programs/images/P1/main.png";
import p1_pillars from "../../pages/Programs/images/P1/afterColumnImage.png";
import p1_icon from "../../pages/Programs/images/P1/iconos programas-01.svg";

import p2_main from "../../pages/Programs/images/P2/main.png";
import p2_pillars from "../../pages/Programs/images/P2/afterColumnImage.png";
import p2_icon from "../../pages/Programs/images/P2/iconos programas-02.svg";

import p3_main from "../../pages/Programs/images/P3/main.png";
import p3_pillars from "../../pages/Programs/images/P2/afterColumnImage.png";
import p3_icon from "../../pages/Programs/images/P3/iconos programas-03.svg";

import p4_main from "../../pages/Programs/images/P4/main.png";
import p4_pillars from "../../pages/Programs/images/P4/afterColumnImage.png";
import p4_icon from "../../pages/Programs/images/P4/iconos programas-04.svg";

import p5_main from "../../pages/Programs/images/P5/main.png";
import p5_pillars from "../../pages/Programs/images/P5/afterColumnImage.png";
import p5_icon from "../../pages/Programs/images/P5/iconos programas-05.svg";

import p6_main from "../../pages/Programs/images/P6/main.png";
import p6_pillars from "../../pages/Programs/images/P6/afterColumnImage.png";
import p6_icon from "../../pages/Programs/images/P6/iconos programas-06.svg";

import p7_main from "../../pages/Programs/images/P7/main.png";
import p7_pillars from "../../pages/Programs/images/P7/afterColumnImage.png";
import p7_icon from "../../pages/Programs/images/P7/iconos programas-07.svg";

import p8_main from "../../pages/Programs/images/P8/main.png";
import p8_pillars from "../../pages/Programs/images/P8/afterColumnImage.png";
import p8_icon from "../../pages/Programs/images/P8/iconos programas-08.svg";

import p9_main from "../../pages/Programs/images/P9/main.png";
import p9_pillars from "../../pages/Programs/images/P9/afterColumnImage.png";
import p9_icon from "../../pages/Programs/images/P9/iconos programas-09.svg";

import p10_main from "../../pages/Programs/images/P10/main.png";
import p10_pillars from "../../pages/Programs/images/P10/afterColumnImage.png";
import p10_icon from "../../pages/Programs/images/P10/iconos programas-10.svg";

import { useLocation } from "react-router-dom";
import { MOBILE_HEIGHT, HEIGHT } from "../MenuAppbar";
import Dates from "./components/Dates";
import Contact from "../Contact/Contact";

const programs = {
  "001": {
    color: "#ff5358",
    column1: (
      <React.Fragment>
        <Typography paragraph>
          Ese programa conformado de creencias, formas de pensar, percibir e
          interpretar viene acompa??ado de emociones t??xicas y negativas que
          aprendimos a contener, y que sin darnos cuenta nos traicionan
          diariamente manifest??ndose en nuestra manera de reaccionar y
          determinando la calidad de nuestras relaciones y por ende de ???nuestra
          realidad???.
        </Typography>
        <Typography paragraph>
          Hemos construido nuestra realidad, usando ???de manera inconsciente??? lo
          que otros nos entregaron ???de manera inconsciente???. Somos transmisores
          de un pasado heredado que padecemos y repetimos, pero que no tenemos
          que perpetuar.
        </Typography>
        <Typography paragraph>
          El proceso de transformaci??n nos llevar?? a ???darnos cuenta??? y
          evidenciar que podemos ELEGIR lo que queremos tener, lograr y hacer, y
          especialmente lo que ??queremos SER!???. Vamos a empoderarnos con la
          libertad del SER, libertad para re - pensarnos, definirnos y
          empoderarnos.
        </Typography>
      </React.Fragment>
    ),
    column2: (
      <React.Fragment>
        <Typography paragraph>
          Tenemos la posibilidad de ser generadores de un futuro elegido, que le
          dar?? sentido y prop??sito a nuestro d??a a d??a. Podemos gestionar
          nuestra vida y actuar con integridad para hacerla realidad, teniendo
          como grandes indicadores armon??a, serenidad, plenitud, paz y
          felicidad. El enfoque es formar el SER y luego orientar el HACER.
        </Typography>
        <Typography paragraph>
          Para lograrlo vamos a familiarizarnos con nueva informaci??n que nos
          permite ver la vida desde otra perspectiva, incluye observar,
          comprender, aceptar, asumir, reinterpretar, soltar, sanar, elegir,
          renunciar, perdonar y agradecer. Y ante todo darnos cuenta de que la
          herramienta fundamental es la acci??n para la evidencia.
        </Typography>
      </React.Fragment>
    ),
    icon: p1_icon,
    photo: p1_main,
    afterColumnImage: p1_pillars,
    subtitle: "El Ser que soy y el que puedo Ser",
    subtitle2:
      "Nacimos con la posibilidad de ser felices, y nos la dejamos robar, cubrir o enmascarar con informaci??n que recibimos en la infancia -principalmente de nuestros referentes- y que acatamos como verdadera y ??nica, convirti??ndola en el formato (par??metros mentales) que controla el SER que hemos venido siendo. ",
    title: "Transformaci??n personal",
    topics: [
      {
        subtopics: [],
        topic: "Conciencia de los resultados presentes",
        description:
          "Hacer un alto en el camino para darnos cuenta c??mo venimos viviendo, qu?? resultados produce nuestra manera de SER a la luz de las 4 dimensiones humanas.",
      },
      {
        subtopics: [],
        topic: "Transformaci??n vs Cambio",
        description:
          "M??s que cambiar el pasado es crear el futuro. Con la libertad y conciencia para ELEGIR nuevas posibilidades",
      },
      {
        subtopics: [],
        topic: "El punto de llegada",
        description: "Anclar la transformaci??n en Visi??n, Prop??sito y Sentido",
      },
      {
        subtopics: [
          "Perfecci??n",
          "Culpa/V??ctima",
          "Miedo",
          "Carencia",
          "No merecimiento",
        ],
        topic: "El punto de partida",
        description:
          "El formato del SER que he venido siendo. Referentes, programaci??n de creencias, lentes perceptivos y Monstruos limitantes:",
      },
      {
        subtopics: [
          "Soltar a los referentes. Comprender, perdonar y agradecer",
          "Sanar memorias emocionales negativas",
          "Reprogramar la voz interna del adulto",
        ],
        topic: "Soltar para Liberar espacio",
        description: "",
      },
      {
        subtopics: [],
        topic: "Siempre hay una POSIBILIDAD",
        description:
          "El reto es ELEGIRLA y convertirla en realidad con la acci??n",
      },
      {
        subtopics: [],
        topic: "El poder de la acci??n extraordinaria",
        description:
          "Declarar compromisos y sellarlos con INTEGRIDAD, para generar evidencias",
      },
    ],
    dates: {
      dates: "Cada mi??rcoles del 16 de febrero al 30 de marzo",
      times: `Escoge horario: \nGrupo am: 8:15 ??? 10:00 am\nGrupo pm: 5:00 ??? 6:45 pm`,
      structure: [
        "Siete (7) sesiones virtuales",
        "1 sesi??n semanal",
        "duraci??n 1:45 horas",
      ],
    },
    footerImage: "",
    url: "https://martaolga.clynk.me/134z4M5T/menu?it=d1b86f53-cf3e-48aa-ba7d-10f74f643101",
    message: "??Est??s listo para transformar tu vida?",
  },
  "002": {
    id: "002",
    color: "#f8b800",
    column1: (
      <React.Fragment>
        <Typography paragraph>
          La transformaci??n es un proceso sin fin, pero gracias a la pr??ctica
          para generar evidencias, se convierte en un proceso posible con avance
          permanente. Es abrirse a un mundo infinito de posibilidades, donde una
          nueva programaci??n sea en forma de creencia, lente perceptivo o
          interpretaci??n genera una nueva realidad y nuevos resultados.
        </Typography>
        <Typography paragraph>
          La informaci??n para generar una nueva realidad puede estar limitada
          por el pasado (como lo vimos en el programa El Ser que soy y el que
          puedo Ser) o distorsionado por la mirada del EGO y todas las causas de
          sufrimiento que desata.
        </Typography>
        <Typography paragraph>
          El EGO, como la m??xima expresi??n del ser, define el sentido de su
          propia existencia en relaci??n con todo lo que lo rodea, lo que puede
          controlar, alcanzar, poseer, y eso desata el miedo a no poderlo lograr
          o conservar. El EGO usa las herramientas interiores del ser
          (pensamiento, acci??n y emoci??n) inspirado en la creencia de la
          separaci??n, que nos invita a vivir luchando para ganar y para
          defendernos.
        </Typography>
      </React.Fragment>
    ),
    column2: (
      <React.Fragment>
        <Typography paragraph>
          Por eso vale la pena dejarnos cuestionar desde otro lente perceptivo,
          para salir de la zona de confort anclada en lo superficial y en las
          seguridades intelectuales, para dejarnos sorprender por el camino
          espiritual que engrandece y le da paz, sentido al propio SER.
        </Typography>
        <Typography paragraph>
          Este proceso de transformaci??n para la grandeza y fortaleza interior
          (basado en las posibilidades del SER) no se recorre a trav??s de las
          certezas que nos acompa??an, sino de la evidencia del mundo emocional y
          su posibilidad de sanarlo para hacernos m??s sensibles al OTRO y poder
          crear conexiones humanas desde la libertad y la pr??ctica de la
          comprensi??n, compasi??n, aceptaci??n, perd??n, respeto y gratitud.
        </Typography>
      </React.Fragment>
    ),
    icon: p2_icon,
    photo: p2_main,
    afterColumnImage: "",
    subtitle: "Conciencia del ser EGO que no me deja SER",
    subtitle2:
      "La experiencia reflexiva para evolucionar del EGO al SER nos permite darnos cuenta de que el trabajo de enriquecimiento del SER es totalmente personal, indelegable y necesario para lograr vivir con plenitud, armon??a y serenidad y Ser Felices. ",
    title: "Transformaci??n personal",
    topics: [
      {
        topic: "Repaso y empalme para la continuidad",
        description: "???El Ser que soy y el que puedo Ser???",
        subtopics: [],
      },
      {
        topic: "Premisas",
        description: "",
        subtopics: [
          "Resignificar el sentido de Vivir",
          "Resignificar el sentido de Morir",
          "Proceso de Evoluci??n: Del Ego al Ser",
        ],
      },
      {
        topic: "Disminuir las causas de sufrimientos",
        description: "",
        subtopics: [
          "Posicionamiento y mandato del EGO",
          "Pensamiento saboteador",
          "El poder de las Interpretaciones",
          "Los Sentimientos",
          "H??bitos de sufrimiento",
        ],
      },
      {
        topic: "Libertad Emocional",
        description: "",
        subtopics: [
          "H??bitos saludables",
          "Conciencia de la mentira y el error de las emociones",
          "Nuevas estrategias: Observar, neutralizar y producir emociones positivas",
        ],
      },
      {
        topic: "Conexiones humanas para SER libre",
        description: "",
        subtopics: [
          "Lente perceptivo, Sombra y Espejo",
          "Creencias y sentencias limitantes",
          "Indiferencia vs Dignidad, Inclusi??n y Generosidad",
          "Comprensi??n, Compasi??n, Perd??n y Respeto",
          "Conexiones emocionales positivas",
        ],
      },
    ],
    dates: {
      dates: "mayo 4, 11, 18, 25 y junio 1, 8, 15",
      times:
        "Escoge horario:\n Grupo am: 8:15 ??? 10:00 am\n Grupo pm: 5:00 ??? 6:45 pm",
      structure: [
        "Siete (7) sesiones virtuales",
        "1 sesi??n semanal",
        "duraci??n 1:45 horas",
      ],
    },
    footerImage: "",
    url: "https://martaolga.clynk.me/134z4M5T/menu?it=08d5aa08-a2dd-482d-ae3a-34254af1cc05",
    message: "??Quisieras continuar con tu transformaci??n personal?",
  },
  "003": {
    id: "003",
    color: "#ff9200",
    column1: (
      <React.Fragment>
        <Typography paragraph>
          El primer obst??culo se encuentra cuando nos preguntamos ??qu?? de
          nosotros queremos gestionar y para qu??? Esta pregunta, muy importante,
          enfrenta nuestro intelecto a un sin n??mero de precisiones, todas
          v??lidas, que nos llenan de ansiedad y que quiz??s por eso nos
          desmotivan y sin querer desistimos.
        </Typography>
        <Typography paragraph>
          Por ejemplo, ??Lo que anhelas es un Proyecto de Vida o una Vida con
          Prop??sito? ??Lo que quieres es definir la visi??n de tu futuro, es
          decir, el punto de llegada o la intenci??n de tu destino, es decir, el
          faro que ilumina el camino? ??Lo que importa es encontrar el sentido o
          el para qu?? de todo lo que sucedi?? o de todo lo que t?? decides que
          suceda? Y finalmente, ??lo que te mueve para sumergirte en esta gran
          aventura es lograr para realizar la vida, transitar para ser feliz o
          trascender por alcanzar una vida plena?
        </Typography>
        <Typography paragraph>
          Darle norte a esta cantidad de reflexiones, no desde el concepto sino
          desde la conciencia, es el gran objetivo que logras al vivir la
          experiencia reflexiva ???Vida con Prop??sito???, con la cual tejes
          libremente el camino a seguir. Es un camino muy personal, porque solo
          t?? comenzar??s a sentir la vibraci??n de tus pensamientos, aspiraciones,
          b??squeda espiritual y el impacto de la duraci??n emocional de tus
          logros. T?? ir??s decidiendo. Todo es v??lido. Nada se compara. Todo se
          respeta.
        </Typography>
        <Typography paragraph>
          El camino es muy poderoso, porque iniciamos pregunt??ndonos no por la
          vida, sino por mi vida; y por mi vida como persona; para descubrir lo
          que s?? puedo gestionar de mi propio SER, desde mi esencia inmersa en
          nuestra condici??n humana y desde el programa que otros
          inconscientemente pusieron en mi inconsciente. Seguir caminando nos
          permitir?? descubrir que contamos con algo en nosotros que se llama la
          conciencia, el darnos cuenta, el poder observar lo que sentimos,
          sabiendo que lo podemos sanar o reproducir.
        </Typography>
      </React.Fragment>
    ),
    column2: (
      <React.Fragment>
        <Typography paragraph>
          En ese caminar vamos construyendo nuestra identidad y se van
          manifestando los motivos - fuerza que impulsa nuestra acci??n- que, sin
          darnos cuenta, generan nuestra realidad. Descubrir??s -sin mucha
          reflexi??n- que hay resultados emocionales que se evaporan y otros que
          perduran. Y t?? ir??s eligiendo???
        </Typography>
        <Typography paragraph>
          Con la observaci??n permanente comienza a volverse muy n??tido que una
          cosa es la cima de la monta??a hacia la cual nos dirigimos y otra el
          Ser que recorre el camino. Y as?? aparece la diferencia entre la visi??n
          y el prop??sito. La visi??n es el logro al final del camino y el
          prop??sito es la calidad humana de quien camina. La visi??n es un
          resultado o logro externo que se logra con la manera de actuar, el
          prop??sito es el logro interno en la manera de ser. La visi??n es el
          puerto, el prop??sito es el faro. Una es una felicidad al final y otro
          la felicidad como punto de partida. La visi??n realiza la vida, el
          prop??sito humaniza la existencia.
        </Typography>
        <Typography paragraph>
          Y comienzas a sentir paz, aunque nos falta la pieza final. Y entonces
          ??qu?? es el sentido?, la raz??n del actuar, sin juicio, sin cr??tica y
          con absoluto respeto. La claridad del sentido nos demuestra que todas
          las personas, incluso las que act??an con informaci??n equivocada,
          act??an porque tiene un para qu?? v??lido en su propio nivel de
          conciencia. Reflexionar el sentido que le damos a nuestros acciones y
          reacciones, nos enfoca en el camino de la pregunta por la coherencia
          de vida.
        </Typography>
        <Typography paragraph>
          Por eso, la experiencia reflexiva de este programa te ayudar?? a
          encontrar el proyecto de vida y su sentido, y una vida con prop??sito y
          su sentido, y su gran indicador ser?? una VIDA PLENA, una vida que nos
          permite evolucionar desde la calidad del Ser que somos, una vida que
          crece en humanismo. No solo por los logros del hacer, sino ante todo
          por los logros en el SER.
        </Typography>
      </React.Fragment>
    ),
    icon: p3_icon,
    photo: p3_main,
    afterColumnImage: "",
    subtitle: "Vida con Proposito",
    subtitle2:
      "Decidir gestionar la vida, es un reto apasionante, pero muy dif??cil de asumir, especialmente porque no sabemos c??mo ni cu??ndo comenzar",
    title: "Transformaci??n Personal",
    topics: [
      {
        topic: "Sensibilizaci??n",
        description: "",
        subtopics: [
          "S??mil del puente: ??Qu?? queremos orientar de nuestra vida?",
          "Fuentes de informaci??n (Espiritualidad)",
          "Proyecto y sentido de tu Vida",
          "Prop??sito y sentido de tu Vida",
        ],
      },
      {
        topic: "El Indicador",
        description: "",
        subtopics: [
          "??Cu??les son los indicadores de una Vida Plena?",
          "La Felicidad / Caminos posibles",
          "Paz interior / Ser invulnerable",
          "Evolucionar / Humanizarnos",
          "El camino equivocado",
        ],
      },
      {
        topic: "El Punto de Partida",
        description: "",
        subtopics: [
          "??Qu?? es ser PERSONA?",
          "Conciencia para definir el prop??sito",
          "Futuro tendencia y Futuro elegido",
          "Aprender a vivir desde el Resultado / Actitud de Escalador",
          "Origen de mi manera de SER: Creencias",
          "Impacto en una Vida Plena",
          "El camino posible",
        ],
      },
      {
        topic: "Sensibilizaci??n",
        description: "",
        subtopics: [
          "S??mil del puente: ??Qu?? queremos orientar de nuestra vida?",
          "Fuentes de informaci??n (Espiritualidad)",
          "Proyecto y sentido de tu Vida",
          "Prop??sito y sentido de tu Vida",
        ],
      },
    ],
    dates: {
      dates: "agosto 3, 10, 17, 24 y 31 septiembre 7 y 14",
      times:
        "Escoge horario:\n Grupo am: 8:15 ??? 10:00 am\n Grupo pm: 5:00 ??? 6:45 pm",
      structure: [
        "Siete (7) sesiones virtuales",
        "1 sesi??n semanal",
        "duraci??n 1:45 horas",
      ],
    },
    message: "??Te animas a darle significado a tu vida?",
    footerImage: "",
    url: "https://martaolga.clynk.me/134z4M5T/menu?it=3410486d-f075-43d5-b718-ea4719da22be",
  },
  "004": {
    id: "004",
    color: "#009f99",
    column1: (
      <React.Fragment>
        <Typography paragraph>
          La formaci??n se basa en un proceso reflexivo para ???darte cuenta??? de la
          manera como vienes respondiendo a la vida y los resultados que generas
          y, ante todo, darte cuenta de las posibilidades que nacen - fruto de
          las herramientas de tu propio SER.
        </Typography>
        <Typography paragraph>
          Es necesario despertar conciencia de que podemos pararnos ante la vida
          desde un nuevo lente perceptivo, que nos invita a darnos cuenta del
          poder de aceptar (despertar sentido de realidad) y del valor de asumir
          (la capacidad de ???hacernos cargo???). Y desde una posibilidad de
          reinterpretar la adversidad, no como el sufrimiento o el castigo que
          debemos padecer, sino como un devenir que nos abre a una oportunidad
          de aprender desde lo inesperado nuevas maneras de responderle a la
          vida. Es este aprendizaje, que no es deseado, pero que no es in??til,
          lo que nos permite gestionar la vida para continuar.
        </Typography>
      </React.Fragment>
    ),
    column2: (
      <React.Fragment>
        <Typography paragraph>
          Para construir la respuesta que te permite avanzar, la vida te ha
          dotado de lo que llamaremos ???La cajita de herramientas internas???. Las
          herramientas como el pensamiento, la acci??n y la gesti??n de emociones,
          no son nuevas para ti, pero las has usado desde tu ser inconsciente,
          enfocado en repetir la manera de ser que te ha funcionado.
        </Typography>
        <Typography paragraph>
          El valor de esta reflexi??n es descubrir que, si la aprendes a usar
          desde tu ser consciente, te haces protagonista de un gran poder de
          transformaci??n para lograr una vida plena.
        </Typography>
      </React.Fragment>
    ),
    icon: p4_icon,
    photo: p4_main,
    afterColumnImage: "",
    subtitle: "Formar tu SER RESILIENTE, para responder a lo inesperado",
    subtitle2:
      "M??s que saber de resiliencia, el gran reto es formar tu SER RESILIENTE, es desarrollar la capacidad para que cualquiera que sea la realidad que se te presente que se prev?? incierta e inesperada-, encuentres dentro de ti la manera de responder y reaccionar para ser superior a las circunstancias y avanzar, para dejarte engrandecer con el lenguaje de la vida",
    title: "Transformaci??n Personal",
    topics: [
      {
        topic: "Resignificar Resiliencia y Ser Resiliente",
        description: "",
        subtopics: [],
      },
      {
        topic: "Un nuevo lente perceptivo:",
        description: "",
        subtopics: [
          "La programaci??n / Creencias",
          "Proyecto Pedag??gico",
          "Ley de la correspondencia",
        ],
      },
      {
        topic: "Resignificar Creencias",
        description: "",
        subtopics: [
          "Adversidad vs Sufrimiento",
          "Aceptar vs Resignaci??n",
          "Asumir vs Conformismo",
        ],
      },
      {
        topic: "La cajita de Herramientas",
        description: "",
        subtopics: [
          "El uso del Pensamiento",
          "El valor de la Acci??n",
          "El impacto de dejar fluir las Emociones",
        ],
      },
    ],
    dates: {
      dates: "Lunes y mi??rcoles de abril (18, 20, 25 y 27) y mayo 2",
      times: "5:00pm ??? 6:45 pm",
      structure: [
        "Cinco (5) sesiones virtuales",
        "2 sesi??n semanal",
        "duraci??n 1:45 horas",
      ],
    },
    message: "??Est??s dispuesta a fortalecer tu propio SER?",
    footerImage: "",
    url: "https://martaolga.clynk.me/134z4M5T/menu?it=6b5e336d-1626-48cf-a161-ebcf664d093b",
  },
  "005": {
    id: "005",
    color: "#802ca3",
    column1: (
      <React.Fragment>
        <Typography paragraph>
          Nos tiene sin palabras. Nos tiene amenazados y por consiguiente llenos
          de miedo. Estamos paralizados, pero necesitamos continuar. Para
          lograrlo, debemos descubrir una manera sabia y sana de responder y
          reaccionar a ella.
        </Typography>
        <Typography paragraph>
          Ante lo inevitable, solo nos queda parar, observar, reflexionar y
          elegir un camino para continuar. Pero ??observar qu??? El ruido de
          nuestros pensamientos, la frecuencia en que nos asaltan, el miedo que
          desatan, las razones que los justifican??? Observar para darnos cuenta,
          que la muerte no genera sufrimiento, es una realidad que todos sabemos
          que vamos a vivir. Lo que genera el sufrimiento son las creencias de
          lo que ES, la interpretaci??n que hacemos de su llegada, el misterio
          que lo envuelve que no se deja razonar y el mandato del EGO de no
          lograr controlarla ni decidir sobre ella. Estas causas de sufrimiento
          son afines a la manera de SER, no a la vida.
        </Typography>
        <Typography paragraph>
          Por eso vale la pena, reflexionar sobre la muerte desde nuestro SER
          CONSCIENTE, sabiendo que el origen del sufrimiento nace en las
          ???certezas y creencias???, y por lo que estas no son ??nicas ni
          definitivas, tenemos la esperanza de poderlas transformar, para
          transformar la muerte de amenaza a maestra.
        </Typography>
      </React.Fragment>
    ),
    column2: (
      <React.Fragment>
        <Typography paragraph>
          Pero este proceso no es te??rico ni conceptual, no se basa en las
          verdades que sabes y defiendes, sino en las posibilidades que se
          desatan de lo impredecible, en lo que te falta por saber, en lo que
          puedes imaginar, visualizar y presentir, en lo que te falta por creer
          y lo m??s maravilloso en la conciencia que a??n te falta por despertar.
        </Typography>
        <Typography paragraph>
          La muerte no tiene discusi??n, todos sabemos que vamos a morir; lo que
          no sabemos es cu??ndo y en qu?? circunstancias, tanto externas como
          internas. La muerte no se puede cambiar, pero su interpretaci??n SI. La
          muerte no se puede evitar, pero la ignorancia sobre ella s??.
        </Typography>
        <Typography paragraph>
          Comprender la muerte como una realidad de la vida, no te quita las
          emociones de tristeza y soledad que genera, pero no te deja
          convertirlas en pensamiento para reforzar miedo, ansiedad, angustia,
          etc. La conciencia de la muerte (propia o ajena) y su preparaci??n
          durante la vida, te da la oportunidad de experimentar serenidad, paz y
          la gratitud incondicional, caminos para recibirla con la tranquilidad
          de haber vivido una vida plena.
        </Typography>
      </React.Fragment>
    ),
    icon: p5_icon,
    photo: p5_main,
    afterColumnImage: "",
    subtitle: "Reflexiones sobre la MUERTE para aprender a VIVIR",
    subtitle2:
      "Una realidad, la muerte, que de manera evidente impacta el continuar de la vida de quienes desde diferentes roles la acompa??an; lleg?? -en los ??ltimos meses- con una fuerza inesperada, se nos meti?? a la vida cotidiana sin permiso y nos alter?? por completo nuestros estados emocionales",
    title: "Transformaci??n Personal",
    topics: [
      {
        topic: "??Para qu?? reflexionar sobre la muerte?",
        description: "",
        subtopics: [
          "Evidencias de la muerte",
          "Informaci??n disponible",
          "Conciencia de tus creencias",
          "S??mil del Nacer",
        ],
      },
      {
        topic: "??Cu??les son tus preguntas?",
        description: "",
        subtopics: [
          "La respuesta que nos une",
          "Hablemos del Miedo, el origen y la posibilidad de neutralizarlo",
          "Visualiza tu propio S??mil",
        ],
      },
      {
        topic: "Eres libre, puedes elegir",
        description: "",
        subtopics: [
          "Prepar??monos para lo inevitable",
          "Prepar??monos para lo inesperado",
          "??C??mo acompa??ar?",
        ],
      },
      {
        topic: "Ritual de Duelo / Sanaci??n",
        description: "",
        subtopics: [],
      },
      {
        topic: "Escuchemos a Elizabeth Kubler Ross (opcional)",
        description: "",
        subtopics: [
          "Proceso antes de la muerte",
          "El instante de la muerte",
          "Proceso despu??s de la muerte",
          "La luz de tu propio camino",
        ],
      },
      {
        topic: "El Reto: La vida cotidiana",
        description: "",
        subtopics: [],
      },
    ],
    dates: {
      dates: "Mi??rcoles junio 22 y 29 julio 6, 13 y 27",
      times: "5:00 pm a 6:45 pm",
      structure: [
        "Cinco (5) sesiones virtuales",
        "1 sesi??n semanal",
        "duraci??n 1:45 horas",
      ],
    },
    message: "??Quieres aprender a fluir con la vida?",
    footerImage: "",
    url: "https://martaolga.clynk.me/134z4M5T/menu?it=ad936d69-d07f-490b-a3fb-67be63d095d6",
  },
  "006": {
    id: "005",
    color: "#802ca3",
    column1: (
      <React.Fragment>
        <Typography paragraph>
          Para lograrlo debemos darnos cuenta de que el punto de partida se
          origina en la transformaci??n del Ser. Para iniciar el proceso es
          fundamental comenzar despertando conciencia de que nos encontramos
          ante un futuro retador, presionados por fuerzas inesperadas (externas
          e internas), que nos exponen a la incertidumbre. Nosotros podemos
          elegir si asumimos la incertidumbre como el mundo del caos o la
          antesala de todas las posibilidades.
        </Typography>
        <Typography paragraph>
          Convertir las posibilidades en realidad, nos exige darnos cuenta de
          que el reto no es cambiar el presente sino crear el futuro; no es
          mejorar el desempe??o, es redefinirlo por unos caminos diferentes a los
          ya conocidos ???sin cuestionar los del pasado??? y finalmente, no es
          disminuir la resistencia sino maximizar el compromiso con el futuro
          elegido, que nos debe unir a todos ???y sobre todo??? con el Ser que
          podr??amos SER para lograrlo.
        </Typography>
        <Typography paragraph>
          Eso hace necesario tener siempre en la mente la pregunta ??A qu??
          estoy/estamos dispuestos?
        </Typography>
        <Typography paragraph>
          Este despertar de la conciencia sobre la visi??n de la empresa, como
          fuente inspiracional de la vida cotidiana, le exige a cada persona que
          quiera participar, pertenecer y aportar, darse cuenta de los frenos en
          su manera de Ser, del impacto de su manera de actuar y del peso
          emocional de su equipaje personal (creencias, piedras???) para elegir
          -desde la libertad y la responsabilidad- el trabajo personal que debe
          iniciar en s?? mismo, de soltar, sanar y transformar lo que no funciona
          y as?? elegir su equipaje correcto para poderse comprometer con ser
          parte del equipo que quiere lograr.
        </Typography>
      </React.Fragment>
    ),
    column2: (
      <React.Fragment>
        <Typography paragraph>
          Despu??s de la decisi??n personal, que no es delegable, nos entrenaremos
          en las herramientas para llegar a la cima de la monta??a: el uso
          pensamiento que descubre posibilidades y la acci??n que las hace
          realidad.
        </Typography>
        <Typography paragraph>
          ??Y qui??n se convierte en el referente inspirador de este gran camino,
          que nos reta la esperanza, la valent??a y ante todo las ganas de
          cooperar?
        </Typography>
        <Typography paragraph>
          El l??der, desde su propio Ser, desde la evidencia, la presencia y las
          respuestas que le generan el respaldo en autoridad moral y coherencia
          de vida para tener seguidores desde la voluntad y no desde la
          obligatoriedad.
        </Typography>
      </React.Fragment>
    ),
    icon: p6_icon,
    photo: p6_main,
    afterColumnImage: "",
    subtitle: "Conciencia para un FUTURO Retador",
    subtitle2:
      "Ante una realidad en permanente transformaci??n, la velocidad de respuesta de la organizaci??n como un todo, determina su posibilidad de salir fortalecida.",
    title: "Transformaci??n Organizacional",
    topics: [
      {
        topic: "Conciencia para un futuro retador",
        description: "",
        subtopics: [
          "Fuerzas externas",
          "Retos para un LIDER",
          "??Qu?? significa formar el SER?",
          "??Qu?? son frenos?",
        ],
      },
      {
        topic: "Conciencia para un futuro retador",
        description: "",
        subtopics: [
          "Fuerzas externas",
          "Retos para un LIDER",
          "??Qu?? significa formar el SER?",
          "??Qu?? son frenos?",
        ],
      },
      {
        topic: "Punto de Partida",
        description: "",
        subtopics: [
          "Premisas para el desempe??o",
          "Desempe??o y Roles directivos",
          `S??mil de la Monta??a
            - El pasado / El ser que somos
            - La cima / Hacia d??nde vamos
            - El contexto y entorno
               - Fuerzas que encontramos
               - Fuerzas que llevamos
            - El morral / La manera de Ser para lograr llegar a la cima
                - Piedras
               - Creencias e Interpretaciones`,
          "El entrenamiento",
        ],
      },
      {
        topic: "El Entrenamiento",
        description: "",
        subtopics: [
          "Transformaci??n vs Cambio",
          "Las 3 preguntas que inspiran la transformaci??n",
          "Despertar conciencia",
          "Transformar una v??ctima en protagonista",
          "Uso del pensamiento / Interpretaciones",
          "El valor de la acci??n (5 caminos)",
        ],
      },
      {
        topic: "Liderazgo para un futuro retador",
        description: "",
        subtopics: [
          "Ser Referente",
          "Raz??n de Ser, Hacer y Lograr",
          "Los intangibles de la vida cotidiana",
          "Gestionar la cultura",
          "Conciencia, Presencia, Respuestas y Evidencia",
        ],
      },
    ],
    footerImage: "",
    url: "",
  },
  "007": {
    id: "005",
    color: "#ffa500",
    column1: (
      <React.Fragment>
        <Typography paragraph>
          La prudencia se logra con criterio ??tico. La ??tica por ser la luz que
          ilumina el camino y a su vez el faro que gu??a el prop??sito se
          convierte en lo m??s necesario, en el ancla para no perder el horizonte
          que se nubla por las posibilidades repentinas, sorprendentes y
          atractivas. La ??tica es el pilar fundamental que nos gu??a para
          construir la sociedad deseada y sostenible, para asegurar la
          sostenibilidad organizacional.
        </Typography>
        <Typography paragraph>
          Una organizaci??n con fortaleza ??tica, con claridad en el criterio
          ??tico y ante todo humilde, reconoce que la ??tica se ve en el actuar de
          la persona en la vida cotidiana. Por eso formar el SER ??TICO es formar
          el SER del CULTURA.
        </Typography>
        <Typography paragraph>
          La ??tica es m??s que un saber, un decir, un juzgar, un exigir. No es un
          listado de principios y comportamientos v??lidos o inv??lidos, que nos
          dividen en buenos y malos -en ??ticos y no ??ticos-. La ??tica es el uso
          de los valores que se refleja en tu manera de ser, es una posici??n
          ante la vida, es la calidad humana con la que vivimos y reaccionamos a
          todas las situaciones de la vida cotidiana.
        </Typography>
        <Typography paragraph>
          El programa ???Formar el Ser ETICO??? es una experiencia reflexiva que
          despierta conciencia, de que lo que nos fortalece no es aprender a
          juzgar la ??tica de los dem??s, sino engrandecer el SER ??TICO propio.
          Para lograrlo nos invita a darnos cuenta de que el camino no es la
          definici??n del valor sino el uso. Aprendimos a usar el valor de
          acuerdo con las creencias formateadas o programadas en la infancia,
          que nos llevan a usarlos de manera inconsciente, reactiva y
          justificada en el ???as?? he sido???.
        </Typography>
      </React.Fragment>
    ),
    column2: (
      <React.Fragment>
        <Typography paragraph>
          Hoy somos conscientes de que las creencias, las interpretaciones, las
          justificaciones, se pueden transformar. Ese es el gran objetivo de la
          informaci??n que entregamos, que la persona se d?? cuenta qu?? frenos
          tiene y c??mo desactivarlos. Se d?? cuenta de que puede ELEGIR ???El Ser
          que quiere y puede ser??? y lograrlo a trav??s de evaluar el impacto, las
          consecuencias y la tendencia de sus actos en s?? mismo -en su vida- y
          en la de los dem??s.
        </Typography>
        <Typography paragraph>
          Con esta libertad de elecci??n aseguraremos la interiorizaci??n de los
          valores por evidencia (proyecci??n) y no por teor??a; por convicci??n y
          no por imposici??n.
        </Typography>
        <Typography paragraph>
          El valor final de esta formaci??n es descubrir que la ??tica es el mejor
          camino para vivir tranquilos y felices, porque vivir con conciencia
          ??tica aporta valor a la vida familiar, a la relaci??n con los amigos y
          a la carrera profesional y a la sociedad. Hablar de ??tica es hablar de
          los fundamentos de la propia vida, por eso debemos hacerlo con
          propiedad y convicci??n, Ser buena persona, irradiar calidad humana y
          actuar con rectitud VALE LA PENA.{" "}
        </Typography>
      </React.Fragment>
    ),
    icon: p7_icon,
    photo: p7_main,
    afterColumnImage: p7_pillars,
    subtitle: "Formar el SER ??TICO. El SER de la CULTURA",
    subtitle2:
      "Cuando las empresas se encuentran inmersas en una realidad en la que abunda la innovaci??n tecnol??gica, enfocada en maximizar productividad, rentabilidad y modernidad deben ser muy prudentes en sus decisiones, para asegurar el equilibrio entre los logros econ??micos y el aporte social.",
    title: "Transformaci??n Organizacional",
    topics: [
      {
        topic: "Cada sesi??n sobre los valores se estructura en 7 partes:",
        description: "",
        subtopics: [
          "Formaci??n humanista para darle sentido a Ser Persona",
          "Despertar conciencia de la creencia que hay detr??s de ???mi propia valoraci??n???",
          "Reflexionar para resignificar el valor y elegir el aporte en la construcci??n de futuro. Darle sentido al valor por convicci??n y no por acatamiento",
          "Descubrir los frenos que impiden que el valor crezca y se fortalezca en nuestra propia vida",
          "Desarrollar posibilidades para desactivar los frenos",
          "Compromiso con generar evidencias en la vida cotidiana",
          "S??ntesis",
        ],
      },
    ],
    footerImage: "",
    url: "",
  },
  "008": {
    id: "005",
    color: "#f7b800",
    column1: (
      <React.Fragment>
        <Typography paragraph>
          Tres alimentos necesarios para que el ser humano pueda crecer y
          evolucionar son amor, comprensi??n y aceptaci??n. Provienen de la
          presencia de quienes nos quieren acompa??ar a avanzar y evolucionar y
          se traduce en energ??a positiva que emana de la persona REFERENTE y que
          nos inspira, reta y motiva a experimentar el libre albedr??o y, desde
          la voluntad propia, a asumir el control de nuestras posibilidades. Ese
          proceso de maestro y alumno es permanente y necesario en nuestras
          vidas, aunque va cambiando en las circunstancias que nos vamos
          encontrando.
        </Typography>
        <Typography paragraph>
          A la conexi??n humana para iluminar el camino de las posibilidades la
          llamaremos retroalimentaci??n.
        </Typography>
        <Typography paragraph>
          El programa ???Retroalimentaciones poderosas??? tiene como finalidad
          formar a los l??deres y/o jefes para convertir la retroalimentaci??n en
          la estrategia de liderazgo enfocada en generar una experiencia
          cotidiana de empoderamiento para responder con ??xito a un futuro
          retador.
        </Typography>
        <Typography paragraph>
          La retroalimentaci??n es la oportunidad para despertar conciencia
          (despertar el ser consciente), promover aprendizaje (incrementar
          desempe??o), inspirar calidad humana (fortalecer valores y cultura) y
          reforzar el compromiso con la organizaci??n (logro individual y
          colectivo).
        </Typography>
        <Typography paragraph>
          El gran aporte de este programa es trascender la visi??n de la
          retroalimentaci??n, de una reuni??n con gui??n, con tiempo y fecha
          programada, la cual debemos aprender a manejar muy bien con
          conversaciones poderosas, a un acompa??amiento permanente que sucede en
          la vida cotidiana, en tiempo real y que motiva y empodera, por ser
          ante todo una expresi??n del inter??s real por el otro y no solo una
          herramienta o pr??ctica de gesti??n que debemos cumplir.
        </Typography>
      </React.Fragment>
    ),
    column2: (
      <React.Fragment>
        <Typography paragraph>
          En la formaci??n, vamos a ser conscientes a los participantes de que la
          validaci??n real para la retroalimentaci??n surge de ser personas
          REFERENTES, que inspiramos confianza y autoridad moral, y que
          generamos entornos emocionales positivos con nuestra presencia y
          conversaci??n y con la capacidad de reconocer, agradecer y valorar el
          aporte.
        </Typography>
        <Typography paragraph>
          El proceso inicia con formar nuestro ser para dar lo mejor de
          nosotros. Vale la frase ???nadie da de lo que no tiene??? o mejor ???solo
          podemos dar lo que somos???.
        </Typography>
        <Typography paragraph>
          El proceso se soporta en unos principios fundamentales: mirar al otro
          como persona, comprender su realidad (no justificar), enfocar sus
          posibilidades en un logro retador (personal y organizacional) y
          realizar acuerdos honestos y cumplibles que se concreten en objetivos
          cuantitativos y cualitativos, todo esto basado en la habilidad de
          sostener conversaciones poderosas.
        </Typography>
        <Typography paragraph>
          El aporte m??s importante de retroalimentaci??n (tanto para el que da
          como para el que recibe) es despertar conciencia del impacto y las
          consecuencias del propio SER y HACER en el futuro elegido y posible.
        </Typography>
      </React.Fragment>
    ),
    icon: p8_icon,
    photo: p8_main,
    afterColumnImage: "",
    subtitle: "Retroalimentaciones Poderosas",
    subtitle2:
      "La gran estrategia del Liderazgo. Tres alimentos necesarios para que el ser humano pueda crecer y evolucionar son amor, comprensi??n y aceptaci??n.",
    title: "Transformaci??n Organizacional",
    topics: [
      {
        topic: "??Qu?? significa Retroalimentaci??n?",
        description: "",
        subtopics: [
          "Despertar conciencia desde la experiencia personal",
          "Lo deseado, lo vivido, lo mejor y lo practicado.",
        ],
      },
      {
        topic: "Frenos y Activadores",
        description: "",
        subtopics: [
          "Formato de Jerarqu??a (sistema de creencias)",
          "??Qui??n es el OTRO?",
          "De cambio a transformaci??n POSIBILIDADES",
          "Despertar conciencia",
          "De actitud de victima a actitud de l??der",
          "De pensamiento negativo a pensamiento positivo",
          "El poder de las interpretaciones (De cuentos a guiones)",
          "De trabajo a vocaci??n (acompa??amiento)",
        ],
      },
      {
        topic: "Conversaciones PODEROSAS",
        description: "",
        subtopics: [
          "Conciencia de los enemigos",
          "Conciencia de los facilitadores",
          "Aprender a percibir, preguntar, escuchar, validar y responder",
          "Escucha sin filtro",
          "Aprender a elegir y renunciar, para ser aut??ntico y coherente",
          "El impacto de la verdad",
          "Observar emociones para inspirar",
          "Cerrar compromisos para genera confianza",
        ],
      },
      {
        topic: "Reuni??n formal de retroalimentaci??n",
        description: "",
        subtopics: [
          "Los dos roles (Dar y Recibir)",
          "Planeaci??n y desenlace",
          "Apertura y Cierre",
          "??C??mo y que qued?? acordado? ",
          "Descarga emocional.",
          "Compromiso con la ACCI??N",
          "??nfasis en el C??MO: cuidar y fortalecer la CULTURA.",
        ],
      },
    ],
    footerImage: "",
    url: "",
  },
  "009": {
    id: "005",
    color: "#a6c400",
    column1: (
      <React.Fragment>
        <Typography paragraph>
          Elegir un camino en entornos turbulentos nos exige despertar
          conciencia de la esencia de aquello con lo que contamos. En este caso
          nos invita a reflexionar sobre la diferencia del aporte esperado del
          management y del liderazgo, es decir: gesti??n vs influencia.
        </Typography>
        <Typography paragraph>
          El liderazgo lo vamos a trascender de una funci??n, cargo,
          responsabilidad o nombramiento, a una manera de SER y vamos a respetar
          el management como una manera de HACER, -basada en herramientas de
          gesti??n-.
        </Typography>
        <Typography paragraph>
          El aporte esperado del l??der se origina en cuatro responsabilidades
          fundamentales:
        </Typography>
        <Typography paragraph></Typography>
      </React.Fragment>
    ),
    column2: (
      <React.Fragment>
        <Typography paragraph>
          <ol>
            <li>
              Mantener viva la VISI??N: Definida como un PROP??SITO colectivo,
              atractivo e inspirador, que une y enfoca a todas las personas de
              la organizaci??n. Incluyente, trascendente, retador, y que active
              el potencial de todos los que quiere contribuir a lograrlo,
              d??ndole vida al concepto de lo nuestro y sentido al trabajo
              diario.
            </li>
            <li>
              SER REFERENTE: Para que el liderazgo sea ante todo influencia en
              otros y genere seguidores aut??nticos, debe brotar de un buen Ser
              Humano. La idea central es calidad humana semilla de liderazgo.
            </li>
            <li>
              <Typography paragraph>
                SER REFERENTE: Para que el liderazgo sea ante todo influencia en
                otros y genere seguidores aut??nticos, debe brotar de un buen Ser
                Humano. La idea central es calidad humana semilla de liderazgo.
              </Typography>
              <Typography paragraph>
                Un verdadero l??der acepta la responsabilidad de ser REFERENTE:
                ser la persona que otros miran para validar el camino. Un
                verdadero l??der es referente de humanismo, demuestra con su
                manera de ser la posibilidad de relacionarnos para generar valor
                humano, empoderarnos y evolucionar, darle sentido al trabajo y a
                los logros colectivos y aportarle valor humano a la sociedad.
              </Typography>
              <Typography paragraph>
                Una persona logra ser l??der referente porque es consciente de su
                propio SER y de sus emociones y tiene la humildad de elegir su
                transformaci??n personal para inspirar desde la evidencia.
              </Typography>
            </li>
            <li>
              CULTURA / ??TICA: El l??der entiende que la ??tica y la cultura son
              el pilar fundamental de la sostenibilidad de la familia, la
              empresa y la sociedad, sobre todo en entornos turbulentos; por lo
              tanto, las asume como su principal responsabilidad no delegable.
              No solo para exigirlas, para volverlas un discurso, sino ante todo
              para vivirlas y cuidar la identidad ??tica como garant??a de empresa
              confiable.
            </li>
            <li>
              INTANGIBLES son los ???C??mos humanos??? (no t??cnicos) que generan
              compromiso, pasi??n, motivaci??n, etc. La base de la influencia y la
              Autoridad Moral. Los intangibles se manifiestan con la presencia e
              impactan la emocionalidad y por lo tanto se traducen en motivaci??n
              para querer pertenecer, participar y aportar.
            </li>
          </ol>
        </Typography>
      </React.Fragment>
    ),
    icon: p9_icon,
    photo: p9_main,
    afterColumnImage: "",
    subtitle: "Una oportunidad para TODOS",
    subtitle2:
      "La adversidad que impact?? el mundo de las organizaciones es hoy la gran oportunidad de repensar el liderazgo organizacional, para lograr responder, de manera exitosa, a la realidad incierta y en permanente transformaci??n que nos reta los caminos conocidos y nos abre a la posibilidad del camino elegido. ",
    title: "Semillas de liderazgo",
    topics: [
      {
        topic: "Despertar conciencia",
        description: "",
        subtopics: [
          "Observar, percibir, darse cuenta",
          "Las emociones camino de autoconocimiento",
          "Sanar el estado emocional",
          "Producir emociones sanas",
        ],
      },
      {
        topic: "Transformaci??n personal",
        description: "",
        subtopics: [
          "Transformaciones vs Cambio",
          "Las 3 grandes preguntas",
          "El significado de las posibilidades",
          "El reto la vida cotidiana",
          "El poder de la visualizaci??n",
          "Los caminos para encontrarlas",
        ],
      },
      {
        topic: "Vida con prop??sito, Legado",
        description: "",
        subtopics: [
          "Sentido de la vida",
          "Futuro elegido",
          "Actitud de escalador",
          "Esquema de felicidad",
          "Las motivaciones",
          "El Para Qu??, el legado",
        ],
      },
      {
        topic: "Ser Resiliente",
        description: "",
        subtopics: [
          "Adversidad gran maestra",
          "Aceptar y Asumir",
          "El poder de los pensamientos",
          "El poder de la acci??n",
        ],
      },
      {
        topic: "Relaciones de Liderazgo",
        description: "",
        subtopics: [
          "Monstruo del NO merecimiento",
          "Autoestima y amor positivo",
          "El encuentro con el OTRO",
          "Practicar la comprensi??n y la compasi??n",
          "Servir / Ser solidario",
          "Producir entornos emocionales positivos",
        ],
      },
      {
        topic: "Comunicar para conectar",
        description: "",
        subtopics: [
          " El formato de creencias",
          "El programa del doble juego",
          "Nos comunicamos con una imagen emocional",
          "El peso de las interpretaciones",
          "El peso de la verdad",
          "La conexi??n no se da en la escucha",
          "El valor de la reflexi??n y el discernimiento",
          "Aprender a renunciar",
        ],
      },
      {
        topic: "Ser ??tico para liderar con autoridad moral",
        description: "",
        subtopics: [
          "??tica como manera de ser",
          "Creencias, Impacto, Consecuencias, Frenos y Ant??dotos",
          "Ser Respetuoso",
          "Ser Responsable",
          "Ser Honesto",
          "Ser Confiable",
          "Ser Coherente",
          "Ser ??ntegro",
        ],
      },
    ],
    footerImage: "",
    url: "",
  },
  "010": {
    id: "005",
    color: "#009f99",
    column1: (
      <React.Fragment>
        <Typography paragraph>
          El objetivo de este proceso de formaci??n es enfocarnos en comprender
          el servicio como una expresi??n de nuestra manera de SER y no s??lo como
          un trabajo o una funci??n basada en protocolos de comportamientos
          definidos para un cargo. El servicio no se va a interiorizar como una
          estrategia de sobrevivencia sino como el compromiso de relacionarnos
          desde el amor incondicional para generar una identidad ???humana??? de SER
          para SERVIR.
        </Typography>
        <Typography paragraph>
          Vamos a elevar el nivel de conciencia de que siempre que estamos
          frente a una persona, estamos frente a una oportunidad de servir; por
          eso para aprender a servir, para motivarnos a servir no basta tener
          clientes, pacientes o usuarios sino CALIDAD HUMANA.
        </Typography>
        <Typography paragraph>
          Vamos a interiorizar la importancia de comprender y tratar al cliente
          como PERSONA, no s??lo para llenarle necesidades sino para entregarle,
          en todos los momentos de su experiencia con nosotros, lo que le
          permita sentirse mejor, salir enriquecido y quedar con un impacto
          emocional positivo y memorable.{" "}
        </Typography>
      </React.Fragment>
    ),
    column2: (
      <React.Fragment>
        <Typography paragraph>
          ??El servicio, es un compromiso colectivo que nos exige a TODOS!
          colaborar desde la responsabilidad individual. El servicio es una
          creaci??n aut??ntica:
          <ul>
            <li>
              Se teje/construye en todos los detalles de la vida cotidiana.
              Corre
            </li>
            <li>
              en paralelo a todas las ??reas de la cadena de valor. Se inspira en
            </li>
            <li>las evidencias de los l??deres y jefes.</li>
          </ul>
        </Typography>
        <Typography paragraph>
          Y finalmente la credibilidad de un proceso de formaci??n, se da cuando
          el mensaje de los actos, de las personas referentes, es coherente con
          el mensaje de la estrategia, la exigencia y el contenido de la
          formaci??n. Sin esto, el avance de los colaboradores -o la
          consolidaci??n de la estrategia o cultura- es muy lento. Por eso formar
          para crear cultura es un proceso que incluye a toda la organizaci??n.
        </Typography>
      </React.Fragment>
    ),
    icon: p10_icon,
    photo: p10_main,
    afterColumnImage: "",
    subtitle: "SER para SERVIR. Para valorar y darle sentido a la vida",
    subtitle2:
      "Interiorizar el servicio como una manera de Ser para apalancar el direccionamiento estrat??gico; responde a la necesidad de crear un diferencial incopiable en la experiencia del cliente, el usuario y el intermediario.  Diferencial que nos asegurar??a quedar grabados en su memoria por ser la empresa que genera, en cada contacto humano, un impacto emocional que enaltece la propia vida.",
    title: "Transformaci??n Organizacional",
    topics: [
      {
        topic: "??Para qu?? SERVIR?",
        description:
          "Es fundamental unir a todas las personas de la organizaci??n en una reflexi??n que genere un significado com??n sobre la realidad del negocio, la visi??n, la estrat??gica de servicio; el contexto, el impacto de la globalizaci??n, la competitividad y la competencia.\n\n Es muy importante que todas las personas, independientemente del cargo que ocupen, comprendan que el servicio, el desempe??o y la productividad son hoy ???como m??nimo???, exigencias de sobrevivencia.\n\n Todo lo anterior con la finalidad de que la estrategia de servicio se interiorice y se hagan realidad con los actos de la vida cotidiana, en todos y cada uno de los cargos.\n\n Vamos a comprender que superior a la visi??n hay una manera de sentir y hacer el trabajo, un sello o una identidad que nace de la calidad del ser que somos y que se llama SERVIR: ???la manera de ser y de relacionarnos; la expresi??n de nuestro compromiso con el ???otro???.   Vamos a darnos cuenta de que el servicio aut??ntico es superior a ayudar, cuidar o atender. Servir no se enfoca solo en satisfacer necesidades sino en aportar valor al otro, para que siempre salga mejor de nuestras manos.\n\n Lo importante no es decir que servimos, sino lograr que el cliente sienta y perciba evidencias de un diferencial emocional que trasciende al negocio y a las circunstancias.\n\n",
        subtopics: [],
      },
      {
        topic: "??A qui??n SERVIR?",
        description:
          "Despertar sensibilidad por el CLIENTE y el usuario.  Comprender la importancia de ellos como raz??n de ser y posibilidad de existir de la empresa y de nuestro trabajo.\n\n El cliente tiene una ventaja ???el escoge??? y por eso nuestro reto es cautivarlo m??s y mejor que la competencia.  Todos los que estamos compitiendo lo queremos para nuestro negocio. El reto es ser atractivos para el cliente, para ser su primera opci??n.\n\nEl cliente es el negocio, sin clientes no hay negocio, la cantidad de clientes determina el tama??o de la empresa y por lo tanto la cantidad de los puestos de trabajo. El cliente no nos necesita, aunque tenga una necesidad; nosotros lo necesitamos a ??l como semilla de futuro y sentido de negocio.\n\nEl cliente no es un c??digo, ni una necesidad, ni un formato, ni una identificaci??n.  Es ante todo una PERSONA que se materializa como cliente en la medida que comprendamos sus motivaciones y su experiencia emocional y le damos respuesta de manera excepcional: ??nica, relevante y personalizada.  El cliente tiene una necesidad real y est?? buscando qui??n se la satisfaga, pero tambi??n es un ser lleno de posibilidades que merece y anhela crecer en la relaci??n con los dem??s. Necesitamos vencer la indiferencia y despertar sensibilidad, para lograr ser su mejor aliado para realizar v??nculos duraderos.\n\n Necesitamos desarrollar una cultura basada en relaciones humanas de alto impacto, que sorprendan y cautiven al cliente para siempre. Que lo motiven a hablar no s??lo de nosotros sino de la ???experiencia de estar con nosotros???.  El reto no es s??lo cuidar al cliente; sino transformar personas en clientes.\n\n",
        subtopics: [],
      },
      {
        topic: "??C??mo SERVIR?",
        description:
          "La reflexi??n est?? encaminada a elevar el nivel de conciencia del formato y las creencias iniciales con las que aprendimos a servir.  Las personas actuamos no desde lo que sabemos; sino desde la programaci??n que se origin?? con nuestros referentes. Ese programa est?? contenido inconscientemente en las valoraciones que hacemos para definir nuestros actos.  Descubrir y reconocer esa limitaci??n es muy poderoso porque nos permite darnos cuenta de que el servicio aut??ntico no es un discurso, ni un ideal, ni un deseo; es ACTOS.  Despu??s de despertar conciencia nos abrimos a la gran posibilidad humana de elegir y reprogramar.  Y esa es el objetivo de esta experiencia reflexiva.  El reto no es lo f??cil; sino lo posible.\n\n Necesitamos aprender a servir, desde los VALORES propios de la empresa.  Tenemos que generar coherencia entre lo que dice nuestra publicidad, lo que refleja nuestra cultura y lo que perciben los clientes al estar con nosotros.  Para lograrlo haremos formaci??n en los valores corporativos.\n\n Respeto ??? Honestidad - Responsabilidad ??? Confianza ??? Compromiso - Excelencia ??? Coherencia - Integridad - Empat??a ??? Solidaridad ??? Gratitud ??? Servicio ??? Amor por la VIDA.\n\n",
        subtopics: [],
      },
      {
        topic: "??Desde QUIEN servir?",
        description:
          "El principio que gu??a esta ???l??nea tem??tica??? es: \n\n Los resultados de la vida son fruto de los actos y de las reacciones; y los actos de originan en el SER que somos.  Ese Ser est?? conforma especialmente: informaci??n inconsciente, programa de creencias, lentes perceptivos, uso del pensamiento y memorias emocionales. Por algo, es com??n afirmar: 'Uno da, de lo que tiene por dentro'. Eso nos permite afirmar que la calidad de los resultados es proporcional a la calidad del SER que somos.\n\n  Si tenemos emociones negativas contenidas, nuestros actos estar??n contaminados de ellas y por lo tanto el impacto que producimos en otros tendr?? ese matiz.\n\n Por eso para servir de manera aut??ntica, el trabajo inicia en formar nuestro SER para servir, especialmente desde la conciencia y la gesti??n de las emociones.\n\n Descubriremos entonces que parte lo que somos y de lo que reflejamos en nuestros actos, proviene de vivencias y emociones negativas guardadas en nuestro interior, en una zona oscura inconsciente que no hemos aprendido a gestionar.  Una zona de emociones negativas acumuladas que nos roba espacio para posibilidades positivas de futuro.  El trabajo reflexivo nos permitir?? liberar emociones retenidas, sanar dolores, perdonar, sacar las piedras del morral personal y descubrir el valor de trasformar el ego en generosidad.\n\n Y luego de liberar las emociones negativas que nos controlan, aprenderemos a reaccionar a las emociones negativas del entorno, aprenderemos a neutralizar, a no engancharnos.  Aprenderemos a respetar los estados emocionales del que SER que elegimos SER.\n\n  Lo haremos mediante s??miles de f??cil recordaci??n: cortar el nylon, el acuario, el torero, el cascabel: aprenderemos a neutralizar que estimulan la pr??ctica en la vida cotidiana.\n\n",
        subtopics: [],
      },
    ],
    footerImage: "",
    url: "",
  },
};

export interface IProgramDetail {
  id: string;
  color: string;
  title: string;
  icon: string;
  subtitle: string;
  subtitle2: string;
  photo: string;
  column1: any;
  column2: any;
  afterColumnImage: string;
  topics: {
    topic: string;
    description: string;
    subtopics: string[];
  }[];
  url: string;
  footerImage?: string;
}

const ProgramDetail = (_props: IProgramDetail) => {
  const location = useLocation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const program = useMemo((): any => {
    const id =
      location.pathname.split("programas/")[
        location.pathname.split("programas/").length - 1
      ];
    //@ts-ignore
    console.log(programs[id]);
    if (!!id) {
      //@ts-ignore
      return programs[id];
    }
    return undefined;
  }, [location]);

  return !program ? null : (
    <Grid
      container
      style={{
        marginTop: isMobile ? MOBILE_HEIGHT : HEIGHT,
      }}
    >
      <Header
        icon={program.icon}
        subtitle={program.subtitle}
        title={program.title}
        subtitle2={program.subtitle2}
        color={program.color}
      />
      {program.photo && (
        <img
          src={program.photo}
          alt={program.title}
          width={isMobile ? "80%" : "50%"}
          style={{ margin: "0 auto" }}
        />
      )}
      {program.dates && <Dates program={program} />}
      <Columns
        color={program.color}
        column1={program.column1}
        column2={program.column2}
      />
      {program.afterColumnImage && (
        <img
          src={program.afterColumnImage}
          alt={program.title}
          width={isMobile ? "80%" : "50%"}
          style={{ margin: "0 auto" }}
        />
      )}
      <Topics topics={program.topics} color={program.color} />
      {program.footerImage && (
        <img
          src={program.footerImage}
          alt={program.title}
          width={isMobile ? "80%" : "50%"}
          style={{ margin: "0 auto" }}
        />
      )}
      {!!program.message ? (
        <CallToAction
          color={program.color}
          url={program.url}
          message={program?.message ?? "??Quieres aprender a fluir con la vida?"}
        />
      ) : (
        <Contact />
      )}
    </Grid>
  );
};

export default ProgramDetail;
