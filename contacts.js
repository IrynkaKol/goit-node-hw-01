const fs = require("fs").promises;
const path = require("path");
const { v4 } = require("uuid");

const contactsPath = path.join(__dirname, "/db", "contacts.json");
//console.log(contactsPath);

// TODO: задокументировать каждую функцию
const listContacts = async () => {
  const data = await fs.readFile(contactsPath);
  const contacts = JSON.parse(data);
  //return contacts;
  console.table(contacts);

  //catch (error) {
  //console.log(`Error: ${error.message}`)
  //}
};
listContacts();

const getContactById = async (contactId) => {
  const contacts = await listContacts();
 
  const result = contacts.find((contact) => contact.id === contactId);
  if (!result) {
    return null;
  }
  //return result;
  console.log(result);
};
getContactById("4");

const removeContact = async (contactId) => {
  const contacts = await listContacts();
  const idx = contacts.findIndex((contact) => contact.id === contactId);
  if (idx === -1) {
    return null;
  }
  const newContact = contacts.filter((_, index) => index !== idx);
  await fs.writeFile(contactsPath, JSON.stringify(newContact));
  console.log(contacts[idx])
  //return contacts[idx];
};

//const updateId = '5f5f66ee-3c37-4c8a-9295-bdcda7f6a604';
//removeContact(updateId)

  
const addContact = async (data) => {
  const contacts = await listContacts();
  const newContact = { ...data, id: v4() };
  contacts.push(newContact);
  await fs.writeFile(contactsPath, JSON.stringify(contacts));
  //return newContact
  console.log(newContact);
};
const newData = {
  name: "Iren Adler",
  email: "iren@gmail.com",
  phone: "(750) 456-4567",
};
//addContact(newData);

/*module.exports = {
    listContacts, 
    getContactById, 
    removeContact, 
    addContact
  }*/
