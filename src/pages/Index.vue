<template>
  <Layout :sidebar="false">
    <div class="content">
      <h1>{{ $t('description') }}</h1>
      <nav>
        <!-- To use other icons here, you need to import them in the Shortcut component -->
        <Shortcut v-bind:link="$tp('introduction/getting-started')" v-bind:text="$t('index1')" icon="play-icon" />
        <Shortcut v-bind:link="$tp('plugins')" v-bind:text="$t('index2')" icon="file-text-icon" />
        <Shortcut v-bind:link="$tp('kukumo/architecture#configuración-global')" v-bind:text="$t('index3')" icon="sliders-icon" />
      </nav>
      <GitLink class="git" size="large" />
    </div>
  </Layout>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
import GitLink from '~/components/GitLink.vue'
import Shortcut from '~/components/Shortcut.vue'

export default {
  components: {
    GitLink,
    Shortcut
  },
  metaInfo() {
    return {
      title: "Kukumo",
      meta: [
        { key: 'description', name: 'description', content: this.$t('description') }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.content {
  display: flex;
  flex-direction: column;
}

h1 {
  text-align: center;
  max-width: 600px;
  margin: 1.5em auto 1.5em;

  @include respond-above(md) {
    max-width: 1000px;
  }
}

h2 {
  font-size: 1.4rem;
  margin: 0;
}

nav {
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  @include respond-above(sm) {
    flex-direction: row;
  }
}

.git {
  margin: 3em 0 0;
  align-self: center;

  @include respond-above(md) {
    margin: 5em 0 0;
  }
}
</style>
