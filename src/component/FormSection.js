import React from "react";

class FormSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        title: "",
        body: "",
      },
      titleLimit: 50,
    };
  }

  onSubmitHandler = (e) => {
    e.preventDefault();
    this.setState({
      form: {
        title: "",
        body: "",
      },
      titleLimit: 50,
    });
    this.props.noteForm(this.state.form);
  };

  onChangeHandler = (e) => {
    const form = { ...this.state.form };
    if (e.target.name === "title" && e.target.value.length > 50) {
      return false;
    }

    form[e.target.name] = e.target.value;
    this.setState({
      form,
      titleLimit: 50 - form.title.length,
    });
  };

  render() {
    return (
      <div className="note-input">
        <h2>Buat Catatan</h2>
        <form onSubmit={this.onSubmitHandler}>
          <p className="note-input__title__char-limit">
            Sisa Karakter : {this.state.titleLimit}
          </p>
          <input
            className="note-input__title"
            type="text"
            placeholder="Judul Notes .."
            required=""
            value={this.state.form.title}
            name="title"
            onChange={this.onChangeHandler}
          />
          <textarea
            type="text"
            name="body"
            required=""
            className="note-input__body"
            placeholder="Tuliskan Catatan Disini"
            value={this.state.form.body}
            onChange={this.onChangeHandler}
          ></textarea>
          <button type="submit">Buat</button>
        </form>
      </div>
    );
  }
}

export default FormSection;
