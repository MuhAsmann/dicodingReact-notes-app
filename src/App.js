import React from "react";
import HeaderSection from "./component/HeaderSection";
import "./styles/style.css";
import { getInitialData } from "./utils";
import FormSection from "./component/FormSection";
import NoteList from "./component/NoteList";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      semuaNotes: [],
      notes: [],
      aksi: "",
    };
  }

  ambilNote = (archived = false) => {
    let notes = [...this.state.notes];
    notes = notes.filter((note) => note.archived === archived);
    return notes;
  };

  tambahNote = (form) => {
    const notes = [...this.state.semuaNotes];
    const notesBaru = {
      id: +new Date(),
      title: form.title,
      body: form.body,
      createdAt: new Date(),
      archived: false,
    };

    notes.push(notesBaru);
    notes.sort(function (a, b) {
      return new Date(b.createdAt) - new Date(a.createdAt);
    });

    this.setState({
      ...this.state,
      semuaNotes: notes,
      notes,
      aksi: "",
    });
  };

  pindahNote = (id, val) => {
    const notes = [...this.state.semuaNotes];
    notes[notes.findIndex((note) => note.id === id)].archived = val;
    this.setState({
      ...this.state,
      notes,
      semuaNotes: notes,
    });
  };

  hapusNote = (id) => {
    const notes = [...this.state.semuaNotes];
    notes.splice(
      notes.findIndex((note) => note.id === id),
      1
    );
    this.setState({
      ...this.state,
      notes,
      semuaNotes: notes,
    });
  };

  onHandlerSeacrh = (search) => {
    let notes = [...this.state.semuaNotes]
    if(search !== ''){
      notes = notes.filter(note => note.title.toLowerCase().includes(search.toLowerCase()))
    }
    this.setState({
      ...this.state,
      notes
    })
  }

  componentDidMount() {
    const semuaNotes = getInitialData();
    const notes = getInitialData();

    this.setState({
      ...this.state,
      semuaNotes,
      notes,
    });
  }

  render() {
    return (
      <>
        <HeaderSection onHandlerSeacrh={this.onHandlerSeacrh}/>
        <div className="note-app__body">
          <FormSection noteForm={this.tambahNote} />
          <h2>Catatan Aktif</h2>
          <NoteList
            notes={this.ambilNote()}
            listTipe="aktif"
            pindahNote={this.pindahNote}
            hapusNote={this.hapusNote}
          />
          <h2>Arcsip</h2>
          <NoteList
            notes={this.ambilNote(true)}
            listTipe="arcive"
            pindahNote={this.pindahNote}
            hapusNote={this.hapusNote}
          />
        </div>
      </>
    );
  }
}

export default App;
