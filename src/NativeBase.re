module StyleProvider = {
  [@bs.module "native-base"] [@react.component]
  external make: (~style: 'any, ~children: React.element) => React.element =
    "StyleProvider";
};

module Container = {
  [@bs.module "native-base"] [@react.component]
  external make: (~style: 'any, ~children: React.element) => React.element =
    "Container";
};

module Root = {
  [@bs.module "native-base"] [@react.component]
  external make: (~children: React.element) => React.element =
    "Root";
};