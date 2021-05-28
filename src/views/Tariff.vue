<template>
   <section class="main__content container ">
     <Sidebar/>
    <div class="main__top_news ">
      <TopNews/>
      <Content/>
    </div>

  </section>
</template>

<script>
// @ is an alias to /src
import Sidebar from '../components/Sidebar'
import TopNews from '../components/TopNews'
import Content from '../components/Content'

export default {
  components: {
    // Header,
    Sidebar,
    TopNews,
    // Tariff,
    Content
  }
}
</script>