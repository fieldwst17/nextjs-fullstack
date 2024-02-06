import React from "react";
// หน้าแสดงเนื้อหา
import { getData } from "./data";
export default async function Page({ params }) {
  const id = params.id;
  const data = await getData(id);
  console.log(data);
  return (
    // ใส่ลำดับของ Array [index ที่เท่าไร]
    <div>
      {data.length > 0 &&
        <div>
            <h1>{data[0].name}</h1>
            <br/>
            <img src={data[0].coverimage} />
            <br/>
            <p>{data[0].detail}</p>
        </div>
      }
    </div>
  );
}
