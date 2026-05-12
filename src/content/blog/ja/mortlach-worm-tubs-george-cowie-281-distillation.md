---
title: "ワームタブと 2.81 回蒸留：Mortlach の George Cowie が 100 年捨てなかった非効率"
description: "Speyside Dufftown の Mortlach は、6 基の蒸留器、6 基のワームタブ、そして「2.81 回蒸留」という半端な小数点の工程を、100 年以上ほぼ手を付けずに運用している。これは伝統ではなく、19 世紀の鉄道技師 George Cowie が引いた工程図を、Diageo が経済合理性に反して継承し続けている結果だ。瓶の中の「肉感」を、化学とトレードオフから読む。"
date: 2026-05-12
lang: ja
category: craft
tags: ["Mortlach", "George Cowie", "Alexander Cowie", "ワームタブ", "worm tubs", "2.81回蒸留", "Wee Witchie", "Speyside", "Dufftown", "Diageo", "硫黄化合物", "DMS", "DMTS", "蒸留化学"]
featured: false
og_image: "/images/blog/mortlach-worm-tubs-george-cowie-281-distillation/still-layout.png"
canonical_url: "https://legacydram.com/ja/blog/mortlach-worm-tubs-george-cowie-281-distillation/"
cross_posted_to: []
---

「**2.81 回蒸留**」という単位を最初に聞いたとき、私はそれを工程仕様書に書かれたバージョン番号の打ち間違いだと思いました。エンジニアが 100 年以上前に決めたフォーマットとして、小数点以下二桁が中途半端すぎる。`v2.0` でも `v3.0` でもなく、`v2.81`。レガシーコードの README で見たら、削除の起票を出す数字です。

しかし Speyside の Dufftown の小さな蒸留所では、この 2.81 が今も瓶の中身を決めています。**Mortlach**。Johnnie Walker Black Label の「重さ」を 100 年以上支えてきた、Diageo 内でも特殊な工程を保持している蒸留所です。

この記事は、その「半端な小数点」が一人の鉄道技師の判断で 19 世紀末に書かれ、Diageo が 100 年以上それを書き換えなかった理由を、化学と設備保守のトレードオフから読みます。**結論を先取りすると、Mortlach の非効率は、効率と引き換えに守られた identity の経済学です**。

![Mortlach 蒸留所の 6 基ポットスチル構成と 2.81 回蒸留経路の図解。LANE A (大型ライン): 17,500 L のビッグウォッシュスチル + 9,000 L スピリットスチルで標準的な 2 回蒸留。LANE B (中間ライン): 7,500 L × 2 基のウォッシュスチル + 8,500 L スピリットスチルで 2-3 回蒸留、一部留分は Wee Witchie に回送。LANE C (Wee Witchie): 最小の 8,000 L スピリットスチルで他 still の feinty 留分を 3 回再蒸留。3 経路の加重平均が約 2.81 回。6 基すべての凝縮器がワームタブで、shell-and-tube に対し銅接触面積が約 1/20。](/images/blog/mortlach-worm-tubs-george-cowie-281-distillation/still-layout.png)

## 1853 年、鉄道技師が蒸留所に入った日

現在の Mortlach の工程を設計した人物の名前は、**George Cowie** (1819-1893) です。

Cowie は surveyor、つまり測量技師でした。19 世紀ヴィクトリア朝のスコットランドで鉄道網が急速に敷かれていた時代に、**Thomas Grainger と John Miller** の土木技師事務所で実務経験を積んでいます。Grainger & Miller は当時の鉄道土木の最重要プレイヤーの一つで、Cowie はそこで「**与えられた地形に合わせて構造物を設計する**」訓練を受けた人物です。蒸留所運営の訓練は、彼にはありませんでした。

1853 年、Cowie は John Gordon の共同所有者として加わり、1867 年に単独所有に切り替わります。引き受けた Mortlach は、1823 年に James Findlater が Dufftown 初の合法蒸留所として創業した小規模施設でした。

ただし、現在の Mortlach の identity を決めた最大の判断は、彼の息子 **Alexander Mitchell Cowie** (1861 年生) が **1897 年に行った大規模拡張**で確立した工程です。Alexander は Aberdeen 大学で医学を修めて Vienna と香港で医師として働いていた人物で、1896 年に父の病で蒸留所に戻った。彼が建築家 Charles C Doig (Speyside の蒸留所の半分を設計した男) と組んで設計したのが、現在まで続く「**the Way**」と呼ばれる蒸留プロトコルです。

