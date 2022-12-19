import sqlite3

dbname = './test-back/Test.db'
conn = sqlite3.connect(dbname)
cur = conn.cursor()

cur.execute('DROP TABLE memo')

conn.commit()

cur.execute(
    'CREATE TABLE memo(id INTEGER PRIMARY KEY AUTOINCREMENT, title STRING, body STRING)'
    )

conn.commit()
conn.close()