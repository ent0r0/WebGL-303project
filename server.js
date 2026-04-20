const express = require("express");
const app = express();
const path = require("path");

// publicフォルダを配信
app.use(express.static(path.join(__dirname, "public")));

// ルートアクセスでindex.htmlを返す
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// ポート設定（Render対応）
const PORT = process.env.PORT || 10000;

// サーバー起動
app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
