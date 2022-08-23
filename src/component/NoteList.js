import React from "react";
import Note from "./Note"

function NoteList({notes, listTipe, pindahNote, hapusNote}) {
  return (
    <>
      {notes.length > 0 ? (
        <div className="notes-list">
          {notes.map((note) => (
            <Note 
              key={note.id}
              note={note}
              listTipe={listTipe}
              hapusNote={hapusNote}
              pindahNote={pindahNote}
            />
          ))}
        </div>
      ) : (
        <p className="notes-list__empty-message">Catatan Kosong</p>
      )}
    </>
  );
}

export default NoteList;
