# Cordova Plugin - Zebra External Keypad (physical)

Allows you to detect if the phyisical external keypad is connected to the Zebra device.

# API

## Function to get connection status

`success` is a callback called with the result, when the function is executed properly.

`error` is a callback called if anything goes wrong. (Optional)

```js
// Identify if the keypad is currently connected or disconnected (true/false).
window.ZebraExternalKeypad.isConnected(success, error);
