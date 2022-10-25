import { useState } from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import Modal from "react-native-modal";

import Screen from "../components/Screen";
import Inset from "../components/Inset";
import Row from "../components/Row";
import Text from "../components/Text";
import Spacer from "../components/Spacer";
import Button from "../components/Button";
import Poof from "../components/Poof";
import Touch from "../components/Touch";

import useTheme from "../hooks/useTheme";
import useGlob from "../hooks/useGlob";

const SelectModal = ({ vis, close, ...props }: any): any => {
  return (
    <Modal
      isVisible={vis}
      onBackdropPress={close}
      animationIn="slideInUp"
      animationOut="slideOutDown"
      style={{ justifyContent: "flex-end", margin: 0 }}
      backdropTransitionOutTiming={0}
    >
      <View
        style={{ width: "100%", backgroundColor: "white", paddingBottom: 20 }}
      >
        {props.children}
      </View>
    </Modal>
  );
};

const Bubble = () => {
  const { colors } = useTheme();

  return (
    <View
      style={{
        height: 20,
        width: 20,
        borderRadius: 20,
        backgroundColor: "rgba(43, 125, 225, 0.2)",
        justifyContent: "center",
        alignItems: "center",
        marginRight: 10,
      }}
    >
      <View
        style={{
          height: 8,
          width: 8,
          borderRadius: 10,
          backgroundColor: colors.main,
        }}
      />
    </View>
  );
};

const Home = () => {
  const { colors } = useTheme();

  const { dispatch } = useGlob();

  const [from, setFrom] = useState("Select");
  const [to, setTo] = useState("Select");

  const [fromSelect, setFromSelect] = useState(false);
  const [toSelect, setToSelect] = useState(false);

  return (
    <Screen background="#e0e5ef">
      <ScrollView>
        <Inset background={colors.backgroundTwo}>
          <Text size="xl" bold color={colors.textTwo}>
            I'm like a bird...
          </Text>
        </Inset>
        <Spacer size="m" />
        <Poof>
          <Row>
            <View
              style={{
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <View
                style={{
                  width: StyleSheet.hairlineWidth,
                  backgroundColor: colors.main,
                }}
              />

              <View
                style={{
                  width: StyleSheet.hairlineWidth,
                  backgroundColor: colors.main,
                }}
              />
            </View>
            <View style={{ flex: 1 }}>
              <Touch onPress={() => setFromSelect(true)}>
                <Row>
                  <Bubble />
                  <Text size="l" color={colors.main} bold style={{ flex: 0.4 }}>
                    From
                  </Text>
                  <View style={{ flex: 1 }}>
                    <Text size="l" bold>
                      {from}
                    </Text>
                    <Spacer size="xs" />
                    <Text color={colors.main}>Origin</Text>
                  </View>
                </Row>
              </Touch>
              <Spacer />
              <Row>
                <Ionicons
                  name="airplane-sharp"
                  size={20}
                  color={colors.main}
                  style={{ transform: [{ rotate: "90deg" }] }}
                />
                <Spacer />
                <View
                  style={{
                    height: StyleSheet.hairlineWidth,
                    flex: 1,
                    backgroundColor: colors.main,
                  }}
                />
              </Row>
              <Spacer />
              <Touch onPress={() => setToSelect(true)}>
                <Row>
                  <Bubble />
                  <Text size="l" color={colors.main} bold style={{ flex: 0.4 }}>
                    To
                  </Text>
                  <View style={{ flex: 1 }}>
                    <Text size="l" bold>
                      {to}
                    </Text>
                    <Spacer size="xs" />
                    <Text color={colors.main}>Destination</Text>
                  </View>
                </Row>
              </Touch>
            </View>
            <View
              style={{
                alignItems: "center",
                marginLeft: 10,
                justifyContent: "space-between",
                height: 120,
              }}
            >
              <Ionicons
                name="close-circle-outline"
                color={colors.main}
                size={30}
                backgroundColor="transparent"
                onPress={() => setFrom("Select")}
              />
              <Ionicons
                name="swap-vertical-outline"
                color={colors.main}
                size={25}
                backgroundColor="transparent"
                onPress={() => {
                  setFrom(to);
                  setTo(from);
                }}
              />
              <Ionicons
                name="close-circle-outline"
                color={colors.main}
                size={30}
                backgroundColor="transparent"
                onPress={() => setTo("Select")}
              />
            </View>
          </Row>
        </Poof>
        <Button
          title="UP"
          onPress={() => dispatch({ type: "increment", payload: 1 })}
        />
        <Button
          title="DOWN"
          onPress={() => dispatch({ type: "increment", payload: -1 })}
        />
      </ScrollView>

      <SelectModal vis={fromSelect} close={() => setFromSelect(false)}>
        {[
          "Provo",
          "Salt Lake City",
          "Las Vegas",
          "New York City",
          "Los Angeles",
        ].map((city) => (
          <Touch
            onPress={() => {
              setFrom(city);
              setFromSelect(false);
            }}
            style={{ padding: 10 }}
          >
            <Text size="xl">{city}</Text>
          </Touch>
        ))}
      </SelectModal>
      <SelectModal vis={toSelect} close={() => setToSelect(false)}>
        {[
          "Provo",
          "Salt Lake City",
          "Las Vegas",
          "New York City",
          "Los Angeles",
        ].map((city) => (
          <Touch
            onPress={() => {
              setTo(city);
              setToSelect(false);
            }}
            style={{ padding: 10 }}
          >
            <Text size="xl">{city}</Text>
          </Touch>
        ))}
      </SelectModal>
    </Screen>
  );
};

export default Home;
