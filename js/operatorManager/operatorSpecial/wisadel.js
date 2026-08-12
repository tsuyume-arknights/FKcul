export function getWisadelHitMultiplier(
    hit,
    {
        potential,
        moduleName,
        moduleLevel
    }
) {
    if (hit.id !== "talent") {
        return hit.multiplier;
    }

    let multiplier = hit.multiplier;

    if (moduleName === "X" && moduleLevel >= 2) {
        multiplier = moduleLevel >= 3 ? 175 : 170;
    }

    if (potential >= 5) {
        multiplier += 10;
    }

    return multiplier;
}

export function updateWisadelHitOptions(
    area,
    { previousOptions = {} }
) {
    const normalHit = previousOptions.normalHit ?? true;
    const subHit = previousOptions.subHit ?? true;
    const talentHit = previousOptions.talentHit ?? true;

    area.innerHTML = `
        <label>
            <input
                type="checkbox"
                class="wisadel-normal-hit"
                ${normalHit ? "checked" : ""}
            >
            主震
        </label>
        <label>
            <input
                type="checkbox"
                class="wisadel-sub-hit"
                ${subHit ? "checked" : ""}
            >
            余震
        </label>
        <label>
            <input
                type="checkbox"
                class="wisadel-talent-hit"
                ${talentHit ? "checked" : ""}
            >
            素質
        </label>
    `;
}

export function getWisadelOptions(card) {
    return {
        normalHit: card.querySelector(
            ".wisadel-normal-hit"
        )?.checked ?? true,
        subHit: card.querySelector(
            ".wisadel-sub-hit"
        )?.checked ?? false,
        talentHit: card.querySelector(
            ".wisadel-talent-hit"
        )?.checked ?? false
    };
}

export function isWisadelHitEnabled(
    hit,
    { specialOptions }
) {
    switch (hit.id) {
        case "normal":
            return specialOptions.normalHit !== false;

        case "sub_1":
        case "sub_2":
            return specialOptions.subHit !== false;

        case "talent":
            return specialOptions.talentHit !== false;

        default:
            return true;
    }
}
