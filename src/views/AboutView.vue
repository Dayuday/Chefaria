<template>
  <div class="relative w-1206 h-472">
    <transition-group name="slide" tag="div" class="absolute">
      <div
        v-for="(slide, index) in slides"
        :key="index"
        class="absolute left-50% top-184"
        v-show="activeIndex === index"
      >
        <img :src="slide.img" class="rounded-lg w-906 h-448" />
        <div
          class="bg-black rounded-lg w-480 h-448 absolute left-50% transform -translate-x-591 top-0"
          :style="{
            background:
              'linear-gradient(90deg, rgba(207, 109, 65, 1) 0%, rgba(207, 109, 65, 1) 25%, rgba(207, 109, 65, 1) 50%, rgba(207, 109, 65, 1) 75%, rgba(207, 109, 65, 0) 100%)',
          }"
        ></div>
        <div
          class="text-yellow-200 text-left absolute left-50% transform -translate-x-545 top-250"
          :style="{ font: '800 30px Karla, sans-serif' }"
        >
          {{ slide.title }}
        </div>
      </div>
    </transition-group>
    <button
      @click="prev"
      class="text-white bg-blue-500 rounded-lg px-4 py-2 absolute left-0 bottom-0"
    >
      Previous
    </button>
    <button
      @click="next"
      class="text-white bg-blue-500 rounded-lg px-4 py-2 absolute right-0 bottom-0"
    >
      Next
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: 0,
      slides: [
        { img: "public/Slideshow-1.jpg", title: "Slide 1" },
        { img: "public/Slideshow-2.jpg", title: "Slide 2" },
        // Add more slides here
      ],
    };
  },
  methods: {
    next() {
      this.activeIndex = (this.activeIndex + 1) % this.slides.length;
    },
    prev() {
      this.activeIndex =
        (this.activeIndex + this.slides.length - 1) % this.slides.length;
    },
  },
};
</script>
