// import {StyleSheet} from 'react-native';
// import Constants from 'expo-constants';

// export default StyleSheet.create({
//   container: {
//     paddingTop: Constants.statusBarHeight,
//   },
// });

open ReactNative;

let viewStyle =
    (
      ~paddingTop: option(float)=?,
      ~marginBottom: option(float)=?,
      ~color: option(string)=?,
      (),
    ) => {
  Js.log((paddingTop, marginBottom, color));
};

let styles =
  StyleSheet.create({
    "container":
      Style.viewStyle(
        ~paddingTop=Style.pt(10.),
        ~marginBottom=Style.pct(20.),
        (),
      ),
  });