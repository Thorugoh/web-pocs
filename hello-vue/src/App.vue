<template>
  <div class="container-box">
    <MyBox name="Victor" :age="count" status="active"/>
    <MyBox name="Hugo" age="20" status="something else"/>
    <MyBox name="Oliveira" age="25"/>
    <h2>{{ count }}</h2>
    <MyButton 
      title="+1"
      @update="incrementCount"
    />
    <MyButton 
      title="-1"
      @update="decrement"
    />
    <MyButton 
    title="clear"
      @update="clear"
    />
  </div>

</template>

<script>

import MyBox from "./components/MyBox.vue";
import MyButton from "./components/MyButton.vue";

export default {
  name: 'App',
  components: {
    MyBox,
    MyButton,
  },
  data() {
    return {
      count: 0
    }
  },
  methods: {
    incrementCount() {
      this.count++;
    },
    decrement() {
      this.count--;
    },
    clear() {
      this.count = 0;
    }
  }
}
</script>

<style>
  .container-box {
    display: flex;
    flex: 1;
    flex-direction: row;
    justify-content: center;
    border: 1px solid black;
    padding: 10px;
    gap: 10px;
  }

  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
