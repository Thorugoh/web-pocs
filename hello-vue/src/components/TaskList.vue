<template>
    <div class="task-list-container">
        <h2>Task List</h2>

        <div class="controls">
            <button @click="toggleForm" :class="buttonClass">{{ buttonText }}</button>
            <button class="btn-toggle-all">Mark All Done</button>
            <button class="btn-clear">
                Clear Completed
            </button>
        </div>  

        <div v-if="showForm" class="add-task-container">
            <input 
                v-model="taskTitle"
                class="task-input" 
                type="text" 
                placeholder="New task title..." 
            />
            <button
                class="btn-add"
                @click="addTask"
            >
            Add
        </button>
        </div>

        <div class="tasks-container">
            <div class="pending-tasks">
                <h3>Pending Tasks</h3>
                <p v-if="pendingTasks.length === 0">You have no pending tasks</p>
                <div v-else>
                    <TaskItem
                        v-once
                        v-for="task in pendingTasks"
                        :key="task.id"
                        @remove-task="removeTask"
                        @toggle-done="toggleTaskDone" 
                        :task="task"
                    />
                </div>
            </div>

            <div class="completed-tasks">
                <h3>Completed Tasks</h3>
                <p v-if="completedTasks.length === 0">You have no completed tasks</p>
                <TaskItem
                    v-once
                    v-else
                    v-for="task in completedTasks"
                    :key="task.id"
                    @remove-task="removeTask"
                    @toggle-done="toggleTaskDone" 
                    :task="task"
                />
            </div>

            <span>Counter components</span>
        </div>
        <div>
            <h3>Summary</h3>
            <p v-if="tasks.length === 0">You have no task yet.</p>
            <p v-else-if="pendingTasks.length > 0 && completedTasks.length === 0">Pending tasks: {{ pendingTasks.length }}</p>
            <p v-else-if="completedTasks.length > 0 && pendingTasks.length === 0">Completed tasks: {{ completedTasks.length }}</p>
            <p v-else>You have {{ completedTasks.length }} completed tasks and {{ pendingTasks.length }} pending.</p>
        </div>

        <div class="watch-output">
            <h4>Task Watch Output:</h4>
            <div class="log-container">
                <div v-for="(log, index) in logs" :key="index">{{ log }}</div>
            </div>
        </div>
    </div>
</template>


<script>
import TaskItem from './TaskItem.vue';

export default {
    name: 'TaskList',
    components: {
        TaskItem
    },
    data() {
        return {
            tasks: [{id: 12, title: "First task", done: false }, {id: 13, title: "Second task", done: true }],
            logs: [ ],
            taskTitle: '',
            showForm: false,
        };
    },
    methods: {
        removeTask(taskId) {
            this.tasks = this.tasks.filter(task => task.id !== taskId);
        },
        toggleTaskDone(taskId) {
            this.tasks = this.tasks.map(task => 
                task.id === taskId 
                    ? { ...task, done: !task.done }
                    : task
            );
        },
        addTask() {
            if(this.taskTitle.trim() === '') return;

            const newTask = {
                id: Date.now(),
                title: this.taskTitle,
                done: false,
            };

            this.tasks.push(newTask);
            this.taskTitle = '';
            this.showForm = false;
        },
        toggleForm() {
            this.showForm = !this.showForm;
        }
    },
    computed:{
        completedTasks() {
            return this.tasks.filter(task => task.done);
        },
        pendingTasks() {
            return this.tasks.filter(task => !task.done);
        },
        buttonText() {
            return this.showForm ? 'Close' : 'Add Task';
        },
        buttonClass() {
            return this.showForm ? 'btn-close' : 'btn-add';
        }
    },
    watch: {
        tasks: {
            handler(newTasks, oldTasks) {
                const modified = newTasks.filter((task, index) => 
                    task.done !== oldTasks[index].done
                );
                if(modified) {
                    this.logs.push(...modified.map(task => 
                        `${new Date().toLocaleTimeString()}: Task #${task.id} status changed to ${task.done ? 'Done' : 'Pending'}`
                    ));
                }
            },
            deep: true,
        }
    }
}
</script>


<style>
    .task-list-container {
        max-width: 1000px;
        margin: 0 auto;
        padding: 20px;
    }
    h2 {
        color: #3498db;
        margin-bottom: 20px;
        padding-bottom: 10px;
        border-bottom: 2px solid #f0f0f0;
        text-align: center;
    }
    .controls {
        display: flex;
        gap: 10px;
        margin-bottom: 30px;
        flex-wrap: wrap;
        justify-content: center;
    }
    button {
        padding: 10px 20px;
        border: none;
        border-radius: 6px;
        font-weight: bold;
        transition: all 0.3s;
        font-size: 14px;
    }
    .btn-add {
        background-color: #2ecc71;
        color: white;
    }
    .btn-close {
        background-color: #e67e22;
        color: white;
    }
    .btn-add:hover {
        background-color: #27ae60;
        transform: translateY(-2px);
    }
    .btn-toggle-all {
        background-color: #3498db;
        color: white;
    }
    .btn-toggle-all:hover {
        background-color: #2980b9;
        transform: translateY(-2px);
    }
    .btn-clear {
        background-color: #e74c3c;
        color: white;
    }
    .btn-clear:hover {
        background-color: #c0392b;
        transform: translateY(-2px);
    }
    .task-container {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 30px;
        margin-bottom: 30px;
    }
    .pending-tasks, .completed-tasks {
        padding: 20px;
        border-radius: 8px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }
    .pending-tasks {
        background-color: #f9f9f9;
        border: 2px solid #eee;
    }
    .completed-tasks {
        background-color: #f0fff0;
        border: 2px solid #d4edda;
    }
    .pending-tasks h3, .completed-tasks h3 {
        margin-top: 0px;
        margin-bottom: 15px;
        color: #2c3e50;
        text-align: center;
    }

    .watch-output {
        background-color: #2c3e50;
        color: white;
        padding: 15px;
        border-radius: 6px;
    }
    .log-container {
        max-height: 200px;
        overflow-y: auto;
        background-color: #1a252f;
        padding: 10px;
        border-radius: 4px;
        margin-top: 10px;
        font-family: monospace;
    }
    .add-task-container {
        display: flex;
        gap: 10px;
        margin-bottom: 20px;
        justify-content: center;
    }
    .task-input {
        flex: 1;
        padding: 10px;
        border: 1px solid #ccc;
        border-radius: 4px;
        font-size: 14px;
    }
</style>