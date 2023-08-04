import React from "react";
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  Image,
  TextInput,
  Animated,
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
      <Stack.Screen name="Editor" component={Editor} />
      <Stack.Screen name="Loading" component={Loading} />
      <Stack.Screen name="Done" component={Done} />
    </Stack.Navigator>
  );
};

const Welcome = () => {
  const { colors, fonts, insets } = React.useContext(ThemeContext);

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
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.navigate("Editor");
          }}>
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

const Editor = () => {
  const { colorScheme, colors, getHexOpacity, themes, fonts, insets } =
    React.useContext(ThemeContext);

  const navigation = useNavigation();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: insets.top,
      paddingBottom: insets.bottom,
    },
    over: {
      padding: 20,
      gap: 24,
    },
    header: {
      height: 48,
      alignItems: "flex-start",
      justifyContent: "center",
    },
    back: {
      transform: [{ rotate: "180deg" }],
      padding: 16,
      margin: -16,
    },
    text: {
      gap: 8,
    },
    title: {
      ...fonts.big,
      color: colors.g900,
    },
    desc: {
      ...fonts.sectionTitle,
      color: colors.g500,
    },
    introducing: {
      ...fonts.paragraph,
      color: colors.g700,
    },
    content: {
      flex: 1,
      paddingVertical: 20,
      paddingHorizontal: 16,
    },
    input: {
      flex: 1,
      backgroundColor: colors.search,
      borderWidth: 1,
      borderColor: colors.g300,
      borderRadius: 12,
      paddingVertical: 12,
      paddingHorizontal: 16,
      paddingTop: 12,
    },
    bottom: {
      paddingVertical: 20,
      paddingHorizontal: 16,
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
  });

  return (
    <View style={styles.container}>
      <View style={styles.over}>
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.back}
            onPress={() => {
              navigation.goBack();
            }}>
            <SvgIcon name="ArrowSvg" fill={colors.g600} />
          </TouchableOpacity>
        </View>
        <View style={styles.text}>
          <Text style={styles.desc}>기초 설정</Text>
          <Text style={styles.title}>자유 글 입력</Text>
        </View>
        <Text style={styles.introducing}>
          여러분을 분석하기 위해 자유로운 형태로 글을 써주셔야 합니다. 글에는
          여러분이 잘하는 것, 좋아하는 것, 취미 생활이나 여러분의 건강 상태,
          인간관계 및 사회 생활을 위주로 적어주세요.
        </Text>
      </View>
      <View style={styles.content}>
        <TextInput
          style={styles.input}
          multiline={true}
          placeholder="여기에 글을 적어주세요"
          placeholderTextColor={colors.g500}
          blurOnSubmit
        />
      </View>
      <View style={styles.bottom}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.reset({
              index: 0,
              routes: [{ name: "Loading" }],
            });
          }}>
          <Text style={styles.buttonText}>제출하기</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const Loading = () => {
  const { colors, fonts, insets } = React.useContext(ThemeContext);

  const navigation = useNavigation();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: insets.top,
      paddingBottom: insets.bottom,
      alignItems: "center",
      justifyContent: "center",
      gap: 36,
      padding: 20,
    },
    title: {
      ...fonts.big,
      color: colors.g900,
    },
    loading: {
      alignSelf: "stretch",
      height: 6,
      borderRadius: 3,
      overflow: "hidden",
      backgroundColor: colors.g300,
      alignItems: "flex-start",
    },
    loadingFill: {
      height: 6,
      borderRadius: 3,
      backgroundColor: colors.active,
      width: "50%",
    },
  });

  const width = React.useRef(new Animated.Value(0)).current;
  React.useEffect(() => {
    Animated.timing(width, {
      toValue: 1,
      duration: 3000,
      useNativeDriver: false,
    }).start(() => {
      navigation.reset({
        index: 0,
        routes: [{ name: "Done" }],
      });
    });
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>분석 중...</Text>
      <View style={styles.loading}>
        <Animated.View
          style={[
            styles.loadingFill,
            {
              width: width.interpolate({
                inputRange: [0, 1],
                outputRange: ["0%", "100%"],
              }),
            },
          ]}
        />
      </View>
    </View>
  );
};

const Done = () => {
  const { colors, fonts, insets } = React.useContext(ThemeContext);

  const navigation = useNavigation();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: insets.top,
      paddingBottom: insets.bottom,
    },
    over: {
      padding: 20,
      gap: 24,
    },
    header: {
      height: 48,
      alignItems: "flex-start",
      justifyContent: "center",
    },
    back: {
      transform: [{ rotate: "180deg" }],
      padding: 16,
      margin: -16,
    },
    text: {
      gap: 8,
    },
    title: {
      ...fonts.big,
      color: colors.g900,
    },
    desc: {
      ...fonts.sectionTitle,
      color: colors.g500,
    },
    introducing: {
      ...fonts.paragraph,
      color: colors.g700,
    },
    content: {
      flex: 1,
      paddingVertical: 20,
      paddingHorizontal: 16,
    },
    input: {
      flex: 1,
      backgroundColor: colors.search,
      borderWidth: 1,
      borderColor: colors.g300,
      borderRadius: 12,
      paddingVertical: 12,
      paddingHorizontal: 16,
      paddingTop: 12,
    },
    bottom: {
      paddingVertical: 20,
      paddingHorizontal: 16,
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
  });

  return (
    <View style={styles.container}>
      <View style={styles.over}>
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.back}
            onPress={() => {
              navigation.goBack();
            }}>
            <SvgIcon name="ArrowSvg" fill={colors.g600} />
          </TouchableOpacity>
        </View>
        <View style={styles.text}>
          <Text style={styles.desc}>글 분석</Text>
          <Text style={styles.title}>분석을 완료했어요!</Text>
        </View>
        <Text style={styles.introducing}>이제 STUNUP으로 출발해볼까요?</Text>
      </View>
      <View style={styles.content} />
      <View style={styles.bottom}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.reset({
              index: 0,
              routes: [{ name: "Main" }],
            });
          }}>
          <Text style={styles.buttonText}>출발하기</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default OnBoarding;
