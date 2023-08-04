import React from "react";
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  Image,
} from "react-native";
import FadeIn from "react-native-fade-in-image";

import { useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { SvgIcon } from "@app/components";
import { ThemeContext } from "@app/context/theme";

const Stack = createStackNavigator();
const OnBoarding = () => {
  return (
    <Stack.Navigator
      initialRouteName="Welcome"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Welcome" component={Welcome} />
    </Stack.Navigator>
  );
};

const Welcome = () => {
  const { colorScheme, colors, getHexOpacity, themes, fonts, insets } =
    React.useContext(ThemeContext);

  const width = Dimensions.get("window").width;
  const navigation = useNavigation();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: insets.top,
      paddingBottom: insets.bottom,
    },
    header: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      paddingVertical: 24,
      paddingHorizontal: 20,
    },
    language: {
      flexDirection: "row",
      alignItems: "center",
      paddingVertical: 4,
      paddingHorizontal: 8,
      gap: 4,
      borderWidth: 1,
      borderColor: colors.g400,
      borderRadius: 100,
    },
    languageText: {
      ...fonts.itemDesc,
      color: colors.g600,
    },
    content: {
      flex: 1,
    },
    bottom: {
      paddingVertical: 20,
      paddingHorizontal: 16,
      gap: 16,
    },
    button: {
      alignItems: "center",
      backgroundColor: colors.g1000,
      padding: 16,
      borderRadius: 100,
    },
    buttonText: {
      fontFamily: "SUIT-Medium",
      fontSize: 14,
      color: colors.g100,
    },
    login: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      gap: 4,
    },
    loginText: {
      ...fonts.itemDesc,
      color: colors.g600,
    },
    loginLink: {
      fontFamily: "SUIT-SemiBold",
      fontSize: 14,
      lineHeight: 18,
      color: colors.g900,
      textDecorationStyle: "solid",
      textDecorationLine: "underline",
      textDecorationColor: colors.g900,
    },
    page: {
      width: width,
      alignItems: "center",
      justifyContent: "center",
      gap: 20,
    },
    text: {
      alignItems: "center",
      gap: 12,
      padding: 8,
    },
    title: {
      ...fonts.pageTitle,
      color: colors.g1000,
    },
    desc: {
      ...fonts.decorativeDesc,
      color: colors.g700,
    },
    image: {
      width: 300,
      height: 280,
    },
    indicator: {
      flexDirection: "row",
      gap: 8,
    },
    dash: {
      width: 6,
      height: 6,
      borderRadius: 3,
      backgroundColor: colors.g400,
    },
    dashFill: {
      width: 6,
      height: 6,
      borderRadius: 3,
      backgroundColor: colors.g900,
    },
  });

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <SvgIcon name="LogoSvg" />
        <View style={styles.language}>
          <SvgIcon name="LanguageSvg" fill={colors.g600} />
          <Text style={styles.languageText}>한국어</Text>
        </View>
      </View>
      <View style={styles.content}>
        <ScrollView
          horizontal
          decelerationRate={0}
          snapToInterval={width}
          snapToAlignment={"center"}
          showsHorizontalScrollIndicator={false}>
          <View style={styles.page}>
            <FadeIn>
              <Image
                style={styles.image}
                source={require("@app/res/images/on1.png")}
                resizeMode="contain"
                fadeDuration={500}
              />
            </FadeIn>
            <View style={styles.text}>
              <Text style={styles.title}>여러분도, 한 발짝 나아가세요!</Text>
              <Text style={styles.desc}>
                STUNUP을 통해 지금보다 더 앞으로 나아가보세요!
              </Text>
            </View>
            <View style={styles.indicator}>
              <View style={styles.dashFill} />
              <View style={styles.dash} />
              <View style={styles.dash} />
            </View>
          </View>
          <View style={styles.page}>
            <FadeIn>
              <Image
                style={styles.image}
                source={require("@app/res/images/on2.png")}
                resizeMode="contain"
                fadeDuration={500}
              />
            </FadeIn>
            <View style={styles.text}>
              <Text style={styles.title}>하고 싶은 것들을 찾아나가세요!</Text>
              <Text style={styles.desc}>
                STUNUP은 자동으로 여러분의 활동을 찾아줍니다!
              </Text>
            </View>
            <View style={styles.indicator}>
              <View style={styles.dash} />
              <View style={styles.dashFill} />
              <View style={styles.dash} />
            </View>
          </View>
          <View style={styles.page}>
            <FadeIn>
              <Image
                style={styles.image}
                source={require("@app/res/images/on3.png")}
                resizeMode="contain"
                fadeDuration={500}
              />
            </FadeIn>
            <View style={styles.text}>
              <Text style={styles.title}>사회에 다가가보세요!</Text>
              <Text style={styles.desc}>
                STUNUP은 여러분의 사회 진출을 돕겠습니다!
              </Text>
            </View>
            <View style={styles.indicator}>
              <View style={styles.dash} />
              <View style={styles.dash} />
              <View style={styles.dashFill} />
            </View>
          </View>
        </ScrollView>
      </View>
      <View style={styles.bottom}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>가입하기</Text>
        </TouchableOpacity>
        <View style={styles.login}>
          <Text style={styles.loginText}>이미 계정이 있으신가요?</Text>
          <TouchableOpacity>
            <Text style={styles.loginLink}>로그인하기</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default OnBoarding;
