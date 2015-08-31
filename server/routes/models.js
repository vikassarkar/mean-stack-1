'use strict';

/*
**export multiple schema in single file 
*/
module.exports = {
  home: require('../models/home/home'),
  contactList: require('../models/home/contactList'),
  component: require('../models/component/component')
};