Alexander Cowie を「天才」とは書きません。彼は父の鉄道技師としての設計感覚を蒸留器の配置に応用した、一回的な判断者です。「秘伝」「先見の明」とロマン化すると、その後 100 年、誰がそれを保守したのかという話が消えます。100 年捨てなかったのは、ひとりの天才ではありません。

![Mortlach の 1853 年から 2018 年までの工程継承タイムライン図。1853 年 George Cowie が鉄道技師 (Grainger & Miller 出身) として John Gordon の共同所有者に加入、1867 単独所有。1897 年 Alexander Mitchell Cowie が建築家 Charles C Doig と組んで 2.81 回蒸留と 6 ワームタブの現工程を確立。1923 年 John Walker & Sons が買収し Johnnie Walker Black の heavy meat component として固定。1971 年 SMD 近代化で蒸気加熱に切替も still 形状とワームタブは変更せず。1997 年 Diageo 成立、Cowie 工程は引き継ぎ。2013 年 £30M 倍増計画 (需要鈍化で scale-back、ただし工程は変えない)。2018 年に Mortlach 12 Wee Witchie / 16 Distiller's Dram / 20 Cowie's Blue Seal の 3 ラインへ刷新、名前に Cowie。所有者は 4 回変わり、設備更新は何度も行われたが、Cowie 親子の 1897 年の工程は今もそのまま。](/images/blog/mortlach-worm-tubs-george-cowie-281-distillation/cowie-timeline.png)

## 6 基の蒸留器、6 基のワームタブ

現在の Mortlach の蒸留器構成を数値で書きます。

- **ウォッシュスチル 3 基**: 7,500 L × 2 基、17,500 L × 1 基
- **スピリットスチル 3 基**: 8,000 L、8,500 L、9,000 L

このうち最小の 8,000 L スピリットスチルが「**Wee Witchie**」と呼ばれる、Mortlach の核心となる蒸留器です。

注目すべきはこの **不均一な容量**です。多くのシングルモルト蒸留所は、ウォッシュスチル同士、スピリットスチル同士を同容量で揃えます。Glenfiddich (28 基すべて同形状の小型ポットスチル) や Macallan (旧蒸留所では小型 still を多数並列) のように、**同じものを並べて再現性を担保する**設計が一般的です。Mortlach はその逆をやっています。**異なる容量と異なる形状の still を 6 基並べ、流れる liquid の経路を意図的に複数に分岐させる**。

そしてこの 6 基すべてに、**ワームタブ**が外側に立っています。

ワームタブ (worm tubs、蛇管式凝縮器) は、銅の蛇管を木製または鋳鉄製の冷却槽 (tub) に螺旋状に沈めて、tub 内の冷水で蒸留蒸気を凝縮する古い装置です。19 世紀後半以降、ほとんどの蒸留所はこれを **shell-and-tube condenser** (鉛直配置の銅管束を銅製の外殻で囲んだ近代型凝縮器) に置き換えました。理由は単純で、shell-and-tube の方が冷却効率が高く、銅との接触面積が大きく、保守も楽だからです。

Diageo の全 28 蒸留所のうち、ワームタブを残しているのは **Mortlach、Dalwhinnie、Cragganmore、Glen Elgin、Royal Lochnagar、Glenkinchie、Talisker** の少数です。そのうち **6 基すべてがワームタブ**という最大規模の例が Mortlach です。

## ワームタブと shell-and-tube：銅接触面積の桁が違う

ここで化学に降ります。なぜワームタブが「肉感」を作るのか。

蒸留蒸気が凝縮器を通る間、蒸気中の **硫黄化合物**は熱した銅と反応して取り除かれます。主な化合物は以下:

- **ジメチルスルフィド (DMS、(CH3)2S)**：茹でたキャベツ、コーンのような香気
- **ジメチルトリスルフィド (DMTS、(CH3)2S3)**：焦げた肉、玉ねぎの腐臭、人間の検知閾値が極端に低い (ng/L オーダー)
- **硫化水素 (H2S)**、**メタンチオール (MeSH)**：卵、ゴム

