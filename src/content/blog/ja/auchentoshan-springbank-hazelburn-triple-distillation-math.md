---
title: "三回蒸留の数学：Auchentoshan と Springbank Hazelburn が「蒸留 1 回追加」で何を捨て何を残したか"
description: "スコッチで完全 3 回蒸留を運用する蒸留所は 2026 年現在 3 つだけ。Lowland の Auchentoshan は 1817 年から 200 年これを続けている。Campbeltown の Springbank は 1997 年に Hazelburn brand として復活させた。70% と 81% の 11 ポイント差を、John Bulloch の継承と Frank McHardy の選択、そして cut points の数理から読む。"
date: 2026-05-14
lang: ja
category: craft
tags: ["Auchentoshan", "Springbank", "Hazelburn", "三回蒸留", "triple distillation", "John Bulloch", "Frank McHardy", "Hedley G. Wright", "Mitchell家", "Lowland", "Campbeltown", "cut points", "new-make ABV", "fusel oil", "congener", "蒸留化学"]
featured: false
og_image: "/images/blog/auchentoshan-springbank-hazelburn-triple-distillation-math/triple-distillation-cut-points.png"
canonical_url: "https://legacydram.com/ja/blog/auchentoshan-springbank-hazelburn-triple-distillation-math/"
cross_posted_to: []
---

2 回蒸留と 3 回蒸留の違いを、最終的な新酒 ABV で書くと、約 **11 ポイント**です。

標準的な 2 回蒸留スコッチの new-make spirit は 70% 前後 (Macallan ~69-70%、Glenmorangie ~73-74%)。完全 3 回蒸留の **Auchentoshan は ~81%**。Irish の Midleton (Jameson の作り手) が 80-83% で運用しているのとほぼ同じ水準で、スコッチでこの ABV 帯を出す蒸留所は他にありません。

たった 11 ポイント、されど 11 ポイント。この差が、Lowland と Speyside の 200 年の portfolio 分化と、Campbeltown の Mitchell 家が 1997 年に下したひとつの判断を生んでいます。Glenmorangie の 5.14 m スティルや、姉妹編で扱った Mortlach の 2.81 回蒸留と並んで、「**数字が瓶に残っている**」タイプの工程設計です。

この記事は、その 11 ポイントを、cut points (留出のどこを切るか) の数理と、congener (副生化合物) の挙動から読みます。決めたのは **John Bulloch** (Auchentoshan 1817 創業) と、**Frank McHardy** (Springbank の 1997 年 Hazelburn revival)。**同じ「3 回」でも、200 年の慣性と 29 年の意図的選択は、別の物理を意味します**。

![三回蒸留 new-make ABV 比較カード。標準 2 回蒸留 (Macallan / Glenmorangie / Glenfiddich など業界標準) は new-make ABV ~70%、congener を残す設計。Springbank Hazelburn (1997 McHardy revival) は 3 回蒸留だが cut points が低 ABV 寄りで ~75%。Auchentoshan (1817 Bulloch 創業) は 3 回目の cut window が ~85% → ~75% と極めて狭く、new-make ABV ~81%。蒸留 1 回追加で標準と比べ 11 ポイント上昇する。](/images/blog/auchentoshan-springbank-hazelburn-triple-distillation-math/triple-distillation-cut-points.png)

## 1817 年、Glasgow 近郊で 3 回蒸留が「普通」だった時代

Auchentoshan 蒸留所は、Glasgow の北西、現在の Clydebank に位置しています。創業年は **1817 年** (一部資料に 1823 年説あり、業界の定説は 1817)、創業者は **John Bulloch / Archibald Bulloch** ら Bulloch 家を中心とする 19 世紀 Glasgow の蒸留業者ネットワークです。

