<template>
  <div class="title-btn"
       :class="type"
       @click="click">
    <img :src="icon"
         alt="">
  </div>
</template>
<script>
const { ipcRenderer: ipc } = require('electron');
export default {
  name: 'title-btn',
  props: ['type'],
  data () {
    return {
      icon: '',
    }
  },
  mounted () {
    this.icon = new URL(`../image/${this.type}.svg`, import.meta.url).href
  },
  methods: {
    click () {
      ipc.send(this.type);
    }
  }
}
</script>
<style lang="scss">
.title-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 42px;
  background-color: transparent;
  -webkit-app-region: no-drag;
  & > img {
    height: 20px;
  }
}
</style>