function jazzify(notes) {
    return notes.map(function(note) {
        if (note.charAt(note.length - 1) !== '7') {
            return note + '7';
        } else {
            return note;
        }
    });
}
