<template>
  <!-- CONTAINER -->
  <div
    class="relative top-[-850px] flex items-center justify-center mx-40 rounded-xl border-2 border-[#38171d]"
    style="
      background: linear-gradient(
        180deg,
        rgba(178, 123, 106, 0.75) 0%,
        rgba(178, 123, 106, 0.56) 100%
      );
      backdrop-filter: blur(2px);
    "
  >
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
          to="/create"
          class="text-3xl font-extrabold tracking-tight text-[#E5C99F] hover:text-[#CF6D41]"
          active-class="text-[#892B2C] hover:text-[#892B2C]"
        >
          Read
        </router-link>
        <router-link
        to="/post"
          class="absolute top-5 right-5 flex items-center rounded-md bg-[#CF6D41] px-6 py-4 mb-10 text-3xl text-[#38171D] font-extrabold shadow-sm bg-opacity-90 transition-all duration-200 hover:bg-opacity-100 hover:scale-110"
        >
          <img
            src="public/Dinners-ready-icon.png"
            class="-translate-x-2"
            width="48"
          />
          Dinner's Ready!
      </router-link>
      </div>

      <!-- ADD IMAGE -->
      <div class="flex flex-row">
        <button
          class="mx-auto flex items-center rounded-md bg-[#892B2C] px-6 py-4 mt-10 mb-10 text-3xl text-[#E5C99F] font-medium shadow-sm bg-opacity-90 hover:bg-opacity-100 transition-all duration-200 hover:scale-110"
          @click="openFileExplorer"
          :disabled="addButtonDisabled"
        >
          <img
            src="public/Add-icon.png"
            class="rotate-45 -translate-x-2"
            width="48"
          />
          Add Image
        </button>
        <button
          class="mx-auto flex items-center rounded-md bg-[#892B2C] px-6 py-4 mt-10 mb-10 text-3xl text-[#E5C99F] font-medium shadow-sm bg-opacity-90 hover:bg-opacity-100 transition-all duration-200 hover:scale-110"
          v-if="selectedImage"
          @click="deleteImagePrompt"
        >
          <img
            src="public/Delete-light-icon.png"
            class="rotate-[315deg] -translate-x-2"
            width="48"
          />
          Delete Image
        </button>
      </div>

      <input
        type="file"
        ref="fileInput"
        @change="addImage"
        style="display: none"
      />
      <div
        v-if="selectedImage"
        class="flex items-center justify-center mx-40 rounded-xl border-2 border-[#892B2C] bg-[#E5C99F] p-2 mb-5"
      >
        <img
          :src="selectedImage"
          class="rounded-lg w-full h-[500px] object-cover object-center"
        />
      </div>

      <!-- ADD TITLE -->
      <div class="relative flex flex-row items-center mb-10">
        <input
          v-model="title"
          placeholder="Content Title..."
          class="flex-1 relative placeholder-[#E5C99F] text-[#E5C99F] transition-all duration-300 border-[#38171D] border-4 text-3xl font-extrabold rounded-md pt-5 pb-5 pl-5 outline-none overflow-auto hover:border-[#892B2C]"
          style="
            background: linear-gradient(
              311.85deg,
              rgba(137, 43, 44, 0.75) 0%,
              rgba(207, 109, 65, 0.75) 100%
            );
            backdrop-filter: blur(2px);
          "
        />
        <select
          class="relative placeholder-[#E5C99F] text-[#E5C99F] border-[#38171D] transition-all duration-300 border-4 text-3xl font-extrabold rounded-md pt-5 pb-5 pr-10 pl-5 mx-10 outline-none appearance-none overflow-auto hover:border-[#892B2C]"
          style="
            background: linear-gradient(
              311.85deg,
              rgba(137, 43, 44, 0.75) 0%,
              rgba(207, 109, 65, 0.75) 100%
            );
            backdrop-filter: blur(2px);
          "
        >
          <option class="bg-[#892B2C] font-bold" value="">
            Select a category
          </option>
          <option class="bg-[#892B2C] font-bold" value="appetizer">
            Appetizer
          </option>
          <option class="bg-[#892B2C] font-bold" value="main_course">
            Main Course
          </option>
          <option class="bg-[#892B2C] font-bold" value="dessert">
            Dessert
          </option>
        </select>
      </div>

      <!-- CONTENT TEMPLATE -->

      <div
        class="flex items-center justify-center mx-40 rounded-xl border-2 border-[#892B2C] bg-[#E5C99F] font-large font-extrabold text-3xl mb-10"
        v-for="(content, index) in contents"
        :key="index"
        :class="{
          fadeInDown: showDeletePrompt !== index,
          fadeOutUp: showDeletePrompt === index,
        }"
      >
        <button @click="messagePrompt(index)">
          <img
            src="public/Delete-icon.png"
            class="rotate-[315deg] ml-10 mr-20"
          />
        </button>
        <div class="flex-col">
          <textarea
            class="mt-5 bg-transparent text-[#892B2C] placeholder-[#892B2C] focus:outline-none focus:shadow-outline-primary resize-none overflow-auto pr-20 w-[1000px] h-[50px]"
            placeholder="Title..."
            v-model="content.title"
          ></textarea>
          <hr class="w-[900px] border-2 rounded-md border-[#38171D]" />
          <textarea
            class="mt-5 bg-transparent text-[#38171D] placeholder-[#38171D] focus:outline-none focus:shadow-outline-primary resize-none overflow-auto pr-20 w-[1000px] h-[180px]"
            placeholder="Description..."
            v-model="content.text"
          ></textarea>
        </div>
      </div>

      <div
        class="flex items-center justify-center mx-40 rounded-xl border-2 border-[#892B2C] bg-[#E5C99F] font-large font-extrabold text-3xl mb-10"
      >
        <button
          class="mt-10 mb-10 pl-20 pr-20 ml-20 mr-20 text-[#38171D] hover:text-[#892B2C] hover:scale-110 transition-all duration-200 ease-in-out flex flex-row items-center"
          @click="addNewContent"
        >
          <img
            src="public/Add-dark-icon.png"
            class="rotate-45 -translate-x-2"
            width="48"
          />
          Add New Content
        </button>
      </div>
    </div>

    <!-- DELETE PROMPT -->
    <div
      v-if="showDeletePrompt"
      class="absolute top-0 left-0 h-full w-full backdrop-blur-md opacity-95 overflow-hidden"
    ></div>
    <div
      v-if="showDeletePrompt"
      class="absolute flex items-center justify-center rounded-xl border-2 border-[#38171d] overflow-hidden"
      style="background-color: #e5c99f; backdrop-filter: blur(2px)"
    >
      <div
        class="absolute text-center text-lg font-bold text-[#38171D] mb-20 pb-10 ml-10 mr-10"
      >
        <span
          >Are you sure you want to<br />
          <span class="text-[#892B2C]">DELETE</span> this
          <span class="text-[#CF6D41]">CONTENT</span>?</span
        >
      </div>
      <div class="sm:flex sm:items-center sm:justify-center p-10 mt-20">
        <button
          @click="confirmDelete"
          class="text-3xl mr-20 p-4 rounded-md font-extrabold tracking-tight text-[#38171D] bg-[#CF6D41] hover:scale-110 transition-all duration-200 ease-in-out"
        >
          Yes
        </button>
        <button
          @click="cancelDelete"
          class="text-3xl ml-10 p-4 rounded-md font-extrabold tracking-tight text-[#E5C99F] bg-[#38171D] hover:scale-110 transition-all duration-200 ease-in-out"
        >
          No
        </button>
      </div>
    </div>
    <!-- Delete Image Prompt -->
    <div
      v-if="showDeleteImagePrompt"
      class="absolute top-0 left-0 h-full w-full backdrop-blur-md opacity-95 overflow-hidden"
    ></div>
    <div
      v-if="showDeleteImagePrompt"
      class="absolute flex items-center justify-center rounded-xl border-2 border-[#38171d] overflow-hidden top-[100px]"
      style="background-color: #e5c99f; backdrop-filter: blur(2px)"
    >
      <div
        class="absolute text-center text-lg font-bold text-[#38171D] mb-20 pb-10 ml-10 mr-10"
      >
        <span
          >Are you sure you want to<br />
          <span class="text-[#892B2C]">DELETE</span> this
          <span class="text-[#CF6D41]">CONTENT</span>?</span
        >
      </div>
      <div class="sm:flex sm:items-center sm:justify-center p-10 mt-20">
        <button
          @click="confirmDeleteImage"
          class="text-3xl mr-20 p-4 rounded-md font-extrabold tracking-tight text-[#38171D] bg-[#CF6D41] hover:scale-110 transition-all duration-200 ease-in-out"
        >
          Yes
        </button>
        <button
          @click="cancelDeleteImage"
          class="text-3xl ml-10 p-4 rounded-md font-extrabold tracking-tight text-[#E5C99F] bg-[#38171D] hover:scale-110 transition-all duration-200 ease-in-out"
        >
          No
        </button>
      </div>
    </div>
  </div>
  <SpecialtyView />
