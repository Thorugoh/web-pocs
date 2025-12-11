<template>
    <div class="box">
        {{  text }}
    </div>
</template>

<script>
    export default {
        name: 'MyBox',
        props: {
            text: {
                type: String,
                default: 'N/A'
            }
        }
    }
</script>

<style>
    .box {
        width: 30px;
        height: 30px;
        background-color: red;
        justify-content: center;
        align-items: center;
    }
</style>