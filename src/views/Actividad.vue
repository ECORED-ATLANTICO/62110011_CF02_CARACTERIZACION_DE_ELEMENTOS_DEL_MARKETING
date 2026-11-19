<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      // Para cuestionario usar: <ActividadController :cuestionario="cuestionario"/>
      // Para parrafo usar: <ActividadController :parrafo="parrafo"/>
      #Actividad                
      <ActividadController :cuestionario="cuestionario"/>
  
  </template>

<script>
import ActividadController from '@ecored-sena/boulder-kit/plugin/components/actividad/ActividadController.vue'

export default {
  name: 'ActividadDidactica',
  components: {
    ActividadController,
  },
  data: () => ({
    cuestionario: {
      tema: 'Gestión y evaluación de estrategias de <em>marketing</em>',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> analizar la gestión y evaluación de las estrategias de <em>marketing</em> mediante la aplicación de herramientas de planeación, medición y control para apoyar la toma de decisiones comerciales.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO',
      preguntas: [
        {
          id: 1,
          texto:
            'Una empresa de alimentos desea lanzar una nueva línea de snacks saludables. Antes de invertir en producción, reúne a colaboradores de diferentes áreas para proponer alternativas, analizar tendencias de consumo y seleccionar las ideas con mayor potencial comercial. ¿Qué proceso está desarrollando principalmente la organización?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Planeación presupuestal del mercadeo.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Proceso de ideación para generar y seleccionar propuestas de valor.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Auditoría de mercadeo para evaluar resultados financieros.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Gestión de marca para rediseñar la identidad visual de la empresa.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Identificaste que la organización desarrolla un proceso de ideación para generar, analizar y seleccionar propuestas antes de llevarlas al mercado.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 2,
          texto:
            'Una empresa tecnológica presenta a un grupo de clientes una versión funcional de una nueva aplicación para identificar fallas y recoger sugerencias antes de su lanzamiento. Esta actividad corresponde a:',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Segmentación del mercado.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Posicionamiento de marca.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Prototipado para validar una propuesta de valor.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Auditoría de mercadeo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Reconociste que el prototipado permite validar una propuesta antes de su implementación definitiva.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 3,
          texto:
            'Una empresa identifica que un grupo de consumidores prioriza productos biodegradables y está dispuesto a pagar un mayor precio por ellos. ¿Qué información está utilizando principalmente para diseñar su propuesta de valor?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El conocimiento del consumidor y sus preferencias.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'El presupuesto anual de la organización.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'La estructura organizacional de la empresa.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'El cronograma de auditoría interna.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Comprendiste que conocer las necesidades y preferencias del consumidor facilita la creación de propuestas de valor competitivas.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 4,
          texto:
            'Una organización registra todas las interacciones con sus clientes para conocer sus preferencias, personalizar las ofertas comerciales y fortalecer la fidelización. ¿Qué estrategia está implementando?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Investigación documental.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: '<em>Marketing</em> sensorial.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Gestión de relaciones con los clientes (CRM).',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Planeación financiera del mercadeo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Identificaste que el CRM permite administrar la relación con los clientes para mejorar su experiencia y fortalecer la fidelización.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 5,
          texto:
            'Una empresa deportiva mantiene un mismo estilo de comunicación, colores corporativos y promesa de valor en todas sus campañas publicitarias y puntos de venta. ¿Qué objetivo busca alcanzar principalmente?',
          imagen: '@/assets/actividad/imagen5.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Incrementar el número de proveedores.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Fortalecer la gestión y el reconocimiento de la marca.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Reducir los costos de producción.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Sustituir el proceso de investigación de mercados.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Reconociste que la gestión de marca busca construir una identidad sólida y generar reconocimiento y confianza en los consumidores.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 6,
          texto:
            'Una empresa de juguetes invita a sus clientes a proponer nuevos diseños mediante una plataforma digital. Las ideas con mayor aceptación son evaluadas para convertirse en nuevos productos. ¿Qué estrategia de <em>marketing</em> está aplicando la organización?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Gestión presupuestal.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Auditoría de mercadeo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Segmentación geográfica.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Co-creación con los clientes.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Identificaste que la organización involucra a los clientes en el desarrollo de nuevos productos mediante un proceso de co-creación.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 7,
          texto:
            'Una empresa de ropa analiza el comportamiento de sus visitantes en la tienda virtual y adapta automáticamente las recomendaciones según las prendas consultadas. ¿Qué característica del <em>marketing</em> digital se evidencia principalmente?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Producción sostenible.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Personalización del mensaje basada en datos del usuario.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Investigación financiera.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Planeación presupuestal.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Reconociste que el <em>marketing</em> digital permite personalizar la comunicación utilizando información sobre el comportamiento del consumidor.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 8,
          texto:
            'Una empresa reemplaza los empaques plásticos de un producto por materiales reciclables y comunica esta decisión en sus campañas comerciales. ¿Cuál es el principal enfoque de esta estrategia?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Incrementar el número de distribuidores.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Reducir el presupuesto publicitario.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Implementar acciones de mercadeo ecológico.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Mejorar el control financiero.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Identificaste una estrategia de mercadeo ecológico orientada a disminuir el impacto ambiental y fortalecer la propuesta de valor.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 9,
          texto:
            'Una organización desarrolla programas de formación para comunidades, promueve el bienestar de sus colaboradores y publica periódicamente informes sobre sus impactos sociales y ambientales. Estas acciones corresponden principalmente a:',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Responsabilidad social empresarial.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Proceso de ideación.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Investigación de mercados.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Planeación estratégica de ventas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Comprendiste que la responsabilidad social integra acciones dirigidas al bienestar de los grupos de interés y al desarrollo sostenible.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 10,
          texto:
            'Una empresa de cosméticos compara el presupuesto ejecutado con las ventas obtenidas para determinar si la inversión realizada en publicidad fue rentable. ¿Qué aspecto está evaluando principalmente?',
          imagen: '@/assets/actividad/imagen5.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La estructura organizacional.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'El rendimiento financiero de las estrategias de <em>marketing</em>.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'La segmentación del mercado.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'El diseño del logotipo corporativo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Identificaste que la organización evalúa el rendimiento financiero para determinar si la inversión en <em>marketing</em> produjo los resultados esperados.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 11,
          texto:
            'Una empresa decide asignar recursos específicos para campañas digitales, estudios de mercado y actividades promocionales antes de iniciar el siguiente año. ¿Qué herramienta está utilizando para organizar estas inversiones?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Indicadores de resultado.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'CRM (Customer Relationship Management).',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Gestión de marca.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Presupuesto de <em>marketing</em>.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Identificaste que el presupuesto permite planificar y controlar los recursos destinados a las estrategias de <em>marketing</em>.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 12,
          texto:
            'Una organización calcula periódicamente el porcentaje de visitantes que realizan una compra después de ingresar a su tienda virtual. ¿Qué tipo de información está obteniendo?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Un indicador de resultado relacionado con la conversión.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Un protocolo de responsabilidad social.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Un proceso de ideación.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Un componente del CRM.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Reconociste que la tasa de conversión es un indicador utilizado para evaluar la efectividad de las estrategias digitales.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 13,
          texto:
            'Antes de lanzar una nueva campaña comercial, una empresa revisa sus objetivos, analiza los resultados obtenidos el año anterior e identifica oportunidades de mejora. ¿Qué proceso está desarrollando?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Investigación de mercados.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Auditoría de mercadeo.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Segmentación psicográfica.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Mercadeo ecológico.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Identificaste que la auditoría de mercadeo permite evaluar las estrategias implementadas y formular acciones de mejora.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 14,
          texto:
            'Una empresa detecta que el costo por adquirir nuevos clientes aumentó durante el último trimestre y decide ajustar sus campañas digitales. ¿Qué característica demuestra esta decisión?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Eliminación del presupuesto de <em>marketing</em>.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Sustitución del proceso de innovación.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Utilización de indicadores para apoyar la toma de decisiones.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Cambio en la estructura organizacional.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Comprendiste que los indicadores permiten evaluar resultados y orientar decisiones de mejora.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 15,
          texto:
            'Una empresa revisa periódicamente si las actividades previstas en su plan de mercadeo se ejecutaron conforme al cronograma y al presupuesto establecido. ¿Cuál es el propósito principal de esta revisión?',
          imagen: '@/assets/actividad/imagen5.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Elaborar nuevos productos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Controlar y evaluar el cumplimiento del plan de mercadeo.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Incrementar automáticamente las ventas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Sustituir el análisis del mercado.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Reconociste que el seguimiento permite verificar el cumplimiento de las acciones y realizar ajustes cuando sea necesario.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 16,
          texto:
            'Una empresa utiliza un tablero de control donde visualiza indicadores de ventas, conversión y satisfacción del cliente para apoyar las decisiones de la gerencia. ¿Qué beneficio obtiene principalmente?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Automatizar la producción.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Centralizar información para facilitar el seguimiento del desempeño.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Eliminar la investigación de mercados.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Sustituir el presupuesto anual.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Identificaste que los tableros de control facilitan el análisis y seguimiento de los principales indicadores de gestión.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 17,
          texto:
            'Una organización concluye una auditoría de mercadeo y establece un plan para corregir las debilidades detectadas. ¿Cuál es la siguiente etapa del proceso?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Seguimiento a las acciones de mejora implementadas.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Definir nuevamente el mercado objetivo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Cambiar la identidad de la marca.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Suspender la medición de indicadores.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Comprendiste que toda auditoría debe finalizar con el seguimiento a las acciones de mejora para verificar su efectividad.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 18,
          texto:
            'Una empresa observa que una campaña obtuvo muchas visitas al sitio web, pero pocas ventas. ¿Qué indicador debería analizar primero para comprender esta situación?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Tasa de conversión.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Número de proveedores.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Organigrama institucional.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Inventario disponible.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Identificaste que la tasa de conversión permite evaluar cuántos visitantes realizan la acción esperada.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 19,
          texto:
            'Una empresa incorpora inteligencia artificial para analizar el comportamiento de compra de sus clientes y predecir futuras tendencias del mercado. ¿Qué ventaja obtiene principalmente?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Reducir automáticamente el precio de sus productos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Eliminar el presupuesto de <em>marketing</em>.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Sustituir completamente el talento humano.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Anticipar decisiones mediante el análisis de datos.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Reconociste que la inteligencia artificial facilita el análisis predictivo y fortalece la toma de decisiones estratégicas.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 20,
          texto:
            'Después de evaluar los resultados de una estrategia de <em>marketing</em>, una empresa decide conservar las acciones que generaron mayor retorno, ajustar las de menor impacto e incorporar nuevas alternativas para el siguiente período. ¿Qué principio está aplicando?',
          imagen: '@/assets/actividad/imagen5.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Mejoramiento continuo basado en la evaluación de resultados.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Sustitución del proceso de planeación.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Eliminación del análisis financiero.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Segmentación demográfica del mercado.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Comprendiste que la evaluación de resultados permite implementar acciones de mejora continua para fortalecer el desempeño de las estrategias de <em>marketing</em>.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
      ],
      mensaje_final_aprobado:
        '¡Excelente! Lo felicito, ha superado la actividad y demuestra sólidos conocimientos sobre el componente formativo.',
      mensaje_final_reprobado:
        'No ha superado la actividad. Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
