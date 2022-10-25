import { ScrollView } from "react-native";

import Screen from "../components/Screen";
import Button from "../components/Button";

import useTheme from "../hooks/useTheme";
import useGlob from "../hooks/useGlob";

const Profile = ({navigation}:any) => {
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
        <Button
          title="Crazy On Top Screen"
          onPress={() => navigation.navigate('OnTopYo')}
        />
      </ScrollView>
    </Screen>
  );
};

export default Profile;
