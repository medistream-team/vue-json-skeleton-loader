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

Options allow you to implement different styles of Skeleton Loaders.

```html
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
/>
```

### Content

You can implement multiple types of skeleton loaders simultaneously using content properties.

```html
<template>
  <v-skeleton-loader :content="content" />
</template>

<script>
  import VSkeletonLoader from "v-skeleton-loader"

    export default {
      components: {
        VSkeletonLoader,
      },
      data() {
        return {
          content: [["box", "text"]],
        },
      },
    };
</script>
```

## 📝 License

Copyright © 2022 [Medistream](https://github.com/medistream-team)<br />
This project is [MIT](https://github.com/medistream-team/v-skeleton-loader/blob/main/LICENSE) licensed.
