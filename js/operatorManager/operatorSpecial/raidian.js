const CYGA_BASE_ATK = 773;
const SKILL_ATK_ADD = 80;

export function calculateRaidianEffects() {
    return {
        disableExternalBuffs: true
    };
}

export function calculateRaidianDamageSourceDetails({
    potential,
    attackDetails
}) {
    const inspirationRate = potential >= 5 ? 15 : 12;
    const inspirationAtk = (
        attackDetails.finalAtk * inspirationRate / 100
    );
    const finalAtk = (
        CYGA_BASE_ATK * (1 + SKILL_ATK_ADD / 100)
        + inspirationAtk
    );

    return {
        name: "サイガ",
        baseAtk: CYGA_BASE_ATK,
        atkAdd: SKILL_ATK_ADD,
        inspirationRate,
        inspirationAtk,
        finalAtk
    };
}
