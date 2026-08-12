// updateGlobalBuff.js


// オペカード → 全体バフUI
export function syncHornDefenderBuff(
    potential,
    module,
    moduleLevel
) {

    const item =
        document.querySelector(
            '.global-buff-item[data-buff-id="defender_buff"]'
        );

    if (!item) return;


    const checkbox =
        item.querySelector(
            ".global-buff-check"
        );

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


    // ホルンがダメ計に入ったらバフON
    checkbox.checked = true;


    // 潜在
    potentialSelect.value =
        String(potential);


    // モジュール
    if (moduleSelect) {
        const hasModuleOption = [...moduleSelect.options]
            .some(option => option.value === module);

        moduleSelect.value = hasModuleOption
            ? module
            : "none";

    }


    // モジュールレベル
    if (moduleLevelSelect) {

        if (
            !moduleSelect ||
            moduleSelect.value === "none"
        ) {

            moduleLevelArea.hidden = true;

        }
        else {

            moduleLevelArea.hidden = false;

            moduleLevelSelect.value =
                String(moduleLevel);

        }

    }
}


// 全体バフUI → オペカード
export function syncHornOperatorCard(
    potential,
    module,
    moduleLevel
) {

    const cards =
        document.querySelectorAll(
            ".operator-card"
        );


    cards.forEach(card => {

        const operatorSelect =
            card.querySelector(
                ".operator-select"
            );


        // ホルンカード以外は無視
        if (
            operatorSelect.value !== "horn"
        ) {
            return;
        }


        const potentialSelect =
            card.querySelector(
                ".potential"
            );

        const moduleSelect =
            card.querySelector(
                ".module"
            );

        const moduleLevelSelect =
            card.querySelector(
                ".module-level"
            );


        // 潜在
        potentialSelect.value =
            String(potential);

        potentialSelect.dispatchEvent(
            new Event("change")
        );


        // モジュール
        moduleSelect.value =
            module || "none";

        moduleSelect.dispatchEvent(
            new Event("change")
        );


        // モジュールありの場合のみLv同期
        if (
            module !== "none" &&
            moduleLevelSelect
        ) {

            moduleLevelSelect.value =
                String(moduleLevel);

            moduleLevelSelect.dispatchEvent(
                new Event("change")
            );

        }

    });
}
