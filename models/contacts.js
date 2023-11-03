// const service = require("../service");

// const listContacts = async (req, res, next) => {
//   try {
//     const result = await service.list();
//     res.json({
//       status: "success",
//       code: 200,
//       data: {
//         result,
//       },
//     });
//   } catch (e) {
//     console.error(e);
//     next(e);
//   }
// };

// const getContactById = async (req, res, next) => {
//   const { id } = req.params;
//   try {
//     const result = await service.getById(id);
//     if (!result) {
//       res.status(400).json({
//         status: "error",
//         code: 404,
//         message: `contact with id: ${id} not found`,
//         data: "not found",
//       });
//     }
//     res.json({
//       status: "success",
//       code: 200,
//       data: {
//         result,
//       },
//     });
//   } catch (e) {
//     console.error(e);
//     next(e);
//   }
// };
// const addContact = async (req, res, next) => {
//   const { name, email, phone } = req.body;
//   try {
//     const result = await service.add({ name, email, phone });
//     if (!result) {
//       res.json({
//         status: "Not Found",
//         code: 404,
//         message: "missing required name field",
//       });
//     }
//     res.status(201).json({
//       status: "success",
//       code: 201,
//       data: { result },
//     });
//   } catch (e) {
//     console.error(e);
//     next(e);
//   }
// };

// const updateContact = async (req, res, next) => {
//   const { id } = req.params;
//   const { name, email, phone } = req.body;
//   try {
//     const result = await service.update(id, { name, email, phone });
//     if (result) {
//       res.json({
//         status: "success",
//         code: 200,
//         data: { result },
//       });
//     } else {
//       res.status(404).json({
//         status: "error",
//         code: 404,
//         message: `contact with id: ${id} not found`,
//         data: "not found",
//       });
//     }
//   } catch (e) {
//     console.error(e);
//     next(e);
//   }
// };
// const updateStatusContact = async (req, res, next) => {
//   const { id } = req.params;
//   const { favorite } = req.body;
//   try {
//     const result = await service.status(id, { favorite });
//     if (result) {
//       res.json({
//         status: "success",
//         code: 200,
//         data: { result },
//       });
//     } else {
//       res.status(404).json({
//         status: "error",
//         code: 404,
//         message: `contact with id: ${id} not found`,
//         data: "not found",
//       });
//     }
//   } catch (e) {
//     console.error(e);
//     next(e);
//   }
// };

// const removeContact = async (req, res, next) => {
//   const { id } = req.params;
//   try {
//     const result = service.remove(id);
//     if (result) {
//       res.json({
//         status: "success",
//         code: 200,
//         message: "Contact has been deleted",
//       });
//     } else {
//       res.status(404).json({
//         status: "error",
//         code: 404,
//         message: `Contact with id: ${id} not found`,
//         data: "not found",
//       });
//     }
//   } catch (e) {
//     console.error(e);
//     next(e);
//   }
// };
// module.exports = {
//   listContacts,
//   getContactById,
//   removeContact,
//   addContact,
//   updateContact,
//   updateStatusContact,
// };