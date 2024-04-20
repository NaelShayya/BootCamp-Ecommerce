const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    first_name: {
        type: String,
        required: true
    },
    last_name: { 
        type: String,
         required: true
         },
    email: {
         type: String,
          required: true,
           unique: true
         },
    password: { 
        type: String,
        required: true
     },
    role_id: {
         type: mongoose.Schema.Types.ObjectId, 
         ref: 'Role',
          required: true
         },
    created_at: {
         type: Date,
         default: Date.now
         },
    modified_at: { 
        type: Date,
         default: Date.now
         },
    country_id: { 
        type: mongoose.Schema.Types.ObjectId,
         ref: 'Country',
          required: true
         }
}); 


const User = mongoose.model("User", userSchema);


export default User;