import { response } from "express";
import React,{useState,useEffect} from "react";

//テストのデータ
const testData= 
[{ id:1, name:"冷蔵庫", description: "SHARPのH１冷蔵庫です。退寮のためお譲りします。新品購入して使用期間は１年間です。", is_waiting: false, comment:"入力フォームの内容" } ,
 { id:2, name:"電子レンジ",description: "HITACHIのH1電子レンジです。退寮のためお譲りします。新品購入して使用期間は3年間です。",is_waiting: true, comment:"" },
 { id:3, name:"空気入れ",description:"ブリジストンの高級空気入れです。車のタイヤの空気も入れられます。退寮のためお譲りします。譲り物のため使用期間は不明です", is_waiting: true, comment:"" },
]

export const ItemField =(props)=>{
    const { className1,className2,className3,className4,className5 } = props;
    const [items, setItems] = useState(testData);
    const ref = useRef("");
    const URL = "/table";

    useEffect(()=>{
        fetch(URL, {method: "GET"})
        .then(res => res.json())
        .then(data => {
            setItems(data)
        })
    }, [])
    const label = "部屋番号・氏名・連絡先を入力し、譲渡依頼してください"
    // const clickAction = (e) =>{
    //     const id = e.target.id;
    //     const comment = document.getElementById(`input${id}`).value
    //     console.log(comment);
    //     // fetch(`${URL}/id`, {
    //     //     method: "PATCH",
    //     //     body:JSON.stringify(comment),
    //     //     headers: {
    //     //         'Content-type': 'application/json; charset=UTF-8',
    //     //       },
    //     // }).then((response) => console.log(response))
    //     // .then(window.location.reload());
    // }
    const itemView = () => {
        const elementsArr = [];
        items.forEach((item, index) => {
            elementsArr.push(
                <tr>
                <td className={className1}>{item.id}</td>
                <td className={className2}>{item.name}</td>
                <td className={className3}>{item.description}</td>
                <td className={className4}>{item.is_waiting? "新しい持ち主のもとへ旅立ちました ノシ" : "譲渡済"}<br/>{item.is_waiting? "" : item.comment}</td>
                <td className={className5}>
                    <label>{label}</label><br/>
                    <input ref={ref} id={`input${item.id}`} className="comment" type="text" placeholder="※改行不可" required></input>
                    <button id={item.id} onClick={clickAction}>譲渡依頼</button>
                </td>
                </tr>
            )
        })
        return elementsArr;
    }
    const resultElements = itemView();
    return resultElements
}


//   <tr>
//   <td>ID</td>
//   <td>商品名</td>
//   <td>商品説明</td>
//   <td>ステータス<br>コメント</td>
//   <td>リクエスト送信</td>
//   </tr>