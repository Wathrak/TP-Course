<template>
  <div class="flex flex-col min-h-dvh">
    <Header class="flex-grow-0" />
    <div class="flex flex-1 bg-blue-300">
      <Section
        @passSectionNumber="(arg) => (sectionNumber = arg)"
        class="bg-pink-300 flex flex-grow-0"
      />
      <div class="flex-1 self-center text-center text-2xl">
        <div>Welcome to Page {{ this.$route.params.pageNumber }}</div>

        <div v-if="this.$route.params.id != null">
          <hr class="border-black border-dashed my-5 mx-96" />
          This is Section {{ sectionNumber }} of Page {{ this.$route.params.pageNumber }}
        </div>

        <div class="py-6">
          <button @click="handleClick">
            <div v-if="clicked == true">
              Message from Page {{ pageNum }}:
              <div>{{ selectedMessage }}</div>
            </div>
            <div v-else class="flex">
              Message:
              <div class="border border-black py-1 px-24 mx-4">
                <div v-if="this.$route.params.pageNumber == 1">Hello</div>
                <div v-else-if="this.$route.params.pageNumber == 2">Bye</div>
                <div v-else>123</div>
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
    <Footer class="flex-grow-0" />
  </div>
</template>
<script>
import Header from '@/components/Header.vue'
import Section from './Section.vue'
import Footer from '../components/Footer.vue'

export default {
  components: { Header, Section, Footer },
  data() {
    return {
      sectionNumber: 1,
      clicked: false,
      pageNum: 1,
      message: 'my message',
      selectedMessage: 'selected message',
    }
  },
  methods: {
    handleClick() {
      this.clicked = true
      this.pageNum = this.$route.params.pageNumber
      this.selectedMessage = this.getMessage(this.pageNum)
    },
    getMessage(pageNumber) {
      switch (Number(pageNumber)) {
        case 1:
          return 'Hello'
        case 2:
          return 'Bye'
        case 3:
          return '123'
        default:
          return 'Unknown Message'
      }
    },
  },
}
</script>
<style></style>
