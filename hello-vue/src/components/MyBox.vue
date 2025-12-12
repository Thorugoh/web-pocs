<template>
    <div class="box">
        {{ name }} - {{ age }}
        <span :class="status"> - {{ status }}</span>
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
            },
            status: {
                type: String,
                validator: value => ['active', 'inactive', 'pending'].includes(value),
                default: 'active'
            }
        }
    }
</script>

<style>
    .active {
        background-color: green;
    }
    .inactive {
        background-color: red;
    }
    .box {
        min-width: 30px;
        min-height: 30px;
        background-color: rgb(203, 224, 17);
        justify-content: center;
        align-items: center;
    }
</style>