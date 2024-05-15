export default {
  global: {
    componenteFormativo: 'Fundamentos de la calidad del <em>software</em>',
    descripcionCurso:
      'En este componente formativo, el aprendiz identificará que un <em>software</em> con calidad implica la utilización de metodologías o procedimientos estándares para el análisis, diseño, programación y prueba, que permitan uniformar la filosofía de trabajo, en aras de lograr una mayor confiabilidad, mantenibilidad y facilidad de prueba, a la vez que eleven la productividad, tanto para la labor de desarrollo como para el control de la calidad del <em>software</em>.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.png'),
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
        titulo: 'Descripción de la idea de negocio',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Marco de referencia',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Proceso de desarrollo de <em>software</em>',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Estándares ISO/IEC 25000 SQuaRE, ISO/IEC 15504, IEEE',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo:
              ' Modelo de desarrollo CMMI (<em>Capability Maturity Model Integration</em>)',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Calidad en el proceso de desarrollo de <em>software</em>',
            hash: 't_2_4',
          },
          {
            numero: '2.5',
            titulo: 'Modelos de referencia para la calidad en el proceso',
            hash: 't_2_5',
          },
          {
            numero: '2.6',
            titulo: 'Calidad del <em>software</em> relacionada con el producto',
            hash: 't_2_6',
          },
          {
            numero: '2.7',
            titulo: 'Calidad relacionada con las personas',
            hash: 't_2_7',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Documentar el proceso de calidad de <em>software</em>',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Diseñar los instrumentos de calidad de <em>software</em>',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Aplicar los instrumentos de calidad de <em>software</em>',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Análisis y entrega de resultados',
            hash: 't_3_3',
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
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/228118_CF34_DU.pdf',
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
      tema: 'PSP/TSP',
      referencia:
        'Callejas-Cuervo, M. & Alarcón-Aldana, A. C. (2017). Modelos de calidad del <em>software</em>, un estado del arte. <em>Entramado</em>, 13(1), pp. 236–250. ',
      tipo: 'Artículo',
      link:
        'https://revistas.unilibre.edu.co/index.php/entramado/article/view/428 ',
    },
    {
      tema: 'Modelo CMMI',
      referencia:
        'Chavarría, A., Bayona Oré, S. & Pastor, C. (2016). Aseguramiento de la Calidad en el Proceso de Desarrollo de <em>Software</em> utilizando CMMI, TSP y PSp. Risti, 20(12), pp.62-77.',
      tipo: 'Artículo',
      link: 'https://scielo.pt/pdf/rist/n20/n20a06.pdf ',
    },
    {
      tema: 'Diseñar los instrumentos de calidad de <em>software</em>',
      referencia:
        'Ch Ga, F. (2017). <em>Plan de pruebas de software</em>. Mundo Testing.',
      tipo: 'Página web',
      link: 'https://mundotesting.com/plan-de-pruebas-de-software/',
    },
    {
      tema: '',
      referencia: 'ISO/IEC/IEEE 29148:2011. (s. f.). ISO. ',
      tipo: 'Página web',
      link: 'https://www.iso.org/standard/45171.html',
    },
    {
      tema: 'Calidad de <em>software</em> en metodologías ágiles',
      referencia:
        'Canós, J. H., Letelier, P., & Penad, C. (s.f.). <em>Metodologías Ágiles en el Desarrollo de Software</em>.',
      tipo: 'Artículo',
      link:
        'http://aleteya.cs.buap.mx/~jlavalle/papers/agileMethodology/TodoAgil.pdf ',
    },
  ],
  glosario: [
    {
      termino: 'Incidencia',
      significado:
        'suceso que se produce durante una actividad y puede causar, una disminución de calidad de este.',
    },
    {
      termino: 'PSP',
      significado: '<em>Personal Software Personal</em>.',
    },
    {
      termino: 'QA',
      significado: 'Calidad de <em>software</em>.',
    },
    {
      termino: 'SQA',
      significado: 'Aseguramiento de la calidad de <em>software</em>.',
    },
    {
      termino: 'TSP',
      significado: '<em>Teams Software Personal</em>.',
    },
  ],
  referencias: [
    {
      referencia:
        'Beck, K., & Andres, C. (2004b). <em>Extreme Programming Explained: Embrace Change, 2nd Edition (The XP Series)</em> (2nd ed.). Addison-Wesley.',
      link: '',
    },
    {
      referencia:
        'Bustamante Ramírez, J. (2011). <em>Sistema de informes para pruebas de software</em>',
      link: 'http://bibliotecadigital.iue.edu.co/xmlui/handle/20.500.12717/153',
    },
    {
      referencia:
        'Jeffries, R. (2011). <em>What is Extreme Programming</em>? Ronjeffries.Com.',
      link: 'https://ronjeffries.com/xprog/what-is-extreme-programming/',
    },
    {
      referencia:
        'Kruchten, P. (2003). <em>The Rational Unified Process: An Introduction</em> (3rd Edition) (3rd ed.). Addison-Wesley Professional.',
      link: '',
    },
    {
      referencia:
        'Maida, EG, Pacienzia, J. (2015). <em>Metodologías de desarrollo de software</em> [en línea]. Tesis de Licenciatura en Sistemas y Computación. Facultad de Química e Ingeniería “Fray Rogelio Bacon”. Universidad Católica Argentina, 2015',
      link:
        'https://repositorio.uca.edu.ar/bitstream/123456789/522/1/metodologias-desarrollo-software.pdf',
    },
    {
      referencia:
        'Manifiesto por el Desarrollo Ágil de Software. (2001). Agilemanifesto.Org.',
      link: 'https://agilemanifesto.org/iso/es/manifesto.html',
    },
    {
      referencia:
        'Martin, J. (1991). <em>Rapid Application Development</em>. Macmillan Coll Div.',
      link: '',
    },
    {
      referencia:
        'Mera Paz, J. A. (19 de 10 de 2016). <em>Pruebas de Calidad software</em>.',
      link: 'https://repository.ucc.edu.co/handle/20.500.12494/962',
    },
    {
      referencia:
        'Royce, W.W. (1970) <em>Managing the Development of Large Software Systems</em>. Proceedings of IEEE WESCON, 26, 328-388.',
      link: '',
    },
    {
      referencia:
        'SCRUMstudy. (2013). <em>A Guide to the Scrum Body of Knowledge</em> (<em>SBOK Guide</em>) (2013th ed.). VMEdu Inc.',
      link: '',
    },
    {
      referencia:
        'Sommerville, I., Galipienso, M. I. A., & Martinez, A. B. (2005). <em>Ingenieria del Software</em>. Pearson Educación.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Líder del Ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Olga Constanza Bermudez Jaimes',
          cargo: 'Responsable de Línea de Producción',
          centro:
            'Centro de Formación Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Ervin Andrade',
          cargo: 'Experto temático',
          centro:
            'Centro de Teleinformática y Producción Industrial - Regional Cauca',
        },
        {
          nombre: 'Peter Emerson Pinchao Solis',
          cargo: 'Experto temático',
          centro:
            'Centro de Teleinformática y Producción Industrial - Regional Cauca',
        },
        {
          nombre: 'Ana Catalina Córdoba Sus',
          cargo: 'Evaluadora Instruccional',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Blanca Flor Tinoco Torres',
          cargo: 'Diseñador de Contenidos Digitales',
          centro:
            'Centro de Formación Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Luis Jesús Pérez Madariaga',
          cargo: 'Desarrollador Fullstack',
          centro:
            'Centro de Formación Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Edgar Mauricio Cortés García',
          cargo: 'Actividad Didáctica',
          centro:
            'Centro de Formación Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Jaime Hernán Tejada Llano',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro:
            'Centro de Formación Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Margarita Marcela Medrano Gómez',
          cargo: 'Evaluador para Contenidos Inclusivos y Accesibles',
          centro:
            'Centro de Formación Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para Contenidos Inclusivos y Accesibles',
          centro:
            'Centro de Formación Centro de Servicios de Salud - Regional Antioquia',
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
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
