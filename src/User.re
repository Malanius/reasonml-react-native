type token =
  | None
  | Valid(string)
  | Expired;

type userContext = {accessToken: token};

let context = React.createContext({accessToken: None});

let useContext = () => {
  React.useContext(context);
};

module Provider = {
  let makeProps = (~value, ~children, ()) => {
    "value": value,
    "children": children,
  };
  let make = React.Context.provider(context);
};