# ツール一覧

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
