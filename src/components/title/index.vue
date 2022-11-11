<template>
  <div id="title"
       class="notes-title">
    <template v-for="(x,i) in btnType"
              :key="i">
      <titleBtn :type="x.type" />
    </template>
  </div>
</template>

<script>
import titleBtn from './components/titleBtn.vue'
export default {
  name: 'Title',
  components: {
    titleBtn
  },
  data () {
    return {
      btnType: [
        {
          type: 'min',
        },
        {
          type: 'close',
        }
      ]
    }
  },
  methods: {
  }
}
</script>
    
<style lang="scss">
#title {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 30px;
  -webkit-app-region: drag;
}
.notes-title {
  display: flex;
  justify-content: flex-end;
  user-select:none;
}
</style>