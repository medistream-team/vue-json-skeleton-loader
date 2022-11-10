<template>
  <div id="app">
    <Header />
    <section class="example-hero">
      <div>
        <VSkeletonLoader
          :options="{
            radius: 3,
            primaryColor: '#94bcff',
            secondaryColor: '#c7dcff',
            animate: true,
            speed: '1.5s',
            defaultSizes: {
              box: 100,
              circle: 100,
              title: 25,
              text: 15,
            },
          }"
          :content="textInput | jsonParse"
        />
        <MonacoEditor
          class="editor"
          v-model="textInput"
          language="javascript"
        />
      </div>
    </section>
    <Readme />
    <div class="section">
      <div class="contain">
        <h2>Examples</h2>
        <h3>Text with thumbnail</h3>
        <div class="group">
          <VSkeletonLoader class="sk" :content="JSON.parse(textInput1)" />
          <MonacoEditor
            class="editor"
            v-model="textInput1"
            language="javascript"
          />
        </div>
        <h3>Text with avatar</h3>
        <div class="group">
          <VSkeletonLoader class="sk" :content="JSON.parse(textInput2)" />
          <MonacoEditor
            class="editor"
            v-model="textInput2"
            language="javascript"
          />
        </div>
        <h3>Text with figure</h3>
        <div class="group">
          <VSkeletonLoader class="sk" :content="JSON.parse(textInput3)" />
          <MonacoEditor
            class="editor"
            v-model="textInput3"
            language="javascript"
          />
        </div>
        <div class="group">
          <VSkeletonLoader class="sk" :content="JSON.parse(textInput4)" />
          <MonacoEditor
            class="editor"
            v-model="textInput4"
            language="javascript"
          />
        </div>
      </div>
    </div>

    <div class="section section-3">
      <div class="contain">
        <h2>Options</h2>
        <h3>animations none</h3>
        <div class="view">
          <VSkeletonLoader
            :options="{
              radius: 3,
              primaryColor: '#ddd',
              secondaryColor: 'rgba(255, 255, 255, 0.5)',
              animate: true,
              speed: '0.5s',
              defaultSizes: {
                box: 70,
                circle: 70,
                title: 25,
                text: 15,
              },
            }"
            :content="type2"
          />
          <code>{{ type2 }}</code>
        </div>
        <div class="view"><Type2 :content="type2" /></div>
        <h3>animations speed 2s</h3>
        <div class="view"><Type1 :content="type3" /></div>
        <h3>secondaryColor</h3>
        <div class="view"><Type3 :content="type26" /></div>
        <h3>primaryColor</h3>
        <div class="view"><Type4 :content="type38" /></div>
        <License />
      </div>
    </div>
  </div>
</template>

