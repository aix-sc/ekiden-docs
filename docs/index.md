---
outline: [2, 3]
---

# EKIDEN.AI v3

## はじめに {#start}

EKIDEN.AI v3 は、時計の FIT ファイルから、その日の練習の中身を判定する分析の層です。800m×10本だったのか、どこで失速したのか、前回より速くなったのか。数値と判定を返し、言葉にするのは、つないだ AI（Claude や ChatGPT）の役目です。

- **数えるのはルール**：本数・距離・時間・ペース。同じ記録なら、必ず同じ答え。
- **判断は Jev**：計画的な練習か、狙いは何か。選択肢から確率つきで選ぶ。
- **迷ったら選手に聞く**：本人にしか分からないことだけ、選択式で確かめる。

### 使い方は2つ {#usage}

| | 何が要るか | データ |
| --- | --- | --- |
| [MCP（Claude Desktop の拡張機能）](#mcp) | Claude Desktop | PC の外に出ない |
| [CLI](#cli) | Node.js 20 以上 | PC の外に出ない |

リモート版（URL を入れるだけで Claude や ChatGPT に追加できる）は準備中です。

::: info いまはテスト中です
ダウンロードは v3.ekiden.ai/cli/ にあり、関係者だけが使えます（パスワード）。一般公開の後は npm で配ります。
:::

## MCP（Claude Desktop の拡張機能） {#mcp}

1. `ekiden-v3-local.mcpb` をダウンロードします。
2. ダブルクリックすると、Claude Desktop に追加の画面が出ます。「インストール」を押します。
3. **FIT のフォルダ**を選びます。時計から書き出した `.fit`、または Garmin Connect・COROS の書き出し `.zip` を入れたフォルダです（サブフォルダも読みます）。
4. 任意で次を入れます。

| 設定 | 例 | 何に使うか |
| --- | --- | --- |
| 最近のレース | `marathon:2:58:40`、`10k:38:42` | ペース帯と予想タイム |
| 最大心拍・安静時心拍 | `190`、`48` | 心拍ゾーン |
| 言語 | `ja` / `en` | 結果の文 |

5. Claude に話しかけます。

> 先月のインターバルを一覧にして
> 7月15日の練習を区間ごとに見せて
> 1000m×5は速くなっている？

使えるツールは[ツール一覧](#tools)にあります。対応：macOS・Windows。

## ツール一覧 {#tools}

すべて読み取り専用です。結果は1文のまとめと JSON で返り、位置情報（GPS の座標）は入りません。大きな結果は `offset` でページを分けます。

| ツール | できること |
| --- | --- |
| `list_activities` | 練習の一覧。期間・種目・形で絞り込む |
| `get_activity` | 1回の練習の中身。まとめ・ラップ・区間 |
| `get_splits` | 前半後半・1kmごと・区間ごとの推移 |
| `compare_activities` | 2〜5回の練習を比べる |
| `get_activity_window` | 「最後の5分」「3本目」など一部を細かく |
| `get_training_summary` | 週・月ごとの練習量 |
| `get_athlete_profile` | VDOT と各距離の予想タイム |
| `get_athlete_zones` | ペース帯と心拍ゾーン |
| `get_menu_history` | 同じメニューの推移。速くなっているか |

## CLI {#cli}

Node.js 20 以上が必要です（`node --version` で確認）。`ekiden.mjs` をダウンロードしたフォルダで：

```sh
node ekiden.mjs --help
node ekiden.mjs analyze ~/fit --race marathon:2:58:40
node ekiden.mjs list-activities --local ~/fit
node ekiden.mjs get-splits --activityId <ID> --mode segments --local ~/fit
node ekiden.mjs compare-activities --activityIds <ID1>,<ID2> --local ~/fit
```

`~/fit` は FIT のフォルダに読み替えてください。`--json` で JSON、`--lang en` で英語になります。`node ekiden.mjs features` で使える機能の一覧が出ます。

閾値は `--vdot 54`、`--race <mile|5k|10k|half|marathon>:<time>`、または `--t 4:00 --i 3:40 --m 4:14 --e 5:06` で渡せます。心拍ゾーンは `--max-hr 190 --resting-hr 48` です。

一般公開の後は npm で配ります（`npx` で動かせるようにする予定です）。

## トレーニング図鑑 {#catalog}

メニューの判定には、**藤原新さん**のトレーニング図鑑を使います。新さんが書籍などから学びつつ、自身の経験をもとにまとめたものです。

| | 数 |
| --- | --- |
| メニュー | 191（11カテゴリ） |
| セッションの種類 | 8：recovery, easy, threshold, vo2max, marathon, canova, long, workout |
| 練習計画の型 | Daniels・Canova |

図鑑にちょうど同じメニューがないときも、ルールが数えた構造（例：800m×10本）と、Jev が選んだ狙い（例：vo2max）の組み合わせで名前を付けます。

## データの扱い {#privacy}

- **読むだけ**：練習の記録に書き込みません。
- **位置情報を返さない**：AI に渡す結果に、GPS の座標は入れません。
- **ローカル版は PC の外に出さない**：MCP の拡張機能と CLI は、手元の FIT ファイルを手元で読みます。
- **会話をしない**：v3 は数値と判定を返すだけです。文章を作るのは、つないだ AI です。
