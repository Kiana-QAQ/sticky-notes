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
    let textarea = ref();
    let textLength: number = 0; //一行的字符数
    let changeHeight: number = 0; //换行时增加的高度
    let rowsLength: number = 0; //行数(从零开始计数)
    watch(monitorInput, (val) => {
      if (textarea.value.clientHeight != textarea.value.scrollHeight) {
        textLength = textarea.value.textLength - 1; //获取一行的字符数
        changeHeight =
          textarea.value.scrollHeight - textarea.value.clientHeight; //获取换行时增加的高度
        textarea.value.style.height = textarea.value.scrollHeight + "px"; //计算当前输入框高度
        rowsLength++; //行数+1
      } else if (textLength >= textarea.value.textLength) {
        textarea.value.style.height =
          rowsLength == 0
            ? textarea.value.scrollHeight + "px"
            : textarea.value.scrollHeight - changeHeight + "px"; //当行数不为0时,每次后退一行,输入框高度减去换行时增加的高度
        textLength = rowsLength == 0 ? 0 : textLength / rowsLength; //当行数不为0时,计算换行前的字符数
        rowsLength = rowsLength == 0 ? 0 : rowsLength - 1; //当行数不为0时,行数-1
      }
    });
    const shutDown = (): void => {
      input.value = input.value ? !input.value : input.value;
    };
    return {
      noteList,
      create,
      monitorInput,
      input,
      textarea,
      shutDown,
    };
  },
};
</script>
<template>
  <div class="stick-notes"
       @click="shutDown">
    <div class="notes-center">
      <template v-for="(x,i) in noteList"
                :key="i">
        <span class="notes-text">{{x.center}}</span>
      </template>
    </div>
    <div class="notes-add">
      <div class="notes-btn"
           :class="{'close': input}"
           @click.stop="input = true">
        <img src="./image/add.svg" />
      </div>
      <div class="notes-input"
           :class="{'appear': input}">
        <textarea v-model="monitorInput"
                  rows="1"
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
    position: relative;
    .notes-btn {
      position: absolute;
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
    .close {
      display: none;
    }
    .notes-input {
      width: 40px;
      transition: 500ms;
      overflow: hidden;
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
        border-radius: 20px;
        transition: 500ms;
        &:focus {
          outline: none;
          box-shadow: 0 0 4px 1px #d9d9d9;
        }
      }
    }
    .appear {
      width: 100%;
      & > textarea {
        border-radius: 4px;
      }
    }
  }
}
</style>