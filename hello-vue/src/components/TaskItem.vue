<template>
    <div>
        <span class="task-id"># {{ task?.id }}</span>
        <span class="task-id"># {{ task?.title }}</span>
        <button 
            @click="toggleDone" 
            class="btn-toggle"
        >
            {{ btnToggleText }}
        </button>
        <button 
            @click="removeTask" 
            class="btn-remove"
        >
            Delete
        </button>
    </div>
</template>

<script>
    export default {
        name: 'TaskItem',
        props: {
            task: {
                type: Object,
                required: true,
            }
        },
        computed: {
            btnToggleText() {
                return this.task?.done ? 'Undo' : 'Complete';
            },
        },
        methods: {
            toggleDone() {
                this.$emit('toggle-done', this.task.id);
            },
            removeTask() {
                this.$emit('remove-task', this.task.id);
            }
        }
    }
</script>

<style>
    .task-item {
        display: flex;
        align-items: center;
        padding: 10px;
        margin-bottom: 8px;
        border-radius: 4px;
        background-color: white;
        border: 1px solid #ddd;
        transition: all 0.3s;

    }
    .task-id {
        font-weight: bold;
        margin-right: 10px;
        color: #7f8c8d
    }
    .task-status {
        flex-grow: 1;
    }
    .btn-toggle {
        background-color: #f39c12;
        color: white;
        margin-right: 5px;
    }
    .btn-toggle:hover {
        background-color: #e67e22;
    }
    .btn-remove {
        background-color: #e74c3c;
        color: white;
    }
    .btn-remove:hover {
        background-color: #c0392b;
    }
</style>