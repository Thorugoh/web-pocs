
<template>
    <div class="buttons">
        <MyButton @update="$emit('changeCount', 'increment', 1)" title="Increase" />
        <MyButton @update="$emit('changeCount', 'decrement', 1)" title="Decrease" />
        <MyButton @update="$emit('changeCount', 'clear')" title="Reset" />
    </div>
</template>

<script>
import MyButton from './MyButton.vue';

export default {
    name: 'CounterButtons',
    emits: ['changeCount'],
    components: {
        MyButton
    }
}

</script>

<style>
.buttons {
    display: flex;
    gap: 10px;
}
</style>