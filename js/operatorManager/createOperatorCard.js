import {
    updateOperator,
    updatePotential,
    updateModule,
    updateModuleLevel
} from "./updateOperatorCard.js";
import { syncHornDefenderBuff } from "../globalBuff/updateGlobalBuff.js";
import {
    updateOperatorHitOptions,
    updateOperatorSpecialOptions
} from "./operatorSpecial/index.js";
import singleBuffs from "../../data/singleBuffs.js";
import inspirationBuffs from "../../data/inspirationBuffs.js";
import {
    bindSingleBuffItems,
    createSingleBuffItem
} from "../singleBuff/singleBuffUI.js";
import {
    canApplySingleBuff
} from "../singleBuff/singleBuffRules.js";

export function createOperatorCard(operatorData) {

    const card = document.createElement("div");

    card.className = "operator-card";

    card.innerHTML = `
        <button class="remove-btn">×</button>

        <select class="operator-select">

            <option value="">
                オペレーターを選択
            </option>

            ${operatorData.map(op => `
                <option value="${op.id}">
                    ${op.name}
                </option>
            `).join("")}

        </select>

        <div class="skill-name"></div>

        <details class="operator-card-details">
        <summary>設定・計算結果</summary>

        <div class="operator-card-content">
        <div class="operator-build-row">
        <label class="potential-area">
            潜在
            <select class="potential" hidden></select>
        </label>

        <label class="module-area">

        モジュール
        <select class="module"></select>

        </label>

        <label class="module-level-area">

            レベル

            <select class="module-level"></select>

        </label>

        </div>

        <fieldset class="operator-hit-options-area" hidden>
            <legend>攻撃ヒット</legend>
            <div class="hit-count-area">
                <label>
                    攻撃回数
                    <select class="hit-count"></select>
                </label>
            </div>
            <div class="hit-options"></div>
        </fieldset>

        <fieldset class="operator-condition-area" hidden>
            <legend>条件バフ</legend>
            <div class="special-options"></div>
        </fieldset>

        <fieldset class="operator-buff-area" hidden>
            <legend>バフ</legend>
            <div class="single-buff-area"></div>
        </fieldset>

        <div class="operator-calculation-details"></div>
        </div>
        </details>
    `;

    const operatorSelect = card.querySelector(".operator-select");

    const specialOptionsArea = card.querySelector(".special-options");
    const hitOptionsArea = card.querySelector(".hit-options");
    const singleBuffArea = card.querySelector(".single-buff-area");
    const conditionFieldset = card.querySelector(
        ".operator-condition-area"
    );
    const hitOptionsFieldset = card.querySelector(
        ".operator-hit-options-area"
    );
    const buffFieldset = card.querySelector(".operator-buff-area");

    const skillName = card.querySelector(".skill-name");

    const hitCountArea = card.querySelector(".hit-count-area");

    const hitCountSelect = card.querySelector(".hit-count");

    hitCountArea.style.display = "none";

    const potentialSelect = card.querySelector(".potential");

    const moduleArea = card.querySelector(".module-area");
    const moduleSelect = card.querySelector(".module");
    moduleArea.style.display = "none";

    const moduleLevelArea = card.querySelector(".module-level-area");
    const moduleLevelSelect = card.querySelector(".module-level");
    moduleLevelArea.style.display = "none";

    bindCardEvents(
        operatorData,
        card,
        operatorSelect,
        potentialSelect,
        skillName,
        hitCountArea,
        hitCountSelect,
        moduleArea,
        moduleSelect,
        moduleLevelArea,
        moduleLevelSelect,
        specialOptionsArea,
        hitOptionsArea,
        singleBuffArea,
        conditionFieldset,
        hitOptionsFieldset,
        buffFieldset
    );

    return card;
}

export function addOperatorCard(operatorData) {

    const list = document.getElementById("operator-list");

    list.appendChild(
        createOperatorCard(operatorData)
    );

    updateOperator(operatorData);
}

