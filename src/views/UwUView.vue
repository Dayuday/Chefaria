<template>
  <div
    class="relative top-[-850px] flex items-center justify-center flex-col mx-40 rounded-xl border-2 border-[#38171d]"
    style="
      background: linear-gradient(
        180deg,
        rgba(178, 123, 106, 0.75) 0%,
        rgba(178, 123, 106, 0.56) 100%
      );
      backdrop-filter: blur(2px);
    "
  >
    <!-- HEADER -->
    <div class="mx-auto p-8">
      <div class="sm:flex sm:items-center sm:justify-center">
        <router-link
          to="/about"
          class="text-3xl font-extrabold tracking-tight text-[#E5C99F] hover:text-[#CF6D41] focus:text-[#892B2C] active:text-[#892B2C]"
        >
          Video
        </router-link>
        <span class="font-extrabold pl-4 pr-4">MODE</span>
        <router-link
          to="/uwu"
          class="text-3xl font-extrabold tracking-tight text-[#E5C99F] hover:text-[#CF6D41]"
          active-class="text-[#892B2C] hover:text-[#892B2C]"
        >
          Read
        </router-link>
      </div>
    </div>

    <!-- MAIN CONTENT -->
    <div class="mt-6 grid grid-cols-3 gap-y-10 grig-row-3">
      <div
        class="col-span-2 row-span-1 top-10 flex items-center justify-center mx-10 rounded-xl border-2 border-[#38171d]"
        style="
          background: linear-gradient(
            48.15deg,
            rgba(229, 201, 159, 0.5) 0%,
            rgba(229, 201, 159, 0.5) 100%
          );
          box-shadow: 0px 4px 4px 0px rgba(137, 43, 44, 0.75);
          backdrop-filter: blur(2px);
        "
      >
        <div class="mx-auto pt-10">
          <div class="sm:flex sm:items-center sm:justify-center mb-10">
            <router-link
              to="/about"
              class="tracking-tight text-[#38171D] font-bold"
            >
              <img
                src="public/Profile-icon.png"
                class="w-10 h-10 rounded-[70px] absolute top-5 left-5 z-10"
              />
              <svg
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="absolute top-4 left-4"
              >
                <circle cx="23.9996" cy="24" r="24" fill="#CF6D41"></circle>
              </svg>
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="absolute top-5 left-5"
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
              <div class="absolute top-4 left-0 pl-20">
                Shawn Michael A. Dayuday
              </div>
              <div class="absolute top-10 left-0 pl-20">February 3, 2023</div>
            </router-link>

            <button
              class="absolute top-5 right-5 flex items-center rounded-md px-6 py-4 mb-10 text-3xl text-[#38171D] font-extrabold transition-all duration-200 hover:bg-opacity-100 hover:scale-110"
            >
              <img
                src="public/Options-icon.png"
                class="absolute top-0 right-0"
                width="48"
              />
            </button>
            <button
              class="absolute top-5 right-5 flex items-center rounded-md px-6 py-4 mb-10 text-3xl text-[#38171D] font-extrabold transition-all duration-200 hover:bg-opacity-100 hover:scale-110"
            >
              <img
                src="public/Share-dark-icon.png"
                class="absolute top-0 right-20"
                width="48"
              />
            </button>
            <button
              class="absolute top-5 right-5 flex items-center rounded-md px-6 py-4 mb-10 text-3xl text-[#] font-extrabold transition-all duration-200 hover:bg-opacity-100 hover:scale-110"
            >
              <img
                src="public/Bookmarks-dark-icon.png"
                class="absolute top-0 right-40"
                width="48"
              />
            </button>
          </div>

          <div
            class="relative sm:aspect-w-2 sm:aspect-h-3 h-80 w-full overflow-hidden"
          >
            <img
              src="public/UwU.jpg"
              class="h-full w-full object-cover object-center"
            />
            <div
              class="object-cover object-center absolute sm:aspect-w-2 sm:aspect-h-3 h-44 w-full top-0"
              style="
                background: linear-gradient(
                  0deg,
                  rgba(56, 23, 29, 0) 0%,
                  rgba(56, 23, 29, 1) 100%
                );
              "
            >
              <div class="pl-5 pr-5 mt-3 text-[#E5C99F] text-xl font-extrabold">
                UwU
              </div>
            </div>
          </div>

          <div class="p-5">
            <div class="text-xl text-[#38171D] font-extrabold">
              Introduction
            </div>
            <div class="text-[#38171D] font-bold">
                UwU
            </div>
            <div class="mt-5 text-xl text-[#38171D] font-extrabold">
              Ingredients
            </div>
            <div class="text-[#38171D] font-bold">
                UwU <br />
                UwU <br />
                UwU
            </div>
            <div class="mt-5 text-xl text-[#38171D] font-extrabold">
              Step 1:
            </div>
            <div class="text-[#38171D] font-bold">
              UwU
            </div>
            <div class="mt-5 text-xl text-[#38171D] font-extrabold">
              Step 2:
            </div>
            <div class="text-[#38171D] font-bold">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
              fuga vitae repudiandae! Repellat architecto, quod veniam porro
              cumque consequuntur!
            </div>
          </div>
        </div>
      </div>

      <!-- SIDE CONTENTS -->
      <div class="grid-row-3 pb-20">
        <div
          class="row-1 group relative rounded-xl p-4 mx-10"
          style="
            background: linear-gradient(
              48.15deg,
              rgba(137, 43, 44, 0.75) 0%,
              rgba(207, 109, 65, 0.75) 100%
            );
            box-shadow: 0px 4px 4px 0px rgba(137, 43, 44, 0.75);
            backdrop-filter: blur(1px);
          "
        >
          <div
            class="relative sm:aspect-w-2 sm:aspect-h-3 h-44 w-full overflow-hidden rounded-lg"
          >
            <img
              src="public/Slideshow-1.jpg"
              class="h-full w-full object-cover object-center"
            />
            <div
              class="rounded-lg object-cover object-center absolute sm:aspect-w-2 sm:aspect-h-3 h-44 w-full top-4"
              style="
                background: linear-gradient(
                  180deg,
                  rgba(56, 23, 29, 0) 0%,
                  rgba(56, 23, 29, 1) 100%
                );
              "
            >
              <button class="absolute right-0">
                <img width="48" src="public/Options-icon.png" />
              </button>
            </div>
          </div>

          <div class="mt-4 flex flex-row justify-between text-[#E5C99F]">
            <div class="flex flex-row">
              <img
                src="public/Video-duration-icon.png"
                width="24"
                class="mr-1"
              />3.14
              <img
                src="public/Chef-hat-icon.png"
                width="24"
                class="ml-5 mr-1"
              />14.8k
              <img
                src="public/Bookmarks-icon.png"
                width="24"
                class="absolute right-0 mr-4"
              />
            </div>
          </div>
          <h4
            class="mt-4 text-base font-medium leading-tight text-[#E5C99F] line-clamp-3"
          >
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident
            quo excepturi soluta! Maiores cupiditate quam nostrum illum, odio
            soluta corporis aut suscipit esse saepe quidem et, eveniet animi eos
            officia.
          </h4>
          <div
            class="mt-4 flex w-full flex-col items-end justify-end text-[#E5C99F]"
          >
            <h4 class="text-sm">SHAWN MICHAEL A. DAYUDAY</h4>
            <h5 class="text-xs">November 19. 2022</h5>
          </div>
        </div>

        <div
          class="row-span-1 group relative rounded-xl p-4 mx-10 top-10"
          style="
            background: linear-gradient(
              48.15deg,
              rgba(137, 43, 44, 0.75) 0%,
              rgba(207, 109, 65, 0.75) 100%
            );
            box-shadow: 0px 4px 4px 0px rgba(137, 43, 44, 0.75);
            backdrop-filter: blur(1px);
          "
        >
          <div
            class="relative sm:aspect-w-2 sm:aspect-h-3 h-44 w-full overflow-hidden rounded-lg"
          >
            <img
              src="public/Slideshow-1.jpg"
              class="h-full w-full object-cover object-center"
            />
            <div
              class="rounded-lg object-cover object-center absolute sm:aspect-w-2 sm:aspect-h-3 h-44 w-full top-4"
              style="
                background: linear-gradient(
                  180deg,
                  rgba(56, 23, 29, 0) 0%,
                  rgba(56, 23, 29, 1) 100%
                );
              "
            >
              <button class="absolute right-0">
                <img width="48" src="public/Options-icon.png" />
              </button>
            </div>
          </div>

          <div class="mt-4 flex flex-row justify-between text-[#E5C99F]">
            <div class="flex flex-row">
              <img
                src="public/Video-duration-icon.png"
                width="24"
                class="mr-1"
              />3.14
              <img
                src="public/Chef-hat-icon.png"
                width="24"
                class="ml-5 mr-1"
              />14.8k
              <img
                src="public/Bookmarks-icon.png"
                width="24"
                class="absolute right-0 mr-4"
              />
            </div>
          </div>
          <h4
            class="mt-4 text-base font-medium leading-tight text-[#E5C99F] line-clamp-3"
          >
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident
            quo excepturi soluta! Maiores cupiditate quam nostrum illum, odio
            soluta corporis aut suscipit esse saepe quidem et, eveniet animi eos
            officia.
          </h4>
          <div
            class="mt-4 flex w-full flex-col items-end justify-end text-[#E5C99F]"
          >
            <h4 class="text-sm">SHAWN MICHAEL A. DAYUDAY</h4>
            <h5 class="text-xs">November 19. 2022</h5>
          </div>
        </div>
      </div>
    </div>
    <!-- Spacing -->
    <div class="mx-auto p-10">
      <div class="sm:flex sm:items-center sm:justify-center"></div>
    </div>
  </div>
</template>