</template>

<!-- SCRIPT -->
<script>
export default {
  data() {
    return {
      contents: [],
      showDeletePrompt: false,
      showDeleteImagePrompt: false,
      selectedIndex: null,
      selectedImage: null,
    };
  },
  methods: {
    openFileExplorer() {
      this.$refs.fileInput.click();
    },
    addImage(event) {
      if (event.target.files.length > 0) {
        if (this.selectedImage) {
          this.addButtonDisabled = true;
        } else {
          this.selectedImage = URL.createObjectURL(event.target.files[0]);
          this.addButtonDisabled = false;
        }
      }
    },
    deleteImagePrompt() {
      this.showDeleteImagePrompt = true;
    },
    cancelDeleteImage() {
      this.showDeleteImagePrompt = false;
    },
    confirmDeleteImage() {
      URL.revokeObjectURL(this.selectedImage);
      this.selectedImage = null;
      this.$refs.fileInput.value = null;
      this.showDeleteImagePrompt = false;
    },
    addNewContent() {
      if (this.contents.length < 5) {
        this.contents.push({
          title: "",
          description: "",
        });
      }
    },
    messagePrompt(index) {
      this.selectedIndex = index;
      this.showDeletePrompt = true;
    },
    confirmDelete() {
      this.contents.splice(this.selectedIndex, 1);
      this.showDeletePrompt = false;
    },
    cancelDelete() {
      this.showDeletePrompt = false;
    },
  },
};
</script>

<style>
.fadeInDown {
  animation-name: fadeInDown;
  animation-duration: 1s;
}

.fadeOutUp {
  animation-name: fadeOutUp;
  animation-duration: 1s;
}

@keyframes fadeInDown {
  from {
    transform: translateY(-100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes fadeOutUp {
  from {
    transform: translateY(0);
    opacity: 1;
  }
  to {
    transform: translateY(-100%);
    opacity: 0;
  }
}
</style>
