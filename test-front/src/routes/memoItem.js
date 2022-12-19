import React from 'react';
import axios from "axios";

const baseURL = "http://localhost:8000/get"

//const [post, setPost] = React.useState(null);


class Lesson extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isModalOpen: false};
  }

  handleClickLesson() {
    this.setState({isModalOpen: true});
  }

  handleClickClose() {
    this.setState({isModalOpen: false});
  }

  deletePost(id) {
    axios.delete(`${baseURL}/${id}`);
    this.handleClickClose();
  }


  render() {
    let modal;
    if (this.state.isModalOpen) {
      modal = (
        <div className='modal'>
          <div className='modal-inner'>
            <div className='modal-header'></div>
            <div className='modal-introduction'>
              <h2>{this.props.title}</h2>
              <p>{this.props.body}</p>
            </div>
            <button onClick={() => this.deletePost(this.props.id)}>
              削除
            </button>
            <button
              className='modal-close-btn'
              onClick={() => this.handleClickClose()}
            >
              とじる
            </button>
          </div>
        </div>
      );
    }

    return (
      <div className='lesson-card'>
        <span>{this.props.id}</span>
        <span>{this.props.title}</span>
        <div>{this.props.body}</div>
        <div
          className='lesson-item'
          onClick={() => {this.handleClickLesson()}}
        >
          詳細
        </div>
        {modal}
      </div>
    );
  }
}

export default Lesson;