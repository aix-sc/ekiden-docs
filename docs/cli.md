# CLI

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
