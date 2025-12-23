<template>
    <div class="task-list-container">
        <h2>Task List</h2>

        <div class="controls">
            <button class="btn-add">Add Task</button>
            <button class="btn-toggle-all">Mark All Done</button>
            <button class="btn-clear">
                Clear Completed
            </button>
        </div>  

        <div class="tasks-container">
            <div class="pending-tasks">
                <h3>Pending Tasks</h3>
                <span>List of pending tasks</span>
            </div>

            <div class="completed-tasks">
                <h3>Completed Tasks</h3>
                <span>List of completed tasks</span>
            </div>

            <span>Counter components</span>
        </div>
</template>


<script>
import TaskItem from './TaskItem.vue';

export default {
    name: 'TaskList',
    components: {
        TaskItem
    }
}
</script>