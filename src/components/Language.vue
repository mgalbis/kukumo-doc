<template>
  <button id="languageSwitch" @click="toggleLanguage()" aria-label="Switch language between spanish and english">
    <transition name="language">
      <globe-icon v-if="language == 'es'" class="globe" />EN
    </transition>
    <transition name="language">
      <globe-icon v-if="language == 'en'" class="globe" />ES
    </transition>
  </button>
</template>

<script>
import { GlobeIcon } from 'vue-feather-icons'

export default {
  components: {
    GlobeIcon
  },
  data() {
    return {
      language: this.$i18n.locale.toString()
    }
  },
  methods: {
    // setLanguage: function() {
    //   let self = this
    //   const body = document.querySelector('body')
    //
    //   if (process.isClient && localStorage.getItem('language') === null) {
    //     localStorage.setItem('language', 'es')
    //     self.language = 'es'
    //   }
    //   if (process.isClient) {
    //     body.classList.add(localStorage.getItem('language'))
    //     self.language = localStorage.getItem('language')
    //   }
    // },
    toggleLanguage: function() {
      // let self = this
      // const body = document.querySelector('body')
      //
      // if (process.isClient) {
      //   if (body.classList.contains('en')) {
      //     localStorage.setItem('language', 'es');
      //     body.classList.remove('en')
      //     body.classList.add('es')
      //     self.language = 'es'
      //   } else {
      //     localStorage.setItem('language', 'en');
      //     body.classList.remove('es')
      //     body.classList.add('en')
      //     self.language = 'en'
      //   }
      // }
      console.log("Language: ", this.language)
      this.$router.push({
        path: this.$tp(this.$route.path, this.language, true)
      })
      this.$emit('language-change')
    }
  },
  mounted () {
    //this.setLanguage()
  }
}
</script>

<style lang="scss" scoped>
button {
  background: none;
  border: 0;
  padding: 0;
  transition: color .15s ease-in-out;
  cursor: pointer;
  width: 48px;
  height: 48px;
  position: relative;

  &:focus {
    outline: none;
  }

  .dark & {
    color: $textDark;
  }

  .bright & {
    color: $textBright;
  }
}

svg {
  position: absolute;
  top: 12px;
  left: 12px;
}

.language-enter-active, .language-leave-active {
  transition: transform .25s ease-in-out, opacity .25s ease-in-out;
}
.language-enter, .language-leave-to /* .fade-leave-active below version 2.1.8 */ {
  transform: translateY(20px) scale(.5);
  opacity: 0;
}
</style>


