open React;

type remoteData('a) =
  | Loading
  | Error(string)
  | NoData
  | Data('a);

type action('a) =
  | Fetch
  | Success('a)
  | Error(string);

let useGet = url => {
  let (state, dispatch) =
    useReducer(
      (state, action) => {
        switch (action) {
        | Fetch when state == NoData => Loading
        | Fetch => state
        | Success(data) => Data(data)
        | Error(str) => Error(str)
        }
      },
      NoData,
    );
  useEffect1(
    () => {
      dispatch(Fetch);
      let id = Js.Global.setTimeout(() => {dispatch(Success(123))}, 3_000);
      Some(() => Js.Global.clearTimeout(id));
    },
    [|url|],
  );
  state;
};