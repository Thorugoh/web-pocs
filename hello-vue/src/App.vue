<template>
  <div class="container-box">
    <MyBox name="Victor" age="29" status="active"/>
    <MyBox name="Hugo" age="20" status="inactive"/>
    <MyBox name="Oliveira" age="25"/>
  </div>

</template>

<script>
import MyBox from "./components/MyBox.vue";

export default {
  name: 'App',
  components: {
    MyBox
  }
}
</script>

<style>
  .container-box {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 200px;
    border: 1px solid black;
    padding: 10px;
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
