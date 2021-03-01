// Empty constructor
function ZebraExternalKeypad() {}

// The function that passes work along to native shells
ZebraExternalKeypad.prototype.isExternalKeypadConnected = function(successCallback, errorCallback) {
  cordova.exec(successCallback, errorCallback, 'ZebraExternalKeypad', 'isKeypadConnected');
}

// Installation constructor that binds the external keypad plugin to window (with name: ZebraExternalKeypad)
ZebraExternalKeypad.install = function() {
  if (!window.plugins) {
    window.plugins = {};
  }
  window.plugins.ZebraExternalKeypad = new ZebraExternalKeypad();
  return window.plugins.ZebraExternalKeypad;
};

cordova.addConstructor(ZebraExternalKeypad.install);
