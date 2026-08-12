export function updateUlpianusOptions(
    area,
    { potential, previousOptions = {} }
) {

    const maxKills =
        potential >= 5
            ? 10
            : 9;

    const selectedKills = Math.min(
        previousOptions.killCount ?? maxKills,
        maxKills
    );

    area.innerHTML = `
        <label>
            撃破数

            <select class="ulpianus-kill-count">

                ${Array
                    .from(
                        { length: maxKills + 1 },
                        (_, i) => `
                            <option
                                value="${i}"
                                ${i === selectedKills
                                    ? "selected"
                                    : ""
                                }
                            >
                                ${i}
                            </option>
                        `
                    )
                    .join("")
                }

            </select>
        </label>
    `;
}

export function updateUlpianusHitOptions(
    area,
    { previousOptions = {} }
) {
    const normalHit = previousOptions.normalHit ?? true;
    const silverashS3Hit = previousOptions.silverashS3Hit ?? false;

    area.innerHTML = `
        <label>
            <input
                type="checkbox"
                class="ulpianus-normal-hit"
                ${normalHit ? "checked" : ""}
            >
            通常
        </label>
        <label>
            <input
                type="checkbox"
                class="ulpianus-silverash-s3-hit"
                ${silverashS3Hit ? "checked" : ""}
            >
            真銀斬
        </label>
    `;
}

export function getUlpianusOptions(card) {
    return {
        killCount: Number(
            card.querySelector(".ulpianus-kill-count")?.value || 0
        ),
        normalHit: card.querySelector(
            ".ulpianus-normal-hit"
        )?.checked ?? true,
        silverashS3Hit: card.querySelector(
            ".ulpianus-silverash-s3-hit"
        )?.checked ?? false
    };
}

export function isUlpianusHitEnabled(
    hit,
    { specialOptions }
) {
    switch (hit.id) {
        case "normal":
            return specialOptions.normalHit !== false;

        case "silverash_s2":
            return specialOptions.silverashS3Hit === true;

        default:
            return true;
    }
}

export function calculateUlpianusEffects({
    potential,
    specialOptions = {}
}) {
    const maxKills = potential >= 5 ? 10 : 9;
    const killCount = Math.min(
        Math.max(Number(specialOptions.killCount) || 0, 0),
        maxKills
    );

    return {
        baseAtkFlat: killCount * 30
    };
}
