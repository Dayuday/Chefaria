<!-- <template>
  <main class="fixed min-h-screen bg-[#E5C99F] bg-main-bg bg-cover bg-blend-luminosity z-0 z-0 top-0 left-0 right-0 bottom-0">
</main>
</template> -->

<!-- <template>
  <main class="min-h-screen bg-[#E5C99F] bg-main-bg bg-cover bg-blend-luminosity">
  </main>
</template>

<script>
export default {
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      this.$refs.bg.style.transform = `translateY(${window.scrollY * 0.08}%)`;
    },
  },
};
</script> -->

<template>
  <main
    ref="bg1"
    v-bind:style="bgStyle"
    class="relative bg-[#E5C99F] bg-main-bg bg-cover bg-blend-luminosity"
  ></main>

  <main ref="bg2" class="absolute bottom-0 w-full">
    <section class="py-10 bg-[#892B2C] sm:pt-16 lg:pt-24">
      <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div
          class="grid grid-cols-2 gap-x-5 gap-y-12 md:grid-cols-4 md:gap-x-12"
        >
          <div>
            <p class="text-[#E5C99F] font-bold">Company</p>

            <ul class="mt-8 space-y-4">
              <li>
                <a
                  href="#"
                  title=""
                  class="text-[#E5C99F] transition-all duration-200 hover:text-[#CF6D41] focus:text-[#CF6D41]"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  title=""
                  class="text-[#E5C99F] transition-all duration-200 hover:text-[#CF6D41] focus:text-[#CF6D41]"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#"
                  title=""
                  class="text-[#E5C99F] transition-all duration-200 hover:text-[#CF6D41] focus:text-[#CF6D41]"
                >
                  Works
                </a>
              </li>
              <li>
                <a
                  href="#"
                  title=""
                  class="text-[#E5C99F] transition-all duration-200 hover:text-[#CF6D41] focus:text-[#CF6D41]"
                >
                  Career
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p class="text-[#E5C99F] font-bold">Help</p>

            <ul class="mt-8 space-y-4">
              <li>
                <a
                  href="#"
                  title=""
                  class="text-[#E5C99F] transition-all duration-200 hover:text-[#CF6D41] focus:text-[#CF6D41]"
                >
                  Customer Support
                </a>
              </li>
              <li>
                <a
                  href="#"
                  title=""
                  class="text-[#E5C99F] transition-all duration-200 hover:text-[#CF6D41] focus:text-[#CF6D41]"
                >
                  Delivery Details
                </a>
              </li>
              <li>
                <a
                  href="#"
                  title=""
                  class="text-[#E5C99F] transition-all duration-200 hover:text-[#CF6D41] focus:text-[#CF6D41]"
                >
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a
                  href="#"
                  title=""
                  class="text-[#E5C99F] transition-all duration-200 hover:text-[#CF6D41] focus:text-[#CF6D41]"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p class="text-[#E5C99F] font-bold">Resources</p>

            <ul class="mt-8 space-y-4">
              <li>
                <a
                  href="#"
                  title=""
                  class="text-[#E5C99F] transition-all duration-200 hover:text-[#CF6D41] focus:text-[#CF6D41]"
                >
                  Free eBooks
                </a>
              </li>
              <li>
                <a
                  href="#"
                  title=""
                  class="text-[#E5C99F] transition-all duration-200 hover:text-[#CF6D41] focus:text-[#CF6D41]"
                >
                  Development Tutorial
                </a>
              </li>
              <li>
                <a
                  href="#"
                  title=""
                  class="text-[#E5C99F] transition-all duration-200 hover:text-[#CF6D41] focus:text-[#CF6D41]"
                >
                  How to - Blog
                </a>
              </li>
              <li>
                <a
                  href="#"
                  title=""
                  class="text-[#E5C99F] transition-all duration-200 hover:text-[#CF6D41] focus:text-[#CF6D41]"
                >
                  YouTube Playlist
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p class="text-[#E5C99F] font-bold">Extra Links</p>

            <ul class="mt-8 space-y-4">
              <li>
                <a
                  href="#"
                  title=""
                  class="text-[#E5C99F] transition-all duration-200 hover:text-[#CF6D41] focus:text-[#CF6D41]"
                >
                  Customer Support
                </a>
              </li>
              <li>
                <a
                  href="#"
                  title=""
                  class="text-[#E5C99F] transition-all duration-200 hover:text-[#CF6D41] focus:text-[#CF6D41]"
                >
                  Delivery Details
                </a>
              </li>
              <li>
                <a
                  href="#"
                  title=""
                  class="text-[#E5C99F] transition-all duration-200 hover:text-[#CF6D41] focus:text-[#CF6D41]"
                >
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a
                  href="#"
                  title=""
                  class="text-[#E5C99F] transition-all duration-200 hover:text-[#CF6D41] focus:text-[#CF6D41]"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        <hr class="mt-16 mb-10 border-[#38171D]" />

        <div class="flex flex-wrap items-center justify-between">
          <button class="flex items-center space-x-3 md:order-3">
            <img
              src="public/Facebook-icon-light.png"
              class="flex-grow-0 flex-shrink-0 w-6 h-6 object-cover transition ease-in-out duration-300 hover:scale-150"
            />
            <img
              src="public/Instagram-icon-light.png"
              class="flex-grow-0 flex-shrink-0 w-6 h-6 object-cover transition ease-in-out duration-300 hover:scale-150"
            />
            <img
              src="public/Pinterest-icon-light.png"
              class="flex-grow-0 flex-shrink-0 w-6 h-6 object-cover transition ease-in-out duration-300 hover:scale-150"
            />
            <img
              src="public/Twitter-icon-light.png"
              class="flex-grow-0 flex-shrink-0 w-6 h-6 object-cover transition ease-in-out duration-300 hover:scale-150"
            />
            <img
              src="public/YouTube-icon-light.png"
              class="flex-grow-0 flex-shrink-0 w-6 h-6 object-cover transition ease-in-out duration-300 hover:scale-150"
            />
          </button>

          <p
            class="w-full mt-8 text-sm text-center text-[#E5C99F] md:mt-0 md:w-auto md:order-2"
          >
            © Copyright 2023, All Rights Reserved by Chefaria
          </p>

          <img class="h-24 auto md:order-1" src="public/Logo.png" alt="" />
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  computed: {
    bgStyle() {
      return {
        minHeight: `${window.innerHeight + 400}px`,
      };
    },
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      this.$refs.bg1.style.transform = `translateY(${window.scrollY * 0.08}%)`;
      this.$refs.bg2.style.transform = `translateY(${window.scrollY * 0.08}%)`;
    },
  },
};
</script>
