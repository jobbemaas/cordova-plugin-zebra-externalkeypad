# Cordova Plugin - Zebra External Keypad (physical)

Allows you to detect if the phyisical external keypad is connected to the Zebra device.

# API

## Get Status Functions

`success` is a callback called to return the status (connected/disconnected).

`error` is a callback called if anything goes wrong. (Optional)

```js
// Identify if the keyboard is currently connected or disconnected.
window.ZebraExternalKeypad.isConnected(success, error);
