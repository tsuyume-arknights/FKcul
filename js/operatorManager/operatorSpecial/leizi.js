export function updateLeiziHitOptions(
    area,
    { previousOptions = {} }
) {
    const normalHit = previousOptions.normalHit ?? true;
    const thunderHit = previousOptions.thunderHit ?? false;

    area.innerHTML = `
        <label>
            <input
                type="checkbox"
                class="leizi-normal-hit"
                ${normalHit ? "checked" : ""}
            >
            通常
        </label>
        <label>
            <input
                type="checkbox"
                class="leizi-thunder-hit"
                ${thunderHit ? "checked" : ""}
            >
            落雷
        </label>
    `;
}

export function getLeiziOptions(card) {
    return {
        normalHit: card.querySelector(
            ".leizi-normal-hit"
        )?.checked ?? true,
        thunderHit: card.querySelector(
            ".leizi-thunder-hit"
        )?.checked ?? false
    };
}

export function isLeiziHitEnabled(
    hit,
    { specialOptions }
) {
    switch (hit.id) {
        case "normal":
            return specialOptions.normalHit !== false;

        case "thunder":
            return specialOptions.thunderHit === true;

        default:
            return true;
    }
}
