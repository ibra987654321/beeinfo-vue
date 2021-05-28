<template>
  <div>
    <Header />
    <section class="main__content container ">
      <Sidbar />
      <div class="main__top_news ">
        <TopNews />
        <router-view />
      </div>
    </section>
  </div>
</template>
<script>
import M from "materialize-css";
import Header from "./components/Headers";
import Sidbar from "./components/Sidebar";
import TopNews from "./components/TopNews";

export default {
  components: {
    Header,
    Sidbar,
    TopNews,
  },
  mounted() {
    M.AutoInit();
    //       (function () {
    //     class SlideShow {
    //         constructor(startIndex, element) {
    //             this.startIndex = startIndex;
    //             this.currentIndex = this.startIndex;
    //             this.element = element;
    //             this.slides = this.element.querySelectorAll('.slide');
    //             this.setActiveSlide();
    //             this.next();
    //             this.prev();
    //         }

    //         setActiveSlide() {
    //             this.slides.forEach((item, index) => {
    //                 if (index === this.currentIndex) {
    //                     item.classList.add('actives');
    //                 } else {
    //                     item.classList.remove('actives');
    //                 }
    //             })

    //         }

    //         next() {
    //             let nextBtn = this.element.querySelector('[data-way="next"]');
    //             nextBtn.addEventListener('click', () => {
    //                 if (this.currentIndex === this.slides.length - 1) {
    //                     this.currentIndex = 0;
    //                 } else {
    //                     this.currentIndex++;
    //                 }
    //                 this.setActiveSlide();
    //             })

    //         }

    //         prev() {
    //             let prevBtn = this.element.querySelector('[data-way="prev"]');
    //             prevBtn.addEventListener('click', () => {
    //                 if (this.currentIndex === 0) {
    //                     this.currentIndex = this.slides.length - 1;
    //                 } else {
    //                     this.currentIndex--;
    //                 }
    //                 this.setActiveSlide();
    //             })
    //         }
    //     }

    //     let slideShow = document.querySelectorAll('.slideshow');

    //     slideShow.forEach(item => {
    //         new SlideShow(0, item)
    //     })

    // }())
  },
};
</script>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
}
html,
body {
  padding: 0;
  margin: 0;
  font-family: "Fira Sans Condensed", sans-serif;
  background: #f0f0f0;
}

.header nav {
  background-color: #232325;
  font-size: 14px;
}
.nav__language-dis {
  color: #909090;
}
.nav__switches {
  display: flex;
}
.nav__switches a {
  padding: 0px 2px;
  line-height: 0%\px;
}
.nav__switch-dis {
  color: #909090;
}
.section__container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.head__section nav {
  background-color: #fff;
  margin-bottom: 20px;
}
.head__section a {
  color: black;
  width: 100%;
  white-space: nowrap;
}
.head__section-flex {
  display: flex;
  align-items: center;
}

#cssmenu {
  padding: 0;
  margin: 0;
  border: 0;
  height: 100%;
}
#cssmenu ul,
#cssmenu li {
  list-style: none;
  margin: 0;
  padding: 0;
  height: 100%;
}
#cssmenu ul {
  position: relative;
  z-index: 597;
}
#cssmenu ul li {
  float: left;
  min-height: 1px;
  vertical-align: middle;
  width: 100%;
}
#cssmenu ul li.hover,
#cssmenu ul li:hover {
  position: relative;
  z-index: 599;
  cursor: default;
}
#cssmenu ul ul {
  visibility: hidden;
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 598;
  width: 100%;
}
#cssmenu ul ul li {
  float: none;
}
#cssmenu ul ul ul {
  top: 0;
  left: auto;
  right: -99.5%;
}
#cssmenu ul li:hover > ul {
  visibility: visible;
}
#cssmenu ul ul {
  bottom: 0;
  left: 0;
}
#cssmenu ul ul {
  margin-top: 0;
}
#cssmenu ul ul li {
  font-weight: normal;
}
#cssmenu a {
  display: block;
  line-height: 1em;
  text-decoration: none;
  height: 100%;
}

#cssmenu {
  background: #fff;
  font-size: 12px;
}

#cssmenu > ul {
  *display: inline-block;
}

#cssmenu:after,
#cssmenu ul:after {
  content: "";
  display: block;
  clear: both;
}

