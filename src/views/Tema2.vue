<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Diseño de propuestas de valor para el mercado 

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5
      .col-sm-6.col-lg-3
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/tema2/1.png", alt="" data-aos="zoom-in-down")
      .col-lg-9
        p Las organizaciones deben ofrecer soluciones que respondan a las necesidades y expectativas de los consumidores para diferenciarse de la competencia.  
        .bg-img--7.p-4.rounded-4
          .row.justify-content-center.align-items-center
            .col-lg-2.col-xl-1.d-none.d-lg-block
              img(src="@/assets/curso/tema2/2.svg", alt="")
            .col-lg-10.col-xl-11
              p.mb-0 En este proceso, el diseño de propuestas de valor permite identificar aquello que hace atractivo un producto o servicio, facilitando la creación de ofertas que generen beneficios tanto para los clientes como para la empresa. Para ello, es necesario comprender al consumidor, validar las ideas mediante prototipos y desarrollar alternativas que aporten valor al mercado. 

    separador
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.1 Concepto de prototipado

    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-4
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/tema2/3.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 El prototipado es el proceso mediante el cual se crea una representación inicial de un producto, servicio o estrategia antes de su implementación definitiva. Su propósito es evaluar ideas, identificar oportunidades de mejora y reducir riesgos durante el proceso de desarrollo. 

    .row.justify-content-center.mb-4
      .col-xl-10
        p.mb-0 En #[em marketing], los prototipos permiten obtener retroalimentación de los consumidores antes del lanzamiento comercial, facilitando ajustes que incrementen la aceptación de la propuesta de valor. Dependiendo del proyecto, un prototipo puede ser un boceto, una maqueta, una simulación digital o una versión funcional del producto. 

    .row.justify-content-center
      .col-xl-10
        .tarjeta-avatar-b.align-items-center
          .tarjeta-avatar-b__img
            img.imgw-154(src='@/assets/curso/tema1/3.png' alt='')
          .tarjeta.bg-img--primario.h-fitcontent
            .p-4
              p.mb-0 Por ejemplo, IKEA desarrolla prototipos de mobiliario para evaluar aspectos relacionados con el diseño, la funcionalidad y la experiencia del usuario antes de iniciar la producción a gran escala. 

    separador
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.2 Proceso de prototipado 

    img(data-aos="fade-up", src="@/assets/curso/tema2/4.png", alt="")
    .row.justify-content-center.z-2
      .col-lg-10.p-4(data-aos="fade-down")
        div.banner-text.shadow.mb-3
          p.mb-0 El proceso de prototipado es una etapa fundamental de la innovación que permite transformar las ideas seleccionadas en representaciones iniciales de productos, servicios o soluciones. Mediante la elaboración de modelos físicos, digitales o conceptuales, las empresas pueden visualizar sus propuestas, evaluar su funcionamiento e identificar oportunidades de mejora antes de su implementación. Para comprender su aplicación, se presentan las principales etapas de este proceso, desde la definición de la idea hasta su validación y perfeccionamiento.

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5.z-2
      .col-xl-7
        .bg-slider.bg-slider--2.p-4.rounded-4
          SlyderA.pb-lg-5.pb-3.bg-white.rounded-4(tipo="a")
            .row.justify-content-center.py-4
              .col-10
                div.p-4
                  h5 1. Definir la idea
                  p.mb-0 Identificar el problema, los objetivos y los requisitos principales de la solución.
            .row.justify-content-center.py-4
              .col-10
                div.p-4
                  h5 2. Diseñar el prototipo
                  p.mb-0 Representar la idea mediante un boceto, maqueta o modelo digital sencillo.
            .row.justify-content-center.py-4
              .col-10
                div.p-4
                  h5 3. Construir el prototipo
                  p.mb-0 Elaborar el modelo utilizando materiales físicos o herramientas digitales, según el tipo de producto o servicio.
            .row.justify-content-center.py-4
              .col-10
                div.p-4
                  h5 4. Probar y evaluar
                  p.mb-0 Realizar pruebas con usuarios o clientes potenciales para conocer su funcionamiento, aceptación y posibles mejoras.
            .row.justify-content-center.py-4
              .col-10
                div.p-4
                  h5 5. Analizar resultados
                  p.mb-0 Recopilar y analizar la información obtenida en las pruebas para identificar fortalezas, debilidades y oportunidades de mejora.
            .row.justify-content-center.py-4
              .col-10
                div.p-4
                  h5 6. Optimizar y validar
                  p.mb-0 Ajustar el prototipo con base en los resultados obtenidos y validar su funcionalidad, viabilidad y aceptación.
      .col-sm-6.col-lg-3.d-none.d-xl-block
        figure
          img(data-aos="fade-down-right", src="@/assets/curso/tema2/5.png", alt="")
    
    .row.justify-content-center
      .col-xl-10
        .bg-img--4.rounded-4.p-4
          .row.justify-content-center.align-items-center
            .col-lg-2.col-xl-1.p-0.d-none.d-lg-block
              img(src='@/assets/curso/tema2/6.svg', alt='')
            .col-lg-10.col-xl-11
              p.mb-0 Un ejemplo es Airbnb, que prueba nuevas funcionalidades de su plataforma con grupos de usuarios antes de implementarlas de forma general, permitiendo optimizar la experiencia del cliente.  

    separador
    #t_2_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.3 Concepto de conocimiento del consumidor 

    .bg-secundario-s10.mb-4.z-2(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg-auto
          figure
            img(src='@/assets/curso/tema2/7.png', alt='')
        .col-lg
          .p-4
            p.mb-0(data-aos="fade-up") El conocimiento del consumidor consiste en comprender las características, necesidades, motivaciones, hábitos de compra y expectativas de los clientes. Esta información permite diseñar estrategias de #[em marketing] más efectivas y desarrollar propuestas de valor alineadas con las demandas del mercado. 

    p.mb-0 Las organizaciones obtienen este conocimiento mediante encuestas, entrevistas, análisis de datos, observación del comportamiento de compra y estudios de mercado. La información recopilada facilita la segmentación de clientes y la personalización de productos, servicios y campañas comerciales. 

    separador
    #t_2_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.4 Tipos de consumidor

    .row.justify-content-center.mb-5.align-items-center
      .col-lg-1.d-none.d-lg-block
        figure
          img.mb-4.mb-lg-0(src='@/assets/curso/tema5/9.png' alt='')
      .col-lg-11
        p.mb-0 Los consumidores pueden clasificarse de acuerdo con diferentes criterios, como sus características demográficas, geográficas, psicográficas y comportamentales. Esta clasificación facilita la segmentación del mercado y permite adaptar las estrategias comerciales a cada grupo objetivo. Entre los tipos de consumidores tenemos: 

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-9
        TabsA.color-primario.mb-4.mb-lg-0
          .tarjeta.bg-secundario-s5.p-4(titulo="Consumidor final")
            p.mb-0 Adquiere y usa productos o servicios para satisfacer una necesidad personal o familiar. 
            p.mb-0 #[strong Ejemplo:] una persona que compra una bebida para su consumo.
          .tarjeta.bg-secundario-s5.p-4(titulo="Consumidor industrial")
            p.mb-0 Compra productos o servicios para usarlos en sus procesos de producción o negocio. 
            p.mb-0 #[strong Ejemplo:] una empresa que compra materias primas para fabricar alimentos.
          .tarjeta.bg-secundario-s5.p-4(titulo="Análisis")
            p.mb-0 Aún no compra el producto o servicio, pero puede hacerlo en el futuro si se cumplen ciertas condiciones. 
            p.mb-0 #[strong Ejemplo:] una persona interesada en comprar calzado deportivo.
          .tarjeta.bg-secundario-s5.p-4(titulo="Informe")
            p.mb-0 Compra de manera habitual debido a su satisfacción y confianza en la marca. 
            p.mb-0 #[strong Ejemplo:] una persona que compra regularmente productos de cuidado personal.
          .tarjeta.bg-secundario-s5.p-4(titulo="Consumidor ocasional")
            p.mb-0 Compra el producto o servicio en situaciones específicas o esporádicas. 
            p.mb-0 #[strong Ejemplo:] una persona que compra un perfume solo en fechas especiales.
          .tarjeta.bg-secundario-s5.p-4(titulo="Consumidor impulsivo")
            p.mb-0 Toma la decisión de compra de manera rápida e influenciada por promociones, emociones o el ambiente de venta. 
            p.mb-0 #[strong Ejemplo:] una persona que compra un producto por una promoción.
      .col-sm-6.col-lg-3
        figure
          img(src="@/assets/curso/tema2/8.png", alt="" data-aos="zoom-in-down")

    .row.justify-content-center
      .col-xl-10
        .tarjeta-avatar-b.align-items-center
          .tarjeta-avatar-b__img
            img.imgw-154(src='@/assets/curso/tema1/19.png' alt='')
          .tarjeta.bg-img--5.h-fitcontent
            .p-4
              p.mb-0 Por ejemplo, Nike desarrolla productos y campañas dirigidas a diferentes segmentos, como deportistas profesionales, aficionados al ejercicio y consumidores interesados en la moda deportiva. 

    separador
    #t_2_5.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.5 Concepto de creación de valor

    .bg-img--10.p-4.rounded-4.mb-4
      .row.justify-content-center.align-items-center
        .col-lg-2.col-xl-1.d-none.d-lg-block.px-xl-0 
          figure
            img.imgw-60.mb-4.mb-lg-0(src="@/assets/curso/tema2/9.svg", alt="" data-aos="zoom-in-down")
        .col-lg-10.col-xl-11
          p.mb-0 La creación de valor es el proceso mediante el cual una organización desarrolla beneficios que satisfacen las necesidades del consumidor y generan ventajas competitivas. El valor puede estar relacionado con: 

    .bg-slider.p-4.rounded-4.mb-5
      SlyderA(tipo="b").p-4.bg-white.rounded-4.py-5
        .row.justify-content-center.align-items-center
          .col-lg-5
            h5.mb-4 Calidad 
            p.mb-0 Se refleja en la capacidad de un producto o servicio para cumplir lo que promete y satisfacer al cliente. 
            p.mb-4.mb-lg-0 #[strong Ejemplo:] una lavadora duradera, eficiente y con garantía genera mayor valor para el comprador. 
          .col-sm-8.col-lg-6
            figure
              img.mb-4.mb-lg-0(src='@/assets/curso/tema2/10.png' alt='')
        .row.justify-content-center.align-items-center
          .col-lg-5
            h5.mb-4 Precio 
            p.mb-0 Representa el valor económico que paga el cliente y debe guardar relación con los beneficios recibidos. 
            p.mb-4.mb-lg-0 #[strong Ejemplo:] un supermercado ofrece productos de buena calidad a precios accesibles para diferentes consumidores. 
          .col-sm-8.col-lg-6
            figure
              img.mb-4.mb-lg-0(src='@/assets/curso/tema2/11.png' alt='')
        .row.justify-content-center.align-items-center
          .col-lg-5
            h5.mb-4 Innovación 
            p.mb-0 Aporta mejoras, novedades o soluciones diferentes que facilitan la vida del cliente y fortalecen la oferta. 
            p.mb-4.mb-lg-0 #[strong Ejemplo:] una tienda de ropa incorpora probadores virtuales para mejorar la elección de prendas. 
          .col-sm-8.col-lg-6
            figure
              img.mb-4.mb-lg-0(src='@/assets/curso/tema2/12.png' alt='')
        .row.justify-content-center.align-items-center
          .col-lg-5
            h5.mb-4 Servicio 
            p.mb-0 Incluye la atención, orientación y apoyo que recibe el cliente antes, durante y después de la compra. 
            p.mb-4.mb-lg-0 #[strong Ejemplo:] un asesor explica planes y resuelve dudas para ayudar al cliente a tomar una mejor decisión. 
          .col-sm-8.col-lg-6
            figure
              img.mb-4.mb-lg-0(src='@/assets/curso/tema2/13.png' alt='')
        .row.justify-content-center.align-items-center
          .col-lg-5
            h5.mb-4 Experiencia de compra 
            p.mb-0 Comprende las sensaciones e interacciones que vive el cliente durante el proceso de compra. 
            p.mb-4.mb-lg-0 #[strong Ejemplo:] un supermercado organizado, cómodo y ágil hace más agradable y fácil la compra. 
          .col-sm-8.col-lg-6
            figure
              img.mb-4.mb-lg-0(src='@/assets/curso/tema2/14.png' alt='')  
        .row.justify-content-center.align-items-center
          .col-lg-5
            h5.mb-4 Confianza que transmite la marca 
            p.mb-0 Surge cuando la empresa demuestra cumplimiento, transparencia y seguridad en lo que ofrece. 
            p.mb-4.mb-lg-0 #[strong Ejemplo:] una marca de alimentos informa claramente sus ingredientes y fechas de vencimiento, generando tranquilidad en el consumidor. 
          .col-sm-8.col-lg-6
            figure
              img.mb-4.mb-lg-0(src='@/assets/curso/tema2/15.png' alt='')

    .row.justify-content-center.mb-4
      .col-xl-10
        .cajon.color-secundario.p-4
          p.mb-0 Cuando una empresa comprende lo que realmente aprecia el cliente, puede diseñar productos y servicios que superen sus expectativas y fortalezcan las relaciones comerciales a largo plazo. 

    .row.justify-content-center
      .col-xl-10
        .tarjeta-avatar-b.align-items-center
          .tarjeta-avatar-b__img
            img.imgw-154(src='@/assets/curso/tema1/3.png' alt='')
          .tarjeta.bg-img--primario.h-fitcontent
            .p-4
              p.mb-0 Un ejemplo es Amazon, que ha construido su propuesta de valor alrededor de la rapidez en las entregas, la variedad de productos y una experiencia de compra sencilla y confiable. 

    separador
    #t_2_6.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.6 Proceso de creación de valor

    .bg-img--11.p-4.rounded-4.mb-5
      .row.justify-content-center.align-items-center
        .col-lg-2.col-xl-1.d-none.d-lg-block.px-xl-0 
          figure
            img.imgw-60.mb-4.mb-lg-0(src="@/assets/curso/tema2/16.svg", alt="" data-aos="zoom-in-down")
        .col-lg-10.col-xl-11
          p.mb-0 El proceso de creación de valor permite a las empresas desarrollar productos, servicios y experiencias que respondan a las necesidades de los consumidores, generando beneficios y fortaleciendo su competitividad. Para comprender cómo se desarrolla, a continuación, se presentan las principales etapas que intervienen en este proceso: 

    .row.justify-content-center.align-items-center.z-2.mb-5
      .col-xl-10
        .titulo-sexto.color-acento-contenido.mb-4
          h5 Figura 1.
          span Proceso de creación de valor
        img.mb-2.d-sm-none(data-aos="fade-up", src="@/assets/curso/tema2/18.png", alt="La figura presenta, de forma circular y secuencial, el proceso mediante el cual una empresa genera valor para sus clientes. En el centro aparece el tema principal, rodeado de seis secciones de colores conectadas por flechas que representan la continuidad del proceso. Cada sección incorpora un ícono y una breve explicación sobre las acciones que permiten transformar ideas en soluciones útiles. En conjunto, la imagen destaca la importancia de comprender las necesidades del consumidor, ofrecer beneficios, evaluar resultados e implementar mejoras continuas para fortalecer la satisfacción del cliente y competitividad empresarial.")
        img.mb-2.d-none.d-sm-block(data-aos="fade-up", src="@/assets/curso/tema2/17.png", alt="La figura presenta, de forma circular y secuencial, el proceso mediante el cual una empresa genera valor para sus clientes. En el centro aparece el tema principal, rodeado de seis secciones de colores conectadas por flechas que representan la continuidad del proceso. Cada sección incorpora un ícono y una breve explicación sobre las acciones que permiten transformar ideas en soluciones útiles. En conjunto, la imagen destaca la importancia de comprender las necesidades del consumidor, ofrecer beneficios, evaluar resultados e implementar mejoras continuas para fortalecer la satisfacción del cliente y competitividad empresarial.")

    .row.justify-content-center
      .col-xl-10
        p.mb-4 Este proceso requiere integrar información del consumidor, innovación, calidad, servicio y seguimiento permanente del desempeño comercial. La evaluación constante permite adaptar la propuesta de valor a los cambios del entorno y fortalecer la satisfacción del cliente. 

    .row.justify-content-center.mb-4
      .col-xl-10
        .tarjeta-avatar-b.align-items-center
          .tarjeta-avatar-b__img
            img.imgw-154(src='@/assets/curso/tema1/19.png' alt='')
          .tarjeta.bg-img--5.h-fitcontent
            .p-4
              p.mb-0 Por ejemplo, Starbucks genera valor mediante la combinación de productos de calidad, atención personalizada, ambientes confortables y programas de fidelización que fortalecen la relación con sus consumidores.

    .row.justify-content-center.mb-4
      .col-xl-10
        .tarjeta-avatar-b.align-items-center
          .tarjeta-avatar-b__img
            img.imgw-190(src='@/assets/curso/tema1/20.png' alt='')
          .tarjeta.bg-img--3.h-fitcontent
            .p-4.py-5
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h4.mb-2 Propuesta de valor: cómo es el secreto para enamorar clientes
                  p.mb-0 Para ampliar este tema, se recomienda consultar el siguiente artículo, el cual explica qué es una propuesta de valor, sus principales elementos y cómo diseñarla para responder a las necesidades del cliente y diferenciar una organización en el mercado. 
                .col-sm-auto
                  a.boton.color-acento-botones(:href="obtenerLink('https://www.tiendanube.com/blog/que-es-una-propuesta-de-valor/')" target="_blank")
                    span Enlace
                    i.fas.fa-link

</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
