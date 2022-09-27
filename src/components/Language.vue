<template>
  <button id="languageSwitch" @click="toggleLanguage()" aria-label="Switch language between spanish and english">
    <globe-icon class="globe" /> {{ language == 'es-es' ? 'EN' : 'ES' }}
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
      language: this.$i18n.locale
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

      if (process.isClient && this.language == 'es-es') {
        this.language = 'en-gb';
      } else {
        this.language = 'es-es';
      }


      console.log("Language: ", this.language)
      this.$router.push({
        path: this.$tp(this.$route.path, this.language, true)
      })
      //this.$emit('language-change')
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
  padding: 0 10px;
  transition: color .15s ease-in-out;
  cursor: pointer;
  width: 70px;
  height: 48px;
  position: relative;
  text-align: right;

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

.theme-enter-active, .theme-leave-active {
  transition: transform .25s ease-in-out, opacity .25s ease-in-out;
}
.theme-enter, .theme-leave-to /* .fade-leave-active below version 2.1.8 */ {
  transform: translateY(20px) scale(.5);
  opacity: 0;
}
</style>


