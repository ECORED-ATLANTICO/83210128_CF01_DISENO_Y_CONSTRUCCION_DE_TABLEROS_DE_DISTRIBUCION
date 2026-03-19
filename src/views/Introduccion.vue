<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-3
        figure
          img(src="@/assets/curso/intro.png", alt="Pérdidas y consideraciones básicas de diseño") 
      .col-lg-9
        
        p.mb-4 El componente formativo Análisis, medición y cálculo de parámetros eléctricos en circuitos ofrece al aprendiz una base conceptual y práctica para comprender el funcionamiento de los sistemas eléctricos. A lo largo del proceso, se estudian magnitudes como tensión, corriente, resistencia y potencia, así como las leyes que rigen el comportamiento de los circuitos.

        .tarjeta.bg-color-1.p-4
          .row
            .col
              p.mb-0 Mediante el uso de simuladores, instrumentos de medición y ejercicios aplicados, el aprendiz desarrolla competencias para identificar variables eléctricas, realizar cálculos precisos y analizar circuitos en configuraciones serie, paralelo o mixtas. Este enfoque práctico promueve la autonomía, el pensamiento analítico y la capacidad de resolver problemas técnicos, garantizando un aprendizaje seguro, contextualizado y alineado con las necesidades del sector eléctrico.
            .col-auto
              figure
                img(src="@/assets/curso/icon.svg", data-aos="zoom-in")

    //- figure.mb-5
    //-   .video.mb-2
    //-     iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    //-   figcaption Video: Leyenda del video

</template>

<script>
export default {
  name: 'Introduccion',
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

<style lang="sass"></style>
