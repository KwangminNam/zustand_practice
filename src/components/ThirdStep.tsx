import React from "react";
import { useDataStore } from "../stores/fetchDataStore";

export default function ThirdStep() {
  const { data, status, getData, changeStatus, getSeocndData } = useDataStore();

  console.log(data);
  return (
    <div>
      <button onClick={() => changeStatus("BYE!")}>CHANGE STATUS</button>
      <h1>{status}</h1>
      <button
        onClick={() => {
          getData(1);
        }}
      >
        FETCH DATA
      </button>
      <button onClick={()=>getData(2)}>SECOND DATA</button>

      <h1>
        {data.id}
        {data.title}
      </h1>
    </div>
  );
}
