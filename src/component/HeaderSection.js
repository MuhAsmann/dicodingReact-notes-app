import React from "react";

class HeaderSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
    };
  }

  onChangeHandler = (e) => {
    this.setState({
      ...this.state,
      search:e.target.value
    })
    this.props.onHandlerSeacrh(e.target.value)
  }

  render() {
    return (
      <div className="note-app__header">
        <h1>Note App</h1>
        <div className="note-app__header__search">
          <input
            type="text"
            placeholder="Cari..."
            value={this.state.search}
            onChange={this.onChangeHandler}
          ></input>
        </div>
      </div>
    );
  }
}

export default HeaderSection;
