## useNavigate
```ts
import {useNavigate} from "react-router-dom"

const navigate = useNavigate();
navigate("/");
navigate(-1);
```
- 画面遷移する時に用いる．navigate(-1)で1つ前の画面に戻れる．

## REST(Representational State Transfer) API
- APIの構築方法を定義する仕様である
- RESTの4つの設計原則
  - セッションなどの状態管理を行わない。(やり取りされる情報はそれ自体で完結して解釈することができる)
  - 情報を操作する命令の体系が予め定義・共有されている。（HTTPのGETやPOSTメソッドなど）
  - すべての情報は汎用的な構文で一意に識別される。（URLやURIなど）
  - 情報の内部に、別の情報や(その情報の別の)状態へのリンクを含めることができる。
- method
  - GET: リソースの取得
  - POST:リソースの作成
  - PUT: リソースの全体更新(置き換え)
  - PATCH: リソースの部分更新(一部を更新)
  - DELETE: リソースの削除

- @ModelAttribute
  - GET, (POST)メソッドで使用可能
  - 一般的にフォームデータの送信に使用される
- @RequestBody
  - POSTやOUTメソッドで使用される
  - JSONやXMLのようなメッセージボディを使用してデータを送信する際に使用される
  