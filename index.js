//const argv = require('yargs').argv;
//const {hideBin} = require('yargs/helpers')

const { program } = require("commander");

const contactsOperations = require("./db");

program
  .option("-a, --action <type>", "choose action")
  .option("-i, --id <type>", "user id")
  .option("-n, --name <type>", "user name")
  .option("-e, --email <type>", "user email")
  .option("-p, --phone <type>", "user phone");

program.parse(process.argv);

const argv = program.opts();
console.log(argv);

/*
 1. Получить все товары - contactsOperations.getAll
 2. Получить 1 контакт по id - contactsOperations.getById
 3. Добавить товар -  contactsOperations.addContact
 4. Обновить товар по id - contactsOperations.updateById
 5. Удалить товар по id - contactsOperations.removeById
  */

const invokeAction = async ({ action, id, data }) => {
  switch (action) {
    case "getAll":
      const contacts = await contactsOperations.getAll();
      console.log(contacts);
      break;
    case "getById":
      const contact = await contactsOperations.getById(id);
      if (!contact) {
        throw new Error(`Contact whith id = ${id} not found`);
      }
      console.log(contact);
      break;
    case "addContact":
      const newContact = await contactsOperations.addContact(data);
      console.log(newContact);
      break;
    case "updateById":
      const updateContact = await contactsOperations.updateById(id, data);
      if (!updateContact) {
        throw new Error(`Contact whith id = ${id} not found`);
      }
      console.log(updateContact);
      break;
    case "removeById":
      const removeContact = await contactsOperations.removeById(id);
      console.log(removeContact);

      break;
    default:
      console.log("Unknown action");
  }
};

invokeAction(argv);

//const arr = hideBin(process.argv); // отрезаем два первых индекса из массива
//console.log(arr);
//const {argv} = yargs(arr);
//const {argv} = yargs(process.argv.slice(2)); // если в одну строку записать
//console.log(argv);
//invokeAction(argv);

// //invokeAction({action: "getAll"})

// const id = "6"
// invokeAction({action: "getById", id})

// const newData = {
// name: "Iren Adler",
//   email: "iren@gmail.com",
//   phone: "(750) 456-4567",
// };
// //invokeAction({ action: "addContact", data: newData });
// Если передаем не data а отдельно все
// const newData = {
//   name: "Iren Adler",
//   email: "iren@gmail.com",
//   phone: "(750) 456-4567",
// };
// invokeAction({
//   action: "add",
//   name: newData.name,
//   email: newData.email,
//   phone: newData.phone,
// });

// const updateId = '65c0b429-16e7-4e21-8892-efb1656dbacd';

// //const updateData = {
//   //name: "Iren Adler",
//     //email: "iren@gmail.com",
//     //phone: "(750) 456-4569",
//   //};
// //invokeAction({ action: "updateById", id: updateId, data: updateData });

// //invokeAction({ action: "removeById", id: updateId});
