<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .cont_intro1
      p(data-aos="fade-up") Bienvenidos a este componente, en donde trataremos el tema relacionado con los Fundamentos de la calidad del #[em software.]
      .row.mt-4
        .col-lg-8.mb-4.mb-lg-0(data-aos="fade-right")
          p Recordemos que implementar buenas prácticas, definir adecuadamente los proceso, ser flexibles ante las diferentes metodologías y herramientas, y tener un personal capacitado en las fases de pruebas y calidad, se convierte en un desafío cada vez más grande, al cual se ven enfrentadas las empresas que construyen #[em software].
          .p-4(style="background-color:#3A1D71;border-radius:14px;")
            .row
              .col-auto.d-none.d-md-block(style="place-self:center;")
                figure
                  img(src="@/assets/curso/intro1.svg")
              .col(style="place-self:center;")
                p.text-white.mb-0 Dadas las circunstancias actuales, la demanda de construcción de productos de #[em software] va en auge, teniendo un crecimiento exponencial año por año. Si agregamos las iniciativas de modernización de las tecnologías y la tendencia de sistematizar y facilitar los procesos, implica tener más células de desarrollo operando, y mejoras en las fases de calidad del #[em software]. 
        .col-lg-4(data-aos="fade-left")
          figure.m-auto.col-10.col-md-7.col-lg-12
            img(src="@/assets/curso/intro2.png")
      .col-xl-11.m-auto.mt-4
        .cont_intro2.p-4.p-lg-0
          .row
            .col-lg-3.mb-4.mb-lg-0(data-aos="fade-right" style="place-self:center;")
              figure.m-auto.col-8.col-md-7.col-lg-12
                img(src="@/assets/curso/intro4.png")
            .col-lg-9.p-0.p-lg-5.ps-lg-0(data-aos="fade-left" style="place-self:center;")
              p.mb-0 En este componente formativo, usted podrá abordar los fundamentos de la calidad del #[em software], entendiendo los valores misionales de las empresas, y cómo estos repercuten en los diferentes procesos de control de la misma. La calidad es una característica que debe ser transversal en todos y cada uno de estos procesos, porque de esta forma podremos asegurar éxito y productividad. Un quipo capacitado, comprometido y creativo es un valor agregado en la industria del #[em software], que cada vez va en aumento, pero que también exige compromiso de todos.
            


    
    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>
<style lang="sass">
.cont_intro1, .cont_intro1 *
  position: relative
.cont_intro1:before
  content: ''
  position: absolute
  width: 125%
  left: -15%
  height: 100%
  top: 0
  background: rgb(220,236,254)
  background: linear-gradient(180deg, rgba(220,236,254,0) 0%, rgba(236,242,254,1) 20%, rgba(236,242,254,1) 75%, rgba(220,236,254,0) 100%)
.cont_intro2,.cont_intro2 *
  position: relative
.cont_intro2:before
  content: ''
  position: absolute
  width: 93%
  height: 90%
  right: 0
  top: 5%
  bottom: 5%
  background-color: #D6E1FD
  border-radius: 17px
  background-image: url(../assets/curso/intro3.png)
  background-size: 100% 100%
@media screen and (max-width: 992px)
  .cont_intro2:before
    left: 0
    top: 0
    bottom: 0
    width: 100%
    height: 100%
    background-image: none
</style>
