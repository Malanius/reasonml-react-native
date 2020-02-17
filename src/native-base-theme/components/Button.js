// @flow

import variable from './../variables/platform';
import {PLATFORM} from './../variables/commonColor';

export default (variables /* : * */ = variable) => {
  const platformStyle = variables.platformStyle;
  const platform = variables.platform;
  const darkCommon = {
    'NativeBase.Text': {
      color: variables.brandDark,
    },
    'NativeBase.Icon': {
      color: variables.brandDark,
    },
    'NativeBase.IconNB': {
      color: variables.brandDark,
    },
  };
  const lightCommon = {
    'NativeBase.Text': {
      color: variables.brandLight,
    },
    'NativeBase.Icon': {
      color: variables.brandLight,
    },
    'NativeBase.IconNB': {
      color: variables.brandLight,
    },
  };
  const primaryCommon = {
    'NativeBase.Text': {
      color: variables.buttonPrimaryBg,
    },
    'NativeBase.Icon': {
      color: variables.buttonPrimaryBg,
    },
    'NativeBase.IconNB': {
      color: variables.buttonPrimaryBg,
    },
  };
  const successCommon = {
    'NativeBase.Text': {
      color: variables.buttonSuccessBg,
    },
    'NativeBase.Icon': {
      color: variables.buttonSuccessBg,
    },
    'NativeBase.IconNB': {
      color: variables.buttonSuccessBg,
    },
  };
  const infoCommon = {
    'NativeBase.Text': {
      color: variables.buttonInfoBg,
    },
    'NativeBase.Icon': {
      color: variables.buttonInfoBg,
    },
    'NativeBase.IconNB': {
      color: variables.buttonInfoBg,
    },
  };
  const warningCommon = {
    'NativeBase.Text': {
      color: variables.buttonWarningBg,
    },
    'NativeBase.Icon': {
      color: variables.buttonWarningBg,
    },
    'NativeBase.IconNB': {
      color: variables.buttonWarningBg,
    },
  };
  const dangerCommon = {
    'NativeBase.Text': {
      color: variables.buttonDangerBg,
    },
    'NativeBase.Icon': {
      color: variables.buttonDangerBg,
    },
    'NativeBase.IconNB': {
      color: variables.buttonDangerBg,
    },
  };
  const disabledCommon = {
    'NativeBase.Text': {
      color: variables.buttonDisabledColor,
    },
    'NativeBase.Icon': {
      color: variables.buttonDisabledColor,
    },
    'NativeBase.IconNB': {
      color: variables.buttonDisabledColor,
    },
  };
  const buttonTheme = {
    '.bordered': {
      '.dark': {
        ...darkCommon,
        backgroundColor: 'transparent',
        borderColor: variables.brandDark,
        borderWidth: variables.borderWidth * 2,
      },
      '.light': {
        ...lightCommon,
        backgroundColor: 'transparent',
        borderColor: variables.brandLight,
        borderWidth: variables.borderWidth * 2,
      },
      '.primary': {
        ...primaryCommon,
        backgroundColor: 'transparent',
        borderColor: variables.buttonPrimaryBg,
        borderWidth: variables.borderWidth * 2,
      },
      '.success': {
        ...successCommon,
        backgroundColor: 'transparent',
        borderColor: variables.buttonSuccessBg,
        borderWidth: variables.borderWidth * 2,
      },
      '.info': {
        ...infoCommon,
        backgroundColor: 'transparent',
        borderColor: variables.buttonInfoBg,
        borderWidth: variables.borderWidth * 2,
      },
      '.warning': {
        ...warningCommon,
        backgroundColor: 'transparent',
        borderColor: variables.buttonWarningBg,
        borderWidth: variables.borderWidth * 2,
      },
      '.danger': {
        ...dangerCommon,
        backgroundColor: 'transparent',
        borderColor: variables.buttonDangerBg,
        borderWidth: variables.borderWidth * 2,
      },
      '.disabled': {
        ...disabledCommon,
        backgroundColor: 'transparent',
        borderColor: variables.buttonDisabledColor,
        borderWidth: variables.borderWidth * 2,
      },
      ...primaryCommon,
      borderWidth: variables.borderWidth * 2,
      elevation: null,
      shadowColor: null,
      shadowOffset: null,
      shadowOpacity: null,
      shadowRadius: null,
      backgroundColor: 'transparent',
    },

    '.dark': {
      ...lightCommon,
      '.transparent': {
        ...darkCommon,
        backgroundColor: 'transparent',
      },
      '.bordered': {
        ...darkCommon,
        backgroundColor: 'transparent',
      },
      backgroundColor: variables.brandDark,
    },
    '.light': {
      ...darkCommon,
      '.transparent': {
        ...lightCommon,
        backgroundColor: 'transparent',
      },
      '.bordered': {
        ...lightCommon,
        backgroundColor: 'transparent',
      },
      backgroundColor: variables.brandLight,
    },
    '.primary': {
      ...darkCommon,
      '.transparent': {
        ...primaryCommon,
        backgroundColor: 'transparent',
      },
      '.bordered': {
        ...primaryCommon,
        backgroundColor: 'transparent',
      },
      backgroundColor: variables.buttonPrimaryBg,
    },
    '.success': {
      ...darkCommon,
      '.transparent': {
        ...successCommon,
        backgroundColor: 'transparent',
      },
      '.bordered': {
        ...successCommon,
        backgroundColor: 'transparent',
      },
      backgroundColor: variables.buttonSuccessBg,
    },
    '.info': {
      ...darkCommon,
      '.transparent': {
        ...infoCommon,
        backgroundColor: 'transparent',
      },
      '.bordered': {
        ...infoCommon,
        backgroundColor: 'transparent',
      },
      backgroundColor: variables.buttonInfoBg,
    },
    '.warning': {
      ...darkCommon,
      '.transparent': {
        ...warningCommon,
        backgroundColor: 'transparent',
      },
      '.bordered': {
        ...warningCommon,
        backgroundColor: 'transparent',
      },
      backgroundColor: variables.buttonWarningBg,
    },
    '.danger': {
      ...lightCommon,
      '.transparent': {
        ...dangerCommon,
        backgroundColor: 'transparent',
      },
      '.bordered': {
        ...dangerCommon,
        backgroundColor: 'transparent',
      },
      backgroundColor: variables.buttonDangerBg,
    },
    '.disabled': {
      ...disabledCommon,
      '.transparent': {
        backgroundColor: 'transparent',
      },
      '.bordered': {
        backgroundColor: 'transparent',
      },
      backgroundColor: variables.buttonDisabledBg,
    },

    '.block': {
      justifyContent: 'center',
      alignSelf: 'stretch',
    },

    '.full': {
      justifyContent: 'center',
      alignSelf: 'stretch',
      borderRadius: 0,
    },

    '.rounded': {
      borderRadius: variables.borderRadiusLarge,
    },

    '.transparent': {
      backgroundColor: 'transparent',
      elevation: 0,
      shadowColor: null,
      shadowOffset: null,
      shadowRadius: null,
      shadowOpacity: null,
      ...primaryCommon,
      '.dark': {
        ...darkCommon,
      },
      '.danger': {
        ...dangerCommon,
      },
      '.warning': {
        ...warningCommon,
      },
      '.info': {
        ...infoCommon,
      },
      '.primary': {
        ...primaryCommon,
      },
      '.success': {
        ...successCommon,
      },
      '.light': {
        ...lightCommon,
      },
      '.disabled': {
        ...disabledCommon,
      },
    },

    '.small': {
      height: 30,
      'NativeBase.Text': {
        fontSize: 14,
      },
      'NativeBase.Icon': {
        fontSize: 20,
        paddingTop: 0,
      },
      'NativeBase.IconNB': {
        fontSize: 20,
        paddingTop: 0,
      },
    },

    '.large': {
      height: 60,
      'NativeBase.Text': {
        fontSize: 22,
      },
    },

    '.capitalize': {},

    '.vertical': {
      flexDirection: 'column',
      height: null,
    },

    'NativeBase.Text': {
      fontFamily: variables.buttonFontFamily,
      marginLeft: 0,
      marginRight: 0,
      color: variables.textColor,
      fontSize: variables.buttonTextSize,
      paddingHorizontal: 16,
      backgroundColor: 'transparent',
    },

    'NativeBase.Icon': {
      color: variables.inverseTextColor,
      fontSize: 24,
      marginHorizontal: 16,
      paddingTop: platform === PLATFORM.IOS ? 2 : undefined,
    },
    'NativeBase.IconNB': {
      color: variables.inverseTextColor,
      fontSize: 24,
      marginHorizontal: 16,
      paddingTop: platform === PLATFORM.IOS ? 2 : undefined,
    },

    '.iconLeft': {
      'NativeBase.Text': {
        marginLeft: 0,
      },
      'NativeBase.IconNB': {
        marginRight: 0,
        marginLeft: 16,
      },
      'NativeBase.Icon': {
        marginRight: 0,
        marginLeft: 16,
      },
    },
    '.iconRight': {
      'NativeBase.Text': {
        marginRight: 0,
      },
      'NativeBase.IconNB': {
        marginLeft: 0,
        marginRight: 16,
      },
      'NativeBase.Icon': {
        marginLeft: 0,
        marginRight: 16,
      },
    },
    '.picker': {
      'NativeBase.Text': {
        '.note': {
          fontSize: 16,
          lineHeight: null,
        },
      },
    },
    paddingVertical: variables.buttonPadding,
    backgroundColor: variables.buttonPrimaryBg,
    borderRadius: variables.borderRadiusBase,
    borderColor: variables.buttonPrimaryBg,
    borderWidth: null,
    height: 45,
    flexDirection: 'row',
    elevation: 2,
    shadowColor:
      platformStyle === PLATFORM.MATERIAL ? variables.brandDark : undefined,
    shadowOffset:
      platformStyle === PLATFORM.MATERIAL ? {width: 0, height: 2} : undefined,
    shadowOpacity: platformStyle === PLATFORM.MATERIAL ? 0.2 : undefined,
    shadowRadius: platformStyle === PLATFORM.MATERIAL ? 1.2 : undefined,
    alignItems: 'center',
    justifyContent: 'space-between',
  };
  return buttonTheme;
};
