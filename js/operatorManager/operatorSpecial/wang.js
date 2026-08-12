function getLinkedStoneCount(specialOptions = {}) {
    return Math.min(Math.max(Number(specialOptions.linkedStoneCount) || 3, 2), 3);
}

function getTalentValues({ potential, moduleName, moduleLevel }) {
    let damageIncrease = 10;
    let resIgnore = 9;

    if (moduleName === "X" && moduleLevel >= 2) {
        damageIncrease = moduleLevel >= 3 ? 13 : 12;
        resIgnore = moduleLevel >= 3 ? 12 : 11;
    }

    if (potential >= 5) {
        damageIncrease += 2;
        resIgnore += 1;
    }

    return { damageIncrease, resIgnore };
}

export function updateWangOptions(area, { previousOptions = {} }) {
    const linkedStoneCount = previousOptions.linkedStoneCount ?? 3;

    area.innerHTML = `
        <label class="wang-linked-stone-count-area">
            連結数
            <select class="wang-linked-stone-count">
                ${[2, 3].map(count => `
                    <option value="${count}"
                        ${Number(linkedStoneCount) === count ? "selected" : ""}>
                        ${count}
                    </option>
                `).join("")}
            </select>
        </label>
    `;
}

export function getWangOptions(card) {
    return {
        linkedStoneCount: Number(card.querySelector(
            ".wang-linked-stone-count"
        )?.value ?? 3)
    };
}

export function getWangDamageMultiplier(context) {
    const count = getLinkedStoneCount(context.specialOptions);
    return 1 + getTalentValues(context).damageIncrease * count / 100;
}

export function getWangIgnoreRes(context) {
    const count = getLinkedStoneCount(context.specialOptions);
    return getTalentValues(context).resIgnore * count;
}
