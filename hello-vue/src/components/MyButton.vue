
<template>
    <button @click="$emit('increment')">
        +1
    </button>
</template>

<script>
export default {
    name: "MyButton",
}
</script>

<style> 
button {
    padding: 10px 20px;
    font-size: 16px;
    background-color: #42b983;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

button:hover {
    background-color: #61e819;
}
</style>