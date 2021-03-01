// Empty constructor
function externalKeypad() {}

// The function that passes work along to native shells
externalKeypad.prototype.isKeyboardConnected = function(successCallback, errorCallback) {
  cordova.exec(successCallback, errorCallback, 'ExternalKeypad', 'isKeyboardConnected');
}

// Installation constructor that binds the external keypad plugin to window (with name: externalKeypad)
externalKeypad.install = function() {
  if (!window.plugins) {
    window.plugins = {};
  }
  window.plugins.externalKeypad = new externalKeypad();
  return window.plugins.externalKeypad;
};

cordova.addConstructor(externalKeypad.install);
