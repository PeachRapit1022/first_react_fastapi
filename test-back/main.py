from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import uvicorn
from pydantic import BaseModel
from typing import Union
import sqlite3

app = FastAPI()

origins = [
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# DB名
dbname = 'Test.db'

# dict_factoryの定義
def dict_factory(cursor, row):
    d = {}
    for idx, col in enumerate(cursor.description):
        d[col[0]] = row[idx]
    return d

# SQL実行関数
def sql_execute(query):
    conn = sqlite3.connect(dbname)
    conn.row_factory = dict_factory
    cur = conn.cursor()

    cur.execute(query)

    data = cur.fetchall()

    conn.commit()
    conn.close()

    return data

# Item 型定義
class Item(BaseModel):
    title: str
    body: str

# GET(一覧)
@app.get("/get")
def get_all_item():
    data = sql_execute('SELECT * FROM memo')
    return data

# GET(個別)
@app.get("/get/{item_id}")
def get_one_item(item_id: int):
    data = sql_execute('SELECT * FROM memo WHERE id={}'.format(item_id))
    return data

# 新規投稿
@app.post("/post")
def post_new_item(item: Item):
    
    title = item.title
    body = item.body
    
    sql_execute('INSERT INTO memo(title, body) values("{}","{}")'.format(title, body))
    
    data = sql_execute('SELECT * FROM memo')
    return data

# 編集
@app.put("/edit/{item_id}")
def edit_item(item_id: int, item: Item):

    title = item.title
    body = item.body

    sql_execute('UPDATE memo SET title="{}", body="{}" WHERE id={}'.format(title, body, item_id))

    return item

# 削除
@app.delete("/delete/{item_id}")
def deltete_item(item_id: int):
    sql_execute('DELETE FROM memo WHERE id={}'.format(item_id))
            
# サーバー起動コマンド
if __name__ == '__main__':
    uvicorn.run(app)