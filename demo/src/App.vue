<template>
  <div id="app">
    <div class="container">
      <h1>VSkeletonLoader Demo</h1>
      <MonacoEditor class="editor" v-model="textInput" language="javascript" />
      <div v-if="false">
        <div id="textInput">
          <span class="txt"
            >ex&#41; <br />
            &#91;"box", "title + text"&#93;, &#91;"text"&#93; <br />
            &#91;"box:90/160", "title + text:3"&#93;, &#91;"text:3"&#93;,
            &#91;"text:3"&#93;
          </span>
        </div>
      </div>
      <div class="samples">
        <h3>Test Case</h3>
        <VSkeletonLoader :content="textInput | jsonParse" />
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

      textInput: JSON.stringify([["box", "title + text"], ["text:3"]], null, 2),
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
  height: 300px;
  border: 1px solid #ddd;
}

.decorationsOverviewRuler {
  display: none;
}

.minimap {
  display: none;
}
</style>