#cssmenu a {
  background: #fff;
  color: #000;
}

#cssmenu ul ul {
  border-top: 4px solid #fff;
  text-transform: none;
  min-width: 190px;
}
#cssmenu ul ul a {
  background: #fff;
  color: #000;
  border-top: 0 none;
  line-height: 150%;
  padding: 16px 20px;
}
#cssmenu ul ul ul {
  border-top: 0 none;
}

#cssmenu ul ul li {
  position: relative;
}

#cssmenu > ul > li > a {
  line-height: 64px;
  height: 100%;
}

#cssmenu ul ul li:hover > a {
  background-color: rgba(216, 216, 216);
}

#cssmenu ul ul li:last-child > a {
  border-radius: 0 0 3px 3px;
  box-shadow: 0 1px 0 #fff;
}
#cssmenu ul ul li:last-child:hover > a {
  border-radius: 0 0 0 3px;
}

#cssmenu ul ul li.has-sub > a:after {
  content: "";
  margin-top: -8px;
}

#cssmenu ul li:hover > a,
#cssmenu ul li.active > a {
  background: rgb(224, 224, 224);
  color: #000;
}
#cssmenu ul li.has-sub > a:after {
  content: url(./images/Vector.png);
  margin-left: 5px;
}
#cssmenu ul li.last ul {
  left: auto;
  right: 0;
}
#cssmenu ul li.last ul ul {
  left: auto;
  right: 99.5%;
}

input[type="text"] {
  max-width: 245px;
  max-height: 32px;
  box-sizing: border-box;
  border: 2px solid #f5f5f5;
  font-size: 16px;
  background: #f5f5f5;
  border-radius: 20px;
  background-image: url("./images/search.png");
  background-position: 10px 5px;
  background-repeat: no-repeat;
  padding: 12px 20px 12px 40px;
  -webkit-transition: width 0.4s ease-in-out;
  transition: width 0.4s ease-in-out;
}

input[type="text"]:focus {
  outline: none;
}

.nav__prof_notif {
  display: flex;
  margin-left: 20px;
  align-items: center;
  justify-content: center;
}
.nav__link_img {
  margin: 0 10px;
  display: flex;
  align-items: center;
}

.main__content {
  display: flex;
}
.main__saidbar {
  width: 100%;
  height: 100%;
  min-height: 600px;
  max-width: 308px;
  background-color: #fff;
  padding: 24px 16px;
  border-radius: 10px;
  margin-right: 16px;
}

.main__saidbar input[type="text"] {
  max-width: 278px;
  width: 100%;
  margin-bottom: 16px;
}

.sidbar__tabs {
  margin-bottom: 16px;
}
#all,
#unread,
#chosen {
  padding-left: 32px;
}
.side__news_link p {
  width: 236px;
  height: 40px;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 24px;
}
.news__links a {
  position: relative;
  color: black;
  font-weight: bold;
}
.news__links a::after {
  content: "\2605";
  position: absolute;
  left: -20px;
  top: 8px;
}
.visited {
  color: #909090 !important;
}
.main__top_news {
  width: 100%;
}
.news__card_middle {
  margin: 0 16px;
}
.news__card {
  display: flex;
  width: 100%;
}

.news__card img {
  width: 90px;
  height: 112px;
  border-radius: 6.53846px 6.53846px 0 0;
}

.content {
  height: 100%;
  min-height: 1024px;
  background-color: #fff;
  margin-top: 16px;
  padding: 24px;
  border-radius: 10px;
}

.content li {
  width: 100%;
  max-width: 266px;
  height: 32px;
}
.content li a:hover {
  background-color: #ffcd00;
}
.content li a:hover {
  background-color: #ffcd00;
}
td:first-child {
  width: 500px;
}
// slider css
section {
  clear: both;
}
.wrapper {
  background: white;
  margin: auto;
  min-height: 15em;
  padding: 1em;
  width: 40%;
}
.wrapper h1 {
  text-align: center;
}
.block {
  display: none;
}
.block img {
  float: left;
  margin-right: 1em;
}
.controls {
  text-align: center;
}
span.prevSlider,
span.autoSlider,
span.stopSlider,
span.nextSlider {
  cursor: pointer;
  display: inline-block;
  margin: 0 1em;
}
span.stopSlider {
  display: none;
}
</style>
