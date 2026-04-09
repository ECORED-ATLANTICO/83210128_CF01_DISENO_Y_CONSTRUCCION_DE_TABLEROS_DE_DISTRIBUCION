export default {
  global: {
    Name: 'Análisis, medición y cálculo de parámetros eléctricos en circuitos',
    Description:
      'Este componente formativo fortalece las competencias necesarias para analizar, medir y calcular parámetros eléctricos en circuitos. Permite al aprendiz comprender magnitudes e instrumentos de medición, aplicar leyes fundamentales y desarrollar habilidades técnicas para interpretar y evaluar el comportamiento de sistemas eléctricos de acuerdo con los requerimientos del sector productivo.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-4.svg'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Fundamentos de electricidad',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Estructura del átomo y flujo de electrones',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Carga eléctrica y campo eléctrico',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Corriente eléctrica: AC y DC',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo:
              'Magnitudes eléctricas básicas: tensión, corriente, resistencia, potencia',
            hash: 't_1_4',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Materiales y componentes eléctricos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Conductores, semiconductores y aislantes',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo:
              'Componentes de un circuito: fuente, carga, protección, conductor, interruptor',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Tipos de protecciones y su función en el circuito',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Instrumentos de medición eléctrica',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Identificación de instrumentos',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Uso del multímetro para medir V, I, R',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Unidades y rangos de medición',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Seguridad en la medición eléctrica',
            hash: 't_3_4',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Métodos de conexionado eléctrico',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Circuitos en serie',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Circuitos en paralelo',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Sistemas mixtos',
            hash: 't_4_3',
          },
          {
            numero: '4.4',
            titulo: 'Interpretación de diagramas y simbología',
            hash: 't_4_4',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Análisis de parámetros eléctricos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Ley de Ohm',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Ley de Watt',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo: 'Leyes de Kirchhoff (KVL y KCL)',
            hash: 't_5_3',
          },
          {
            numero: '5.4',
            titulo: 'Aplicación en circuitos prácticos en simuladores',
            hash: 't_5_4',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Cálculo de parámetros eléctricos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '6.1',
            titulo: 'Resistencia equivalente (serie/paralelo)',
            hash: 't_6_1',
          },
          {
            numero: '6.2',
            titulo: 'Cálculo de tensión, corriente y potencia',
            hash: 't_6_2',
          },
          {
            numero: '6.3',
            titulo: 'Pérdidas y consideraciones básicas de diseño',
            hash: 't_6_3',
          },
          {
            numero: '6.4',
            titulo: 'Comparación entre valores teóricos y medidos',
            hash: 't_6_4',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/CFA1_83210128_DU.zip',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: '',
      referencia: '',
      tipo: '',
      link: '',
    },
  ],
  glosario: [
    {
      termino: 'Amperio (A)',
      significado:
        'Unidad de medida de la corriente eléctrica. Representa la cantidad de carga que circula por un conductor en un segundo.',
    },
    {
      termino: 'Amperímetro',
      significado:
        'Instrumento utilizado para medir la corriente eléctrica. Se conecta en serie con el circuito.',
    },
    {
      termino: 'Aislación eléctrica',
      significado:
        'Barreras o materiales utilizados para evitar el paso de corriente no deseada entre conductores o hacia el usuario.',
    },
    {
      termino: 'Arco eléctrico',
      significado:
        'Descarga eléctrica que se produce entre dos puntos con diferencia de potencial, capaz de generar altas temperaturas.',
    },
    {
      termino: 'Campo eléctrico',
      significado:
        'Región donde una carga experimenta una fuerza debido a la presencia de otra carga. Sus líneas indican dirección e intensidad.',
    },
    {
      termino: 'Capacitancia',
      significado:
        'Propiedad de algunos componentes (capacitores) para almacenar carga eléctrica en un campo eléctrico.',
    },
    {
      termino: 'Carga eléctrica',
      significado:
        'Propiedad física de las partículas que hace que interactúen entre sí. Puede ser positiva o negativa y se mide en coulomb.',
    },
    {
      termino: 'Circuito eléctrico',
      significado:
        'Conjunto de elementos interconectados que permiten el flujo controlado de corriente (fuente, carga, conductores, protección).',
    },
    {
      termino: 'Corriente alterna (AC)',
      significado:
        'Tipo de corriente cuyo flujo cambia de dirección periódicamente, normalmente con forma sinusoidal.',
    },
    {
      termino: 'Corriente continua (DC)',
      significado:
        'Corriente cuyo flujo se mantiene siempre en un solo sentido, típica en baterías y paneles solares.',
    },
    {
      termino: 'Coulomb (C)',
      significado:
        'Unidad del SI para medir la carga eléctrica. Representa la cantidad de carga que pasa por un punto cuando fluye un amperio durante un segundo.',
    },
    {
      termino: 'Diferencia de potencial (Voltaje)',
      significado:
        'Energía necesaria para desplazar una carga eléctrica entre dos puntos. Se mide en voltios.',
    },
    {
      termino: 'Electrón',
      significado:
        'Partícula subatómica con carga negativa cuyo movimiento genera corriente eléctrica en los conductores.',
    },
    {
      termino: 'Fuente eléctrica',
      significado:
        'Dispositivo que suministra energía a un circuito. Puede entregar AC o DC.',
    },
    {
      termino: 'Ley de Ohm',
      significado:
        'Relación entre tensión, corriente y resistencia: V = I × R.',
    },
    {
      termino: 'Ohmio (Ω)',
      significado:
        'Unidad de medida de la resistencia eléctrica. Indica la oposición al paso de corriente.',
    },
    {
      termino: 'Potencia eléctrica (W)',
      significado:
        'Energía consumida o entregada por un dispositivo en un tiempo determinado. Se calcula como P = V × I.',
    },
    {
      termino: 'Reactancia',
      significado:
        'Oposición al paso de corriente alterna causada por inductores y capacitores, distinta de la resistencia. ',
    },
    {
      termino: 'Resistencia eléctrica',
      significado:
        'Oposición que presenta un material al paso de la corriente. Depende del material, temperatura y dimensiones.',
    },
    {
      termino: 'Sobretensión',
      significado:
        'Incremento temporal del voltaje por encima del valor nominal del circuito, potencialmente dañino para los equipos.',
    },
    {
      termino: 'Voltímetro',
      significado:
        'Instrumento que mide la tensión eléctrica. Se conecta en paralelo.',
    },
    {
      termino: 'Voltio (V)',
      significado:
        'Unidad para expresar la diferencia de potencial eléctrico entre dos puntos.',
    },
  ],
  referencias: [
    {
      referencia:
        'Alexander, C. K., & Sadiku, M. N. (2017). <em>Fundamentals of Electric Circuits</em>. McGraw-Hill Education.',
    },
    {
      referencia:
        'BigMat Tech. (2025). <em>¿Qué son las magnitudes eléctricas y cómo se conectan entre sí?</em>',
      link:
        'https://www.bigmat.es/es/blog/d/que-son-las-magnitudes-electricas-y-como-se-conectan-entre-si-18132',
    },
    {
      referencia:
        'Boylestad, R., & Nashelsky, L. (2015). <em>Electrónica: Teoría de Circuitos</em>. Pearson.',
    },
    {
      referencia: 'Coursera. (2024). <em>Fundamentals of Electricity</em>.',
      link: 'https://www.coursera.org/learn/electricity',
    },
    {
      referencia:
        'EdTech Electricity. (2023). <em>Understanding Basic Electrical Parameters</em>.',
    },
    {
      referencia:
        'Floyd, T. L. (2018). <em>Principios de Circuitos Eléctricos</em>. Pearson.',
    },
    {
      referencia: 'Hambley, A. (2014). <em>Electrónica</em>. Pearson.',
    },
    {
      referencia:
        'Hughes, E. (2016). <em>Electrical and Electronic Technology</em>. Pearson.',
    },
    {
      referencia:
        'IEEE Standards Association. (2024). <em>IEEE Electrical Standards Collection</em>.',
    },
    {
      referencia:
        'Ingenierizando. (2026). <em>Magnitudes eléctricas: conceptos y cálculos fundamentales</em>.',
      link: 'https://www.ingenierizando.com/electronica/magnitudes-electricas/',
    },
    {
      referencia:
        'Khan Academy. (2025). <em>Electric Charge and Electric Field</em>.',
      link: 'https://www.khanacademy.org/science/physics',
    },
    {
      referencia:
        'Modern Electrical Learning. (2025). <em>AC/DC Fundamentals and Applications</em>. OpenStax College. (2024). <em>Physics</em>.',
      link: 'https://openstax.org/details/books/physics',
    },
    {
      referencia:
        'Nilsson, J., & Riedel, S. (2019). <em>Electric Circuits</em>. Pearson.',
    },
    {
      referencia:
        'PhET Interactive Simulations – University of Colorado Boulder. (2024). <em>Simulaciones eléctricas interactivas</em>.',
      link:
        'https://phet.colorado.edu/es/simulations/filter?subjects=physics&types=html,prototype',
    },
    {
      referencia:
        'Serway, R., & Jewett, J. (2014). <em>Física para Ciencias e Ingeniería</em>. Cengage Learning.',
    },
    {
      referencia:
        'TechEdu Labs. (2023). <em>Direct and Alternating Current Principles</em>.',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Responsable del Ecosistema de Recursos Educativos Digitales (RED)',
          centro: 'Dirección General',
        },
        {
          nombre: 'Miguel de Jesús Paredes Maestre',
          cargo: 'Responsable de la línea de producción',
          centro: 'Centro de Comercio y Servicios – Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'María Fernanda Morales Angulo',
          cargo: 'Evaluador instruccional',
          centro: 'Centro de Comercio y Servicios – Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Luis Gabriel Urueta',
          cargo: 'Diseñador web',
          centro: 'Centro de Comercio y Servicios – Regional Atlántico',
        },
        {
          nombre: 'Álvaro Guillermo Araújo Angarita',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro de Comercio y Servicios – Regional Atlántico',
        },
        {
          nombre: 'Alexander Rafael Acosta Bedoya',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios – Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Luz Karime Amaya Cabra',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios – Regional Atlántico',
        },
        {
          nombre: 'Laura Daniela Burgos Rueda',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios – Regional Atlántico',
        },
        {
          nombre: 'Jonathan Adié Villafañe',
          cargo: 'Validador y vinculador de recursos digitales',
          centro: 'Centro de Comercio y Servicios – Regional Atlántico',
        },
        {
          nombre: 'Karine Isabel Ospino Fritz',
          cargo: 'Validador y vinculador de recursos digitales',
          centro: 'Centro de Comercio y Servicios – Regional Atlántico',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
