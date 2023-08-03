import React from "react";
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
} from "react-native";

import { BlurView } from "@react-native-community/blur";
import { useNavigation } from "@react-navigation/native";

import { SvgIcon } from "@app/components";
import { ThemeContext } from "@app/context/theme";

const Profile = () => {
  const { colorScheme, colors, getHexOpacity, themes, fonts, insets } =
    React.useContext(ThemeContext);
  const [topHeight, setTopHeight] = React.useState(0);
  const [menu, setMenu] = React.useState(0);

  const navigation = useNavigation();

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
      padding: 20,
      paddingTop: insets.top + 20,
    },
    overInner: {
      gap: 24,
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
      height: 48,
      alignItems: "flex-start",
      justifyContent: "center",
    },
    back: {
      transform: [{ rotate: "180deg" }],
      padding: 16,
      margin: -16,
    },
    nav: {
      gap: 12,
    },
    navText: {
      ...fonts.sectionTitle,
      color: colors.g500,
    },
    menus: {
      flexDirection: "row",
      gap: 24,
    },
    menu: {
      ...fonts.big,
      color: colors.g600,
    },
    menuSelected: {
      color: colors.b900,
    },
    content: {
      marginTop: topHeight,
      padding: 16,
      paddingBottom: insets.bottom + 16,
      gap: 48,
    },
    item: {
      gap: 16,
    },
    itemHeader: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      paddingHorizontal: 4,
    },
    itemHeaderMix: {
      flexDirection: "row",
      alignItems: "center",
      gap: 8,
    },
    itemHeaderMixDivider: {
      width: 2,
      height: 2,
      borderRadius: 1,
      backgroundColor: colors.g400,
      marginHorizontal: -2,
    },
    itemTitle: {
      ...fonts.sectionTitle,
      color: colors.b900,
    },
    itemDesc: {
      ...fonts.sectionTitle,
      color: colors.active,
    },
    itemRefresh: {
      ...fonts.selection,
      color: colors.g600,
    },
    itemContent: {
      ...fonts.paragraph,
      color: colors.g700,
      paddingHorizontal: 4,
    },
    graph: {
      gap: 8,
    },
    graphStyles: {
      flexDirection: "row",
      gap: 16,
      paddingHorizontal: 4,
    },
    graphStyle: {
      flexDirection: "row",
      alignItems: "center",
      gap: 6,
    },
    graphStyleBar: {
      width: 16,
      height: 2,
      borderRadius: 1,
    },
    graphStyleText: {
      ...fonts.itemDesc,
      color: colors.g600,
    },
    graphBars: {
      flexDirection: "row",
      alignItems: "flex-end",
      gap: 6,
    },
    graphBar: {
      flex: 1,
      backgroundColor: colors.g300,
      borderRadius: 6,
      justifyContent: "flex-end",
      overflow: "hidden",
    },
    graphBarFill: {
      backgroundColor: colors.active,
      borderRadius: 6,
    },
    graphDates: {
      flexDirection: "row",
      justifyContent: "space-between",
      paddingHorizontal: 4,
    },
    graphDate: {
      ...fonts.itemDesc,
      color: colors.g600,
    },
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
            <TouchableOpacity
              style={styles.back}
              onPress={() => {
                navigation.goBack();
              }}>
              <SvgIcon name="ArrowSvg" fill={colors.g600} />
            </TouchableOpacity>
          </View>
          <View style={styles.nav}>
            <Text style={styles.navText}>내 프로필</Text>
            <View style={styles.menus}>
              <TouchableOpacity
                onPress={() => {
                  setMenu(0);
                }}>
                <Text style={[styles.menu, menu === 0 && styles.menuSelected]}>
                  분석
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setMenu(1);
                }}>
                <Text style={[styles.menu, menu === 1 && styles.menuSelected]}>
                  스택
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setMenu(2);
                }}>
                <Text style={[styles.menu, menu === 2 && styles.menuSelected]}>
                  정보
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <BlurView style={styles.blur} blurType={colorScheme} blurAmount={40} />
      </View>
      <ScrollView style={styles.scroll}>
        {menu === 0 && (
          <View style={styles.content}>
            <View style={styles.item}>
              <View style={styles.itemHeader}>
                <View style={styles.itemHeaderMix}>
                  <Text style={styles.itemTitle}>활동</Text>
                  <View style={styles.itemHeaderMixDivider} />
                  <Text style={styles.itemDesc}>힙스터 그 자체</Text>
                </View>
                <TouchableOpacity style={styles.itemHeaderMix}>
                  <SvgIcon name="RefreshSvg" fill={colors.g600} />
                  <Text style={styles.itemRefresh}>다시 검사하기</Text>
                </TouchableOpacity>
              </View>
              <Text style={styles.itemContent}>
                조현우님은 남들이 안하는 것들, 주로 힙스터라고 부르는 것들을
                좋아합니다. 이를 뒷받침하듯, 음악 취향도 대중들이 듣지 않는,
                ”익스페리멘탈”, “인더스트리얼 힙합" 등을 좋아합니다. 이러한 활동
                특성은 추후 UP 시에, 창의적인 발상을 할 때 큰 도움이 될 수
                있습니다.
              </Text>
            </View>
            <View style={styles.item}>
              <View style={styles.itemHeader}>
                <View style={styles.itemHeaderMix}>
                  <Text style={styles.itemTitle}>사회</Text>
                  <View style={styles.itemHeaderMixDivider} />
                  <Text style={styles.itemDesc}>내 사람만 잘해준다</Text>
                </View>
                <TouchableOpacity style={styles.itemHeaderMix}>
                  <SvgIcon name="RefreshSvg" fill={colors.g600} />
                  <Text style={styles.itemRefresh}>다시 검사하기</Text>
                </TouchableOpacity>
              </View>
              <Text style={styles.itemContent}>
                조현우님은 처음 보는 사람들은 경계하고 무서워하지만, 친해진
                사람들에게는 잘해주는, “내 사람만 잘해준다" 형입니다. 이미
                맺어진 인간관계를 유지하는 데에서는 문제 없지만, 새로운
                인간관계를 맺을 때 유의하셔야 합니다.
              </Text>
            </View>
            <View style={styles.item}>
              <View style={styles.itemHeader}>
                <View style={styles.itemHeaderMix}>
                  <Text style={styles.itemTitle}>건강</Text>
                  <View style={styles.itemHeaderMixDivider} />
                  <Text style={styles.itemDesc}>몸은 과로, 마음은 결핍</Text>
                </View>
                <TouchableOpacity style={styles.itemHeaderMix}>
                  <SvgIcon name="RefreshSvg" fill={colors.g600} />
                  <Text style={styles.itemRefresh}>다시 검사하기</Text>
                </TouchableOpacity>
              </View>
              <Text style={styles.itemContent}>
                조현우님은 반복된 일로 몸은 과로이고, 인간관계에서의 스트레스로
                마음은 결핍인 상태입니다. “활동" 기능을 적절히 사용하여
                스트레스를 풀고, 추천해주는 건강 기능들로 몸 속 과로를 풀어줄
                필요가 있습니다.
              </Text>
            </View>
          </View>
        )}
        {menu === 1 && (
          <View style={styles.content}>
            <View style={styles.item}>
              <View style={styles.itemHeader}>
                <View style={styles.itemHeaderMix}>
                  <Text style={styles.itemTitle}>활동</Text>
                </View>
              </View>
              <View style={styles.graph}>
                <View style={styles.graphStyles}>
                  <View style={styles.graphStyle}>
                    <View
                      style={[
                        styles.graphStyleBar,
                        {
                          backgroundColor: colors.g300,
                        },
                      ]}
                    />
                    <Text style={styles.graphStyleText}>평균</Text>
                  </View>
                  <View style={styles.graphStyle}>
                    <View
                      style={[
                        styles.graphStyleBar,
                        {
                          backgroundColor: colors.active,
                        },
                      ]}
                    />
                    <Text style={styles.graphStyleText}>나</Text>
                  </View>
                </View>
                <View style={styles.graphBars}>
                  <View
                    style={[
                      styles.graphBar,
                      {
                        height: 111,
                      },
                    ]}>
                    <View
                      style={[
                        styles.graphBarFill,
                        {
                          height: 72,
                        },
                      ]}
                    />
                  </View>
                  <View
                    style={[
                      styles.graphBar,
                      {
                        height: 122,
                      },
                    ]}>
                    <View
                      style={[
                        styles.graphBarFill,
                        {
                          height: 93,
                        },
                      ]}
                    />
                  </View>
                  <View
                    style={[
                      styles.graphBar,
                      {
                        height: 105,
                      },
                    ]}>
                    <View
                      style={[
                        styles.graphBarFill,
                        {
                          height: 115,
                        },
                      ]}
                    />
                  </View>
                  <View
                    style={[
                      styles.graphBar,
                      {
                        height: 159,
                      },
                    ]}>
                    <View
                      style={[
                        styles.graphBarFill,
                        {
                          height: 134,
                        },
                      ]}
                    />
                  </View>
                  <View
                    style={[
                      styles.graphBar,
                      {
                        height: 130,
                      },
                    ]}>
                    <View
                      style={[
                        styles.graphBarFill,
                        {
                          height: 115,
                        },
                      ]}
                    />
                  </View>
                  <View
                    style={[
                      styles.graphBar,
                      {
                        height: 206,
                      },
                    ]}>
                    <View
                      style={[
                        styles.graphBarFill,
                        {
                          height: 176,
                        },
                      ]}
                    />
                  </View>
                  <View
                    style={[
                      styles.graphBar,
                      {
                        height: 214,
                      },
                    ]}>
                    <View
                      style={[
                        styles.graphBarFill,
                        {
                          height: 199,
                        },
                      ]}
                    />
                  </View>
                </View>
                <View style={styles.graphDates}>
                  <Text style={styles.graphDate}>6월 30일</Text>
                  <Text style={styles.graphDate}>8월 4일</Text>
                </View>
              </View>
              <Text style={styles.itemContent}>
                조현우님의 현재 “활동” 성장 추세는 평균보다 좀 늦어지다가,
                마지막에 가파르게 올라가는 편 입니다. 이에 대한 이유에는, 여름에
                앨범을 발매하는 아티스트 덕분에, 조현우님의 취미인 “음악 디깅"이
                많이 활성화되어 나타납니다. 또한, 여름에 집중되어있는 IT 전공과
                관련된 대회가 많아 활동이 활발히 나타납니다.
              </Text>
            </View>
            <View style={styles.item}>
              <View style={styles.itemHeader}>
                <View style={styles.itemHeaderMix}>
                  <Text style={styles.itemTitle}>사회</Text>
                </View>
              </View>
              <View style={styles.graph}>
                <View style={styles.graphStyles}>
                  <View style={styles.graphStyle}>
                    <View
                      style={[
                        styles.graphStyleBar,
                        {
                          backgroundColor: colors.g300,
                        },
                      ]}
                    />
                    <Text style={styles.graphStyleText}>평균</Text>
                  </View>
                  <View style={styles.graphStyle}>
                    <View
                      style={[
                        styles.graphStyleBar,
                        {
                          backgroundColor: colors.active,
                        },
                      ]}
                    />
                    <Text style={styles.graphStyleText}>나</Text>
                  </View>
                </View>
                <View style={styles.graphBars}>
                  <View
                    style={[
                      styles.graphBar,
                      {
                        height: 111,
                      },
                    ]}>
                    <View
                      style={[
                        styles.graphBarFill,
                        {
                          height: 72,
                        },
                      ]}
                    />
                  </View>
                  <View
                    style={[
                      styles.graphBar,
                      {
                        height: 122,
                      },
                    ]}>
                    <View
                      style={[
                        styles.graphBarFill,
                        {
                          height: 93,
                        },
                      ]}
                    />
                  </View>
                  <View
                    style={[
                      styles.graphBar,
                      {
                        height: 105,
                      },
                    ]}>
                    <View
                      style={[
                        styles.graphBarFill,
                        {
                          height: 115,
                        },
                      ]}
                    />
                  </View>
                  <View
                    style={[
                      styles.graphBar,
                      {
                        height: 159,
                      },
                    ]}>
                    <View
                      style={[
                        styles.graphBarFill,
                        {
                          height: 134,
                        },
                      ]}
                    />
                  </View>
                  <View
                    style={[
                      styles.graphBar,
                      {
                        height: 130,
                      },
                    ]}>
                    <View
                      style={[
                        styles.graphBarFill,
                        {
                          height: 115,
                        },
                      ]}
                    />
                  </View>
                  <View
                    style={[
                      styles.graphBar,
                      {
                        height: 206,
                      },
                    ]}>
                    <View
                      style={[
                        styles.graphBarFill,
                        {
                          height: 176,
                        },
                      ]}
                    />
                  </View>
                  <View
                    style={[
                      styles.graphBar,
                      {
                        height: 214,
                      },
                    ]}>
                    <View
                      style={[
                        styles.graphBarFill,
                        {
                          height: 199,
                        },
                      ]}
                    />
                  </View>
                </View>
                <View style={styles.graphDates}>
                  <Text style={styles.graphDate}>6월 30일</Text>
                  <Text style={styles.graphDate}>8월 4일</Text>
                </View>
              </View>
              <Text style={styles.itemContent}>
                조현우님은 남들이 안하는 것들, 주로 힙스터라고 부르는 것들을
                좋아합니다. 이를 뒷받침하듯, 음악 취향도 대중들이 듣지 않는,
                ”익스페리멘탈”, “인더스트리얼 힙합" 등을 좋아합니다. 이러한 활동
                특성은 추후 UP 시에, 창의적인 발상을 할 때 큰 도움이 될 수
                있습니다.
              </Text>
            </View>
          </View>
        )}
      </ScrollView>
    </View>
  );
};

export default Profile;
