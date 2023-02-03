<template>
  <header>
    <!-- lg+ -->
    <div
      class="fixed w-full py-10"
      style="
        background: linear-gradient(
          to bottom,
          #e5c99f 60.16%,
          rgba(229, 201, 159, 0) 100%
        );
      "
    >
      <div class="relative px-4 mx-auto sm:px-6 lg:px-8">
        <nav class="flex items-center justify-between h-16 lg:h-20">
          <!-- Small Screen Sidebar -->
          <div class="relative lg:hidden">
            <button @click="isOpen = !isOpen">
              <img
                src="public/Quick-tabs-menu.png"
                class="inline-flex p-2 ml-5 mb-10 xs:ml-0 xs:pr-2 xs:pl-0 flex-grow-0 flex-shrink-0 w-12 h-13 object-cover"
              />
            </button>

            <div
              :class="[
                { open: isOpen },
                'justify-items-start',
                'fixed',
                'top-0',
                'left-0',
                'h-screen',
                'w-screen',
                'bg-[#892B2C]',
                'backdrop-blur-3xl',
                'opacity-95',
                'z-20',
                sidebarTransform,
                'transition-transform',
                'duration-300',
                'ease-in-out',
              ]"
              style="
                background: linear-gradient(
                  to right,
                  rgba(137, 43, 44, 0.9) 36.17%,
                  rgba(137, 43, 44, 0.77) 64.82%,
                  rgba(137, 43, 44, 0.67) 79.56%,
                  rgba(137, 43, 44, 0.45) 95.39%,
                  rgba(137, 43, 44, 0.22) 100%
                );
              "
            >
              <button @click="isOpen = false">
                <div class="mb-7"></div>
                <img
                  src="public/Quick-Tabs-Menu-Close-icon.png"
                  class="inline-flex mb-20 p-2 ml-3 sm:ml-5 flex-grow-0 flex-shrink-0 w-12 h-12 object-cover transition ease-in-out duration-300 hover:scale-150"
                />
              </button>

              <button class="overflow-y-scroll-hidden max-h-screen pl-20">
                <nav
                  class="flex flex-col space-y-5 align-items-start text-left"
                >
                  <router-link
                    to="/home"
                    class="pt-0 text-[#E5C99F] text-md font-bold tracking-widest transition-all duration-200 hover:text-[#CF6D41] focus:text-[#CF6D41] transition ease-in-out duration-300 hover:scale-150"
                    ><img
                      src="public/Spoon-icon.png"
                      class="inline-block rotate-45 mr-2 h-6 w-6"
                    />
                    HOME
                  </router-link>
                  <router-link
                    to="/categories"
                    class="text-[#E5C99F] text-md font-bold tracking-widest transition-all duration-200 hover:text-[#CF6D41] focus:text-[#CF6D41] transition ease-in-out duration-300 hover:scale-150"
                    ><img
                      src="public/Fork-icon.png"
                      class="inline-block rotate-45 mr-2 h-6 w-6"
                    />
                    CATEGORIES
                  </router-link>
                  <router-link
                    to="/recipes"
                    class="text-[#E5C99F] text-md font-bold tracking-widest transition-all duration-200 hover:text-[#CF6D41] focus:text-[#CF6D41] transition ease-in-out duration-300 hover:scale-150"
                    ><img
                      src="public/Spoon-icon.png"
                      class="inline-block rotate-45 mr-2 h-6 w-6"
                    />
                    RECIPES
                  </router-link>
                  <router-link
                    to="/specialty"
                    class="text-[#E5C99F] text-md font-bold tracking-widest transition-all duration-200 hover:text-[#CF6D41] focus:text-[#CF6D41] transition ease-in-out duration-300 hover:scale-150"
                    ><img
                      src="public/Fork-icon.png"
                      class="inline-block rotate-45 mr-2 h-6 w-6"
                    />
                    SPECIALTY
                  </router-link>
                  <router-link
                    to="/contact"
                    class="text-[#E5C99F] text-md font-bold tracking-widest transition-all duration-200 hover:text-[#CF6D41] focus:text-[#CF6D41] transition ease-in-out duration-300 hover:scale-150"
                    ><img
                      src="public/Spoon-icon.png"
                      class="inline-block rotate-45 mr-2 h-6 w-6"
                    />
                    CONTACT
                  </router-link>
                  <router-link
                    to="/about"
                    class="text-[#E5C99F] text-md font-bold tracking-widest transition-all duration-200 hover:text-[#CF6D41] focus:text-[#CF6D41] transition ease-in-out duration-300 hover:scale-150"
                    ><img
                      src="public/Fork-icon.png"
                      class="inline-block rotate-45 mr-2 h-6 w-6"
                    />
                    ABOUT
                  </router-link>
                </nav>

                <button class="flex flex-col item-center space-y-5 mt-10">
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
              </button>
            </div>
          </div>

          <!-- Social Media Links -->
          <div class="flex-shrink-0">
            <button
              class="hidden lg:flex flex-col lg:items-center lg:space-y-5 ml-10 mt-10 pt-20"
            >
              <img
                src="public/Facebook-icon.png"
                class="flex-grow-0 flex-shrink-0 w-6 h-6 object-cover transition ease-in-out duration-300 hover:scale-150"
              />
              <img
                src="public/Instagram-icon.png"
                class="flex-grow-0 flex-shrink-0 w-6 h-6 object-cover transition ease-in-out duration-300 hover:scale-150"
              />
              <img
                src="public/Pinterest-icon.png"
                class="flex-grow-0 flex-shrink-0 w-6 h-6 object-cover transition ease-in-out duration-300 hover:scale-150"
              />
              <img
                src="public/Twitter-icon.png"
                class="flex-grow-0 flex-shrink-0 w-6 h-6 object-cover transition ease-in-out duration-300 hover:scale-150"
              />
              <img
                src="public/YouTube-icon.png"
                class="flex-grow-0 flex-shrink-0 w-6 h-6 object-cover transition ease-in-out duration-300 hover:scale-150"
              />
            </button>
          </div>

          <!-- Left Nav Menu -->
          <div
            class="hidden lg:flex lg:items-center lg:space-x-10 pt-5 ml-auto"
          >
            <router-link
              to="/home"
              class="mb-20 text-[#38171D] text-md font-bold tracking-widest transition-all duration-200 hover:text-[#892B2C] focus:text-[#892B2C]"
              active-class="text-[#892B2C] hover:text-[#892B2C]"
            >
              HOME
            </router-link>
            <router-link
              to="/categories"
              class="mb-20 text-[#38171D] text-md font-bold tracking-widest transition-all duration-200 hover:text-[#892B2C] focus:text-[#892B2C]"
              active-class="text-[#892B2C] hover:text-[#892B2C]"
            >
              CATEGORIES
            </router-link>
            <router-link
              to="/recipes"
              class="mb-20 text-[#38171D] text-md font-bold tracking-widest transition-all duration-200 hover:text-[#892B2C] focus:text-[#892B2C]"
              active-class="text-[#892B2C] hover:text-[#892B2C]"
            >
              RECIPES
            </router-link>
          </div>

          <!-- Logo & Search -->
          <div
            class="flex flex-col items-center mr-auto ml-auto inline-flex mb-3 xs:pl-10 xs:pr-10 sm:pr-5 lg:pl-0 lg:pr-0 lg:pr-0"
          >
            <button @mousedown="startTimer" @mouseup="stopTimer">
              <img
                src="public/Logo.png"
                class="flex-grow-0 flex-shrink-0 w-[73px] h-[82px] object-cover sm:w-[91px] sm:h-[102px] sm:mt-6 xl:w-[95px] xl:h-[105px] xl:mt-5"
              />
            </button>

            <button>
              <img
                @click="openSearch = !openSearch"
                src="public/Search-icon.png"
                class="flex-grow-0 flex-shrink-0 h-[24px] w-[24px] object-cover sm:w-[30px] sm:h-[30px] object-cover transition ease-in-out duration-300"
                :style="{
                  transform: openSearch ? 'translateX(-460%)' : 'translateX(0)',
                }"
              />
              <div v-if="openSearch" class="absolute top-20 mt-1">
                <input
                  ref="input"
                  @keyup.enter.prevent="submitSearch"
                  class="rounded-[20px] bg-[#cf6d41] px-4 text-[#E5C99F] font-bold placeholder-[#892B2C] duration-300 ease-in-out"
                  placeholder="What are you looking for..."
                  :style="{
                    transform: openSearch
                      ? 'translateX(-40%)'
                      : 'translateX(0)',
                  }"
                />
              </div>
            </button>

            <!-- PIE MENU -->
            <div v-show="showOverlay">
              <div
                class="fixed top-0 left-0 h-screen w-screen backdrop-blur-md opacity-95"
              ></div>

              <nav class="fixed">
                <div
                  class="bg-[#892b2c] rounded-[50%] w-[300px] h-[300px] absolute left-[-150px] top-[-225px]"
                ></div>

                <button
                  class="bg-[#e5c99f] rounded-[50%] border-[5px] w-[150px] h-[150px] absolute left-[-75px] top-[-150px]"
                  style="border: solid #38171d"
                >
                  <img
                    @click="showOverlay = !showOverlay"
                    src="public/Logo.png"
                    class="w-[103px] h-[112px] absolute left-[21px] top-[8px]"
                  />
                </button>

                <div>
                  <button
                    class="transition-all duration-200 text-[#e5c99f] hover:text-[#cf6d41] absolute left-[-5px] top-[-5px]"
                    style="
                      font: 800 30px 'Karla', sans-serif;
                      transform-origin: 0 0;
                      transform: rotate(5deg) scale(1, 1);
                    "
                    @click="showOverlay = !showOverlay"
                  >
                    <router-link
                      to="/create"
                      class="text-left absolute left-[85px] top-[-100px]"
                      active-class="text-[#cf6d41] hover:text-[#cf6d41]"
                      style="
                        font: 800 30px 'Karla', sans-serif;
                        transform-origin: 0 0;
                        transform: rotate(-115deg) scale(1, 1);
                      "
                    >
                      T
                    </router-link>

                    <router-link
                      to="/create"
                      class="text-left absolute left-[88px] top-[-78px]"
                      active-class="text-[#cf6d41] hover:text-[#cf6d41]"
                      style="
                        font: 800 30px 'Karla', sans-serif;
                        transform-origin: 0 0;
                        transform: rotate(-105deg) scale(1, 1);
                      "
                    >
                      S
                    </router-link>

                    <router-link
                      to="/create"
                      class="text-left absolute left-[85px] top-[-59px]"
                      active-class="text-[#cf6d41] hover:text-[#cf6d41]"
                      style="
                        font: 800 30px 'Karla', sans-serif;
                        transform-origin: 0 0;
                        transform: rotate(-80deg) scale(1, 1);
                      "
                    >
                      O
                    </router-link>

                    <router-link
                      to="/create"
                      class="text-left absolute left-[80px] top-[-40px]"
                      active-class="text-[#cf6d41] hover:text-[#cf6d41]"
                      style="
                        font: 800 30px 'Karla', sans-serif;
                        transform-origin: 0 0;
                        transform: rotate(-65deg) scale(1, 1);
                      "
                    >
                      P
                    </router-link>
                  </button>
                </div>

                <button
                  class="transition-all duration-200 text-[#e5c99f] hover:text-[#cf6d41] absolute left-[40px] top-[-165px]"
                  style="
                    font: 800 30px 'Karla', sans-serif;
                    transform-origin: 0 0;
                    transform: rotate(5deg) scale(1, 1);
                  "
                >
                  <div>
                    <div
                      class="text-left absolute left-[25px] top-[157px]"
                      style="
                        font: 800 30px 'Karla', sans-serif;
                        transform-origin: 0 0;
                        transform: rotate(-51deg) scale(1, 1);
                      "
                    >
                      E
                    </div>

                    <div
                      class="text-left absolute left-[6px] top-[173px]"
                      style="
                        font: 800 30px 'Karla', sans-serif;
                        transform-origin: 0 0;
                        transform: rotate(-44deg) scale(1, 1);
                      "
                    >
                      N
                    </div>

                    <div
                      class="text-left absolute left-[-4px] top-[177px]"
                      style="
                        font: 800 30px 'Karla', sans-serif;
                        transform-origin: 0 0;
                        transform: rotate(-30deg) scale(1, 1);
                      "
                    >
                      I
                    </div>

                    <div
                      class="text-left absolute left-[-20px] top-[183px]"
                      style="
                        font: 800 30px 'Karla', sans-serif;
                        transform-origin: 0 0;
                        transform: rotate(-17deg) scale(1, 1);
                      "
                    >
                      L
                    </div>

                    <div
                      class="text-left absolute left-[-40px] top-[183px]"
                      style="
                        font: 800 30px 'Karla', sans-serif;
                        transform-origin: 0 0;
                        transform: rotate(2deg) scale(1, 1);
                      "
                    >
                      E
                    </div>

                    <div
                      class="text-left absolute left-[-65px] top-[176px]"
                      style="
                        font: 800 30px 'Karla', sans-serif;
                        transform-origin: 0 0;
                        transform: rotate(16deg) scale(1, 1);
                      "
                    >
                      M
                    </div>

                    <div
                      class="text-left absolute left-[-77px] top-[170px]"
                      style="
                        font: 800 30px 'Karla', sans-serif;
                        transform-origin: 0 0;
                        transform: rotate(28deg) scale(1, 1);
                      "
                    >
                      I
                    </div>

                    <div
                      class="text-left absolute left-[-95px] top-[155px]"
                      style="
                        font: 800 30px 'Karla', sans-serif;
                        transform-origin: 0 0;
                        transform: rotate(40deg) scale(1, 1);
                      "
                    >
                      T
                    </div>
                  </div>
                </button>

                <button
                  class="transition-all duration-200 text-[#e5c99f] hover:text-[#cf6d41] absolute left-[-5px] top-[-10px]"
                  style="
                    font: 800 30px 'Karla', sans-serif;
                    transform-origin: 0 0;
                    transform: rotate(5deg) scale(1, 1);
                  "
                >
                  <div>
                    <div
                      class="text-left absolute left-[-85px] top-[-34px]"
                      style="
                        font: 800 30px 'Karla', sans-serif;
                        transform-origin: 0 0;
                        transform: rotate(62deg) scale(1, 1);
                      "
                    >
                      O
                    </div>

                    <div
                      class="text-left absolute left-[-91px] top-[-53px]"
                      style="
                        font: 800 30px 'Karla', sans-serif;
                        transform-origin: 0 0;
                        transform: rotate(70deg) scale(1, 1);
                      "
                    >
                      E
                    </div>

                    <div
                      class="text-left absolute left-[-91px] top-[-72px]"
                      style="
                        font: 800 30px 'Karla', sans-serif;
                        transform-origin: 0 0;
                        transform: rotate(85deg) scale(1, 1);
                      "
                    >
                      D
                    </div>

                    <div
                      class="text-left absolute left-[-88px] top-[-82px]"
                      style="
                        font: 800 30px 'Karla', sans-serif;
                        transform-origin: 0 0;
                        transform: rotate(100deg) scale(1, 1);
                      "
                    >
                      I
                    </div>

                    <div
                      class="text-left absolute left-[-79px] top-[-104px]"
                      style="
                        font: 800 30px 'Karla', sans-serif;
                        transform-origin: 0 0;
                        transform: rotate(113deg) scale(1, 1);
                      "
                    >
                      V
                    </div>
                  </div>
                </button>
              </nav>
            </div>
          </div>

          <!-- Right Nav Menu -->
          <div
            class="hidden lg:flex lg:items-center lg:space-x-10 pt-5 mr-auto"
          >
            <router-link
              to="/specialty"
              class="mb-20 text-[#38171D] text-md font-bold tracking-widest transition-all duration-200 hover:text-[#892B2C] focus:text-[#892B2C]"
              active-class="text-[#892B2C] hover:text-[#892B2C]"
            >
              SPECIALTY
            </router-link>
            <router-link
              to="/contact"
              class="mb-20 text-[#38171D] text-md font-bold tracking-widest transition-all duration-200 hover:text-[#892B2C] focus:text-[#892B2C]"
              active-class="text-[#892B2C] hover:text-[#892B2C]"
            >
              CONTACT
            </router-link>
            <router-link
              to="/about"
              class="mb-20 text-[#38171D] text-md font-bold tracking-widest transition-all duration-200 hover:text-[#892B2C] focus:text-[#892B2C]"
              active-class="text-[#892B2C] hover:text-[#892B2C]"
            >
              ABOUT
            </router-link>
          </div>

          <div class="relative">
            <button
              @click="accountMenuIsOpen = !accountMenuIsOpen"
              class="inline-flex p-2 ml-5 pb-10 mb-8 xs:ml-0 xs:pr-2 xs:pr-0 flex-grow-0 flex-shrink-0 w-12 h-13 object-cover"
            >
              <svg
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="absolute top-0 left-0"
              >
                <circle cx="23.9996" cy="24" r="24" fill="#CF6D41"></circle>
              </svg>
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="absolute top-1 left-1"
                style="z-index: 1"
              >
                <circle
                  cx="19.9996"
                  cy="20"
                  r="20"
                  fill="url(#paint0_linear_168_279)"
                ></circle>
                <defs>
                  <linearGradient
                    id="paint0_linear_168_279"
                    x1="19.9996"
                    y1="0"
                    x2="19.9996"
                    y2="40"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#892B2C"></stop>
                    <stop offset="1" stop-color="#CF6D41"></stop>
                  </linearGradient>
                </defs>
              </svg>
              <img
                src="public/Profile-icon.png"
                class="w-10 h-10 rounded-[70px] absolute top-50 left-50 z-10 -translate-x-1 -translate-y-1"
              />
            </button>

            <div
              :class="[
                { open: accountMenuIsOpen },
                'justify-items-start',
                'fixed',
                'top-0',
                'left-0',
                'h-screen',
                'w-screen',
                'bg-[#892B2C]',
                'backdrop-blur-3xl',
                'opacity-95',
                'z-20',
                accountMenuSidebarTransform,
                'transition-transform',
                'duration-300',
                'ease-in-out',
              ]"
              class="flex"
              style="
                background: linear-gradient(
                  to left,
                  rgba(137, 43, 44, 0.9) 36.17%,
                  rgba(137, 43, 44, 0.77) 64.82%,
                  rgba(137, 43, 44, 0.67) 79.56%,
                  rgba(137, 43, 44, 0.45) 95.39%,
                  rgba(137, 43, 44, 0.22) 100%
                );
              "
            >
              <button
                class="overflow-y-scroll-hidden max-h-screen text-right pr-20 ml-auto pb-20 mb-20 mt-20"
              >
                <nav
                  class="flex flex-col space-y-5 align-items-start justify-content-start sm:mt-10 sm:pt-8"
                >
                  <router-link
                    to="/"
                    class="text-[#E5C99F] text-md font-bold tracking-widest transition-all duration-200 hover:text-[#CF6D41] focus:text-[#CF6D41] transition ease-in-out duration-300 hover:scale-150"
                  >
                    Account
                    <img
                      src="public/Account-icon-male.png"
                      class="inline-block mr-2 h-10 w-10"
                  /></router-link>
                  <router-link
                    to="/"
                    class="text-[#E5C99F] text-md font-bold tracking-widest transition-all duration-200 hover:text-[#CF6D41] focus:text-[#CF6D41] transition ease-in-out duration-300 hover:scale-150"
                  >
                    Bookmarks
                    <img
                      src="public/Bookmarks-icon.png"
                      class="inline-block mr-2 h-10 w-10"
                  /></router-link>
                  <router-link
                    to="/"
                    class="text-[#E5C99F] text-md font-bold tracking-widest transition-all duration-200 hover:text-[#CF6D41] focus:text-[#CF6D41] transition ease-in-out duration-300 hover:scale-150"
                  >
                    Courses
                    <img
                      src="public/Courses-icon.png"
                      class="inline-block mr-2 h-10 w-10"
                  /></router-link>
                  <router-link
                    to="/"
                    class="text-[#E5C99F] text-md font-bold tracking-widest transition-all duration-200 hover:text-[#CF6D41] focus:text-[#CF6D41] transition ease-in-out duration-300 hover:scale-150"
                  >
                    Notifications
                    <img
                      src="public/Notification-icon.png"
                      class="inline-block mr-2 h-10 w-10"
                  /></router-link>
                  <router-link
                    to="/"
                    class="text-[#E5C99F] text-md font-bold tracking-widest transition-all duration-200 hover:text-[#CF6D41] focus:text-[#CF6D41] transition ease-in-out duration-300 hover:scale-150"
                  >
                    Logout
                    <img
                      src="public/Logout-icon.png"
                      class="inline-block mr-2 h-10 w-10"
                  /></router-link>
                </nav>

                <button
                  class="flex flex-col item-center space-y-5 mt-10 ml-auto"
                >
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
              </button>

              <button
                @click="accountMenuIsOpen = false"
                class="flex mt-7 lg:mt-9"
              >
                <div></div>
                <img
                  src="public/Quick-Tabs-Menu-Close-icon.png"
                  class="inline-flex p-2 xs:mr-5 sm:mr-8 lg:mr-11 flex-grow-0 flex-shrink-0 w-12 h-12 object-cover transition ease-in-out duration-300 hover:scale-150"
                />
              </button>
            </div>
          </div>
        </nav>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  methods: {
    submitSearch() {
      const inputValue = this.$refs.input.value.trim().toLowerCase();
      if (inputValue === "home" || inputValue === "categories" || inputValue === "recipes" || inputValue === "specialty" || inputValue === "contact" || inputValue === "about") {
        this.$router.replace(`/${inputValue}`);
        this.openSearch = false;
      }
    },

    startTimer() {
      this.timer = setTimeout(() => {
        this.showOverlay = true;
      }, 1000);
    },
    stopTimer() {
      clearTimeout(this.timer);
    },
  },
  data() {
    return {
      isOpen: false,
      openSearch: false,
      accountMenuIsOpen: false,
      showOverlay: false,
    };
  },
  computed: {
    sidebarTransform() {
      return this.isOpen
        ? "translate-x-0"
        : "translate-x-full left-0 -translate-x-full";
    },
    accountMenuSidebarTransform() {
      return this.accountMenuIsOpen
        ? "translate-x-0"
        : "translate-x-full left-0 translate-x-full";
    },
  },
};
</script>
