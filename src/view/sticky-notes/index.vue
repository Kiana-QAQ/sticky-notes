<script lang="ts">
import { reactive, ref, watch } from "vue";
type noteList = {
  center: string;
};
export default {
  setup() {
    const noteList = reactive<noteList[]>([]);
    let input = ref<boolean>(false);
    noteList.push({
      center: "1",
    });
    const create = (): void => {
      input.value = true;
    };
    let monitorInput = ref<string>("");
    let textarea = ref()
    watch(monitorInput, (val) => {
      textarea.value.style.height = textarea.value.scrollHeight + 'px'
    });
    return {
      noteList,
      create,
      monitorInput,
      input,
      textarea,
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
      <div v-if="!input"
           class="notes-btn"
           @click="input = true">
        <img src="./image/add.svg" />
      </div>
      <div v-else
           class="notes-input">
        <textarea v-model="monitorInput"
                  ref="textarea"
                  name="notesInput"
                  id="notesInput"
                  autocomplete="off"></textarea>
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
      line-height: 24px;
      font-weight: 400;
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
      transition: 200ms;
      & > img {
        transition: 200ms;
        width: 24px;
      }
      &:hover {
        box-shadow: 0 0 4px 1px #d9d9d9;
        & > img {
          transform: rotate(90deg);
        }
      }
    }
    .notes-input {
      display: flex;
      width: 100%;
      & > textarea {
        font-size: 18px;
        line-height: 24px;
        font-weight: 400;
        font-family: Inter, Avenir, Helvetica, Arial, sans-serif;

        overflow-y: hidden;
        display: block;
        resize: none;
        padding: 8px;
        box-sizing: border-box;
        width: 100%;
        height: 40px;
        color: #606266;
        background-color: #fff;
        background-image: none;
        border: none;
        border-radius: 4px;
        transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
      }
    }
  }
}
</style>