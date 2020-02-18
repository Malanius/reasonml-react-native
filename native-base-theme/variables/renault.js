// @flow

import color from 'color';
import {Dimensions, PixelRatio, Platform} from 'react-native';

import {PLATFORM} from './commonColor';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;
const platform = Platform.OS;
const platformStyle = undefined;
const isIphoneX =
  platform === PLATFORM.IOS &&
  (deviceHeight === 812 ||
    deviceWidth === 812 ||
    deviceHeight === 896 ||
    deviceWidth === 896);

const colors = {
  renaultGroup: '#FFCC33',
  renaultGroupLight: '#FFF8E6',
  renaultGroupHover: '#FFDB75',
  alliance: '#FF5F00',
  allianceLight: '#FFEFE5',
  allianceHover: '#FF7933',
  black: '#000000',
  white: '#FFFFFF',
  accentGreen: '#73C366',
  accentGreenLight: '#A7FB9A',
  accentGreenHover: '#88DE7F',
  accentGreenDark: '#4EA147',
  accentOrange: '#FF8200',
  accentOrangeLight: '#FFC14C',
  accentOrangeHover: '#FFA51C',
  accentOrangeDark: '#EB6500',
  accentRed: '#CB333B',
  accentRedLight: '#FF6E6A',
  accentRedHover: '#E85252',
  accentRedDark: '#8C0012',
  secondaryDarkGreen: '#009b77',
  secondaryDarkGreenLight: '#7CF7CF',
  secondaryDarkGreenHover: '#55D2AC',
  secondaryDarkGreenDark: '#006747',
  secondaryBlueDuck: '#009CA6',
  secondaryBlueDuckLight: '#77EEF8',
  secondaryBlueDuckHover: '#58D1DC',
  secondaryBlueDuckDark: '#006772',
  secondaryBlue: '#0077C8',
  secondaryBlueLight: '#7AC5FF',
  secondaryBlueHover: '#5BAAFF',
  secondaryBlueDark: '#0048A0',
  secondaryDarkBlue: '#0033A0',
  secondaryDarkBlueLight: '#006ED6',
  secondaryDarkBlueHover: '#1749C4',
  secondaryDarkBlueDark: '#002280',
  secondaryDarkPurple: '#5C068C',
  secondaryDarkPurpleLight: '#AD5DDE',
  secondaryDarkPurpleHover: '#9143C2',
  secondaryDarkPurpleDark: '#430068',
  secondaryPurple: '#9E007E',
  secondaryPurpleLight: '#D750B3',
  secondaryPurpleHover: '#BA3198',
  secondaryPurpleDark: '#810065',
  grayLight1: '#FAF9F8',
  grayLight2: '#F1F1F2',
  grayBackground: '#EEEEEE',
  grayHover: '#BBBCBC',
  grayMain: '#999999',
  grayDark1: '#888B8D',
  grayDark2: '#53565A',
  grayDark3: '#333333',
  grayDark4: '#222222',
};

