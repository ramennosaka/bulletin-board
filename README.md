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

## useCallback
- パフォーマンス向上のためのフックで，メモ化したコールバック関数を返す
- useEffectと同じように依存配列(=[deps]コールバック関数が依存している要素が格納された配列)の要素のいずれかが変化した場合のみ，メモ化した値を再計算する
  - メモ化; 同じ結果を返す処理について，初回のみ処理を実行しておき，値が必要となった2回目以降は，前回の処理結果を計算することなく呼び出し値を得られるようにする
- 基本形
```ts
useCallback(callbackFunction, [deps]);
```
