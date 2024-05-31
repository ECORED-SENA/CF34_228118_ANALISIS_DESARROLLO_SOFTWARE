<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Documentar el proceso de calidad de #[em software]
    
    .cont_3_1
      .col-xl-11.m-auto.mt-4
        .cont_3_2.p-4.p-lg-0
          .row
            .col-lg-3.mb-4.mb-lg-0(data-aos="fade-right" style="place-self:center;")
              figure.m-auto.col-8.col-md-7.col-lg-12
                img(src="@/assets/curso/tema3/1.png")
            .col-lg-9.p-0.p-lg-5.ps-lg-0(data-aos="fade-left" style="place-self:center;")
              p.mb-0 La documentación de productos de #[em software] son artefactos importantes, dado que estos permiten transferir y comunicar aspectos que al revisar o inspeccionar un sistema no se pueden entender rápidamente y suele ser complicado, por tal razón es que se documenta para comprender, compartir y mostrar el comportamiento y la estructura de un sistema o de sus componentes, controlar y visualizar la arquitectura del sistema y controlar el riesgo, además la documentación debe utilizarse para el desarrollo del producto #[em software] y su mantenimiento en el futuro resaltando que no solo se documenta un proceso respecto a la calidad, sino, también las fases del desarrollo del #[em software], requerimientos, análisis, diseño, construcción y pruebas. Sin embargo, cuando se requiere documentar un proceso de calidad de #[em software] es pertinente tener en cuenta tanto el plan de pruebas como los resultados arrojados que se muestran en los apartados siguientes. 
    
      Separador

      .titulo-segundo(data-aos="flip-up")
        h2#t_3_1 3.1  Diseñar los instrumentos de calidad de #[em software]
      
      .row
        .col(style="place-self:center;" data-aos="fade-right")
          p.mb-0 Los instrumentos de calidad de software, al ser combinados con otras partes, son útiles al momento de realizar mediciones, observar y almacenar datos que sean verificables y que se puedan utilizar para mejoras continuas en los procesos de calidad de un producto. Entonces para documentar pruebas de software, es importante ver el plan de pruebas como un instrumento clave en el diseño y creación de pruebas de software.
        .col-auto.d-none.d-md-block(style="place-self:center;" data-aos="fade-left")
          figure
            img(src="@/assets/curso/tema3/2.svg")

      .cont_titulo_decorativo.mt-5(data-aos="fade-right")
        .row
          .col-auto.pe-0
            figure.ps-2
              img(src="@/assets/curso/tema2/3.svg")
          .col(style="place-self:center;")
            h4.mb-0.pe-4.text-white(style="padding-top:7px;") Plan de pruebas
      
      .row
        .col-lg-8.mb-4.mb-lg-0(data-aos="fade-right" style="place-self:center;")
          p Un instrumento de gran utilidad para estructurar el proceso de pruebas y la documentación es el plan de pruebas. Por lo tanto, la finalidad es suministrar la información requerida para planear y controlar las actividades relacionadas con las pruebas en el proceso de desarrollo de un producto #[em software]. Presenta el enfoque para realizar la verificación de los componentes del producto. Todo proceso de desarrollo de #[em software] debe contar con la implementación de la fase de pruebas. 
          p.mt-4 El personal que se dedica a ejecutar pruebas de #[em software] requiere de un plan de pruebas de #[em software], cuyo objetivo es comunicar a todos los involucrados del proyecto: los entregables, ítems a ser certificados, criterios de aprobación y fallos, criterios de suspensión y reanudación, las necesidades de ambiente, las capacitaciones necesarias para los integrales del equipo, riesgos y el laboratorio de usabilidad.
          .p-3.mt-4(style="background-color:#DEBEFB;border-radius:12px;")
            .row
              .col-auto(style="place-self:center;")
                figure
                  img(src="@/assets/curso/tema3/3.svg")
              .col(style="place-self:center;")
                p.mb-0 El plan se puede aplicar a todo el proyecto y se ajusta a las necesidades de cada empresa, teniendo en cuenta el tamaño del proyecto, el tiempo, el costo, el ciclo de vida del #[em software], los involucrados.
        .col-lg-4(data-aos="fade-left" style="place-self:center;")
          figure.m-auto.col-8.col-md-8.col-lg-12
            img(src="@/assets/curso/tema3/4.svg")
    
    p.mt-4(data-aos="fade-right") Cada entidad puede definir su propio plan de pruebas, basados en buenas prácticas, de acuerdo con las siguientes características:

    .row.mt-5
      .col-lg-3.mb-4.mb-lg-0(data-aos="fade-right")
        figure.m-auto.col-7.col-md-7.col-lg-12
          img(src="@/assets/curso/tema3/5.svg")
      .col-lg-9(data-aos="fade-left")
        TabsA.color-acento-botones
          .tarjeta.color-acento-botones.p-4(titulo="El plan de prueba" style="background-color:#ECF2FF;")
            h4(style="color:#12263F;") El plan de prueba
            p(style="color:#12263F;") Denota todos los procedimientos y métodos que serán empleados para la certificación del #[em(style="color:#12263F;") software] determinando, si cumple con las especificaciones presentadas en los requisitos y dadas por el cliente. Este incluye los objetivos de calidad, los recursos, cronograma, asignaciones, y métodos, entre otros. 
          .tarjeta.color-acento-botones.p-4(titulo="Casos de prueba" style="background-color:#ECF2FF;")
            h4(style="color:#12263F;") Casos de prueba
            p(style="color:#12263F;") Listar los ítems que serán certificados y describe detalladamente los pasos que serán ejecutados para evaluar la verificación de las funcionalidades del producto #[em(style="color:#12263F;") software].
          .tarjeta.color-acento-botones.p-4(titulo="Reporte de pruebas" style="background-color:#ECF2FF;")
            h4(style="color:#12263F;") Reporte de pruebas
            p(style="color:#12263F;") Describe los fallos encontrados en el proceso de ejecución de pruebas y las pruebas exitosas. 
    
    .cont_3_3.mt-4.pt-4.pt-lg-5
      .cont_titulo_decorativo.mt-5(data-aos="fade-right")
        .row
          .col-auto.pe-0
            figure.ps-2
              img(src="@/assets/curso/tema2/3.svg")
          .col(style="place-self:center;")
            h4.mb-0.pe-4.text-white(style="padding-top:7px;") Formatos
      
      p(data-aos="fade-left") Recordemos que el estándar ISO/IEC/IEEE 29119-3:2013 es un instrumento que suministra una serie de artefactos validados a nivel internacional por las organizaciones a la vanguardia del proceso de desarrollo de #[em software], y a su vez al margen de la ejecución de pruebas de #[em software]. Los de mayor reconocimiento son:

      .row.mt-5.justify-content-center
        .col-lg.mb-4.mb-lg-0.col-md-9(data-aos="zoom-in")
          .h-100.p-4.pt-3.text-white(style="background-color:#3A1D71;border-radius:15px;")
            .row
              .col-auto(style="place-self:center;")
                figure
                  img(src="@/assets/curso/tema3/6.svg")
              .col(style="place-self:center;")
                p.mb-0 Documentación de proceso de pruebas (a escala) organizacional.
        .col-lg.mb-4.mb-lg-0.col-md-9(data-aos="zoom-in")
          .h-100.p-4.pt-3.text-white(style="background-color:#3A1D71;border-radius:15px;")
            .row
              .col-auto(style="place-self:center;")
                figure
                  img(src="@/assets/curso/tema3/7.svg")
              .col(style="place-self:center;")
                p.mb-0 Documentación del proceso de gestión de pruebas.
        .col-lg.mb-4.mb-lg-0.col-md-9(data-aos="zoom-in")
          .h-100.p-4.pt-3.text-white(style="background-color:#3A1D71;border-radius:15px;")
            .row
              .col-auto(style="place-self:center;")
                figure
                  img(src="@/assets/curso/tema3/8.svg")
              .col(style="place-self:center;")
                p.mb-0 Documentación del proceso de pruebas dinámicas.
      
      .cont_titulo_decorativo.mt-5(data-aos="fade-right")
        .row
          .col-auto.pe-0
            figure.ps-2
              img(src="@/assets/curso/tema2/3.svg")
          .col(style="place-self:center;")
            h4.mb-0.pe-4.text-white(style="padding-top:7px;") Artefactos de prueba
      
      p(data-aos="fade-left") Los productos que resultan del proceso de desarrollo de #[em software] son identificados como artefactos, por ejemplo, el código fuente, defectos, plan y script de pruebas.
      p.mt-4(data-aos="fade-right") La calidad de #[em software] se compone de artefactos específicos que se forman en las diversas etapas del proceso de SQA, como se observa a continuación.

      .mt-5.col-xl-10.m-auto
        .cont_3_4_1.p-4.p-lg-0(data-aos="zoom-in")
          .row
            .col-lg-auto.pe-lg-0.mb-4.mb-lg-0(style="place-self:center;")
              .p-4.text-center.m-auto.text-white(style="background-color:#A854F3;border-radius:30px;max-width:fit-content;min-width:200px;")
                figure
                  img(src="@/assets/curso/tema3/9.svg" style="display:inline;max-width:50px;")
                p.fw-bold.mb-0 PLANIFICACIÓN
            .col-lg
              .p-lg-4
                p #[strong Plan de pruebas:] documento que describe un enfoque sistemático para probar un sistema.
                p.mt-4.mb-0 #[strong Informe de resultados de pruebas:] organiza y presenta un análisis resumido de los resultados de las pruebas para su auditoría y evaluación. Este informe debe incluir un listado de defectos detectados, la cantidad y tipos de pruebas elaboradas, así como su complejidad y los tipos de pruebas realizadas. 
        .cont_3_4_2.p-4.p-lg-0(data-aos="zoom-in")
          .row
            .col-lg-auto.pe-lg-0.mb-4.mb-lg-0(style="place-self:center;")
              .p-4.text-center.m-auto.text-white(style="background-color:#A854F3;border-radius:30px;max-width:fit-content;min-width:200px;")
                figure
                  img(src="@/assets/curso/tema3/10.svg" style="display:inline;max-width:50px;")
                p.fw-bold.mb-0 CONSTRUCCIÓN
            .col-lg
              .p-lg-4
                p #[strong Caso de prueba:] conjunto de condiciones con las cuales un #[em tester] debe determinar si un sistema funciona según lo requerido. 
                p.mt-4.mb-0 #[strong #[em Script] de prueba:] recopilación de instrucciones que se realizan al #[em software] sujeto a prueba para verificar que el sistema funciona de acuerdo con lo requerido. Hay #[em scripts] de pruebas automatizadas y manuales.
        .cont_3_4_3.p-4.p-lg-0(data-aos="zoom-in")
          .row
            .col-lg-auto.pe-lg-0.mb-4.mb-lg-0(style="place-self:center;")
              .p-4.text-center.m-auto.text-white(style="background-color:#A854F3;border-radius:30px;max-width:fit-content;min-width:200px;")
                figure
                  img(src="@/assets/curso/tema3/11.svg" style="display:inline;max-width:50px;")
                p.fw-bold.mb-0 EJECUCIÓN
            .col-lg
              .p-lg-4
                p #[strong Resultado de la ejecución de pruebas:] recopilación de la información relacionada con los resultados de la ejecución de cada script de prueba, determinando si tuvieron una salida exitosa o un problema, respecto al comportamiento que debería tener. 
                p.mt-4.mb-0 #[strong Defectos:] un error produce un defecto y un defecto produce un fallo.
    
    Separador

    .titulo-segundo(data-aos="flip-up")
      h2#t_3_2 3.2  Aplicar los instrumentos de calidad de #[em software]
    
    p(data-aos="fade-left") En la elaboración de un plan de pruebas se deben tener claros los requerimientos de usuario que forman la iteración o proyecto, por lo tanto, se debe analizar la información de la especificación de requisitos, la matriz de trazabilidad, especificaciones y diseño funcional, casos de uso, requisitos no funcionales, prototipado e historias de usuario en el caso de metodologías ágiles.

    .cont_3_4.mt-4.pb-4
      .cont_titulo_decorativo(data-aos="fade-right")
        .row
          .col-auto.pe-0
            figure.ps-2
              img(src="@/assets/curso/tema2/3.svg")
          .col(style="place-self:center;")
            h4.mb-0.pe-4.text-white(style="padding-top:7px;") Implementación del plan de pruebas
      p(data-aos="fade-left") El plan de pruebas es un documento que describe un conjunto de procedimientos, técnicas y normas para probar un sistema como podemos ver a continuación:
      .p-4.p-lg-5.bg-white.mt-4(style="border-radius:15px;")
        .row
          .col-lg-8.mb-4.mb-lg-0(data-aos="fade-right" style="place-self:center;")
            ol.lista-ol--cuadro
              li.d-flex
                .lista-ol--cuadro__vineta(style="background-color:#2CFEDF;")
                  span.fw-bold(style="color:initial;") 1
                div Debe contener el nombre del sistema a probar, el nombre del documento y la versión.
              li.d-flex
                .lista-ol--cuadro__vineta(style="background-color:#2CFEDF;")
                  span.fw-bold(style="color:initial;") 2
                div Especificar en qué consiste el sistema y cuál sistema se va a probar. También se incluye y describe el alcance de las pruebas.
              li.d-flex
                .lista-ol--cuadro__vineta(style="background-color:#2CFEDF;")
                  span.fw-bold(style="color:initial;") 3
                div En esta parte se listan los tipos de prueba a realizar y los requerimientos a probar en el proceso. Se especifica y describe las características a probar y las que no se van a probar.
              li.d-flex
                .lista-ol--cuadro__vineta(style="background-color:#2CFEDF;")
                  span.fw-bold(style="color:initial;") 4
                div Representa el enfoque recomendado para la comprobación de las aplicaciones.
              li.d-flex
                .lista-ol--cuadro__vineta(style="background-color:#2CFEDF;")
                  span.fw-bold(style="color:initial;") 5
                div En esta parte se especifican los criterios de entrada y salida de la aplicación al área de Aseguramiento de Calidad de #[em Software] (SQA).
              li.d-flex
                .lista-ol--cuadro__vineta(style="background-color:#2CFEDF;")
                  span.fw-bold(style="color:initial;") 6
                div Se describen las actividades (plan, diseño, implementación y ejecución de pruebas, así como la evaluación de los resultados) que realizarán el equipo de SQA.
              li.d-flex
                .lista-ol--cuadro__vineta(style="background-color:#2CFEDF;")
                  span.fw-bold(style="color:initial;") 7
                div Se describe el informe de resultados de prueba y los defectos detectados durante el esfuerzo de pruebas.
              li.d-flex
                .lista-ol--cuadro__vineta(style="background-color:#2CFEDF;")
                  span.fw-bold(style="color:initial;") 8
                div Describe los recursos del sistema.
              li.d-flex
                .lista-ol--cuadro__vineta(style="background-color:#2CFEDF;")
                  span.fw-bold(style="color:initial;") 9
                div Describe las características del personal requerido para el esfuerzo de pruebas, así como las necesidades de entrenamiento.
              li.d-flex
                .lista-ol--cuadro__vineta(style="background-color:#2CFEDF;")
                  span.fw-bold(style="color:initial;") 10
                div En este punto se plantean las fechas estimadas de inicio y fin de las principales actividades de prueba.
              li.d-flex
                .lista-ol--cuadro__vineta(style="background-color:#2CFEDF;")
                  span.fw-bold(style="color:initial;") 11
                div En este punto se plantean los riesgos identificados al momento de la planificación y su estrategia de mitigación.
          .col-lg-4(data-aos="fade-left" style="place-self:center;")
            figure.m-auto.col-6.col-md-5.col-lg-12
              img(src="@/assets/curso/tema3/12.png")
    
    .cont_titulo_decorativo.mt-5(data-aos="fade-right")
      .row
        .col-auto.pe-0
          figure.ps-2
            img(src="@/assets/curso/tema2/3.svg")
        .col(style="place-self:center;")
          h4.mb-0.pe-4.text-white(style="padding-top:7px;") Principales elementos para redactar un caso de prueba
    
    p(data-aos="fade-left") La estructuración de un caso de prueba se convierte en una actividad sin dificultad, si tenemos la información necesaria para su proceso de elaboración, así mismo al momento de verificar un #[em software] es de mucho aporte, puesto que se transforma en una herramienta esencial en el proceso de registro, seguimiento y control. A continuación, en la siguiente tabla, se describen los elementos principales que debe contener un caso de prueba. 

    .col-xl-8.col-lg-10.m-auto.mt-5
      .titulo-sexto.color-acento-contenido(data-aos="zoom-in-down")
        h5 Tabla 5.
        span Principales elementos de una caso de prueba
      .tabla-a.color-acento-botones(data-aos="zoom-in-up")
        table(style="min-width:100%;")
          thead(style="border:0;")
            tr(style="background-color:#3A1D71;")
              th.text-white.text-center(style="border:1px #AFAFAF solid;" width="40%") Elemento
              th.text-white.text-center(style="border:1px #AFAFAF solid;") Descripción
          tbody
            tr(style="background-color:#F6F6F6;")
              td.text-center(style="border:1px #AFAFAF solid;") Identificador
              td(style="border:1px #AFAFAF solid;") Puede ser alfanumérico o numérico.
            tr(style="background-color:#F6F6F6;")
              td.text-center(style="border:1px #AFAFAF solid;") Nombre
              td(style="border:1px #AFAFAF solid;") Nombre del caso de prueba de manera concisa.
            tr(style="background-color:#F6F6F6;")
              td.text-center(style="border:1px #AFAFAF solid;") Descripción
              td(style="border:1px #AFAFAF solid;") Objetivo del caso de prueba, también describe qué probará; en ciertas ocasiones se incluye el ambiente de pruebas.
            tr(style="background-color:#F6F6F6;")
              td.text-center(style="border:1px #AFAFAF solid;") Número de orden ejecución 
              td(style="border:1px #AFAFAF solid;") Orden en la cual se ejecuta el caso de prueba, en la situación de que se tengan múltiples casos de prueba.
            tr(style="background-color:#F6F6F6;")
              td.text-center(style="border:1px #AFAFAF solid;") Requerimiento asociado
              td(style="border:1px #AFAFAF solid;") Si se plantea un caso de prueba se debe saber a qué requerimiento va asociado para mantener la trazabilidad.
            tr(style="background-color:#F6F6F6;")
              td.text-center(style="border:1px #AFAFAF solid;") Precondición
              td(style="border:1px #AFAFAF solid;") Estado en la cual se debe encontrar el sistema antes de comenzar la prueba.
            tr(style="background-color:#F6F6F6;")
              td.text-center(style="border:1px #AFAFAF solid;") Postcondición
              td(style="border:1px #AFAFAF solid;") El estado en que debe encontrarse el sistema luego de ejecutar la prueba.
            tr(style="background-color:#F6F6F6;")
              td.text-center(style="border:1px #AFAFAF solid;") Resultado esperado
              td(style="border:1px #AFAFAF solid;") Objetivo que debe ser alcanzado posterior a la prueba.
    
    .cont_3_5.mt-5.pb-4
      .cont_titulo_decorativo(data-aos="fade-right")
        .row
          .col-auto.pe-0
            figure.ps-2
              img(src="@/assets/curso/tema2/3.svg")
          .col(style="place-self:center;")
            h4.mb-0.pe-4.text-white(style="padding-top:7px;") Principales elementos para redactar un script de prueba
      p(data-aos="fade-left") Este artefacto es responsabilidad del #[em tester], siendo este quien lo escribe y lo ejecuta. A continuación, se nombran los principales elementos que debe contener un #[em script] de prueba:
      .col-xl-9.m-auto.mt-4
        .row.justify-content-center
          .col-lg-4.mb-4.col-md-8(data-aos="zoom-in")
            .h-100.text-white.text-center.p-4.pt-lg-5.pb-lg-5(style="border-radius:15px;background-color:#3A1D71;")
              figure
                img(src="@/assets/curso/tema3/14.svg" style="max-width:90px;display:inline;")
              h5.mt-4 Nombre
              p.mb-0 Identificador único para el #[em script].
          .col-lg-4.mb-4.col-md-8(data-aos="zoom-in")
            .h-100.text-white.text-center.p-4.pt-lg-5.pb-lg-5(style="border-radius:15px;background-color:#3A1D71;")
              figure
                img(src="@/assets/curso/tema3/15.svg" style="max-width:90px;display:inline;")
              h5.mt-4 Descripción
              p.mb-0 Describe el objetivo del #[em script] de pruebas.
          .col-lg-4.mb-4.col-md-8(data-aos="zoom-in")
            .h-100.text-white.text-center.p-4.pt-lg-5.pb-lg-5(style="border-radius:15px;background-color:#3A1D71;")
              figure
                img(src="@/assets/curso/tema3/16.svg" style="max-width:90px;display:inline;")
              h5.mt-4 Pasos
              p.mb-0 Acciones que se van ejecutando en la aplicación. 
          .col-lg-4.mb-4.col-md-8(data-aos="zoom-in")
            .h-100.text-white.text-center.p-4.pt-lg-5.pb-lg-5(style="border-radius:15px;background-color:#3A1D71;")
              figure
                img(src="@/assets/curso/tema3/17.svg" style="max-width:90px;display:inline;")
              h5.mt-4 Puntos de verificación
              p.mb-0 Son las observaciones puntuales que se realizan durante la ejecución de las pruebas para verificar que el producto cumple con los requerimientos específicos.
          .col-lg-4.mb-4.col-md-8(data-aos="zoom-in")
            .h-100.text-white.text-center.p-4.pt-lg-5.pb-lg-5(style="border-radius:15px;background-color:#3A1D71;")
              figure
                img(src="@/assets/curso/tema3/18.svg" style="max-width:90px;display:inline;")
              h5.mt-4 Resultado esperado
              p.mb-0 Por cada punto de verificación puede haber un resultado esperado asociado.
          .col-lg-4.mb-4(data-aos="zoom-in")
            figure.m-auto.col-10.col-md-8.col-lg-12
              img(src="@/assets/curso/tema3/19.svg")
    
    .cont_titulo_decorativo.mt-5(data-aos="fade-right")
      .row
        .col-auto.pe-0
          figure.ps-2
            img(src="@/assets/curso/tema2/3.svg")
        .col(style="place-self:center;")
          h4.mb-0.pe-4.text-white(style="padding-top:7px;") Creación del plan de pruebas para proyectos ágiles (#[em Agile Testing])
    
    p(data-aos="fade-left") Un #[em release] define funcionalidades que ya están disponibles para el cliente. Por lo tanto, una planificación de un #[em release] tiene ciertos elementos:

    .row.mt-5
      .col-lg-7.mb-4.mb-lg-0(data-aos="fade-right")
        AcordionA.acordion1(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
          .row(titulo="Alcance")
            p Se incluye el propósito del #[em release] y las historias de usuario.
          .row(titulo="Suposiciones")
            p Se incluyen los supuestos del proyecto.
          .row(titulo="Análisis de riesgos")
            p Define qué se incluye en la automatización de pruebas.
          .row(titulo="Automatización de pruebas")
            p Define qué se incluirá en la automatización.
          .row(titulo="Ambiente de pruebas")
            p Define qué se necesita en relación al ambiente de pruebas.
          .row(titulo="Datos de las pruebas - Resultados de las pruebas")
            p Se establecen los datos arrojados en cada una de las pruebas, junto con los resultados encontrados.
      .col-lg-5(data-aos="fade-left")
        figure.m-auto.col-6.col-md-6.col-lg-12
          img(src="@/assets/curso/tema3/20.svg")
    
    p.mt-5(data-aos="fade-right") Estos elementos se describen en un plan de pruebas, sin embargo, es posible que en los equipos se tome la decisión de no diseñarlo, en ese sentido se recomienda que los #[em tester] tomen notas o documente los factores más importantes relacionados con las pruebas en cada #[em release].

    .row.mt-4
      .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right" style="place-self:center;")
        figure.m-auto.col-6.col-md-5.col-lg-12
          img(src="@/assets/curso/tema3/21.svg")
      .col-lg-8(data-aos="fade-left" style="place-self:center;")
        p Para realizar pruebas de #[em software] en una metodología ágil, comenzamos por redactar el plan de pruebas, teniendo en cuenta qué se puede actualizar en cada sprint.
        p.mt-4 Un plan de pruebas ágiles debe incluir:
        ol.lista-ol--cuadro.mt-3.ps-3.ps-md-4
          li.d-flex
            .lista-ol--cuadro__vineta(style="background-color:#2CFEDF;")
              span.fw-bold(style="color:initial;") 1
            div Introducción.
          li.d-flex
            .lista-ol--cuadro__vineta(style="background-color:#2CFEDF;")
              span.fw-bold(style="color:initial;") 2
            div Alcance.
          li.d-flex
            .lista-ol--cuadro__vineta(style="background-color:#2CFEDF;")
              span.fw-bold(style="color:initial;") 3
            div Recursos en este caso el nombre de los #[em tester].
          li.d-flex
            .lista-ol--cuadro__vineta(style="background-color:#2CFEDF;")
              span.fw-bold(style="color:initial;") 4
            div Descripción de funcionalidades a probar.
          li.d-flex
            .lista-ol--cuadro__vineta(style="background-color:#2CFEDF;")
              span.fw-bold(style="color:initial;") 5
            div Los tipos de pruebas (pruebas de rendimiento, pruebas de aceptación - UAT) que se van a realizar.
          li.d-flex
            .lista-ol--cuadro__vineta(style="background-color:#2CFEDF;")
              span.fw-bold(style="color:initial;") 6
            div Infraestructura lista.
          li.d-flex
            .lista-ol--cuadro__vineta(style="background-color:#2CFEDF;")
              span.fw-bold(style="color:initial;") 7
            div Suposiciones, plan de riesgos y los entregables que se producirán al final.
    
    Separador

    .titulo-segundo(data-aos="flip-up")
      h2#t_3_3 3.3  Análisis y entrega de resultados
    
    p(data-aos="fade-left") Una vez ejecutadas las pruebas, se deben analizar los resultados y los fallos detectados, teniendo en cuenta el reporte de defectos y directrices para detectarlos y el informe de resultados de pruebas. Para ello se puede realizar lo descrito a continuación:

    .row.mt-5
      .col-lg-6.mb-4.mb-lg-0(data-aos="fade-right")
        figure.m-auto.col-7.col-md-6.col-lg-12
          img(src="@/assets/curso/tema3/23.png")
      .col-lg-6(data-aos="fade-left")
        AcordionA.acordion1(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
          .row(titulo="Impacto")
            p Analizar el impacto del defecto.
          .row(titulo="Problema")
            p Investigar el problema, en qué condiciones se produce este fallo.
          .row(titulo="Severidad")
            p Analizar la severidad, si es alta o baja.

    .row.mt-4
      .col-lg-6.mb-4.mb-lg-0(data-aos="fade-right")
        AcordionA.acordion1(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
          .row(titulo="Pasos")
            p Variar los pasos realizados, se pueden ejecutar en orden diferente para observar si existe alguna variante en el resultado esperado.
          .row(titulo="Configuración")
            p Variar opciones de configuración; si estamos probando una aplicación web podemos probar con diferentes navegadores.
          .row(titulo="Condiciones")
            p Determinar condiciones específicas bajo las cuales se reproduce el defecto. Si estamos probando entradas de datos, probar con diferentes datos, es decir, se va a tener más información sobre cómo se reproduce el defecto, si por ejemplo, en los campos numéricos se prueba números positivos y negativos.
      .col-lg-6(data-aos="fade-left")
        figure.m-auto.col-7.col-md-6.col-lg-12
          img(src="@/assets/curso/tema3/24.svg")
    
    .cont_titulo_decorativo.mt-5(data-aos="fade-right")
      .row
        .col-auto.pe-0
          figure.ps-2
            img(src="@/assets/curso/tema2/3.svg")
        .col(style="place-self:center;")
          h4.mb-0.pe-4.text-white(style="padding-top:7px;") Incidencias detectadas
    
    p(data-aos="fade-left") La gestión de incidencias es un elemento central e importante en el proceso de calidad de #[em software], puesto que es en este punto donde se tienen en cuenta los errores (#[em bugs]). Por lo tanto, el propósito de las incidencias detectadas es precisamente generar su corrección, de tal manera que sea mínimamente probable que el error se repita.

    .cont_titulo_decorativo.mt-5(data-aos="fade-right")
      .row
        .col-auto.pe-0
          figure.ps-2
            img(src="@/assets/curso/tema2/3.svg")
        .col(style="place-self:center;")
          h4.mb-0.pe-4.text-white(style="padding-top:7px;") Ciclo de vida de una incidencia
    
    p(data-aos="fade-left") Un sistema de gestión de incidentes debe manejar los errores de #[em software] teniendo en cuenta el proceso. Este se adapta a proyectos de #[em software] en fase de desarrollo, más no en ambiente de producción. 

    .col-xl-10.m-auto.mt-5
      .titulo-sexto.color-acento-contenido(data-aos="zoom-in-down")
        h5 Figura 5.
        span Ciclo de vida de una incidencia de #[em software] (#[em bug])
      .mt-4.p-3.p-lg-5(data-aos="zoom-in-up" style="background-color:#F7EEFE;border-radius:13px;")
        figure
          img(src="@/assets/curso/tema3/25.svg" alt="Imagen que presenta el ciclo de vida de una incidencia de software, desde que se inicia el proceso de prueba, hasta que se cierra el proceso.")

  

      
</template>

<script>
export default {
  name: 'Tema3',
  components: {},
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>
<style lang="sass">
.cont_3_1, .cont_3_1 *
  position: relative
.cont_3_1:before
  position: absolute
  content: ''
  width: 125%
  left: -15%
  height: 70%
  top: 15%
  bottom: 15%
  background: rgb(247,246,250)
  background: linear-gradient(180deg, rgba(247,246,250,0) 0%, rgba(235,245,255,1) 55%, rgba(235,245,255,0) 100%)
.cont_3_2,.cont_3_2 *
  position: relative
.cont_3_2:before
  content: ''
  position: absolute
  width: 93%
  height: 90%
  right: 0
  top: 5%
  bottom: 5%
  background-color: #D6E1FD
  border-radius: 17px
  background-image: url(../assets/curso/tema3/26.png)
  background-size: 100% 100%
.tabs-a.color-acento-botones .tabs-a__tab__selected
  color: #12263F
.tabs-a.color-acento-botones .tabs-a__tab:hover, .tabs-a.color-acento-botones .tabs-a__tab:active, .tabs-a.color-acento-botones .tabs-a__tab:focus
  color: #12263F
.tabs-a__tab
  background-color: #3A1D71
  color: #fff
.cont_3_3, .cont_3_3 *
  position: relative
.cont_3_3:before
  position: absolute
  content: ''
  width: 125%
  left: -15%
  height: 85%
  background: rgb(249,252,255)
  background: linear-gradient(0deg, rgba(249,252,255,0.2274159663865546) 0%, rgba(235,245,255,1) 60%, rgba(224,239,255,1) 100%)
.cont_3_4_1, .cont_3_4_1 *
  position: relative
.cont_3_4_1:before
  content: ''
  position: absolute
  width: 90%
  height: 100%
  top: 0
  right: 0
  border-radius: 15px 15px 0px 0px
  background-color: #DEBEFB
.cont_3_4_2, .cont_3_4_2 *
  position: relative
.cont_3_4_2:before
  content: ''
  position: absolute
  width: 90%
  height: 100%
  top: 0
  right: 0
  background-color: #EAD6FC
.cont_3_4_3, .cont_3_4_3 *
  position: relative
.cont_3_4_3:before
  content: ''
  position: absolute
  width: 90%
  height: 100%
  top: 0
  right: 0
  border-radius: 0px 0px 15px 15px
  background-color: #DEBEFB
.cont_3_4, .cont_3_4 *
  position: relative
.cont_3_4:before
  position: absolute
  content: ''
  width: 125%
  left: -15%
  height: 100%
  background: rgb(249,252,255)
  background: linear-gradient(180deg, rgba(249,252,255,0.7484243697478992) 0%, rgba(225,235,255,1) 15%)
.cont_3_5,.cont_3_5 *
  position: relative
.cont_3_5:before
  content: ''
  position: absolute
  width: 125%
  height: 100%
  left: -15%
  top: 0
  background-image: url(../assets/curso/tema3/13.png)
  background-size: 100% 100%
.acordion1 .acordion__accion__btn--b
  border: 1px solid #111e61
  background-color: #FFCE00
  border-color: #FFCE00
  box-shadow: 0px 0px 10px rgba(0,0,0,.2)
.acordion1 .tarjeta--azul
  background-color: #3A1D71 !important
.acordion1 .tarjeta--azul h3
  color: white
.acordion1 .tarjeta.tarjeta--azul.acordion__activo
  background-color: #F7EEFE !important
.acordion1 .tarjeta.tarjeta--azul.acordion__activo h3
  color: #12263F !important
.acordion1 .acordion__accion__btn--a
  background-color: #FFCE00
@media screen and (max-width: 992px)
  .cont_3_2:before
    left: 0
    top: 0
    bottom: 0
    width: 100%
    height: 100%
    background-image: none
  .cont_3_4_1:before, .cont_3_4_2:before, .cont_3_4_3:before
    width: 100%
  .cont_3_5:before
    background-size: cover
</style>
