const getAll = require('./getAll');
const { v4 } = require('uuid');

//const fs = require('fs').promises;
//const filePath = require('./filePath'); 
const updateContact = require('./updateContact');


const addContact = async (data) => {
    const contacts = await getAll();
    const newContact = {...data, id: v4()};
    contacts.push(newContact);
    updateContact(contacts); //await fs.writeFile(filePath, JSON.stringify(contacts));
    return newContact;

}
module.exports = addContact;