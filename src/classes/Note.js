class Note {
    static lastId = 0;

    constructor(text) {
        this.title = text;
        this.id = Note.lastId++;
        this.content = [];
    }
}

export default Note;