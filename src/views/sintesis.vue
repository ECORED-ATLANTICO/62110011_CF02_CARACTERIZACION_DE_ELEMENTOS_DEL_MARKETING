<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p El componente formativo Gestión y evaluación de estrategias de #[em marketing] desarrolla los procesos necesarios para diseñar, implementar y evaluar estrategias de #[em marketing] orientadas al cumplimiento de los objetivos organizacionales. Aborda la ideación, la innovación, el prototipado, el conocimiento del consumidor y la creación de valor como fundamentos para el desarrollo de propuestas comerciales acordes con las condiciones del mercado. 

    .bg-img.bg-img--1.p-4.rounded-4.mb-5
      .row.justify-content-center.align-items-center
        .col-lg-1.d-none.d-lg-block
          figure
            img.imgw-75.mb-4.mb-lg-0(src="@/assets/curso/sinte-1.svg", alt="" data-aos="zoom-in-down")
        .col-lg-11
          p.mb-0 De igual manera, analiza la gestión de las relaciones con los clientes mediante el CRM, la gestión de marca, la co-creación, el #[em marketing] digital, el mercadeo ecológico y la responsabilidad social como estrategias para fortalecer la competitividad, la sostenibilidad y la relación con los consumidores. Finalmente, desarrolla la planeación financiera, el rendimiento financiero, los indicadores de resultado y la auditoría de mercadeo como herramientas para el seguimiento, la evaluación y la mejora continua de las estrategias de #[em marketing]. 

    .row.justify-content-center
      .col-lg-12
        figure
          img.mb-5(src="@/assets/curso/sintesis.svg", alt="La figura presenta un esquema jerárquico que organiza los contenidos relacionados con la gestión y evaluación de las estrategias de marketing. Su estructura parte de un eje central, del cual se desprenden seis bloques temáticos que agrupan diferentes conocimientos, herramientas y procedimientos necesarios para comprender la planificación, ejecución, seguimiento y mejoramiento de las actividades comerciales. Mediante recuadros de distintos colores y líneas de conexión, se representa la relación entre los contenidos generales y sus respectivos elementos de desarrollo. Esta organización permite visualizar de manera integral la secuencia de aprendizaje, facilitando la comprensión de los procesos empresariales orientados a fortalecer la competitividad, generar valor y mejorar la toma de decisiones. ")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis    

</template>

<script>
export default {
  name: 'Sintesis',
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
