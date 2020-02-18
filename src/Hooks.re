open React;

module type HooksType = {
  let url: string;
  type response;
  let response_encode: Decco.encoder(response);
  let response_decode: Decco.decoder(response);
};

type remoteDataState('t) =
  | Loading
  | Error(string)
  | NoData
  | Data('t);

module type HooksTypeOut = {
  type t;
  type remoteData = remoteDataState(t);
  let useGet: unit => remoteData;
};

module Make = (M: HooksType) : (HooksTypeOut with type t := M.response) => {
  type remoteData = remoteDataState(M.response);

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
          |> then_(json =>
               switch (json->M.response_decode) {
               | Error(error) => error.message->Error->dispatch->resolve
               | Ok(data) => data->Success->dispatch->resolve
               }
             )
          |> catch(error =>
               error->Obj.magic##message->Error->dispatch->resolve
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