const service = require('../service');

const listContacts = async (req, res, next) => {
  try{
    const result = await service.list();
    res.json({
      status:'success',
      code:200,
      data:{
        result,
      },
    });

  }
  catch (e){
    console.error(e);
    next(e);
  }
}
const getContactById = async (req, res, next) => {
  const {id} = req.params;
  try{
    const result = await service.getById(id);
    if(!result){
      res.status(400).json({
        status:'error',
        code:404,
        message: `contact with id: ${id} not found`,
        data: 'not found'
      })
    }
    res.json({
      status:'success',
      code:200,
      data:{
        result
      }
    })

  }
  catch (e){
    console.error(e);
    next(e);
  }
}
const addContact = async (req, res, next) => {
  const {name, email, phone} = body;
  try{
    const result = await service.add({name, email, phone});
    if(!result){
      res.json({
        status: "Not Found",
        code: 404,
        message: "missing required name field",
      });
    }
    res.status(201).json({
      status:'success',
      code:201,
      data:{result}
    })

  }
  catch (e){
    console.error(e);
    next(e);
  }
}
const updateContact = async (req, res, next) => {
  const {id} = id.params;
  const {name, email, phone} = req.body;
  try{
    const result = await service.update(id, {name, email, phone});
    if(result){
      res.json({
        status:'success',
        code:200,
        data:{result}
      })
    }else{
      res.staus(404).json({
        status:'error',
        code:404,
        message:`contact with id: ${id} not found`,
        data:'not found'
      })
    }

  }
  catch (e){
    console.error(e);
    next(e);
  }
}
const updateStatusContact = async (req, res, next) => {
  const {id} = id.params;
  const {favorite} = req.body;
  try{
    const result = await service.status(id, {favorite});
    if(result){
      res.json({
        status:'success',
        code:200,
        data:{result}
      })
    }else{
      res.staus(404).json({
        status:'error',
        code:404,
        message:`contact with id: ${id} not found`,
        data:'not found'
      })
    }

  }
  catch (e){
    console.error(e);
    next(e);
  }
}
const removeContact = async (req, res, next) => {
  const {id} = id.params;
  try{
    const result = service.remove(id);
    if(result){
      res.json({
        status:'success',
        code:200,
        message:'Contact has been deleted',
      })
    }else{
      res.status(404).json({
        status:'error',
        code:404,
        message:`Contact with id: ${id} not found`,
        data:'not found'
      })
    }

  }
  catch (e){
    console.error(e);
    next(e);
  }
}
module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
  updateStatusContact,
}

// const fs = require('fs/promises')
// const path = require("path");
// const filePath = path.join(__dirname, "contacts.json");
// const {v4} = require('uuid')

// const listContacts = async () => {
//   const data = await fs.readFile(filePath);
//   const contacts = JSON.parse(data);
//   return contacts;
// }

// const getContactById = async (contactId) => {
//   const contacts = await listContacts(); 
//   const contact = contacts.filter(({ id }) => id === contactId);
//   if (!contact) {
//     return null;
//   }
//   return contact;
// };

// const removeContact = async (contactId) => {
//   const contacts = await listContacts();
//   const index = contacts.findIndex((contact) => contact.id === contactId.toString());

//     // If the contact with the given contactId is not found, return null.
//   if (index === -1){
//     return null;
//   }

//   // Use splice to remove the contact at the found index (index), and capture it in 'removedContact'.
//   const [removedContact] = contacts.splice(index, 1);
//   await fs.writeFile(filePath, JSON.stringify(contacts))

//   return removedContact;

// }

// const addContact = async (body) => {
//   const contacts = await listContacts();
//   const {name, email, phone} = body;
//   const newContact = {
//     id: v4(),
//     name,
//     email,
//     phone,
//   };
//   contacts.push(newContact);
//   await fs.writeFile(filePath, JSON.stringify(contacts));
//   return newContact

// }

// const updateContact = async (contactId, body) => {
//   const contacts = await listContacts();

//   // Find the index of the contact to be updated by matching its ID
//   const index = contacts.findIndex(
//     (contact) => contact.id === contactId.toString()
//   );

//   // If the contact with the specified ID is not found, return null
//   if (index === -1) {
//     return null;
//   }

//   // If the request body is empty, return null
//   if (!body) {
//     return null;
//   }

//   // Update the contact's data by replacing it in the contacts array
//   contacts[index] = { id: contactId, ...body };

//   // Write the updated contacts array back to the JSON file
//   await fs.writeFile(filePath, JSON.stringify(contacts));

//   // Return the updated contact
  // return contacts[index];
// };


// module.exports = {
//   listContacts,
//   getContactById,
//   removeContact,
//   addContact,
//   updateContact,
// }