これらが銅に触れると、表面で **硫化銅 (Cu2S)** を形成して固定され、新酒側からは除去されます (`2 Cu + H2S → Cu2S + H2`)。つまり「**蒸気がどれだけ多くの銅にどれだけ長く触れるか**」が、新酒の硫黄プロファイルを決める。典型的な **表面積律速 (surface-area-limited) 反応**で、エンジニアの直感に合うはずです。

ここでワームタブと shell-and-tube の差が出ます。業界の経験則では、shell-and-tube はワームタブに対して **銅の接触面積が約 20 倍** (Edinburgh Whisky Academy 等)。蛇管 1 本の内壁 vs 100 本前後の管束の内壁、という単純な幾何の差です。さらに shell-and-tube は管束が縦配置のため、凝縮液が銅管表面を伝って戻る間も追加の接触が起きる。

ワームタブは逆です。蛇管 1 本が冷水槽の中で螺旋を描き、急峻な温度勾配で蒸気を一気に液化する。**銅との接触は短く、急で、局所的**。結果として、硫黄化合物の除去率が低くなり、新酒に DMTS や H2S 系の化合物が残りやすい。Mortlach、Cragganmore、Talisker といったワームタブ系の蒸留所が「meaty」「sulfury」「feinty」と表現される理由はここにあります。Mortlach の「**the beast of Dufftown**」という評は錬金術ではなく、銅表面積の桁が一桁小さいというだけの幾何の結果です。

## 2.81 という weighted average の正体

ここまででワームタブの話は閉じます。残るのが「2.81 回蒸留」の数字の中身です。

一般的なシングルモルトは 2 回蒸留、Auchentoshan のような Lowland モルトは 3 回蒸留 (3.0)、Springbank は 2.5 回。Mortlach の 2.81 は、これらの間に位置する **加重平均としての小数点**です。

Mortlach の workflow は概ね以下のように整理されます。**大きいウォッシュスチル (17,500 L) → 大きいスピリットスチル**で標準的な 2 回蒸留を行う流れ (A)、**小さい 2 基のウォッシュスチル (7,500 L × 2)** から出た弱い feinty な留分を **Wee Witchie (最小スピリットスチル)** に集めて複数回再蒸留する流れ (B)、各 still から出る heads / tails / feints を細かく cut しながら Wee Witchie で 3 回蒸留する weak feints の流れ (C)。これらを規定の比率で混合した結果が、平均で **約 2.81 回蒸留に相当する**。

正直に書くと、**この比率の正確な配分は Diageo が完全に公開していません**。cut points、Wee Witchie に流れる比率、最終 blend の方法。これらは現場の still operator と Diageo の technical lead の継承知に依存します。だから「2.81」は **正確な分子計算の結果というより、Cowie 親子が設計した経路の加重平均をマーケティング側がきれいに整理した数字**として読むのが妥当です。エンジニアが見たら「マジックナンバーをコードにベタ書きするな」と言いたくなる類の数字。それでも現場では今もこの小数点以下が瓶のキャラクターを決めている。

工程的に重要なのは、Wee Witchie が **partial reflux のフィルター** として機能している点です。全体を 3 回蒸留すると軽くなりすぎる (Auchentoshan 的になる)、2 回に揃えると Cowie 設計の特性が消える。**特定の「重い lane」だけを 3 回通すことで、heavy spirit を残しながら最終的なバランスを取る**。ここに 2.81 の意味があります。

## 1923 年、John Walker が買収したとき、何を引き継いだか

1923 年、Mortlach は **John Walker & Sons** に買収されます。Walker は当時、Johnnie Walker Black Label のブレンドを世界展開していた時期で、ブレンド用の「heavy meat component」を安定供給できる蒸留所が必要でした。Mortlach の sulfury heavy spirit はその要件に正確に合致していた。1925 年に DCL 入り、1986 年 Guinness による DCL 買収、1997 年 Diageo 成立。所有者は変わりましたが、**Cowie 親子が設計した 2.81 のプロトコルとワームタブ 6 基は、ほぼそのまま継承されました**。

