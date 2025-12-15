import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new mongoose.Schema({
    name : {
        type: String,
        required: true, 
        trim: true
    },
    email : {
        type: String,
        required: true,
        unique: true,   
        lowercase: true,
        trim: true,
        match: [/^[^\s@]+@[^\s@]+.[^\s@]+$/, 'Invalid email format']
    },
    password : {
        type: String,
        required: true,
        minlength: 6,
        select : false // Exclude password field by default
    },
    role : {
        type: String,
        enum: ['user', 'admin'],
        default: 'user' 
    },
    isBlocked : {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true
});




// Password hashing
userSchema.pre("save", async function () {
  if (!this.isModified("password")) return;
  this.password = await bcrypt.hash(this.password, 10);
});

// Compare password
userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};


const user = mongoose.model('User', userSchema);

export default user;