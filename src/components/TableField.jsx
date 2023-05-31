import React from "react";
// [{ id:1, name:"sasaki"  } , { id:2, name:"sasayama"  }]
import { ItemField } from "./ItemField" ;

export const TableField =()=>{
    const className1 = "itemId";
    const className2 = "itemName";
    const className3 = "itemDescription";
    const className4 = "itemStatus";
    const className5 = "request";

  return (
  <table className="mainTable">
      <tr className="headline">
          <th className={className1}>ID</th>
          <th className={className2}>商品名</th>
          <th className="subjectDescription">商品説明</th>
          <th className={className4}>ステータス</th>
          <th className={className5}>リクエスト送信</th>
      </tr>
      <ItemField className1={className1}  className2={className2} className3={className3} className4={className4} className5={className5}/>
  </table>
  )
}