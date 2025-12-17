
<template>
    <div class="buttons">
        <h3>Current count: {{  countValue  }}</h3>
        <MyButton @update="$emit('changeCount', 'increment', 1)" title="Increase" />
        <MyButton :disabled="!canDecrement" @update="$emit('changeCount', 'decrement', 1)" title="Decrease" />
        <MyButton :disabled="!canReset" @update="$emit('changeCount', 'clear')" title="Reset" />
    </div>
</template>

<script>
import MyButton from './MyButton.vue';

export default {
    name: 'CounterButtons',
    emits: ['changeCount'],
    components: {
        MyButton
    },
    props: {
        countValue: {
            type: Number,
            required: true,
        }
    },
    computed: {
        canDecrement() {
            return this.countValue > -10;
        },
        canReset() {
            return this.countValue !== 0;
        }
        
    }
}

</script>

<style>
.buttons {
    display: flex;
    gap: 10px;
}
</style>