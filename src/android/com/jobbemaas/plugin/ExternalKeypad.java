package com.GMLSDantas.plugin;

import android.content.Intent;
import android.content.Context;
import android.content.res.*;

// Cordova-required packages
import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.CallbackContext;
import android.content.res.Resources;
import android.util.Log;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

public class ExternalKeypad extends CordovaPlugin {

    @Override
    public boolean execute(String action, JSONArray args, CallbackContext callbackContext) throws JSONException {
        Context context = cordova.getActivity().getApplicationContext();
        this.isKeypadConnected(callbackContext,context);
        return true;
    }

    private void isKeypadConnected(CallbackContext callbackContext,Context context){
        Configuration config = context.getResources().getConfiguration();
        int keyboard = config.keyboard;
        if (keyboard != Configuration.KEYBOARD_NOKEYS) {
            callbackContext.success("true");
        } else {
            callbackContext.success("false");
        }
    }
}
