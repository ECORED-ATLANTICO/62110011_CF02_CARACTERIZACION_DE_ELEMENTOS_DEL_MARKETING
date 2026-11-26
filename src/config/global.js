export default {
  global: {
    Name: 'Gestión y evaluación de estrategias de <em>marketing</em>',
    Description:
      'El componente formativo desarrolla los fundamentos y herramientas para diseñar, implementar y evaluar estrategias de <em>marketing</em> acordes con las condiciones del mercado y los objetivos de la organización. Aborda la ideación, innovación, prototipado, conocimiento del consumidor, creación de valor, CRM, gestión de marca, <em>marketing</em> digital, mercadeo ecológico, responsabilidad social, presupuesto, indicadores, rendimiento financiero y auditoría de mercadeo, orientados al fortalecimiento de la gestión comercial. ',
    imagenBannerPrincipal: '@/assets/curso/portada/banner-principal.png',
    fondoBannerPrincipal: '@/assets/curso/portada/fondo-banner-principal.png',
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
        titulo: 'Ideación e innovación en el mercadeo ',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Concepto de ideación',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Métodos de ideación',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Proceso de ideación',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Concepto de innovación',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo: 'Componentes de la innovación',
            hash: 't_1_5',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Diseño de propuestas de valor para el mercado',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Concepto de prototipado',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Proceso de prototipado',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Concepto de conocimiento del consumidor',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Tipos de consumidor',
            hash: 't_2_4',
          },
          {
            numero: '2.5',
            titulo: 'Concepto de creación de valor',
            hash: 't_2_5',
          },
          {
            numero: '2.6',
            titulo: 'Proceso de creación de valor',
            hash: 't_2_6',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Gestión de las relaciones y construcción de marca',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo:
              'Concepto de CRM (<em>Customer Relationship Management</em>)',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo:
              'Proceso de CRM (<em>Customer Relationship Management</em>)',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Concepto de gestión de marca',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Proceso de gestión de marca',
            hash: 't_3_4',
          },
          {
            numero: '3.5',
            titulo: 'Concepto de co-creación',
            hash: 't_3_5',
          },
          {
            numero: '3.6',
            titulo: 'Proceso de co-creación',
            hash: 't_3_6',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Estrategias de mercadeo sostenible y digital',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Concepto de <em>marketing</em> digital',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Componentes del <em>marketing</em> digital',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Concepto de mercadeo ecológico',
            hash: 't_4_3',
          },
          {
            numero: '4.4',
            titulo: 'Componentes del mercadeo ecológico',
            hash: 't_4_4',
          },
          {
            numero: '4.5',
            titulo: 'Proceso del mercadeo ecológico',
            hash: 't_4_5',
          },
          {
            numero: '4.6',
            titulo: 'Concepto de responsabilidad social',
            hash: 't_4_6',
          },
          {
            numero: '4.7',
            titulo: 'Protocolos del proceso de responsabilidad social',
            hash: 't_4_7',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Planeación financiera del mercadeo',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Concepto de presupuesto',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Tipos de presupuesto',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo: 'Componentes del presupuesto',
            hash: 't_5_3',
          },
          {
            numero: '5.4',
            titulo: 'Concepto de rendimiento financiero',
            hash: 't_5_4',
          },
          {
            numero: '5.5',
            titulo: 'Herramientas para evaluar el rendimiento financiero',
            hash: 't_5_5',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Evaluación y control del plan de mercadeo',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '6.1',
            titulo: 'Concepto de indicadores de resultado',
            hash: 't_6_1',
          },
          {
            numero: '6.2',
            titulo: 'Características de los indicadores',
            hash: 't_6_2',
          },
          {
            numero: '6.3',
            titulo: 'Clases de indicadores de resultado',
            hash: 't_6_3',
          },
          {
            numero: '6.4',
            titulo: 'Concepto de auditoría de mercadeo',
            hash: 't_6_4',
          },
          {
            numero: '6.5',
            titulo: 'Proceso de auditoría de mercadeo',
            hash: 't_6_5',
          },
          {
            numero: '6.6',
            titulo: 'Componentes de la auditoría de mercadeo',
            hash: 't_6_6',
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
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/62110011_CF02_CFA.pdf',
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
  glosario: [
    {
      termino: 'Auditoría de mercadeo',
      significado:
        'Evaluación sistemática de estrategias, procesos y resultados de mercadeo para identificar fortalezas, oportunidades de mejora y apoyar decisiones organizacionales.',
    },
    {
      termino: 'Co-creación',
      significado:
        'Proceso colaborativo donde empresa y clientes participan conjuntamente en el diseño, mejora o desarrollo de productos, servicios y experiencias.',
    },
    {
      termino: 'Conocimiento del consumidor',
      significado:
        'Proceso de recopilación y análisis de información sobre necesidades, preferencias, comportamientos y expectativas para orientar decisiones de <em>marketing</em>.',
    },
    {
      termino: 'Creación de valor',
      significado:
        'Proceso mediante el cual una organización genera beneficios diferenciadores que satisfacen necesidades del cliente y fortalecen su competitividad.',
    },
    {
      termino: 'CRM (<em>Customer Relationship Management</em>)',
      significado:
        'Estrategia de gestión que permite administrar las relaciones con los clientes para fortalecer la fidelización, satisfacción y rentabilidad.',
    },
    {
      termino: 'Gestión de marca',
      significado:
        'Conjunto de acciones orientadas a construir, posicionar, fortalecer y mantener la identidad, imagen y valor de una marca.',
    },
    {
      termino: 'Ideación',
      significado:
        'Proceso creativo para generar, seleccionar y desarrollar ideas que respondan a necesidades, oportunidades o desafíos del mercado.',
    },
    {
      termino: 'Indicadores de resultado',
      significado:
        'Medidas que permiten evaluar el desempeño, cumplimiento de objetivos y efectividad de las estrategias de <em>marketing</em>.',
    },
    {
      termino: 'Innovación',
      significado:
        'Aplicación de nuevas ideas, procesos o soluciones que generan valor y mejoran la competitividad de la organización.',
    },
    {
      termino: '<em>Marketing</em> digital',
      significado:
        'Estrategias y acciones desarrolladas mediante canales digitales para atraer, convertir, fidelizar clientes y medir resultados comerciales.',
    },
    {
      termino: 'Mercadeo ecológico',
      significado:
        'Estrategia orientada a satisfacer necesidades del mercado mediante prácticas responsables con el ambiente y el desarrollo sostenible.',
    },
    {
      termino: 'Presupuesto',
      significado:
        'Plan financiero que estima ingresos, costos y recursos necesarios para ejecutar estrategias y actividades de <em>marketing</em>.',
    },
    {
      termino: 'Prototipado',
      significado:
        'Proceso de creación de modelos preliminares para validar ideas, productos o servicios antes de su implementación definitiva.',
    },
    {
      termino: 'Rendimiento financiero',
      significado:
        'Medición de los resultados económicos obtenidos por las estrategias de <em>marketing</em> en relación con la inversión realizada.',
    },
    {
      termino: 'Responsabilidad social',
      significado:
        'Compromiso organizacional de desarrollar acciones éticas, sostenibles y responsables con la sociedad, los colaboradores y el ambiente.',
    },
  ],
  referencias: [
    {
      referencia:
        'Departamento Administrativo de la Función Pública. (2018). Guía para la construcción y análisis de indicadores de gestión (versión 4).',
      link: 'https://www.funcionpublica.gov.co/detalle-publicacion?entryId=768337&utm',
    },
    {
      referencia:
        'Kotler, P., & Armstrong, G. (2021). Fundamentos de <em>marketing</em> (19.ª ed.). Pearson Educación.',
      link: '',
    },
    {
      referencia:
        'Kotler, P., Kartajaya, H., & Setiawan, I. (2021). <em>Marketing</em> 5.0: Tecnología para la humanidad. LID Editorial.',
      link: 'https://www.lideditorial.com/',
    },
    {
      referencia:
        'Kotler, P., Keller, K. L., & Chernev, A. (2022). Dirección de <em>marketing</em> (16.ª ed.). Pearson Educación.',
      link: '',
    },
    {
      referencia:
        'Lozano, G. (1984). Promoción de ventas. Servicio Nacional de Aprendizaje (SENA).',
      link: 'https://repositorio.sena.edu.co/bitstream/handle/11404/5441/tecnicas_de_comercializacion_5.PDF?sequence=1&isAllowed=y',
    },
    {
      referencia:
        'Malhotra, N. K. (2020). Investigación de mercados (7.ª ed.). Pearson Educación.',
      link: '',
    },
    {
      referencia:
        'Schiffman, L. G., & Wisenblit, J. (2015). Comportamiento del consumidor (11.ª ed.). Pearson Educación.',
      link: '',
    },
    {
      referencia:
        'Osterwalder, A., Pigneur, Y., Bernarda, G., & Smith, A. (2015). Diseñando la propuesta de valor. Deusto.',
      link: '',
    },
    {
      referencia:
        'Ecoe Ediciones. (2023). <em>Marketing</em> digital: Estrategias para la transformación empresarial.',
      link: 'https://ecoeediciones.com/',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Profesional G06. Responsable Ecosistema Virtual de Recursos Educativos Digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Miguel de Jesús Paredes Maestre ',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Mario Morales Cabrera',
          cargo: 'Experta temática',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Jair Coll Gallardo',
          cargo: 'Evaluador Instruccional',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Carmen Marcela Guerrero Arévalo',
          cargo: 'Diseñador de contenidos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Fabio Fonseca Arguelles',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Alexander Rafael Acosta Bedoya',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Nelson Iván Vera Briceño',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Luz Karime Amaya Cabra',
          cargo: 'Evaluadora de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Karine Isabel Ospino Fritz',
          cargo: 'Evaluadora de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Laura Daniela Burgos Rueda',
          cargo: 'Validadora y vinculadora de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Jonathan Adié Villafañe',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
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
