<template>
    <div class="box">
        {{ name }} - {{ age }}
    </div>
</template>

<script>
    export default {
        name: 'MyBox',
        props: {
            name: {
                type: String,
                default: 'N/A'
            },
            age: {
                type: Number,
                required: true
            }
        }
    }
</script>

<style>
    .box {
        min-width: 30px;
        min-height: 30px;
        background-color: red;
        justify-content: center;
        align-items: center;
    }
</style>