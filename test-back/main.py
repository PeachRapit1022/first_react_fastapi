from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import uvicorn
from pydantic import BaseModel
from typing import Union
import sqlite3

app = FastAPI()

dbname = 'Test.db'

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

@app.get("/")
def Hello():
    return {"Hello":"World!"}

@app.get("/get")
def back_test_get():

    return {
        "userId": 1,
        "id": 1,
        "title": "タイトル",
        "body": "ポケモン、ゲットだぜ！"
    }

@app.delete("/get")
def back_test_delete():
    print('delete')
    



class Item(BaseModel):
    userId: int = None
    id: int
    title: str
    body: str

@app.post("/post")
def back_test_post(item: Item):

    title = item.title
    body = item.body

    conn = sqlite3.connect(dbname)
    cur = conn.cursor()

    cur.execute('INSERT INTO memo(title, body) values("{}","{}")'.format(title, body))

    cur.execute('SELECT * FROM memo')
    print(cur.fetchall())

    conn.commit()
    conn.close()

    return item

@app.put("/put")
def back_test_put(item: Item):
    print(item)
    return item
            
if __name__ == '__main__':
    uvicorn.run(app)