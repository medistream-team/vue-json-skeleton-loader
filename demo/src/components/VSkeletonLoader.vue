<template>
  <div class="v-skeleton-loader">
    <template
      v-for="(contentElement, contentElementIndex) in createElementArr"
      v-bind:class="contentElementIndex"
    >
      <span
        :key="contentElementIndex"
        v-if="contentElement.includes('circle')"
        class="element circle"
        :class="circle"
        :width="width"
        :style="{
          width: 50 + 'px',
          height: 50 + 'px',
          borderRadius: 50 + '%',
          backgroundColor: '#ddd',
        }"
      >
      </span>
      <span
        :key="contentElementIndex"
        v-if="contentElement.includes('box')"
        class="element box"
        :class="box"
        :style="{
          width: 50 + 'px',
          height: 50 + 'px',
          borderRadius: 6 + 'px',
        }"
      >
      </span>
      <span
        :key="contentElementIndex"
        v-if="contentElement.includes('rec16_9')"
        class="element rec16_9"
        :class="rec16_9"
        :style="{
          width: 50 + 'px',
          height: 50 + 'px',
          borderRadius: 6 + 'px',
        }"
      >
      </span>
      <span
        :key="contentElementIndex"
        v-if="contentElement.includes('rec9_16')"
        class="element rec9_16"
        :class="rec9_16"
        :style="{
          width: 50 + 'px',
          height: 50 + 'px',
          borderRadius: 6 + 'px',
        }"
      >
      </span>
    </template>

    <div
      class="col"
      v-for="(element, elementIndex) in elementArr"
      :key="elementIndex"
    >
      <span v-if="element.includes('title')" class="element title"></span>
      <span v-if="element === 'text'" class="element text"></span>
      <span
        v-if="element === 'title + text'"
        class="element"
        :class="element"
      ></span>
      <template v-if="element.includes('text:')">
        <span
          v-for="(e, i) in parseInt(element.split(':')[1], 10)"
          class="element text"
          :class="element"
          :key="i"
        >
        </span>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  name: "VSkeletonLoader",
  data() {
    return {
      height: {
        type: [Number, String],
        default: 200,
      },
      width: {
        type: [Number, String],
        default: 200,
      },
      borderRadius: {
        type: [Number, String],
        default: 0,
      },
      con222: [],
      createElementArr: [],
      elementArr: [],
    };
  },
  props: {
    content: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  watch: {
    content(content) {
      // console.log("변경 감지");
      // console.log("watch-content", content);

      const tempCreateElementArr = [];
      const tempElementArr = [];

      // console.log("mounted, this.content: ", content);
      // console.log("mounted, this.content: ", Array.isArray(content));

      for (const con of content) {
        for (const inn of con) {
          if (inn === "circle") {
            tempCreateElementArr.push(inn);
          }

          if (inn === "box") {
            tempCreateElementArr.push(inn);
          }

          if (inn === "rec16_9") {
            tempCreateElementArr.push(inn);
          }

          if (inn === "rec9_16") {
            tempCreateElementArr.push(inn);
          }

          if (inn.includes("title")) {
            tempElementArr.push(inn);
          } else if (inn === "text") {
            tempElementArr.push(inn);
          } else if (inn === "title + text") {
            tempElementArr.push(inn);
          } else if (inn.includes("text:")) {
            tempElementArr.push(inn);
          }
        }
      }

      // console.log({
      //   tempCreateElementArr,
      //   tempElementArr,
      // });

      this.createElementArr = tempCreateElementArr;
      this.elementArr = tempElementArr;
    },
  },
  mounted: function () {
    const tempCreateElementArr = [];
    const tempElementArr = [];

    // console.log("mounted, this.content: ", this.content);

    for (const con of this.content) {
      for (const inn of con) {
        if (inn === "circle") {
          tempCreateElementArr.push(inn);
        }

        if (inn === "box") {
          tempCreateElementArr.push(inn);
        }

        if (inn === "rec16_9") {
          tempCreateElementArr.push(inn);
        }

        if (inn === "rec9_16") {
          tempCreateElementArr.push(inn);
        }

        if (inn.includes("title")) {
          tempElementArr.push(inn);
        } else if (inn === "text") {
          tempElementArr.push(inn);
        } else if (inn === "title + text") {
          tempElementArr.push(inn);
        } else if (inn.includes("text:")) {
          tempElementArr.push(inn);
        }
      }
    }

    this.createElementArr = tempCreateElementArr;
    this.elementArr = tempElementArr;

    // console.log("this.createElementArr: ", this.createElementArr);
    // console.log("this.elementArr: ", this.elementArr);
  },
};
</script>

<style lang="scss">
.v-skeleton-loader {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin: -5px;
  padding: 30px;
  border: 3px solid #ddd;

  .col {
    flex-grow: 1;
    margin: 0 5px;

    &:nth-child(3) {
      width: 100%;
    }
  }
}

.element {
  display: block;
  position: relative;
  width: 100%;
  height: 100%;
  margin: 5px 0;
  background-color: #dddbdd;
  border-radius: 5px;
  text-indent: -9999px;
  overflow: hidden;

  &.circle {
    border-radius: 50%;
  }
  &.title {
    height: 20px;
  }
  &.title:first-child {
    width: 30%;
  }
  &.text {
    height: 15px;
  }
  &.text:nth-child(2) {
    width: 70%;
  }
  &.text:nth-child(3) {
    width: 50%;
  }
  &.text:nth-child(4) {
    width: 60%;
  }

  &:after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    transform: translateX(-100%);
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.5),
      transparent
    );
    animation: shimmer 1.5s infinite;
  }
}

@keyframes shimmer {
  100% {
    transform: translateX(100%);
  }
}
</style>