function bindCardEvents(
    operatorData,
    card,
    operatorSelect,
    potentialSelect,
    skillName,
    hitCountArea,
    hitCountSelect,
    moduleArea,
    moduleSelect,
    moduleLevelArea,
    moduleLevelSelect,
    specialOptionsArea,
    hitOptionsArea,
    singleBuffArea,
    conditionFieldset,
    hitOptionsFieldset,
    buffFieldset
) {

    function getCurrentOperator() {

        return operatorData.find(
            op => op.id === operatorSelect.value
        );
    }

    function updateHitCount(operator) {

        hitCountArea.style.display = "none";
        hitCountSelect.innerHTML = "";

        if (!operator?.skill.hitCount) {
            return;
        }

        const hitCount =
            operator.skill.hitCount;

        for (
            let i = hitCount.min;
            i <= hitCount.max;
            i++
        ) {

            hitCountSelect.innerHTML += `
            <option value="${i}">
                ${i}回
            </option>
        `;
        }

        hitCountSelect.value =
            String(hitCount.default);

        hitCountArea.style.display = "";
    }

    function updateHitOptionsVisibility() {
        const hasHitCount = hitCountArea.style.display !== "none";
        const hasHitOptions = hitOptionsArea.innerHTML.trim() !== "";

        hitOptionsFieldset.hidden = !hasHitCount && !hasHitOptions;
    }

    function refreshSpecialOptions() {
        updateOperatorSpecialOptions(
            getCurrentOperator(),
            specialOptionsArea,
            {
                potential: Number(potentialSelect.value || 1),
                moduleName: moduleSelect.value,
                moduleLevel: Number(moduleLevelSelect.value || 0)
            }
        );

        conditionFieldset.hidden =
            specialOptionsArea.innerHTML.trim() === "";
    }

    function refreshHitOptions() {
        updateOperatorHitOptions(
            getCurrentOperator(),
            hitOptionsArea,
            {
                potential: Number(potentialSelect.value || 1),
                moduleName: moduleSelect.value,
                moduleLevel: Number(moduleLevelSelect.value || 0)
            }
        );

        updateHitOptionsVisibility();
    }

    function refreshSingleBuffs() {
        const operator = getCurrentOperator();
        singleBuffArea.innerHTML = "";
        buffFieldset.hidden = true;

        if (!operator || operator.id === "raidian") return;

        const inspirationBuffOptions = inspirationBuffs.map(source => ({
            id: source.buffId,
            name: `${source.name} ${source.skill.name}（鼓舞）`
        }));
        const availableBuffs = [
            ...singleBuffs.filter(
                buff => canApplySingleBuff(buff, operator)
            ),
            ...inspirationBuffOptions
        ];

        singleBuffArea.innerHTML = `
            ${availableBuffs.map(createSingleBuffItem).join("")}
        `;

        bindSingleBuffItems(singleBuffArea);
        buffFieldset.hidden = false;

    }

    function syncHornBuff() {

        const operator =
            getCurrentOperator();

        if (
            !operator ||
            operator.id !== "horn"
        ) {
            return;
        }

        syncHornDefenderBuff(
            Number(potentialSelect.value),
            moduleSelect.value,
            Number(moduleLevelSelect.value || 0)
        );
    }

    operatorSelect.addEventListener("change", () => {

        const operator = getCurrentOperator();

        potentialSelect.hidden = !operator;

        skillName.textContent =
            operator
                ? `スキル：${operator.skill.name}`
                : "";

        updatePotential(
            operator,
            potentialSelect
        );

        updateHitCount(operator);

        updateModule(
            operator,
            moduleArea,
            moduleSelect,
            moduleLevelArea,
            moduleLevelSelect
        );

        refreshSpecialOptions();
        refreshHitOptions();
        refreshSingleBuffs();

        updateOperator(operatorData);

        syncHornBuff();
    });

    potentialSelect.addEventListener("change", () => {

        refreshSpecialOptions();
        refreshHitOptions();
        syncHornBuff();

    });

    moduleSelect.addEventListener("change", () => {

        const operator = getCurrentOperator();

        updateModuleLevel(
            operator,
            moduleSelect.value,
            moduleLevelArea,
            moduleLevelSelect
        );

        refreshSpecialOptions();
        refreshHitOptions();

        syncHornBuff();
    });

    moduleLevelSelect.addEventListener("change", () => {

        refreshSpecialOptions();
        refreshHitOptions();

        syncHornBuff();
    });

    card
        .querySelector(".remove-btn")
        .addEventListener("click", () => {

            card.remove();
            updateOperator(operatorData);

        });
}
