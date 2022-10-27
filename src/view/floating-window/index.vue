<template>
  <div class="ballBox"
       @click="openWin()">工具</div>
</template>

<script setup>
const { ipcRenderer } = require('electron')
const openWin = () => {
  //渲染进程向主进程发送消息，点击打开主页面
  ipcRenderer.send('openWin', true)
}
</script>
<style>
.ballBox {
  width: 60px;
  height: 60px;
  line-height: 60px;
  border-radius: 50%;
  box-sizing: border-box;
  background: #eee;
  border: 1px solid #eee;
  text-align: center;
  cursor: pointer;
  font-size: 14px;
}
</style>