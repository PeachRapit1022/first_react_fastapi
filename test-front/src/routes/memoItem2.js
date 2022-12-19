import React from "react";
import axios from "axios";

const baseURL = "http://localhost:8000"

const MemoItem = (props) => {

    // アイテムの削除
    const [isAlive, setAlive] = React.useState(true);
    const deletePost = (id) => {
        setAlive(false);
        axios.delete(`${baseURL}/delete/${id}`);
    }

    // アイテムの更新
    const changePost = (newItem) => {
        axios.put(`${baseURL}/edit/${newItem.id}`,{newItem})
        .then((response) => {console.log(response.data)})
    }

    // 更新アイテムの取得
    let newItem;
    const getNewItem = () => {

        newItem = {
            userId:1,
            id:1,
            title: 'abcde',
            body: 'qwerty'
        }

    }

    // メモアイテムの定義
    let memoItem;
    if (isAlive) {
        memoItem = (
        <>
            <span>{props.id}</span>
            <span>{props.title}</span>
            <div>{props.body}</div>
            <button onClick={() => handleClickModal(isModalOpen)}>編集</button>
            <button onClick={() => deletePost(props.id)}>削除</button>
        </>
        );
    } else {
        memoItem = <tr>deleted</tr>
    }

    // モーダルの状態保持と状態変更
    const [isModalOpen, setModal] = React.useState(false);
    const handleClickModal = (isModalOpen) => {
        setModal(!isModalOpen);
        //setAlive(!isAlive);
        console.log(isModalOpen, props.id);
    }

    // モーダルの定義
    let modal;
    if (isModalOpen) {
        modal = (
            <form>
                <input value={props.title}/>
                <br/>
                <textarea value={props.body}/>
                <br/>
                <button onClick={() => handleClickModal(isModalOpen)}>戻る</button>
                <button onClick={() => changePost(newItem)} >更新</button>
            </form>
        );
    } else {
        modal = memoItem
    }

    // 出力
    return (
        <>
            {modal}
        </>
    );
}

export default MemoItem;