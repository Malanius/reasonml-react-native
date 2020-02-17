open React;
open ReactNative;
open NativeBase;

[@react.component]
let make = () =>
  <StyleProvider style={Js.Dict.empty()}>
    <Root>
      <Container style={Js.Dict.empty()}>
        <View> <Text> "Hello world!"->string </Text> </View>
      </Container>
    </Root>
  </StyleProvider>;

[@genType]
let default = make;

RootStyles.viewStyle(~paddingTop = 10., ())