ここで Diageo が下した判断 (= 下さなかった判断) を、エンジニア視点で読みます。100 年の間、ワームタブを shell-and-tube に置き換える機会は何度もありました。1960 年代の近代化、1971 年の蒸気加熱への切替、その後の設備更新。**そのたびに「凝縮器を換えれば年間の冷却水コストと電力コストが下がる」という財務的選択肢**は存在したはずです。

Diageo はそれを選びませんでした。理由は単純で、**ワームタブを外した瞬間、Mortlach は Mortlach ではなくなる**からです。Johnnie Walker Black のレシピは Mortlach の sulfury heavy character を前提に組まれている。そこを軽くしたら、世界で年間 1 億本以上売れる Black Label の風味が変わる。「下流の制約が上流の設備選択を縛っている」典型例です。

エンジニアの言葉に翻訳すると、これは **legacy API の forward-compatibility maintenance** です。100 年前の仕様 (= Cowie の蒸留経路) を、上流のメジャーアップデートを禁じ手にした状態で、下流の品質を保証し続ける。設備更新は許される、ただし **「同じ出力を返す範囲で」**。Diageo の財務部門はこれに毎年予算を付け続けている。

## 2013 年の倍増計画と、その scale-back が示したコスト構造

この「**legacy API 維持の経済学**」が最もはっきり露呈したのが、2013 年の拡張計画です。

2013 年 4 月、Diageo は **£30 million (約 50 億円)** を投じて Mortlach の年間生産能力を **3.7 百万 L から 7 百万 L へほぼ倍増**する計画を発表しました。新ステイルハウスを建設し、ワームタブを含む既存設備を **同仕様で複製**する。商業 launch は 2015 年 11 月の予定でした。計画はその後、2013-2014 年のスコッチ需要鈍化を受けて縮小され、現在の Mortlach の生産能力は業界資料で約 3 百万 L 前後とされ、完全な倍増には至っていません。

ここで読むべきは、「中止された」事実ではなく、**「なぜ £30M で 3.3M L 増やすという計算になったか」**です。1 リットルあたりの新規生産能力に約 £9 (約 1,500 円) のキャピタル投資。Speyside の標準的な新規蒸留所建設の単価より明らかに高い水準です。差額の正体は、**ワームタブ複製コスト**と **不均一な still サイズの個別製作コスト**です。shell-and-tube なら大量生産された汎用品が使えますが、ワームタブは銅の蛇管を巻く工程から職人仕事で、tub の木製外殻も個別製作。**「同じものを 2 倍作る」のに、汎用解の倍以上のコストがかかる**。

Diageo が需要鈍化で計画を scale-back した判断は財務的に合理的です。しかし scale-back **した上でも**、Cowie の工程は変えない。これが Mortlach の経済構造です。

> 100 年前の copper 蛇管設計を 1 mm 単位で複製して capacity を増やすという選択を、Diageo の財務部門が止めなかった理由は単純で、止めると Johnnie Walker Black が同じ味で作れなくなるからだ。

## 今の瓶に残っているもの：Mortlach 12 "Wee Witchie"

最後に、棚のボトルに降ります。2018 年に Diageo は Mortlach のシングルモルト・ラインを再編し、現在は 3 本の永続ラインが流通しています。**Mortlach 12 "Wee Witchie"** (43.4% ABV、8,000-11,000 円)、**16 "Distiller's Dram"**、**20 "Cowie's Blue Seal"**。3 本の名前にそれぞれ蒸留所の核心 (Wee Witchie / Distiller / Cowie) が織り込まれている。

12 を開けると、最初に鼻に来るのは **乾いた肉のような香り**です。ドライエイジビーフを切った直後、室温で 5 分置いた切断面のあの香り。Cowie の Wee Witchie 経路を 3 回通った feinty 留分の最終形態で、shell-and-tube だったら届かない領域の硫黄プロファイルです。second nose に **黒糖**、**煎ったヘーゼルナッツ**、そして **micro 単位の卵黄**。口に含むと **シェリー樽由来の dried fruit** が後から覆い、その下に Mortlach の重さがある。**フェノールはゼロ** (ノンピート麦芽)。煙の代わりに、肉が残る、と書くと食事の比喩に寄りすぎますが、本当にそうとしか書けない。