1817 年の Lowland では、3 回蒸留は珍しくありませんでした。当時のスコッチ Lowland は、隣接する Irish ウイスキー業界 (Dublin の Jameson、Power's、George Roe らが世界市場の支配的プレイヤーだった時代) との直接競合下にあり、多くの Lowland 蒸留所が Irish 流の triple distillation を採用していました。**現代の感覚では「3 回蒸留 = Irish の伝統」だが、19 世紀の Lowland はそれを Glasgow / Edinburgh 周辺で独自に展開していた**地域です。

その後 1 世紀かけて、Lowland は連続式蒸留 (Coffey still、グレーンウイスキー側) に主力を奪われ、モルト蒸留所は壊滅的に減少しました。2026 年現在、Lowland で operational なモルト蒸留所は Auchentoshan、Glenkinchie、Bladnoch、Daftmill、Kingsbarns、Lindores Abbey 等、新興を含めても十数所。そのうち **完全 3 回蒸留を継続しているのは Auchentoshan ただひとつ**です (Glenkinchie は 2 回蒸留、復活した Rosebank が 2024 年に triple を再開)。

Bulloch を「Lowland 三回蒸留の伝統の守護者」とは書きません。彼は 1817 年時点で**地域標準の工程を採用した蒸留業者**で、その後 200 年「変えなかった」のは Bulloch 個人ではなく、所有変遷を経た歴代の運営者と現所有者 Beam Suntory の連続した判断の蓄積です。1817 年の単独判断ではなく、**200 年分の「変えない判断」の積み重ね**が、現在の new-make ABV ~81% を瓶に残しています。

## 11 ポイントの正体：cut points の数理

ここで化学に降ります。なぜ 3 回蒸留すると new-make ABV が 70% から 81% に跳ね上がるのか。

スピリットを蒸留中に観察すると、留出液の ABV は時間と共に下がっていきます。蒸留開始直後の **head (foreshots)** は 80-90% の高 ABV で、acetaldehyde (青臭く刺激的)、methanol、低分子 ester など揮発性の高い化合物が多く出る。中盤の **heart (middle cut)** が記録銘柄の中身になる部分で、ABV は target range 内で安定。最後の **tail (feints)** は低 ABV (40% 以下まで落ちる) で、fusel oil (高級アルコール) や long-chain ester、硫黄化合物などの「重い」化合物が出ます。

stillman の仕事は、この head / heart / tail のうち、**どの ABV 区間を「heart」と定義するか** を決めることです。これが cut points。head と tail は次のバッチに混ぜて再蒸留 (redistil) されるので、捨ててはいませんが、現在のバッチの new-make には入りません。

2 回蒸留の標準的なシングルモルトでは、heart の中央あたりの ABV が 70-75%、cut ending (heart の最後) が 60-65% 程度。平均すると new-make の ABV は **70% 前後**。

Auchentoshan の場合、3 回目の spirit still 段階で、cut starting ABV が **~85%**、cut ending ABV が **~75%** という極めて狭い窓を使います (Beam Suntory の technical sheet を一次資料で確認したい数値)。この窓の中央が ~80% で、heart の平均が **~81% ABV** になる。

ここで Raoult 法則 (理想溶液で各成分の蒸気圧は純粋蒸気圧にモル分率を掛けたものに等しい) と、ethanol-water の共沸点 (95.6% ABV / 78.15°C で蒸気と液の組成が一致し、蒸留でこれ以上濃縮できない理論限界) から、congener (副生化合物群) の挙動を読み取れます。

- ABV が高い段階では、ethanol-water 系の液相 / 気相平衡が ethanol 側に強く偏る
- 多くの congener (fusel oil、long-chain ester、硫黄化合物) は、低 ABV / 低温の領域で気相に出やすい (partition coefficient が水側に近い)
- したがって、cut starting ABV を高く設定すると、heart に入る前に低 ABV 領域を tail に押し込んで除外できる
- 3 回目の蒸留は、この「tail を切り捨てる」工程をもう一段加える操作

ここで読者は計算したくなるかもしれませんが、partition coefficient は化合物ごとに異なり、温度依存性も強く、wash の組成によっても変動するので、紙の上で正確に計算できる量ではありません。stillman は経験と感覚 (留出液の表面張力で見る bead test など) で cut を判断します。81% という数字は、**「3 回目の cut window を狭く高く設定した」物理的結果**として読むのが妥当です。

## 3 回蒸留で「捨てている」もの

3 回蒸留で減らしている (= tail に押し込んでいる) 代表的な化合物群と、それが意味するものを表に整理します。

| 化合物群 | 香り / 性質 | 2 回蒸留での残留 | 3 回蒸留での残留 |
|---|---|---|---|
| fusel oil (isoamyl alcohol、isobutanol、n-propanol) | バナナ系、cask 熟成で "rich/heavy" 風味の前駆体 | 1,500-2,500 ppm | 500-1,000 ppm |
| long-chain ester (ethyl palmitate、ethyl oleate) | oily mouthfeel、口当たりの粘度 | 多 | 少 |
| 硫黄化合物 (DMS、DMTS、H2S) | meaty / savoury (Mortlach 系の重さ) | worm tubs で高、shell-and-tube で中 | 一桁低い |
| phenolic compound | ピート由来の煙香 | ピート麦芽次第 | 同左、微減 |

3 回蒸留は「上位互換」ではありません。**spirit 自体の depth を削って、cask 影響を受けやすい new-make を作る工程**です。fusel oil は cask 熟成中に Maillard 系の副反応を経て "rich" 風味の前駆体になるので、これを大幅に減らした 3 回蒸留新酒は熟成後も spirit 由来の depth が浅い側に振れる。long-chain ester を減らせば oily mouthfeel が消える。硫黄化合物を減らせば meaty character が消える。

だから Auchentoshan の銘柄ラインは **12 / Three Wood (bourbon → Oloroso → PX の 3 段熟成) / American Oak / 18 / 21** と、cask 種類で character を分岐させる構成になっている。spirit 側で個性を作るのではなく、**cask が effective に効く前提条件として new-make を clean canvas にしている**。light spirit を作ることは目的ではなく、cask 政策の従属変数です。

## 1997 年、McHardy が Springbank 内に「Lowland 風」を作った

ここまでが Auchentoshan の 200 年の慣性側。もう一人の人物に降ります。**Frank McHardy** が 1996 年に Springbank に復職し、1997 年に **Hazelburn brand** を新たに立ち上げた話です。

McHardy 自身の経歴 (Bushmills 修行 → Springbank 初任 1977 → Bushmills 帰任 → 1996 Springbank 復職 → 2013 引退) は、別の記事 ([Frank McHardy / Springbank silent years](/blog/frank-mchardy-springbank-silent-years/)、英語) でまとめました。本記事では、彼が 1997 年に下したひとつの技術判断、**「Springbank 蒸留所内で 3 回蒸留 unpeated brand を新規に走らせる」** という決定だけに絞ります。

1997 年時点で、Springbank には既に 2 つの brand が走っていました。

- **Springbank brand**: 2.5 回蒸留 / 中程度 peated。1 回目の wash still から出る low wines のうち約 80% を intermediate still へ送らずに直接 spirit still へ部分的に bypass する "split run" 工程で、平均蒸留回数を 2.5 回に揃える。Mitchell 家の伝統 brand。
- **Longrow brand**: 2 回蒸留 / heavily peated。1973 年に試験生産、1992 年に本格 revival された Campbeltown の "硬派" brand。

McHardy と所有者 **Hedley G. Wright** (Mitchell 家の末裔、独立所有を 200 年近く維持してきた一族の現当主) が決めたのは、**3 回蒸留 / unpeated の 3 つ目の brand を加える**ことでした。それが Hazelburn。ブランド名は、Springbank の創業より少し早い 1825 年に Campbeltown で創業し 1925 年に閉鎖した **旧 Hazelburn 蒸留所** (まったく別の事業体) から借りています。

McHardy + Wright の business 判断のロジックをエンジニア視点で読みます。1996 年時点で、Lowland のモルト蒸留所は事実上 Auchentoshan / Glenkinchie / Bladnoch の 3 つしか operational ではなく、Rosebank は 1993 年に mothballed の渦中。**3 回蒸留 unpeated Lowland-style は市場供給が極端に細い niche**。Mitchell 家独立蒸留所として、その niche を Campbeltown 発で埋める判断は、portfolio diversification として合理的です。

Hazelburn の new-make ABV は **~75% 程度**と推定されています (公式数値は要確認、Whisky Magazine の McHardy インタビューベース)。Auchentoshan の ~81% より 6 ポイント低い。**同じ 3 回蒸留でも、Hazelburn の cut points は Auchentoshan よりやや低 ABV 寄り**に設定されていて、congener を「より多く残す」設計。3 回蒸留の clean さを取りつつ、2 回蒸留寄りの richer な character も残す **両者の中間**です。

これを 1 蒸留所内の portfolio として並べると、以下のようになります。

| Brand | 蒸留回数 | peat 政策 | new-make ABV (推定) |
|---|---|---|---|
| Longrow | 2.0 回 | heavily peated | ~73% |
| Springbank | 2.5 回 | 中程度 peated | ~73% |
| Hazelburn | 3.0 回 | unpeated | ~75% |

蒸留回数と peat level が逆相関する 3 点をひとつの蒸留所内で並走させる、スコッチ業界唯一の portfolio です。warehouse 管理、cask labelling、production schedule の複雑性は急増します。同じステイルハウスから日付ごとに異なる brand の new-make が出てくる、cask に貼るラベルを間違えたら 10 年後に発覚する、3 brand 分の熟成在庫を常時 maintain しなければ market launch のタイミングを合わせられない。大資本傘下では「efficiency 優先」で潰される setup で、**Mitchell 家が 200 年近く独立を維持してきた所有構造があったから可能**な選択です。

## 蒸留数小数点の portfolio：Mortlach の 2.81 と並べる

スコッチ業界の蒸留数 portfolio を一覧で整理します。

| 蒸留回数 | 代表蒸留所 | 設計者 / 判断者 |
|---|---|---|
| 2.0 | 大多数 (Glenfiddich / Macallan / Glenlivet / Talisker / Lagavulin / Highland Park / Glenmorangie 等) | 19 世紀以降の業界標準 |
| 2.5 | Springbank brand | Mitchell 家設計、split run |
| 2.67 | Benriach (一部試験生産、要確認) | Benriach 技術陣 |
| 2.81 | Mortlach | Alexander Mitchell Cowie (1897 拡張) |
| 3.0 | Auchentoshan / Springbank Hazelburn / Rosebank (2024 reopened) | Bulloch (1817) / McHardy + Wright (1997) / Ian Macleod (2024) |

姉妹編の [Mortlach 記事](/ja/blog/mortlach-worm-tubs-george-cowie-281-distillation/) で扱った 2.81 と、本記事の 3.0 は、**蒸留数を 0.x の単位で動かす判断の対極**にあります。Mortlach は worm tubs を残して銅接触面積を意図的に減らし、Wee Witchie に重い lane を 3 回通すことで「2 回より 0.81 回分だけ heavy」な spirit を作る。Auchentoshan / Hazelburn は完全な 3 回蒸留で「2 回より 1.0 回分だけ light」な spirit を作る。

両者とも、19 世紀後半から 20 世紀末に「**業界標準の 2 回蒸留から逸脱する**」設備判断を下した一人または数人の人物がいて、その判断が現在の new-make の congener プロファイルに数値として残っている。Cowie が surveyor 出身の技師として、Mitchell 家の Hedley G. Wright が独立蒸留所の所有者として、Bulloch が 1817 年の Glasgow の蒸留業者として。それぞれの 0.x 単位の判断が、200 年経ってもまだ slim な少数派の領域です。

## 今の瓶に残っているもの：Auchentoshan 12 と Hazelburn 10

棚に降ります。

**Auchentoshan 12 Year Old** (40% ABV、bourbon + Oloroso sherry の 2 段熟成、量販店で 5,000-6,500 円)。グラスに注いだ瞬間に立ち上がるのは **剥いた青リンゴと冷えた洋梨のスライス**の香り。second nose に **生姜の薄切り**と **乾いたシナモンの樹皮**。口に含むと、shell-and-tube + 3 回蒸留 + ~81% new-make の物理的帰結としての「**oily さの不在**」がまず分かります。粘度が極端に低い、水のような口当たり。そこに sherry cask 由来の dried raisin と bourbon cask の vanilla がレイヤーで乗る。**spirit 側に何も無い** ことに気付くのが Auchentoshan 12 の最初の発見で、cask 影響だけで character を作っている設計が舌で読める瞬間です。

**Hazelburn 10 Year Old** (46% ABV、bourbon cask 主体、7,500-9,500 円)。同じ 3 回蒸留でも、Auchentoshan 12 と比べると粘度が一段上がります。ABV 46% (Springbank の標準) で non-chill filtered のため、低温で薄白く濁る (チルフィルター後の Auchentoshan 12 では起きない現象)。口当たりは **濡れた木綿のような重さ**で、これは Hazelburn の new-make ABV ~75% に残っている long-chain ester の物理的痕跡。second palate に石鹸の泡を含んだような苦味と、遠くで燃やしている葉巻の煙 (Hazelburn は unpeated ですが、Springbank の warehouse 内で cask が共有する空気の影響、要 fact-check)。

並べて飲むと、**「同じ 3 回蒸留」が、cut points の数値で別物になる**ことが舌で読めます。Auchentoshan は cask に頼る設計、Hazelburn は spirit にも cask にも頼る両義的な設計。Bulloch の 1817 年の選択と McHardy + Wright の 1997 年の選択は、ここで物理的に分岐しています。

## 11 ポイントの差を 200 年回し続けるということ

スコッチ業界で 3 回蒸留を回せる蒸留所は、2026 年現在で 3 つだけです。Auchentoshan、Springbank の Hazelburn brand、そして 2024 年に Ian Macleod Distillers が再開した Rosebank。残り 100 数十蒸留所はすべて 2 回蒸留 (Mortlach の 2.81 のような小数点を含めれば 4-5 蒸留所が中間に居ますが、いずれも 2 回と 3 回の間)。

蒸留数を 1 つ増やすか減らすかの判断は、**200 年経ってもまだ slim な少数派の領域**です。Auchentoshan の 1817 年からの 209 年の慣性も、Hazelburn の 1997 年からの 29 年の意図的選択も、両方が業界の主流から外れる選択で、両方が現在の new-make の ABV と congener プロファイルに数値として残っている。

エンジニアの目で見るとこれは「**プラットフォームの選択は事業のロジックを決める**」構造です。2 回蒸留を選んだ蒸留所は「spirit 自体の depth で勝負できる」ロジックの上で 100 年走る。3 回蒸留を選んだ蒸留所は「cask が effective に効く前提条件を作る」ロジックの上で走る。一度プラットフォームを選ぶと、その後の cask 政策、熟成期間、価格帯、市場ポジションがすべてそのロジックに従属します。**Bulloch が 1817 年に選んだ 3 回蒸留は、2026 年の Auchentoshan Beam Suntory のラインナップを物理的に決めている**。

私が次に Auchentoshan 12 と Hazelburn 10 を並べて開けるとき、グラスの中にあるのは 11 ポイントの ABV 差と、それを作るために誰かが切った cut points と、その判断を 200 年または 29 年継続した複数の所有者の連続した「変えない判断」の累積です。私の好物は、Mortlach の 2.81 と、Auchentoshan の 3.0 のように、業界の真ん中から少しだけ外れた位置から物事を見ている人たちの仕事です。

---

## 関連記事

- [ワームタブと 2.81 回蒸留：Mortlach の George Cowie が 100 年捨てなかった非効率](/ja/blog/mortlach-worm-tubs-george-cowie-281-distillation/)：蒸留数小数点 portfolio の対極、worm tubs + 2.81 回が作る重質 spirit と、3 回蒸留 + shell-and-tube が作る軽質 spirit の物理的対比
- [Frank McHardy and Springbank's Silent Years](/blog/frank-mchardy-springbank-silent-years/)：本記事で名指しした McHardy の 1996 復職と Hazelburn 1997 revival の背景、Springbank の 1979 silent decision からの 20 年再起計画 (英語記事)
- [樽から数字へ — Jim McEwan が Octomore で選び、Ardnahoe で選ばなかったもの](/ja/blog/jim-mcewan-octomore-ardnahoe/)：Campbeltown McHardy + Mitchell 家 vs Islay McEwan 個人 path の対比、独立蒸留所の portfolio 設計判断
- [LegacyDramへようこそ](/ja/blog/welcome-to-legacydram/)：このサイトの編集方針

## 主な参考資料

- Auchentoshan 公式: [auchentoshan.com](https://www.auchentoshan.com/) (Beam Suntory 系列、triple distillation の technical description)
- Springbank 公式: [springbank.scot](https://www.springbank.scot/) (Hazelburn / Longrow / Springbank の 3 brand description、Mitchell 家所有の歴史)
- *Whisky Magazine*「Frank's wild years」: Frank McHardy インタビュー、Hazelburn 1997 revival の本人発言
- Charles MacLean *Scotch Whisky: A Liquid History*：Auchentoshan / Springbank の章、Lowland 19 世紀蒸留業界の Irish 影響史
- Dave Broom *The World Atlas of Whisky* (3rd ed. 2020)：Lowland 章 + Campbeltown 章、3 回蒸留蒸留所の現況一覧
- Misako Udo *The Scottish Whisky Distilleries*：Auchentoshan / Springbank の technical entries
- Inge Russell (ed.) *Whisky: Technology, Production and Marketing* (Academic Press, 2003)：still configuration / cut points / congener partition coefficient の科学解説
- John Buxton & Paul Hughes *The Science and Commerce of Whisky* (RSC Publishing, 2014)：triple distillation chemistry の章
