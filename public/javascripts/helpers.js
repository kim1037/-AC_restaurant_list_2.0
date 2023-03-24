const Handlebars = require('handlebars')

Handlebars.registerHelper("selected", function (value, selectedValue) {
  if (value === selectedValue) {
    return "selected";
  } else {
    return "";
  }
});
