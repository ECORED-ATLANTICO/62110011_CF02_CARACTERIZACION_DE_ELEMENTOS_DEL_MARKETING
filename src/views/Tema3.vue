<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Gestión de las relaciones y construcción de marca

    .bloque-texto-g.bloque-texto-g--inverso.color-terciario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/tema3/1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 En mercados cada vez más competitivos, las organizaciones deben desarrollar estrategias que les permitan establecer relaciones sólidas con sus clientes y diferenciarse mediante una identidad de marca consistente. La gestión de las relaciones facilita el conocimiento de las necesidades y expectativas del consumidor, mientras que la construcción de marca fortalece el reconocimiento, la confianza y la preferencia del público.  

    .row.justify-content-center.align-items-center
      .col-lg-1.d-none.d-lg-block
        figure
          img.imgw-50(src="@/assets/curso/tema3/16.svg", alt="", data-aos="fade-in-out")
      .col-lg-11
        p.mb-0 De igual manera, la participación activa de los clientes en el desarrollo de productos y servicios permite generar propuestas con mayor valor, favoreciendo la fidelización y la competitividad empresarial. 

    separador
    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.1 Concepto de CRM (<em>Customer Relationship Management</em>)

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5
      .col-sm-6.col-lg-3
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/tema3/2.png", alt="" data-aos="zoom-in-down")
      .col-lg-9
        p La gestión de las relaciones con los clientes, conocida por las siglas CRM (#[em Customer Relationship Management]), es una estrategia empresarial orientada a administrar de manera organizada la información, las interacciones y las necesidades de los clientes durante todas las etapas de la relación comercial. Su propósito es fortalecer el vínculo entre la organización y el consumidor, incrementando la satisfacción, la fidelización y la rentabilidad. 
        .bg-gradiente-contenido.p-4.rounded-4.mb-3
          p.mb-0 El CRM integra personas, procesos y tecnologías para recopilar información sobre los clientes, analizar su comportamiento y ofrecer respuestas oportunas que contribuyan a mejorar la experiencia de compra. De esta manera, la organización puede conocer las preferencias de sus consumidores, anticipar sus necesidades y desarrollar estrategias de marketing más efectivas.
        p.mb-0 La información obtenida mediante un sistema CRM permite segmentar clientes, personalizar ofertas comerciales, realizar seguimiento a las ventas y evaluar el nivel de satisfacción de los consumidores. Asimismo, facilita la toma de decisiones basada en datos y fortalece la comunicación entre las diferentes áreas de la empresa. 
        
    .row.justify-content-center
      .col-xl-10
        .tarjeta-avatar-b.align-items-center
          .tarjeta-avatar-b__img
            img.imgw-154(src='@/assets/curso/tema1/19.png' alt='')
          .tarjeta.bg-img--5.h-fitcontent
            .p-4
              p.mb-0 Un ejemplo es Amazon, que utiliza sistemas CRM para analizar el historial de compras de sus clientes y ofrecer recomendaciones personalizadas que mejoran la experiencia de compra y fortalecen la fidelización. 

    separador
    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.2 Proceso de CRM (<em>Customer Relationship Management</em>)

    img(data-aos="fade-up", src="@/assets/curso/tema3/3.png", alt="")
    .row.justify-content-center.z-2
      .col-lg-10.p-4(data-aos="fade-down")
        div.banner-text.shadow.mb-3
          p.mb-0 El proceso de gestión de relaciones con los clientes (CRM) comprende una serie de etapas que permiten a las empresas conocer mejor a sus consumidores, atender sus necesidades y fortalecer los vínculos comerciales. Para comprender su funcionamiento, a continuación, se presenta una figura que muestra de manera secuencial las principales etapas del proceso, desde la recopilación de información hasta la evaluación de resultados y la mejora continua.

    
    .row.justify-content-center.align-items-center.z-2.mb-5
      .col-xl-10
        .titulo-sexto.color-acento-contenido.mb-4
          h5 Figura 2.
          span Proceso de gestión de las relaciones con los clientes
        img.d-sm-none(data-aos="fade-up", src="@/assets/curso/tema3/4-mob.svg", alt="La figura representa de manera secuencial el proceso de gestión de relaciones con los clientes (CRM), mediante cuatro recuadros de colores conectados por flechas que indican el desarrollo de las actividades. Cada sección contiene un ícono representativo y una breve explicación sobre cómo las empresas utilizan la información de sus clientes para fortalecer las relaciones comerciales. En la parte inferior, una línea discontinua destaca la importancia de la mejora continua, mostrando que este proceso requiere seguimiento, evaluación y ajustes permanentes para ofrecer experiencias satisfactorias y generar valor.")
        img.d-none.d-sm-block(data-aos="fade-up", src="@/assets/curso/tema3/4.svg", alt="La figura representa de manera secuencial el proceso de gestión de relaciones con los clientes (CRM), mediante cuatro recuadros de colores conectados por flechas que indican el desarrollo de las actividades. Cada sección contiene un ícono representativo y una breve explicación sobre cómo las empresas utilizan la información de sus clientes para fortalecer las relaciones comerciales. En la parte inferior, una línea discontinua destaca la importancia de la mejora continua, mostrando que este proceso requiere seguimiento, evaluación y ajustes permanentes para ofrecer experiencias satisfactorias y generar valor.")

    .row.justify-content-center
      .col-xl-10
        .tarjeta-avatar-b.align-items-center
          .tarjeta-avatar-b__img
            img.imgw-154(src='@/assets/curso/tema1/3.png' alt='')
          .tarjeta.bg-img--primario.h-fitcontent
            .p-4
              p.mb-0 Por ejemplo, Spotify utiliza la información recopilada sobre los hábitos de escucha de sus usuarios para ofrecer recomendaciones musicales personalizadas y fortalecer la permanencia de los clientes en la plataforma. 

    separador
    #t_3_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.3 Concepto de gestión de marca 

    .bg-secundario-s10.mb-4.z-2(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg-auto
          figure
            img(src='@/assets/curso/tema3/5.png', alt='')
        .col-lg
          .p-4
            p.mb-0(data-aos="fade-up") La gestión de marca, conocida como branding, comprende el conjunto de estrategias orientadas a construir, posicionar y fortalecer la identidad de una organización en la mente de los consumidores. Su finalidad es lograr que la marca sea reconocida, genere confianza y establezca una relación emocional con su público objetivo. 

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-9
        p La marca representa mucho más que un nombre o un logotipo. Incluye la identidad visual, los valores corporativos, la personalidad, el estilo de comunicación y las experiencias que viven los clientes al interactuar con la organización. Todos estos elementos contribuyen a formar la percepción que el mercado tiene sobre la empresa. 
        .bg-img--8.p-4.rounded-4.mb-4.mb-lg-0
          p.mb-0 Una adecuada gestión de marca favorece la diferenciación frente a la competencia, incrementa el reconocimiento del negocio y fortalece la lealtad de los consumidores. Para ello, es indispensable mantener coherencia entre la promesa de valor comunicada y la experiencia realmente ofrecida por la organización. 
      .col-sm-6.col-lg-3
        figure
          img(data-aos="fade-down-right", src="@/assets/curso/tema3/6.png", alt="")
    
    .row.justify-content-center
      .col-xl-10
        .tarjeta-avatar-b.align-items-center
          .tarjeta-avatar-b__img
            img.imgw-154(src='@/assets/curso/tema1/19.png' alt='')
          .tarjeta.bg-img--5.h-fitcontent
            .p-4
              p.mb-0 Por ejemplo, Coca-Cola ha construido una marca reconocida internacionalmente mediante una comunicación consistente, una identidad visual fácilmente identificable y campañas orientadas a transmitir emociones positivas asociadas al consumo de sus productos. 
    
    separador
    #t_3_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.4 Concepto de branding

    .row.justify-content-center.mb-5.align-items-center
      .col-lg-1.d-none.d-lg-block
        figure
          img.mb-4.mb-lg-0(src='@/assets/curso/tema1/4.png' alt='')
      .col-lg-11
        p La gestión de marca es un proceso estratégico que permite a las empresas construir, desarrollar y fortalecer la identidad, el posicionamiento y la reputación de sus marcas en el mercado. Su aplicación comprende diferentes etapas orientadas a diferenciar la oferta comercial, generar confianza en los consumidores y establecer relaciones duraderas que contribuyan al reconocimiento y valor de la marca. 
        p.mb-0 A continuación, se presentan las principales etapas del proceso:  

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5
      .col-sm-6.col-lg-3
        figure
          img.mb-4.mb-lg-0(src="@/assets/curso/tema3/7.png", alt="" data-aos="zoom-in-down")
      .col-lg-9
        AcordionA(tipo="b" clase-tarjeta="tarjeta bg-primario-p5")
          div(titulo="Análisis del mercado y consumidores")
            p Examina las necesidades de los consumidores, las tendencias del mercado y la competencia para identificar oportunidades comerciales.  
            p #[strong Ejemplo]: una empresa de café investiga las preferencias de sus compradores y las marcas competidoras. 
          div(titulo="Definición del posicionamiento de marca")
            p Determina cómo desea ser reconocida la marca, destacando los atributos y beneficios que la diferencian.  
            p #[strong Ejemplo]: una marca de café colombiano resalta su calidad, origen y aroma para distinguirse de la competencia. 
          div(titulo="Diseño de identidad de marca")
            p Desarrolla elementos visuales y comunicativos, como nombre, logotipo, colores y eslogan, que representan la marca.  
            p #[strong Ejemplo]: una empresa de café diseña un logotipo inspirado en las montañas colombianas para destacar su origen. 
          div(titulo="Implementación y comunicación de marca")
            p Promueve el reconocimiento de la marca mediante estrategias publicitarias, promociones y experiencias que conectan con los consumidores.  
            p #[strong Ejemplo]: una empresa de café realiza degustaciones y campañas digitales para dar a conocer sus productos. 
          div(titulo="Seguimiento, evaluación y mejora marca")
            p Mide el reconocimiento, la reputación y la satisfacción de los clientes para identificar oportunidades de mejora.  
            p #[strong Ejemplo]: una empresa de café realiza encuestas para evaluar la percepción de su marca y ajustar sus estrategias. 

    .row.justify-content-center
      .col-xl-10
        .tarjeta-avatar-b.align-items-center
          .tarjeta-avatar-b__img
            img.imgw-154(src='@/assets/curso/tema1/3.png' alt='')
          .tarjeta.bg-img--primario.h-fitcontent
            .p-4
              p.mb-0 Un ejemplo es Nike, que mantiene una estrategia de marca basada en la innovación, la inspiración y el alto rendimiento deportivo, complementada con campañas publicitarias y alianzas con deportistas de reconocimiento mundial. 

    separador
    #t_3_5.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.5 Concepto de co-creación
    
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-9
        p La co-creación es una estrategia mediante la cual las organizaciones involucran a clientes, colaboradores, proveedores y otros grupos de interés en el desarrollo o mejoramiento de productos, servicios y experiencias. Este enfoque reconoce que el consumidor puede aportar conocimientos, ideas y perspectivas que enriquecen los procesos de innovación. 
        .row.justify-content-center.align-items-center.mb-3
          .col-lg-1
            figure
              img(src='@/assets/curso/tema3/17.svg', alt='')
          .col-lg-11
            .bg-img--2.p-4.rounded-4
              p.mb-0 En marketing, la co-creación fortalece la relación entre la empresa y sus clientes al convertirlos en participantes activos del proceso de generación de valor. Como resultado, las organizaciones desarrollan soluciones más cercanas a las expectativas del mercado y fortalecen la confianza de sus consumidores. 
        p.mb-4.mb-lg-0 La participación colaborativa también favorece la creatividad, reduce el riesgo asociado al lanzamiento de nuevos productos y mejora la aceptación de las propuestas comerciales. Además, contribuye a consolidar relaciones de largo plazo basadas en la interacción y el compromiso mutuo. 
      .col-sm-6.col-lg-3
        figure
          img(data-aos="fade-down-right", src="@/assets/curso/tema3/8.png", alt="")
    
    .row.justify-content-center
      .col-xl-10
        .tarjeta-avatar-b.align-items-center
          .tarjeta-avatar-b__img
            img.imgw-154(src='@/assets/curso/tema1/19.png' alt='')
          .tarjeta.bg-img--5.h-fitcontent
            .p-4
              p.mb-0 Por ejemplo, LEGO permite que sus usuarios propongan nuevos diseños mediante la plataforma LEGO Ideas, donde las iniciativas con mayor aceptación son evaluadas para convertirse en productos oficiales de la compañía.

    separador
    #t_3_6.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.6 Proceso de co-creación 

    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/tema3/9.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 El proceso de co-creación de valor promueve la participación de clientes, colaboradores y otros grupos de interés en el desarrollo de productos, servicios y soluciones innovadoras. Mediante el intercambio de ideas, experiencias y conocimientos, las empresas pueden identificar necesidades, diseñar propuestas y realizar mejoras que generen beneficios compartidos. A continuación, se presentan las principales etapas de este proceso: 
    .row.justify-content-center.mb-5
      .col-xl-11
        SlyderF(columnas="col-lg-6 col-xl-4")
          .tarjeta.bg-cards.p-4.pt-5
            .row.justify-content-center.mb-3
              .col-6.col-sm-4.col-xl-5
                img.imgw-95.mb-3(src='@/assets/curso/tema3/10.svg' alt='')
            h5.mb-3.text-center Identificar necesidades 
            p.mb-4.text-center Reconocer los problemas, expectativas y oportunidades del mercado mediante el análisis de las necesidades y experiencias de los consumidores. 
          .tarjeta.bg-cards.p-4.pt-5
            .row.justify-content-center.mb-3
              .col-6.col-sm-4.col-xl-5
                img.imgw-95.mb-3(src='@/assets/curso/tema3/11.svg' alt='')
            h5.mb-3.text-center Vincular a los participantes
            p.mb-4.text-center Seleccionar e involucrar a clientes, colaboradores y aliados que puedan aportar conocimientos, experiencias e ideas para desarrollar soluciones. 
          .tarjeta.bg-cards.p-4.pt-5
            .row.justify-content-center.mb-3
              .col-6.col-sm-4.col-xl-5
                img.imgw-95.mb-3(src='@/assets/curso/tema3/12.svg' alt='')
            h5.mb-3.text-center Generar ideas conjuntamente
            p.mb-4.text-center Promover espacios de participación, como talleres, encuestas y comunidades digitales, para proponer alternativas que respondan a las necesidades identificadas. 
          .tarjeta.bg-cards.p-4.pt-5
            .row.justify-content-center.mb-3
              .col-6.col-sm-4.col-xl-5
                img.imgw-95.mb-3(src='@/assets/curso/tema3/13.svg' alt='')
            h5.mb-3.text-center Diseñar y desarrollar soluciones
            p.mb-4.text-center Transformar las ideas seleccionadas en propuestas, prototipos o mejoras mediante el trabajo colaborativo y el intercambio de conocimientos. 
          .tarjeta.bg-cards.p-4.pt-5
            .row.justify-content-center.mb-3
              .col-6.col-sm-4.col-xl-5
                img.imgw-95.mb-3(src='@/assets/curso/tema3/14.svg' alt='')
            h5.mb-3.text-center Probar y validar las propuestas
            p.mb-4.text-center Evaluar las soluciones con los participantes para conocer su utilidad, funcionamiento y aceptación, identificando posibles ajustes antes de implementarlas. 
          .tarjeta.bg-cards.p-4.pt-5
            .row.justify-content-center.mb-3
              .col-6.col-sm-4.col-xl-5
                img.imgw-95.mb-3(src='@/assets/curso/tema3/15.svg' alt='')
            h5.mb-3.text-center Implementar y mejorar
            p.mb-4.text-center Poner en práctica las soluciones validadas, evaluar sus resultados e incorporar las recomendaciones recibidas para fortalecer su valor y promover la mejora continua. 

    .row.justify-content-center
      .col-xl-10
        .tarjeta-avatar-b.align-items-center
          .tarjeta-avatar-b__img
            img.imgw-154(src='@/assets/curso/tema1/3.png' alt='')
          .tarjeta.bg-img--primario.h-fitcontent
            .p-4
              p.mb-0 Un ejemplo es Starbucks, que ha implementado espacios de participación donde los consumidores aportan ideas relacionadas con nuevos productos, mejoras en el servicio y experiencias dentro de sus establecimientos, fortaleciendo la innovación y la cercanía con sus clientes.

    .row.justify-content-center.mb-4
      .col-xl-10
        .tarjeta-avatar-b.align-items-center
          .tarjeta-avatar-b__img
            img.imgw-190(src='@/assets/curso/common/video.png' alt='')
          .tarjeta.bg-video.h-fitcontent
            .p-4.py-5
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h4.mb-2 ¿Qué es #[em BRANDING]?
                  p.mb-0 Para comprender los fundamentos del branding, la construcción de identidad de marca y la forma en que los elementos estratégicos e idénticos influyen en la percepción de los consumidores y la diferenciación en el mercado, se recomienda revisar el siguiente recurso: 
                .col-sm-auto
                  a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=ZdFpM6cOlpQ" target="_blank")
                    span Enlace
                    i.fas.fa-video

</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
