<template>
  <div id="app">
    <div class="container">
      <h1>VSkeletonLoader Demo</h1>
      <MonacoEditor
        id="textInput"
        class="editor"
        v-model="textInput"
        language="javascript"
        v-on:change="submitValue"
        :options="options"
      />
      <div class="samples">
        <h3>Test Case</h3>
        <VSkeletonLoader
          :content="submitData"
          :options="{
            borderRadius: 10,
            primaryColor: '#eee',
            secondaryColor: '#ccc',
            animate: true,
            speed: 1000,
            defaultSize: 70,
          }"
        />
        <h3>Case #1</h3>
        <VSkeletonLoader :content="type1" />
        <h3>Case #2</h3>
        <VSkeletonLoader :content="type2" />
        <h3>Case #3</h3>
        <VSkeletonLoader :content="type3" />
        <h3>Case #4</h3>
        <VSkeletonLoader :content="type4" />
        <h3>Case #5</h3>
        <VSkeletonLoader :content="type5" />
        <h3>Case #6</h3>
        <VSkeletonLoader :content="type6" />
        <h3>Case #7</h3>
        <VSkeletonLoader :content="type7" />
        <h3>Case #8</h3>
        <VSkeletonLoader :content="type8" />
        <h3>Case #9</h3>
        <VSkeletonLoader :content="type9" />
        <h3>Case #10</h3>
        <VSkeletonLoader :content="type10" />
        <h3>Case #11</h3>
        <VSkeletonLoader :content="type11" />
        <h3>Case #12</h3>
        <VSkeletonLoader :content="type12" />
        <h3>Case #13</h3>
        <VSkeletonLoader :content="type13" />
        <h3>Case #14</h3>
        <VSkeletonLoader :content="type14" />
        <h3>Case #15</h3>
        <VSkeletonLoader :content="type15" />
        <h3>Case #16</h3>
        <VSkeletonLoader :content="type16" />
        <h3>Case #17</h3>
        <VSkeletonLoader :content="type17" />
        <h3>Case #18</h3>
        <VSkeletonLoader :content="type18" />
        <h3>Case #19</h3>
        <VSkeletonLoader :content="type19" />
        <h3>Case #20</h3>
        <VSkeletonLoader :content="type20" />
        <h3>Case #21</h3>
        <VSkeletonLoader :content="type21" />
        <h3>Case #22</h3>
        <VSkeletonLoader :content="type22" />
        <h3>Case #23</h3>
        <VSkeletonLoader :content="type23" />
        <h3>Case #24</h3>
        <VSkeletonLoader :content="type24" />
        <h3>Case #25</h3>
        <VSkeletonLoader :content="type25" />
        <h3>Case #26</h3>
        <VSkeletonLoader :content="type26" />
        <h3>Case #27</h3>
        <VSkeletonLoader :content="type27" />
        <h3>Case #28</h3>
        <VSkeletonLoader :content="type28" />
        <h3>Case #29</h3>
        <VSkeletonLoader :content="type29" />
        <h3>Case #30</h3>
        <VSkeletonLoader :content="type30" />
        <h3>Case #31</h3>
        <VSkeletonLoader :content="type31" />
        <h3>Case #32</h3>
        <VSkeletonLoader :content="type32" />
        <h3>Case #33</h3>
        <VSkeletonLoader :content="type33" />
        <h3>Case #34</h3>
        <VSkeletonLoader :content="type34" />
        <h3>Case #35</h3>
        <VSkeletonLoader :content="type35" />
        <h3>Case #36</h3>
        <VSkeletonLoader :content="type36" />
        <h3>Case #37</h3>
        <VSkeletonLoader :content="type37" />
        <h3>Case #38</h3>
        <VSkeletonLoader :content="type38" />
        <h3>Case #39</h3>
        <VSkeletonLoader :content="type39" />
        <h3>Case #40</h3>
        <VSkeletonLoader :content="type40" />
        <h3>Case #41</h3>
        <VSkeletonLoader :content="type41" />
        <h3>Case #42</h3>
        <VSkeletonLoader :content="type42" />
        <h3>Case #43</h3>
        <VSkeletonLoader :content="type43" />
        <h3>Case #44</h3>
        <VSkeletonLoader :content="type44" />
        <h3>Case #45</h3>
        <VSkeletonLoader :content="type45" />
        <h3>Case #46</h3>
        <VSkeletonLoader :content="type46" />
        <h3>Case #47</h3>
        <VSkeletonLoader :content="type47" />
        <h3>Case #48</h3>
        <VSkeletonLoader :content="type48" />
      </div>
    </div>
  </div>
