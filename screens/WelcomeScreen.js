import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { AuthContext } from "../store/auth-context";

function WelcomeScreen() {
  const [fetchedMessage, setFetchedMessage] = useState("");
  const { token } = useContext(AuthContext);

  useEffect(() => {
    (async () => {
      const { data } = await axios.get(
        `https://react-native-course-3544e-default-rtdb.firebaseio.com/message.json?auth=${token}`
      );

      setFetchedMessage(data);
    })();
  }, [token]);

  return (
    <View style={styles.rootContainer}>
      <Text style={styles.title}>Welcome!</Text>
      <Text>You authenticated successfully!</Text>

      <Text>
        Message from authenticaded resources:{"\n"}
        <Text style={styles.text}>{fetchedMessage}</Text>
      </Text>
    </View>
  );
}

export default WelcomeScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 32,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
  },
  text: {
    margin: 8,
    fontWeight: "bold",
    fontSize: 16,
    textAlign: "center",
  },
});
