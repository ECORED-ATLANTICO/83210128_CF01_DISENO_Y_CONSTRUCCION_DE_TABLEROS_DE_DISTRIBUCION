<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Análisis de parámetros eléctricos

    .row.justify-content-center.align-items-center.mb-3
      .col-12.col-md-8.col-lg-4.mb-4.mb-lg-0.mx-auto
        figure
          img(src="@/assets/curso/tema5/img01.png", data-aos="zoom-in")

      .col-lg-8
        .row.align-items-center.mb-3
          .col-lg-auto.mb-lg-0
            img.d-none.d-lg-flex(src="@/assets/curso/tema1/img13.svg", style="").mx-auto
          .col-lg
            p.mb-0 En un circuito eléctrico ocurren tres fenómenos fundamentales: la energía se impulsa, se transporta y se consume. Para comprender cómo sucede esto, es necesario conocer algunas leyes básicas que explican la relación entre el voltaje, la corriente, la resistencia y la potencia.

        .tarjeta.bg-color-4.p-3.mb-0
          p.mb-0 Estas relaciones permiten entender cómo funciona la electricidad en dispositivos cotidianos y en sistemas más complejos como los tableros de distribución eléctrica.

    separador

    #t_5_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 5.1 Ley de Ohm      

    p.mb-4 Fue formulada en 1827 por el físico alemán Georg Simon Ohm, quien dedicó gran parte de su carrera a estudiar la conducción eléctrica en metales. Su obra Die galvanische Kette, mathematisch bearbeitet revolucionó el análisis de circuitos al proponer, por primera vez, una relación matemática que explicaba cómo la corriente variaba en función de la resistencia y la diferencia de potencial. Aunque inicialmente enfrentó críticas, la comunidad científica terminó reconociendo la Ley de Ohm como una de las bases de la electricidad moderna.

    .row.justify-content-center.mb-5
      .col-xl-4.col-lg-4.col-md-6.col-12.mb-4.mb-xl-0
        .tarjeta.box-shadow.p-0.h-100
          figure
            img(src="@/assets/curso/tema5/img02.svg", alt="Principio 1")
          .p-4
            p.mb-3 La Ley de Ohm explica cómo se relacionan tres elementos fundamentales de la electricidad:
            ul.lista-ul.mb-0
              li
                i.fas.fa-circle-right.bg-color-17
                | Voltaje (V): la fuerza que impulsa la electricidad.
              li
                i.fas.fa-circle-right.bg-color-17
                | Corriente (I): el flujo de electricidad que circula por el conductor.
              li
                i.fas.fa-circle-right.bg-color-17
                | Resistencia (R): la dificultad que encuentra la electricidad para circular.

      .col-xl-4.col-lg-4.col-md-6.col-12.mb-4.mb-xl-0
        .tarjeta.box-shadow.p-0.h-100
          figure
            img(src="@/assets/curso/tema5/img03.svg", alt="Principio 2")
          .p-4
            p.mb-3 Una forma sencilla de entenderlo es imaginar una manguera con agua:
            ul.lista-ul.mb-0
              li
                i.fas.fa-circle-right.bg-color-17
                | El voltaje sería la presión del agua.
              li
                i.fas.fa-circle-right.bg-color-17
                | La corriente sería la cantidad de agua que circula.
              li
                i.fas.fa-circle-right.bg-color-17
                | La resistencia sería una obstrucción o estrechamiento en la manguera.
            p.mb-0 Si aumenta la presión, circula más agua. Si la manguera se estrecha, circula menos agua.

      .col-xl-4.col-lg-4.col-md-6.col-12.mb-4.mb-xl-0
        figure
          img(src="@/assets/curso/tema5/img04.png", alt="Principio 3")


    p.mb-3 En electricidad ocurre algo similar. La corriente depende del voltaje y de la resistencia del circuito.

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-md-12.col-lg-12
        .tarjeta.bg-color-4.p-3.mb-0
          p.mb-0 Esta relación se expresa mediante la fórmula: V = I × R

    p.mb-4 Esta ley permite calcular cuánto voltaje, corriente o resistencia existe en un circuito.

    .row.justify-content-center.align-items-center.mb-3
      .col-lg-10
        .tarjeta.color-primario.p-3
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/tema1/img12.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  p.mb-0 A continuación se comparte el enlace de un video para que amplíe los conceptos básicos de la Ley de Ohm:
                .col-sm-auto
                  a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=plWfEGCEQ5k" target="_blank")
                    span Enlace
                    i.fas.fa-link

    separador

    #t_5_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 5.2 Ley de Watt      

    p.mb-5.mb-lg-4 La ley que relaciona potencia con tensión y corriente lleva el apellido del ingeniero escocés James Watt, célebre por perfeccionar la máquina de vapor en el siglo XVIII. Aunque su trabajo no se centró en electricidad, sus estudios sobre energía, trabajo y eficiencia permitieron establecer la unidad vatio (W) en su honor. Posteriormente, los desarrollos de Ohm, Joule y otros científicos integraron sus conceptos, dando forma a la expresión actual de la potencia eléctrica.
    
    .row.justify-content-center.mb-5
      .col-xl-4.col-lg-4.col-md-6.col-12.mb-2.mb-xl-0.order-3.order-lg-1
        figure
          img(src="@/assets/curso/tema5/img05.png", alt="Principio 3")

      .col-xl-4.col-lg-4.col-md-6.col-12.mb-5.mb-xl-0.order-1.order-lg-2
        .tarjeta.box-shadow.p-0.h-100
          figure
            img(src="@/assets/curso/tema5/img06.svg", alt="Principio 1")
          .p-4
            p.mb-3 La Ley de Watt explica cuánta energía eléctrica consume un dispositivo o equipo. Esta energía se conoce como potencia eléctrica y se mide en Watts (W).
            p.mb-3 La potencia depende de dos factores:
            ul.lista-ul.mb-0
              li
                i.fas.fa-circle-right.bg-color-17
                | El voltaje que recibe el equipo.
              li
                i.fas.fa-circle-right.bg-color-17
                | La corriente que circula a través de él.
            p.mb-0 La relación se expresa así: P = V × I

      .col-xl-4.col-lg-4.col-md-6.col-12.mb-5.mb-xl-0.order-2.order-lg-3
        .tarjeta.box-shadow.p-0.h-100
          figure
            img(src="@/assets/curso/tema5/img07.svg", alt="Principio 2")
          .p-4
            h4.mb-3 Ejemplo aplicado
            p.mb-3 Si un equipo funciona con 120 voltios y consume 2 amperios, su potencia será:
            p.mb-3.text-bold P = 120 × 2 = 240 W
            p.mb-0 Esto significa que el equipo utiliza 240 watts de energía para funcionar.

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-md-12.col-lg-12
        .tarjeta.bg-color-4.p-3.mb-0
          p.mb-0 Comprender este concepto es importante para conocer el consumo eléctrico de los equipos, calcular la carga de un circuito y evitar sobrecargas en los tableros eléctricos.

    .row.justify-content-center.align-items-center.mb-3
      .col-lg-10
        .tarjeta.color-primario.p-3
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/tema1/img12.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  p.mb-0 Lo invitamos a consultar es siguiente video para profundizar sus conocimientos y comprender mejor la Ley de Watt: 
                .col-sm-auto
                  a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=v3EwltvJI6E" target="_blank")
                    span Enlace
                    i.fas.fa-link

    separador

    #t_5_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 5.3 Leyes de Kirchhoff (KVL y KCL)

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        .row.align-items-center
          .col-lg-auto.mb-lg-0
            img.d-none.d-lg-flex(src="@/assets/curso/tema1/img13.svg", style="").mx-auto
          .col-lg
            p.mb-0 Fue formulada por el físico alemán Gustav Robert Kirchhoff en 1845. A los 21 años, Kirchhoff analizó matemáticamente cómo se comporta la corriente al llegar a un nodo, basándose en el principio de conservación de la carga eléctrica. Su trabajo permitió describir formalmente los fenómenos en circuitos ramificados y fue clave para el desarrollo de las redes eléctricas modernas.

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-md-12.col-lg-12
        .tarjeta.bg-color-4.p-3.mb-0
          p.mb-0 Cuando los circuitos se vuelven más complejos y tienen varias conexiones o ramificaciones, se utilizan las Leyes de Kirchhoff para analizar cómo se distribuye la electricidad.


    p.mb-4 Estas leyes se basan en dos ideas simples: la corriente se reparte y el voltaje se distribuye.

    .row.justify-content-center.mb-3.mb-lg-3
      .col-xl-6.col-lg-6.col-md-6.col-12.mb-4.mb-xl-0
        .tarjeta.box-shadow.p-0.h-100
          figure
            img(src="@/assets/curso/tema5/img08.svg", alt="KCL")
          .p-4
            .p-3.text-center.mb-3(style="background-color: #1254C7; border-radius: 4px;")
              h4.text-white.mb-0 Ley de Corrientes de Kirchhoff (KCL)
            p.mb-3 Esta ley dice que, la corriente que llega a un punto del circuito debe ser igual a la corriente que sale de ese punto. Ese punto se llama nodo.
            p.mb-3 Una forma sencilla de entenderlo es imaginar una tubería de agua que se divide en varias ramas. El agua que entra debe repartirse entre las diferentes salidas.
            p.mb-3 <strong>Por ejemplo:</strong> 
            p.mb-3 Si 10 amperios llegan a un nodo y se dividen en dos ramas:
            ul.lista-ul
              li
                i.fas.fa-circle-right.bg-color-17
                | una puede llevar 6 amperios.
              li
                i.fas.fa-circle-right.bg-color-17
                | la otra 4 amperios.
            p.mb-0 La suma sigue siendo 10 amperios.

      .col-xl-6.col-lg-6.col-md-6.col-12.mb-4.mb-xl-0
        .tarjeta.box-shadow.p-0.h-100
          figure
            img(src="@/assets/curso/tema5/img09.svg", alt="KVL")
          .p-4
            .p-3.text-center.mb-3(style="background-color: #1254C7; border-radius: 4px;")
              h4.text-white.mb-0 Ley de Voltajes de Kirchhoff (KVL)
            p.mb-3 Esta ley explica que, la energía que entrega la fuente eléctrica se reparte entre todos los componentes del circuito.
            p.mb-3 Es decir, si una fuente entrega 12 voltios, esa energía se distribuye entre los elementos conectados.
            p.mb-3 <strong>Por ejemplo:</strong> 
            p.mb-0 Si un circuito tiene una fuente de 12 V y dos resistencias en serie: 
            p.mb-0 Una puede tener 7 V.
            p.mb-3 La otra 5 V. 
            p.mb-3 La suma será: 7 V + 5 V = 12 V. 
            p.mb-2 Esto significa que la energía se conserva dentro del circuito.


    separador

    #t_5_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 5.4 Aplicación en circuitos prácticos en simuladores


    .row.justify-content-center.mb-5
      .col-md-12.col-lg-12
        .bg-color-1.p-4.bg-tarjeta.mb-3
          .row
            .col
              p.mb-0 En la formación técnica en electricidad, los simuladores de circuitos eléctricos se han convertido en herramientas fundamentales para el aprendizaje práctico, especialmente en entornos de formación virtual o cuando no se dispone de laboratorios físicos. Estas plataformas permiten construir circuitos, conectar componentes y realizar mediciones de voltaje, corriente y potencia en condiciones controladas. De esta manera, el aprendiz puede comprobar de forma experimental cómo se comportan las variables eléctricas al aplicar principios como la Ley de Ohm, la Ley de Watt y las Leyes de Kirchhoff, observando directamente los resultados en instrumentos virtuales como voltímetros o amperímetros. Este tipo de interacción facilita la comprensión de los conceptos, ya que el estudiante puede modificar valores de resistencias, fuentes de voltaje o configuraciones de conexión y analizar inmediatamente los cambios que se producen en el circuito.
            .col-auto.d-none.d-lg-flex
              figure
                img(src="@/assets/curso/tema5/img10.png", data-aos="zoom-in")

    .row.justify-content-center.mb-5
      .col-md-12.col-lg-12
        .titulo-sexto.color-acento-contenido.mb-4
          h5 Tabla 12. 
          span Aplicación de leyes eléctricas en simuladores

        .tabla-a.color-acento-contenido
          table
            caption Nota: Adaptado de Nilsson, J., & Riedel, S. (2019). Electric Circuits. Pearson.
            thead
              tr
                th Ley eléctrica
                th Qué se puede observar en el simulador
                th Ejemplo práctico de aprendizaje
            tbody
              tr
                td Ley de Ohm.
                td Cambios en la corriente al modificar el voltaje o la resistencia del circuito.
                td Aumentar la resistencia en un circuito y observar cómo disminuye la corriente.
              tr
                td Ley de Watt.
                td Variación de la potencia consumida por una carga según el voltaje y la corriente.
                td Cambiar el voltaje de la fuente y verificar el aumento o disminución de la potencia.
              tr
                td Ley de Kirchhoff (corrientes).
                td Distribución de la corriente en nodos de circuitos en paralelo.
                td Medir cómo se divide la corriente entre diferentes ramas del circuito.
              tr
                td Ley de Kirchhoff (voltajes).
                td Distribución del voltaje en componentes conectados en serie.
                td Verificar que la suma de las caídas de voltaje es igual al voltaje de la fuente.


    .row.justify-content-center.align-items-center.mb-2
      .col-lg-9.mb-4.mb-lg-0.order-2.order-lg-1
        .row.align-items-center.mb-3
          .col-lg-auto.mb-lg-0
            img.d-none.d-lg-flex(src="@/assets/curso/tema5/img11.svg", style="").mx-auto
          .col-lg
            p.mb-0 Además, el uso de simuladores favorece el aprendizaje significativo y el desarrollo de habilidades de análisis, porque permite experimentar con múltiples escenarios sin riesgos eléctricos ni daños a equipos reales. Al variar los parámetros del circuito, por ejemplo aumentando el voltaje o modificando la resistencia, el aprendiz puede observar cómo se altera la corriente y cómo cambia la potencia consumida por las cargas. 

          
        .tarjeta.bg-color-4.p-4.mb-0
          p.mb-0 Este proceso de prueba y análisis fortalece la relación entre teoría y práctica, lo cual es esencial en programas de formación técnica como los relacionados con el diseño y construcción de tableros de distribución eléctrica. Diversos autores en educación tecnológica destacan que las simulaciones digitales permiten visualizar fenómenos eléctricos de forma dinámica, facilitando la comprensión de principios que a veces resultan abstractos cuando solo se presentan de manera teórica (Alexander & Sadiku, 2017; Floyd, 2018).
      .col-lg-3.col-md-8.mb-4.mb-lg-0.order-1.order-lg-2
        figure
          img(src="@/assets/curso/tema5/img12.png", data-aos="zoom-in")



</template>

<script>
export default {
  name: 'Tema5',
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
