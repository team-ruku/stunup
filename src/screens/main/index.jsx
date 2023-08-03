import React from "react";
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  TextInput,
  ImageBackground,
} from "react-native";
import DropShadow from "react-native-drop-shadow";
import LinearGradient from "react-native-linear-gradient";

import { BlurView } from "@react-native-community/blur";

import { ThemeContext } from "@app/context/theme";

const Main = () => {
  const { colors, getHexOpacity, themes, fonts, insets } =
    React.useContext(ThemeContext);
  const [topHeight, setTopHeight] = React.useState(0);

  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    over: {
      position: "absolute",
      zIndex: 1,
      top: 0,
      left: 0,
      right: 0,
      paddingTop: insets.top + 12,
      paddingBottom: 16,
      paddingHorizontal: 20,
    },
    overInner: {
      gap: 32,
    },
    blur: {
      position: "absolute",
      zIndex: -1,
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: colors.bg,
    },
    header: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
    },
    headerMenus: {
      flexDirection: "row",
      alignItems: "center",
      gap: 20,
    },
    headerMenu: {
      flexDirection: "row",
      alignItems: "center",
      gap: 12,
    },
    headerMenuText: {
      ...fonts.decorative,
      color: colors.g600,
    },
    headerMenuTextActive: {
      ...fonts.pageTitle,
      color: colors.g1000,
    },
    headerQuestion: {
      width: 40,
      height: 40,
      borderRadius: 20,
      overflow: "hidden",
    },
    headerProfile: {
      width: 40,
      height: 40,
      borderRadius: 20,
      backgroundColor: colors.g300,
    },
    continue: {
      gap: 8,
    },
    continueTitle: {
      ...fonts.sectionTitle,
      color: colors.g500,
    },
    continueTargetText: {
      ...fonts.big,
      color: colors.g900,
    },
    search: {
      ...fonts.decorativeDesc,
      color: colors.g500,
      backgroundColor: colors.search,
      paddingVertical: 12,
      paddingHorizontal: 16,
      borderWidth: 1,
      borderColor: colors.g300,
      borderRadius: 12,
    },
    categories: {
      flexDirection: "row",
      gap: 12,
    },
    category: {
      paddingVertical: 10,
      paddingHorizontal: 16,
      gap: 10,
      borderWidth: 1,
      borderColor: colors.g300,
      borderRadius: 32,
    },
    categoryText: {
      ...fonts.itemTitle,
      color: colors.g600,
    },
    background: {
      height: topHeight,
    },
    backgroundImage: {
      flex: 1,
      opacity: 0.7,
    },
    backgroundGradient: {
      position: "absolute",
      zIndex: 1,
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
    },
    content: {},
  });

  return (
    <View style={styles.container}>
      <View
        style={styles.over}
        onLayout={(event) => {
          const { height } = event.nativeEvent.layout;
          setTopHeight(height);
        }}>
        <View style={styles.overInner}>
          <View style={styles.header}>
            <View style={styles.headerMenus}>
              <View style={styles.headerMenu}>
                <Text style={styles.headerMenuTextActive}>STUN</Text>
              </View>
              <View style={styles.headerMenu}>
                <Text style={styles.headerMenuText}>UP</Text>
              </View>
            </View>
            <View style={styles.headerMenus}>
              <DropShadow style={themes.shadow}>
                <View style={styles.headerQuestion}>
                  <BlurView
                    style={styles.blur}
                    blurType="regular"
                    blurAmount={40}
                  />
                </View>
              </DropShadow>
              <View style={styles.headerProfile} />
            </View>
          </View>
          <View style={styles.continue}>
            <Text style={styles.continueTitle}>계속 활동</Text>
            <Text style={styles.continueTargetText}>음악 디깅하기</Text>
          </View>
          <TextInput
            style={styles.search}
            placeholder="활동명, 설명 등으로 검색"
          />
          <View style={styles.categories}>
            <View style={styles.category}>
              <Text style={styles.categoryText}>전체</Text>
            </View>
          </View>
        </View>
        <BlurView style={styles.blur} blurType="regular" blurAmount={40} />
      </View>
      <ScrollView style={styles.scroll}>
        <View style={styles.background}>
          <LinearGradient
            style={styles.backgroundGradient}
            colors={[
              getHexOpacity(colors.g100, 0),
              getHexOpacity(colors.g100, 100),
            ]}
          />
          <ImageBackground
            style={styles.backgroundImage}
            source={require("@app/res/images/background.png")}
            resizeMode="cover"
          />
        </View>
        <View style={styles.content} />
      </ScrollView>
    </View>
  );
};

export default Main;
