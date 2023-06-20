let mongoose=require('mongoose')
let coinGeckoSchema=new mongoose.Schema({
    id:{type:String,required:true},
    symbol:{type:String,required:true},
    name:{type:String,required:true},
    platforms:Object
    
},{timestamps:true})
module.exports=mongoose.model("coinGeckoData",coinGeckoSchema)
