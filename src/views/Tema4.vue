<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Métodos de conexionado eléctrico

    .container.justify-content-center.mb-3
      .col-md-12.col-lg-12
        .tarjeta.row.justify-content-center.align-items-center.bg-color-4
          .col-lg-5.mb-3.mb-lg-0.ps-0
            figure
              img(src="@/assets/curso/tema4/img01.png", data-aos="zoom-in")
          .col-lg-7.p-3
            p.mb-3 El estudio de los materiales y componentes eléctricos es fundamental para comprender cómo se construyen, operan y mantienen los circuitos utilizados en el entorno industrial y residencial. Cada material posee propiedades eléctricas específicas que determinan su capacidad para conducir, limitar o bloquear el paso de la corriente eléctrica. Asimismo, los componentes básicos de un circuito —como fuentes, cargas, elementos de protección y dispositivos de control— permiten que la energía se distribuya de manera segura y eficiente.
            
    separador

    #t_4_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.1 Circuitos en serie
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.col-md-8.mb-4.mb-lg-0.mx-auto
        figure
          img(src="@/assets/curso/tema4/img02.svg", data-aos="zoom-in")
      .col-lg-8
        .row.align-items-center.mb-2
          .col-lg-auto.mb-lg-0
            img.d-none.d-lg-flex(src="@/assets/curso/tema1/img13.svg", style="").mx-auto
          .col-lg
            p.mb-0 Un circuito en serie es aquel en el que los elementos se conectan uno después del otro, formando un solo camino para el flujo de corriente eléctrica. En este tipo de circuito, la corriente que circula es la misma a través de todos los componentes, ya que solo existe una trayectoria posible para el movimiento de los electrones.
        p.mb-3 <strong>Características principales:</strong>
        ul.lista-ul.mb-0
          li
            i.fas.fa-circle-right.bg-color-17
            | Existe una única trayectoria para el paso de la corriente.
          li
            i.fas.fa-circle-right.bg-color-17
            | La corriente es igual en todos los componentes del circuito.
          li
            i.fas.fa-circle-right.bg-color-17
            | El voltaje total se reparte entre los elementos conectados.
          li
            i.fas.fa-circle-right.bg-color-17
            | Si uno de los componentes se interrumpe o falla, todo el circuito deja de funcionar.

    .row.justify-content-center.align-items-center.mb-3
      .col-lg-12
        .bg-color-1.p-4.brd--rad.br-15
          .row.align-items-center
            .col-auto.d-none.d-md-flex
              figure
                img(src="@/assets/curso/tema4/img03.svg", style="width: 70px").mx-auto
            .col
              p.mb-1 <strong>Ejemplo aplicado</strong>
              p.mb-0 Un ejemplo sencillo de circuito en serie puede observarse en luces decorativas o cadenas de bombillos antiguos, donde si un bombillo se daña, todos los demás dejan de encender. Aunque este tipo de conexión es útil en algunos casos específicos, no es la forma más utilizada en sistemas de distribución eléctrica, debido a que una falla afecta a todos los elementos conectados.

    separador

    #t_4_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.2 Circuitos en paralelo

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.col-md-8.mb-4.mb-lg-0.mx-auto
        figure
          img(src="@/assets/curso/tema4/img04.svg", data-aos="zoom-in")
      .col-lg-8
        .row.align-items-center.mb-2
          .col-lg-auto.mb-lg-0
            img.d-none.d-lg-flex(src="@/assets/curso/tema1/img13.svg", style="").mx-auto
          .col-lg
            p.mb-0 En un circuito en paralelo, los componentes se conectan de manera que cada uno tiene su propia trayectoria para el flujo de corriente, aunque todos están conectados a los mismos puntos de alimentación. Esto significa que cada elemento recibe el mismo voltaje, mientras que la corriente se divide entre las diferentes ramas del circuito.
        p.mb-3 <strong>Características principales:</strong>
        ul.lista-ul.mb-0
          li
            i.fas.fa-circle-right.bg-color-17
            | Existen varias trayectorias para el flujo de corriente.
          li
            i.fas.fa-circle-right.bg-color-17
            | El voltaje es igual en todas las ramas del circuito.
          li
            i.fas.fa-circle-right.bg-color-17
            | La corriente se divide entre los diferentes caminos.
          li
            i.fas.fa-circle-right.bg-color-17
            | Si un componente falla, los demás continúan funcionando.

    .row.justify-content-center.align-items-center.mb-3
      .col-lg-12
        .bg-color-4.p-4.brd--rad.br-15
          .row.align-items-center
            .col-auto.d-none.d-md-flex
              figure
                img(src="@/assets/curso/tema4/img05.svg", style="width: 70px").mx-auto
            .col
              p.mb-1 <strong>Ejemplo aplicado</strong>
              p.mb-0 Este tipo de conexión es el más utilizado en instalaciones eléctricas residenciales, comerciales e industriales, así como en los tableros de distribución, ya que permite alimentar varios circuitos de forma independiente sin afectar el funcionamiento de los demás.

    separador

    #t_4_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.3 Sistemas mixtos

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.col-md-8.mb-4.mb-lg-0.mx-auto
        figure
          img(src="@/assets/curso/tema4/img06.svg", data-aos="zoom-in")
      .col-lg-8
        .row.align-items-center.mb-2
          .col-lg-auto.mb-lg-0
            img.d-none.d-lg-flex(src="@/assets/curso/tema1/img13.svg", style="").mx-auto
          .col-lg
            p.mb-0 Los circuitos mixtos combinan conexiones en serie y en paralelo dentro de un mismo sistema eléctrico. Este tipo de configuración es común en sistemas eléctricos reales, donde diferentes dispositivos o cargas requieren distintos tipos de conexión para cumplir funciones específicas.
        p.mb-3 <strong>Características principales:</strong>
        ul.lista-ul.mb-0
          li
            i.fas.fa-circle-right.bg-color-17
            | Integran secciones del circuito en serie y en paralelo.
          li
            i.fas.fa-circle-right.bg-color-17
            | Permiten mayor flexibilidad en el diseño de circuitos eléctricos.
          li
            i.fas.fa-circle-right.bg-color-17
            | Son frecuentes en instalaciones eléctricas complejas.
          li
            i.fas.fa-circle-right.bg-color-17
            | Requieren un análisis más detallado para el cálculo de sus parámetros eléctricos.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        .bg-color-1.p-4.brd--rad.br-15
          .row.align-items-center
            .col-auto.d-none.d-md-flex
              figure
                img(src="@/assets/curso/tema4/img07.svg", style="width: 70px").mx-auto
            .col
              p.mb-1 <strong>Ejemplo aplicado</strong>
              p.mb-0 En los tableros eléctricos, los circuitos mixtos pueden presentarse cuando algunos dispositivos de protección o control se conectan en serie con la línea principal, mientras que las cargas se distribuyen en paralelo hacia diferentes circuitos derivados.
   
    .row.justify-content-center.align-items-center.mb-3
      .col-lg-10
        .tarjeta.color-primario.p-3
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/tema1/img12.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  p.mb-0 Con el objetivo de ampliar los conceptos sobre los diferentes tipos de circuitos eléctricos, lo invitamos a consultar el siguiente enlace de video:
                .col-sm-auto
                  a.boton.color-acento-botones(href="https://www.youtube.com/" target="_blank")
                    span Enlace
                    i.fas.fa-link
    
    separador

    #t_4_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.4 Interpretación de diagramas y simbología

    .bg-full-width.bg-fondo-1.mb-5.p-4.p-lg-5
      SlyderA(tipo="b").bg-color-white.p-2.p-lg-4.tarjeta
        .row.justify-content-center.align-items-center.p-4
          .col-lg-7.mb-4.mb-lg-0
            h5 Elementos claves al interpretar un diagrama
            ul.lista-ul.mb-0
              li
                i.fas.fa-circle-right.bg-color-17
                | 1. Identificar símbolos de componentes: resistencias, fuentes, interruptores, protecciones, conductores.
              li
                i.fas.fa-circle-right.bg-color-17
                | 2. Reconocer sentido de corriente (convencional o electrónico).
              li
                i.fas.fa-circle-right.bg-color-17
                | 3. Observar nodos y uniones entre conductores.
              li
                i.fas.fa-circle-right.bg-color-17
                | 4. Interpretar ramas, caminos, y puntos de medición.
              li
                i.fas.fa-circle-right.bg-color-17
                | 5. Revisar anotaciones como: Calibres, Referencias, Valores nominales, Códigos de colores.
          .col-lg-4.col-md-8.mx-auto
            figure
              img(src='@/assets/curso/tema4/img08.png', alt='Interpretación de diagramas')

        .row.justify-content-center.align-items-center.p-4
          .col-lg-7.mb-4.mb-lg-0
            h5 Tipos de diagramas más utilizados
            ul.lista-ul.mb-0
              li
                i.fas.fa-circle-right.bg-color-17
                | 1. Diagrama unifilar: representación simplificada con una sola línea por circuito.
              li
                i.fas.fa-circle-right.bg-color-17
                | 2. Diagrama multifilar: muestra cada conductor individual.
              li
                i.fas.fa-circle-right.bg-color-17
                | 3. Esquema funcional: resalta la lógica de funcionamiento del sistema.
              li
                i.fas.fa-circle-right.bg-color-17
                | 4. Esquema de control: usado para automatización y maniobra.
          .col-lg-4.col-md-8.mx-auto
            figure
              img(src='@/assets/curso/tema4/img09.png', alt='Tipos de diagramas')


    .row.justify-content-center.align-items-center.mb-0
      .col-lg-12
        .titulo-sexto.color-acento-contenido.mb-4
          h5 Tabla 11.
          span Ejemplos básicos de simbología eléctrica
        .tabla-a.color-acento-contenido.mb-0
          table
            caption Nota. Adoptado de Floyd, T. L. (2018). Principios de circuitos eléctricos. Pearson.
            thead
              tr
                th Símbolo eléctrico
                th Nombre del elemento
                th Función en el circuito
            tbody
              tr
                td Línea recta.
                td Conductor.
                td Representa el cable por donde circula la corriente.
              tr
                td Punto de unión.
                td Conexión eléctrica.
                td Indica que dos o más conductores están conectados.
              tr
                td Interruptor.
                td Interruptor simple.
                td Permite abrir o cerrar el circuito.
              tr
                td Fusible.
                td Fusible de protección.
                td Protege el circuito ante sobrecorriente.
              tr
                td Breaker / interruptor automático.
                td Interruptor termomagnético.
                td Desconecta el circuito ante sobrecargas o cortocircuitos.
              tr
                td Círculo con cruz.
                td Lámpara.
                td Representa una carga de iluminación.
              tr
                td Zigzag.
                td Resistencia.
                td Representa oposición al paso de corriente.
              tr
                td Símbolo de batería.
                td Fuente de energía.
                td Proporciona energía eléctrica al circuito.
              tr
                td Símbolo de tierra.
                td Conexión a tierra.
                td Protege a las personas y equipos contra fallas.



</template>

<script>
export default {
  name: 'Tema4',
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
