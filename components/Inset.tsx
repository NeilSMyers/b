import { View } from "react-native";

type Props = {
  v?: number;
  h?: number;
  background?: string;
  children: any;
  style?: any;
};

const Inset: React.FC<Props> = ({
  v = 20,
  h = 20,
  background,
  children,
  style,
}) => {
  return (
    <View
      style={[
        {
          paddingVertical: v,
          paddingHorizontal: h,
          backgroundColor: background || "transparent",
        },
        style,
      ]}
    >
      {children}
    </View>
  );
};

export default Inset;
