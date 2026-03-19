<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p.mb-3 El componente formativo Análisis, medición y cálculo de parámetros eléctricos en circuitos presenta los fundamentos esenciales de la electricidad, incluyendo la estructura atómica, las cargas, el flujo de electrones y las magnitudes básicas como tensión, corriente, resistencia y potencia. También orienta sobre los materiales y componentes eléctricos, el uso seguro de instrumentos de medición, y la interpretación de diagramas y métodos de conexión.
    p.mb-0 Asimismo, integra las leyes de Ohm, Watt y Kirchhoff para el análisis de circuitos en configuraciones serie, paralelo y mixtas, fortaleciendo la capacidad para identificar comportamientos, resolver problemas y verificar resultados mediante mediciones y simuladores. Este componente promueve competencias para evaluar, diseñar y diagnosticar circuitos eléctricos aplicando criterios técnicos y de seguridad en contextos formativos y productivos.
    .row.justify-content-center
      .col-lg-10.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg", alt="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eu tincidunt erat. Fusce cursus mauris in nulla egestas vulputate. Phasellus viverra accumsan libero, sed luctus diam maximus euismod. Mauris sem risus, tincidunt vel libero in, lobortis commodo ante. Sed pulvinar luctus orci in rhoncus. Nulla ut dapibus risus, ac tempor est. Donec nulla augue, vehicula quis malesuada vitae, fermentum non nisi. Donec tincidunt nibh a magna bibendum rutrum. ")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
