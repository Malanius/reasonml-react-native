open React;

external eraseType: 'a => 'b = "%identity";

module type HooksType = {
  let url: string;
  type response;
};

[@bs.val] external dir: 'any => unit = "console.dir";

module Make = (M: HooksType) => {
  type remoteData =
    | Loading
    | Error(string)
    | NoData
    | Data(M.response);

  type action =
    | Fetch
    | Success(M.response)
    | Error(string);

  let useGet = () => {
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
        Js.Promise.(
          Fetch.fetch(M.url)
          |> then_(Fetch.Response.json)
          |> then_(json => dispatch(Success(json->eraseType)) |> resolve)
          |> catch(error =>
               error->eraseType##message->Error->dispatch->resolve
             )
          |> ignore
        );
        None;
      },
      [|M.url|],
    );

    state;
  };
};