<script>
import Readme from "@/components/Readme.vue";
import Header from "@/components/Header.vue";
import Type1 from "@/components/Type1.vue";
import Type2 from "@/components/Type2.vue";
import Type3 from "@/components/Type3.vue";
import Type4 from "@/components/Type4.vue";
import License from "@/components/License.vue";
import MonacoEditor from "vue-monaco";
export default {
  name: "App",
  components: {
    Header,
    MonacoEditor,
    Type1,
    Type2,
    Type3,
    Type4,
    Readme,
    License,
  },
  data() {
    return {
      type1: [["box", "text"]],
      type2: [["box", "text:2"]],
      type3: [["box", "text:3"]],
      type4: [["circle", "text"]],
      type5: [["circle", "text:2"]],
      type6: [["circle", "text:3"]],
      type7: [["box:160/90", "text"]],
      type8: [["box:160/90", "text:2"]],
      type9: [["box:160/90", "text:3"]],
      type10: [["box:90/160", "text"]],
      type11: [["box:90/160", "text:2"]],
      type12: [["box:90/160", "text:3"]],
      type13: [["box", "title + text"]],
      type14: [["box", "title + text:2"]],
      type15: [["box", "title + text:3"]],
      type16: [["circle", "title + text"]],
      type17: [["circle", "title + text:2"]],
      type18: [["circle", "title + text:3"]],
      type19: [["box:160/90", "title + text"]],
      type20: [["box:160/90", "title + text:2"]],
      type21: [["box:160/90", "title + text:3"]],
      type22: [["box:90/160", "title + text"]],
      type23: [["box:90/160", "title + text:2"]],
      type24: [["box:90/160", "title + text:3"]],
      type25: [["box", "title + text"], ["text"]],
      type26: [["box", "title + text:2"], ["text:2"]],
      type27: [["box", "title + text:3"], ["text:3"]],
      type28: [["circle", "title + text"], ["text"]],
      type29: [["circle", "title + text:2"], ["text:2"]],
      type30: [["circle", "title + text:3"], ["text:3"]],
      type31: [["box:160/90", "title + text"], ["text"]],
      type32: [["box:160/90", "title + text:2"], ["text:2"]],
      type33: [["box:160/90", "title + text:3"], ["text:3"]],
      type34: [["box:90/160", "title + text"], ["text"]],
      type35: [["box:90/160", "title + text:2"], ["text:2"]],
      type36: [["box:90/160", "title + text:3"], ["text:3"]],
      type37: [["box", "title + text"], ["text"], ["text"]],
      type38: [["box", "title + text:2"], ["text:2"], ["text:2"]],
      type39: [["box", "title + text:3"], ["text:3"], ["text:3"]],
      type40: [["circle", "title + text"], ["text"], ["text"]],
      type41: [["circle", "title + text:2"], ["text:2"], ["text:2"]],
      type42: [["circle", "title + text:3"], ["text:3"], ["text:3"]],
      type43: [["box:160/90", "title + text"], ["text"], ["text"]],
      type44: [["box:160/90", "title + text:2"], ["text:2"], ["text:2"]],
      type45: [["box:160/90", "title + text:3"], ["text:3"], ["text:3"]],
      type46: [["box:90/160", "title + text"], ["text"], ["text"]],
      type47: [["box:90/160", "title + text:2"], ["text:2"], ["text:2"]],
      type48: [["box:90/160", "title + text:3"], ["text:3"], ["text:3"]],

      textInput: JSON.stringify(
        [["box", "title + text:3"], ["text:2"]],
        null,
        2
      ),
      textInput1: JSON.stringify([["box", "text:2"]], null, 2),
      textInput2: JSON.stringify([["circle", "text:2"]], null, 2),
      textInput3: JSON.stringify([["box:120/90", "title + text:3"]], null, 2),
      textInput4: JSON.stringify([["box:90/120", "title + text:5"]], null, 2),
      submitData: [],
    };
  },
  filters: {
    jsonParse: function (stringifiedJson) {
      if (stringifiedJson) {
        try {
          return JSON.parse(stringifiedJson);
        } catch (e) {
          return [];
        }
      } else {
        return [];
      }
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/reset.scss";

.example-hero {
  padding: 50px 20px;
  background-color: #4c8bf5;
  div {
    max-width: 700px;
    margin: 0 auto;
  }
  .v-skeleton-loader {
    margin-bottom: 40px;
  }
}

.section {
  padding: 50px 0;

  .view {
    overflow: hidden;
    margin-bottom: 30px;
    border: 1px solid #ddd;
    .v-skeleton-loader {
      padding: 20px;
      background-color: #fff;
    }
  }

  h2 {
    margin-bottom: 30px;
    font-size: 25px;
  }

  h3 {
    margin-bottom: 10px;
    font-size: 18px;
  }

  .group {
    display: flex;
    flex-direction: row-reverse;
    margin-bottom: 50px;
    border: 1px solid #ddd;

    &:last-child {
      margin-bottom: 0;
    }

    .sk {
      flex: 1 1 60%;
      padding: 20px;
      border: 0;
      border-left: 1px solid #ddd;
    }

    .editor {
      flex: 1 0 40%;
      border: 0;
    }
  }

  &.section-3 {
    background-color: #f9f9f9;
  }
}

.contain {
  max-width: 700px;
  padding: 0 30px;
  margin: 0 auto;
}

.editor {
  width: 100%;
  height: 170px;
  border: 1px solid #ddd;
}

.decorationsOverviewRuler {
  display: none;
}

.minimap {
  display: none;
}

code {
  display: block;
  padding: 20px;
  background-color: rgba(0, 0, 0, 0.08);
  color: #666;
  white-space: pre;
}
</style>
