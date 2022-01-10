function jazzify(notes) {
    return notes.map(note => note.substring(1) !== '7' ? `${note}7` : note);
}
