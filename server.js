var mysql=require('mysql');

var conn=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:'',
    database:"rayal_restaurant"
});
conn.connect(function(err,res){
    if(err)
    {
        console.log(err);
    }
    else{

        var sql = "INSERT INTO table_order('table_no','fname','persons','contact_no','emailId','dateandtime') VALUES ('"+req.body.table_no+"','"+req.body.fname+"','"+req.body.persons+"','"+req.body.contact_no+"','"+req.body.emailId+"','"+req.body.dateandtime+"')";
            con.query(sql, function(err, result)  {
                if(err) throw err;
            console.log("table created");
    });
    }
});
        // conn.query("select * from table_order",function(err,res){
        //     if(err)
        //     {
        //         console.log(err);
        //     }
        //     console.log(res);
        // });