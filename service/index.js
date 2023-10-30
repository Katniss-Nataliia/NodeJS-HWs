const User  = require('./schemas/users');

//get all contacts
const list= async() => {
    return User.find()
};

//get contact by id
const getById = id =>{
    return User.findOne({_id: id});
}

//add Contact
const add = ({name, email, phone}) => {
    return User.create({name, email, phone})
} 

//updating the contact
const update = (id, fields) =>{
    return User.findByIdAndUpdate(id, fields, {new: true})
}
const status = (id, favorite) => {
    return User.findByIdAndUpdate(id, favorite, {new: true})
}
//remove constact by Id
const remove = id =>{
    return User. findByIdAndRemove({_id: id});
}

module.exports ={
    list,
    getById,
    add,
    update,
    status,
    remove,
}