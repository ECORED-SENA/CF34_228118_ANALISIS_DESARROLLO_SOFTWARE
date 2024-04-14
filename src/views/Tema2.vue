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
@media screen and (max-width: 992px)
  .infografiab_1 .img-infografica__item__dot:before, .infografiab_1 .img-infografica__item__dot:after, .infografiab_1 .img-infografica-b__item__dot:before, .infografiab_1 .img-infografica-b__item__dot:after
    top: -13px
    left: -13px
    padding: 20px
  .cont_2_5:before
    background-size: cover !important
</style>
