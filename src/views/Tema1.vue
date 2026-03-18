<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Fundamentos de electricidad
      
    .bloque-texto-b.color-1.p-4(data-aos="fade-up").mb-5
      .bloque-texto-b__texto
        i.fas.fa-quote-left
        p.mb-0 El estudio de los fundamentos de electricidad constituye la base para comprender el comportamiento de los sistemas eléctricos y la interacción de sus componentes. Estos principios permiten explicar fenómenos esenciales como el movimiento de electrones, la presencia de cargas y la generación de campos eléctricos, los cuales sustentan el funcionamiento de cualquier circuito. Según autores especializados en el área de la electrofísica, comprender estas nociones iniciales es indispensable para analizar y predecir el comportamiento de la corriente, la tensión y la resistencia dentro de diferentes configuraciones eléctricas, facilitando el desarrollo de habilidades técnicas aplicadas al sector productivo.
        i.fas.fa-quote-right
      .bloque-texto-d__autor 
        .h5.mb-0 Badui Dergal, 2025.

    separador

    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.1 Estructura del átomo y flujo de electrones

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-md-4.col-lg-3.mb-4.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/img01.png", data-aos="zoom-in")
      .col-lg-9
        .tarjeta.bg-color-1.p-4.mb-3
          .row
            .col-auto
              figure
                img(src="@/assets/curso/tema1/img02.svg", data-aos="zoom-in")
            .col
              p.mb-0 Comprender la estructura del átomo es fundamental para explicar los fenómenos eléctricos presentes en cualquier sistema técnico. La electricidad no es más que el movimiento ordenado de cargas, especialmente electrones, y este comportamiento solo puede entenderse si se conoce cómo están organizados los átomos, qué fuerzas actúan sobre sus partículas y por qué algunos materiales permiten el libre desplazamiento electrónico mientras que otros lo impiden. Este conocimiento se convierte en la base sobre la cual el aprendiz desarrollará habilidades para analizar circuitos, interpretar magnitudes eléctricas y comprender el funcionamiento de dispositivos eléctricos en el entorno productivo. 
        p.mb-0 Todos los materiales están formados por átomos, y la forma en que estos se organizan determina sus propiedades eléctricas. Un átomo está compuesto por tres partículas principales:

    .row.justify-content-center.align-items-center.mb-5
      .col-md-8.col-lg-6
        .titulo-sexto.color-acento-contenido.mb-4
          h5 Figura 1.
          span Estructura del átomo
        figure.mb-2
          img(data-aos="fade-up", src="@/assets/curso/tema1/img03.svg", alt="La figura ilustra la estructura del átomo: un núcleo con protones (+) y neutrones (0), rodeado de órbitas de electrones (-).")
        figcaption <strong>Fuente:</strong> SENA, 2026

    p.mb-5 La mayor parte de la masa del átomo se concentra en el núcleo, donde se encuentran protones y neutrones, mientras que los electrones se distribuyen en diferentes niveles de energía. Esta distribución electrónica es clave para comprender por qué algunos materiales son conductores y otros no.

    .row.justify-content-center.align-items-center.mb-5
      .col-md-12.col-lg-12
        .titulo-sexto.color-acento-contenido.mb-4
          h5 Tabla 1.
          span Partículas subatómicas y sus características principales
        .tabla-a.color-acento-contenido
          table
            caption Nota. SENA, 2026.
            thead
              tr
                th Partícula
                th Carga
                th Ubicación
                th Papel en los fenómenos eléctricos
            tbody
              tr
                td Protón.
                td Positiva (+).
                td Núcleo.
                td Determina el elemento químico.
              tr
                td Neutrón.
                td Neutra.
                td Núcleo.
                td Confiere estabilidad al átomo.
              tr
                td Electrón.
                td Negativa (–).
                td Órbitas o capas.
                td Responsable del flujo de corriente eléctrica.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-9.mb-4.mb-lg-0
        p.mb-3 Los electrones no se ubican de manera aleatoria. Se distribuyen en niveles de energía que rodean al núcleo, y estos niveles están organizados de menor a mayor energía. El nivel más externo se denomina capa de valencia, y es aquí donde se encuentran los electrones que participan en procesos eléctricos.
        
        .tarjeta.bg-color-1.p-4.mb-3
          .row
            .col-auto
              figure
                img(src="@/assets/curso/tema1/img05.svg", data-aos="zoom-in")
            .col
              p.mb-0 Cuando un electrón de valencia se encuentra débilmente ligado al núcleo, puede desplazarse fácilmente hacia otro átomo, lo que genera electrones libres. Este fenómeno es el fundamento de la conductividad eléctrica.

        p.mb-0 La cantidad de electrones en la capa externa determina el comportamiento eléctrico de un material:
        
      .col-12.col-md-4.col-lg-3
        figure
          img(src="@/assets/curso/tema1/img04.png", data-aos="zoom-in")

    .row.justify-content-center.align-items-center.mb-5
      .col-md-8.col-lg-5
        .titulo-sexto.color-acento-contenido.mb-4
          h5 Figura 2.
          span Proceso de conducción del flujo de electrones
        figure.mb-2
          img.mx-auto(data-aos="zoom-in", src="@/assets/curso/tema1/img07.svg", alt="Ilustración del flujo de electrones entre átomos").w-75
          //- img.d-sm-none(data-aos="fade-up", src="@/assets/curso/tema1/img04_mob.svg", alt="La figura muestra átomos compartiendo un electrón de valencia de órbita en órbita, provocando un flujo.")
        figcaption <strong>Fuente:</strong> SENA, 2026

      
    .row.justify-content-center.mb-5
      .col-xl-6.col-lg-6.col-md-9.col-12.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left").tarjeta
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema1/img08.png", alt="alt")
          .crd_hover_txt--body
            h4.mb-3 Fenómeno del flujo de electrones
            p.mb-0 Cuando un electrón de valencia recibe energía suficiente, puede liberarse del átomo. A este proceso se le denomina ionización. En un conductor, los electrones se desplazan de un átomo a otro formando un fenómeno llamado corriente eléctrica.
    
      .col-xl-6.col-lg-6.col-md-9.col-12.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left").tarjeta
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema1/img09.png", alt="alt")
          .crd_hover_txt--body
            h4.mb-3 El flujo de electrones ocurre porque:
            p.mb-0 
              ul.lista-ul
                li Los átomos conductores tienen electrones débilmente ligados.
                li Al aplicar una diferencia de potencial, los electrones se mueven desde el punto de mayor concentración hacia el de menor concentración.
                li Este movimiento ordenado constituye la base del funcionamiento de todos los circuitos eléctricos

    
    p.mb-4 A continuación lo invitamos a consultar el siguiente podcast para ampliar los conceptos sobre el átomo y su estructura:
 
    .row.justify-content-center.align-items-center.mb-5
      .col-md-12.col-lg-12
        .titulo-sexto.color-acento-contenido.mb-4
          h5 Tabla 2.
          span Clasificación de los materiales según su conductividad
        .tabla-a.color-acento-contenido
          table
            caption Nota. SENA, 2026.
            thead
              tr
                th Tipo de material
                th Características atómicas
                th Ejemplos
                th Comportamiento eléctrico
            tbody
              tr
                td Conductores.
                td Muchos electrones libres.
                td Cobre, plata, aluminio.
                td Alta conductividad.
              tr
                td Semiconductores.
                td Pocos electrones libres (4 de valencia).
                td Silicio, germanio.
                td Conductividad controlable.
              tr
                td Aislantes.
                td Electrones fuertemente ligados.
                td Caucho, vidrio, plástico.
                td Baja o nula conductividad.

    .row.justify-content-center.mb-5
      .col-md-12.col-lg-12
        .tarjeta.bg-color-1.p-4.mb-3
          .row
            .col
              p.mb-0 La comprensión del átomo y su estructura permite fundamentar el estudio de las magnitudes eléctricas, ya que el comportamiento de los electrones es la base de los fenómenos eléctricos. La corriente eléctrica (I) se entiende como el flujo ordenado de electrones a través de un conductor; el voltaje (V) representa la fuerza o diferencia de potencial que impulsa ese movimiento; y la resistencia (R) constituye la oposición que ofrece el material al paso de dichos electrones. Estas magnitudes no son conceptos aislados, sino que se articulan en principios como la Ley de Ohm, la cual describe matemáticamente su relación y explica cómo el comportamiento microscópico de los electrones en un material se traduce en efectos eléctricos medibles a nivel macroscópico.              
            .col-auto
              figure
                img(src="@/assets/curso/tema1/img10.svg", data-aos="zoom-in")

    .row.justify-content-center.align-items-center.mb-5
      .col-md-9.col-lg-6.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/img11.svg", data-aos="zoom-in")
      .col-md-12.col-lg-6
        .tarjeta.bg-color-3.p-4.mb-3
          p.mb-0 Los electrones se distribuyen alrededor del núcleo en niveles energéticos; a medida que estos se alejan, disminuye la fuerza de atracción del núcleo.
            
        .tarjeta.bg-color-3.p-4.mb-3
          p.mb-0 En el último nivel, llamado banda de conducción, la atracción es más débil y los electrones que allí se encuentran se denominan electrones libres, ya que pueden desplazarse de un átomo a otro cuando el material es excitado por calor, luz o electricidad.
            
        .tarjeta.bg-color-3.p-4.mb-3
          p.mb-0 Este movimiento continuo de electrones libres es el que origina la corriente eléctrica, y cuanto mayor sea la cantidad de electrones que se desplacen, mayor será la energía eléctrica generada.
            
    .row.justify-content-center.align-items-center.mb-3
      .col-lg-10.mb-5
        .tarjeta.color-primario.p-2.banner_tarjeta
          .row.justify-content-around.align-items-center.p-3
            .col-auto
              img(src="@/assets/curso/tema1/img12.svg").img65
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  p.mb-0 Ingrese a este enlace de video para conocer cómo se produce la corriente eléctrica.
                .col-sm-auto
                  a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=BEFGzbV5SE8" target="_blank")
                    span Ver video
                    i.fas.fa-play

    separador

    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.2 Carga eléctrica y campo eléctrico

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        .row.align-items-center
          .col-lg-auto.mb-lg-0
            img.d-none.d-lg-flex(src="@/assets/curso/tema1/img13.svg", style="").mx-auto
          .col-lg
            p.mb-0 La comprensión de la carga eléctrica y del campo eléctrico es esencial para interpretar la manera en que se comportan los sistemas eléctricos en cualquier entorno técnico. La carga permite explicar cómo interactúan las partículas a nivel microscópico, mientras que el campo eléctrico describe la influencia que una carga ejerce sobre otra aun cuando no exista contacto directo. Este conocimiento es la base para entender cómo se generan las fuerzas responsables del movimiento de electrones y, en consecuencia, del establecimiento de la corriente eléctrica en los circuitos. 

   
    .container.justify-content-center.align-items-center.mb-5
      .col-lg-12
        .titulo-con-imagen.mb-5(data-aos="fade-right")
          .titulo-con-imagen__fondo
            img.titulo-con-imagen__imagen(src="@/assets/curso/tema1/img14.svg")
            h3.titulo-con-imagen__texto La carga eléctrica
   
    .row.justify-content-center.align-items-center.mb-5
      .col-md-12.col-lg-12
        .tarjeta.bg-color-1.p-4.mb-3
          p.mb-0 La carga eléctrica es una propiedad física que determina cómo interactúan las partículas en presencia de otras cargas. Existen dos tipos principales: positiva y negativa, y su comportamiento se rige por tres principios fundamentales:

    .row.justify-content-center.mb-5
      .col-xl-4.col-lg-4.col-md-6.col-12.mb-4.mb-xl-0
        .tarjeta.bg-color-white.box-shadow.p-0.h-100
          figure
            img(src="@/assets/curso/tema1/img15.png", alt="Principio 1")
          .p-4
            .p-3.text-center.mb-3(style="background-color: #1254C7; border-radius: 4px;")
              h5.text-white.mb-0 Principio 1: las cargas iguales se repelen.
            p.mb-3 <strong>Ejemplo:</strong> cabello que “se eriza” con un suéter de lana.
            p.mb-3 Al quitarse un suéter, algunos cabellos ganan electrones y quedan cargados negativamente. Cada cabello tiene el mismo tipo de carga.
            p.mb-0 <strong>Resultado:</strong> los cabellos se repelen entre ellos y se separan.

      .col-xl-4.col-lg-4.col-md-6.col-12.mb-4.mb-xl-0
        .tarjeta.bg-color-white.box-shadow.p-0.h-100
          figure
            img(src="@/assets/curso/tema1/img16.png", alt="Principio 2")
          .p-4
            .p-3.text-center.mb-3(style="background-color: #1254C7; border-radius: 4px;")
              h5.text-white.mb-0 Principio 2: las cargas opuestas se atraen.
            p.mb-3 <strong>Ejemplo:</strong> globo frotado en el cabello.
            p.mb-3 Al frotar un globo en el cabello, el globo queda cargado negativamente. El cabello pierde electrones y queda cargado positivamente.
            p.mb-0 <strong>Resultado:</strong> el globo es atraído hacia el cabello.

      .col-xl-4.col-lg-4.col-md-6.col-12.mb-4.mb-xl-0
        .tarjeta.bg-color-white.box-shadow.p-0.h-100
          figure
            img(src="@/assets/curso/tema1/img17.png", alt="Principio 3")
          .p-4
            .p-3.text-center.mb-3(style="background-color: #1254C7; border-radius: 4px;")
              h5.text-white.mb-0 Principio 3: la carga puede transferirse entre materiales mediante fricción, contacto o inducción.
            p.mb-3 <strong>Ejemplo:</strong> peine sobre el pelo seco.
            p.mb-2 El peine gana electrones &rarr; carga negativa.
            p.mb-3 El cabello pierde electrones &rarr; carga positiva.
            p.mb-0 <strong>Resultado:</strong> se generó una transferencia por fricción.

    p.mb-4 Este comportamiento explica fenómenos esenciales en el análisis de circuitos, ya que el movimiento de cargas, principalmente electrones, es lo que da origen a la corriente eléctrica.
    
    .container.justify-content-center.align-items-center.mb-5
      .col-lg-12
        .titulo-con-imagen.mb-5(data-aos="fade-right")
          .titulo-con-imagen__fondo
            img.titulo-con-imagen__imagen(src="@/assets/curso/tema1/img14.svg")
            h3.titulo-con-imagen__texto Unidades de carga eléctrica
   
    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-md-4.col-lg-3.mb-4.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/img18.png", data-aos="zoom-in")
      .col-lg-9
        .tarjeta.bg-color-1.p-3.mb-3
          p.mb-0 En el Sistema Internacional (SI), la unidad de carga es el coulomb (C). Esta unidad permite cuantificar de forma práctica la cantidad de carga que se desplaza en un conductor.

        .lista-ul.mb-3
          li
            i.fas.fa-circle-right.bg-color-17
            | Un electrón tiene una carga aproximada de –1.6 × 10⁻¹⁹ C.
          li
            i.fas.fa-circle-right.bg-color-17
            | Un protón tiene la misma magnitud de carga, pero positiva.

        p.mb-0 Estos valores sirven como base para comprender cómo se generan y mueven las cargas en sistemas eléctricos reales.
    .row.justify-content-center.align-items-center.mb-5
      .col-md-12.col-lg-12
        .titulo-sexto.color-acento-contenido.mb-4
          h5 Tabla 3.
          span Valores de carga eléctrica
        .tabla-a.color-acento-contenido
          table
            caption Nota. Adaptado de MIT Open Course Ware, Electromagnetism Updates (2023).
            thead
              tr
                th Partícula
                th Carga (C)
                th Características relevantes
            tbody
              tr
                td Electrón.
                td &ndash;1.6 &times; 10<sup>-19</sup>
                td Se desplaza con facilidad &rarr; permite el flujo eléctrico.
              tr
                td Protón.
                td +1.6 &times; 10<sup>-19</sup>
                td Define la identidad atómica.
              tr
                td Neutrón.
                td 0
                td Aporta estabilidad nuclear.


    .container.justify-content-center.align-items-center.mb-5
      .col-lg-12
        .titulo-con-imagen.mb-5(data-aos="fade-right")
          .titulo-con-imagen__fondo
            img.titulo-con-imagen__imagen(src="@/assets/curso/tema1/img14.svg")
            h3.titulo-con-imagen__texto Ley de interacción entre cargas


    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-md-4.col-lg-3.mb-4.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/img19.svg", data-aos="zoom-in")
      .col-lg-9
        p.mb-3 La fuerza que actúa entre dos cargas depende de:
        .lista-ul.mb-3
          li
            i.fas.fa-circle-right.bg-color-17
            | La magnitud de cada carga.
          li
            i.fas.fa-circle-right.bg-color-17
            | La distancia entre ellas.
          li
            i.fas.fa-circle-right.bg-color-17
            | El tipo de carga involucrada.
        
        .tarjeta.bg-color-1.p-3.mb-0
          p.mb-0 Entre más cerca estén las cargas, mayor es la fuerza eléctrica; y entre mayor sea su magnitud, más intensa será la interacción. Esta ley, revisada en materiales educativos recientes, permite explicar la formación del campo eléctrico (Khan Academy, 2023).

    .container.justify-content-center.align-items-center.mb-5
      .col-lg-12
        .titulo-con-imagen.mb-5(data-aos="fade-right")
          .titulo-con-imagen__fondo
            img.titulo-con-imagen__imagen(src="@/assets/curso/tema1/img14.svg")
            h3.titulo-con-imagen__texto Concepto de campo eléctrico

    .row.justify-content-center.align-items-center.mb-4
      .col-12.col-md-4.col-lg-3.mb-4.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/img20.svg", data-aos="zoom-in")
      .col-lg-9
        .tarjeta.bg-color-1.p-4.mb-3
          .row
            .col
              p.mb-0 El campo eléctrico es una magnitud física que describe la influencia que una carga ejerce sobre otras en su entorno. Se define como la fuerza eléctrica que experimentaría una carga de prueba positiva colocada en un punto, dividida por el valor de dicha carga. Es decir, representa un campo de fuerzas invisibles que rodea a una carga y determina cómo interactuarán otras cargas al acercarse.
            .col-auto
              figure
                img(src="@/assets/curso/tema1/img21.svg", data-aos="zoom-in")

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        .row.align-items-center
          .col-lg-auto.mb-lg-0
            img.d-none.d-lg-flex(src="@/assets/curso/tema1/img13.svg", style="").mx-auto
          .col-lg
            p.mb-0 Las líneas del campo eléctrico salen de las cargas positivas y entran en las negativas, lo que explica que las cargas del mismo signo se repelan y las de signo opuesto se atraigan. Al representar varios campos simultáneamente, se aplica el principio de superposición, según el cual el campo total es la suma vectorial de los campos generados por cada carga. Por esta razón, las líneas de campo no pueden cruzarse, ya que cada punto del espacio solo puede tener una dirección definida para el campo eléctrico ( IEEE Educational Resourses, 2024)





    p.mb-4 El campo eléctrico es más intenso en el vacío que en medios materiales, donde las propiedades dieléctricas lo atenúan.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        .tarjeta.bg-color-1.p-4.mb-3
          .row.justify-content-center.align-items-center
            .col-auto.mx-auto
              figure
                img(src="@/assets/curso/tema1/img02.svg", data-aos="zoom-in")
            .col
              p.mb-0 La intensidad del campo eléctrico expresa cuánta fuerza actúa sobre una carga de prueba positiva en un punto y se mide en newton por coulomb (N/C). Además de explicar fuerzas de atracción y repulsión, este concepto permite predecir trayectorias de partículas, diseñar dispositivos electrónicos, comprender fenómenos electromagnéticos y apoyar aplicaciones en ingeniería, geofísica y procesos industriales.
        






    .row.justify-content-center.align-items-center.mb-5
      .col-md-12.col-lg-12
        .titulo-sexto.color-acento-contenido.mb-4
          h5 Tabla 4.
          span Campo eléctrico, fórmulas y aplicación
        .tabla-a.color-acento-contenido
          table
            caption Nota. SENA, 2026.
            thead
              tr
                th Concepto
                th Fórmula
                th Aplicación
            tbody
              tr
                td Definición general.
                td E ⃗=F ⃗/q
                td Describe la intensidad del campo en cualquier punto.
              tr
                td Carga puntual.
                td E ⃗=k Q/r<sup>2</sup> r ̂
                td Campo generado por cargas aisladas.
              tr
                td Campo uniforme.
                td E=V/d
                td Placas paralelas, tableros, equipos eléctricos.
              tr
                td Fuerza eléctrica.
                td F ⃗=qE ⃗
                td Cálculo de la interacción carga–campo.

    .container.justify-content-center.align-items-center.mb-5
      .col-lg-12
        .titulo-con-imagen.mb-5(data-aos="fade-right")
          .titulo-con-imagen__fondo
            img.titulo-con-imagen__imagen(src="@/assets/curso/tema1/img14.svg")
            h3.titulo-con-imagen__texto Relación entre carga, campo y corriente

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-9.mb-4.mb-lg-0
        .tarjeta.bg-color-4.p-3.mb-3
          p.mb-0 Cuando se conecta una fuente eléctrica a un circuito, se establece un campo eléctrico dentro del conductor. Este campo actúa sobre los electrones y provoca su movimiento ordenado, lo que llamamos corriente eléctrica.
        
        p.mb-3 El proceso ocurre en tres pasos:
        .lista-ul.mb-3
          li
            i.fas.fa-circle-right.bg-color-17
            | La fuente crea un campo eléctrico.
          li
            i.fas.fa-circle-right.bg-color-17
            | El campo hace que los electrones se muevan.
          li
            i.fas.fa-circle-right.bg-color-17
            | El movimiento continuo produce corriente.
        
        p.mb-0 Este encadenamiento conceptual es clave para el estudio de la Ley de Ohm y el análisis de circuitos básicos.

      .col-12.col-md-4.col-lg-3
        figure
          img(src="@/assets/curso/tema1/img22.png", data-aos="zoom-in")

    p.mb-4 Para facilitar la comprensión de esta temática, se describen a continuación algunos ejemplos:

    //- .bg-full-width.bg-color-1
    //-   .row.justify-content-center.align-items-center.mb-5
    //-     .col-lg-12
    //-       .titulo-con-imagen.mb-5(data-aos="fade-right")
    //-         .titulo-con-imagen__fondo
    //-           img.titulo-con-imagen__imagen(src="@/assets/curso/tema1/img14.svg")
    //-           h3.titulo-con-imagen__texto Relación entre carga, campo y corriente


    .bg-full-width.bg-fondo-1.mb-5.p-4.p-lg-5
      SlyderA(tipo="b").bg-color-white.p-2.p-lg-4.tarjeta
        .row.justify-content-center.align-items-center.p-4
          .col-lg-6.mb-4.mb-lg-0
            h4 Prospección de agua subterránea.
            p.mb-0 Las mediciones del campo eléctrico de los cuerpos de agua subterránea sirven para mapear las características del subsuelo, teniendo en cuenta la variación de la resistividad eléctrica entre el acuífero y la roca almacén.
          .col-lg-6
            figure
              img(src='@/assets/curso/tema1/img23.png', alt='Prospección de agua subterránea')

        .row.justify-content-center.align-items-center.p-4
          .col-lg-6.mb-4.mb-lg-0
            h4 Detección de fallas geológicas.
            p.mb-0 Las zonas de fractura en la corteza terrestre, donde se produce el desplazamiento de bloques de roca, poseen sustanciales diferencias en los valores de resistividad eléctrica. Conocer su ubicación y distribución facilita las labores de exploración de recursos minerales y previenen riesgos geológicos, como los terremotos.
          .col-lg-6
            figure
              img(src='@/assets/curso/tema1/img24.png', alt='Detección de fallas geológicas')

        .row.justify-content-center.align-items-center.p-4
          .col-lg-6.mb-4.mb-lg-0
            h4 Monitoreo de la contaminación de suelos y aguas subterráneas.
            p.mb-3 Los campos eléctricos también se utilizan en la monitorización de la contaminación de suelos y aguas subterráneas. Una vez más, la técnica de resistividad eléctrica ayuda a identificar la distribución y extensión de contaminantes, como productos químicos o metales pesados.
            p.mb-0 Al realizar mediciones de en diferentes puntos de un área contaminada, es posible mapear la distribución espacial de los contaminantes y evaluar su impacto ambiental.
          .col-lg-6
            figure
              img(src='@/assets/curso/tema1/img25.png', alt='Monitoreo de la contaminación')


    separador

    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.3 Corriente eléctrica: AC y DC

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-md-4.col-lg-3
        figure
          img(src="@/assets/curso/tema1/img26.png", data-aos="zoom-in")
      .col-lg-9.mb-4.mb-lg-0
        .bg-color-1.p-4.mb-3
          .row
            .col-auto
              figure
                img(src="@/assets/curso/tema1/img26_1.svg", data-aos="zoom-in")
            .col
              p.mb-0 La corriente eléctrica es uno de los conceptos fundamentales para comprender cómo funcionan los circuitos y los sistemas eléctricos presentes en la industria, el sector residencial y los dispositivos electrónicos modernos. En términos simples, la corriente corresponde al movimiento ordenado de electrones a través de un material conductor cuando existe una diferencia de potencial entre dos puntos. 

        p.mb-0 Entender cómo se comporta su flujo, en qué dirección se desplaza y cómo varía según el tipo de corriente permite al aprendiz interpretar mediciones, analizar circuitos y tomar decisiones técnicas fundamentadas. Las tecnologías contemporáneas continuamente integran sistemas basados tanto en corriente alterna como en corriente continua, por lo que diferenciar sus características facilita una formación pertinente y alineada con las necesidades actuales del sector eléctrico.
        
    .container.justify-content-center.align-items-center.mb-5
      .col-lg-12
        .titulo-con-imagen.mb-5(data-aos="fade-right")
          .titulo-con-imagen__fondo
            img.titulo-con-imagen__imagen(src="@/assets/curso/tema1/img14.svg")
            h3.titulo-con-imagen__texto ¿Qué es la corriente eléctrica?



    .row.justify-content-center.align-items-center.mb-5
      .col-lg-9.mb-4.mb-lg-0
        p.mb-2 La corriente eléctrica se define como el flujo de cargas eléctricas que se desplazan a través de un conductor.
        p.mb-2 Este movimiento es posible cuando se aplica una diferencia de potencial (voltaje).

        .lista-ul.mb-3
          li
            i.fas.fa-circle-right.bg-color-17
            | En conductores metálicos, las cargas que se mueven son electrones.
          li
            i.fas.fa-circle-right.bg-color-17
            | La corriente se mide en amperios (A).
          li
            i.fas.fa-circle-right.bg-color-17
            | El instrumento para medirla es el amperímetro, que se conecta en serie.
        
        .tarjeta.bg-color-4.p-3.mb-0
          p.mb-0 Aunque los electrones avanzan lentamente, la señal eléctrica viaja casi a la velocidad de la luz debido a la interacción colectiva entre las partículas.

      .col-12.col-md-4.col-lg-3
        figure
          img(src="@/assets/curso/tema1/img27.png", data-aos="zoom-in")

    .row.justify-content-center.align-items-center.mb-5
      p.mb-4 La corriente eléctrica puede clasificarse en dos formas principales: 
      .col-md-8.col-lg-4
        figure
          img(src="@/assets/curso/tema1/img28.png", data-aos="zoom-in")
      .col-md-12.col-lg-8
        .row.justify-content-center
          .col-xl-6.col-lg-6.col-md-6.col-12.mb-4.mb-lg-0
            .tarjeta.bg-color-white.box-shadow.p-0.h-100
              figure
                img(src="@/assets/curso/tema1/img29.png", alt="Corriente continua")
              .p-4
                .p-3.text-center.mb-3(style="background-color: #1254C7; border-radius: 4px;")
                  h5.text-white.mb-0 Corriente continua (DC)
                p.mb-2 La corriente continua (Direct Current) se caracteriza por:
                ul.lista-ul
                  li
                    i.fas.fa-circle-right.bg-color-17
                    | Fluye en una sola dirección.
                  li
                    i.fas.fa-circle-right.bg-color-17
                    | Mantiene un valor de voltaje estable en el tiempo.
                  li
                    i.fas.fa-circle-right.bg-color-17
                    | Es ideal en dispositivos electrónicos y sistemas de almacenamiento energético.

          .col-xl-6.col-lg-6.col-md-6.col-12.mb-4.mb-lg-0
            .tarjeta.bg-color-white.box-shadow.p-0.h-100
              figure
                img(src="@/assets/curso/tema1/img30.png", alt="Corriente alterna")
              .p-4
                .p-3.text-center.mb-3(style="background-color: #1254C7; border-radius: 4px;")
                  h5.text-white.mb-0 Corriente alterna (AC)
                p.mb-2 La corriente alterna (Alternating Current):
                ul.lista-ul
                  li
                    i.fas.fa-circle-right.bg-color-17
                    | Cambia de dirección periódicamente.
                  li
                    i.fas.fa-circle-right.bg-color-17
                    | Su forma de onda suele ser sinusoidal.
                  li
                    i.fas.fa-circle-right.bg-color-17
                    | Se utiliza en hogares, industrias y redes de distribución.

    .row.justify-content-center.align-items-center.mb-5
      .col-md-12.col-lg-12
        .titulo-sexto.color-acento-contenido.mb-4
          h5 Tabla 5.
          span Fuentes típicas de corriente continua (DC) y corriente alterna (AC)
        .tabla-a.color-acento-contenido
          table
            caption Nota. SENA, 2026.
            thead
              tr
                th Tipo de corriente
                th Fuentes típicas y/o características principales
                th Aplicaciones prácticas
            tbody
              tr
                td Corriente continua (DC).
                td(style="text-align: left;")
                  ul.lista-ul
                    li
                      i.fas.fa-circle-right.bg-color-17
                      | Baterías.
                    li
                      i.fas.fa-circle-right.bg-color-17
                      | Pilas.
                    li
                      i.fas.fa-circle-right.bg-color-17
                      | Paneles solares.  
                    li
                      i.fas.fa-circle-right.bg-color-17
                      | Fuentes de alimentación DC.
                td(style="text-align: left;")
                  ul.lista-ul
                    li
                      i.fas.fa-circle-right.bg-color-17
                      | Carga de dispositivos móviles.
                    li
                      i.fas.fa-circle-right.bg-color-17
                      | Circuitos electrónicos de control.
                    li
                      i.fas.fa-circle-right.bg-color-17
                      | Equipos de automatización.
                    li
                      i.fas.fa-circle-right.bg-color-17
                      | Sistemas de energía renovable.
              tr
                td Corriente alterna (AC).
                td(style="text-align: left;")
                  ul.lista-ul
                    li
                      i.fas.fa-circle-right.bg-color-17
                      | Su frecuencia típica es de 50 Hz o 60 Hz.
                    li
                      i.fas.fa-circle-right.bg-color-17
                      | Permite transmisión a largas distancias con menores pérdidas.
                    li
                      i.fas.fa-circle-right.bg-color-17
                      | Facilita el uso de transformadores para elevar o reducir tensión.
                td(style="text-align: left;")
                  ul.lista-ul
                    li
                      i.fas.fa-circle-right.bg-color-17
                      | Iluminación doméstica.
                    li
                      i.fas.fa-circle-right.bg-color-17
                      | Motores eléctricos.
                    li
                      i.fas.fa-circle-right.bg-color-17
                      | Electrodomésticos.
                    li
                      i.fas.fa-circle-right.bg-color-17
                      | Sistemas industriales de potencia.

    separador

    #t_1_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.4 Magnitudes eléctricas básicas: tensión, corriente, resistencia, potencia


    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        .row.align-items-center
          .col-lg-auto.mb-lg-0
            img.d-none.d-lg-flex(src="@/assets/curso/tema1/img13.svg", style="").mx-auto
          .col-lg
            p.mb-0 Las magnitudes eléctricas básicas constituyen el lenguaje fundamental con el que se describen y analizan los circuitos eléctricos. Comprender qué es el voltaje, cómo mide la corriente, por qué existe la resistencia en los materiales y de qué manera se calcula la potencia permite interpretar mediciones, diseñar circuitos funcionales y prever el comportamiento de un sistema eléctrico. Estas magnitudes se relacionan entre sí mediante leyes universales como la Ley de Ohm, lo que facilita el análisis matemático y experimental. En este apartado, el aprendiz podrá identificar estas magnitudes, entender su propósito y aplicarlas en situaciones reales de trabajo.

    .container.justify-content-center.align-items-center.mb-5
      .col-lg-12
        .titulo-con-imagen.mb-5(data-aos="fade-right")
          .titulo-con-imagen__fondo
            img.titulo-con-imagen__imagen(src="@/assets/curso/tema1/img14.svg")
            h3.titulo-con-imagen__texto Tensión o voltaje (V)

    .row.justify-content-center.align-items-center.mb-4
      .col-12.col-md-4.col-lg-3
        figure
          img(src="@/assets/curso/tema1/img31.svg", data-aos="zoom-in")
      .col-lg-9.mb-4.mb-lg-0
        .tarjeta.bg-color-4.p-3.mb-3
          p.mb-0 En el Sistema Internacional (SI), la unidad de carga es el coulomb (C). Esta unidad permite cuantificar de forma práctica la cantidad de carga que se desplaza en un conductor.

        .lista-ul.mb-3
          li
            i.fas.fa-circle-right.bg-color-17
            | Unidad: voltio (V).
          li
            i.fas.fa-circle-right.bg-color-17
            | Instrumento: voltímetro.
          li
            i.fas.fa-circle-right.bg-color-17
            | Se mide en paralelo.

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-12
        .bg-color-1.p-4.mb-3
          .row.align-items-center
            .col-auto
              figure
                img(src="@/assets/curso/tema1/img32.svg", data-aos="zoom-in")
            .col
              p.mb-3 Una analogía práctica para comprender mejor el concepto de tensión equipararlo a la presión del agua en una tubería:
              ul.lista-ul.mb-0
                li
                  i.fas.fa-circle-right.bg-color-17
                  | mayor presión → mayor movimiento de agua
                li
                  i.fas.fa-circle-right.bg-color-17
                  | mayor voltaje → mayor movimiento de electrones.


    .container.justify-content-center.align-items-center.mb-5
      .col-lg-12
        .titulo-con-imagen.mb-5(data-aos="fade-right")
          .titulo-con-imagen__fondo
            img.titulo-con-imagen__imagen(src="@/assets/curso/tema1/img14.svg")
            h3.titulo-con-imagen__texto Corriente eléctrica (I)

    .row.justify-content-center.align-items-center.mb-4
      .col-12.col-md-4.col-lg-3
        figure
          img(src="@/assets/curso/tema1/img33.svg", data-aos="zoom-in")
      .col-lg-9.mb-4.mb-lg-0
        p.mb-3 La corriente es la cantidad de carga que circula por un conductor en un segundo.
        .lista-ul.mb-3
          li
            i.fas.fa-circle-right.bg-color-17
            | <b>Unidad: </b> amperio (A).
          li
            i.fas.fa-circle-right.bg-color-17
            | <b>Instrumento: </b> amperímetro.
          li
            i.fas.fa-circle-right.bg-color-17
            | Se mide en serie.
        
        .tarjeta.bg-color-4.p-3.mb-0
          p.mb-0 La corriente puede ser AC o DC, dependiendo del tipo de fuente.

    .container.justify-content-center.align-items-center.mb-5
      .col-lg-12
        .titulo-con-imagen.mb-5(data-aos="fade-right")
          .titulo-con-imagen__fondo
            img.titulo-con-imagen__imagen(src="@/assets/curso/tema1/img14.svg")
            h3.titulo-con-imagen__texto Resistencia eléctrica (R)

    .row.justify-content-center.align-items-center.mb-4
      .col-12.col-md-4.col-lg-3
        figure
          img(src="@/assets/curso/tema1/img34.svg", data-aos="zoom-in")
      .col-lg-9.mb-4.mb-lg-0
        p.mb-3 Es la oposición que presentan los materiales al paso de la corriente.
        .lista-ul.mb-3
          li
            i.fas.fa-circle-right.bg-color-17
            | <b>Unidad: </b> Ohmio (&Omega;).
          li
            i.fas.fa-circle-right.bg-color-17
            | <b>Instrumento: </b> Óhmetro.
          li
            i.fas.fa-circle-right.bg-color-17
            | La resistencia depende de: <br>
          li
            ul
              li
                i.lista-ul__vineta 
                | Material
              li
                i.lista-ul__vineta 
                | Temperatura
              li
                i.lista-ul__vineta 
                | Longitud
              li
                i.lista-ul__vineta 
                | Sección transversal
        
        .tarjeta.bg-color-2.p-3.mb-0(style="background-color: #E2F6F6")
          p.mb-0 <b>Ejemplo simple:</b> un filamento de bombillo tiene alta resistencia &rarr; produce luz y calor.

    .container.justify-content-center.align-items-center.mb-5
      .col-lg-12
        .titulo-con-imagen.mb-5(data-aos="fade-right")
          .titulo-con-imagen__fondo
            img.titulo-con-imagen__imagen(src="@/assets/curso/tema1/img14.svg")
            h3.titulo-con-imagen__texto Potencia eléctrica ( P )

    .row.justify-content-center.align-items-center.mb-4
      .col-12.col-md-4.col-lg-3
        figure
          img(src="@/assets/curso/tema1/img35.svg", data-aos="zoom-in")
      .col-lg-9.mb-4.mb-lg-0
        p.mb-3 La potencia indica la energía eléctrica consumida o entregada por un dispositivo en un tiempo determinado.
        .lista-ul.mb-3
          li
            i.fas.fa-circle-right.bg-color-17
            | <b>Unidad: </b> Vatio (W).
        
        .tarjeta.bg-color-4.p-3.mb-0
          p.mb-2 Fórmulas básicas:
          ul.lista-ul.mb-0
            li
              i.fas.fa-circle-right.bg-color-17
              | P = V &times; I
            li
              i.fas.fa-circle-right.bg-color-17
              | P = I<sup>2</sup> &times; R
            li
              i.fas.fa-circle-right.bg-color-17
              | P = V<sup>2</sup> / R

    .row.justify-content-center.align-items-center.mb-0
      .col-md-12.col-lg-12
        .titulo-sexto.color-acento-contenido.mb-4
          h5 Tabla 6.
          span Resumen de magnitudes
        .tabla-a.color-acento-contenido
          table
            caption Nota. SENA, 2026.
            thead
              tr
                th Magnitud
                th Símbolo
                th Unidad
                th Instrumento
                th Función
            tbody
              tr
                td Tensión.
                td V
                td Voltio (V).
                td Voltímetro.
                td Impulsa el movimiento eléctrico.
              tr
                td Corriente.
                td I
                td Amperio (A).
                td Amperímetro.
                td Indica flujo de electrones.
              tr
                td Resistencia.
                td R
                td Ohmio (&Omega;).
                td Óhmetro.
                td Limita el paso de corriente.
              tr
                td Potencia.
                td P
                td Vatio (W).
                td Wattímetro.
                td Mide consumo o entrega de energía.

</template>
<script>
export default {
  name: 'Tema1',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
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
