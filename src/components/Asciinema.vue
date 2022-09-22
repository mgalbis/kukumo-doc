<template>
  <div ref="player"></div>
</template>

<static-query>
query {
  metadata {
    pathPrefix
  }
}
</static-query>

<script>
export default {
  props: {
    src: {
      type: String,
      required: true
    },
    cols: {
      type: Number,
      required: false
    },
    rows: {
      type: Number,
      required: false
    },
    title: {
      type: String,
      required: false
    },
    author: {
      type: String,
      required: false
    },
    authorUrl: {
      type: String,
      required: false
    },
    authorImgUrl: {
      type: String,
      required: false
    },
    idleTimeLimit: {
      type: Number,
      required: false,
      default: 2
    },
    preload: {
      type: Boolean,
      required: false
    },
    autoplay: {
      type: Boolean,
      required: false
    },
    fontSize: {
      type: Number,
      required: false,
      default: 12
    },
    speed: {
      type: Number,
      required: false,
      default: 1,
      validator(value) {
        return value > 0;
      }
    },
    startAt: {
      type: String,
      required: false,
      default: 0
    },
    theme: {
      type: String,
      default: "asciinema",
      validator(value) {
        return (
          [
            "asciinema",
            "tango",
            "solarized-dark",
            "solarized-light",
            "monokai"
          ].indexOf(value) != -1
        );
      }
    }
  },
  data() {
    return {
      player: null,
      prefix: null
    };
  },
  watch: {
    src(newValue, oldValue) {
      if (newValue && oldValue !== newValue) {
        this.destoryInstance();
      }
      this.createPlayer();
    }
  },
  computed: {
    console: () => console,
    window: () => window
  },
  created() {
      this.prefix = this.$static.metadata.pathPrefix
  },
  methods: {
    pause() {
      if (this.player) {
        this.player.pause();
      }
    },
    play() {
      if (this.player) {
        this.player.play();
      }
    },
    createPlayer() {

      this.player = window.asciinema.player.js.CreatePlayer(
        this.$refs.player,
        (this.prefix ? this.prefix+'/' : '') + this.src,
        {
          width: this.cols,
          height: this.rows,
          loop: false,
          "font-size": this.fontSize,
          title: this.title,
          author: this.author,
          "author-img-url": this.authorImgUrl,
          "author-url": this.authorUrl,
          theme: this.theme,
          "idle-time-limit": this.idleTimeLimit,
          startAt: this.startAt,
          poster: this.poster,
          speed: this.speed,
          autoPlay: this.autoplay,
          preload: this.preload
        }
      );
    },
    destoryInstance() {
      window.asciinema.player.js.UnmountPlayer(this.$refs.player);
      this.player = null;
    }
  },
  beforeDestroy() {
    this.destoryInstance();
  },
  mounted() {
    this.createPlayer();
  }
}
</script>
