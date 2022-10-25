import { View, ScrollView } from "react-native";

import Screen from "../components/Screen";
import Inset from "../components/Inset";
import Row from "../components/Row";
import Text from "../components/Text";
import Spacer from "../components/Spacer";
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
          title="Change name to Bitch"
          onPress={() =>
            dispatch({ type: "updateUser", payload: { name: "Bitch" } })
          }
        />
      </ScrollView>
    </Screen>
  );
};

export default Profile;
