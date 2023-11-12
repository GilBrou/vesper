/******ABOUT DIVIDER******/

/***COMPONENT***/
export default function Divider(data) {    /*DOM*/
  return (
    <div className="h-divider">
      <div className="shadow" />
      <div className="text">
        <i className="dividerText">{data.data ? data.data : "chargement..."}</i>
      </div>
    </div>
  );
}
