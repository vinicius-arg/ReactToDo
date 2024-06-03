class Note {
    static nextId = 0;

    constructor(text) {
        this.title = text;
        this.id = Note.nextId++;
        this.content = [];
    }
}

export default Note;