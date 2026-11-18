<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 6
      h1 Evaluación y control del plan de mercadeo
    
    .bg-img--10.p-4.rounded-4
        .row.justify-content-center.align-items-center
          .col-lg-2.col-xl-1.d-none.d-lg-block.px-xl-0 
            figure
              img.imgw-60.mb-4.mb-lg-0(src="@/assets/curso/tema6/1.svg", alt="" data-aos="zoom-in-down")
          .col-lg-10.col-xl-11
            p.mb-0 La evaluación y el control permiten determinar si las estrategias de #[em marketing] cumplen los objetivos comerciales establecidos por la organización. Para ello, se utilizan indicadores que facilitan el seguimiento del desempeño, la medición de los resultados y la identificación de oportunidades de mejora. Asimismo, la auditoría de mercadeo constituye una herramienta que permite evaluar integralmente las acciones ejecutadas, optimizar el uso de los recursos y fortalecer la toma de decisiones orientada al mejoramiento continuo.

    separador
    #t_6_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 6.1 Concepto de indicadores de resultado 

    .row.justify-content-center.mb-5.align-items-center
      .col-lg-1.d-none.d-lg-block
        figure
          img.mb-4.mb-lg-0(src='@/assets/curso/tema1/4.png' alt='')
      .col-lg-11
        p Los indicadores de resultado son medidas cuantitativas o cualitativas que permiten evaluar el desempeño de las estrategias de marketing y verificar el grado de cumplimiento de los objetivos organizacionales. Estos indicadores facilitan el seguimiento de las actividades desarrolladas y proporcionan información confiable para apoyar la toma de decisiones
        p.mb-0 Las organizaciones utilizan indicadores para medir variables como: 

    .row.justify-content-center.align-items-center
      .col-lg-8
        SlyderF(columnas="col-lg-6")
          .tarjeta.bg-cards.p-4.pt-5
            .row.justify-content-center.mb-3
              .col-6.col-sm-4.col-xl-5
                img.imgw-95.mb-3(src='@/assets/curso/tema6/2.svg' alt='')
            h5.mb-3.text-center Crecimiento de las ventas 
            p.mb-0.text-center Mide la variación de los ingresos por ventas entre períodos, permitiendo evaluar la evolución comercial de la empresa.  
            p.mb-0.text-center #[strong Ejemplo]: una tienda de ropa registra un aumento del 15 % en sus ventas después de implementar una campaña promocional. 
          .tarjeta.bg-cards.p-4.pt-5
            .row.justify-content-center.mb-3
              .col-6.col-sm-4.col-xl-5
                img.imgw-95.mb-3(src='@/assets/curso/tema6/3.svg' alt='')
            h5.mb-3.text-center Satisfacción del cliente 
            p.mb-0.text-center Evalúa el cumplimiento de las expectativas del consumidor frente a los productos, servicios y experiencias recibidas.  
            p.mb-0.text-center #[strong Ejemplo]: un restaurante realiza encuestas y encuentra que el 90 % de sus clientes está satisfecho con la atención.
          .tarjeta.bg-cards.p-4.pt-5
            .row.justify-content-center.mb-3
              .col-6.col-sm-4.col-xl-5
                img.imgw-95.mb-3(src='@/assets/curso/tema6/4.svg' alt='')
            h5.mb-3.text-center Participación de mercado 
            p.mb-0.text-center Indica el porcentaje de ventas que representa una empresa respecto al total de su mercado, reflejando su posición competitiva.  
            p.mb-0.text-center #[strong Ejemplo]: una empresa de bebidas alcanza el 20 % de las ventas de su categoría en una ciudad.
          .tarjeta.bg-cards.p-4.pt-5
            .row.justify-content-center.mb-3
              .col-6.col-sm-4.col-xl-5
                img.imgw-95.mb-3(src='@/assets/curso/tema6/5.svg' alt='')
            h5.mb-3.text-center Rentabilidad de las campañas 
            p.mb-0.text-center Mide el beneficio económico obtenido en relación con los recursos invertidos en una campaña comercial.  
            p.mb-0.text-center #[strong Ejemplo]: una empresa invierte $2 millones en publicidad y obtiene un beneficio neto de $1 millón, alcanzando un ROI del 50 %.
          .tarjeta.bg-cards.p-4.pt-5
            .row.justify-content-center.mb-3
              .col-6.col-sm-4.col-xl-5
                img.imgw-95.mb-3(src='@/assets/curso/tema6/6.svg' alt='')
            h5.mb-3.text-center Fidelización de los consumidores 
            p.mb-0.text-center Evalúa la capacidad de la empresa para conservar clientes y fomentar compras recurrentes mediante experiencias satisfactorias.  
            p.mb-0.text-center #[strong Ejemplo]: Una cafetería identifica que el 70 % de sus clientes habituales continúa comprando durante el siguiente trimestre.
      .col-sm-8.col-lg-4
        figure
          img(data-aos="fade-down-right", src="@/assets/curso/tema6/1.png", alt="")
    
    separador
    #t_6_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 6.2 Auditoría de mercadeo 

    .row.justify-content-center.mb-5.align-items-center
      .col-lg-1.d-none.d-lg-block
        figure
          img.mb-4.mb-lg-0.imgw-65(src='@/assets/curso/tema6/7.svg' alt='')
      .col-lg-11
        p Para garantizar la calidad y la utilidad de la información dentro de una organización, un indicador debe reunir una serie de atributos fundamentales que orienten la evaluación del desempeño. 
        p.mb-0 Las principales características de los indicadores de resultado se presentan a continuación: 

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5
      .col-sm-6.col-lg-3.d-none.d-lg-block
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/tema6/8.png", alt="" data-aos="zoom-in-down")
      .col-lg-9
        AcordionA(tipo="b" clase-tarjeta="tarjeta bg-primario-p5")
          div(titulo="Claridad")
            p.mb-0 Expresa la información de manera sencilla, precisa y comprensible, evitando interpretaciones confusas. Un indicador claro permite identificar qué se está evaluando, cómo se calcula y cuál es su utilidad para el seguimiento de los resultados. 
          div(titulo="Relevancia")
            p.mb-0 Garantiza que el indicador esté relacionado directamente con los objetivos y aspectos importantes de la gestión empresarial. Permite concentrar la evaluación en información significativa para medir el desempeño y orientar la toma de decisiones. 
          div(titulo="Objetividad")
            p.mb-0 Asegura que los resultados se fundamenten en datos verificables y criterios previamente establecidos, evitando apreciaciones personales. Facilita evaluaciones imparciales, confiables y comparables que reflejen el desempeño real de las actividades empresariales. 
          div(titulo="Medición")
            p.mb-0 Establece la posibilidad de cuantificar o evaluar los resultados mediante datos, unidades y métodos definidos. Permite comparar el desempeño frente a metas establecidas, identificar variaciones y determinar el nivel de cumplimiento de los objetivos. 
          div(titulo="Oportunidad")
            p.mb-0 Permite disponer de información actualizada en el momento adecuado para evaluar resultados y tomar decisiones. Facilita identificar desviaciones, aplicar medidas correctivas y responder oportunamente a los cambios que afectan el desempeño empresarial. 

    p.mb-0 Estas características permiten que los indicadores reflejen de manera objetiva el comportamiento de las estrategias implementadas y faciliten los procesos de mejora continua. 

    separador
    #t_6_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 6.3 Clases de indicadores de resultado 

    p.mb-5 Las organizaciones emplean diferentes indicadores según el aspecto que desean evaluar dentro de sus estrategias de #[em marketing]. 

    .row.justify-content-center.mb-4.mb-lg-5
      .col-xl-7
        .titulo-sexto.color-acento-contenido.mb-4
          h5 Tabla 4.
          span Principales indicadores de resultado en marketing
        .tabla-a.color-secundario.tabla-a--text-left.mb-4
          table
            thead
              tr(style="background-color: #FEF5F7")
                th Indicador 
                th ¿Qué evalúa? 
                th Ejemplo 
            tbody
              tr
                td #[strong Ventas]
                td Crecimiento comercial 
                td Incremento del 15 % en ventas 
              tr
                td #[strong Conversión]
                td Visitantes que realizan una compra 
                td Conversión del 6 % 
              tr
                td #[strong Participación de mercado]
                td Posición frente a la competencia 
                td 20 % de participación 
              tr
                td #[strong Satisfacción del cliente]
                td Nivel de conformidad de los consumidores 
                td 94 % de satisfacción 
              tr
                td #[strong ROI]
                td Rentabilidad de la inversión 
                td 180 % de retorno 
      .col-xl-5
        .row
          .col-lg-2
            figure
              img.mb-3.imgw-65(data-aos="fade-down-right", src="@/assets/curso/tema6/9.svg", alt="")
        p Uno de los indicadores más utilizados es el Retorno sobre la Inversión (ROI), el cual permite determinar la rentabilidad obtenida a partir de los recursos invertidos en una estrategia de #[em marketing]. 

    h5.mb-3 Fórmula del ROI 
    p.mb-5 ROI = (Beneficio obtenido - Inversión) / Inversión x 100 

    .row.justify-content-center.mb-4.mb-lg-5
      .col-xl-7
        .titulo-sexto.color-acento-contenido.mb-4
          h5 Tabla 5.
          span Ejemplo de cálculo del retorno sobre la inversión (ROI)
        .tabla-a.color-secundario.tabla-a--text-left.mb-4
          table
            thead
              tr(style="background-color: #FEF5F7")
                th Concepto 
                th Valor
            tbody
              tr
                td #[strong Inversión en la campaña]
                td $ 10.000.000 
              tr
                td #[strong Utilidad obtenida]
                td $ 18.000.000 
              tr
                td #[strong ROI]
                td 180 % 
      .col-xl-5
        .bg-img--9.p-4.rounded-4
          p.mb-0 #[strong Interpretación]: un ROI del 180 % indica que la organización obtuvo un retorno equivalente al 180 % del valor invertido en la campaña de #[em marketing]. 

    separador
    #t_6_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 6.4 Concepto de auditoría de mercadeo 

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/tema6/16.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La auditoría de mercadeo es un proceso sistemático, objetivo e independiente que permite evaluar las estrategias, procesos y resultados del área de #[em marketing]. Su propósito es identificar fortalezas, detectar oportunidades de mejora y verificar el cumplimiento de los objetivos comerciales establecidos por la organización. 

    .row.justify-content-center.mb-4
      .col-xl-10
        p.mb-0 La auditoría facilita el análisis de las acciones ejecutadas y proporciona información para optimizar la inversión, fortalecer la competitividad y mejorar el desempeño de las estrategias comerciales.

    .row.justify-content-center
      .col-xl-10
        .tarjeta-avatar-b.align-items-center
          .tarjeta-avatar-b__img
            img.imgw-154(src='@/assets/curso/tema1/19.png' alt='')
          .tarjeta.bg-img--5.h-fitcontent
            .p-4
              p.mb-0 Por ejemplo, MerPor ejemplo, Grupo Nutresa realiza evaluaciones periódicas de sus campañas de mercadeo y del comportamiento de sus marcas para identificar oportunidades de mejora y fortalecer su posicionamiento en el mercado. 

    separador
    #t_6_5.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 6.5 Proceso de auditoría de mercadeo 

    p La auditoría de mercadeo se desarrolla mediante un conjunto de etapas sistemáticas que permiten evaluar de forma integral la gestión comercial de una organización. 
    p.mb-5 Las etapas del proceso de auditoría de mercadeo corresponden a las siguientes: 

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5.z-2
      .col-lg-9
        TabsA.color-primario.mb-4.mb-lg-0
          .tarjeta.bg-secundario-s5.p-4(titulo="Planeación ")
            p.mb-0 Definición del alcance, los objetivos y la metodología aplicable a la auditoría. Incluye la identificación de los recursos necesarios, las áreas que serán evaluadas y el cronograma de actividades para garantizar un proceso organizado. 
          .tarjeta.bg-secundario-s5.p-4(titulo="Recolección de información")
            p.mb-0 Obtención de datos sobre campañas, clientes, indicadores y resultados comerciales. Se consultan informes, plataformas digitales, registros de ventas y herramientas de analítica para reunir información relevante y confiable. 
          .tarjeta.bg-secundario-s5.p-4(titulo="Análisis")
            p.mb-0 Comparación entre los objetivos planteados, los indicadores definidos y los resultados realmente obtenidos. Se identifican fortalezas, debilidades, desviaciones y oportunidades de mejora para determinar la efectividad de las acciones implementadas. 
          .tarjeta.bg-secundario-s5.p-4(titulo="Informe")
            p.mb-0 Presentación formal de los hallazgos, conclusiones y recomendaciones derivadas del estudio. El documento incluye evidencias, resultados de la evaluación y propuestas de mejora orientadas a optimizar el desempeño de las estrategias de marketing. 
          .tarjeta.bg-secundario-s5.p-4(titulo="Seguimiento")
            p.mb-0 Verificación sistemática del cumplimiento de las acciones de mejora acordadas. Se revisan los avances, se evalúa la efectividad de las medidas implementadas y se establecen ajustes cuando sea necesario para asegurar la mejora continua. 
      .col-sm-6.col-lg-3
        figure
          img(src="@/assets/curso/tema6/17.png", alt="" data-aos="zoom-in-down")

    .row.justify-content-center
      .col-xl-10
        .cajon.color-secundario.p-4
          p.mb-0 La aplicación de estas etapas permite fortalecer el control de las estrategias de marketing y apoyar de manera efectiva el proceso de mejoramiento continuo. 
    


























</template>

<script>
export default {
  name: 'Tema6',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
