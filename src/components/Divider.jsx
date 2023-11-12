/******ABOUT DIVIDER******/

/***COMPONENT***/
export default function Divider(data) {    /*DOM*/
  return (
    <div className="h-divider">
      <div className="shadow" />
      <div className="text">
        <i>{data.data ? data.data : "chargement..."}</i>
      </div>
    </div>
  );
}
