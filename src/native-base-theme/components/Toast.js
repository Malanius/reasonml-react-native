// @flow

import variable from './../variables/platform';
import {PLATFORM} from './../variables/commonColor';

export default (variables /* : * */ = variable) => {
  const platform = variables.platform;

  const toastTheme = {
    '.danger': {
      backgroundColor: variables.toastColorDanger,
    },
    '.warning': {
      backgroundColor: variables.toastColorWarning,
    },
    '.success': {
      backgroundColor: variables.toastColorSuccess,
    },
    backgroundColor: variables.brandPrimary,
    borderRadius: platform === PLATFORM.IOS ? 5 : 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    minHeight: 50,
    'NativeBase.Text': {
      color: variables.toastTitleColor,
      flex: 1,
      fontFamily: variables.toastTitleFontFamily,
    },
    'NativeBase.Button': {
      backgroundColor: 'transparent',
      height: 30,
      elevation: 0,
      'NativeBase.Text': {
        fontSize: 14,
      },
    },
  };

  return toastTheme;
};
