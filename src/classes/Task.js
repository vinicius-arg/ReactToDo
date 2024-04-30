class Task {
    // This var stores the last task ids per note (parent element) 
    static lastTaskIds = [];

    constructor(text, parentId) {
        if (!Task.lastTaskIds[parentId]) Task.lastTaskIds[parentId] = 0;

        this.text = text;
        this.id = Task.lastTaskIds[parentId]++;
        this.done = false;
    }
}

export default Task;