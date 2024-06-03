class Task {
    // This var stores the last task ids per note (parent element) 
    static nextTaskIds = [];

    constructor(text, parentId) {
        if (!Task.nextTaskIds[parentId]) Task.nextTaskIds[parentId] = 0;

        this.text = text;
        this.id = Task.nextTaskIds[parentId]++;
        this.done = false;
    }
}

export default Task;