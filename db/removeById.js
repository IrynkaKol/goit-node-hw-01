const getAll = require("./getAll");
const updateContact = require('./updateContact');

const removeById = async (id) => {
const contacts = await getAll();
// 1 вариант
const idx = contacts.findIndex(contact => contact.id === id);
if(idx === -1) {
    return null;
}
const [removeContact] = contacts.splice(idx, 1);
await updateContact(contacts);
return removeContact;

//2 вариант
//const idx = contacts.findIndex((contact) => contact.id === id);
 // if (idx === -1) {
  //  return null;
  //}
  //const newContact = contacts.filter((_, index) => index !== idx);
  //await fs.writeFile(contactsPath, JSON.stringify(newContact));
  //return contacts[idx];


}

module.exports = removeById;