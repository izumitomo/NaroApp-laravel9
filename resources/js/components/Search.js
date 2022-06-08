import * as React from 'react';

export default function Search({
  base_url,
  search,
  response,
}) {
  console.log(response)
  //2回実行される。最初はArray(0)とArray(20)

  //console.log(Array.isArray(response[0]));
  return (
    <div>
      <p>{base_url}</p>
      {response.map(res => {
        
        //計算処理を書く
        return (
          //gridで整形
          <p key={res.title}>{res.title}</p>
        );
      })}

    </div>
  );
}



/* 
import React from "react";
import { Link } from "react-router-dom";

export default function Search({
  base_url,
  search,
  response,
}) {
  return (
    //axios.get(props.base_url)
    <div>
      <p>{base_url}</p>
      <p>コンソールにサーバ経由で取得したAPIのresponseを表示中</p>
    </div>
  );
}
 */
