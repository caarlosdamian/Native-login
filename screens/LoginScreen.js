import React from "react";
import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const LoginScreen = () => {
  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Email"
          // value={}
          // onChangeText={text =>}
          style={styles.input}
        ></TextInput>
        <TextInput
          placeholder="Password"
          // value={}
          // onChangeText={text =>}
          style={styles.input}
          secureTextEntry
        ></TextInput>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            // onPress={()=>}
            style={styles.button}
          >
            <Text style={styles.button}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity
            // onPress={()=>}
            style={[styles.button, styles.buttonOutline]}
          >
            <Text style={styles.buttonOutlineText}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
});
