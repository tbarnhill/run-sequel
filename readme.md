
```javascript
import sql 'run-sql'

sql.conn={
        user: "your-username",
        password: "your-password",
        server: "your-server.com",
        database: "your-database",
        connectionTimeout: 30000
}

sql.run('SELECT * FROM TABLE',(err,res)=>{

})

```