open React;
open ReactNative;

[@react.component]
let make = () => <View> <Text> "Hello world!" -> string </Text> </View>;

[@genType]
let default = make;