import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
  Image,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { withNavigation } from "react-navigation";
import { FontAwesome } from "@expo/vector-icons";

import { Formik } from "formik";
import * as yup from "yup";

const reviewSchema = yup.object({
  email: yup
    .string()
    .required("Email Address is Required")
    .email("Please enter valid email"),

  password: yup
    .string()
    .required("Password is required")
    .min(5, ({ min }) => `Password must be at least ${min} characters`),
});

const Signin = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.textview}>
        <Text style={styles.textstyle}>Sign In</Text>
      </View>

      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={reviewSchema}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
          isValid,
        }) => (
          <View style={{ flex: 1 }}>
            <View style={{ marginLeft: "10%", marginTop: "30%" }}>
              <Text style={{ color: "#A6A6A6" }}>Email</Text>
            </View>
            <View style={styles.textinput}>
              <TextInput
                style={styles.inputstyle}
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                value={values.email}
              />
            </View>
            {errors.email && touched.email && (
              <Text style={{ alignSelf: "center", color: "red" }}>
                {errors.email}
              </Text>
            )}

            <View style={{ marginLeft: "10%", marginTop: 40 }}>
              <Text style={{ color: "#A6A6A6" }}>Password</Text>
            </View>
            <View style={styles.textinput}>
              <TextInput
                secureTextEntry={true}
                style={[styles.inputstyle, { flex: 1 }]}
                onChangeText={handleChange("password")}
                onBlur={handleBlur("password")}
                value={values.password}
              />
              <FontAwesome
                name="eye"
                size={20}
                color="#FFF"
                style={styles.iconStyle}
              />
            </View>
            {errors.password && (
              <Text style={{ alignSelf: "center", color: "red" }}>
                {errors.password}
              </Text>
            )}

            <View style={styles.forgetp}>
              <TouchableOpacity
                onPress={() => navigation.push("Forgetpassemail")}
              >
                <Text style={styles.forgetptext}>Forgot Password ?</Text>
              </TouchableOpacity>
            </View>

            <View style={{ flex: 1, justifyContent: "flex-start" }}>
              <View>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => {
                    handleSubmit();
                    navigation.push("Home");
                  }}
                  disabled={!isValid}
                >
                  <Text style={{ color: "#FFF" }}>Sign In</Text>
                </TouchableOpacity>
              </View>

              <View style={styles.account}>
                <Text style={{ fontSize: 15, color: "#A6A6A6" }}>
                  Don't Have an account ?
                </Text>
                <TouchableOpacity onPress={() => navigation.push("Signup")}>
                  <Text
                    style={{
                      fontSize: 15,
                      color: "#FFF",
                      textDecorationLine: "underline",
                      paddingLeft: 7,
                    }}
                  >
                    Sign Up
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        )}
      </Formik>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    backgroundColor: "#101010",
    display: "flex",
    flex: 1,
  },
  textview: {
    alignItems: "center",
    marginTop: 40,
  },
  textstyle: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#FFF",
  },

  textinput: {
    backgroundColor: "#101010",
    width: "80%",
    alignSelf: "center",
    height: 40,
    borderBottomWidth: 1,
    borderBottomColor: "#FFF",
    flexDirection: "row",
  },

  inputstyle: {
    marginHorizontal: 5,
    position: "relative",
    flex: 1,
    fontSize: 20,
    color: "#FFF",
  },
  iconStyle: {
    position: "relative",
    fontSize: 25,
    alignSelf: "center",
    marginHorizontal: 5,
    color: "#FFF",
  },

  forgetp: {
    marginLeft: "10%",
    marginTop: 20,
  },

  forgetptext: {
    fontSize: 15,
    color: "#FFF",
    textDecorationLine: "underline",
  },

  account: {
    alignSelf: "center",
    marginTop: 10,
    flexDirection: "row",
  },

  button: {
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    backgroundColor: "#353536",
    height: 50,
    width: "80%",
    borderRadius: 10,
    marginTop: "20%",
  },
});

export default withNavigation(Signin);