加水を 3 滴入れると、DMTS 系の香気が一段沈み、Wee Witchie 経路のフルーティな ester が浮き上がります。Mortlach の二層構造が一回の加水で見える瞬間で、これは shell-and-tube の蒸留所では起きない現象です (もともと heavy 化合物が少ないので、加水で「下層」が消えるだけになる)。

## 100 年の継承とは、新しいものを作らないことを選び続けること

George Cowie が 1853 年に Dufftown に入ったとき、彼は鉄道技師でした。Alexander Cowie が 1897 年に「the Way」を完成させたとき、彼は医師でした。1923 年の Walker、1986 年の Guinness、1997 年の Diageo、2013 年の倍増計画。それぞれの時点で「ワームタブを外す」選択肢があり、誰もそれを選ばなかった。

100 年の継承とは、新しいものを作る作業ではありません。**新しいものを作らないことを、何世代もかけて選び続ける作業**です。瓶の中の dried beef のような香気は、Cowie 親子の一回的な工程設計と、その後の 100 年分の所有者たちが「**変えなかった**」という消極的な決断の積み重ねの結果として、いま私の口に届いている。

エンジニアとしては、これが面白い。レガシーコードに対する一般的な対処は、リファクタリングか書き直しです。Mortlach の場合、**そのコードのテスト** (= Johnnie Walker Black の世界 1 億本) **が拡張仕様の禁止を要求している**。だから 100 年、誰も Cowie の関数シグネチャを変えなかった。

棚の Mortlach 12 を次に開けるとき、私はそのことを思い出します。**この瓶は、誰かが何かをしなかった結果として、ここにある**。

---

## 関連記事

- [樽から数字へ — Jim McEwan が Octomore で選び、Ardnahoe で選ばなかったもの](/ja/blog/jim-mcewan-octomore-ardnahoe/)：同じ Islay 工程の「数値マーケティング」を、Mortlach の「数値の正体は加重平均」と並べて読む
- [David Stewart と Balvenie 21 PortWood ― 「二度樽熟成」という発明と、60 年で 2 人の後継者を育てた男](/ja/blog/david-stewart-balvenie-portwood-cask-finishing/)：同じ Dufftown 圏、Grant 家 vs Diageo の portfolio 思想対比
- [Lagavulin 16 と Iain McArthur ― Islay の硫黄ではない「フェノール」を、樽番の 50 年が決めた](/ja/blog/lagavulin-16-iain-mcarthur-islay-phenol/)：Diageo Classic Malt の中での Lagavulin、Mortlach は Classic Malt に入らずブレンド component に位置付けられた portfolio 差
- [LegacyDramへようこそ](/ja/blog/welcome-to-legacydram/)：このサイトの編集方針

## 主な参考資料

- Mortlach 公式: [malts.com/mortlach](https://www.malts.com/en-us/mortlach)
- Mortlach distillery：[Wikipedia](https://en.wikipedia.org/wiki/Mortlach_distillery) (1823 創業、Cowie 系継承、1897 拡張、1923 Walker 買収、2013 拡張計画の経緯)
- *Whiskipedia*「Mortlach's '2.81 times': the Wee Witchie and an old-school Speyside distillation」：[whiskipedia.com](https://whiskipedia.com/fundamentals/wee-witchie-mortlach-distillation/)
- Maltspedia の Mortlach 技術仕様 (still 容量、ワームタブ、年間生産能力)：[maltspedia.com](https://maltspedia.com/distilleries/mortlach-distillery/)
- *Words of Whisky*「Mortlach Distillery & Its Incredibly Wacky Still House」：[wordsofwhisky.com](https://wordsofwhisky.com/mortlach-distillery-its-incredibly-wacky-still-house/)
- *Edinburgh Whisky Academy*「Worm Tub Whisky Distilleries」：銅接触面積比 (worm tubs vs shell-and-tube) の業界経験則
- *The Whisky School*「Whisky Worm Tubs vs Shell Tube Condensers: The Texture War」：DMS / DMTS / 硫化銅形成の chemistry
- *The Scotsman*「Diageo to reinvent Mortlach with £30m investment」(2013 年 4 月)：倍増計画と scale-back の経緯
- Thomas Grainger (鉄道技師、Cowie の元雇用主)：[Wikipedia](https://en.wikipedia.org/wiki/Thomas_Grainger)
