import React from "react";
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import DropShadow from "react-native-drop-shadow";
import LinearGradient from "react-native-linear-gradient";

import { BlurView } from "@react-native-community/blur";
import { useNavigation } from "@react-navigation/native";

import { SvgIcon } from "@app/components";
import { ThemeContext } from "@app/context/theme";

const Main = () => {
  const { colorScheme, colors, getHexOpacity, themes, fonts, insets } =
    React.useContext(ThemeContext);
  const [topHeight, setTopHeight] = React.useState([0, 0]);
  const [page, setPage] = React.useState(0);
  const [selectedCategory, setSelectedCategory] = React.useState("all");

  const navigation = useNavigation();

  const categories = {
    all: {
      name: "전체",
      icon: "All",
    },
    activity: {
      name: "활동",
      icon: "Activity",
    },
    social: {
      name: "사회",
      icon: "Social",
    },
    health: {
      name: "건강",
      icon: "Health",
    },
  };

  const items = [
    {
      title: "음악 디깅하기",
      desc: "스트리밍 앱으로 디깅 후, 음반샵 가기",
      categories: ["activity", "health"],
      detail: "JPEGMAFIA, 조깅 등",
      background: require("@app/res/images/shop.png"),
    },
    {
      title: "Flutter 강의 보기",
      desc: "조현우 님의 능력치를 분석했어요",
      categories: ["activity"],
      detail: "Container, Scaffold 등",
      background: require("@app/res/images/coding.png"),
    },
    {
      title: "마음의 병 상담",
      desc: "조현우님의 마음을 분석한 해법이에요",
      categories: ["social"],
      detail: "사회복지, 우울증 등",
      background: require("@app/res/images/talk.png"),
    },
    {
      title: "집 앞 스타벅스까지 한바퀴 걷기",
      desc: "조현우님의 건강 상태를 분석했어요",
      categories: ["health"],
      detail: "조깅, 유산소",
      background: require("@app/res/images/starbucks.png"),
    },
    {
      title: "디자인 외주하기",
      desc: "조현우님의 능력치를 분석한 용돈벌이에요",
      categories: ["social"],
      detail: "Figma, Adobe Xd",
      background: require("@app/res/images/design.png"),
    },
  ];

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
      padding: 10,
      margin: -10,
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
      alignItems: "center",
      justifyContent: "center",
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
      overflow: "hidden",
    },
    continue: {
      gap: 8,
    },
    continueTitle: {
      ...fonts.sectionTitle,
      color: colors.g500,
    },
    continueTarget: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
    },
    continueTargetText: {
      ...fonts.big,
      color: colors.g900,
    },
    search: {
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: colors.search,
      borderWidth: 1,
      borderColor: colors.g300,
      borderRadius: 12,
      paddingLeft: 16,
    },
    searchInput: {
      flex: 1,
      ...fonts.decorativeDesc,
      color: colors.g500,
      paddingVertical: 12,
      paddingHorizontal: 12,
    },
    categories: {
      marginHorizontal: -20,
    },
    categoriesInner: {
      flexDirection: "row",
      gap: 12,
      paddingHorizontal: 20,
    },
    category: {
      flexDirection: "row",
      alignItems: "center",
      gap: 10,
      paddingVertical: 10,
      paddingHorizontal: 16,
      borderWidth: 1,
      borderColor: colors.g300,
      borderRadius: 32,
    },
    categorySelected: {
      backgroundColor: colors.active,
      borderColor: colors.active,
    },
    categoryText: {
      ...fonts.itemTitle,
      color: colors.g600,
    },
    categoryTextSelected: {
      color: colors.g100,
    },
    background: {
      height: topHeight[page],
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
    content: {
      padding: 16,
      paddingBottom: insets.bottom + 16,
      gap: 16,
    },
    item: {
      padding: 20,
      borderWidth: 1,
      borderColor: colors.g300,
      borderRadius: 16,
      overflow: "hidden",
    },
    itemInner: {
      gap: 24,
    },
    itemTop: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
    },
    itemText: {
      gap: 4,
    },
    itemTitle: {
      ...fonts.sectionTitle,
      color: colors.g900,
    },
    itemDesc: {
      ...fonts.sectionDesc,
      color: colors.g600,
    },
    itemInfo: {
      flexDirection: "row",
      alignItems: "center",
      gap: 12,
    },
    itemCategory: {
      flexDirection: "row",
      alignItems: "center",
      gap: 8,
    },
    itemCategoryText: {
      ...fonts.itemTitle,
      color: colors.g500,
    },
    itemDetail: {
      ...fonts.itemDesc,
      color: colors.g500,
    },
    itemBackground: {
      position: "absolute",
      zIndex: -1,
      top: 0,
      left: "50%",
      right: 0,
      bottom: 0,
    },
    itemBackgroundImage: {
      flex: 1,
      opacity: 0.16,
    },
  });

  return (
    <View style={styles.container}>
      <View
        style={styles.over}
        onLayout={(event) => {
          const { height } = event.nativeEvent.layout;
          if (page === 0) {
            setTopHeight((pre) => [height, pre[1]]);
          } else {
            setTopHeight((pre) => [pre[0], height]);
          }
        }}>
        <View style={styles.overInner}>
          <View style={styles.header}>
            <View style={styles.headerMenus}>
              <TouchableOpacity
                style={styles.headerMenu}
                onPress={() => {
                  setPage(0);
                }}>
                {page === 0 && (
                  <SvgIcon name="HeaderStunSvg" fill={colors.g1000} />
                )}
                <Text
                  style={
                    page === 0
                      ? styles.headerMenuTextActive
                      : styles.headerMenuText
                  }>
                  STUN
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.headerMenu}
                onPress={() => {
                  setPage(1);
                }}>
                {page === 1 && (
                  <SvgIcon name="HeaderUpSvg" fill={colors.g1000} />
                )}
                <Text
                  style={
                    page === 1
                      ? styles.headerMenuTextActive
                      : styles.headerMenuText
                  }>
                  UP
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.headerMenus}>
              <DropShadow style={themes.shadow}>
                <View style={styles.headerQuestion}>
                  <SvgIcon name="HeaderMenuQuestionSvg" fill={colors.g600} />
                  <BlurView
                    style={styles.blur}
                    blurType={colorScheme}
                    blurAmount={40}
                  />
                </View>
              </DropShadow>
              <TouchableOpacity
                style={styles.headerProfile}
                onPress={() => {
                  navigation.navigate("Profile");
                }}>
                <ImageBackground
                  style={styles.backgroundImage}
                  source={require("@app/res/images/profile.png")}
                  resizeMode="cover"
                />
              </TouchableOpacity>
            </View>
          </View>
          <TouchableOpacity style={styles.continue} disabled={page}>
            <Text style={styles.continueTitle}>
              {page ? "아이템 빌딩 현황 - Step 2" : "계속 활동"}
            </Text>
            <View style={styles.continueTarget}>
              <Text style={styles.continueTargetText}>
                {page ? "아이템 구체화" : "음악 디깅하기"}
              </Text>
              {page === 0 && <SvgIcon name="ArrowSvg" fill={colors.g600} />}
            </View>
          </TouchableOpacity>
          {page === 1 && (
            <SvgIcon
              name="StageSvg"
              fill={colors.g1000}
              style={{
                marginTop: -8,
              }}
            />
          )}
          <View style={styles.search}>
            <SvgIcon name="SearchSvg" fill={colors.g500} />
            <TextInput
              style={styles.searchInput}
              placeholder={
                page
                  ? "투자 프로그램, 진흥원 프로그램 명으로 검색"
                  : "활동명, 설명 등으로 검색"
              }
              placeholderTextColor={colors.g500}
            />
          </View>
          {page === 0 && (
            <ScrollView
              style={styles.categories}
              horizontal
              showsHorizontalScrollIndicator={false}>
              <View style={styles.categoriesInner}>
                {Object.keys(categories).map((category) => (
                  <TouchableOpacity
                    style={[
                      styles.category,
                      category === selectedCategory && styles.categorySelected,
                    ]}
                    key={category}
                    onPress={() => {
                      setSelectedCategory(category);
                    }}>
                    <SvgIcon
                      name={`Category${categories[category].icon}Svg`}
                      fill={
                        category === selectedCategory
                          ? colors.g100
                          : colors.g600
                      }
                    />
                    <Text
                      style={[
                        styles.categoryText,
                        category === selectedCategory &&
                          styles.categoryTextSelected,
                      ]}>
                      {categories[category].name}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            </ScrollView>
          )}
        </View>
        <BlurView style={styles.blur} blurType={colorScheme} blurAmount={40} />
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
        {page === 0 ? (
          <View style={styles.content}>
            {items.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={{
                  display:
                    selectedCategory === "all" ||
                    item.categories.includes(selectedCategory)
                      ? "flex"
                      : "none",
                }}>
                <View style={styles.item}>
                  <View style={styles.itemInner}>
                    <View style={styles.itemTop}>
                      <View style={styles.itemText}>
                        <Text style={styles.itemTitle}>{item.title}</Text>
                        <Text style={styles.itemDesc}>{item.desc}</Text>
                      </View>
                      <SvgIcon name="DetailSvg" fill={colors.g600} />
                    </View>
                    <View style={styles.itemInfo}>
                      {item.categories.map((category, categoryIndex) => (
                        <View style={styles.itemCategory} key={categoryIndex}>
                          <SvgIcon
                            name={`Category${categories[category].icon}Svg`}
                            fill={colors.g500}
                          />
                          <Text style={styles.itemCategoryText}>
                            {categories[category].name}
                          </Text>
                        </View>
                      ))}
                      <Text style={styles.itemDetail}>{item.detail}</Text>
                    </View>
                  </View>
                  <View style={styles.itemBackground}>
                    <LinearGradient
                      style={styles.backgroundGradient}
                      start={{ x: 1, y: 0 }}
                      end={{ x: 0, y: 0 }}
                      colors={[
                        getHexOpacity(colors.g100, 0),
                        getHexOpacity(colors.g100, 100),
                      ]}
                    />
                    <ImageBackground
                      style={styles.itemBackgroundImage}
                      source={item.background}
                      resizeMode="cover"
                    />
                  </View>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        ) : null}
      </ScrollView>
    </View>
  );
};

export default Main;
