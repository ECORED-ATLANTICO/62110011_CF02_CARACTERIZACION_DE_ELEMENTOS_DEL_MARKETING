<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .row.justify-content-center.align-items-center.mb-4.mb-lg-5.z-2
      .col-lg-9
        .bg-img--2.p-4.rounded-4.mb-4.mb-lg-0
          .row.justify-content-center.align-items-center
            .col-lg-2.col-xl-1.d-none.d-lg-block.px-xl-0 
              figure
                img.imgw-60.mb-4.mb-lg-0(src="@/assets/curso/intro/1.svg", alt="" data-aos="zoom-in-down")
            .col-lg-10.col-xl-11
              p.mb-0 El componente formativo Gestión y evaluación de estrategias de marketing desarrolla los conocimientos y herramientas necesarios para planear, implementar y evaluar estrategias de marketing que respondan a las condiciones del mercado y a los objetivos de la organización. En un entorno empresarial caracterizado por la innovación, la transformación digital y las nuevas expectativas de los consumidores, las organizaciones requieren diseñar estrategias que generen valor, fortalezcan las relaciones con los clientes y contribuyan al crecimiento sostenible. 
      .col-sm-6.col-lg-3
        figure
          img(data-aos="fade-down-right", src="@/assets/curso/intro/2.png", alt="")

    p.mb-5 Durante el desarrollo del componente se abordan conceptos relacionados con la ideación, la innovación, el prototipado, el conocimiento del consumidor, la creación de valor, la gestión de las relaciones con el cliente (CRM), la gestión de marca y la co-creación, como fundamentos para el diseño de propuestas de marketing orientadas a satisfacer las necesidades del mercado. Asimismo, se estudian el marketing digital, el mercadeo ecológico, la responsabilidad social, la planeación presupuestal, el rendimiento financiero, los indicadores de resultado y la auditoría de mercadeo, como herramientas que apoyan la implementación, el seguimiento y la evaluación de las estrategias comerciales. 

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/intro/3.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 El componente incorpora ejemplos empresariales, recursos audiovisuales y actividades de aprendizaje que facilitan la comprensión de los contenidos y su aplicación en contextos organizacionales reales. De esta manera, fortalece la capacidad del aprendiz para desarrollar procesos de marketing acordes con las condiciones del mercado, establecer indicadores para evaluar el desempeño de las estrategias implementadas y contribuir a la toma de decisiones orientadas al cumplimiento de los objetivos comerciales y al uso eficiente de los recursos de la organización. 
    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
