import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const img = require("./src/crono.png");

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={img} />
      <Text style={styles.timer}>00:00:00</Text>
      <View style={styles.btnArea}>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnText}>Iniciar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnText}>Reiniciar</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.areaAviso}>
        <Text style={styles.textAviso}>Ultimo tempo 00:05:49</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#00aeef",
    alignItems: "center",
    justifyContent: "center",
  },
  timer: {
    marginTop: -160,
    fontSize: 45,
    fontWeight: "bold",
    color: "#fff",
  },
  btnArea: {
    flexDirection: "row",
    marginTop: 130,
    height: 40,
  },
  btn: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    height: 40,
    margin: 17,
    borderRadius: 9,
  },
  btnText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#00aeef",
  },
  areaAviso: {
    marginTop: 40,
  },
  textAviso: {
    fontSize: 21,
    color: "#fff",
    fontStyle: "italic",
  },
});
