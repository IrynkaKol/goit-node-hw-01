const getAll = require('./getAll');
const updateContact = require('./updateContact')

const updateById = async (id, data) => {
    const contacts = await getAll();
    const idx = contacts.findIndex(contact => contact.id === id)
    if(idx === -1) {
        return null;
    }
    contacts[idx] = {...data, id};
    await updateContact(contacts);
    return contacts[idx];
}

module.exports = updateById;