</template>

<script>
import VSkeletonLoader from "@/components/VSkeletonLoader.vue";
import MonacoEditor from "vue-monaco";
export default {
  name: "App",
  components: {
    VSkeletonLoader,
    MonacoEditor,
  },
  data() {
    return {
      type1: [["box", "text"]],
      type2: [["box", "text:2"]],
      type3: [["box", "text:3"]],
      type4: [["circle", "text"]],
      type5: [["circle", "text:2"]],
      type6: [["circle", "text:3"]],
      type7: [["rec16_9", "text"]],
      type8: [["rec16_9", "text:2"]],
      type9: [["rec16_9", "text:3"]],
      type10: [["rec9_16", "text"]],
      type11: [["rec9_16", "text:2"]],
      type12: [["rec9_16", "text:3"]],
      type13: [["box", "title + text"]],
      type14: [["box", "title + text:2"]],
      type15: [["box", "title + text:3"]],
      type16: [["circle", "title + text"]],
      type17: [["circle", "title + text:2"]],
      type18: [["circle", "title + text:3"]],
      type19: [["rec16_9", "title + text"]],
      type20: [["rec16_9", "title + text:2"]],
      type21: [["rec16_9", "title + text:3"]],
      type22: [["rec9_16", "title + text"]],
      type23: [["rec9_16", "title + text:2"]],
      type24: [["rec9_16", "title + text:3"]],
      type25: [["box", "title + text"], ["text"]],
      type26: [["box", "title + text:2"], ["text:2"]],
      type27: [["box", "title + text:3"], ["text:3"]],
      type28: [["circle", "title + text"], ["text"]],
      type29: [["circle", "title + text:2"], ["text:2"]],
      type30: [["circle", "title + text:3"], ["text:3"]],
      type31: [["rec16_9", "title + text"], ["text"]],
      type32: [["rec16_9", "title + text:2"], ["text:2"]],
      type33: [["rec16_9", "title + text:3"], ["text:3"]],
      type34: [["rec9_16", "title + text"], ["text"]],
      type35: [["rec9_16", "title + text:2"], ["text:2"]],
      type36: [["rec9_16", "title + text:3"], ["text:3"]],
      type37: [["box", "title + text"], ["text"], ["text"]],
      type38: [["box", "title + text:2"], ["text:2"], ["text:2"]],
      type39: [["box", "title + text:3"], ["text:3"], ["text:3"]],
      type40: [["circle", "title + text"], ["text"], ["text"]],
      type41: [["circle", "title + text:2"], ["text:2"], ["text:2"]],
      type42: [["circle", "title + text:3"], ["text:3"], ["text:3"]],
      type43: [["rec16_9", "title + text"], ["text"], ["text"]],
      type44: [["rec16_9", "title + text:2"], ["text:2"], ["text:2"]],
      type45: [["rec16_9", "title + text:3"], ["text:3"], ["text:3"]],
      type46: [["rec9_16", "title + text"], ["text"], ["text"]],
      type47: [["rec9_16", "title + text:2"], ["text:2"], ["text:2"]],
      type48: [["rec9_16", "title + text:3"], ["text:3"], ["text:3"]],

      textInput: JSON.stringify(JSON.parse('["rec9_16", "title + text:3"]')),
      submitData: [["rec9_16", "title + text:3"]],
    };
  },

  methods: {
    convertArrStrToArr(inputStr) {
      return inputStr
        .replace(/"/g, "")
        .replace(/'/g, "")
        .replace(/\[/g, "")
        .replace(/], /g, "-")
        .replace(/]/g, "")
        .split("-")
        .map((s) => s.split(",").map((v) => v.trim()));
    },
    submitValue() {
      try {
        this.submitData = this.convertArrStrToArr(this.textInput);
        this.textInput = "";
      } catch (e) {
        console.error(e);
      }
    },
  },
};
</script>

<style>
#app {
  width: 700px;
  margin: 0 auto;
}
h1 {
  margin: 50px 0;
}
h3 {
  margin: 30px 0;
}
#textInput {
  display: flex;
  align-items: center;
}
.txt {
  display: inline-block;
  width: 50%;
  margin-right: 20px;
}
.input {
  width: 50%;
  height: 30px;
  padding: 5px;
  border-radius: 5px 10px;
  border: 1px solid #ddd;
  outline: none;
}
.editor {
  width: 100%;
  height: 100px;
  border: 1px solid #ddd;
}

.minimap,
.decorationsOverviewRuler {
  display: none;
}
</style>
