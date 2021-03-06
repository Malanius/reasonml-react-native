open React;
open ReactNative;
open NativeBase;

module Swapi = {
  let url = "https://swapi.co/api/people/1";
  [@decco]
  type response = {name: string};
};

module SwapiPersonHooks = Hooks.Make(Swapi);

[@react.component]
let make = () => {
  let userInfo = SwapiPersonHooks.useGet();
  let value: User.userContext = {accessToken: None};

  <User.Provider value>
    <StyleProvider style=StyleProvider.(getTheme(renaultTheme))>
      <Root>
        <Container style=[|RootStyles.styles##container|]>
          <View>
            <Text> "Hello World 2"->string </Text>
            {switch (userInfo) {
             | NoData => React.null
             | Loading => <Text> "Loading..."->string </Text>
             | Error(e) => <Text> {("Error: " ++ e)->string} </Text>
             | Data(data) => <Text> data.name->string </Text>
             }}
          </View>
        </Container>
      </Root>
    </StyleProvider>
  </User.Provider>;
};

[@genType]
let default = make;