export default {
  platformStyle,
  platform,

  // Accordion
  accordionBorderColor: colors.grayMain,
  accordionContentPadding: 10,
  accordionIconFontSize: 18,
  contentStyle: colors.grayLight1,
  expandedIconStyle: colors.black,
  headerStyle: colors.grayBackground,
  iconStyle: colors.black,

  // ActionSheet
  elevation: 4,
  containerTouchableBackgroundColor: colors.grayMain,
  innerTouchableBackgroundColor: colors.white,
  listItemHeight: 50,
  listItemBorderColor: 'transparent',
  marginHorizontal: -15,
  marginLeft: 14,
  marginTop: 15,
  minHeight: 56,
  padding: 15,
  touchableTextColor: colors.grayDark2,

  // Android
  androidRipple: true,
  androidRippleColor: colors.grayLight2,
  androidRippleColorDark: colors.grayHover,
  buttonUppercaseAndroidText: true,

  // Badge
  badgeBg: colors.renaultGroup,
  badgeColor: colors.white,
  badgePadding: 0,

  // Button
  buttonFontFamily: 'renaultLifeRegular',
  buttonDisabledBg: colors.grayBackground,
  buttonDisabledColor: colors.grayMain,
  buttonPadding: 6,
  buttonDefaultActiveOpacity: 0.5,
  buttonDefaultFlex: 1,
  buttonDefaultBorderRadius: 2,
  buttonDefaultBorderWidth: 1,
  get buttonPrimaryBg() {
    return this.brandPrimary;
  },
  get buttonPrimaryColor() {
    return this.inverseTextColor;
  },
  get buttonInfoBg() {
    return this.brandInfo;
  },
  get buttonInfoColor() {
    return this.inverseTextColor;
  },
  get buttonSuccessBg() {
    return this.brandSuccess;
  },
  get buttonSuccessColor() {
    return this.inverseTextColor;
  },
  get buttonDangerBg() {
    return this.brandDanger;
  },
  get buttonDangerColor() {
    return this.inverseTextColor;
  },
  get buttonWarningBg() {
    return this.brandWarning;
  },
  get buttonWarningColor() {
    return this.inverseTextColor;
  },
  get buttonTextSize() {
    return this.fontSizeBase - 1;
  },
  get buttonTextSizeLarge() {
    return this.fontSizeBase * 1.5;
  },
  get buttonTextSizeSmall() {
    return this.fontSizeBase * 0.8;
  },
  get borderRadiusLarge() {
    return this.fontSizeBase * 3.8;
  },
  get iconSizeLarge() {
    return this.iconFontSize * 1.5;
  },
  get iconSizeSmall() {
    return this.iconFontSize * 0.6;
  },

  // Card
  cardDefaultBg: colors.white,
  cardBorderColor: colors.grayMain,
  cardBorderRadius: 2,
  cardItemPadding: 12,

  // CheckBox
  CheckboxRadius: 0,
  CheckboxBorderWidth: 2,
  CheckboxPaddingLeft: 2,
  CheckboxPaddingBottom: 5,
  CheckboxIconSize: 16,
  CheckboxIconMarginTop: 1,
  CheckboxFontSize: 17,
  checkboxBgColor: colors.renaultGroup,
  checkboxSize: 20,
  checkboxTickColor: colors.white,
  checkboxDefaultColor: 'transparent',
  checkboxTextShadowRadius: 0,

  // Color
  brandPrimary: colors.renaultGroup,
  brandInfo: colors.renaultGroupLight,
  brandSuccess: colors.accentGreen,
  brandDanger: colors.accentRed,
  brandWarning: colors.accentOrange,
  brandDark: colors.black,
  brandLight: colors.white,
  brandSecondaryBlue: colors.secondaryBlue,

  // Container
  containerBgColor: colors.white,

  // Date Picker
  datePickerFlex: 1,
  datePickerPadding: 10,
  datePickerTextColor: colors.black,
  datePickerBg: 'transparent',

  // FAB
  fabBackgroundColor: colors.renaultGroup,
  fabBorderRadius: 28,
  fabBottom: 0,
  fabButtonBorderRadius: 20,
  fabButtonHeight: 40,
  fabButtonLeft: 7,
  fabButtonMarginBottom: 10,
  fabContainerBottom: 20,
  fabDefaultPosition: 20,
  fabElevation: 4,
  fabIconColor: colors.white,
  fabIconSize: 24,
  fabShadowColor: colors.black,
  fabShadowOffsetHeight: 2,
  fabShadowOffsetWidth: 0,
  fabShadowOpacity: 0.4,
  fabShadowRadius: 2,
  fabWidth: 56,

  // Font
  DefaultFontSize: 16,
  fontFamily: 'readRegular',
  fontSizeBase: 15,
  get fontSizeH1() {
    return this.fontSizeBase * 1.8;
  },
  get fontSizeH2() {
    return this.fontSizeBase * 1.6;
  },
  get fontSizeH3() {
    return this.fontSizeBase * 1.4;
  },

  // Footer
  footerHeight: 55,
  footerDefaultBg: colors.white,
  footerPaddingBottom: 0,
  footerDefaultBorderTopWidth: 0,
  footerDefaultBorder: null,

  // FooterTab
  tabBarTextColor: colors.black,
  tabBarTextSize: 11,
  activeTab: colors.renaultGroup,
  sTabBarActiveTextColor: colors.renaultGroup,
  tabBarActiveTextColor: colors.renaultGroup,
  tabActiveBgColor: colors.renaultGroupLight,

  // Header
  toolbarBtnColor: colors.black,
  toolbarDefaultBg: colors.white,
  toolbarHeight: 56,
  toolbarSearchIconSize: 23,
  toolbarInputColor: colors.grayLight2,
  searchBarHeight: 40,
  searchBarInputHeight: 50,
  toolbarBtnTextColor: colors.black,
  toolbarDefaultBorderBottomWidth: 0,
  toolbarDefaultBorder: null,
  iosStatusbar: 'light-content',
  get statusBarColor() {
    return color(this.toolbarDefaultBg)
      .darken(0.2)
      .hex();
  },
  get darkenHeader() {
    return color(this.tabBgColor)
      .darken(0.03)
      .hex();
  },

  // Icon
  iconFamily: 'Ionicons',
  iconFontSize: 28,
  iconHeaderSize: 24,

  // InputGroup
  inputFontSize: 17,
  inputBorderColor: colors.grayHover,
  inputSuccessBorderColor: colors.accentGreen,
  inputErrorBorderColor: colors.accentRed,
  inputHeightBase: 50,
  get inputColor() {
    return this.textColor;
  },
  get inputColorPlaceholder() {
    return colors.grayDark2;
  },

  // Line Height
  buttonLineHeight: 19,
  lineHeightH1: 32,
  lineHeightH2: 27,
  lineHeightH3: 22,
  lineHeight: 24,
  listItemSelected: colors.renaultGroup,

  // List
  listBg: 'transparent',
  listBorderColor: colors.grayDark1,
  listDividerBg: colors.grayBackground,
  listBtnUnderlayColor: colors.grayHover,
  listItemPadding: 12,
  listNoteColor: colors.grayDark2,
  listNoteSize: 13,

  // Progress Bar
  defaultProgressColor: colors.renaultGroup,
  inverseProgressColor: colors.grayDark3,

  // Radio Button
  radioBtnSize: 23,
  radioSelectedColorAndroid: colors.renaultGroup,
  radioBtnLineHeight: 24,
  get radioColor() {
    return this.brandPrimary;
  },

  // Segment
  segmentBackgroundColor: colors.grayBackground,
  segmentActiveBackgroundColor: colors.renaultGroup,
  segmentTextColor: colors.black,
  segmentActiveTextColor: colors.black,
  segmentBorderColor: colors.grayDark2,
  segmentBorderColorMain: colors.grayDark2,

  // Spinner
  defaultSpinnerColor: colors.renaultGroup,
  inverseSpinnerColor: colors.grayDark3,

  // Tab
  tabBarDisabledTextColor: colors.grayBackground,
  tabDefaultBg: colors.white,
  topTabBarTextColor: colors.black,
  topTabBarActiveTextColor: colors.black,
  topTabBarBorderColor: colors.grayDark2,
  topTabBarActiveBorderColor: colors.renaultGroup,

  // Tabs
  tabBgColor: colors.grayBackground,
  tabFontSize: 15,

  // Text
  textColor: colors.black,
  inverseTextColor: colors.white,
  noteFontSize: 14,
  get defaultTextColor() {
    return this.textColor;
  },

  // Title
  titleFontfamily: 'renaultLifeBold',
  titleFontSize: 19,
  subTitleFontSize: 14,
  subtitleColor: colors.black,
  titleFontColor: colors.black,

  // Toast
  toastColorSuccess: colors.accentGreenHover,
  toastColorWarning: colors.accentOrangeHover,
  toastColorDanger: colors.accentRedLight,
  toastTitleColor: colors.grayDark3,
  toastTitleFontFamily: 'readMedium',

  // Other
  borderRadiusBase: 2,
  borderWidth: 1 / PixelRatio.getPixelSizeForLayoutSize(1),
  contentPadding: 10,
  dropdownLinkColor: colors.grayDark3,
  inputLineHeight: 24,
  deviceWidth,
  deviceHeight,
  isIphoneX,
  inputGroupRoundedBorderRadius: 30,

  // iPhoneX SafeArea
  Inset: {
    portrait: {
      topInset: 24,
      leftInset: 0,
      rightInset: 0,
      bottomInset: 34,
    },
    landscape: {
      topInset: 0,
      leftInset: 44,
      rightInset: 44,
      bottomInset: 21,
    },
  },
};
