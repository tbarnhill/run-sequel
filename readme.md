Example Use
```javascript
let sql = require('run-sequel')

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