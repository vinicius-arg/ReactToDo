function saveNotes(notes) {
    localStorage.setItem("notes", JSON.stringify(notes));
}

export default saveNotes;