import { View, ScrollView } from "react-native";

import Screen from "../components/Screen";
import Inset from "../components/Inset";
import Row from "../components/Row";
import Text from "../components/Text";
import Spacer from "../components/Spacer";

import useTheme from "../hooks/useTheme";
import useGlob from "../hooks/useGlob";

const Home = () => {
  const { colors } = useTheme();

  const { state } = useGlob();

  return (
    <Screen>
      <ScrollView>
        <Inset background={colors.backgroundTwo}>
          <Text color={colors.textTwo} size="l" bold>
            Welcome to Breeze Airways
          </Text>
          <Text color={colors.main} size="l" bold>
            {state.user.name}!
          </Text>
          <Spacer />
          <Row space="between">
            <Text color={colors.main} size="xs" bold>
              BREEZEPOINTS AVAILABLE
            </Text>
            <Text color={colors.textTwo} size="xl">
              $0.00
            </Text>
          </Row>
          <Spacer size="xl" />
          <Text color={colors.textTwo}>
            BreezePoints are travel credits that are earned through the purchase
            of air travel and other products, such as checked baggage.
          </Text>
          <Spacer />
          <Text
            color={colors.textTwo}
            bold
            style={{ textDecorationLine: "underline" }}
          >
            GET MORE INFO ABOUT BREEZEPOINTS
          </Text>
          <Spacer size="xl" />
        </Inset>
        <Spacer />
        <View
          style={{
            padding: 20,
            backgroundColor: colors.main,
          }}
        >
          <Text color={colors.textTwo} size="xs" bold>
            BREEZE NEWS TO KNOW
          </Text>
          <Spacer size="l" />
          <Text color={colors.textTwo} size="l" bold>
            Go where Breeze takes you.
          </Text>
          <Text color={colors.textTwo}>
            Visit the "Destinations" tab at flybreeze.com to see where you can
            go with Breeze.
          </Text>
          <Spacer size="m" />
          <View style={{ height: 1, backgroundColor: colors.textTwo }} />
          <Spacer size="l" />
          <Text color={colors.textTwo} size="l" bold>
            Already booked a flight?
          </Text>
          <Text color={colors.textTwo}>
            Log in to manage your flight details.
          </Text>
          <Spacer size="m" />
          <View style={{ height: 1, backgroundColor: colors.textTwo }} />
          <Spacer size="l" />
          <Text color={colors.textTwo} size="l" bold>
            Ready to fly?
          </Text>
          <Text color={colors.textTwo}>
            Check in via the app to get your mobile boarding pass and bypass the
            lines.
          </Text>
          <Spacer size="m" />
          <View style={{ height: 1, backgroundColor: colors.textTwo }} />
          <Spacer size="l" />
          <Text color={colors.textTwo} size="l" bold>
            Did you know?
          </Text>
          <Text color={colors.textTwo}>
            You can easily add family and friends to your account by linking
            their Guest account number to your profile.
          </Text>
          <Spacer size="m" />
        </View>
        <Spacer />
        <Text size="xs" bold style={{ textAlign: "center" }}>
          BREEZE DOES IT BETTER
        </Text>
        <Text size="l" bold style={{ textAlign: "center" }}>
          Our Perks
        </Text>
        <Spacer size="xl" />
        <Text size="l" bold style={{ textAlign: "center" }}>
          Straight to the point.
        </Text>
        <Text size="l" style={{ textAlign: "center" }}>
          Our point-to-point network means no connections for an easier, quicer
          and nicer journey.
        </Text>
        <Spacer />
      </ScrollView>
    </Screen>
  );
};

export default Home;
