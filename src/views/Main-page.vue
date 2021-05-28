<template>
  <Sidebar />
  <h2 class="main__top_news ">
    <h1>13 jule</h1>
    <TopNews />
    <MainContent />
  </h2>
</template>

<script>
import Sidebar from "../components/Sidebar";
import TopNews from "../components/TopNews";
import MainContent from "../components/MainContent";

export default {
  components: {
    Sidebar,
    TopNews,
    MainContent,
  },
};
</script>
