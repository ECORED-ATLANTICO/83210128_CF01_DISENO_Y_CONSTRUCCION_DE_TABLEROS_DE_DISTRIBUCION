<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 6
      h1 Material y componentes eléctricos

      
    .container.justify-content-center.mb-3
      .col-md-12.col-lg-12
        .tarjeta.row.justify-content-center.align-items-center.bg-color-4
          .col-lg-5.mb-3.mb-lg-0.ps-0
            figure
              img(src="@/assets/curso/tema6/img01.png", data-aos="zoom-in")
          .col-lg-7.p-3
            p.mb-3 El cálculo de parámetros eléctricos constituye una habilidad fundamental para el análisis, diseño y diagnóstico de circuitos. A partir de los conceptos estudiados —tensión, corriente, resistencia y potencia— el aprendiz desarrolla la capacidad de evaluar el comportamiento de circuitos reales, dimensionar componentes y validar mediciones mediante simuladores y herramientas matemáticas.
            .row.align-items-center
              .col-auto.mb-4.mb-lg-0
                img.d-lg-flex.d-none(src="@/assets/curso/tema6/img02.svg").mx-auto
              .col-lg
                p.mb-0 Esta unidad integra las leyes fundamentales (Ohm, Watt y Kirchhoff) con procedimientos sistemáticos para determinar resistencias equivalentes, corrientes en diferentes ramas y potencias consumidas por las cargas.

    separador


    #t_6_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 6.1 Resistencia equivalente (serie/paralelo)

    p.mb-4 La resistencia equivalente es el valor único que representa el efecto total de varias resistencias conectadas dentro de un circuito eléctrico. Este concepto permite simplificar el análisis de circuitos al reemplazar varios componentes por una sola resistencia que produce el mismo comportamiento eléctrico. Dependiendo de cómo estén conectadas las resistencias, la resistencia equivalente se calcula de manera diferente en conexiones en serie o en paralelo. Comprender este principio facilita el estudio de circuitos y la aplicación de leyes eléctricas como la Ley de Ohm para determinar corrientes y voltajes.

    .bg-full-width.bg-fondo-1.mb-5.p-4.p-lg-5
      SlyderA(tipo="b").bg-color-white.p-2.p-lg-4.tarjeta
        .row.justify-content-center.align-items-center.p-4
          .col-lg-7.mb-4.mb-lg-0
            h4 Circuitos en serie
            p.mb-4 En un circuito en serie, las resistencias se conectan una después de la otra formando un solo camino para la corriente. Toda la corriente que sale de la fuente debe pasar por cada resistencia antes de regresar a la fuente.
            h5 Características principales
            ul.lista-ul.mb-0
              li
                i.fas.fa-circle-right.bg-color-17
                | Existe una única trayectoria para la corriente.
              li
                i.fas.fa-circle-right.bg-color-17
                | La corriente es la misma en todas las resistencias.
              li
                i.fas.fa-circle-right.bg-color-17
                | La resistencia total es la suma de todas las resistencias.
          .col-lg-5.col-md-8
            figure
              img(src='@/assets/curso/tema6/img03.png', alt='Circuitos en serie')

        .row.justify-content-center.align-items-center.p-4
          .col-lg-7.mb-4.mb-lg-0
            h4 Circuitos en paralelo
            p.mb-4 En un circuito en paralelo, cada resistencia tiene su propio camino para la corriente, pero todas están conectadas a los mismos puntos de la fuente de voltaje. Esto significa que todas las resistencias reciben el mismo voltaje y que la corriente se divide entre las diferentes ramas.
            h5 Características principales
            ul.lista-ul.mb-0
              li
                i.fas.fa-circle-right.bg-color-17
                | Existen varias trayectorias para la corriente.
              li
                i.fas.fa-circle-right.bg-color-17
                | El voltaje es igual en todas las resistencias.
              li
                i.fas.fa-circle-right.bg-color-17
                | La resistencia total siempre es menor que la resistencia más pequeña.
          .col-lg-5.col-md-8
            figure
              img(src='@/assets/curso/tema6/img04.png', alt='Circuitos en paralelo')

        .row.justify-content-center.align-items-center.p-4
          .col-lg-7.mb-4.mb-lg-0
            h4 Circuito mixto
            p.mb-4 Un circuito mixto combina resistencias conectadas en serie y en paralelo dentro del mismo circuito. Este tipo de configuración es muy común en sistemas eléctricos reales. Para analizar estos circuitos se debe simplificar el circuito paso a paso, reduciendo grupos de resistencias hasta obtener una sola resistencia equivalente.
            h5 Procedimiento
            ul.lista-ul.mb-0
              li
                i.fas.fa-circle-right.bg-color-17
                | Identificar resistencias en paralelo.
              li
                i.fas.fa-circle-right.bg-color-17
                | Calcular su resistencia equivalente.
              li
                i.fas.fa-circle-right.bg-color-17
                | Reemplazar ese grupo por una sola resistencia.
              li
                i.fas.fa-circle-right.bg-color-17
                | Sumar las resistencias que estén en serie.
              li
                i.fas.fa-circle-right.bg-color-17
                | Repetir el proceso hasta obtener la resistencia total.
          .col-lg-5.col-md-8
            figure
              img(src='@/assets/curso/tema6/img05.png', alt='Circuito mixto')


    separador


    #t_6_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 6.2 Clasificación de materiales

    p.mb-4 En el análisis de circuitos eléctricos es fundamental calcular tres parámetros básicos: tensión (voltaje), corriente y potencia, ya que estos permiten comprender cómo se distribuye la energía dentro de un sistema eléctrico. El voltaje representa la fuerza que impulsa a los electrones a moverse por un conductor, la corriente corresponde al flujo de electrones que circula por el circuito, y la potencia indica cuánta energía eléctrica consume o transforma un dispositivo durante su funcionamiento. Estos parámetros se relacionan mediante principios como la Ley de Ohm y la Ley de Watt, que permiten realizar cálculos básicos en el diseño y análisis de circuitos eléctricos (Floyd, 2018).

    .row.justify-content-center.align-items-center.mb-3
      .col-lg-6.mb-4.mb-lg-0
        figure
          img(src="@/assets/curso/tema6/img06.svg", alt="Tensión, corriente y potencia")

      .col-lg-6
        .tarjeta.bg-color-1.p-3.mb-4.br-15
          p.mb-0 En aplicaciones prácticas, como el análisis de circuitos en un tablero de distribución, estos cálculos permiten determinar si un circuito puede alimentar correctamente una carga sin provocar sobrecargas o fallas. 

        .tarjeta.bg-color-4.p-3.mb-4.br-15
          p.mb-0 Por ejemplo, si una lámpara funciona con 120 V y consume 0.5 A, la potencia que utiliza puede calcularse mediante la fórmula P = V × I, lo que da como resultado 60 W. 

        .bloque-texto-b.color-1.p-4(data-aos="fade-up").mb-0
          .bloque-texto-b__texto
            i.fas.fa-quote-left
            p.mb-0 Este tipo de cálculo permite estimar el consumo eléctrico de equipos y dimensionar adecuadamente conductores y dispositivos de protección dentro de una instalación eléctrica.
            i.fas.fa-quote-right
          .bloque-texto-d__autor 
            .h5.mb-0 Alexander & Sadiku, 2017.


    separador


    #t_6_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 6.3 Pérdidas y consideraciones básicas de diseño

      
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-6
        .tarjeta.bg-color-4.p-3.mb-3.br-15
          .row.justify-content-center.align-items-center
            .col-auto.mb-4.mb-lg-0
              figure
                img(src="@/assets/curso/tema6/img07.svg", alt="Tensión, corriente y potencia")
            .col-lg
              h4.mb-3 ¿Por qué se pierde la energía?

              ul.lista-ul.mb-0
                li
                  i.fas.fa-circle-right.bg-color-17
                  | Resistencia de cables y componentes.
                li
                  i.fas.fa-circle-right.bg-color-17
                  | Calor generado (Efecto Joule).
                li
                  i.fas.fa-circle-right.bg-color-17
                  | Conductores largos o delgados.
                li
                  i.fas.fa-circle-right.bg-color-17
                  | Sobrecarga de corriente.

      .col-lg-6
        .tarjeta.bg-color-1.p-3.mb-3.br-15
          .row.justify-content-center.align-items-center
            .col-auto.mb-4.mb-lg-0
              figure
                img(src="@/assets/curso/tema6/img08.svg", alt="Tensión, corriente y potencia")
            .col-lg
              h4.mb-3 ¿Cómo reducir las pérdidas?

              ul.lista-ul.mb-0
                li
                  i.fas.fa-circle-right.bg-color-17
                  | Usar cables con el calibre adecuado.
                li
                  i.fas.fa-circle-right.bg-color-17
                  | Reducir la longitud del cableado.
                li
                  i.fas.fa-circle-right.bg-color-17
                  | Evitar sobrecargas en el circuito.
                li
                  i.fas.fa-circle-right.bg-color-17
                  | Usar protecciones (breakers y fusibles).

        
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.col-md-8.mb-4.mb-lg-0
        figure
          img(src="@/assets/curso/tema6/img09.png", alt="Pérdidas y consideraciones básicas de diseño")

      .col-lg-8
        p.mb-4 En los sistemas eléctricos reales, no toda la energía que se suministra a un circuito se utiliza de forma eficiente, ya que parte de ella se pierde en forma de calor debido a la resistencia de los conductores y componentes eléctricos. Estas pérdidas se conocen como pérdidas eléctricas y pueden afectar el rendimiento y la seguridad de una instalación si no se consideran adecuadamente durante el diseño. Una de las pérdidas más comunes es la pérdida por efecto Joule, que ocurre cuando la corriente circula por un conductor y genera calor debido a su resistencia interna (Nilsson & Riedel, 2019).
        .tarjeta.bg-color-4.p-3.mb-0
          p.mb-0 Por esta razón, en el diseño de circuitos y tableros eléctricos es importante considerar factores como el calibre de los conductores, la longitud del cableado, la capacidad de corriente y la correcta selección de dispositivos de protección. Si un conductor es demasiado delgado para la corriente que circula, puede calentarse excesivamente y provocar fallas o riesgos eléctricos. Por ello, las normas de diseño recomiendan seleccionar conductores y protecciones que garanticen un funcionamiento seguro y eficiente del sistema eléctrico (Floyd, 2018).
   
    .row.justify-content-center.align-items-center.mb-5
      .col-md-12.col-lg-12
        .titulo-sexto.color-acento-contenido.mb-4
          h5 Tabla 13.
          span Factores que afectan el diseño eléctrico
        .tabla-a.color-acento-contenido
          table
            caption Nota. SENA, 2026.
            thead
              tr
                th Factor
                th Efecto en el circuito
            tbody
              tr
                td Longitud del conductor.
                td Mayor longitud aumenta la resistencia.
              tr
                td Calibre del conductor.
                td Conductores delgados generan más pérdidas.
              tr
                td Corriente del circuito.
                td Corrientes altas producen mayor calentamiento.
              tr
                td Tipo de carga.
                td Determina el consumo de energía.

    .row.justify-content-center.align-items-center.mb-3
      .col-lg-12
        .row.mb-0
          .col-lg-auto.mb-lg-0
            img.d-none.d-lg-flex(src="@/assets/curso/tema1/img13.svg", style="").mx-auto
          .col-lg
            h4.mb-3 Ejemplo sencillo
            p.mb-3 Imagine un cable que alimenta un equipo de 10 A.
            p.mb-3 Si el conductor es muy delgado:
            ul.lista-ul.mb-3
              li
                i.fas.fa-circle-right.bg-color-17
                | Aumenta la resistencia.
              li
                i.fas.fa-circle-right.bg-color-17
                | Se genera más calor.
              li
                i.fas.fa-circle-right.bg-color-17
                | Se pierde energía.
              li
                i.fas.fa-circle-right.bg-color-17
                | Puede producirse sobrecalentamiento.
            
            p.mb-0 Por eso es necesario dimensionar correctamente los conductores.

   
    separador

    #t_6_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 6.4 Comparación entre valores teóricos y medidos 
   
    .row.justify-content-center.mb-2.mb-lg-5
      .col-lg-6.mb-4.mb-lg-0
        .tarjeta.bg-color-4.p-3.mb-3.br-15.h-100
          .row.justify-content-center.align-items-center
            .col-auto.mb-4.mb-lg-0
              figure
                img(src="@/assets/curso/tema6/img07.svg", alt="Tensión, corriente y potencia")
            .col-lg
              p.mb-3 En la práctica, los valores medidos pueden ser diferentes a los teóricos por:

              ul.lista-ul.mb-0
                li
                  i.fas.fa-circle-right.bg-color-17
                  | Pérdidas en conductores.
                li
                  i.fas.fa-circle-right.bg-color-17
                  | Tolerancia de componentes.
                li
                  i.fas.fa-circle-right.bg-color-17
                  | Precisión de instrumentos.

      .col-lg-6.mb-4.mb-lg-0
        .tarjeta.bg-color-1.p-3.mb-3.br-15.h-100
          .row.justify-content-center.align-items-center
            .col-auto.mb-4.mb-lg-0
              figure
                img(src="@/assets/curso/tema6/img08.svg", alt="Tensión, corriente y potencia")
            .col-lg
              p.mb-0 Las diferencias son normales y se deben a factores reales del circuito. 
        

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8.mb-4.mb-lg-0
        p.mb-4 En el estudio de circuitos eléctricos es común realizar cálculos teóricos para estimar valores de voltaje, corriente y potencia. Sin embargo, cuando estos circuitos se analizan en la práctica —ya sea mediante simuladores o mediciones con instrumentos— los resultados pueden presentar pequeñas diferencias. Esto ocurre porque los modelos teóricos suelen considerar condiciones ideales, mientras que en los sistemas reales existen factores como resistencias internas, tolerancias de componentes o pérdidas en los conductores (Alexander & Sadiku, 2017).
        .tarjeta.bg-color-4.p-3.mb-0
          p.mb-0 La comparación entre valores teóricos y valores medidos es una práctica importante en la formación técnica, ya que permite desarrollar habilidades de análisis, verificación y validación de resultados. Por ejemplo, si el cálculo teórico indica que la corriente en un circuito debe ser 2 A, pero el simulador muestra 1.9 A, esta diferencia puede deberse a tolerancias en los componentes o a la precisión del instrumento de medición. Analizar estas diferencias ayuda al aprendiz a comprender mejor el comportamiento real de los circuitos eléctricos y a mejorar la interpretación de resultados en aplicaciones prácticas (Nilsson & Riedel, 2019).

      .col-lg-4.col-md-8
        figure
          img(src="@/assets/curso/tema6/img10.png", alt="Pérdidas y consideraciones básicas de diseño")

    .row.justify-content-center.align-items-center.mb-5
      .col-md-12.col-lg-12
        .titulo-sexto.color-acento-contenido.mb-4
          h5 Tabla 14.
          span Ejemplo comparativo de valores teóricos y medidos
        .tabla-a.color-acento-contenido
          table
            caption Nota. SENA, 2026.
            thead
              tr
                th Parámetro
                th Valor teórico
                th Valor medido**
            tbody
              tr
                td Voltaje.
                td 12 V.
                td 11.8 V.
              tr
                td Corriente.
                td 2 A.
                td 1.9 A.
              tr
                td Potencia.
                td 24 W.
                td 22.4 W.
              tr
                td(colspan="3") **Las pequeñas diferencias se deben a pérdidas eléctricas y tolerancias de los componentes.



</template>

<script>
export default {
  name: 'Tema6',
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
