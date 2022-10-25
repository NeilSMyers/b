import { View, StyleSheet } from "react-native";

import useTheme from "../hooks/useTheme";

const Poof = ({ children }: any) => {
  const { colors } = useTheme();

  return (
    <View
      style={{
        backgroundColor: colors.background,
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingVertical: 15,
        marginHorizontal: 20,
        marginVertical: 5,
      }}
    >
      {children}
    </View>
  );
};

export default Poof;
