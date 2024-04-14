<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Descripción de la idea de negocio
    
    .cont_t_1.pt-4
      p(data-aos="fade-up") La idea de negocio es el servicio o producto que se desea ofrecer al mercado, lo cual se requiere de un plan de negocio que debe incluir misión, visión, objetivos de la empresa y la estrategia para alcanzarlos, así como la estructura organizacional y la inversión para financiar el proyecto. No obstante, todo empieza cuando se tiene una idea de negocio para posteriormente materializarla por escrito en un documento teniendo en cuenta cinco elementos:
      .col-xl-10.m-auto.mt-4
        .tarjeta.tarjeta--gris.p-4.cont_slyder1(data-aos="zoom-in-up")
          PasosB.color-acento-contenido
            .row(titulo="")
              .col-lg-6.mb-4.mb-lg-0
                h4(style="color:#F0C52C;") Estructura ideológica
                p.text-white Contiene el nombre de la empresa, visión, misión, valores, objetivos y un detalle de las ventajas competitivas del negocio.
              .col-lg-6
                figure.m-auto.col-7.col-md-7.col-lg-12
                  img(src='@/assets/curso/tema1/2.png')
            .row(titulo="")
              .col-lg-6.mb-4.mb-lg-0
                h4(style="color:#F0C52C;") Estructura del entorno
                p.text-white Es el arte y la ciencia, contiene un estudio de las fortalezas y las debilidades de la empresa, las tendencias del mercado, clientes potenciales y el comportamiento del sector donde se va a desarrollar.
              .col-lg-6
                figure.m-auto.col-7.col-md-7.col-lg-12
                  img(src='@/assets/curso/tema1/3.png')
            .row(titulo="")
              .col-lg-6.mb-4.mb-lg-0
                h4(style="color:#F0C52C;") Estructura mecánica
                p.text-white Se describen las actividades que se deben ejecutar para alcanzar el éxito de la idea de negocio, tales como las ventas, las estrategias de distribución y la publicidad.
              .col-lg-6
                figure.m-auto.col-7.col-md-7.col-lg-12
                  img(src='@/assets/curso/tema1/4.png')
            .row(titulo="")
              .col-lg-6.mb-4.mb-lg-0
                h4(style="color:#F0C52C;") Estructura financiera
                p.text-white Se verifica en términos económicos y proyecciones de escenarios la viabilidad de la idea de negocio, con el fin de observar si la utilidad es factible.
              .col-lg-6
                figure.m-auto.col-7.col-md-7.col-lg-12
                  img(src='@/assets/curso/tema1/5.png')
            .row(titulo="")
              .col-lg-6.mb-4.mb-lg-0
                h4(style="color:#F0C52C;") Recursos humanos
                p.text-white Determina los puestos de trabajo requeridos, así como las obligaciones y derechos de cada miembro que integra la organización, independientemente que el emprendedor sea una sola persona.
              .col-lg-6
                figure.m-auto.col-7.col-md-7.col-lg-12
                  img(src='@/assets/curso/tema1/6.png')
      
      .p-4.mt-4(style="background-color:#AEC4FA;border-radius:14px;" data-aos="flip-up")
        .row
          .col-auto.d-none.d-md-block(style="place-self:center;")
            figure
              img(src="@/assets/curso/tema1/7.svg")
          .col(style="place-self:center;")
            p.mb-0 La estructura ideológica corresponde con los valores misionales de cualquier empresa, por lo tanto, es necesario describir en la idea de negocio, la misión, la visión y los objetivos que se intentan lograr. La presentación ante sus potenciales inversionistas y demás colaboradores, recae de alguna forma en esta claridad, desde lo que es actualmente la empresa y cómo se proyecta a un futuro. 

  

      
</template>

<script>
export default {
  name: 'Tema1',
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
.cont_t_1, .cont_t_1 *
  position: relative
.cont_t_1:before
  content: ''
  position: absolute
  height: 92%
  width: 125%
  left: -15%
  top: 0
  background: rgb(247,246,250)
  background: linear-gradient(180deg, rgba(247,246,250,1) 0%, rgba(242,246,255,1) 100%)
.cont_slyder1
  background: url(../assets/curso/tema1/1.png)
  background-size: cover
  background-position: center
.linea-tiempo-c__header__btn, .linea-tiempo-c__header__btn--left, .linea-tiempo-c__header__btn--right, .pasos-b__header__btn--left, .pasos-b__header__btn--right
  border: 2px solid #FFCE00
  background-color: #FFCE00
.pasos-b__header__item__dot
  background-color: white
</style>
