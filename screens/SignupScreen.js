import AuthContent from "../components/Auth/AuthContent";
import Authentication from "../util/auth";
import LoadingOverlay from "../components/ui/LoadingOverlay";
import { useContext, useState } from "react";
import { Alert } from "react-native";
import { AuthContext } from "../store/auth-context";

function SignupScreen() {
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const { authenticate } = useContext(AuthContext);

  const signupHandler = async ({ email, password }) => {
    setIsAuthenticating(true);
    try {
      const token = await Authentication.createUser(email, password);

      authenticate(token);
    } catch (error) {
      Alert.alert(
        "Authentication failed",
        "Could not create user, please check your input and try again later"
      );

      setIsAuthenticating(false);
    }
  };

  if (isAuthenticating) {
    return <LoadingOverlay message="Creating user..." />;
  }

  return <AuthContent onAuthenticate={signupHandler} />;
}

export default SignupScreen;
