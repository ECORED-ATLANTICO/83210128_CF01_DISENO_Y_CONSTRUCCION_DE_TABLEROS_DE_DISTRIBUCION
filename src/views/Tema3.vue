<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Instrumentos de medición eléctrica

    img(src="@/assets/curso/tema3/img01.png", alt="Imagen decorativa")
    
    .row.justify-content-center.align-items-center.z-2.mb-3
      .col-lg-10(data-aos="fade-up")
        p.banner-text La medición eléctrica es una habilidad esencial en cualquier entorno técnico, ya que permite verificar condiciones de operación, diagnosticar fallas y garantizar la seguridad de los sistemas. Los instrumentos de medición constituyen la base para obtener valores confiables de tensión, corriente y resistencia, así como para comprobar la continuidad y el correcto funcionamiento de los circuitos. Conocer sus características, rangos, forma de conexión y precauciones de uso permite al aprendiz interpretar resultados con precisión y tomar decisiones fundamentadas al trabajar con instalaciones eléctricas. Esta unidad ofrece un panorama completo sobre los instrumentos de medición más utilizados en el sector, con un enfoque práctico y orientado a la confiabilidad y la seguridad.

    separador


    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.1 Identificación de instrumentos

    p.mb-4 Los instrumentos de medición eléctrica permiten cuantificar variables fundamentales en un circuito y verificar el estado de sus componentes. Entre los más utilizados se encuentran:

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        .row.align-items-center
          .col-lg-4.d-none.d-lg-flex
            figure
              img(src="@/assets/curso/tema3/Grupo 1212885.png", data-aos="zoom-in")
          .col-lg-8
            SlyderF(columnas="col-12 col-md-6")
              .tarjeta.bg-color-white.p-4.h-100.box-shadow
                .p-3.text-center.mb-3(style="background-color: #1254C7; border-radius: 4px;")
                  h4.text-white.mb-0 Multímetro digital
                p.mb-3 Es el instrumento más versátil, capaz de medir tensión (AC/DC), corriente (AC/DC), resistencia, continuidad, y en algunos casos frecuencia y capacidad.
                ul.lista-ul
                  li
                    i.fas.fa-circle-right.bg-color-17
                    | Pantalla digital.
                  li
                    i.fas.fa-circle-right.bg-color-17
                    | Selección de rangos manual o automática.
                  li
                    i.fas.fa-circle-right.bg-color-17
                    | Terminales COM y V/Ω/mA/A.
                  li
                    i.fas.fa-circle-right.bg-color-17
                    | Funciones adicionales según el modelo (NCV, retención, etc.).

              .tarjeta.bg-color-white.p-4.h-100.box-shadow
                .p-3.text-center.mb-3(style="background-color: #1254C7; border-radius: 4px;")
                  h4.text-white.mb-0 Amperímetro
                p.mb-3 Instrumento diseñado exclusivamente para medir corriente.
                p.mb-3 Puede ser:
                ul.lista-ul
                  li
                    i.fas.fa-circle-right.bg-color-17
                    | De inserción: se conecta en serie.
                  li
                    i.fas.fa-circle-right.bg-color-17
                    | Tipo gancho (pinza amperimétrica): mide la corriente sin abrir el circuito.

              .tarjeta.bg-color-white.p-4.h-100.box-shadow
                .p-3.text-center.mb-3(style="background-color: #1254C7; border-radius: 4px;")
                  h4.text-white.mb-0 Voltímetro
                p.mb-3 Permite medir la diferencia de potencial entre dos puntos.
                p.mb-3 Características:
                ul.lista-ul
                  li
                    i.fas.fa-circle-right.bg-color-17
                    | Se conecta en paralelo.
                  li
                    i.fas.fa-circle-right.bg-color-17
                    | Posee alta impedancia interna para evitar alterar el circuito.

              .tarjeta.bg-color-white.p-4.h-100.box-shadow
                .p-3.text-center.mb-3(style="background-color: #1254C7; border-radius: 4px;")
                  h4.text-white.mb-0 Óhmetro
                p.mb-3 Equipo destinado a medir resistencia eléctrica.
                ul.lista-ul
                  li
                    i.fas.fa-circle-right.bg-color-17
                    | Debe utilizarse con el circuito desenergizado.
                  li
                    i.fas.fa-circle-right.bg-color-17
                    | Sirve para comprobar continuidad y estado de componentes.

    .titulo-sexto.color-acento-contenido.mb-4(data-aos="fade-right")
      h5 Tabla 9. 
      span Instrumentos y variables medidas
    .tabla-a.color-acento-contenido.mb-5
      table
        thead
          tr
            th Instrumento
            th Variable medida
            th Tipo de conexión
            th Precauciones
        tbody
          tr
            td Multímetro.
            td V, I, R.
            td Serie/Paralelo.
            td Elegir el rango adecuado.
          tr
            td Voltímetro.
            td Tensión.
            td Paralelo.
            td No sobrepasar límite de voltaje.
          tr
            td Amperímetro.
            td Corriente.
            td Serie.
            td No superar corriente nominal.
          tr
            td Pinza amperimétrica.
            td Corriente AC/DC.
            td Sin abrir circuito.
            td Encerrar solo un conductor.
          tr
            td Óhmetro.
            td Resistencia.
            td Sin energía.
            td No usar en circuitos energizados.
      figcaption <strong>Fuente:</strong> SENA, 2026.

    separador

    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.2 Uso del multímetro para medir V, I, R

    p.mb-5 El multímetro es el instrumento principal en las prácticas de medición eléctrica y su operación correcta es esencial para obtener resultados confiables.


    .row.align-items-center.justify-content-center.mb-5
      .col-md-8.col-lg-3.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/Grupo 1212886.png", data-aos="zoom-in")
      .col-lg-9
        AcordionA(tipo="b" clase-tarjeta="tarjeta bg-color-11")
          .row.justify-content-center.align-items-center(titulo="Medición de tensión (Voltaje)")
            .col-lg-7
              h5 Procedimiento:
              ul.lista-ul
                li
                  i.fas.fa-circle-right.bg-color-17
                  | Selecciona función V AC o V DC según la fuente.
                li
                  i.fas.fa-circle-right.bg-color-17
                  | Conecta las puntas: Roja (terminal VΩmA), Negra (terminal COM).
                li
                  i.fas.fa-circle-right.bg-color-17
                  | Coloca las puntas en paralelo al elemento o punto a evaluar.
                li
                  i.fas.fa-circle-right.bg-color-17
                  | Lee el valor en pantalla.
              
              h5.mt-4 Evitar:
              ul.lista-ul
                li
                  i.fas.fa-circle-right.bg-color-17
                  | Medir AC en rango DC.
                li
                  i.fas.fa-circle-right.bg-color-17
                  | Conectar en serie (incorrecto).
            .col-lg-5
              figure
                img(src="@/assets/curso/tema3/Grupo 1212887.png", data-aos="zoom-in")

          .row.justify-content-center.align-items-center(titulo="Medición de corriente")
            .col-lg-7
              h5 Procedimiento:
              ul.lista-ul
                li
                  i.fas.fa-circle-right.bg-color-17
                  | Selecciona función A AC o A DC.
                li
                  i.fas.fa-circle-right.bg-color-17
                  | Conecta las puntas: Roja (terminal A o mA), Negra (terminal COM).
                li
                  i.fas.fa-circle-right.bg-color-17
                  | Abre el circuito y conecta en serie.
                li
                  i.fas.fa-circle-right.bg-color-17
                  | Lee el valor en pantalla.
              
              h5.mt-4 Precauciones:
              ul.lista-ul
                li
                  i.fas.fa-circle-right.bg-color-17
                  | No medir corriente en paralelo (cortocircuito).
                li
                  i.fas.fa-circle-right.bg-color-17
                  | Asegurar que el rango sea superior a la corriente esperada.
            .col-lg-5
              figure
                img(src="@/assets/curso/tema3/Grupo 1212889.png", data-aos="zoom-in")

          .row.justify-content-center.align-items-center(titulo="Medición de resistencia")
            .col-lg-7
              h5 Procedimiento:
              ul.lista-ul
                li
                  i.fas.fa-circle-right.bg-color-17
                  | Selecciona función Ω.
                li
                  i.fas.fa-circle-right.bg-color-17
                  | Conecta las puntas: Roja (terminal VΩmA), Negra (terminal COM).
                li
                  i.fas.fa-circle-right.bg-color-17
                  | Tocar los extremos del componente (sin energía).
                li
                  i.fas.fa-circle-right.bg-color-17
                  | Lee el valor en pantalla.
              
              h5.mt-4 Precauciones:
              ul.lista-ul
                li
                  i.fas.fa-circle-right.bg-color-17
                  | Nunca medir con el circuito energizado.
                li
                  i.fas.fa-circle-right.bg-color-17
                  | Evitar tocar las puntas con las manos.
            .col-lg-5
              figure
                img(src="@/assets/curso/tema3/Grupo 1212888.png", data-aos="zoom-in")

    .row.justify-content-center.align-items-center.mb-0
      .col-lg-10.mb-5
        .tarjeta.color-primario.p-2.banner_tarjeta
          .row.justify-content-around.align-items-center.p-3
            .col-auto
              img(src="@/assets/curso/tema1/img12.svg").img65
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  p.mb-0 A continuación, lo invitamos a ingresar al siguiente enlace video para ampliar sus conocimientos sobre cómo usar correctamente un multímetro: 
                .col-sm-auto
                  a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=WjIxLcG8uw4" target="_blank")
                    span Ver video
                    i.fas.fa-play    
    
    separador

    #t_3_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.3 Unidades y rangos de medición
    
    .row.justify-content-center.mb-5
      .col-md-12.col-lg-12
        .tarjeta.bg-color-1.p-4.mb-3
          .row
            .col
              p.mb-0 Las magnitudes eléctricas se expresan en unidades del Sistema Internacional: voltios (V), amperios (A) y ohmios (Ω). Los multímetros emplean rangos y prefijos como m, k y M para representar valores pequeños o grandes, por lo que es importante interpretarlos correctamente. En equipos de rango manual, se recomienda iniciar en el valor más alto e ir disminuyendo hasta obtener una lectura estable. Los multímetros auto-rango seleccionan el rango automáticamente, pero siempre debes elegir la función adecuada (V, A, Ω) y el tipo de corriente AC o DC. Algunas funciones adicionales como frecuencia (Hz), continuidad o capacitancia (F) amplían la capacidad de diagnóstico del equipo.
            .col-auto
              figure
                img(src="@/assets/curso/tema3/Grupo 1211828.svg", data-aos="zoom-in")

    .titulo-sexto.color-acento-contenido.mb-4(data-aos="fade-right")
      h5 Tabla 10. 
      span Magnitudes, unidades y usos
    .tabla-a.color-acento-contenido.mb-5
      table
        thead
          tr
            th Magnitud
            th Unidad
            th Símbolo
            th Uso principal
        tbody
          tr
            td Tensión.
            td Voltio.
            td V
            td Impulso que mueve los electrones.
          tr
            td Corriente.
            td Amperio.
            td A
            td Flujo de electrones en el conductor.
          tr
            td Resistencia.
            td Ohmio.
            td Ω
            td Oposición al paso de la corriente.
          tr
            td Potencia.
            td Vatio.
            td W
            td Energía consumida o entregada.
          tr
            td Frecuencia.
            td Hertz.
            td Hz
            td Ciclos por segundo en señales AC.
          tr
            td Capacitancia.
            td Faradio.
            td F
            td Capacidad de almacenar carga.
      figcaption <strong>Fuente:</strong> SENA, 2026.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .tarjeta.color-primario.p-3
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/tema3/Grupo 1210295.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  p.mb-0 Ingresando al enlace que le compartimos a continuación, podrá ampliar los conceptos de unidades de medida más utilizadas: https://www.youtube.com/watch?v=s9TLe_T9ICY
                .col-sm-auto
                  a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=s9TLe_T9ICY" target="_blank")
                    span Enlace
                    i.fas.fa-link
    
    p.mb-0 Adicionalmente lo invitamos a revisar el siguiente podcast que complementa de manera práctica los conceptos de tensión, corriente, resistencia y la relación entre estas tres magnitudes.

    separador

    #t_3_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.4 Seguridad en la medición eléctrica

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        .row.align-items-center
          .col-lg-auto.mb-lg-0
            img.d-none.d-lg-flex(src="@/assets/curso/tema1/img13.svg", style="").mx-auto
          .col-lg
            p.mb-0 La seguridad en la medición eléctrica es esencial para evitar daños en el instrumento, en el circuito y, sobre todo, en el usuario. Antes de medir, debe verificar el buen estado del multímetro, las puntas y la categoría de protección (CAT) adecuada para la instalación. Siempre seleccione la función correcta (V, A, Ω) antes de conectar las puntas y evite cambiar el selector con el equipo energizado. Para medir corriente, realice conexiones en serie; para resistencia o continuidad, asegúrese siempre de que el circuito esté desenergizado. Mantenga sus manos alejadas de las partes metálicas, trabaje en superficies secas y utilice elementos de protección cuando corresponda.

    p.mb-5 A continuación se ilustra las 5 reglas de oro básicas a tener en cuenta para realizar mediciones eléctricas seguras:

    .row.justify-content-center.mb-5
      .col-lg-9.position-relative
        //- h3.mb-4.text-center.txt--purpura Elementos determinantes para el análisis - CAC
        .avatar
          figure
            img(src="@/assets/curso/tema3/Grupo 1212113.svg", alt="alt").img250
        .crd.crd--avatarHorizontal.crd--first.py-4
          .row.align-items-center
            .col-auto
              figure
                img(src="@/assets/curso/tema3/Grupo 1212890.svg", alt="alt").img100
            .col
              h5.text-dark Desconectar, corte visible o efectivo
              p Algo básico pero importante, antes de realizar cualquier trabajo eléctrico, es desconectar todas las posibles alimentaciones a la línea. El corte visible es cuando puede comprobar visualmente usted mismo los contactos abiertos, y el corte efectivo es cuando el mismo equipo tiene indicadores de la posición de los contactos, para cerciorarse.
        .crd.crd--avatarHorizontal.py-4.crd--three
          .row.align-items-center
            .col-auto
              figure
                img(src="@/assets/curso/tema3/Grupo 1212891.svg", alt="alt").img100
            .col
              h5.text-dark Prevenir realimentación
              p Debe advertirse a otros trabajadores que se ha realizado el corte y el dispositivo está enclavado y así evitar reconexiones accidentales.
        .crd.crd--avatarHorizontal.py-4.crd--four
          .row.align-items-center
            .col-auto
              figure
                img(src="@/assets/curso/tema3/Grupo 1212892.svg", alt="alt").img100
            .col
              h5.text-dark Comprobación de la ausencia de tensión
              p Siempre debe comprobar la ausencia de tensión antes de iniciar cualquier trabajo, empleando los procesos y equipos de medida apropiados.
        .crd.crd--avatarHorizontal.py-4.crd--three
          .row.align-items-center
            .col-auto
              figure
                img(src="@/assets/curso/tema3/Grupo 1212893.svg", alt="alt").img100
            .col
              h5.text-dark Puesta a tierra y en cortocircuito
              p Este paso es especialmente importante, ya que creará una zona de seguridad virtual alrededor de la zona de trabajo.
        .crd.crd--avatarHorizontal.crd--last.py-4
          .row.align-items-center
            .col-auto
              figure
                img(src="@/assets/curso/tema3/Grupo 1212894.svg", alt="alt").img100
            .col
              h5.text-dark Señalización de la zona de trabajo
              p Importante en todo trabajo, señalizar muy bien la zona a intervenir para minimizar riesgos y accidentes.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .tarjeta.color-primario.p-3
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/tema1/img12.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  p.mb-0 A continuación lo invitamos a consultar en este enlace de video para reforzar el conocimientos de las 5 de oro en seguridad eléctrica:
                .col-sm-auto
                  a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=atL-7CQfjhc&t=21s" target="_blank")
                    span Enlace
                    i.fas.fa-link
</template>

<script>
export default {
  name: 'Tema3',
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
