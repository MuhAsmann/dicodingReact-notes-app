import React from "react";
import { showFormattedDate } from "../utils";

function Note({note, listTipe, pindahNote, hapusNote} ){
  return (
    <div className="note-item">
      <div className="note-item__content">
        <h3 className="note-item__title">{note.title}</h3>
        <p className="note-item__date">{showFormattedDate(note.createdAt)}</p>
        <p className="note-item__body">{note.body}</p>
      </div>
      <div className="note-item__action">
        <button
          className="note-item__delete-button"
          onClick={() => hapusNote(note.id)}
        >
          Delete
        </button>
        <button
          className="note-item__archive-button"
          onClick={() => pindahNote(note.id, (listTipe === 'aktif'))}
        >
          {listTipe === "aktif" ? "Arsipkan" : "Pindahkan"}
        </button>
      </div>
    </div>
  );
};

export default Note;
