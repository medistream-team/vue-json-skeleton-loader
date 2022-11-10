# Getting Started

---

## Installation

<pre>
<code>npm i <span style="color:lightblue">v-skeleton-loader</span></code>
</pre>

## Plugin

<pre>
<code>import <span style="color:lightblue">VSkeletonLoader</span> from <span style="color:lightblue">'v-skeleton-loader'</span>

<span style="color:lightpink">Vue.use(VSkeletonLoader)</span></code>
</pre>

## Component

### Options

<br>

Options allow you to implement different styles of Skeleton Loaders.

<br>

```html
<template>
  <v-skeleton-loader />
</template>

<script>
  import VSkeletonLoader from 'v-skeleton-loader';

  export default {
  name: "VSkeletonLoader",
  props: {
    content: {
      type: Array,
    },
    options: {
      type: Object,
      default: function () {
        return {
          radius: 3,
          primaryColor: "#ddd",
          secondaryColor: "rgba(0, 0, 0, 0.1)",
          animate: true,
          speed: "1.5s",
          defaultSizes: {
            box: 50,
            circle: 50,
            title: 13,
            text: 10,
          },
        };
      },
    },
  },
</script>
```

### Content

<br>

You can implement multiple types of skeleton loaders simultaneously using content properties.

<br>

```html
<template>
  <v-skeleton-loader :content="..." />
</template>

<script>
  import VSkeletonLoader from "@/components/VSkeletonLoader.vue";

  export default {
    name: "App",
    components: {
      VSkeletonLoader,
    },
    data() {
      return {
        type1: [["box", "text"]],
        type2: [["box:160/90", "text"]],
        type3: [["box", "title + text"]],
        type4: [["box:160/90", "title + text"]],
        type5: [["box", "title + text"], ["text"]],
        type6: [["box:160/90", "title + text"], ["text"]],
        type7: [["box:160/90", "title + text:2"], ["text:2"]],
        type8: [["box:90/160", "title + text:3"], ["text:3"]],
        type9: [["box", "title + text"], ["text"], ["text"]],
        type10: [["box:90/160", "title + text:3"], ["text:3"], ["text:3"]],
      },
    },
  };
</script>
```

## 📝 License

Copyright © 2022 [Medistream](https://github.com/medistream-team)<br />
This project is [MIT](https://github.com/medistream-team/v-skeleton-loader/blob/main/LICENSE) licensed.
