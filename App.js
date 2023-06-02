import React, { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const img = require("./src/crono.png");
let relogio = null;
// Variaveis para controlar os segundos, minutos e horas.
let ss = 0;
let mm = 0;
let hh = 0;

export default function App() {
  const [timer, setTimer] = useState(0);
  const [botao, setBotao] = useState("Iniciar");
  const [ultimo, setUltimo] = useState(null);

  function iniciar() {
    if (relogio !== null) {
      // Aqui vai parar o relogio
      clearInterval(relogio);
      relogio = null;

      setBotao("Iniciar");
    } else {
      // Comecar a girar o relogio
      relogio = setInterval(() => {
        ss++;

        if (ss == 60) {
          ss = 0;
          mm++;
        }

        if (mm == 60) {
          mm = 0;
          hh++;
        }

        let format =
          (hh < 10 ? "0" + hh : hh) +
          ":" +
          (mm < 10 ? "0" + mm : mm) +
          ":" +
          (ss < 10 ? "0" + ss : ss);

        setTimer(format);
      }, 1000);

      // para quando pausar o cronometro, aparecer a msg no botao
      setBotao("Pausar");
    }
  }
  function reiniciar() {
    if (relogio !== null) {
      clearInterval(relogio);
      relogio = null;
    }

    setUltimo(timer);
    setTimer(0);
    ss = 0;
    mm = 0;
    hh = 0;
    setBotao("Iniciar");
  }

  return (
    <View style={styles.container}>
      <Image source={img} />
      <Text style={styles.timer}>{timer}</Text>
      <View style={styles.btnArea}>
        <TouchableOpacity style={styles.btn} onPress={iniciar}>
          <Text style={styles.btnText}>{botao}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn} onPress={reiniciar}>
          <Text style={styles.btnText}>Reiniciar</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.areaAviso}>
        <Text style={styles.textAviso}>
          {ultimo ? "Ultimo tempo: " + ultimo : ""}
        </Text>
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
