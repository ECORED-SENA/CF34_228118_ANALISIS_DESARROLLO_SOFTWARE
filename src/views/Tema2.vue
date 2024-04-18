<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Marco de referencia

    .cont_2_1
      .row.apply_relative
        .col-lg-6.mb-4.mb-lg-0(data-aos="fade-right" style="place-self:center;")
          figure.m-auto.col-10.col-md-8.col-lg-12
            img(src="@/assets/curso/tema2/1.png")
        .col-lg-6(data-aos="fade-left" style="place-self:center;")
          p Un marco de referencia aporta las directrices y saberes teóricos obtenidos con base en un estudio, una investigación y un análisis previo, que permite estimar en este caso, que un proceso de calidad fundamentado a través del estudio e investigación, estaría en la capacidad de plantear mejores prácticas y definir procedimientos que optimicen dicho proceso, para garantizar que este represente una mejora en el proceso de calidad y en la calidad del producto. Por lo anterior, este marco de referencia contiene los fundamentos de la calidad del #[em software] que permitirá construir un plan de pruebas, teniendo en cuenta el proceso de desarrollo de #[em software], los modelos de desarrollo, metodologías de desarrollo tradicionales y ágiles, estándares de calidad, planificación de pruebas de #[em software] y la documentación que se debe realizar en el proceso de calidad de #[em software], tal como se describen a continuación. 
    
      .cont_semicircle_absolute
        .semicircle_absolute.d-none.d-md-block(style="left: unset !important;right: -190px !important;top:-45px;")
        Separador
        .titulo-segundo(data-aos="flip-up")
          h2#t_2_1 2.1  Proceso de desarrollo de #[em software]
        .row
          .col-lg-6.mb-4.mb-lg-0(data-aos="fade-right" style="place-self:center;")
            p El proceso de desarrollo o ciclo de vida del #[em software], requiere de una serie de etapas, con el objetivo de garantizar que el programa desarrollado es fiable, eficiente, seguro y cumple con los requerimientos de los usuarios finales. 
            p Este proceso de desarrollo contiene una serie de fases que permiten validar el proceso de desarrollo del #[em software], garantizando que se cumplan con los requerimientos para la verificación y aplicación de los procedimientos de desarrollo, comprobando las metodologías y técnicas usadas. Este proceso es muy aplicable en los casos en donde se utilicen metodologías tradicionales como la metodología en cascada.
          .col-lg-6(data-aos="fade-left" style="place-self:center;")
            figure.m-auto.col-10.col-md-8.col-lg-12
              img(src="@/assets/curso/tema2/2.png")
      
      .cont_titulo_decorativo.mt-5.apply_relative(data-aos="fade-right")
        .row
          .col-auto.pe-0
            figure.ps-2
              img(src="@/assets/curso/tema2/3.svg")
          .col(style="place-self:center;")
            h4.mb-0.pe-4.text-white(style="padding-top:7px;") Metodología cascada
      
      p(data-aos="fade-left" style="position:relative;") El desarrollo en cascada es un proceso lineal por lo que se identifica en separar los procesos del desarrollo de #[em software] en diferentes fases que son sucesivas en el contexto de la ejecución del proyecto. A diferencia de los modelos iterativos, cada una de las fases se ejecuta una sola vez, y el resultado de cada fase es un insumo para la siguiente. Esta metodología es usada especialmente en el proceso de desarrollo de #[em software]. 

      .mt-4(style="position:relative;")
        .semicircle_absolute.d-none.d-md-block(style="top: unset !important;bottom: 40px;")
        .col-xl-10.m-auto(style="position:relative;")
          .p-4.p-lg-5(style="border-radius:12px;border:1px #A854F3 solid;background-color:#F7EEFE;")
            .col-xl-11.m-auto
              ImagenInfograficaB.color-acento-botones.d-none.d-lg-block.infografiab_1
                template(v-slot:imagen)
                  figure
                    img(src='@/assets/curso/tema2/4.svg' data-aos="zoom-in-up")
                div(x="32%" y="9%" tooltip="Ver más" numero="+")
                  .row
                    .col-lg-7.mb-4.mb-lg-0.text-white(style="place-self:center;")
                      h4 Análisis
                      p Todo proyecto de #[em software] inicia con una fase de análisis. En el documento de especificación del #[em software] se determina la viabilidad y la definición de requisitos funcionales y no funcionales. 
                      p En la viabilidad se evalúa la rentabilidad, factibilidad y los costos de la construcción, además se define un pliego de condiciones, un plan y una estimación financiera y también la propuesta para el cliente, de ser necesario. 
                      p Posteriormente, se realiza la definición detallada de los requisitos, que debe incluir, el análisis de la situación de salida y un concepto. Los análisis de salida definen la problemática, y el concepto define qué funciones y características debe ofrecer el producto #[em software] para satisfacer las necesidades del cliente.
                    .col-lg-5(style="place-self:center;")
                      figure.m-auto.col-7.col-md-7.col-lg-12
                        img(src="@/assets/curso/tema2/5.png")
                div(x="48%" y="30%" tooltip="Ver más" numero="+")
                  .row
                    .col-lg-7.mb-4.mb-lg-0.text-white(style="place-self:center;")
                      h4 Diseño
                      p En esta fase se formula una solución específica para la problemática definida o establecida en los requisitos, aquí los desarrolladores de #[em software] se encargarán de construir un diseño de la arquitectura del sistema, así como un plan de diseño, enfocados en los componentes, interfaces, entornos de trabajos y bibliotecas. Esta fase da como resultado un estimado del plan de diseño y los planes de prueba para los diferentes componentes. 
                    .col-lg-5(style="place-self:center;")
                      figure.m-auto.col-7.col-md-7.col-lg-12
                        img(src="@/assets/curso/tema2/6.png")
                div(x="64.5%" y="50%" tooltip="Ver más" numero="+")
                  .row
                    .col-lg-7.mb-4.mb-lg-0.text-white(style="place-self:center;")
                      h4 Implementación
                      p La arquitectura otorgada en la fase de diseño se desarrolla en la fase de implementación, en la que se construye el código fuente que representa dicha arquitectura en un lenguaje de programación, también incluye la búsqueda de errores y pruebas unitarias. 
                      p Esta fase genera como resultado un producto #[em software] que se despliega por primera vez como insumo de la siguiente fase. 
                    .col-lg-5(style="place-self:center;")
                      figure.m-auto.col-7.col-md-7.col-lg-12
                        img(src="@/assets/curso/tema2/7.png")
                div(x="78%" y="70%" tooltip="Ver más" numero="+")
                  .row
                    .col-lg-7.mb-4.mb-lg-0.text-white(style="place-self:center;")
                      h4 Verificación
                      p Esta fase incluye el proceso de integración y despliegue del producto #[em software] en el entorno seleccionado, por lo general se prueba y envía con una serie de usuarios finales seleccionados. Se aplican las pruebas de aceptación incluidas en la fase de análisis y con ello se puede determinar si el #[em software] cumple o no con las necesidades definidas. 
                      p Los productos que superan estas pruebas, son aquellos que pueden continuar hacia el proceso de liberación hacia el público en general o su #[em target] específico. 
                    .col-lg-5(style="place-self:center;")
                      figure.m-auto.col-7.col-md-7.col-lg-12
                        img(src="@/assets/curso/tema2/8.png")
                div(x="96%" y="91%" tooltip="Ver más" numero="+")
                  .row
                    .col-lg-7.mb-4.mb-lg-0.text-white(style="place-self:center;")
                      h4 Mantenimiento
                      p Después que la fase de prueba haya finalizado con éxito, se autoriza para que la aplicación pase a un ambiente productivo, en esta última etapa se incluye la entrega, mantenimiento, garantía y mejoras del producto #[em software]. Cabe destacar que la fase de mantenimiento incluye tres elementos:
                      ul.lista-ul.mt-4.ps-4
                        li.d-flex
                          i.fas.fa-file-code
                          div #[strong Mantenimiento correctivo:] eliminar los defectos detectados durante su vida útil.
                        li.d-flex
                          i.fas.fa-file-code
                          div #[strong Mantenimiento adaptativo:] adaptar el software a nuevas necesidades.
                        li.d-flex
                          i.fas.fa-file-code
                          div #[strong Mantenimiento perfectivo:] añadir al software nuevas funcionalidades.
                    .col-lg-5(style="place-self:center;")
                      figure.m-auto.col-7.col-md-7.col-lg-12
                        img(src="@/assets/curso/tema2/9.png")
              
              ImagenInfograficaB.color-acento-botones.d-lg-none.col-md-10.m-auto.infografiab_1
                template(v-slot:imagen)
                  figure
                    img(src='@/assets/curso/tema2/10.svg' data-aos="zoom-in-up")
                div(x="72%" y="5.5%" tooltip="Ver más" numero="+")
                  .row
                    .col-lg-7.mb-4.mb-lg-0.text-white(style="place-self:center;")
                      h4 Análisis
                      p Todo proyecto de #[em software] inicia con una fase de análisis. En el documento de especificación del #[em software] se determina la viabilidad y la definición de requisitos funcionales y no funcionales. 
                      p En la viabilidad se evalúa la rentabilidad, factibilidad y los costos de la construcción, además se define un pliego de condiciones, un plan y una estimación financiera y también la propuesta para el cliente, de ser necesario. 
                      p Posteriormente, se realiza la definición detallada de los requisitos, que debe incluir, el análisis de la situación de salida y un concepto. Los análisis de salida definen la problemática, y el concepto define qué funciones y características debe ofrecer el producto #[em software] para satisfacer las necesidades del cliente.
                    .col-lg-5(style="place-self:center;")
                      figure.m-auto.col-7.col-md-7.col-lg-12
                        img(src="@/assets/curso/tema2/5.png")
                div(x="72%" y="28.5%" tooltip="Ver más" numero="+")
                  .row
                    .col-lg-7.mb-4.mb-lg-0.text-white(style="place-self:center;")
                      h4 Diseño
                      p En esta fase se formula una solución específica para la problemática definida o establecida en los requisitos, aquí los desarrolladores de #[em software] se encargarán de construir un diseño de la arquitectura del sistema, así como un plan de diseño, enfocados en los componentes, interfaces, entornos de trabajos y bibliotecas. Esta fase da como resultado un estimado del plan de diseño y los planes de prueba para los diferentes componentes. 
                    .col-lg-5(style="place-self:center;")
                      figure.m-auto.col-7.col-md-7.col-lg-12
                        img(src="@/assets/curso/tema2/6.png")
                div(x="75%" y="50.5%" tooltip="Ver más" numero="+")
                  .row
                    .col-lg-7.mb-4.mb-lg-0.text-white(style="place-self:center;")
                      h4 Implementación
                      p La arquitectura otorgada en la fase de diseño se desarrolla en la fase de implementación, en la que se construye el código fuente que representa dicha arquitectura en un lenguaje de programación, también incluye la búsqueda de errores y pruebas unitarias. 
                      p Esta fase genera como resultado un producto #[em software] que se despliega por primera vez como insumo de la siguiente fase. 
                    .col-lg-5(style="place-self:center;")
                      figure.m-auto.col-7.col-md-7.col-lg-12
                        img(src="@/assets/curso/tema2/7.png")
                div(x="72%" y="72%" tooltip="Ver más" numero="+")
                  .row
                    .col-lg-7.mb-4.mb-lg-0.text-white(style="place-self:center;")
                      h4 Verificación
                      p Esta fase incluye el proceso de integración y despliegue del producto #[em software] en el entorno seleccionado, por lo general se prueba y envía con una serie de usuarios finales seleccionados. Se aplican las pruebas de aceptación incluidas en la fase de análisis y con ello se puede determinar si el #[em software] cumple o no con las necesidades definidas. 
                      p Los productos que superan estas pruebas, son aquellos que pueden continuar hacia el proceso de liberación hacia el público en general o su #[em target] específico. 
                    .col-lg-5(style="place-self:center;")
                      figure.m-auto.col-7.col-md-7.col-lg-12
                        img(src="@/assets/curso/tema2/8.png")
                div(x="74%" y="93.5%" tooltip="Ver más" numero="+")
                  .row
                    .col-lg-7.mb-4.mb-lg-0.text-white(style="place-self:center;")
                      h4 Mantenimiento
                      p Después que la fase de prueba haya finalizado con éxito, se autoriza para que la aplicación pase a un ambiente productivo, en esta última etapa se incluye la entrega, mantenimiento, garantía y mejoras del producto #[em software]. Cabe destacar que la fase de mantenimiento incluye tres elementos:
                      ul.lista-ul.mt-4.ps-4
                        li.d-flex
                          i.fas.fa-file-code
                          div #[strong Mantenimiento correctivo:] eliminar los defectos detectados durante su vida útil.
                        li.d-flex
                          i.fas.fa-file-code
                          div #[strong Mantenimiento adaptativo:] adaptar el #[em software] a nuevas necesidades.
                        li.d-flex
                          i.fas.fa-file-code
                          div #[strong Mantenimiento perfectivo:] añadir al #[em software] nuevas funcionalidades.
                    .col-lg-5(style="place-self:center;")
                      figure.m-auto.col-7.col-md-7.col-lg-12
                        img(src="@/assets/curso/tema2/9.png")  
        Separador

      .titulo-segundo(data-aos="flip-up")
        h2#t_2_2 2.2  Estándares ISO/IEC 25000 SQuaRE, ISO/IEC 15504, IEEE
    
    .row.justify-content-center
      .col-lg-4.mb-4.mb-lg-0.col-md-9(data-aos="zoom-in")
        .p-4.h-100(style="border-radius:11px;background-color:#ECF2FF;")
          p.mb-0 En un proceso de calidad de #[em software], se debe identificar las normas ISO (Organización Mundial para la Estandarización), que proporcionan guías que a su vez aportarán especificaciones, de aspecto internacional, a los servicios, productos y sistemas de una empresa, para garantizar una óptima eficiencia y calidad en cuanto a un producto o servicio y a su funcionamiento y resultados. Por lo tanto, se deben tener en cuenta los estándares descritos en este apartado con el objetivo de seguir patrones que permitan asegurar la calidad a través del análisis de los estándares que se utilizan en la actualidad.
      .col-lg-4.mb-4.mb-lg-0(data-aos="zoom-in" style="place-self:center;")
        figure.m-auto.col-10.col-md-8.col-lg-12
          img(src="@/assets/curso/tema2/11.png")
      .col-lg-4.col-md-9(data-aos="zoom-in")
        .p-4.h-100.d-flex.flex-wrap.align-content-center(style="border-radius:11px;background-color:#DEBEFB;")
          p.mb-0 La norma ISO/IEC 25000, también reconocida como #[em System and Software Quality Requirements and Evaluation] (SQuaRE), tiene el objetivo de especificar en un documento el conjunto de guías y patrones que aseguran la óptima utilización del #[em software] de un negocio. No obstante, este procedimiento se realiza en compañías que realizan sus propias aplicaciones para la organización y gestión interna, en consecuencia, se refuerza la creación de forma correcta y usabilidad en los procesos internos.
    
    .row.mt-5
      .col-auto.d-none.d-md-block(style="place-self:center;" data-aos="fade-right")
        figure
          img(src="@/assets/curso/tema2/12.svg")
      .col(style="place-self:center;" data-aos="fade-left")
        p.mb-0 La ISO/IEC 25000, evoluciona de anteriores normas tales como las normas ISO/IEC 9126, que describe las características de un modelo de calidad del producto #[em software], e ISO/IEC 14598, que involucraba el proceso de evaluación de productos #[em software].
    
    p.mt-4(data-aos="fade-up") La familia de normas ISO/IEC 25000 está constituida como se aprecia a continuación.

    AcordionA.mt-4.acordion1(tipo="b" clase-tarjeta="tarjeta tarjeta--azul")
      .row(titulo="División de Gestión de Calidad - ISO/IEC 2500n")
        p Las normas en este punto, definen todos los modelos, términos y definiciones comunes referenciados por todas las otras normas de la familia 25000. Actualmente esta división se encuentra formada por:
        ul.lista-ul.mt-2.ps-3
          li.d-flex
            i.far.fa-file-code(style="color:#1682FB;")
            div #[strong ISO/IEC 2500 - #[em Guide to SQuaRE:]] está compuesta por un modelo de la arquitectura de SQuaRE, la terminología de la familia, un resumen de las partes, los usuarios previstos, las partes asociadas y los modelos de referencia.
          li.d-flex
            i.far.fa-file-code(style="color:#1682FB;")
            div #[strong ISO/IEC 2501 - #[em Planning and Management:]] determina los requerimientos y disposiciones para gestionar la especificación y evaluación de los requerimientos del producto #[em software].
      .row(titulo="División de Modelo de Calidad - ISO/IEC 2501n")
        p Las normas de esta división presentan modelos detallados de calidad, así como las características para calidad externa, interna y en uso del producto #[em software]. Actualmente esta división está conformada por:
        ul.lista-ul.mt-2.ps-3
          li.d-flex
            i.far.fa-file-code(style="color:#1682FB;")
            div #[strong ISO/IEC 25010 - #[em System and software quality models:]] define el modelo de calidad para el producto #[em software].
          li.d-flex
            i.far.fa-file-code(style="color:#1682FB;")
            div #[strong ISO/IEC 25012 - #[em Data Quality model:]] describe un modelo general para la calidad de los datos, específicamente a los datos que se encuentran almacenados de forma estructurada y hacen parte de un sistema de información.
      .row(titulo="División de Medición de Calidad - ISO/IEC 2502n")
        p Involucran un modelo de referencia de la medición de la calidad del producto, descripciones de medidas de calidad (externa, interna y en uso) así como guías con prácticas para su respectiva aplicación. Actualmente esta división está conformada por:
        ul.lista-ul.mt-2.ps-3
          li.d-flex
            i.far.fa-file-code(style="color:#1682FB;")
            div #[strong ISO/IEC 25020 - #[em Measurement reference model and guide:]] representa una explicación introductoria y un modelo de referencia común a los elementos de medición de la calidad.
          li.d-flex
            i.far.fa-file-code(style="color:#1682FB;")
            div #[strong ISO/IEC 25021 - #[em Quality measure elements:]] especifica un conjunto de métricas base que podrían ser utilizadas en el transcurso de todo el ciclo de vida del desarrollo #[em software].
          li.d-flex
            i.far.fa-file-code(style="color:#1682FB;")
            div #[strong ISO/IEC 25022 - #[em Measurement of quality in use:]] especifica métricas para efectuar la medición de la calidad en uso del producto.
          li.d-flex
            i.far.fa-file-code(style="color:#1682FB;")
            div #[strong ISO/IEC 25023 - #[em Measurement of system and software product quality:]] especifica métricas para efectuar la medición de la calidad de productos y sistemas #[em software].
          li.d-flex
            i.far.fa-file-code(style="color:#1682FB;")
            div #[strong ISO/IEC 25024 - #[em Measurement of data quality:]] especifica métricas para efectuar la medición de la calidad de datos.
      .row(titulo="División de Requisitos de Calidad - ISO/IEC 2503n")
        p Las normas de esta división especifican requerimientos de calidad que podrían ser usados en el proceso de elicitación de requisitos de calidad del producto #[em software] a desarrollar. Actualmente esta división está conformada por: 
        ul.lista-ul.mt-2.ps-3
          li.d-flex
            i.far.fa-file-code(style="color:#1682FB;")
            div #[strong ISO/IEC 25030 - #[em Quality requirements:]] contiene una serie de recomendaciones para efectuar la especificación de los requisitos de calidad del producto #[em software].
      .row(titulo="División de Evaluación de Calidad - ISO/IEC 2504n")
        p Esta división involucra normas que aportan guías, recomendaciones y requerimientos para proceder a realizar el proceso de evaluación del producto #[em software]. Actualmente esta división está conformada por:
        ul.lista-ul.mt-2.ps-3
          li.d-flex
            i.far.fa-file-code(style="color:#1682FB;")
            div #[strong ISO/IEC 25040 - #[em Evaluation reference model and guide:]] plantea un modelo de referencia general para la evaluación, por lo tanto, tiene en cuenta las entradas en el proceso de evaluación, las restricciones y los recursos requeridos para alcanzar las adecuadas salidas.
          li.d-flex
            i.far.fa-file-code(style="color:#1682FB;")
            div #[strong ISO/IEC 25041 - #[em Evaluation guide for developers, acquirers and independent evaluators:]] detalla las recomendaciones y requerimientos para la implementación práctica de la evaluación del producto #[em software] según las percepciones de los desarrolladores, de los que adquieren el #[em software] y los respectivos evaluadores independientes.
          li.d-flex
            i.far.fa-file-code(style="color:#1682FB;")
            div #[strong ISO/IEC 25042 - #[em Evaluation modules:]] define lo que la Norma considera un módulo de evaluación y la documentación, estructura y contenido que se debe utilizar a la hora de definir uno de estos módulos.
          li.d-flex
            i.far.fa-file-code(style="color:#1682FB;")
            div #[strong ISO/IEC 25045 - #[em Evaluation module for recoverability:]] describe un módulo para la evaluación de la recuperabilidad.
    
    .cont_titulo_decorativo.mt-5(data-aos="fade-right")
      .row
        .col-auto.pe-0
          figure.ps-2
            img(src="@/assets/curso/tema2/3.svg")
        .col(style="place-self:center;")
          h4.mb-0.pe-4.text-white(style="padding-top:7px;") Ventajas y desventajas de la ISO 25000
    p(data-aos="fade-left") Cuando se implementa esta norma, es importante reconocer tanto las ventajas como las desventajas de la ISO 25000, que mostrará un panorama para entender su reconocimiento en el sector de la calidad.

    .cont_2_2.mt-4.pt-4.pb-5
      .row
        .col-lg.mb-4.mb-lg-0.pe-lg-0(data-aos="fade-right")
          .h-100.p-5.text-white(style="background-color:#8722E2;border-radius:25px 0px 0px 25px;")
            figure.text-center
              img(src="@/assets/curso/tema2/13.svg" style="display:inline;max-width:120px;")
            h4.mt-4 Ventajas
            ul.lista-ul.mt-4
              li.d-flex
                i.fa.fa-code(style="color:#FFCE00 !important;")
                div Asegurar que la aplicación, servicios y productos que se vendan o utilicen tienen la confianza y calidad requerida.
              li.d-flex
                i.fa.fa-code(style="color:#FFCE00 !important;")
                div Minimiza la cantidad de errores (Bugs).
              li.d-flex
                i.fa.fa-code(style="color:#FFCE00 !important;")
                div Permite ahorrar tiempo en los procedimientos de entrega.
              li.d-flex
                i.fa.fa-code(style="color:#FFCE00 !important;")
                div Determina la constante calidad a partir de evaluaciones periódicas.
              li.d-flex
                i.fa.fa-code(style="color:#FFCE00 !important;")
                div Lo anterior genera en el cliente un aumento de la satisfacción.
        .col-lg.mb-4.mb-lg-0.ps-lg-0(data-aos="fade-left")
          .h-100.p-5.text-white(style="background-color:#3A1D71;border-radius:0px 25px 25px 0px;")
            figure.text-center
              img(src="@/assets/curso/tema2/14.svg" style="display:inline;max-width:120px;")
            h4.mt-4 Desventajas
            ul.lista-ul.mt-4
              li.d-flex
                i.fa.fa-code(style="color:#FFCE00 !important;")
                div No se definen desventajas específicamente en cuanto a estas normas puesto que se crea un marco de calidad a nivel internacional.
              li.d-flex
                i.fa.fa-code(style="color:#FFCE00 !important;")
                div Tener en cuenta estas normas es un proceso tedioso, no obstante, el resultado es óptimo y positivo.
           
    Separador

    .titulo-segundo(data-aos="flip-up")
      h2#t_2_3 2.3  Modelo de desarrollo CMMI #[em (Capability Maturity Model Integration)]

    .row
      .col-lg-8.mb-4.mb-lg-0(data-aos="fade-right")
        p Este modelo es uno de los que más utilizan las empresas de desarrollo de #[em software], por lo tanto, se debe comprender que si se utiliza este modelo, su objetivo es auditar el cumplimiento de normas de calidad partiendo de la medición con niveles de madurez, además se enfoca en la mejora continua del producto en todo su ciclo de vida, impulsar la eficiencia y asegurar la calidad, de esta forma se reducen los riesgos en el proceso de desarrollo.
        p.mt-4 Cuando se desea mejorar algunos procesos de negocio, construir productos de calidad para satisfacer las necesidades del cliente y colaborar en el cumplimiento de los requerimientos de la norma ISO e instaurar prácticas de mejora continua, se debe utilizar este modelo puesto que es un modelo de capacidad y madurez, que además permite efectuar una apreciación de la madurez del proceso de desarrollo de #[em software] en las empresas.
        .p-4(style="background-color:#F2E5FD;border-radius:15px;")
          .row
            .col-md-auto.mb-4.mb-md-0(style="place-self:center;")
              figure.m-auto.col-5.col-md-12
                img(src="@/assets/curso/tema2/15.svg" style="display:inline;")
            .col-md.col-12(style="place-self:center;")
              p Los objetivos de CMMI, son:
              ul.lista-ul.mt-2.ps-3
                li.d-flex
                  i.fa.fa-code(style="color:#8722E2;")
                  div Producción de calidad de productos o servicios. 
                li.d-flex
                  i.fa.fa-code(style="color:#8722E2;")
                  div Creación de valor para los accionistas. 
                li.d-flex
                  i.fa.fa-code(style="color:#8722E2;")
                  div Mejora continua en la satisfacción de los clientes. 
                li.d-flex
                  i.fa.fa-code(style="color:#8722E2;")
                  div Aumento en la cuota de mercado.
                li.d-flex
                  i.fa.fa-code(style="color:#8722E2;")
                  div Obtener reconocimiento de excelencia en la industria.
      .col-lg-4(data-aos="fade-left")
        figure.m-auto.col-7.col-md-7.col-lg-12
          img(src="@/assets/curso/tema2/16.png")

    .row.mt-4
      .col-auto.d-none.d-md-block(style="place-self:center;" data-aos="fade-right")
        figure
          img(src="@/assets/curso/tema2/17.svg")
      .col(style="place-self:center;" data-aos="fade-left")
        p.mb-0 CMMI presenta dos modelos, una está estructurada en cinco niveles de madurez y la otra está estructurada en seis niveles de capacidad. Las áreas de proceso están categorizadas en administración de procesos, administración de proyectos, ingeniería y soporte. 
    
    .cont_titulo_decorativo.mt-5(data-aos="fade-right")
      .row
        .col-auto.pe-0
          figure.ps-2
            img(src="@/assets/curso/tema2/3.svg")
        .col(style="place-self:center;")
          h4.mb-0.pe-4.text-white(style="padding-top:7px;") Estructurada por nivel de madurez

    .cont_2_3.pb-5
      p(data-aos="fade-left" style="position:relative;") Un nivel de madurez bien definido con las bases necesarias para evolucionar hacia un proceso de #[em software] maduro. 
      p(data-aos="fade-right" style="position:relative;") Los niveles representados por etapas, consideran cinco niveles de madurez, los cuales contienen un conjunto de áreas de proceso predefinidas, los cuales se miden por objetivos generales y específicos, estos se aplican a los conjuntos predefinidos en cada área de proceso. Veamos su distribución:
      .col-xl-8.m-auto.mt-5(style="position:relative;")
        .pt-5.pb-5.bg-white(style="border-radius:15px;")
          .col-xl-10.m-auto
            ImagenInfograficaB.color-acento-botones.infografia_2_2
              template(v-slot:imagen)
                figure
                  img(src='@/assets/curso/tema2/19.svg' data-aos="zoom-in-up")
              div(x="76%" y="9%" tooltip="Ver más" numero="+")
                h4 Nivel de madurez optimización
                p.mt-4 En este nivel la organización ha logrado alcanzar todos los #[em goalsof] definidos en los niveles 1, 2, 3, 4 y 5, y los objetivos genéricos en los niveles 2 y 3. Este nivel está centrado en optimizar y en la mejora continua del rendimiento de los procesos de la organización. Una de las diferencias entre el nivel 4 y el 5 es que, en el nivel 4, los procesos están diseñados para causas especiales y proporcionan métricas para ser evaluadas por técnicas estadísticas; mientras que en el nivel 5, los procesos están diseñados para que se encarguen de las causas comunes de la variación y el cambio de los procesos, conservando las estadísticas para poder prever acciones futuras, este ajuste permite llegar a los objetivos cuantitativos de mejora continua. 
              div(x="70%" y="30%" tooltip="Ver más" numero="+")
                h4 Nivel de madurez administrativo cuantitativamente 
                p.mt-4 Se ha logrado con éxito obtener los objetivos específicos de los niveles 2, 3 y 4 y los objetivos genéricos en los niveles 2 y 3. En este nivel se seleccionan los procesos que aportan significativamente al rendimiento del proceso en general, concluyendo subprocesos que se controlan por medio de métricas, reportes y estadísticas que permiten medir la capacidad. Estas métricas posibilitan identificar casos que generen problemas para ser corregidos y no se repitan en el futuro, también para tomar decisiones de negocio que proyectan el crecimiento de la organización. 
                p.mt-4 Una diferencia importante entre el nivel 3 y 4, es que en el nivel 3 los procesos son medidos de forma cualitativamente predecibles, dando paso a la especulación, mientras que en el nivel 4 se evalúa el rendimiento real de los mismos procesos, y esto se determina por medio de técnicas estadísticas y otras técnicas cuantitativas lo previsible dentro de la organización. 
              div(x="59%" y="50%" tooltip="Ver más" numero="+")
                h4 Nivel de madurez definida
                p.mt-4 La organización ha logrado alcanzar todos los objetivos específicos de las áreas asignadas en los niveles 2 y 3. En este nivel los procesos están bien caracterizados, entendidos y donde se definen normas, procedimientos, herramientas y métodos para su aplicación. Entre el nivel 2 y el 3 hay una diferencia bien marcada desde los estándares, las descripciones de los procesos y los procedimientos dependiendo de las instancias, -por decirlo así- por proyecto en específico. Por decirlo de otra manera en el nivel 3, los procesos de la organización se adaptan a la ejecución de un proyecto en específico permitiendo de esta manera adaptarse fácilmente a nuevos retos. 
              div(x="47.5%" y="69%" tooltip="Ver más" numero="+")
                h4 Nivel de madurez administrativo 
                p.mt-4 Los objetivos generales y específicos han sido alcanzados, por decirlo de alguna manera, los proyectos han asegurado que los requisitos son gestionados, los procesos son planificados, y ejecutados de manera controlada. Se garantiza que los procesos se sigan ejecutando bajo presión y alto nivel de estrés, conforme a los planes documentados, y los productos o servicios satisfacen las necesidades del cliente en los requisitos especificados, también los objetivos y normas. 
              div(x="30%" y="89.5%" tooltip="Ver más" numero="+")
                h4 Nivel de madurez inicial 
                p.mt-4 Los procesos suelen ser #[em ad hoc] y caóticos, en el cual se gestionan y crean productos o servicios que no funcionan, excediendo el presupuesto y el calendario de entregas. Las organizaciones en este nivel abandonan los proyectos ante una crisis y no tienen la capacidad de replicar los éxitos y buenas prácticas de procesos previos. 
    
    .cont_titulo_decorativo.mt-5(data-aos="fade-right")
      .row
        .col-auto.pe-0
          figure.ps-2
            img(src="@/assets/curso/tema2/3.svg")
        .col(style="place-self:center;")
          h4.mb-0.pe-4.text-white(style="padding-top:7px;") Estructurada por nivel de capacidad 
    
    .row
      .col-lg-7.mb-4.mb-lg-0(data-aos="fade-right") 
        p Un nivel de capacidad bien definida y establecida sobre una meseta evolutiva, permite describir la capacidad de la organización en relación con un área de proceso determinada, en donde deben tenerse en cuenta las prácticas específicas y genéricas, las mismas que puedan ser extendidas a otras áreas o a otros procesos de la organización relacionados. Cada nivel es una capa en la base que permite una mejora continua con respecto a un proceso particular.
      .col-lg-5(data-aos="fade-left")
        figure.m-auto.col-10.col-md-8.col-lg-12
          img(src="@/assets/curso/tema2/20.svg")
    
    .cont_2_4.mt-5.pt-4.pb-5
      p(data-aos="fade-right") En otras palabras, podemos decir que los niveles de capacidad son acumulativos, los cuales a medida que se está en las capas superiores de los niveles, también se impactan las características de los inferiores. 
      .mt-4
        .row
          .col-lg-6.mb-4.mb-lg-0(data-aos="fade-right")
            .row
              .col-auto.d-none.d-md-block(style="place-self:center;")
                figure
                  img(src="@/assets/curso/tema2/21.svg")
              .col(style="place-self:center;")
                p.mb-0 En CMMI en una representación continua se cuenta con seis niveles de capacidad asignados por los rangos de números del 0 al 5. Esta representación es un conjunto predefinido de áreas de proceso, que se mide por el logro de los objetivos tanto genéricos como específicos, descritos de la siguiente manera:
            figure.d-none.d-lg-block.mt-4
              img(src="@/assets/curso/tema2/22.png")
          .col-lg-6(data-aos="fade-left")
            .tarjeta.tarjeta--azul.p-4(style="background-color:#3A1D71;")
              SlyderA(tipo="b")
                .row.m-auto.text-center.justify-content-center
                  .fw-bold(style="background-color:#3EE2A8;border-radius:100%;padding:1rem 1.7rem;font-size:23px;max-width:fit-content;") 0
                  .text-white.mt-4
                    h4 Incompleto
                    p.mt-4 Estar en el nivel de capacidad 0, indica que un proceso se realiza parcialmente o no se realiza, dado que uno o más objetivos no se cumplen y no presenta objetivos genéricos. 
                .row.m-auto.text-center.justify-content-center
                  .fw-bold(style="background-color:#3EE2A8;border-radius:100%;padding:1rem 1.7rem;font-size:23px;max-width:fit-content;") 1
                  .text-white.mt-4
                    p Se ha realizado.
                .row.m-auto.text-center.justify-content-center
                  .fw-bold(style="background-color:#3EE2A8;border-radius:100%;padding:1rem 1.7rem;font-size:23px;max-width:fit-content;") 2
                  .text-white.mt-4
                    h4 Administrativo
                    p.mt-4 Se denominan como procesos administrados, porque se puede contar con una planeación, una trazabilidad y un control en los proyectos individuales o grupales.
                .row.m-auto.text-center.justify-content-center
                  .fw-bold(style="background-color:#3EE2A8;border-radius:100%;padding:1rem 1.7rem;font-size:23px;max-width:fit-content;") 3
                  .text-white.mt-4
                    h4 Definido
                    p.mt-4 Son procesos que están diseñados a partir de un conjunto de procesos estándar en la organización, con productos de trabajo, modelos, medidas y otras características relacionadas a herramientas que faciliten la identificación y ejecución del proceso. 
                .row.m-auto.text-center.justify-content-center
                  .fw-bold(style="background-color:#3EE2A8;border-radius:100%;padding:1rem 1.7rem;font-size:23px;max-width:fit-content;") 4
                  .text-white.mt-4
                    h4 Cuantitativamente gestionado
                    p.mt-4 En este nivel se realiza un seguimiento al proceso por medio de métricas estadísticas y otras técnicas cuantitativas, para poder establecer el rendimiento de los procesos, con esto se realiza una gestión en el proceso. En este nivel los atributos de calidad y rendimiento se entienden como términos estadísticos usados para la administración del producto a lo largo de la vida del proceso. 
                .row.m-auto.text-center.justify-content-center
                  .fw-bold(style="background-color:#3EE2A8;border-radius:100%;padding:1rem 1.7rem;font-size:23px;max-width:fit-content;") 5
                  .text-white.mt-4
                    h4 Optimizado
                    p.mt-4 Este nivel se centra en la mejora continua del rendimiento de los procesos por medio de mejoras continuas que buscan la innovación. Mientras que en el nivel 4 el enfoque es crear un marco de referencia y las mediciones de rendimiento, el nivel 5 se centra en buscar causas comunes para los problemas y arreglar esos problemas de proceso.  

    Separador

    .titulo-segundo(data-aos="flip-up")
      h2#t_2_4 2.4  Calidad en el proceso de desarrollo de #[em software]
    
    .row
      .col-lg-8.mb-4.mb-lg-0(data-aos="fade-right")
        p Recordemos que la construcción de #[em software] está basada en unas fases que permiten incrementar el producto desde sus cimientos hasta obtener un producto base; esto es posible debido a que en el proceso se implementan diferentes estrategias y metodologías, el gran desafío está, en cómo construir un producto que se pueda validar rápidamente y que contenga los niveles adecuados de calidad. La naturaleza de los requisitos de #[em software] es cambiante, lo cual complica la precisión de los equipos, demorando posiblemente el tiempo, los recursos y el presupuesto asignado.
        .row.mt-4
          .col-auto(style="place-self:center;")
            figure
              img(src="@/assets/curso/tema2/23.svg")
          .col(style="place-self:center;")
            p.mb-0 La calidad de #[em software] es un área importante en el proceso de desarrollo que busca estar en constante validación de la calidad del producto #[em software], por lo general en el diseño de un plan de aseguramiento de calidad. Por ello es de importancia tener en cuenta los siguientes conceptos y su aplicación práctica en el ciclo de desarrollo de #[em software]: 
      .col-lg-4(data-aos="fade-left")
        figure.m-auto.col-7.col-md-7.col-lg-12.d-none.d-lg-block
          img(src="@/assets/curso/tema2/24.png")
    
    .cont_2_5.mt-5
      .col-xl-10.m-auto(style="position:relative;")
        .row
          .col-lg-6.mb-4(data-aos="fade-right")
            .h-100.p-4.text-white(style="background-color:#3A1D71;border-radius:12px;")
              figure.text-center
                img(src="@/assets/curso/tema2/26.svg" style="display:inline;max-width:90px;")
              h4.mt-4.text-center Calidad
              p.mt-4 Es un conglomerado de características de una entidad, que son esenciales y que además permiten calificar su valor.
              p.mt-3 A nivel de empresa, está relacionado con el conjunto de estándares y normas que debe tener un producto o servicio para ser reconocido y percibido en el mercado satisfaciendo las necesidades de los clientes.
          .col-lg-6.mb-4(data-aos="fade-left")
            .h-100.p-4.text-white(style="background-color:#3A1D71;border-radius:12px;")
              figure.text-center
                img(src="@/assets/curso/tema2/27.svg" style="display:inline;max-width:90px;")
              h4.mt-4.text-center Calidad de #[em software] (QA)
              p.mt-4 Es el nivel que tienen los clientes para determinar según su percepción que el producto #[em software] satisface sus necesidades y expectativas.
              p.mt-3 A nivel empresarial la calidad de #[em software] hace referencia a las actividades que se establecen de manera común para asegurar que el desarrollo de #[em software] en todos los proyectos es de calidad.
          .col-lg-6.mb-4(data-aos="fade-right")
            .h-100.p-4.text-white(style="background-color:#3A1D71;border-radius:12px;")
              figure.text-center
                img(src="@/assets/curso/tema2/28.svg" style="display:inline;max-width:90px;")
              h4.mt-4.text-center Aseguramiento de la calidad de #[em software] (SQA)
              p.mt-4 Es el conjunto de actividades, métodos y técnicas planificadas y sistemáticas necesarias para asegurar que el producto #[em software] satisfará los requerimientos dados de calidad. 
              p.mt-3 Se encarga de garantizar que el producto haya sido construido siguiendo los procesos establecidos por la organización.
          .col-lg-6.mb-4(data-aos="fade-left")
            .h-100.p-4.text-white(style="background-color:#3A1D71;border-radius:12px;")
              figure.text-center
                img(src="@/assets/curso/tema2/29.svg" style="display:inline;max-width:90px;")
              h4.mt-4.text-center Propósito del aseguramiento de la calidad de #[em software] (SQA)
              p.mt-4 El propósito principal del SQA es detectar diversos problemas en las fases iniciales del desarrollo del #[em software], estimando que es menos costosa su corrección.
    
      p.mt-4(data-aos="fade-right") La calidad del #[em software] puede medirse hasta la fase de implementación, pero de ser detectados allí los problemas de construcción del producto, implicaría costos extras, por esta razón se aconseja atender y solucionar los posibles errores en las fases iniciales, como en el diseño. Por lo tanto, es necesario tener en cuenta el proceso de SQA durante las etapas iniciales de la construcción del producto, puesto que es donde se definen las características de este y lo que debe garantizar para satisfacer las necesidades implícitas y explícitas. Si el diseño y los requerimientos no están correctamente definidos, es decir que son ambiguos, incompletos o son incoherentes, al momento de implementar el producto va a ser muy costosa su corrección.

      .cont_titulo_decorativo.mt-5(data-aos="fade-right")
        .row
          .col-auto.pe-0
            figure.ps-2
              img(src="@/assets/curso/tema2/3.svg")
          .col(style="place-self:center;")
            h4.mb-0.pe-4.text-white(style="padding-top:7px;") Funciones del aseguramiento de la calidad del software (SQA)

      p(data-aos="fade-left") El rol para SQA es brindar a la metodología de desarrollo de #[em software], y a la administración, la seguridad de que procesos oficialmente establecidos están siendo implementados, teniendo en cuenta:
      .col-xl-10.m-auto.mt-4
        .p-4(style="background-color:#AEC4FA;border-radius:12px;")
          .row
            .col-auto.d-none.d-lg-block(data-aos="fade-right" style="place-self:center;")
              figure
                img(src="@/assets/curso/tema2/30.svg")
            .col(data-aos="fade-left" style="place-self:center;")
              ol.lista-ol--cuadro
                li.d-flex
                  .lista-ol--cuadro__vineta(style="background-color:#2CFEDF;")
                    span.fw-bold(style="color:initial;") 1
                  div Establecer estándares, procesos y planes, con el objetivo de satisfacer las políticas de la organización y que se ajusten a las necesidades de cada proyecto en particular, para así asegurar la calidad del producto #[em software].
                li.d-flex
                  .lista-ol--cuadro__vineta(style="background-color:#2CFEDF;")
                    span.fw-bold(style="color:initial;") 2
                  div Auditar y revisar los productos y actividades desarrolladas para verificar que satisfacen los procesos y estándares definidos.
                li.d-flex
                  .lista-ol--cuadro__vineta(style="background-color:#2CFEDF;")
                    span.fw-bold(style="color:initial;") 3
                  div Proporcionar las herramientas necesarias que den soporte al proceso definido, facilitando su ejecución, visualización, administración y seguimiento.
                li.d-flex
                  .lista-ol--cuadro__vineta(style="background-color:#2CFEDF;")
                    span.fw-bold(style="color:initial;") 4
                  div Proveer al equipo de proyecto y a otros interesados, los resultados sobre las revisiones, auditorías y actividades. 
                li.d-flex
                  .lista-ol--cuadro__vineta(style="background-color:#2CFEDF;")
                    span.fw-bold(style="color:initial;") 5
                  div Determinar las funcionalidades esperadas por el cliente.
                li.d-flex
                  .lista-ol--cuadro__vineta(style="background-color:#2CFEDF;")
                    span.fw-bold(style="color:initial;") 6
                  div Escalar problemas presentados dentro del equipo de un proyecto, hacia un nivel apropiado de administración para su resolución.
                li.d-flex
                  .lista-ol--cuadro__vineta(style="background-color:#2CFEDF;")
                    span.fw-bold(style="color:initial;") 7
                  div Garantizar que se cumpla el plan generado para el desarrollo del proyecto y del proceso de desarrollo de #[em software].
    
    .cont_titulo_decorativo.mt-5(data-aos="fade-right")
      .row
        .col-auto.pe-0
          figure.ps-2
            img(src="@/assets/curso/tema2/3.svg")
        .col(style="place-self:center;")
          h4.mb-0.pe-4.text-white(style="padding-top:7px;") Principios de aseguramiento de la calidad de software (SQA)
    
    p(data-aos="fade-left") Para poder realizar el aseguramiento de la calidad de #[em software] (SQA), se deben tener en cuenta diversos principios básicos:

    .row.mt-4
      .col-lg-7.mb-4.mb-lg-0(data-aos="fade-right" style="place-self:center;")
        AcordionA.acordion1(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
          .row(titulo="Proceso")
            p La calidad debe ser una constante a lo largo de todo el ciclo de vida del #[em software]. Es una acción que se construye en la medida que el producto se va desarrollando, más no cuando el producto está terminado, es por esta razón que todo el equipo o involucrados en el proceso, deben también enfocarse en la calidad del producto.
          .row(titulo="Equipo")
            p La calidad del #[em software] solo se logra con la contribución de todas las personas involucradas, es decir, que la calidad no es un proceso solo del equipo de aseguramiento de la calidad de #[em software], sino más bien una actividad sincrónica entre todas las personas que colaboran para el desarrollo del producto.
          .row(titulo="Planificación")
            p La gestión y la planificación de la calidad debe ser eficaz y previamente definido y ejecutado, por lo tanto, se deben establecer procesos, estándares y una planeación claramente definida para poder asegurar la calidad del producto, donde contengan puntos de verificación y un proceso claro y definido que incluya que, quien, y cuando, va a realizar la verificación o medición de la calidad. 
      .col-lg-5(data-aos="fade-left" style="place-self:center;")
        figure.m-auto.col-7.col-md-7.col-lg-12.d-none.d-lg-block
          img(src="@/assets/curso/tema2/31.png")
    
    .row.mt-5
      .col-lg-5.mb-4.mb-lg-0(data-aos="fade-right" style="place-self:center;")
        figure.m-auto.col-7.col-md-7.col-lg-12.d-none.d-lg-block
          img(src="@/assets/curso/tema2/32.png")
      .col-lg-7(data-aos="fade-left" style="place-self:center;")
        AcordionA.acordion1(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
          .row(titulo="Prevención")
            p Se deben dirigir los esfuerzos a la prevención de defectos, es decir, que una vez que un defecto es detectado además de corregirlo se deben tomar medidas necesarias para que no vuelva a ocurrir. Es en este punto, donde se tiene en cuenta lo que es el análisis de las causas raíces, una vez que se encuentra un defecto se debe analizar por qué se ocasionó y cuál fue la causa que lo originó, por ejemplo, si es un problema en el proceso, o si es un problema con las herramientas que se están utilizando, o si fue una mala definición de los requerimientos, lo que constata que un error no solamente se soluciona o resuelve, sino que hay que indagar más en la causa raíz; porque de no hacerlo en el futuro se va a presentar el mismo problema.
          .row(titulo="Sistemas de detección")
            p Hay que reforzar los sistemas de detección y eliminación de defectos durante las etapas iniciales, lo que reafirma que eliminando los defectos en las etapas de requerimientos y diseño, estamos asegurando que esos defectos no van a ser replicados en las etapas subsiguientes, por ende es menos costoso detectar y corregir los defectos en las etapas iniciales, por ejemplo si detectamos un defecto en los requerimientos o en el diseño del #[em software], lo más posible es que se tenga que corregir documentos o diagramas, pero si se espera a la etapa de desarrollo o cuando el #[em software] ya está en producción, tenemos que volver hacia atrás en todas las fases del ciclo de vida del desarrollo del software.
          .row(titulo="Productividad")
            p La calidad al igual que la productividad, los costos y los plazos de entrega están al mismo nivel, lo que quiere decir que el cumplimiento de los plazos de entrega y mantenerse dentro del presupuesto también son variables que se evalúan dentro del proceso de aseguramiento de calidad de #[em software], porque de qué sirve un producto sin defectos cuando ha costado mucho más de lo presupuestado y se ha entregado cuando ya no será útil.
          .row(titulo="Participación")
            p Es esencial la participación de la dirección, que ha de propiciar la calidad, esto quiere decir que la dirección debe ser el primer interesado en asegurar la calidad y de proveer las directrices, herramientas y el apoyo necesarios para que se pueda lograr, por lo tanto si no hay apoyo de la dirección para implementar y ejecutar el proceso de aseguramiento de calidad del #[em software], será difícil que se pueda llevar a cabo la calidad y por ende los productos no van a salir con la calidad requerida.
    
    .cont_titulo_decorativo.mt-5(data-aos="fade-right")
      .row
        .col-auto.pe-0
          figure.ps-2
            img(src="@/assets/curso/tema2/3.svg")
        .col(style="place-self:center;")
          h4.mb-0.pe-4.text-white(style="padding-top:7px;") Componentes del aseguramiento de la calidad de software (SQA)
    
    p(data-aos="fade-left") El aseguramiento de la calidad de #[em software], debe incluir los siguientes componentes:
    
    .row.mt-4
      .col-lg-6.mb-4.mb-lg-0(data-aos="fade-right" style="place-self:center;")
        AcordionA.acordion1(tipo="b" clase-tarjeta="tarjeta tarjeta--azul")
          .row(titulo="Procedimientos e instrucciones de trabajo")
            p Procesos claramente definidos e instructivos que ayuden al personal a realizar sus actividades con cierto nivel de estandarización.
          .row(titulo="Plantillas y listas de verificación")
            p Se crean plantillas base para estandarizar la documentación producida y también crear instrumentos que permitan medir la calidad de dichos documentos.
          .row(titulo="Capacitación del personal, la readaptación profesional y la certificación")
            p El personal debe estar capacitado para ejecutar las actividades que le corresponden a su rol, por eso la capacitación juega un papel muy importante dentro de SQA.
      .col-lg-6(data-aos="fade-left")
        figure.m-auto.col-7.col-md-8.col-lg-12.d-none.d-lg-block
          img(src="@/assets/curso/tema2/33.svg" style="place-self:center;")
    
    .cont_2_6
      .cont_semicircle_absolute
        .semicircle_absolute.d-none.d-md-block(style="left: unset !important;right: -190px !important;top: unset !important;bottom: 0;")
        .row.mt-4
          .col-lg-6.mb-4.mb-lg-0(data-aos="fade-right" style="place-self:center;")
            figure.m-auto.col-7.col-md-8.col-lg-12.d-none.d-lg-block
              img(src="@/assets/curso/tema2/34.svg")
          .col-lg-6(data-aos="fade-left" style="place-self:center;")
            AcordionA.acordion1(tipo="b" clase-tarjeta="tarjeta tarjeta--azul")
              .row(titulo="Acciones preventivas y correctivas")
                p Se deben realizar acciones para prevenir que un problema se presente y acciones para corregir los problemas que ya se presentaron, usualmente estas acciones preventivas y correctivas surgen a raíz de las verificaciones y de las auditorías.
              .row(titulo="Gestión de la configuración")
                p En la organización se deben de tener procesos que especifiquen cómo serán llevadas a cabo las actividades cotidianas como son la recepción de los requerimientos y movimientos de activos de #[em software] entre las áreas, tales como el código fuente.
              .row(titulo="Control de la documentación")
                p Incluye controlar las versiones de los documentos y garantizar la disponibilidad y el acceso a los mismos, por todos los involucrados en el proceso.
      
    
      .cont_titulo_decorativo.mt-5(data-aos="fade-right")
        .row
          .col-auto.pe-0
            figure.ps-2
              img(src="@/assets/curso/tema2/3.svg")
          .col(style="place-self:center;")
            h4.mb-0.pe-4.text-white(style="padding-top:7px;") Proceso del aseguramiento de la calidad de software (SQA)
      
      p(data-aos="fade-left") En el proceso de aseguramiento de la calidad de #[em software], se encuentran tres etapas:

      div(style="height:20px;")
      .cont_semicircle_absolute.mt-5
        .semicircle_absolute.d-none.d-md-block(style="top: unset !important;bottom: 25px;")
        .row.justify-content-center
          .col-lg.col-md-8.mb-5.mb-lg-0(data-aos="zoom-in")
            .h-100.cont_hover1(style="background-color:#DCECFE;border-radius:12px;")
              .text-center 
                figure
                  img(src="@/assets/curso/tema2/35.svg" style="max-width:120px;display:inline;margin-top:-55px;")
              .p-4.pt-0.text-center.mt-4 
                h4 Planificación
                p.mt-3 Se planifica que es lo que se va a probar, es decir se define el alcance de las pruebas.
          .col-lg.col-md-8.mb-5.mb-lg-0(data-aos="zoom-in")
            .h-100.cont_hover1(style="background-color:#DCECFE;border-radius:12px;")
              .text-center 
                figure
                  img(src="@/assets/curso/tema2/36.svg" style="max-width:120px;display:inline;margin-top:-55px;")
              .p-4.pt-0.text-center.mt-4 
                h4 Construcción
                p.mt-3 Se crean los artefactos de prueba y el #[em script] de pruebas.
          .col-lg.col-md-8(data-aos="zoom-in")
            .h-100.cont_hover1(style="background-color:#DCECFE;border-radius:12px;")
              .text-center 
                figure
                  img(src="@/assets/curso/tema2/37.svg" style="max-width:120px;display:inline;margin-top:-55px;")
              .p-4.pt-0.text-center.mt-4 
                h4 Ejecución
                p.mt-3 En esta etapa se encuentran los defectos y se ejecutan los #[em scripts] de pruebas creados previamente.
      
        Separador

      .titulo-segundo(data-aos="flip-up")
        h2#t_2_5 2.5  Modelos de referencia para la calidad en el proceso
      
      .row
        .col-lg-8.mb-4.mb-lg-0(data-aos="fade-right" style="place-self:center;")
          p En la calidad de #[em software] es importante involucrar el valor de los requerimientos explícitos e implícitos del producto, con el propósito de medir la calidad, los estándares y modelos de calidad existentes. 
          .row
            .col-auto.d-none.d-md-block(style="place-self:center;")
              figure
                img(src="@/assets/curso/tema2/38.svg")
            .col(style="place-self:center;")
              p.mb-0 Estos modelos de calidad tienen un conjunto de factores que pueden ser medidos directamente como unidades de tiempo y errores, pero también indirectamente, como la facilidad de mantenimiento. 
          .p-4.mt-4(style="background-color:#3A1D71;border-radius:12px;")
            .row
              .col-auto(style="place-self:center;")
                figure
                  img(src="@/assets/curso/tema2/39.svg")
              .col(style="place-self:center;")
                p.mb-0.text-white Los modelos de calidad son documentos que constituyen una parte importante de las mejores prácticas, plantean aspectos de administración en la cual las organizaciones deben hacer énfasis, además componen diversas prácticas que facilitan la medición de los avances en la calidad. 
          p.mt-4 Los estándares de calidad, además de ser una guía para alcanzar la calidad y la productividad, permiten especificar una serie de criterios de desarrollo para orientar la manera en que se emplea la ingeniería de #[em software]. A continuación, se nombran los modelos más importantes que evalúan la calidad del producto de #[em software].
        .col-lg-4(data-aos="fade-left" style="place-self:center;")
          figure.m-auto.col-7.col-md-7.col-lg-12
            img(src="@/assets/curso/tema2/40.png")
    
    .cont_titulo_decorativo.mt-5(data-aos="fade-right")
      .row
        .col-auto.pe-0
          figure.ps-2
            img(src="@/assets/curso/tema2/3.svg")
        .col(style="place-self:center;")
          h4.mb-0.pe-4.text-white(style="padding-top:7px;") Modelo Mc Call
    
    p(data-aos="fade-left") Son una serie de preguntas que ponderan un determinado atributo del producto de #[em software] numéricamente. En la siguiente tabla se establecen los criterios de calidad relacionados con los factores de calidad.

    .col-xl-8.m-auto.mt-5
      .titulo-sexto.color-acento-contenido(data-aos="zoom-in-down")
        h5 Tabla 1.
        span Modelo Mc Call, factores de calidad del #[em software]
      .tabla-a.color-acento-botones(data-aos="zoom-in-up")
        table
          thead(style="border:0;")
            tr(style="background-color:#3A1D71;")
              th.text-white.text-center(style="border:1px #E8E8E8 solid;") Perspectivas
              th.text-white.text-center(style="border:1px #E8E8E8 solid;") Factores
              th.text-white.text-center(style="border:1px #E8E8E8 solid;") Criterios
          tbody
            tr(style="background-color:#F6F6F6;")
              td(style="border:1px #E8E8E8 solid;" rowspan="5") Operatividad del producto: factores de calidad que influyen en el grado en que el #[em software] cumple con su especificación.
            tr(style="background-color:#F6F6F6;")
              td(style="border:1px #E8E8E8 solid;") Usabilidad: facilidad de uso del #[em software].
              td.text-center(style="border:1px #E8E8E8 solid;") 
                p.mb-0 Operatividad. 
                p.mb-0 Entrenamiento. 
                p.mb-0 Comunicación.
            tr(style="background-color:#F6F6F6;")
              td(style="border:1px #E8E8E8 solid;") Integridad: protección de programa del acceso no autorizado.
              td.text-center(style="border:1px #E8E8E8 solid;") 
                p.mb-0 Control de acceso.
                p.mb-0 Auditoría de acceso.
            tr(style="background-color:#F6F6F6;")
              td(style="border:1px #E8E8E8 solid;") Corrección: grado en que una funcionalidad coincide con su especificación.
              td.text-center(style="border:1px #E8E8E8 solid;") 
                p.mb-0 Rastreabilidad. 
                p.mb-0 Completitud. 
                p.mb-0 Consistencia.
            tr(style="background-color:#F6F6F6;")
              td(style="border:1px #E8E8E8 solid;") Fiabilidad – confiabilidad: capacidad de los sistemas de no fallar / la medida en que falla el sistema.
              td.text-center(style="border:1px #E8E8E8 solid;") 
                p.mb-0 Consistencia. 
                p.mb-0 Exactitud.
                p.mb-0 Tolerancia a fallos.
            tr(style="background-color:#F6F6F6;")
              td(style="border:1px #E8E8E8 solid;" rowspan="4") Revisión del producto: factores de calidad que influyen en la capacidad de cambiar el producto #[em software].
            tr(style="background-color:#F6F6F6;")
              td(style="border:1px #E8E8E8 solid;") Mantenibilidad: esfuerzo requerido para localizar y arreglar un fallo en el programa dentro de su entorno operativo.
              td.text-center(style="border:1px #E8E8E8 solid;") 
                p.mb-0 Simplicidad.
                p.mb-0 Concreción.
            tr(style="background-color:#F6F6F6;")
              td(style="border:1px #E8E8E8 solid;") Facilidad de prueba: facilidad del programa de realizar pruebas para asegurarse de que está libre de errores y cumple con su especificación.
              td.text-center(style="border:1px #E8E8E8 solid;") 
                p.mb-0 Simplicidad.
                p.mb-0 Instrumentación. 
                p.mb-0 Auto-descripción.
                p.mb-0 Modularidad.
            tr(style="background-color:#F6F6F6;")
              td(style="border:1px #E8E8E8 solid;") Flexibilidad: facilidad de hacer los cambios necesarios según lo solicitado en el entorno operativo.
              td.text-center(style="border:1px #E8E8E8 solid;") 
                p.mb-0 Auto-descripción.
                p.mb-0 Capacidad de expansión. 
                p.mb-0 Generalidad.
                p.mb-0 Modularidad.
            tr(style="background-color:#F6F6F6;")
              td(style="border:1px #E8E8E8 solid;" rowspan="3") Transición del producto: factores de calidad que influyen en la capacidad de adaptar el #[em software] a los nuevos entornos.
            tr(style="background-color:#F6F6F6;")
              td(style="border:1px #E8E8E8 solid;") Reusabilidad: facilidad de reutilización de #[em software] en un contexto diferente.
              td.text-center(style="border:1px #E8E8E8 solid;") 
                p.mb-0 Auto-descripción.
                p.mb-0 Generalidad.
                p.mb-0 Modularidad.
            tr(style="background-color:#F6F6F6;")
              td(style="border:1px #E8E8E8 solid;") Interoperabilidad: esfuerzo requerido para acoplar el sistema a otro sistema.
              td.text-center(style="border:1px #E8E8E8 solid;") 
                p.mb-0 Modularidad.
                p.mb-0 Similitud de comunicación.
                p.mb-0 Similitud de dato.
                p.mb-0 Independencia del sistema.
                p.mb-0 Independencia de la máquina.
    
    .col-xl-10.m-auto.mt-4
      .p-4(style="background-color:#0B47DB;border-radius:12px;" data-aos="zoom-in")
        p.mb-0.text-white El modelo de Mc Call es uno de los primeros desarrollados, no obstante, gran parte de los factores descritos son utilizados en la actualidad, además gran variedad de modelos de calidad, incluyendo la Norma ISO 9126 son una estandarización de este modelo.
    
    .cont_titulo_decorativo.mt-5(data-aos="fade-right")
      .row
        .col-auto.pe-0
          figure.ps-2
            img(src="@/assets/curso/tema2/3.svg")
        .col(style="place-self:center;")
          h4.mb-0.pe-4.text-white(style="padding-top:7px;") Modelo FURPS
    
    p(data-aos="fade-left") Este modelo lo desarrolló Hewlett-Packard en el año 1987. Incluye el desarrollo de una serie de factores de calidad de #[em software], teniendo en cuenta el acrónimo de FURPS: funcionalidad (#[em Functionality]), usabilidad (#[em Usability]), confiabilidad (#[em Reliability]), desempeño (#[em #[em ]) y capaci]dad de soporte (#[em Supportability]). En la siguiente tabla se establecen los factores y los criterios de calidad.

    .col-xl-6.col-lg-10.m-auto.mt-5
      .titulo-sexto.color-acento-contenido(data-aos="zoom-in-down")
        h5 Tabla 2.
        span Modelo FURPS, factores de calidad del #[em software]
      .tabla-a.color-acento-botones(data-aos="zoom-in-up")
        table(style="min-width:100%;")
          thead(style="border:0;")
            tr(style="background-color:#3A1D71;")
              th.text-white.text-center(style="border:1px #E8E8E8 solid;") Factores
              th.text-white.text-center(style="border:1px #E8E8E8 solid;") Criterios
          tbody
            tr(style="background-color:#F6F6F6;")
              td.text-center(style="border:1px #E8E8E8 solid;") Funcionalidad
              td(style="border:1px #E8E8E8 solid;") 
                p.mb-0 Características y capacidades del programa.
                p.mb-0 Generalidad de las funciones.
                p.mb-0 Seguridad del sistema.
            tr(style="background-color:#F6F6F6;")
              td.text-center(style="border:1px #E8E8E8 solid;") Usabilidad
              td(style="border:1px #E8E8E8 solid;") 
                p.mb-0 Factores humanos.
                p.mb-0 Factores estéticos.
                p.mb-0 Consistencia de la interfaz.
                p.mb-0 Documentación.
            tr(style="background-color:#F6F6F6;")
              td.text-center(style="border:1px #E8E8E8 solid;") Confiabilidad
              td(style="border:1px #E8E8E8 solid;") 
                p.mb-0 Frecuencia y severidad de fallos.
                p.mb-0 Exactitud de las salidas.
                p.mb-0 Tiempo medio de fallos.
                p.mb-0 Capacidad de recuperación ante fallos.
                p.mb-0 Capacidad de predicción.
            tr(style="background-color:#F6F6F6;")
              td.text-center(style="border:1px #E8E8E8 solid;") Rendimiento
              td(style="border:1px #E8E8E8 solid;") 
                p.mb-0 Velocidad de procesamiento.
                p.mb-0 Tiempo de respuesta.
                p.mb-0 Consumo de recursos.
                p.mb-0 Rendimiento efectivo total.
                p.mb-0 Eficacia.
            tr(style="background-color:#F6F6F6;")
              td.text-center(style="border:1px #E8E8E8 solid;") Capacidad de soporte
              td(style="border:1px #E8E8E8 solid;") 
                p.mb-0 Extensibilidad.
                p.mb-0 Adaptabilidad.
                p.mb-0 Capacidad de prueba.
                p.mb-0 Capacidad de configuración.
                p.mb-0 Compatibilidad.
                p.mb-0 Requisitos de instalación.
    
    .cont_titulo_decorativo.mt-5(data-aos="fade-right")
      .row
        .col-auto.pe-0
          figure.ps-2
            img(src="@/assets/curso/tema2/3.svg")
        .col(style="place-self:center;")
          h4.mb-0.pe-4.text-white(style="padding-top:7px;") Modelo BOHEM 
    
    p(data-aos="fade-left") Este modelo plantea una jerarquía en forma de árbol con tres ramas y con ciertos niveles, lo cual hace que el #[em software] sea de gran utilidad, enfocándose en tres aspectos: portabilidad, facilidad de uso y facilidad de mantenimiento. El modelo BOHEM se diseña en los siguientes niveles:

    .col-xl-8.m-auto.col-lg-10.mt-4
      .p-3(style="background-color:#EAD6FC;border-radius:12px;" data-aos="flip-up")
        .row
          .col-auto(style="place-self:center;")
            figure
              img(src="@/assets/curso/tema2/41.svg")
          .col(style="place-self:center;")
            ul.lista-ul.mb-0
              li.d-flex
                i.fa.fa-code(style="color:#8722E2;")
                div Aplicaciones primarias.
              li.d-flex
                i.fa.fa-code(style="color:#8722E2;")
                div Construcciones intermedias (factores).
              li.d-flex
                i.fa.fa-code(style="color:#8722E2;")
                div Construcciones primitivas.
              li.d-flex
                i.fa.fa-code(style="color:#8722E2;")
                div Métricas que establecen valores para los criterios (construcciones primitivas).
    
    p.mt-5(data-aos="fade-right") En la siguiente tabla se establecen los factores y criterios.

    .col-xl-6.col-lg-10.m-auto.mt-5
      .titulo-sexto.color-acento-contenido(data-aos="zoom-in-down")
        h5 Tabla 3.
        span Modelo BOHEM, factores de calidad del #[em software]
      .tabla-a.color-acento-botones(data-aos="zoom-in-up")
        table(style="min-width:100%;")
          thead(style="border:0;")
            tr(style="background-color:#3A1D71;")
              th.text-white.text-center(style="border:1px #E8E8E8 solid;") Factores
              th.text-white.text-center(style="border:1px #E8E8E8 solid;") Criterios
          tbody
            tr(style="background-color:#F6F6F6;")
              td.text-center(style="border:1px #E8E8E8 solid;") Portabilidad
              td(style="border:1px #E8E8E8 solid;") 
                p.mb-0 Independencia dispositivos.
                p.mb-0 Completitud.
            tr(style="background-color:#F6F6F6;")
              td.text-center(style="border:1px #E8E8E8 solid;") Fiabilidad
              td(style="border:1px #E8E8E8 solid;") 
                p.mb-0 Completitud.
                p.mb-0 Exactitud.
                p.mb-0 Consistencia.
            tr(style="background-color:#F6F6F6;")
              td.text-center(style="border:1px #E8E8E8 solid;") Eficiencia
              td(style="border:1px #E8E8E8 solid;") 
                p.mb-0 Eficiencia dispositivo.
                p.mb-0 Accesibilidad.
            tr(style="background-color:#F6F6F6;")
              td.text-center(style="border:1px #E8E8E8 solid;") Ingeniería humana
              td(style="border:1px #E8E8E8 solid;") 
                p.mb-0 Accesibilidad.
                p.mb-0 Comunicatividad.
                p.mb-0 Estructuración.
                p.mb-0 Auto-descripción.
            tr(style="background-color:#F6F6F6;")
              td.text-center(style="border:1px #E8E8E8 solid;") Comprensibilidad
              td(style="border:1px #E8E8E8 solid;") 
                p.mb-0 Consistencia.
                p.mb-0 Estructuración.
                p.mb-0 Auto-descripción.
                p.mb-0 Concisión.
                p.mb-0 Legibilidad.
                p.mb-0 Expansibilidad.
            tr(style="background-color:#F6F6F6;")
              td.text-center(style="border:1px #E8E8E8 solid;") Modificabilidad
              td(style="border:1px #E8E8E8 solid;") Estructuración.
    
    .cont_titulo_decorativo.mt-5(data-aos="fade-right")
      .row
        .col-auto.pe-0
          figure.ps-2
            img(src="@/assets/curso/tema2/3.svg")
        .col(style="place-self:center;")
          h4.mb-0.pe-4.text-white(style="padding-top:7px;") ISO/IEC 9126
    
    p(data-aos="fade-left") Es un estándar internacional para la evaluación de la calidad del #[em software], que se aplica a diversos tipos de #[em software]. No obstante, en el 2005 fue reemplazado por el conjunto de normas SQuaRE (#[em System and Software Quality Requirements and Evaluation]). Sus características se pueden observar en la siguiente tabla.

    .col-xl-6.col-lg-10.m-auto.mt-5
      .titulo-sexto.color-acento-contenido(data-aos="zoom-in-down")
        h5 Tabla 4.
        span Modelo ISO/IEC 9126, criterios asociados a factores de calidad
      .tabla-a.color-acento-botones(data-aos="zoom-in-up")
        table(style="min-width:100%;")
          thead(style="border:0;")
            tr(style="background-color:#3A1D71;")
              th.text-white.text-center(style="border:1px #E8E8E8 solid;") Factores
              th.text-white.text-center(style="border:1px #E8E8E8 solid;") Criterios
          tbody
            tr(style="background-color:#F6F6F6;;")
              td.text-center(style="border:1px #E8E8E8 solid;") Funcionalidad
              td(style="border:1px #E8E8E8 solid;") 
                p.mb-0 Adaptabilidad.
                p.mb-0 Exactitud.
                p.mb-0 Interoperabilidad.
                p.mb-0 Seguridad.
            tr(style="background-color:#F6F6F6;;")
              td.text-center(style="border:1px #E8E8E8 solid;") Usabilidad
              td(style="border:1px #E8E8E8 solid;") 
                p.mb-0 Comprensibilidad.
                p.mb-0 Aprendizaje.
                p.mb-0 Operatividad.
                p.mb-0 Atractivo.
            tr(style="background-color:#F6F6F6;;")
              td.text-center(style="border:1px #E8E8E8 solid;") Mantenibilidad
              td(style="border:1px #E8E8E8 solid;") 
                p.mb-0 Análisis.
                p.mb-0 Cambio.
                p.mb-0 Estabilidad.
                p.mb-0 Prueba.
            tr(style="background-color:#F6F6F6;;")
              td.text-center(style="border:1px #E8E8E8 solid;") Fiabilidad
              td(style="border:1px #E8E8E8 solid;") 
                p.mb-0 Madurez.
                p.mb-0 Tolerancia a fallos.
                p.mb-0 Recuperabilidad.
            tr(style="background-color:#F6F6F6;;")
              td.text-center(style="border:1px #E8E8E8 solid;") Eficiencia
              td(style="border:1px #E8E8E8 solid;") 
                p.mb-0 Comportamiento del tiempo.
                p.mb-0 Uso de los recursos.
            tr(style="background-color:#F6F6F6;;")
              td.text-center(style="border:1px #E8E8E8 solid;") Portabilidad
              td(style="border:1px #E8E8E8 solid;") 
                p.mb-0 Adaptabilidad.
                p.mb-0 Instalación.
                p.mb-0 Coexistencia.
                p.mb-0 Reemplazo.
    
    Separador

    .titulo-segundo(data-aos="flip-up")
      h2#t_2_6 2.6  Calidad del #[em software] relacionada con el producto 
    
    .cont_2_7
      .cont_semicircle_absolute
        .semicircle_absolute.d-none.d-md-block(style="left: unset !important;right: -190px !important;top:unset !important;bottom:130px;")
        .row.apply_relative
          .col-lg-8.mb-4.mb-lg-0(data-aos="fade-right")
            p Los clientes determinan según su percepción, que el producto #[em software] satisface sus necesidades y expectativas a partir de aplicar un proceso de calidad de #[em software], puesto que se establecen actividades para asegurar que el desarrollo de #[em software] en todos los proyectos es de calidad. Por otra parte, el propósito de asegurar la calidad de un producto es detectar diversos problemas en las fases iniciales del desarrollo del #[em software], estimando que es menos costoso su corrección. Cabe aclarar que la calidad de #[em software] de un producto puede medirse una vez en la fase de implementación o terminado completamente o cuando el producto está en producción, no obstante, este hecho implicaría amplios costos para la compañía de #[em software] a diferencia de detectar y resolver los problemas en las fases iniciales como el diseño, o en los requerimientos que generaría una reducción de los costos en cuanto a los cambios a realizar.
            .p-4.mt-4.text-white(style="background-color:#3A1D71;border-radius:7px;")
              p Una de varias funciones de la calidad de #[em software] es establecer estándares, procesos y planes, con el objetivo de satisfacer las políticas de la organización y se ajusten a las necesidades de cada proyecto en particular, para asegurar la calidad del producto #[em software], por lo tanto, la calidad del #[em software] está dividida en:
              ul.lista-ul.mt-3.ps-3.mb-0
                li.d-flex
                  i.fa.fa-code(style="color:#F0C52C !important;")
                  div La calidad del producto obtenido.
                li.d-flex.mb-0
                  i.fa.fa-code(style="color:#F0C52C !important;")
                  div La calidad del proceso de desarrollo.
          .col-lg-4(data-aos="fade-left")
            figure.m-auto.col-6.col-md-5.col-lg-12
              img(src="@/assets/curso/tema2/42.png")
      
        p.mt-4(data-aos="fade-right" style="position:relative;") Las anteriores dependen una de otra, puesto que para alcanzar calidad en un producto es pertinente que haya calidad en el proceso de desarrollo. El objetivo que se determine para la calidad del producto, establecerá los propósitos del proceso de desarrollo. Los requerimientos de calidad más significativos del proceso de #[em software] son:

        .col-xl-10.m-auto.mt-4.apply_relative
          .p-4.mt-4(style="background-color:#EAD6FC;border-radius:12px;")
            .row
              .col-md-auto.mb-4.mb-md-0(style="place-self:center;")
                figure.col-5.col-md-12.m-auto
                  img(src="@/assets/curso/tema2/43.svg")
              .col-md(style="place-self:center;")
                ul.lista-ul
                  li.d-flex
                    i.fa.fa-code(style="color:#8722E2;")
                    div Que genere los resultados esperados.
                  li.d-flex
                    i.fa.fa-code(style="color:#8722E2;")
                    div Los resultados deberán estar basados en definiciones correctas.
                  li.d-flex
                    i.fa.fa-code(style="color:#8722E2;")
                    div Los resultados deberán ser mejorados teniendo en cuenta los objetivos del negocio.
    
      .cont_titulo_decorativo.mt-5.apply_relative(data-aos="fade-right")
        .row
          .col-auto.pe-0
            figure.ps-2
              img(src="@/assets/curso/tema2/3.svg")
          .col(style="place-self:center;")
            h4.mb-0.pe-4.text-white(style="padding-top:7px;") Factores que afectan o determinan la calidad del software
      .apply_relative
        p(data-aos="fade-left") El objetivo general de la ingeniería del #[em software], es la producción de #[em software] con capacidad para realizar con exactitud las tareas expresadas en su especificación, y esta calidad puede ser considerada desde dos perspectivas diferentes: la óptica del desarrollador y la del cliente o usuario final. Los factores que afectan al desarrollador se denominan externos e interno. 
        p.mt-4(data-aos="fade-right") A continuación, se presenta una breve explicación de cada uno de ellos:
      
      .apply_relative
        .cont_2_8.mt-4.p-4.pt-lg-5.pb-lg-5
          .col-xl-10.m-auto
            SlyderF(columnas="col-lg-6 col-xl-4")
              .tarjeta.color-acento-botones.p-4.m-auto.bg-white
                .row.justify-content-center.mb-3
                  .col-4
                    img(src='@/assets/curso/tema2/45.svg')
                h5.text-center.bg-white.m-auto.mt-4 Corrección
                p.text-center.mt-4.mb-0 Nivel en que un #[em software] satisface las especificaciones y logra los objetivos propuestos por el cliente; lo anterior responde a la pregunta: ¿el #[em software] hace lo que yo quiero?

              .tarjeta.color-acento-botones.p-4.m-auto.bg-white
                .row.justify-content-center.mb-3
                  .col-4
                    img(src='@/assets/curso/tema2/46.svg')
                h5.text-center.bg-white.m-auto.mt-4 Fiabilidad
                p.text-center.mt-4.mb-0 Nivel en que se puede esperar que un programa realice sus funciones esperadas con la precisión requerida; lo anterior responde a la pregunta: ¿el sistema está apto para usarse?
              
              .tarjeta.color-acento-botones.p-4.m-auto.bg-white
                .row.justify-content-center.mb-3
                  .col-4
                    img(src='@/assets/curso/tema2/47.svg')
                h5.text-center.bg-white.m-auto.mt-4 Eficiencia
                p.text-center.mt-4.mb-0 Cantidad de recursos de máquina y de código requeridos por un programa para efectuar sus funciones; este factor responde a la pregunta ¿se ejecutará en mi #[em hardware] con eficiencia? 
              
              .tarjeta.color-acento-botones.p-4.m-auto.bg-white
                .row.justify-content-center.mb-3
                  .col-4
                    img(src='@/assets/curso/tema2/48.svg')
                h5.text-center.bg-white.m-auto.mt-4 Integridad
                p.text-center.mt-4.mb-0 Nivel en el que puede controlarse el acceso al #[em software] o a los datos por personal que no es autorizado; este factor responde a la pregunta: ¿el #[em software] es seguro?
              
              .tarjeta.color-acento-botones.p-4.m-auto.bg-white
                .row.justify-content-center.mb-3
                  .col-4
                    img(src='@/assets/curso/tema2/49.svg')
                h5.text-center.bg-white.m-auto.mt-4 Seguridad
                p.text-center.mt-4.mb-0 Disponibilidad de instrumentos que permiten controlar y proteger los programas y los datos.
              
              .tarjeta.color-acento-botones.p-4.m-auto.bg-white
                .row.justify-content-center.mb-3
                  .col-4
                    img(src='@/assets/curso/tema2/50.svg')
                h5.text-center.bg-white.m-auto.mt-4 Reusabilidad
                p.text-center.mt-4.mb-0 Nivel de trabajo solicitado para que el #[em software] o alguna de sus partes pueda reutilizarse en otras aplicaciones. Este factor responde a la pregunta: ¿podré reutilizar alguna parte del programa para construir otro proyecto? 

              .tarjeta.color-acento-botones.p-4.m-auto.bg-white
                .row.justify-content-center.mb-3
                  .col-4
                    img(src='@/assets/curso/tema2/51.svg')
                h5.text-center.bg-white.m-auto.mt-4 Exactitud
                p.text-center.mt-4.mb-0 Nivel de precisión de los cálculos y del control que tiene el programa al ejecutar sus funciones.
              
              .tarjeta.color-acento-botones.p-4.m-auto.bg-white
                .row.justify-content-center.mb-3
                  .col-4
                    img(src='@/assets/curso/tema2/52.svg')
                h5.text-center.bg-white.m-auto.mt-4 Completitud
                p.text-center.mt-4.mb-0 Nivel en que se ha obtenido una total implementación de las funciones solicitadas.
              
              .tarjeta.color-acento-botones.p-4.m-auto.bg-white
                .row.justify-content-center.mb-3
                  .col-4
                    img(src='@/assets/curso/tema2/53.svg')
                h5.text-center.bg-white.m-auto.mt-4 Flexibilidad
                p.text-center.mt-4.mb-0 Trabajo necesario para modificar un programa que ya está en funcionamiento u operación. Este factor responde a la pregunta: ¿puede ser modificado de manera fácil?
              
              .tarjeta.color-acento-botones.p-4.m-auto.bg-white
                .row.justify-content-center.mb-3
                  .col-4
                    img(src='@/assets/curso/tema2/54.svg')
                h5.text-center.bg-white.m-auto.mt-4 Portabilidad
                p.text-center.mt-4.mb-0 Trabajo necesario para migrar el programa desde un hardware o un entorno de sistemas a otro ambiente u otro hardware; este factor responde a la pregunta: ¿podré usarlo en otra máquina o con otra configuración distinta a la máquina donde se desarrolló? 
              
              .tarjeta.color-acento-botones.p-4.m-auto.bg-white
                .row.justify-content-center.mb-3
                  .col-4
                    img(src='@/assets/curso/tema2/55.svg')
                h5.text-center.bg-white.m-auto.mt-4 Consistencia
                p.text-center.mt-4.mb-0 Consiste en utilizar un diseño semejante y técnicas de documentación en el transcurso del proyecto de desarrollo de #[em software].
              
              .tarjeta.color-acento-botones.p-4.m-auto.bg-white
                .row.justify-content-center.mb-3
                  .col-4
                    img(src='@/assets/curso/tema2/56.svg')
                h5.text-center.bg-white.m-auto.mt-4 Facilidad de uso
                p.text-center.mt-4.mb-0 Trabajo necesario para aprender a utilizar un programa y que además sabe preparar su entrada e interpretar su salida. 
              
              .tarjeta.color-acento-botones.p-4.m-auto.bg-white
                .row.justify-content-center.mb-3
                  .col-4
                    img(src='@/assets/curso/tema2/57.svg')
                h5.text-center.bg-white.m-auto.mt-4 Facilidad de mantenimiento
                p.text-center.mt-4.mb-0 Trabajo necesario para ubicar y arreglar un error en un programa; este factor responde a la pregunta: ¿permite ser corregido de manera fácil?
              
              .tarjeta.color-acento-botones.p-4.m-auto.bg-white
                .row.justify-content-center.mb-3
                  .col-4
                    img(src='@/assets/curso/tema2/58.svg')
                h5.text-center.bg-white.m-auto.mt-4 Facilidad de prueba
                p.text-center.mt-4.mb-0 Nivel de trabajo requerido para probar un programa de forma que asegure la ejecución de las funciones solicitadas.
              
              .tarjeta.color-acento-botones.p-4.m-auto.bg-white
                .row.justify-content-center.mb-3
                  .col-4
                    img(src='@/assets/curso/tema2/59.svg')
                h5.text-center.bg-white.m-auto.mt-4 Facilidad de interoperabilidad
                p.text-center.mt-4.mb-0 Nivel de trabajo necesario para acoplar un sistema a otro; lo anterior responde a la pregunta: ¿podrá interactuar con otros sistemas?
              
              .tarjeta.color-acento-botones.p-4.m-auto.bg-white
                .row.justify-content-center.mb-3
                  .col-4
                    img(src='@/assets/curso/tema2/60.svg')
                h5.text-center.bg-white.m-auto.mt-4 Facilidad de auditoría
                p.text-center.mt-4.mb-0 Se concentra en la facilidad en que se puede comprobar la conformidad con los estándares.
              
              .tarjeta.color-acento-botones.p-4.m-auto.bg-white
                .row.justify-content-center.mb-3
                  .col-4
                    img(src='@/assets/curso/tema2/61.svg')
                h5.text-center.bg-white.m-auto.mt-4 Normalización de las comunicaciones
                p.text-center.mt-4.mb-0 Nivel en que se utiliza el ancho de banda, las interfaces estándar y los protocolos.
              
              .tarjeta.color-acento-botones.p-4.m-auto.bg-white
                .row.justify-content-center.mb-3
                  .col-4
                    img(src='@/assets/curso/tema2/62.svg')
                h5.text-center.bg-white.m-auto.mt-4 Tolerancia a los errores
                p.text-center.mt-4.mb-0 Percance que se ocasiona cuando el programa encuentra un error.
      
      .cont_titulo_decorativo.mt-5.apply_relative(data-aos="fade-right")
        .row
          .col-auto.pe-0
            figure.ps-2
              img(src="@/assets/curso/tema2/3.svg")
          .col(style="place-self:center;")
            h4.mb-0.pe-4.text-white(style="padding-top:7px;") Costo de los defectos
      
      p(data-aos="fade-left" style="position:relative;") Los costos de calidad son importantes para conseguir productos de calidad. Por lo que se establecen actividades para prevenir, mejorar o detectar la baja calidad que puede haber en los productos #[em software].
    
      .row.mt-4.apply_relative
        .col-lg-4.col-xl-3.mb-4.mb-lg-0(data-aos="fade-right")
          figure.m-auto.col-6.col-md-5.col-lg-12
            img(src="@/assets/curso/tema2/64.svg")
        .col-lg-8.col-xl-9(data-aos="fade-left")
          .row
            .col-auto.d-none.d-md-block(style="place-self:center;")
              figure
                img(src="@/assets/curso/tema2/63.svg")
            .col(style="place-self:center;")
              p.mb-0 En la aplicación de la calidad de #[em software], generalmente los ingenieros o empresas comienzan a realizar pruebas y a detectar defectos en el momento en que la aplicación ha sido totalmente construida lo cual no es una acción correcta.
          .p-4.mt-4(style="background-color:#3A1D71;border-radius:7px;")
            p.fw-bold.ps-1.pe-1(style="background-color:#2CFEDF;max-width:fit-content;") Conclusión de los factores que afectan o determinan la calidad del #[em software]
            p.mt-4.mb-0.text-white Cuando calificamos la calidad de un producto se debe elegir los factores que van a ser estimados como requerimientos, por lo tanto, para realizar esta elección se debe tener en cuenta las propiedades particulares de la aplicación a desarrollar o de su ambiente, como ejemplo podemos observar que si la aplicación se desarrolla para un ambiente en el que el hardware evoluciona rápidamente entonces debemos tener en cuenta el factor de portabilidad, por otro lado si se espera que las especificaciones del sistema cambien frecuentemente entonces el factor flexibilidad va a ser importante. Otro punto que se debe tener en cuenta es el costo de los factores de calidad frente al beneficio que van a proporcionar (análisis de costo/beneficio), es decir que si agregamos todos los factores implicaría un incremento amplio de los costos, en lugar de lo anterior es prudente seleccionar los factores que logren contribuir el mayor valor posible al producto.
      
      .apply_relative
        Separador

        .titulo-segundo(data-aos="flip-up")
          h2#t_2_7 2.7  Calidad relacionada con las personas
        
        .row
          .col(data-aos="fade-right" style="place-self:center;")
            p La mejora de la calidad de #[em software] contiene procesos que ayudan a que los ingenieros de #[em software] manejen, controlen y mejoren el trabajo, teniendo también la oportunidad de construir equipos autodirigidos y ser participantes efectivos del mismo, pero se debe tener en cuenta que primero deben tener el conocimiento para controlar y mejorar su trabajo, y después tener el conocimiento para trabajar en equipo. Por lo anterior el ingeniero podrá plantear mucho mejor el trabajo, medir la calidad del producto, mejorar las técnicas y determinar las medidas estándares para desempeño y calidad. En la calidad relacionada con las personas se establecen dos procesos PSP y TSP que proporcionan métodos detallados de planificación y estimación.
          .col-auto.d-none.d-lg-block(data-aos="fade-left" style="place-self:center;")
            figure
              img(src="@/assets/curso/tema2/65.svg")

        .cont_titulo_decorativo.mt-5.apply_relative(data-aos="fade-right")
          .row
            .col-auto.pe-0
              figure.ps-2
                img(src="@/assets/curso/tema2/3.svg")
            .col(style="place-self:center;")
              h4.mb-0.pe-4.text-white(style="padding-top:7px;") PSP/TSP
        
        p(data-aos="fade-left") #[em Personal Software Process] (PSP) es un proceso diseñado para ayudar a los ingenieros de #[em software] en el control, manejo y mejora del trabajo que realizan, el cual está basado en la calidad del #[em software]; para el caso de #[em Team Software Process] (TSP) es un marco para el desarrollo de #[em software] que pone igual énfasis en el proceso, producto y trabajo en equipo.

        .row.mt-4
          .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
            figure.m-auto.col-8.col-md-7.col-lg-12
              img(src="@/assets/curso/tema2/66.png")
          .col-lg-8(data-aos="fade-left")
            p El PSP tiene un proceso definido que ayuda a realizar mejor los trabajos, con el fin de reportar y conseguir datos completos y precisos del trabajo que se efectúa de manera individual, por lo tanto, mejora el desempeño personal, afectando de esta forma el trabajo del equipo. Por otro lado, contiene una serie de prácticas exactas para la mejora de la productividad personal y la gestión del tiempo de los ingenieros de #[em software] o desarrolladores, en actividades de mantenimiento de sistemas y desarrollo. Está planteado para ser utilizado en modelos de procesos CMMI o ISO 15504 y está orientado tanto a estudiantes como a ingenieros juniors.
    
    p.mt-4(data-aos="fade-right") El proceso de esta metodología se clasifica en tres fases:

    .cont_2_9.mt-4.pt-4.pb-4.pb-lg-5.pt-lg-5
      .tarjeta.p-4(style="background-color:#F6F6F6;")
        SlyderA(tipo="b" style="")
          .row.col-xl-11.m-auto
            .col-lg-8.mb-4.mb-lg-0(style="place-self:center;")
              h4 Fase 1 – Planeación
              div
                p Se realiza el plan que guiará el proceso, por lo tanto, se establecen dos actividades:
                ul.lista-ul.mt-3.ps-3
                  li.d-flex
                    i.fa.fa-code(style="color:#8722E2 !important;")
                    div Análisis para obtener los requerimientos del #[em software].
                  li.d-flex
                    i.fa.fa-code(style="color:#8722E2 !important;")
                    div Estimación de recursos, en la cual se realiza un cálculo del tiempo que se requiere para poder desarrollar el programa.
            .col-lg-4(style="place-self:center;")
              figure.m-auto.col-7.col-md-6.col-lg-12
                img(src='@/assets/curso/tema2/68.png')
          .row.col-xl-11.m-auto
            .col-lg-8.mb-4.mb-lg-0(style="place-self:center;")
              h4 Fase 2 – Desarrollo
              div
                p En esta fase se tienen en cuenta las siguientes actividades:
                ul.lista-ul.mt-3.ps-3
                  li.d-flex
                    i.fa.fa-code(style="color:#8722E2 !important;")
                    div #[strong Diseño:] se hace revisión de los requerimientos para poder producir un diseño que verifique el cumplimiento de los mismos, por otro lado, si es el caso, se debe efectuar un registro de cualquier defecto encontrado en la definición de requerimientos.
                  li.d-flex
                    i.fa.fa-code(style="color:#8722E2 !important;")
                    div #[strong Codificación:] se implementa el diseño siguiendo el estándar de codificación y se documenta el tiempo en el registro.
            .col-lg-4(style="place-self:center;")
              figure.m-auto.col-7.col-md-6.col-lg-12
                img(src='@/assets/curso/tema2/69.png')
          .row.col-xl-11.m-auto
            .col-lg-8.mb-4.mb-lg-0(style="place-self:center;")
              h4 Fase 3 – Fase de #[em postmortem]
              div
                p Se realiza un reporte que es utilizado para documentar detalles importantes de una actividad. Por ejemplo, que problemas surgieron y cómo se solucionaron. 
                p.mt-4 En esta fase se tienen en cuenta las siguientes actividades:
                ul.lista-ul.mt-3.ps-3
                  li.d-flex
                    i.fa.fa-code(style="color:#8722E2 !important;")
                    div Registro de defectos: se hace revisión del resumen del plan de proyecto y se verifica que los defectos encontrados en cada fase de proyecto fueran registrados.
                  li.d-flex
                    i.fa.fa-code(style="color:#8722E2 !important;")
                    div Consistencia de información de defectos: se hace revisión de la información de cada defecto registrado el cual debe ser preciso y completado.
                  li.d-flex
                    i.fa.fa-code(style="color:#8722E2 !important;")
                    div Tiempo: se hace revisión de posibles errores u omisiones en el registro del tiempo.
            .col-lg-4(style="place-self:center;")
              figure.m-auto.col-7.col-md-6.col-lg-12
                img(src='@/assets/curso/tema2/70.png')
    
    .p-4.mt-4(style="background-color:#8722E2;border-radius:7px;" data-aos="zoom-in")
      .row.text-white
        .col-auto(style="place-self:center;")
          figure
            img(src="@/assets/curso/tema2/71.svg")
        .col(style="place-self:center;")
          p.mb-0 En cada fase se realiza un criterio de entrada, en la cual se describe el problema, el plan del proyecto y registros de tiempo. En los criterios de salida se realizan los reportes y se tiene en cuenta la documentación que se realizó durante el proyecto.
    
    p.mt-4(data-aos="fade-right") A continuación, se nombran los formatos utilizados en #[strong(style="color:#8722E2;") PSP] y que se fundamentan generalmente en dos medidas importantes: 

    ul.lista-ul.mt-3.ps-3(data-aos="fade-up")
      li.d-flex
        i.fa.fa-code(style="color:#8722E2 !important;")
        div El tiempo que se emplea en cada fase.
      li.d-flex
        i.fa.fa-code(style="color:#8722E2 !important;")
        div Los defectos que se encuentran en cada fase.
    
    TabsC.color-acento-botones.mt-5
      .py-3.py-md-4(titulo="Formato de registro de tiempo")
        .row.col-xl-11.m-auto
          .col-lg-5.mb-4.mb-lg-0
            h4 Formato de registro de tiempo
            p.mt-4 El objetivo de este formato es registrar el tiempo que se emplea en cada fase del proyecto. No obstante, los datos se utilizan para completar el resumen del plan del proyecto. El tiempo se registra en minutos y deben ser exactos.
            p.mt-4 Un formato de registro de tiempo, debe contener los elementos mostrados en la siguiente figura:
          .col-lg-7(style="place-self:center;")
            .titulo-sexto.color-acento-contenido
              h5
              span Ejemplo formato de registro de tiempo
            figure.mt-4
              img(src='@/assets/curso/tema2/72.svg' alt="La imagen presenta un ejemplo de un formato del registro de tiempo.")
      .py-3.py-md-4(titulo="Formato de registro de defectos")
        .row.col-xl-11.m-auto
          .col-lg-5.mb-4.mb-lg-0
            h4 Formato de registro de defectos
            p.mt-4 El objetivo de realizar este registro de defectos está en fomentar la mejora continua en cada proyecto que se realice.
            p.mt-4 Un formato de registro de defectos, debe contener los elementos que se muestran a continuación
          .col-lg-7(style="place-self:center;")
            .titulo-sexto.color-acento-contenido
              h5
              span Ejemplo formato de registro de defectos
            figure.mt-4
              img(src='@/assets/curso/tema2/73.svg' alt="La imagen presenta un ejemplo de formato de registro de defectos.")
      .py-3.py-md-4(titulo="Resumen del plan del proyecto")
        .row.col-xl-11.m-auto
          .col-lg-5.mb-4.mb-lg-0
            h4 Resumen del plan del proyecto
            p.mt-4 Este formato define un histórico de todos los proyectos realizados, en él se encuentran los datos que serán útiles en el proyecto siguiente, por lo tanto, es importante que los datos se redacten con precisión y calidad para tener un margen de comparación con futuros proyectos.
            p.mt-4 Un formato de resumen del plan del proyecto debe contener los elementos mostrados en la siguiente figura:
          .col-lg-7(style="place-self:center;")
            .titulo-sexto.color-acento-contenido
              h5
              span Ejemplo resumen del plan del proyecto
            figure.mt-4
              img(src='@/assets/curso/tema2/74.svg' alt="La imagen presenta un resumen de un plan de proyecto, donde se presenta el tiempo en la fase, los defectos encontrados y los defectos removidos.")
    
    .cont_titulo_decorativo.mt-5(data-aos="fade-right")
      .row
        .col-auto.pe-0
          figure.ps-2
            img(src="@/assets/curso/tema2/3.svg")
        .col(style="place-self:center;")
          h4.mb-0.pe-4.text-white(style="padding-top:7px;") TSP
    
    p(data-aos="fade-left") #[em Team Software Process] (TSP) es un proceso de desarrollo que está diseñado para orientar a equipos de personas en la planeación, diseño y desarrollo de sistemas de software de calidad. Esta metodología administra el desarrollo de los procesos de #[em software], garantizando un entorno de trabajo natural y agradable para los equipos.
    .row.mt-4
      .col-lg-7.mb-4.mb-lg-0(data-aos="fade-right" style="place-self:center;")
        p El TSP contiene una serie de pasos estructurados con indicaciones para realizar las actividades en cada fase del desarrollo del proyecto, además es una herramienta útil referente a formación de equipos para el desarrollo de #[em software] de calidad, generando una planificación que permite determinar las responsabilidades y los roles en los equipos de trabajo. Para ello el TSP se basa en el PSP para formar profesionales con condiciones idóneas para la realización de proyectos demasiado grandes, además este marco contiene las características para generar planes detallados, utilizar datos de procesos, medir y gestionar la calidad del producto y detallar procesos operacionales.
      .col-lg-5(data-aos="fade-left" style="place-self:center;")
        figure.m-auto.col-8.col-md-6.col-lg-12.d-none.d-lg-block
          img(src="@/assets/curso/tema2/75.svg") 
    
    .row.mt-4
      .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right" style="place-self:center;")
        figure.m-auto.col-7.col-md-5.col-lg-12.d-none.d-lg-block
          img(src="@/assets/curso/tema2/76.png") 
      .col-lg-8(data-aos="fade-left" style="place-self:center;")
        p Los objetivos del TSP son:
        ul.lista-ul.mt-4
          li.d-flex
            i.fa.fa-code(style="color:#8722E2 !important;")
            div Conformar equipos de tal forma que tengan la capacidad de registrar y planear su trabajo, constituir metas bien definidas y que tengan la aptitud para mejorar su propio trabajo a través de la medición del mismo.
          li.d-flex
            i.fa.fa-code(style="color:#8722E2 !important;")
            div Establecer un marco con base en PSP.
          li.d-flex
            i.fa.fa-code(style="color:#8722E2 !important;")
            div Establecer estándares para medir la calidad y el comportamiento.
          li.d-flex
            i.fa.fa-code(style="color:#8722E2 !important;")
            div Suministrar métricas para equipos.
          li.d-flex
            i.fa.fa-code(style="color:#8722E2 !important;")
            div Evaluar los equipos, las responsabilidades y los roles.
          li.d-flex
            i.fa.fa-code(style="color:#8722E2 !important;")
            div Guías para solución de problemas que se generen en los equipos.
          li.d-flex
            i.fa.fa-code(style="color:#8722E2 !important;")
            div Establecer una guía para que la mejora continua de procesos esté activa.
    
    p.mt-4(data-aos="fade-right") A continuación, se presentan las fases del ciclo de vida del TSP, donde se describe unas pautas para realizar un buen desarrollo de #[em software] en cabeza del equipo de trabajo.

    .col-xl-8.m-auto.mt-5
      ImagenInfografica.color-acento-botones.infografica_2_1.d-none.d-lg-block
        template(v-slot:imagen)
          figure
            img(src='@/assets/curso/tema2/77.svg' data-aos="zoom-in-up")
        .tarjeta.color-acento-botones.p-3(x="24%" y="83%" numero="+" style="background-color:#ECF2FE;")
          h5(style="color:#12263F;") Lanzamiento
          p.mb-0(style="color:#12263F;") En esta etapa se determinan las metas del equipo, se evalúan los objetivos, se establecen los roles y responsabilidades del equipo, se tienen en cuenta los requerimientos del cliente y la creación de estrategia para la finalización del proyecto.
        .tarjeta.color-acento-botones.p-3(x="27%" y="60%" numero="+" style="background-color:#ECF2FE;")
          h5(style="color:#12263F;") Estrategia
          p.mb-0(style="color:#12263F;") En esta etapa se crea un modelo conceptual de lo que se necesita para generar soluciones óptimas, determinando las estimaciones y los riesgos.
        .tarjeta.color-acento-botones.p-3(x="34%" y="41%" numero="+" style="background-color:#ECF2FE;")
          h5(style="color:#12263F;") Planeación
          p.mb-0(style="color:#12263F;") En esta etapa se generan los roles y las actividades de cada miembro del equipo.
        .tarjeta.color-acento-botones.p-3(x="45.5%" y="28%" numero="+" style="background-color:#ECF2FE;")
          h5(style="color:#12263F;") Requerimientos
          p.mb-0(style="color:#12263F;") En esta fase se determinan entrevistas con el cliente, con el objetivo de concretar lo que es necesario producir en realidad. Desarrollar un plan de pruebas para el producto terminado previamente al análisis de los requerimientos.
        .tarjeta.color-acento-botones.p-3(x="56%" y="28%" numero="+" style="background-color:#ECF2FE;")
          h5(style="color:#12263F;") Diseño
          p.mb-0(style="color:#12263F;") En esta etapa se desarrolla un plan de pruebas de integración, por lo tanto se especifica en un diseño, todos los detalles respecto a los procesos del producto. 
        .tarjeta.color-acento-botones.p-3(x="65%" y="37%" numero="+" style="background-color:#ECF2FE;")
          h5(style="color:#12263F;") Implementación
          p.mb-0(style="color:#12263F;") En esta etapa el diseño se transfiere a nivel de código, realizando una revisión con el propósito de encontrar errores. También los módulos y las unidades se compilan y ejecutan con el propósito de analizar su calidad.
        .tarjeta.color-acento-botones.p-3(x="71%" y="57%" numero="+" style="background-color:#ECF2FE;")
          h5(style="color:#12263F;") Pruebas
          p.mb-0(style="color:#12263F;") En esta etapa el producto está a punto de finalizar, posteriormente se procede a la integración de los módulos y la documentación para los usuarios finales, como son los manuales de uso. También se establecen las pruebas al #[em(style="color:#12263F;") software], con el objetivo de asegurar la calidad y poder así generar una evaluación en el desempeño del equipo de trabajo.
        .tarjeta.color-acento-botones.p-3(x="75%" y="82%" numero="+" style="background-color:#ECF2FE;")
          h5(style="color:#12263F;font-style:italic;") Postmortem
          p.mb-0(style="color:#12263F;") En esta etapa se hace una evaluación de los resultados de las pruebas y del trabajo del equipo. Se redacta un reporte del ciclo de vida del proyecto a detalle.
      
      ImagenInfografica.color-acento-botones.infografica_2_1.d-md-block.d-lg-none
        template(v-slot:imagen)
          figure
            img(src='@/assets/curso/tema2/78.svg' data-aos="zoom-in-up")
        .tarjeta.color-acento-botones.p-3(x="26%" y="8%" numero="+" style="background-color:#ECF2FE;")
          h5(style="color:#12263F;") Lanzamiento
          p.mb-0(style="color:#12263F;") En esta etapa se determinan las metas del equipo, se evalúan los objetivos, se establecen los roles y responsabilidades del equipo, se tienen en cuenta los requerimientos del cliente y la creación de estrategia para la finalización del proyecto.
        .tarjeta.color-acento-botones.p-3(x="71%" y="8%" numero="+" style="background-color:#ECF2FE;")
          h5(style="color:#12263F;") Estrategia
          p.mb-0(style="color:#12263F;") En esta etapa se crea un modelo conceptual de lo que se necesita para generar soluciones óptimas, determinando las estimaciones y los riesgos.
        .tarjeta.color-acento-botones.p-3(x="26%" y="25%" numero="+" style="background-color:#ECF2FE;")
          h5(style="color:#12263F;") Planeación
          p.mb-0(style="color:#12263F;") En esta etapa se generan los roles y las actividades de cada miembro del equipo.
        .tarjeta.color-acento-botones.p-3(x="71%" y="25%" numero="+" style="background-color:#ECF2FE;")
          h5(style="color:#12263F;") Requerimientos
          p.mb-0(style="color:#12263F;") En esta fase se determinan entrevistas con el cliente, con el objetivo de concretar lo que es necesario producir en realidad. Desarrollar un plan de pruebas para el producto terminado previamente al análisis de los requerimientos.
        .tarjeta.color-acento-botones.p-3(x="26%" y="41.5%" numero="+" style="background-color:#ECF2FE;")
          h5(style="color:#12263F;") Diseño
          p.mb-0(style="color:#12263F;") En esta etapa se desarrolla un plan de pruebas de integración, por lo tanto se especifica en un diseño, todos los detalles respecto a los procesos del producto. 
        .tarjeta.color-acento-botones.p-3(x="71%" y="41.5%" numero="+" style="background-color:#ECF2FE;")
          h5(style="color:#12263F;") Implementación
          p.mb-0(style="color:#12263F;") En esta etapa el diseño se transfiere a nivel de código, realizando una revisión con el propósito de encontrar errores. También los módulos y las unidades se compilan y ejecutan con el propósito de analizar su calidad.
        .tarjeta.color-acento-botones.p-3(x="26%" y="59%" numero="+" style="background-color:#ECF2FE;")
          h5(style="color:#12263F;") Pruebas
          p.mb-0(style="color:#12263F;") En esta etapa el producto está a punto de finalizar, posteriormente se procede a la integración de los módulos y la documentación para los usuarios finales, como son los manuales de uso. También se establecen las pruebas al #[em(style="color:#12263F;") software], con el objetivo de asegurar la calidad y poder así generar una evaluación en el desempeño del equipo de trabajo.
        .tarjeta.color-acento-botones.p-3(x="71%" y="59%" numero="+" style="background-color:#ECF2FE;")
          h5(style="color:#12263F;font-style:italic;") Postmortem
          p.mb-0(style="color:#12263F;") En esta etapa se hace una evaluación de los resultados de las pruebas y del trabajo del equipo. Se redacta un reporte del ciclo de vida del proyecto a detalle.
    
    .cont_2_7.mt-4
      .cont_titulo_decorativo.mt-5.apply_relative(data-aos="fade-right")
        .row
          .col-auto.pe-0
            figure.ps-2
              img(src="@/assets/curso/tema2/3.svg")
          .col(style="place-self:center;")
            h4.mb-0.pe-4.text-white(style="padding-top:7px;") SCRUM
      .apply_relative
        p(data-aos="fade-left") SCRUM es un marco de trabajo ágil de muy amplio uso en la industria del software que se fundamenta en los valores y principios ágiles definidos en el Manifiesto Ágil (2001) y donde se definen tres pilares fundamentales (SCRUMstudy, 2013):

        .row.mt-4
          .col-lg-5.mb-4.mb-lg-0(data-aos="fade-right" style="place-self:center;")
            figure.m-auto.col-7.col-md-7.col-lg-12
              img(src="@/assets/curso/tema2/79.png")
          .col-lg-7(data-aos="fade-left" style="place-self:center;")
            AcordionA.acordion1(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
              .row(titulo="Transparencia")
                p Hace referencia a que cualquier proceso de #[em Scrum] puede ser conocido por cualquiera. Esto es posible por medio de eventos como las reuniones de revisión y reuniones diarias, artefactos como la pila de producto, cronogramas de lanzamiento y documentos de visión del proyecto, e instrumentos de seguimiento como lo son el BurnDown Chart o el tablero de #[em Scrum] (#[em ScrumBoard]).
              .row(titulo="Inspección")
                p Permite que cualquiera puede estar enterado de las actividades realizadas por otros y en general conocer el estado actual de los procesos.
              .row(titulo="Adaptación")
                p Por medio de la transparencia y la inspección es posible fijar actividades de mejoras que permitan mejorar todo tipo de proceso, en pro de lograr más altos estándares de calidad. 
        
        p.mt-5(data-aos="fade-right") Adicionalmente, este marco de trabajo ágil, está estructurado por un conjunto de roles, eventos y artefactos como se observa en la siguiente figura.

        .col-xl-11.m-auto.mt-4
          .row
            .col-lg.mb-4.mb-lg-0(data-aos="fade-right" style="place-self:center;")
              p Dentro del equipo, hay roles que se dividen en dos categorías fundamentales: los roles centrales que hacen referencia a los requeridos obligatoriamente para la creación de un producto, están altamente comprometidos y de los cuales depende el éxito o no de un proyecto, y también están los roles no centrales que hace referencia a todos el personal interesado en el proyecto, pueden interactuar con el equipo pero no son los responsables del éxito del mismo, dentro de esta categoría entran los #[em stakeholders], directivos, gerentes, #[em marketing], asesores, etc.
            .col-lg(data-aos="fade-left" style="place-self:center;")
              figure.m-auto.col-10.col-md-8.col-lg-12
                img(src="@/assets/curso/tema2/80.svg" alt='La imagen ilustra un ciclo de trabajo utilizando la metodología Scrum. En el centro de la imagen, se encuentra un círculo dividido en tres secciones: "Planificación", "Desarrollo" y "Revisión y Retrospectiva". Estas secciones representan las principales etapas del ciclo Scrum.')
        
      .cont_semicircle_absolute.mt-5.pb-5
        p(data-aos="fade-up") Existen tres roles centrales dentro del marco de trabajo de Scrum:
        div(style="height:60px;")
        .semicircle_absolute.d-none.d-md-block(style="left: unset !important;right: -190px !important;top:-45px;")
        .row.justify-content-center.apply_relative
          .col-lg.col-md-8.mb-5.mb-lg-0(data-aos="zoom-in")
            .h-100.cont_hover1(style="background-color:#DCECFE;border-radius:12px;")
              .text-center 
                figure
                  img(src="@/assets/curso/tema2/81.svg" style="max-width:120px;display:inline;margin-top:-55px;")
              .p-4.pt-0.text-center.mt-4 
                h4 Dueño del producto (#[em Product Owner])
                p.mt-3 Persona con amplio conocimiento en el negocio del cliente, sus necesidades y las tendencias del mercado para el área específica. Este rol está encargado de maximizar el valor de negocio entregado al cliente y es el único responsable del control del #[em Product Backlog] (requerimientos) y su priorización. Este rol también representa al cliente en algunos procesos de demostración de avances y determina cuándo aprobar o no una entrega.
          .col-lg.col-md-8.mb-5.mb-lg-0(data-aos="zoom-in")
            .h-100.cont_hover1(style="background-color:#DCECFE;border-radius:12px;")
              .text-center 
                figure
                  img(src="@/assets/curso/tema2/82.svg" style="max-width:120px;display:inline;margin-top:-55px;")
              .p-4.pt-0.text-center.mt-4 
                h4 #[em Scrum Master]
                p.mt-3 Es un rol que se encarga de facilitar los procesos al interior del equipo de trabajo, removiendo cualquier impedimento y apoyando procesos de empoderamiento personal, debe velar porque los elementos propios del marco de trabajo Scrum se apliquen de manera correcta.
          .col-lg.col-md-8(data-aos="zoom-in")
            .h-100.cont_hover1(style="background-color:#DCECFE;border-radius:12px;")
              .text-center 
                figure
                  img(src="@/assets/curso/tema2/83.svg" style="max-width:120px;display:inline;margin-top:-55px;")
              .p-4.pt-0.text-center.mt-4 
                h4 Equipo de desarrollo (#[em Developer team])
                p.mt-3 Son los responsables de la transformación de los requerimientos en código ejecutable a ser usado por el cliente, pero también son responsables de la planificación de las iteraciones y establecimiento de características para tener en cuenta en la verificación de un requerimiento terminado y presentación de avances a los clientes. Generalmente es un equipo auto organizado y auto gestionado.
        .semicircle_absolute.d-none.d-md-block(style="top: unset !important;bottom: -40px;")
      p.mt-5(data-aos="fade-right" style="position:relative;") Además de los roles, Scrum define un conjunto de eventos con participantes y objetivos claros que se desarrollan en momentos particulares del flujo general de Scrum, a continuación, se detalla cada uno de estos eventos:

      .row.mt-4.apply_relative
        .col-lg-7.mb-4.mb-lg-0(data-aos="fade-right" style="place-self:center;")
          AcordionA.acordion1(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
            .row(titulo="<em>Sprint</em>")
              p Es el corazón de Scrum y se refiere a una iteración que está acotada generalmente por un lapso entre 2 y 4 semanas, donde se realiza un ciclo completo de actividades de análisis, diseño, construcción y pruebas, para desarrollar una versión del producto potencialmente entregable al cliente.
            .row(titulo="Planeación de <em>Sprint</em>")
              p Reunión realizada justo antes del inicio de un Sprint, donde se definen el subconjunto de requerimientos (Sprint Backlog) a ser desarrollados en el siguiente Sprint y cómo será el proceso requerido para hacer la entrega del siguiente Sprint, lo cual incluye detallar los requerimientos en tareas concretas, estimación de tiempos/esfuerzo y distribución inicial de responsabilidades. Dependiendo de la duración del Sprint este tiempo de planificación puede variar, pero la métrica establecida para Sprint de 4 semanas corresponde a una planeación de Sprint de 8 horas.
            .row(titulo="Reunión diaria <em>(daily meeting)</em>")
              p Reunión realizada generalmente al inicio de cada día donde el equipo informa en que ha venido trabajando, qué cosas realizaré en el día y qué problemas se le han presentado. Es una reunión corta que se realiza de pie y que debe tener una duración alrededor de los 15 minutos. Esta reunión se alinea con los pilares de transparencia e inspección.
            .row(titulo="Revisión del <em>Sprint</em>")
              p Reunión realizada al finalizar el Sprint, donde el equipo de desarrollo muestra los resultados del Sprint. Para Sprint de 4 semanas se usa reunión de revisiones 4 horas.
            .row(titulo="Revisión de retrospectiva")
              p Última realizada luego de la revisión del Sprint y tiene como objetivo la autoevaluación personal y del grupo sobre el desempeño del Sprint que acaba de finalizar. En esta reunión se identifican y documentan los aprendizajes por medio de diferentes técnicas en las que generalmente se busca dar respuesta a las siguientes preguntas: ¿qué funcionó bien y se debe seguir haciendo?, ¿que no funcionó bien y se debe dejar de realizar? y ¿qué debemos empezar a mejorar? Para un Sprint de 4 semanas se utilizan 3 horas para esta reunión.
        .col-lg-5(data-aos="fade-left" style="place-self:center;")
          figure.m-auto.col-5.col-md-5.col-lg-12
            img(src="@/assets/curso/tema2/84.png")
    
    p.mt-4(data-aos="fade-right") Finalmente, el marco de trabajo Scrum define un conjunto de artefactos que permiten registrar y gestionar información clave, para asegurar los tres pilares fundamentales y proveen información valiosa durante todo el proceso de desarrollo de #[em software]. Entre los artefactos representativos de Scrum encontramos:

    .row.mt-5
      .col-lg-9.mb-4.mb-lg-0(data-aos="fade-right" style="place-self:center;")
        TabsA.color-acento-botones
          .tarjeta.color-acento-botones.p-4(titulo="Pila de producto <br>(<em>Product Backlog</em>)" style="background-color:#E8EEFE;")
            h4(style="color:#12263F;") Pila de producto (#[em(style="color:#12263F;") Product Backlog])
            p(style="color:#12263F;") Lista priorizada de requerimientos generalmente descritos en formato de historias de usuarios, que representa todas las características del sistema a construir.
          .tarjeta.color-acento-botones.p-4(titulo="Pila del Sprint <br>(<em>Sprint Backlog</em>)" style="background-color:#E8EEFE;")
            h4(style="color:#12263F;") Pila del Sprint (#[em(style="color:#12263F;") Sprint Backlog])
            p(style="color:#12263F;") Lista de requerimientos seleccionados desde el Product backlog por el equipo de trabajo, para ser desarrollados durante un Sprint particular. Este es un de los artefactos generados en la reunión de planeación del Sprint.
          .tarjeta.color-acento-botones.p-4(titulo="<em>Burndown Chart</em>" style="background-color:#E8EEFE;")
            h4(style="color:#12263F;") #[em(style="color:#12263F;") Burndown Chart]
            p(style="color:#12263F;") Es un gráfico de dos ejes que muestra a los equipos la cantidad de trabajo pendiente por completar (eje Y) y el tiempo disponible para hacerlo (eje X). 
            p.mt-3(style="color:#12263F;") Este gráfico generalmente se realiza por cada Sprint, ubicando la cantidad trabajo a realizar del Sprint Backlog (usualmente mide puntos de historia o horas de trabajo) en un tiempo 0 y por cada día finalizado se resta la cantidad de puntos de historia u horas de cada tarea completada, también es posible usar este mismo gráfico para representar el avance general del proyecto, ubicando en el eje Y la cantidad total de horas o esfuerzo del Product Backlog y en el eje X la cantidad de Sprint proyectados. Cada uno de estos puntos se unen por medio de una línea y es posible determinar visualmente si el flujo de trabajo está en una situación óptima o no respecto al tiempo restante para completar el Sprint.
          .tarjeta.color-acento-botones.p-4(titulo="Tablero de Scrum <br>(<em>Scrumboard</em>)" style="background-color:#E8EEFE;")
            h4(style="color:#12263F;") Tablero de Scrum (#[em(style="color:#12263F;") Scrumboard])
            p(style="color:#12263F;") Es un elemento visual en donde se integra la mayor parte de los elementos del marco de trabajo Scrum, en él se indica la carga de trabajo, el estado actual de cada una de las actividades y sus respectivos responsables. Este es un elemento que se sincroniza de manera permanente y facilita la implementación los pilares de transparencia, inspección y adaptabilidad. 
            p.mt-3(style="color:#12263F;") Si bien se aconseja el uso de un tablero existen diferentes tipos de herramientas digitales que permiten la implementación de un tablero de Scrum.
      .col-lg-3(data-aos="fade-left" style="place-self:center;")
        figure.m-auto.col-7.col-md-5.col-lg-12
          img(src="@/assets/curso/tema2/85.svg")
    
    p.mt-5(data-aos="fade-right") Entre los principales beneficios del marco de trabajo Scrum, encontramos:

    .row.mt-4
      .col-lg-3.mb-4.mb-lg-0(data-aos="fade-right" style="place-self:center;")
        figure.m-auto.col-7.col-md-5.col-lg-12
          img(src="@/assets/curso/tema2/86.png") 
      .col-lg-9(data-aos="fade-left" style="place-self:center;")
        ul.lista-ul
          li.d-flex
            i.fa.fa-code(style="color:#8722E2 !important;")
            div Es posible gestionar las expectativas del cliente de manera regular ya que este puede y debe participar en las reuniones de revisión por lo que está enterado todo el tiempo del estado actual del proyecto.
          li.d-flex
            i.fa.fa-code(style="color:#8722E2 !important;")
            div El cliente puede obtener resultados importantes y utilizables desde las primeras iteraciones ya que la lista de producto está priorizada para ofrecer mayor valor en el menor tiempo posible y porque cada finalización de Sprint debe tener como resultado una versión totalmente funcional.
          li.d-flex
            i.fa.fa-code(style="color:#8722E2 !important;")
            div El proyecto puede iniciar con requerimientos de muy alto nivel y es fácil administrar los cambios.
          li.d-flex
            i.fa.fa-code(style="color:#8722E2 !important;")
            div La participación constante del cliente permite mitigar riesgos del proyecto desde sus primeras etapas.
          li.d-flex
            i.fa.fa-code(style="color:#8722E2 !important;")
            div Los procesos de retrospectiva permiten establecer actividades permanentes de mejora continua en función de las experiencias del equipo.
    
    .cont_2_10.mt-4.pt-5
      .cont_titulo_decorativo(data-aos="fade-right")
        .row
          .col-auto.pe-0
            figure.ps-2
              img(src="@/assets/curso/tema2/3.svg")
          .col(style="place-self:center;")
            h4.mb-0.pe-4.text-white(style="padding-top:7px;") Calidad de #[em software] en metodologías ágiles
      
      .row
        .col-lg-8.mb-4.mb-lg-0(data-aos="fade-right")
          p La vertiente ágil en el desarrollo de #[em software] pretende distribuir de forma permanente y continua el proceso de desarrollo distribuido en iteraciones rápidas.
          p.mt-4 Sin embargo, el término de “metodología ágil” es engañoso dado que implica que el enfoque ágil es la única manera de abordar el desarrollo de #[em software].  En esta vertiente no se define una serie de pasos o de indicaciones sobre el quehacer en el proceso de desarrollo de #[em software], por el contrario, trata de una forma de pensar en colaboración y los flujos de trabajo, en el cual se definen una serie de valores que orientan las decisiones respecto a lo que se hace y la forma en que se hace. 
          p.mt-4 Las metodologías ágiles buscan generar una serie de piezas que agregan valor y satisfacción al cliente. En estas metodologías se implementan enfoques flexibles y de trabajo en equipo para mejorar el #[em performance] del proceso, con la finalidad de ofrecer mejoras constantes. 
        .col-lg-4(data-aos="fade-left")
          figure.m-auto.col-6.col-md-5.col-lg-12
            img(src="@/assets/curso/tema2/87.png")
    
    .cont_titulo_decorativo.mt-5(data-aos="fade-right")
      .row
        .col-auto.pe-0
          figure.ps-2
            img(src="@/assets/curso/tema2/3.svg")
        .col(style="place-self:center;")
          h4.mb-0.pe-4.text-white(style="padding-top:7px;") Valores de la metodología ágil 
    
    p(data-aos="fade-left") La metodología ágil nació aproximadamente en el año 2001, dando respuesta a los proyectos gestionados por medio de metodologías en cascada, por lo cual una serie de desarrolladores redactó el manifiesto ágil. En este manifiesto se describieron cuatro características principales las cuales se deberían priorizar por encima de cualquier otra cosa. Por lo cual, los equipos que trabajan bajo esta vertiente deben valorar lo siguiente: 

    .cont_2_11.mt-4
      .row.mt-4
        .col-lg-5.mb-4.mb-lg-0(data-aos="fade-right" style="place-self:center;")
          figure.m-auto.col-7.col-md-5.col-lg-12
            img(src="@/assets/curso/tema2/89.png") 
        .col-lg-7(data-aos="fade-left" style="place-self:center;")
          ul.lista-ul
            li.d-flex
              i.fa.fa-code(style="color:#8722E2 !important;")
              div Las personas y las interacciones antes que los procesos y las herramientas. 
            li.d-flex
              i.fa.fa-code(style="color:#8722E2 !important;")
              div El #[em software] en funcionamiento antes que la documentación exhaustiva.
            li.d-flex
              i.fa.fa-code(style="color:#8722E2 !important;")
              div La colaboración con el cliente antes que la negociación contractual.
            li.d-flex
              i.fa.fa-code(style="color:#8722E2 !important;")
              div La respuesta ante el cambio antes que el apego a un plan.
          .p-4.mt-4(style="background-color:#AEC4FA;border-radius:12px;")
            p.mb-0 En un proyecto ágil vamos a tener iteraciones o #[em sprints], cada #[em sprint] tiene una duración que no es muy extensa aproximadamente dos a cuatro semanas; al final de cada iteración ya están definidas funcionalidades que pueden ser utilizadas por el cliente. En los proyectos ágiles existen dos tipos de planificaciones: #[em release]/entrega y #[em sprint]/iteración; no obstante, estas se pueden dar en un mismo momento, es decir, que puede incluir una sola planificación con actividades tanto del #[em release] como del #[em sprint]. Se debe tener en cuenta que en un proyecto ágil las pruebas de #[em software] se realizan en cada iteración.
      
      p.mt-4(data-aos="fade-right") La metodología de desarrollo de #[em software] en cascada utiliza diferentes tipos de pruebas de #[em software] que probaran tanto requerimientos funcionales como no funcionales de manera secuencial. No obstante, en metodologías ágiles específicamente en las pruebas agiles, también se consideran varios tipos de pruebas, pero teniendo en cuenta que se utilizan sprints o interacciones cortas e integraciones continuas, entre los equipos de desarrollo, diseño y pruebas.

      .cont_titulo_decorativo.mt-5(data-aos="fade-right")
        .row
          .col-auto.pe-0
            figure.ps-2
              img(src="@/assets/curso/tema2/3.svg")
          .col(style="place-self:center;")
            h4.mb-0.pe-4.text-white(style="padding-top:7px;") Principios de las pruebas ágiles (#[em Agile Testing])
      
      p(data-aos="fade-left") Según los principios del #[em Agile Testing], las personas que representan la parte de negocio del producto están involucradas en cada iteración del mismo, y el flujo de retroalimentación continua acorta el tiempo de respuesta y la toma de decisiones para integrar en la mejora del producto, estos principios son:

      .mt-4
        .row.col-xl-9.m-auto.justify-content-center.text-center
          .col-lg-4.mb-4.col-md-8(data-aos="zoom-in")
            .h-100.p-4.pt-5.text-white(style="background-color:#3A1D71;border-radius:12px;")
              p.fw-bold.mt-3 Integración continua
              p Los equipos de diseño y desarrollo ejecutan pruebas continuamente, puesto que es una forma de asegurar el avance continuo del producto. 
          .col-lg-4.mb-4.col-md-8(data-aos="zoom-in")
            .h-100.p-4.pt-5.text-white(style="background-color:#3A1D71;border-radius:12px;")
              p.fw-bold.mt-3 Entrega continua
              p Se soporta en la integración continua, en este punto los desarrolladores realizan un control y la cantidad de veces que se realiza la entrega continua.
          .col-lg-4.mb-4.col-md-8(data-aos="zoom-in")
            .h-100.p-4.pt-5.text-white(style="background-color:#3A1D71;border-radius:12px;")
              p.fw-bold.mt-3 Elaborar menos documentación
              p Los participantes de los equipos en metodologías ágiles pueden crear listas y tomar notas para centrarse en probar el #[em software], lo que permite no enfocarse en detalles secundarios que tomarían mucho tiempo.
          .col-lg-4.mb-4.col-md-8(data-aos="zoom-in")
            .h-100.p-4.pt-5.text-white(style="background-color:#3A1D71;border-radius:12px;")
              p.fw-bold.mt-3 Responder con velocidad a la retroalimentación
              p Los involucrados en el negocio del producto están estrechamente conectados con las interacciones del producto, además el tiempo de respuesta se reduce debido a la realimentación continua en cada parte de la interacción.
          .col-lg-4.mb-4.col-md-8(data-aos="zoom-in")
            .h-100.p-4.pt-5.text-white(style="background-color:#3A1D71;border-radius:12px;")
              p.fw-bold.mt-3 Proporcionar retroalimentación constante: 
              p En las pruebas agiles la retroalimentación es continua de modo que el diseño del producto logre los propósitos del negocio requeridos.
          .col-lg-4.mb-4.col-md-8(data-aos="zoom-in")
            figure.m-auto.col-9.col-md-8.col-lg-12
              img(src="@/assets/curso/tema2/90.svg")
    
    .cont_titulo_decorativo.mt-5(data-aos="fade-right")
      .row
        .col-auto.pe-0
          figure.ps-2
            img(src="@/assets/curso/tema2/3.svg")
        .col(style="place-self:center;")
          h4.mb-0.pe-4.text-white(style="padding-top:7px;") Cuadrantes de las pruebas en metodologías ágiles
    
    p(data-aos="fade-left") Para planificar las pruebas ágiles, nos podemos basar en los cuadrantes del agile testing, que nos aporta una biblioteca de tipos de pruebas que se pueden usar para cumplir con los requerimientos.

    .col-xl-10.m-auto.mt-4
      .row
        .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
          .h-100.p-4(style="background-color:#EAD6FC;")
            p Los cuatro cuadrantes son una clasificación que contribuye al momento de planificar las pruebas ágiles, asegurando que se tengan en cuenta los métodos y recursos para alcanzar productos de #[em software] de calidad.
        .col-lg-8(data-aos="fade-left")
          .h-100
            .titulo-sexto.color-acento-contenido
              h5 Figura 1.
              span Ejemplo formato de registro de tiempo
            .p-3.p-lg-5(style="background-color:#E8EEFE;border-radius:11px;")
              figure
                img(src="@/assets/curso/tema2/91.svg" alt="La imagen muestra un formato de registro de tiempo utilizado en un entorno de trabajo. El formato está dividido en varias secciones claramente identificadas, incluyendo columnas para la fecha, hora de inicio, hora de finalización, duración, tarea realizada y comentarios adicionales.")
    
    p.mt-4(data-aos="fade-right") Cada cuadrante involucra pruebas específicas, las cuales se distribuyen de acuerdo con los roles ejercidos, es así como se tienen dos tipos de pruebas:

    TabsC.color-acento-botones.mt-4
      .py-3.py-md-4(titulo="Pruebas de críticas al producto (<em>Critique the Product</em>)")
        .row.col-xl-11.m-auto
          .col-lg-8.mb-4.mb-lg-0
            h4 Pruebas de críticas al producto (#[em Critique the Product])
            p.mt-4 Estas pruebas se enfocan en apoyar al equipo desarrollador a través de la construcción (desarrollo) del producto, puesto que le orientan sobre su funcionalidad, posteriormente contribuyen a la introducción de un nuevo código y la refactorización sin que genere resultados imprevistos en el comportamiento del sistema, se encuentran en:
            p.mt-3 El primer cuadrante (Q1) contiene los siguientes tipos de pruebas:
            ul.lista-ul.mt-3.ps-3
              li.d-flex
                i.fa.fa-code(style="color:#8722E2 !important;")
                div Pruebas unitarias.
              li.d-flex
                i.fa.fa-code(style="color:#8722E2 !important;")
                div Pruebas de componente.
            p.mt-4 Estas pruebas se enfocan en apoyar al equipo desarrollador a través de la construcción (desarrollo) del producto, puesto que le orientan sobre su funcionalidad, posteriormente contribuyen a la introducción de un nuevo código y la refactorización sin que genere resultados imprevistos en el comportamiento del sistema, se encuentran en:
            ul.lista-ul.mt-3.ps-3
              li.d-flex
                i.fa.fa-code(style="color:#8722E2 !important;")
                div Pruebas funcionales.
              li.d-flex
                i.fa.fa-code(style="color:#8722E2 !important;")
                div Pruebas de historias.
              li.d-flex
                i.fa.fa-code(style="color:#8722E2 !important;")
                div Pruebas de Prototipos y simulaciones.
            p.mt-4 Las pruebas y las funcionalidades de este cuadrante detallan cada historia de usuario, además también pueden ser automatizadas, no obstante, es necesario que algunas de estas pruebas sean ejecutadas desde la interfaz de usuario o lo que es lo mismo desde el punto de vista del cliente. 
            p.mt-4 En las pruebas de este cuadrante, los diseñadores de la interfaz de usuario crean #[em wireframes] para realizar en primera instancia, validaciones con el cliente, y posteriormente iniciar con el desarrollo.
          .col-lg-4(style="place-self:center;")
            figure.m-auto.col-6.col-md-5.col-lg-12
              img(src='@/assets/curso/tema2/92.svg')
      .py-3.py-md-4(titulo="Pruebas de apoyo al equipo (<em>Supporting the Team</em>)")
        .row.col-xl-11.m-auto
          .col-lg-8.mb-4.mb-lg-0
            h4 Pruebas de apoyo al equipo (#[em Supporting the Team])
            p.mt-4 Estas pruebas pueden tener un carácter positivo, puesto que a partir de ellas se pueden sugerir o realizar mejoras. Cuando se ejecutan, la idea es simular de la forma más fiel, el ambiente real en el cual serán ejecutadas, así mismo estas pruebas frecuentemente son realizadas por los usuarios finales como pruebas de aceptación (UAT)
            p.mt-4 El tercer cuadrante (Q3) contiene los siguientes tipos de pruebas:
            ul.lista-ul.mt-3.ps-3
              li.d-flex
                i.fa.fa-code(style="color:#8722E2 !important;")
                div Pruebas exploratorias.
              li.d-flex
                i.fa.fa-code(style="color:#8722E2 !important;")
                div Pruebas de usabilidad.
              li.d-flex
                i.fa.fa-code(style="color:#8722E2 !important;")
                div Pruebas de escenarios.
              li.d-flex
                i.fa.fa-code(style="color:#8722E2 !important;")
                div Pruebas de aceptación de usuario.
            p.mt-4 El cuarto cuadrante (Q4) contiene pruebas técnicas relacionadas con los requerimientos no funcionales, por lo que validan el cumplimiento de estos, analizando la seguridad, el desempeño y la robustez:
            ul.lista-ul.mt-3.ps-3
              li.d-flex
                i.fa.fa-code(style="color:#8722E2 !important;")
                div Pruebas de rendimiento y de estrés.
              li.d-flex
                i.fa.fa-code(style="color:#8722E2 !important;")
                div Pruebas de seguridad.
              li.d-flex
                i.fa.fa-code(style="color:#8722E2 !important;")
                div Pruebas de robustez.
          .col-lg-4(style="place-self:center;")
            figure.m-auto.col-6.col-md-5.col-lg-12
              img(src='@/assets/curso/tema2/93.svg')
    
    .cont_titulo_decorativo.mt-5(data-aos="fade-right")
      .row
        .col-auto.pe-0
          figure.ps-2
            img(src="@/assets/curso/tema2/3.svg")
        .col(style="place-self:center;")
          h4.mb-0.pe-4.text-white(style="padding-top:7px;") Metodología XP - Programación Extrema
    
    p(data-aos="fade-left") #[strong XP] es la abreviación comúnmente utilizada para referirse a #[em Extreme Programming], el cual es un marco de desarrollo de #[em software] ágil que busca producir #[em software] de alta calidad en contextos con requisitos altamente cambiantes, riesgos que involucran tiempos fijos con tecnologías nuevas y equipos de trabajo pequeños ubicados en un mismo sitio.
    p(data-aos="fade-right") #[strong XP] define cinco valores (Beck & Andres, 2004), tal como podemos ver a continuación:

    .cont_2_12.mt-4
      .row.mt-4.apply_relative
        .col-lg-7.mb-4.mb-lg-0(data-aos="fade-right" style="place-self:center;")
          AcordionA.acordion1(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
            .row(titulo="Comunicación")
              p El desarrollo de #[em software] requiere de trabajo en equipo, por lo cual es importante la transferencia de conocimientos y utilizar medios de comunicación apropiados, se propone la discusión cara a cara con herramientas que permitan dibujar o escribir como por ejemplo, un tablero.
            .row(titulo="Simplicidad")
              p Se refiere a hacer solo las cosas que sean absolutamente necesarias, evitando el desperdicio, elaborar las cosas de forma que sea fácil entender por otros y abordar solo requisitos conocidos.
            .row(titulo="Retroalimentación")
              p Permite identificar áreas de mejora y revisión constante de las prácticas implementadas en el proceso de forma, que puedan establecer procesos de mejora permanente.
            .row(titulo="Coraje")
              p Se refiere al actuar sobre situaciones que pueden ser retadoras para el equipo como por ejemplo, enfrentar problemas organizacionales, intentar implementar funcionalidades de formas diferente cuando lo convencional no funciona, aceptar comentarios, etc.
            .row(titulo="Respeto")
              p Por medio de la transparencia y la inspección es posible fijar actividades de mejoras que permitan mejorar todo tipo de proceso, en pro de lograr más altos estándares de calidad. 
        .col-lg-5(data-aos="fade-left" style="place-self:center;")
          figure.m-auto.col-5.col-md-5.col-lg-12
            img(src="@/assets/curso/tema2/94.png") 

      p.mt-4(data-aos="fade-right" style="position:relative;") Adicional a los valores, XP se caracteriza por la definición de un conjunto de 12 prácticas de desarrollo de software que, aunque pueden ser adoptadas de forma aislada, tiene mayor relevancia cuando son desarrolladas en conjunto (Jeffries, 2011):

      .col-xl-8.m-auto.mt-4
        .p-lg-5.p-4(style="border-radius:15px;background-color:#EAD6FC;" data-aos="zoom-in-up")
          ImagenInfografica.color-acento-botones.infografica_2_1.d-none.d-lg-block
            template(v-slot:imagen)
              figure
                img(src='@/assets/curso/tema2/96.png' )
            .tarjeta.color-acento-botones.p-3(x="14%" y="0%" numero="+" style="background-color:#ECF2FE;")
              h5(style="color:#12263F;") Planificación
              p.mb-0(style="color:#12263F;") Consiste en una reunión de planeación que realiza el equipo de desarrollo en conjunto con el cliente, para discutir y probar las características a ser desarrolladas.
            .tarjeta.color-acento-botones.p-3(x="50%" y="0%" numero="+" style="background-color:#ECF2FE;")
              h5(style="color:#12263F;") Pequeños lanzamientos
              p.mb-0(style="color:#12263F;") Esta práctica sugiere hacer iteraciones cortas con funcionalidades pequeñas que puedan ser probadas con el cliente, de forma que se obtiene realimentación temprana y frecuente.
            .tarjeta.color-acento-botones.p-3(x="86%" y="0%" numero="+" style="background-color:#ECF2FE;")
              h5(style="color:#12263F;") Metáfora
              p.mb-0(style="color:#12263F;") Los nombres usados para definir cualquier tipo de identificador en el sistema debe ser coherente. El diseño y la estructura general debe ser comprensible para cualquier persona.
            .tarjeta.color-acento-botones.p-3(x="14%" y="25%" numero="+" style="background-color:#ECF2FE;")
              h5(style="color:#12263F;") Refactorización
              p.mb-0(style="color:#12263F;") Eliminación de funciones innecesarias, desacoplar elementos, eliminar cualquier tipo de redundancia de forma que se mantenga un código lo más limpio posible, que sea fácil de entender y modificar.
            .tarjeta.color-acento-botones.p-3(x="50%" y="25%" numero="+" style="background-color:#ECF2FE;")
              h5(style="color:#12263F;") Pruebas
              p.mb-0(style="color:#12263F;") Sugiere el uso de técnicas donde se enfatice en el proceso de pruebas constantes antes de iniciar la construcción del código, como por ejemplo TTD (Desarrollo basado en pruebas).
            .tarjeta.color-acento-botones.p-3(x="86%" y="25%" numero="+" style="background-color:#ECF2FE;")
              h5(style="color:#12263F;") Diseño simple
              p.mb-0(style="color:#12263F;") Hacer código que funcione y que sea a la vez la solución más simple posible, evitando duplicación de código, menor número de métodos y clases.
            .tarjeta.color-acento-botones.p-3(x="14%" y="52%" numero="+" style="background-color:#ECF2FE;")
              h5(style="color:#12263F;") Programación en pareja
              p.mb-0(style="color:#12263F;") Esta práctica propone que un código sea desarrollado por el trabajo de dos personas, donde una de ellas codifica y la otra está haciendo revisión, sugerencias y corrección de errores en el mismo momento de escritura.
            .tarjeta.color-acento-botones.p-3(x="50%" y="52%" numero="+" style="background-color:#ECF2FE;")
              h5(style="color:#12263F;") Semana de 40 horas
              p.mb-0(style="color:#12263F;") Es importante que los desarrolladores tengan espacios de trabajo apropiados, donde puedan descansar y mantener un equilibrio entre la vida laboral y personal favoreciendo la eficiencia y puedan sostener la calidad durante todo el tiempo. Propone que no se deben exceder las 45 horas de trabajo semanales.
            .tarjeta.color-acento-botones.p-3(x="86%" y="52%" numero="+" style="background-color:#ECF2FE;")
              h5(style="color:#12263F;") Cliente in situ
              p.mb-0(style="color:#12263F;") El cliente final debe participar durante todo el proceso de construcción de #[em(style="color:#12263F;") software] y estar presente para resolver cualquier pregunta que se pueda generar.
            .tarjeta.color-acento-botones.p-3(x="14%" y="80%" numero="+" style="background-color:#ECF2FE;")
              h5(style="color:#12263F;") Propiedad colectiva
              p.mb-0(style="color:#12263F;") Todo el equipo es dueño del sistema, esto promueve la cooperación y la libertad de cada miembro para aportar nuevas ideas.
            .tarjeta.color-acento-botones.p-3(x="50%" y="80%" numero="+" style="background-color:#ECF2FE;")
              h5(style="color:#12263F;") Integración continua
              p.mb-0(style="color:#12263F;") Implica el uso de sistema de control de versiones de forma que el código pueda ser compartido o reutilizado, pero también cada persona pueda trabajar de forma independiente y en paralelo sobre el mismo proyecto.
            .tarjeta.color-acento-botones.p-3(x="86%" y="80%" numero="+" style="background-color:#ECF2FE;")
              h5(style="color:#12263F;") Estándar de codificación
              p.mb-0(style="color:#12263F;") Se deben utilizar los mismos formatos y estilos en la redacción de código.
          
          ImagenInfografica.color-acento-botones.infografica_2_1.infografica_2_1_1.d-md-block.d-lg-none.col-md-12.m-auto
            template(v-slot:imagen)
              figure
                img(src='@/assets/curso/tema2/97.png' )
            .tarjeta.color-acento-botones.p-3(x="23%" y="0%" numero="+" style="background-color:#ECF2FE;")
              h5(style="color:#12263F;") Planificación
              p.mb-0(style="color:#12263F;") Consiste en una reunión de planeación que realiza el equipo de desarrollo en conjunto con el cliente, para discutir y probar las características a ser desarrolladas.
            .tarjeta.color-acento-botones.p-3(x="78%" y="0%" numero="+" style="background-color:#ECF2FE;")
              h5(style="color:#12263F;") Programación en pareja
              p.mb-0(style="color:#12263F;") Esta práctica propone que un código sea desarrollado por el trabajo de dos personas, donde una de ellas codifica y la otra está haciendo revisión, sugerencias y corrección de errores en el mismo momento de escritura.
            .tarjeta.color-acento-botones.p-3(x="23%" y="18%" numero="+" style="background-color:#ECF2FE;")
              h5(style="color:#12263F;") Pequeños lanzamientos
              p.mb-0(style="color:#12263F;") Esta práctica sugiere hacer iteraciones cortas con funcionalidades pequeñas que puedan ser probadas con el cliente, de forma que se obtiene realimentación temprana y frecuente.
            .tarjeta.color-acento-botones.p-3(x="77%" y="18%" numero="+" style="background-color:#ECF2FE;")
              h5(style="color:#12263F;") Propiedad colectiva
              p.mb-0(style="color:#12263F;") Todo el equipo es dueño del sistema, esto promueve la cooperación y la libertad de cada miembro para aportar nuevas ideas.
            .tarjeta.color-acento-botones.p-3(x="23%" y="35.5%" numero="+" style="background-color:#ECF2FE;")
              h5(style="color:#12263F;") Metáfora
              p.mb-0(style="color:#12263F;") Los nombres usados para definir cualquier tipo de identificador en el sistema debe ser coherente. El diseño y la estructura general debe ser comprensible para cualquier persona.
            .tarjeta.color-acento-botones.p-3(x="77%" y="35.5%" numero="+" style="background-color:#ECF2FE;")
              h5(style="color:#12263F;") Integración continua
              p.mb-0(style="color:#12263F;") Implica el uso de sistema de control de versiones de forma que el código pueda ser compartido o reutilizado, pero también cada persona pueda trabajar de forma independiente y en paralelo sobre el mismo proyecto.
            .tarjeta.color-acento-botones.p-3(x="23.5%" y="53%" numero="+" style="background-color:#ECF2FE;")
              h5(style="color:#12263F;") Diseño simple
              p.mb-0(style="color:#12263F;") Hacer código que funcione y que sea a la vez la solución más simple posible, evitando duplicación de código, menor número de métodos y clases.
            .tarjeta.color-acento-botones.p-3(x="77%" y="53%" numero="+" style="background-color:#ECF2FE;")
              h5(style="color:#12263F;") Semana de 40 horas
              p.mb-0(style="color:#12263F;") Es importante que los desarrolladores tengan espacios de trabajo apropiados, donde puedan descansar y mantener un equilibrio entre la vida laboral y personal favoreciendo la eficiencia y puedan sostener la calidad durante todo el tiempo. Propone que no se deben exceder las 45 horas de trabajo semanales.
            .tarjeta.color-acento-botones.p-3(x="23.5%" y="71%" numero="+" style="background-color:#ECF2FE;")
              h5(style="color:#12263F;") Pruebas
              p.mb-0(style="color:#12263F;") Sugiere el uso de técnicas donde se enfatice en el proceso de pruebas constantes antes de iniciar la construcción del código, como por ejemplo TTD (Desarrollo basado en pruebas).
            .tarjeta.color-acento-botones.p-3(x="77%" y="71%" numero="+" style="background-color:#ECF2FE;")
              h5(style="color:#12263F;") Cliente in situ
              p.mb-0(style="color:#12263F;") El cliente final debe participar durante todo el proceso de construcción de #[em(style="color:#12263F;") software] y estar presente para resolver cualquier pregunta que se pueda generar.
            .tarjeta.color-acento-botones.p-3(x="23.5%" y="88.5%" numero="+" style="background-color:#ECF2FE;")
              h5(style="color:#12263F;") Refactorización
              p.mb-0(style="color:#12263F;") Eliminación de funciones innecesarias, desacoplar elementos, eliminar cualquier tipo de redundancia de forma que se mantenga un código lo más limpio posible, que sea fácil de entender y modificar.
            .tarjeta.color-acento-botones.p-3(x="77%" y="88.5%" numero="+" style="background-color:#ECF2FE;")
              h5(style="color:#12263F;") Estándar de codificación
              p.mb-0(style="color:#12263F;") Se deben utilizar los mismos formatos y estilos en la redacción de código.




      
  

      
</template>

<script>
export default {
  name: 'Tema2',
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
.cont_2_1, .cont_2_1 .apply_relative *
  position: relative
.cont_2_1:before
  content: ''
  position: absolute
  height: 100%
  width: 125%
  left: -15%
  top: 0
  background: rgb(236,242,255)
  background: linear-gradient(180deg, rgba(236,242,255,0) 0%, rgba(236,242,255,1) 6%, rgba(236,242,255,0.6363795518207283) 80%, rgba(236,242,255,0) 100%)
.infografiab_1 .img-infografica__item__dot:before, .infografiab_1 .img-infografica__item__dot:after, .infografiab_1 .img-infografica-b__item__dot:before, .infografiab_1 .img-infografica-b__item__dot:after
  top: -10px
  left: -10px
  padding: 20px
.infografiab_1.img-infografica-b.color-acento-botones .img-infografica-b__item__numero
  color: #12263F
  font-size: 30px
.img-infografica-b__modal
  background-color: #273A89
.img-infografica-b__modal__btn-cerrar i
  color: #FFCE00
  font-size: 25px
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
.cont_2_2, .cont_2_2 *
 position: relative
.cont_2_2:before
  position: absolute
  content: ''
  width: 125%
  left: -15%
  height: 100%
  top: 0
  background-color: #D6E1FD
.cont_2_3
 position: relative
.cont_2_3:before
  position: absolute
  content: ''
  width: 125%
  left: -15%
  height: 100%
  top: 0
  background: url(../assets/curso/tema2/18.png)
  background-size: cover
.infografia_2_2 .img-infografica__item__dot:before, .infografia_2_2 .img-infografica__item__dot:after, .infografia_2_2 .img-infografica-b__item__dot:before, .infografia_2_2 .img-infografica-b__item__dot:after
  top: -12px
  left: -12px
  padding: 20px
.infografia_2_2.img-infografica-b.color-acento-botones .img-infografica-b__item__numero
  color: #12263F
  font-size: 30px
.infografia_2_2 .img-infografica-b__modal
  background-color: #3A1D71
.cont_2_4, .cont_2_4 *
 position: relative
.cont_2_4:before
  position: absolute
  content: ''
  width: 125%
  left: -15%
  height: 100%
  top: 0
  background-color: #F7EEFE
.slyder-a__btn--sigt, .slyder-a__btn--atrs
  background-color: #FFCE00
  border: 1px solid #FFCE00
.cont_2_5, .cont_2_5 *
  position: relative
.cont_2_5:before
  content: ''
  position: absolute
  width: 125%
  left: -15%
  height: 70%
  top: 10%
  background: url(../assets/curso/tema2/25.png)
  background-size: 100% 100%
.cont_2_6, .cont_2_6 *
 position: relative
.cont_2_6:before
  position: absolute
  content: ''
  width: 125%
  left: -15%
  height: 100%
  top: 0
  background: rgb(236,242,255)
  background: linear-gradient(180deg, rgba(236,242,255,0) 0%, rgba(236,242,255,1) 25%, rgba(236,242,255,0.6391806722689075) 80%, rgba(236,242,255,0) 100%)
.cont_hover1
  transition: all .3s ease-in-out
.cont_hover1:hover
  background-color: #3A1D71 !important
.cont_hover1:hover *
  color: #fff !important
.apply_relative *
  position: relative !important
  z-index: 2
.cont_2_7, .cont_2_7
  position: relative
.cont_2_7:before
  position: absolute
  content: ''
  width: 125%
  left: -15%
  height: 100%
  top: 0
  background: rgb(236,242,255)
  background: linear-gradient(180deg, rgba(236,242,255,0) 0%, rgba(236,242,255,0.6475840336134453) 20%, rgba(236,242,255,1) 50%, rgba(236,242,255,0.6503851540616247) 85%, rgba(236,242,255,0) 100%)
.cont_2_8
  background: url(../assets/curso/tema2/44.png)
  background-size: 100% 100%
.slyder-f__btn i
  font-size: 27px
  padding: .7rem 1rem
  background-color: #FFCE00
  border-radius: 50%
.cont_2_9, .cont_2_9 *
  position: relative
.cont_2_9:before
  content: ''
  position: absolute
  width: 125%
  left: -15%
  height: 100%
  top: 0
  background: url(../assets/curso/tema2/67.png)
  background-size: 100% 100%
.slyder-a__bullets__item--active
  background-color: #A854F3 !important
  border-color: #A854F3 !important
.slyder-a__bullets__item
  background-color: #DBBDF5
  border: 1px solid #DBBDF5
.tabs-c__header
  margin-bottom: 0px
.tabs-c__content-item
  background-color: #ECF2FF
  padding-top: 30px
.tabs-c.color-acento-botones .tabs-c__tab--active span
  font-weight: bold
.infografica_2_1.img-infografica.color-acento-botones .img-infografica__item__numero, .infografica_2_1.img-infografica-b.color-acento-botones .img-infografica__item__numero
  color: #12263F !important
  font-size: 25px !important
.infografica_2_1 .img-infografica__item__dot:before, .infografica_2_1 .img-infografica__item__dot:after, .infografica_2_1 .img-infografica-b__item__dot:before, .infografica_2_1 .img-infografica-b__item__dot:after
  top: -10px
  left: -10px
  padding: 20px
.tabs-a.color-acento-botones .tabs-a__tab__selected
  color: #12263F
.tabs-a.color-acento-botones .tabs-a__tab:hover, .tabs-a.color-acento-botones .tabs-a__tab:active, .tabs-a.color-acento-botones .tabs-a__tab:focus
  color: #12263F
.tabs-a__tab
  background-color: #3A1D71
  color: #fff
.cont_2_10, .cont_2_10 *
  position: relative
.cont_2_10:before
  position: absolute
  content: ''
  width: 125%
  left: -15%
  height: 100%
  top: 0
  background: rgb(247,246,250)
  background: linear-gradient(180deg, rgba(247,246,250,1) 0%, rgba(242,246,255,.3) 100%)
.cont_2_11, .cont_2_11 *
  position: relative
.cont_2_11:before
  content: ''
  position: absolute
  width: 125%
  left: -15%
  height: 80%
  top: 0
  background: url(../assets/curso/tema2/88.png)
  background-size: 100% 100%
.cont_2_12
  position: relative
.cont_2_12:before
  content: ''
  position: absolute
  width: 125%
  left: -15%
  height: 80%
  bottom: -70px
  border-radius: 25px 25px
  background: url(../assets/curso/tema2/95.png)
  background-size: 100% 100%
@media screen and (max-width: 992px)
  .infografiab_1 .img-infografica__item__dot:before, .infografiab_1 .img-infografica__item__dot:after, .infografiab_1 .img-infografica-b__item__dot:before, .infografiab_1 .img-infografica-b__item__dot:after
    top: -13px
    left: -13px
    padding: 20px
  .cont_2_5:before
    background-size: cover !important
  .cont_2_8
    background-size: cover !important
  .cont_2_9:before, .cont_2_11:before, .cont_2_12:before
    background-size: cover !important
  .infografica_2_1_1 .img-infografica__item__dot:before, .infografica_2_1_1 .img-infografica__item__dot:after, .infografica_2_1_1 .img-infografica-b__item__dot:before, .infografica_2_1_1 .img-infografica-b__item__dot:after
    top: -12px
    left: -12px
    padding: 20px
</style>
