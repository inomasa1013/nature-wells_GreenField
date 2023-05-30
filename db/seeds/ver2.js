const knex = require("knex");

exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("products").del();

  // Inserts seed entries
  await knex("products").insert([
    {
      id: 1,
      item: "ルンバ",
      itemExp: "少し傷があります",
      isWaiting: true,
      seller: "木下　信男",
      comment: " ",
    },
    {
      id: 2,
      item: "エアコン",
      itemExp: "新品同様",
      isWaiting: true,
      seller: "森　真一",
      comment: " ",
    },
    {
      id: 3,
      item: "アイロン",
      itemExp: "購入後２回くらい使用",
      isWaiting: false,
      seller: "木村",
      comment:
        "とても良いアイロン有難うございました。新品同様でとても気に入りました。大切に使わせていただきます。",
    },
    {
      id: 4,
      item: "ポット",
      itemExp: "新品同様です",
      isWaiting: true,
      seller: "森　真一",
      comment: "",
    },
    {
      id: 5,
      item: "椅子",
      itemExp: "新品同様",
      isWaiting: true,
      seller: "Tiger Woods",
      comment: "",
    },
    {
      id: 6,
      item: "ベッド",
      itemExp: "少し傷ありですが、とても綺麗だと思います。",
      isWaiting: true,
      seller: "Tom Smith",
      comment: "",
    },
    {
      id: 7,
      item: "レンジ",
      itemExp: "購入後１年程度使用",
      isWaiting: true,
      seller: "高木　光一",
      comment: " ",
    },
    {
      id: 8,
      item: "冷蔵庫",
      itemExp: "結構冷えが悪いです",
      isWaiting: false,
      seller: "森　洋平",
      comment:
        "５００００円で購入していただきました/n/¥廃棄代金が浮いたので大助かりです！",
    },
  ]);
};
