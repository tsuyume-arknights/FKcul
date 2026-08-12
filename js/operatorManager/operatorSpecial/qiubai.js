export function updateQiubaiHitOptions(
    area,
    {
        moduleName,
        previousOptions = {}
    }
) {
    if (moduleName !== "X") return;

    const enabled = previousOptions.moduleArtsHit ?? false;

    area.innerHTML = `
        <label>
            <input
                type="checkbox"
                class="qiubai-module-arts-hit"
                ${enabled ? "checked" : ""}
            >
            追加術ダメージ
        </label>
    `;
}

export function getQiubaiOptions(card) {
    return {
        moduleArtsHit: card.querySelector(
            ".qiubai-module-arts-hit"
        )?.checked ?? false
    };
}

export function isQiubaiHitEnabled(
    hit,
    { specialOptions }
) {
    if (hit.module?.name !== "X") return true;

    return specialOptions.moduleArtsHit === true;
}
