import React, { useState } from "react";
import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const FormSignIn = () => {
  /**
   * Life Cycle Hook pada RFC
   * const [getter, setter] = useState(); -> useState() bisa berisi String, Number, Boolean, Array, Object
   * getter merupakan nama variabel sebagai penampung dari nilai setter
   * setter merupakan nama variabel yang mau kita ubah-ubah nilainya
   *
   * Contoh
   * const [user, setUser] = useState("");
   * const [isActive, setIsActive] = useState(true);*/

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handlerOpenPassword = () => {
    /**
     * handlerOpenPassword merupakan sebuah function yang bertugas
     * untuk mengirimkan output dari Library 'react-native' Alert
     * Alert.alert(judul, pesan) -> judul dan pesan tipe datanya String
     *
     * Contoh:
     * Alert.alert("Notifikasi", "Apakah kamu setuju?");*/

    return Alert.alert(
      "Notification",
      `Your email is ${email}\nYour password is ${password}`
    );
  };

  /**
   * Untuk melakukan pengisian data pada bagian setter useState di TextInput
   * dengan menggunakan properties onChangeText={(e) => setter(e)}
   * nilai tersebut akan otomatis tersimpan ke dalam getter pada useState
   *
   * Contoh:
   * <TextInput onChangeText={(e) => setUser(e)}  /> */

  return (
    <View style={styles.container}>
      <View style={{ width: "50%", marginBottom: 25 }}>
        <Text>Email</Text>
        <TextInput
          style={styles.form}
          onChangeText={(e) => setEmail(e)}
          keyboardType="email-address"
        />
      </View>
      <View style={{ width: "50%", marginBottom: 25 }}>
        <Text>Password</Text>
        <TextInput
          style={styles.form}
          secureTextEntry={true}
          onChangeText={(e) => setPassword(e)}
        />
      </View>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => handlerOpenPassword()}
      >
        <Text style={{ color: "white", textAlign: "center" }}>Sign In</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  form: {
    borderColor: "black",
    borderWidth: 2,
    borderRadius: 3,
    padding: 5,
  },

  btn: {
    backgroundColor: "purple",
    padding: 10,
    borderRadius: 10,
    width: "50%",
  },
});

export default FormSignIn;
