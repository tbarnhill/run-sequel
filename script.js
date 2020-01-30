let sql = require ('mssql')

exports.conn = {}
exports.run = function(query,callback){
    sql.conn = exports.conn
    let pool = new sql.ConnectionPool(exports.conn)
    pool.connect(onConnect)

    function onConnect(err){
        if (err) {
            if(callback){callback(err)}
        } 
        else {
            let request = new sql.Request(pool)
            request.query(query,onResponse)
        }  
    }

    function onResponse(err,res){
        if(callback){callback(err,res)}
        sql.close()
    }

}
