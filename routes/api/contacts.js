const express = require('express');
const router = express.Router();
const modelContact = require('../../models/contacts')

router.get('/', modelContact.listContacts);
router.get('/:id', modelContact.getContactById);
router.post('/', modelContact.addContact);
router.put('/:id', modelContact.updateContact);
router.patch('/:id', modelContact.updateStatusContact);
router.delete('/:id', modelContact.removeContact);

module.exports = router;

