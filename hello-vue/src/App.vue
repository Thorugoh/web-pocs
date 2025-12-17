<template>
  <div class="container-box">
    <MyBox name="Victor" :age="count" status="active"/>
    <MyBox name="Hugo" age="20" status="something else"/>
    <MyBox name="Oliveira" age="25"/>
    <h2 :style="{color: changeColorCount}">
      {{ count }}
    </h2>
    <CounterButtons @changeCount="handleCountChange"/>
  </div>

</template>

<script>

import CounterButtons from "./components/CounterButtons.vue";
import MyBox from "./components/MyBox.vue";

export default {
  name: 'App',
  components: {
    MyBox,
    CounterButtons,
  },
  data() {
    return {
      count: 0
    }
  },
  computed: {
    changeColorCount(){
      if(this.count > 0){
        return 'green';
      } else if(this.count < 0){
        return 'red';
      } else {
        return 'black';
      }
    }
  },
  methods: {
    handleCountChange(action, value = 1) {
      switch(action) {
        case 'increment':
          this.count += value;
          break;
        case 'decrement':
          this.count -= value;
          break;
        case 'clear':
          this.count = 0;
          break;
      }
    },
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
