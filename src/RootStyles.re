open ReactNative;
open Expo;

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
        ~paddingTop=Constants.statusBarHeight->float_of_int->Style.dp,
        (),
      ),
  });