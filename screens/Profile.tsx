import { ScrollView } from "react-native";

import Screen from "../components/Screen";
import Button from "../components/Button";

import useTheme from "../hooks/useTheme";
import useGlob from "../hooks/useGlob";

const Profile = () => {
  const { colors } = useTheme();

  const { dispatch } = useGlob();

  return (
    <Screen>
      <ScrollView>
        <Button
          title="Change name"
          onPress={() =>
            dispatch({ type: "updateUser", payload: { name: "Bitch" } })
          }
        />
      </ScrollView>
    </Screen>
  );
};

export default Profile;
