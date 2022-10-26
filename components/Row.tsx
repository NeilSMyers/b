import { View } from "react-native";

type Props = {
  space?: "between" | "around" | "evenly";
  children: any;
  style?: any;
};

const Row: React.FC<Props> = ({ space, children, style }) => {
  return (
    <View
      style={[
        {
          flexDirection: "row",
          justifyContent: `space-${space}` || "flex-start",
          alignItems: "center",
          flex: 1,
        },
        style,
      ]}
    >
      {children}
    </View>
  );
};

export default Row;
