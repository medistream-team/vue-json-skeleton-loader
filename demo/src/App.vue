<template>
  <div id="app">
    <div class="heading">
      <img src="@/assets/symbol.svg" alt="Vue Skeleton Loader">
      <h1>Vue Skeleton Loader</h1>
      <h2>A loader component that can be designed with simple markup.</h2>
    </div>
    <section class="example-hero">
      <div>
        <VSkeletonLoader
          :options="{
            radius: 3,
            primaryColor: '#ccc',
            secondaryColor: '#ddd',
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
          <VSkeletonLoader class="sk" :content="textInput1 | jsonParse" />
          <MonacoEditor
            class="editor"
            v-model="textInput1"
            language="javascript"
          />
        </div>
        <h3>Text with avatar</h3>
        <div class="group">
          <VSkeletonLoader class="sk" :content="textInput2 | jsonParse" />
          <MonacoEditor
            class="editor"
            v-model="textInput2"
            language="javascript"
          />
        </div>
        <h3>Text with figure</h3>
        <div class="group">
          <VSkeletonLoader class="sk" :content="textInput3 | jsonParse" />
          <MonacoEditor
            class="editor"
            v-model="textInput3"
            language="javascript"
          />
        </div>
        <div class="group">
          <VSkeletonLoader class="sk" :content="textInput4 | jsonParse" />
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
        <h2>Properties (options)</h2>
        <h3>Disable animation</h3>
        <div class="view">
          <VSkeletonLoader
            :options="{
              radius: 3,
              primaryColor: '#ddd',
              secondaryColor: 'rgba(255, 255, 255, 0.5)',
              animate: false,
              speed: '1.5s',
              defaultSizes: {
                box: 70,
                circle: 70,
                title: 25,
                text: 15,
              },
            }"
            :content="type2"
          />
          <code>{{ '&lt;v-skeleton-loader :options="{animate: false}" /&gt;' }}</code>
        </div>
        <h3>Animation speed</h3>
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
            :content="type3"
          />
          <code>{{ '&lt;v-skeleton-loader :options="{speed: \'0.5s\'}" /&gt;' }}</code>
        </div>
        <h3>Radius</h3>
        <div class="view">
          <VSkeletonLoader
            :options="{
              radius: 15,
              primaryColor: '#ddd',
              secondaryColor: 'rgba(255, 255, 255, 0.5)',
              animate: true,
              speed: '1.5s',
              defaultSizes: {
                box: 70,
                circle: 70,
                title: 25,
                text: 15,
              },
            }"
            :content="type3"
          />
          <code>{{ '&lt;v-skeleton-loader :options="{radius: 15}" /&gt;' }}</code>
        </div>
        <h3>Colors</h3>
        <div class="view">
          <VSkeletonLoader
            :options="{
              radius: 5,
              primaryColor: '#ffb0b0',
              secondaryColor: '#4c8bf5',
              animate: true,
              speed: '1.5s',
              defaultSizes: {
                box: 70,
                circle: 70,
                title: 25,
                text: 15,
              },
            }"
            :content="type3"
          />
          <code>{{ '&lt;v-skeleton-loader :options="{primaryColor: \'#ffb0b0\', secondaryColor: \'#4c8bf5\'}" /&gt;' }}</code>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import VSkeletonLoader from "../../src/VSkeletonLoader";
import Readme from "@/components/Readme";
import Footer from "@/components/Footer";
import MonacoEditor from "vue-monaco";
export default {
  name: "App",
  components: {
    VSkeletonLoader,
    Readme,
    Footer,
    MonacoEditor
  },
  data() {
    return {
      type3: [["box", "text:3"]],
      textInput: '[\n  ["box", "title + text:2"],\n  ["text:2"]\n]',
      textInput1: JSON.stringify([["box", "text:2"]], null, 2),
      textInput2: JSON.stringify([["circle", "text:2"]], null, 2),
      textInput3: JSON.stringify([["box:120/90", "title + text:3"]], null, 2),
      textInput4: JSON.stringify([["box:90/120", "title + text:5"]], null, 2)
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
.heading {
  padding: 80px 20px;
  text-align: center;
  img {
    width: 280px;
  }
  h1 {
    margin-top: 40px;
    font-size: 40px;
  }
  h2 {
    margin-top: 20px;
    color: #999;
    font-size: 18px;
    font-weight: normal;
  }
}

.example-hero {
  padding: 80px 20px;
  border: 1px solid #ddd;
  border-width: 1px 0;
  background-color: #f9f9f9;
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
    margin-top: 30px;
    margin-bottom: 10px;
    font-size: 18px;
  }

  .group {
    display: flex;
    flex-direction: row-reverse;
    border: 1px solid #ddd;

    + .group {
      margin-top: 20px;
    }

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
  font-size: 18px;
  white-space: pre;
}

@media (max-width: 1000px) {
  .header {
    .header-wrap {
      flex-direction: column;
      padding:0 15px !important;
    }
  }

  .example-hero {
    padding:30px 15px !important;
  }

  .contain {
    padding:0 15px !important;
  }

  .section {
    .group {
      display:block !important;
      .sk {
        border-left:0 !important;
        border-bottom:1px solid #ddd !important;
      }
    }
  } 
}
</style>
