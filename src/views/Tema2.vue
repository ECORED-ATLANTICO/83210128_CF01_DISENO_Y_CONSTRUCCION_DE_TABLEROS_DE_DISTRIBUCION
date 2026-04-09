<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Material y componentes eléctricos

    .bg-full-width.bg-fondo-2
      .container.justify-content-center.mb-3
        .col-md-12.col-lg-12
          .tarjeta.row.justify-content-center.align-items-center.bg-color-4
            .col-lg-5.mb-3.mb-lg-0.ps-0
              figure
                img(src="@/assets/curso/tema2/img01.png", data-aos="zoom-in")
            .col-lg-7.p-3
              p.mb-3 El estudio de los materiales y componentes eléctricos es fundamental para comprender cómo se construyen, operan y mantienen los circuitos utilizados en el entorno industrial y residencial. Cada material posee propiedades eléctricas específicas que determinan su capacidad para conducir, limitar o bloquear el paso de la corriente eléctrica. Asimismo, los componentes básicos de un circuito —como fuentes, cargas, elementos de protección y dispositivos de control— permiten que la energía se distribuya de manera segura y eficiente.
              .row.align-items-center
                .col-auto.mb-4.mb-lg-0
                  img.d-lg-flex.d-none(src="@/assets/curso/tema2/img02.svg").mx-auto
                .col-lg
                  p.mb-0 Comprender estos elementos posibilita al aprendiz interpretar esquemas eléctricos, seleccionar adecuadamente componentes en proyectos reales y aplicar buenas prácticas de instalación.

      separador


      #t_2_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
        h2 2.1 Conductores, semiconductores y aislantes


      .row.justify-content-center.align-items-center.mb-5
        .col-lg-12
          .row.align-items-center
            .col-lg-auto.mb-lg-0
              img.d-none.d-lg-flex(src="@/assets/curso/tema1/img13.svg", style="").mx-auto
            .col-lg
              p.mb-0 Los materiales pueden clasificarse según su capacidad para permitir o impedir el movimiento de electrones. Esta clasificación es esencial para el diseño y análisis de sistemas eléctricos, pues determina qué elementos se emplean para conducir corriente, cuáles se usan en dispositivos de control y cuáles sirven como barreras de seguridad.


    .bg-full-width.bg-fondo-1.mb-5.p-4.p-lg-5
      SlyderA(tipo="b").bg-color-white.p-2.p-lg-4.tarjeta
        .row.justify-content-center.align-items-center.p-4
          .col-lg-8.mb-4.mb-lg-0
            h4 Conductores
            p.mb-4 Son materiales que permiten el paso de la corriente eléctrica con facilidad. Esto ocurre porque poseen electrones libres en su capa de valencia.
            .row
              .col-lg-6
                h5 Ejemplos
                ul.lista-ul
                  li
                    i.fas.fa-circle-right.bg-color-17
                    | Cobre.
                  li
                    i.fas.fa-circle-right.bg-color-17
                    | Aluminio.
                  li
                    i.fas.fa-circle-right.bg-color-17
                    | Plata.
                  li
                    i.fas.fa-circle-right.bg-color-17
                    | Oro (especialmente en electrónica de precisión).
              .col-lg-6
                h5 Aplicaciones
                ul.lista-ul
                  li
                    i.fas.fa-circle-right.bg-color-17
                    | Redes de distribución.
                  li
                    i.fas.fa-circle-right.bg-color-17
                    | Cableado residencial e industrial.
                  li
                    i.fas.fa-circle-right.bg-color-17
                    | Bobinas y transformadores.
          .col-lg-4
            figure
              img(src='@/assets/curso/tema2/img03.png', alt='Conductores')

        .row.justify-content-center.align-items-center.p-4
          .col-lg-8.mb-4.mb-lg-0
            h4 Semiconductores
            p.mb-4 Tienen una conductividad intermedia entre conductores y aislantes. Lo más importante es que su capacidad de conducir puede controlarse mediante dopaje o estímulos como la luz, el calor o campos eléctricos.
            .row
              .col-lg-6
                h5 Ejemplos
                ul.lista-ul
                  li
                    i.fas.fa-circle-right.bg-color-17
                    | Silicio.
                  li
                    i.fas.fa-circle-right.bg-color-17
                    | Germanio.
              .col-lg-6
                h5 Aplicaciones
                ul.lista-ul
                  li
                    i.fas.fa-circle-right.bg-color-17
                    | Circuitos integrados.
                  li
                    i.fas.fa-circle-right.bg-color-17
                    | Sensores.
                  li
                    i.fas.fa-circle-right.bg-color-17
                    | Controladores electrónicos.
                  li
                    i.fas.fa-circle-right.bg-color-17
                    | Diodos y transistores.
          .col-lg-4
            figure
              img(src='@/assets/curso/tema2/img04.png', alt='Semiconductores')

        .row.justify-content-center.align-items-center.p-4
          .col-lg-8.mb-4.mb-lg-0
            h4 Aislantes
            p.mb-4 Son materiales que presentan una gran oposición al paso de la corriente porque sus electrones están fuertemente ligados al núcleo.
            .row
              .col-lg-6
                h5 Ejemplos
                ul.lista-ul
                  li
                    i.fas.fa-circle-right.bg-color-17
                    | Plástico.
                  li
                    i.fas.fa-circle-right.bg-color-17
                    | Vidrio.
                  li
                    i.fas.fa-circle-right.bg-color-17
                    | Madera seca.
                  li
                    i.fas.fa-circle-right.bg-color-17
                    | Cerámica.
                  li
                    i.fas.fa-circle-right.bg-color-17
                    | Goma.
              .col-lg-6
                h5 Aplicaciones
                ul.lista-ul
                  li
                    i.fas.fa-circle-right.bg-color-17
                    | Recubrimiento de cables.
                  li
                    i.fas.fa-circle-right.bg-color-17
                    | Bases de interruptores.
                  li
                    i.fas.fa-circle-right.bg-color-17
                    | Elementos de soporte en redes de alta tensión.
          .col-lg-4
            figure
              img(src='@/assets/curso/tema2/img05.png', alt='Aislantes')

    .row.justify-content-center.align-items-center.mb-3
      .col-md-12.col-lg-12
        .titulo-sexto.color-acento-contenido.mb-4
          h5.text-bold Tabla 7.
          span Comparación general de materiales eléctricos
        .tabla-a.color-acento-contenido
          table
            caption Nota. SENA, (2026).
            thead
              tr
                th Tipo de material
                th Conductividad
                th Electrones libres
                th Ejemplos
                th Usos típicos
            tbody
              tr
                td Conductores.
                td Alta.
                td Muchos.
                td Cobre, aluminio.
                td Cables, barras, conexiones.
              tr
                td Semiconductores.
                td Media (controlable).
                td Intermedios.
                td Silicio.
                td Circuitos electrónicos.
              tr
                td Aislantes.
                td Muy baja.
                td Muy pocos.
                td Plástico, vidrio.
                td Protección y aislamiento.

    separador

    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.2 Componentes de un circuito: fuente, carga, protección, conductor, interruptor

    p.mb-4 Los circuitos eléctricos están conformados por elementos que cumplen funciones específicas. Cada uno es indispensable para el funcionamiento seguro y eficiente del sistema.

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-12
        .tarjeta.bg-color-1.p-4.mb-3.br-15
          .row.align-items-center
            .col-auto.d-none.d-md-flex
              figure
                img(src="@/assets/curso/tema2/img06.svg", style="width: 70px")
            .col
              h4 Fuente eléctrica
              p.mb-3 La fuente proporciona la energía necesaria para establecer la corriente. Existen dos tipos de fuentes:
              ul.lista-ul.mb-0
                li
                  i.fas.fa-circle-right.bg-color-17
                  | AC: red domiciliaria, generadores.
                li
                  i.fas.fa-circle-right.bg-color-17
                  | DC: baterías, paneles solares, fuentes conmutadas.

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-12
        .tarjeta.bg-color-11.p-4.mb-3
          .row.align-items-center
            .col-auto.d-none.d-md-flex
              figure
                img(src="@/assets/curso/tema2/img07.svg", style="width: 70px")
            .col
              h4 Conductores
              p.mb-3 Son los elementos que permiten el transporte de corriente desde la fuente hacia los demás componentes. Características importantes:
              ul.lista-ul.mb-0
                li
                  i.fas.fa-circle-right.bg-color-17
                  | Material (cobre o aluminio).
                li
                  i.fas.fa-circle-right.bg-color-17
                  | Calibre (sección transversal).
                li
                  i.fas.fa-circle-right.bg-color-17
                  | Aislamiento.

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-12
        .tarjeta.bg-color-1.p-4.mb-3.br-15
          .row.align-items-center
            .col-auto.d-none.d-md-flex
              figure
                img(src="@/assets/curso/tema2/img08.svg", style="width: 70px")
            .col
              h4 Carga eléctrica
              p.mb-0 La carga eléctrica es el componente del circuito que transforma la energía suministrada por la fuente en una acción específica, como iluminación, movimiento, calor o procesamiento electrónico. Entre las cargas más comunes se encuentran las lámparas, motores, resistencias calefactoras y dispositivos electrónicos, cada una con características propias de consumo y comportamiento eléctrico.

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-12
        .tarjeta.bg-color-11.p-4.mb-3
          .row.align-items-center
            .col-auto.d-none.d-md-flex
              figure
                img(src="@/assets/curso/tema2/img09.svg", style="width: 70px")
            .col
              h4 Elementos de protección
              p.mb-0 Los elementos de protección limitan fallas eléctricas y resguardan a las personas al actuar ante condiciones anormales del circuito. Sus dispositivos principales (interruptores automáticos, fusibles y diferenciales) operan para informar sobrecorrientes, aislar cortocircuitos y detectar fugas a tierra, asegurando la integridad y continuidad del sistema.

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-12
        .tarjeta.bg-color-1.p-4.mb-3.br-15
          .row.align-items-center
            .col-auto.d-none.d-md-flex
              figure
                img(src="@/assets/curso/tema2/img10.svg", style="width: 70px")
            .col
              h4 Interruptores o dispositivos de control
              p.mb-0 Los interruptores o dispositivos de control permiten abrir o cerrar el circuito para habilitar o interrumpir el paso de corriente, garantizando la operación segura del sistema. Entre los más utilizados se encuentran los interruptores unipolares y bipolares, los pulsadores, las llaves térmicas y los contactores, empleados en maniobra, protección y automatización.

    .row.justify-content-center.align-items-center.mb-3
      .col-md-12.col-lg-12
        .titulo-sexto.color-acento-contenido.mb-4
          h5.text-bold Tabla 8.
          span Componentes del circuito y su función
        .tabla-a.color-acento-contenido
          table
            caption Nota. SENA, (2026).
            thead
              tr
                th Componente
                th Función principal
                th Ejemplos
            tbody
              tr
                td Fuente.
                td Suministro de energía.
                td Batería, toma AC.
              tr
                td Conductor.
                td Transporte de corriente.
                td Cable THHN.
              tr
                td Carga.
                td Consumo de energía.
                td Motor, bombillo.
              tr
                td Protección.
                td Seguridad.
                td Disyuntor, fusible.
              tr
                td Interruptor.
                td Control del circuito.
                td Interruptor manual, contactor.

    separador
    .bg-full-width.bg-fondo-2

      #t_2_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
        h2 2.3 Tipos de protecciones y su función en el circuito

      .row.justify-content-center.align-items-center.mb-5
        .col-lg-12
          .row.align-items-center
            .col-lg-auto.mb-lg-0
              img.d-none.d-lg-flex(src="@/assets/curso/tema1/img13.svg", style="").mx-auto
            .col-lg
              p.mb-0 Las protecciones eléctricas son elementos esenciales en cualquier instalación, ya que permiten mantener la seguridad de las personas, de los equipos y del sistema ante condiciones anormales de operación. Su función principal es interrumpir el flujo de corriente cuando se presentan fallas, evitando daños por sobrecorriente, cortocircuitos o fugas a tierra. Comprender cómo operan estas protecciones y en qué situación actúa cada una es clave para el análisis e implementación de circuitos seguros.


      .row.justify-content-center.align-items-center.mb-5
        .col-md-12.col-lg-12
          .titulo-sexto.color-acento-contenido.mb-4
            h5.text-bold Figura 3.
            span Protecciones eléctricas y su función en el circuito
          figure.mb-2
            img.d-none.d-lg-block(data-aos="fade-up", src="@/assets/curso/tema2/img16.png", alt="La figura 3 presenta cuatro tipos de protecciones eléctricas y su función en un circuito. En la parte superior aparece el título “Protecciones eléctricas: qué detectan, cuándo actúan y cómo protegen tu sistema”. Debajo se describen, en columnas independientes, las siguientes protecciones: Sobrecorriente: identifica corrientes superiores a las permitidas y actúa para evitar daños por sobrecarga; incluye funciones como evitar el deterioro del aislamiento y proteger equipos sensibles. Electromagnética: opera ante cortocircuitos mediante desconexión rápida y previene daños graves en componentes eléctricos. Diferencial: detecta fugas de corriente a tierra, previene choques eléctricos y ayuda a identificar fallas de aislamiento, especialmente en zonas húmedas. Térmica: responde al sobrecalentamiento en motores o bobinas, deteniendo el sistema para evitar daños internos.  Cada protección cumple una función específica. La seguridad del sistema depende de la correcta selección e instalación de estos dispositivos. Nota. SENA, (2026).")
            img.d-block.d-lg-none(data-aos="fade-up", src="@/assets/curso/tema2/img16_m.png", alt="La figura 3 presenta cuatro tipos de protecciones eléctricas y su función en un circuito.  En la parte superior aparece el título “Protecciones eléctricas: qué detectan, cuándo actúan y cómo protegen tu sistema”.  Debajo se describen, en columnas independientes, las siguientes protecciones: Sobrecorriente: identifica corrientes superiores a las permitidas y actúa para evitar daños por sobrecarga; incluye funciones como evitar el deterioro del aislamiento y proteger equipos sensibles. Electromagnética: opera ante cortocircuitos mediante desconexión rápida y previene daños graves en componentes eléctricos. Diferencial: detecta fugas de corriente a tierra, previene choques eléctricos y ayuda a identificar fallas de aislamiento, especialmente en zonas húmedas. Térmica: responde al sobrecalentamiento en motores o bobinas, deteniendo el sistema para evitar daños internos.  Cada protección cumple una función específica. La seguridad del sistema depende de la correcta selección e instalación de estos dispositivos. Nota. SENA, (2026).")
          figcaption <strong>Nota:</strong> SENA, (2026).


</template>

<script>
export default {
  name: 'Tema2',
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
