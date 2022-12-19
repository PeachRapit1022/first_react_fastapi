import sqlite3

dbname = 'Test.db'
conn = sqlite3.connect(dbname)
cur = conn.cursor()

title = input('title : ')
body = input('body : ')

cur.execute('INSERT INTO memo(title, body) values("{}","{}")'.format(title, body))


conn.commit()
conn.close()