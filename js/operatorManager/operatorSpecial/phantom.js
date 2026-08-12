export function updatePhantomOptions(
    area,
    {
        moduleName,
        previousOptions = {}
    }
) {
    if (moduleName !== "Y") return;

    const noAdjacentAllies =
        previousOptions.noAdjacentAllies ?? true;

    area.innerHTML = `
        <label>
            <input
                type="checkbox"
                class="phantom-no-adjacent-allies"
                ${noAdjacentAllies ? "checked" : ""}
            >
            隣接4マス内に味方がいない
        </label>
    `;
}

export function getPhantomOptions(card) {
    return {
        noAdjacentAllies: card.querySelector(
            ".phantom-no-adjacent-allies"
        )?.checked ?? true
    };
}

export function calculatePhantomEffects({
    moduleName,
    specialOptions
}) {
    if (
        moduleName !== "Y" ||
        !specialOptions.noAdjacentAllies
    ) {
        return {};
    }

    return { atkAdd: 10 };
}
