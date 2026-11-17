export default {
  global: {
    Name: 'Gestión y evaluación de estrategias de <em>marketing</em>',
    Description:
      'El componente formativo desarrolla los fundamentos y herramientas para diseñar, implementar y evaluar estrategias de marketing acordes con las condiciones del mercado y los objetivos de la organización. Aborda la ideación, innovación, prototipado, conocimiento del consumidor, creación de valor, CRM, gestión de marca, marketing digital, mercadeo ecológico, responsabilidad social, presupuesto, indicadores, rendimiento financiero y auditoría de mercadeo, orientados al fortalecimiento de la gestión comercial. ',
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
            titulo: 'Concepto de marketing digital',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Componentes del marketing digital',
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
        download: 'downloads/dist.pdf',
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
      termino: 'Término',
      significado: 'Definición',
    },
  ],
  referencias: [
    {
      referencia: 'REF',
      link: 'LINK',
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
          nombre: 'Nombre responsable',
          cargo: 'Nombre del rol',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Nombre del rol',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Nombre del rol',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Diseñador de contenidos',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Nombre responsable',
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
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Laura Daniela Burgos Rueda',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Jonathan Adié Villafañe',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Karine Isabel Ospino Fritz',
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
