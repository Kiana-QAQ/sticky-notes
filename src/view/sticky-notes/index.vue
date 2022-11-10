<script lang="ts">
import { reactive } from "vue";
type noteList = {
  center: string;
};
export default {
  setup() {
    const noteList = reactive<noteList[]>([]);
    noteList.push(
      {
        center: "",
      }
    );
    return {
      noteList,
    };
  },
};
</script>
<template>
  <div class="stick-notes">
    <div class="notes-center">
      <template v-for="(x,i) in noteList"
                :key="i">
        <span class="notes-text">{{x.center}}</span>
      </template>
    </div>
    <div class="notes-add">
      <div class="notes-btn">
        <img src="./image/add.svg" />
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.stick-notes {
  padding: 16px;
  height: calc(100% - 32px);
  // overflow-y: scroll;
  .notes-center {
    display: flex;
    flex-direction: column;
    .notes-text {
      position: relative;
      margin-bottom: 16px;
      padding: 12px 8px 8px;
      border-radius: 4px;
      background-color: #ffffff;
      font-size: 18px;
      overflow: hidden;
      transition: 200ms;
      &:hover {
        box-shadow: 0 2px 4px 1px #d9d9d9;
        &::before {
          height: 5px;
        }
      }
      &::before {
        position: absolute;
        top: 0;
        left: 0;
        content: "";
        width: 100%;
        height: 4px;
        transition: 200ms;
      }
    }
  }
  .notes-add {
    display: flex;
    .notes-btn {
      display: flex;
      padding: 8px;
      background-color: #fff;
      border-radius: 50%;
      & > img {
        width: 20px;
      }
    }
  }
}
</style>