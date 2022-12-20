import React from "react";
import axios from "axios";

const baseURL = "http://localhost:8000"

const MemoItem = (props) => {

    const [state, setState] = React.useState(
        {
            title: props.title,
            body: props.body
        }
    );

    // アイテムの更新
    const handleSubmit = () => {
        axios.put(`${baseURL}/edit/${props.id}`,{
            userId:1,
            id: props.id,
            title: state.title,
            body: state.body
        })
        .then((response) => {console.log(response.data)})
    }


    // アイテムの削除
    const [isAlive, setAlive] = React.useState(true);
    const deletePost = (id) => {
        setAlive(false);
        axios.delete(`${baseURL}/delete/${id}`);
    }

    // モーダルの状態保持と状態変更
    const [isModalOpen, setModal] = React.useState(false);
    const handleClickModal = (isModalOpen) => {
        setModal(!isModalOpen);
        console.log(isModalOpen, props.id);
    };

    // タイトル書き換え
    const handleTitleChange = (event) => {
        console.log(state)
        const inputValue = event.target.value;
        setState((prevState) => ({ ...prevState, title: inputValue }));
    };

    // 本文書き換え
    const handleBodyChange = (event) => {
        console.log(state)
        const inputValue = event.target.value;
        setState((prevState) => ({ ...prevState, body: inputValue }));
    };

    // <button onClick={() => getNewItem()} >更新</button>
    // 表示内容の切り替え 出力
    if (isModalOpen) {
        return (
            <form onSubmit={() => handleSubmit()}>
                <input 
                    value={state.title}
                    onChange={(event) => {handleTitleChange(event)}}
                />
                <br/>
                <textarea
                    value={state.body}
                    onChange={(event) => {handleBodyChange(event)}}
                />
                <br/>
                <button onClick={() => handleClickModal(isModalOpen)}>戻る</button>
                <input type='submit' value='更新'/>
            </form>
        );
    } else if (isAlive) {
        return (
            <>
                <span>{props.id}</span>
                <span>{props.title}</span>
                <div>{props.body}</div>
                <button onClick={() => handleClickModal(isModalOpen)}>編集</button>
                <button onClick={() => deletePost(props.id)}>削除</button>
            </>
        );
    } else {
        return <div>deleted</div>
    }
};

export default MemoItem;