<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
import Actividad from 'ecored-pkg-fliz/plugin/components/actividad/Actividad.vue'
export default {
  name: 'ActividadDidactica',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema:
        'Fundamentos, magnitudes, componentes y protecciones en circuitos eléctricos.',
      titulo: 'Cuestionario',
      introduccion:
        '<b>Objetivo:</b> evaluar tu apropiación sobre conceptos básicos de electricidad (átomo y carga), clasificación AC/DC, magnitudes eléctricas (V, I, R, P), materiales, componentes del circuito y funciones esenciales de protecciones, mediante preguntas de selección múltiple con única respuesta.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO.',
      preguntas: [
        {
          id: 1,
          texto:
            '¿Qué describe correctamente la dirección de la corriente convencional y el flujo de electrones?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Ambos se desplazan del polo negativo al positivo.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'La corriente convencional va del positivo al negativo y los electrones del negativo al positivo.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'La corriente convencional y los electrones circulan únicamente en corriente alterna.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Los electrones se desplazan del positivo al negativo y la corriente convencional no tiene dirección.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            '¿Cuál afirmación diferencia correctamente el comportamiento del voltaje en corriente continua (DC) y corriente alterna (AC)?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'En DC y AC el voltaje permanece constante en el tiempo.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'En DC el voltaje cambia periódicamente y en AC permanece estable.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'En AC el voltaje siempre es cero y en DC cambia de polaridad.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'En DC el voltaje se mantiene estable y en AC cambia periódicamente, usualmente de forma sinusoidal.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            '¿Cómo debe conectarse un voltímetro para medir la tensión en un elemento del circuito?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'En paralelo con el elemento cuya tensión se desea medir.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'En serie con el elemento cuya tensión se desea medir.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Entre la fuente y tierra, sin considerar el elemento.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'En cualquier punto del circuito, sin importar la conexión.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto: '¿Qué representa la resistencia eléctrica de un material?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La cantidad de energía que almacena el material.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'La velocidad con la que circulan los electrones.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'La oposición al paso de la corriente eléctrica, medida en ohmios (Ω).',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'La capacidad de producir corriente alterna.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            '¿Cuál expresión permite calcular la potencia eléctrica a partir del voltaje y la corriente?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'P = V / I',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'P = V × I',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'P = I / V',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'P = V + I',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto:
            '¿Qué relación general existe entre los electrones de valencia y el comportamiento eléctrico de los materiales?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Los materiales con 1 a 3 electrones de valencia suelen ser aislantes.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Los materiales con 5 a 8 electrones de valencia suelen ser conductores.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'El número de electrones de valencia no influye en el comportamiento eléctrico.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Los materiales con pocos electrones de valencia suelen conducir mejor, mientras los que tienen más tienden a ser aislantes.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto:
            '¿Cuál opción relaciona correctamente conductores, aislantes y semiconductores con su función?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Conductores: transportar corriente; aislantes: brindar seguridad y recubrimiento; semiconductores: controlar electrónicamente.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Conductores: impedir corriente; aislantes: amplificar señales; semiconductores: producir energía mecánica.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Conductores: almacenar carga; aislantes: transportar corriente; semiconductores: evitar todo flujo eléctrico.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Conductores, aislantes y semiconductores cumplen exactamente la misma función.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto: '¿Qué se entiende por carga en un circuito eléctrico?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'El conductor que conecta todos los elementos del circuito.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'El dispositivo destinado únicamente a interrumpir el paso de corriente.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'El dispositivo que convierte la energía eléctrica en trabajo útil, como luz, movimiento, calor o procesamiento.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'La protección que actúa exclusivamente ante una fuga a tierra.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto:
            '¿Qué función cumplen los interruptores o dispositivos de control en un circuito?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Aumentar permanentemente el valor de la corriente.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Convertir corriente continua en corriente alterna.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Medir la resistencia de todos los elementos conectados.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Abrir o cerrar el circuito para habilitar o interrumpir el paso de corriente.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto:
            '¿Ante qué condición actúa principalmente un interruptor diferencial (RCD)?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Ante cualquier aumento de temperatura del conductor.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Ante corrientes de fuga a tierra o desequilibrios entre los conductores activos.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Exclusivamente ante una sobrecorriente por sobrecarga.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Únicamente cuando disminuye la tensión de alimentación.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 11,
          texto:
            '¿Qué función cumplen los fusibles y los interruptores automáticos en un circuito?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Mantener constante la tensión ante cualquier variación.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Detectar exclusivamente fugas a tierra.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Abrir el circuito cuando la corriente supera el valor nominal previsto.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Aumentar la potencia disponible para las cargas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 12,
          texto:
            '¿Qué condición busca controlar un relé térmico en la protección de motores?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Sobrecargas sostenidas que pueden elevar la temperatura del bobinado.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Fugas a tierra de muy baja intensidad exclusivamente.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Variaciones de frecuencia sin aumento de corriente.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Cambios de polaridad propios de la corriente continua.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
