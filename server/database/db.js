import mongoose from 'mongoose';
const DBConnection=async ()=>{
    const MONOGDB_URL=`mongodb://user:codeforinterview@ac-svml2ga-shard-00-00.bp6sgz1.mongodb.net:27017,ac-svml2ga-shard-00-01.bp6sgz1.mongodb.net:27017,ac-svml2ga-shard-00-02.bp6sgz1.mongodb.net:27017/?ssl=true&replicaSet=atlas-o4p23b-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try{
        await mongoose.connect(MONOGDB_URL,{useNewUrlParser:true});
        console.log('Database Connected succesfully');
    } catch(error){
        console.error('Error while connection with Database',error.message);
    }
}
export default DBConnection;