import globalBuffs from "../../data/globalBuffs.js";
import { syncHornOperatorCard } from "./updateGlobalBuff.js";


export function initGlobalBuffList() {

    const area =
        document.getElementById(
            "global-buff-list"
        );

    area.innerHTML = "";


    globalBuffs.forEach(buff => {

        const item =
            document.createElement("div");

        item.className = "global-buff-item";
        item.dataset.buffId = buff.id;


        // バフ値または同期先の状態が変わる潜在だけ表示
        const potentialLevels = [
            1,
            ...Object.keys(buff)
                .filter(key => /^potential\d+$/.test(key))
                .map(key => Number(key.replace("potential", "")))
        ]
            .filter((level, index, levels) =>
                levels.indexOf(level) === index
            )
            .sort((a, b) => a - b);

        const potentialHTML = potentialLevels.length > 1
            ? `
                <label>
                潜在
                <select class="global-buff-potential">
                    ${potentialLevels.map((level, index) => `
                        <option
                            value="${level}"
                            ${index === potentialLevels.length - 1
                                ? "selected"
                                : ""
                            }
                        >
                            潜在${level}：${level === 1
                                ? "強化なし"
                                : buff[`potential${level}`] === 0
                                    ? "攻撃力上昇"
                                    : "素質強化"
                            }
                        </option>
                    `).join("")}
                </select>
                </label>
            `
            : "";


        // モジュール
        let moduleHTML = "";

        if (
            buff.modules &&
            buff.modules.length > 0
        ) {

            const defaultModule =
                buff.modules[
                    buff.modules.length - 1
                ];

            moduleHTML = `
                <label>
                モジュール
                <select class="global-buff-module">

                    <option value="none">
                        なし
                    </option>

                    ${buff.modules.map(module => `
                        <option
                            value="${module}"
                            ${module === defaultModule
                                ? "selected"
                                : ""
                            }
                        >
                            ${module}
                        </option>
                    `).join("")}

                </select>
                </label>

                <label class="global-buff-module-level-area">
                レベル
                <select class="global-buff-module-level">

                    <option value="1">
                        Lv1
                    </option>

                    <option value="2">
                        Lv2
                    </option>

                    <option
                        value="3"
                        selected
                    >
                        Lv3
                    </option>

                </select>
                </label>
            `;
        }


        // 本体
        item.innerHTML = `
            <label>
                <input
                    type="checkbox"
                    class="global-buff-check"
                    value="${buff.id}"
                >

                ${buff.name}
            </label>

            <div class="global-buff-build-row">
                ${potentialHTML}
                ${moduleHTML}
            </div>
        `;


        area.appendChild(item);


        // 各要素取得
        const potentialSelect =
            item.querySelector(
                ".global-buff-potential"
            );

        const moduleSelect =
            item.querySelector(
                ".global-buff-module"
            );

        const moduleLevelSelect =
            item.querySelector(
                ".global-buff-module-level"
            );
        const moduleLevelArea = item.querySelector(
            ".global-buff-module-level-area"
        );


        // ホルンカードへ同期
        function syncOperatorCard() {

            // 今はホルン重装バフだけ特殊処理
            if (
                buff.id !== "defender_buff"
            ) {
                return;
            }

            syncHornOperatorCard(
                Number(
                    potentialSelect.value
                ),

                moduleSelect
                    ? moduleSelect.value
                    : "none",

                moduleLevelSelect
                    ? Number(
                        moduleLevelSelect.value
                    )
                    : 0
            );
        }


        // 潜在変更
        if (potentialSelect) {
            potentialSelect.addEventListener(
                "change",
                () => {

                    syncOperatorCard();

                }
            );
        }


        // モジュールありの場合
        if (
            moduleSelect &&
            moduleLevelSelect
        ) {

            moduleSelect.addEventListener(
                "change",
                () => {

                    // モジュールなしならLv非表示
                    if (
                        moduleSelect.value ===
                        "none"
                    ) {

                        moduleLevelArea.hidden = true;

                    }
                    else {

                        moduleLevelArea.hidden = false;

                    }


                    syncOperatorCard();

                }
            );


            // Lv変更
            moduleLevelSelect.addEventListener(
                "change",
                () => {

                    syncOperatorCard();

                }
            );

        }

    });
}
