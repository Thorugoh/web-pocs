<template>
    <div>
        <span class="task-id">#123</span>
        <span class="task-status"> Done </span>
        <button class="btn-toggle">Complete</button>
        <button class="btn-remove">Delete</button>
    </div>
</template>

<style>
    .task-item {
        display: flex;
        align-items: center;
        padding: 10px;
        margin-bottom: 8px;
        border-radius: 4px;
        background-color: white;
        border 1px solid #ddd;
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