open React;
open ReactNative;
open NativeBase;

[@react.component]
let make = () => {
  let userInfo = Hooks.useGet("url");
  let value: User.userContext = {accessToken: None};

  <User.Provider value>
    <StyleProvider style=StyleProvider.(getTheme(renaultTheme))>
      <Root>
        <Container style={Js.Dict.empty()}>
          <View>
            <Text> "Hello world!"->string </Text>
            {switch (userInfo) {
             | NoData => React.null
             | Loading => <Text> "Loading"->string </Text>
             | Error(e) => <Text> {("Error" ++ e)->string} </Text>
             | Data(data) => <Text> {data->string_of_int->string} </Text>
             }}
          </View>
        </Container>
      </Root>
    </StyleProvider>
  </User.Provider>;
};

[@genType]
let default = make;

RootStyles.viewStyle(~paddingTop=10., ());