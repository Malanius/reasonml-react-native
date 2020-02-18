module StyleProvider = {
  type t;
  type theme;

  let renaultTheme: theme = [%raw
    {|require("../native-base-theme/variables/renault")|}
  ];

  [@bs.module "../native-base-theme/components"]
  external getTheme: theme => t = "default";

  [@bs.module "native-base"] [@react.component]
  external make: (~style: t, ~children: React.element) => React.element =
    "StyleProvider";
};

module Container = {
  [@bs.module "native-base"] [@react.component]
  external make:
    (~style: array(ReactNative.Style.t), ~children: React.element) =>
    React.element =
    "Container";
};

module Root = {
  [@bs.module "native-base"] [@react.component]
  external make: (~children: React.element) => React.element = "Root";
};