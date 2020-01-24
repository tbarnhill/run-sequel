let sql = require ('mssql')

export default{
    run:function(query,callback){

        let pool = new sql.ConnectionPool(this.conn)
        pool.connect(onConnect)

        function onConnect(err){
            var request = new sql.Request(pool)
            if (err) {
                if(callback){callback(err)}
            } 
            else { 
                request.query(query,onResponse)
            }  
        }

        function onResponse(err,res){
            if(callback){callback(err,res)}
            sql.close()
        }
    
    }
    
}



