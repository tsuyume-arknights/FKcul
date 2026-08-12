import {
    calculateBlazeEffects,
    getBlazeIgnoreDef,
    getBlazeOptions,
    updateBlazeOptions
} from "./blaze.js";
import {
    calculateUlpianusEffects,
    getUlpianusOptions,
    isUlpianusHitEnabled,
    updateUlpianusHitOptions,
    updateUlpianusOptions
} from "./ulpianus.js";
import {
    calculateLemuenEffects,
    getLemuenHitMultiplier,
    getLemuenOptions,
    updateLemuenOptions
} from "./lemuen.js";
import {
    calculateFirewatchEffects,
    getFirewatchOptions,
    updateFirewatchOptions
} from "./firewatch.js";
import {
    calculateRaidianDamageSourceDetails,
    calculateRaidianEffects
} from "./raidian.js";
import {
    getQiubaiOptions,
    isQiubaiHitEnabled,
    updateQiubaiHitOptions
} from "./qiubai.js";
import {
    calculatePhantomEffects,
    getPhantomOptions,
    updatePhantomOptions
} from "./phantom.js";
import {
    getWisadelHitMultiplier,
    getWisadelOptions,
    isWisadelHitEnabled,
    updateWisadelHitOptions
} from "./wisadel.js";
import {
    getLeiziOptions,
    isLeiziHitEnabled,
    updateLeiziHitOptions
} from "./leizi.js";

const specialCalculators = {
    blaze: calculateBlazeEffects,
    firewatch: calculateFirewatchEffects,
    lemuen: calculateLemuenEffects,
    Phantom: calculatePhantomEffects,
    raidian: calculateRaidianEffects,
    ulpianus: calculateUlpianusEffects
};

export function calculateOperatorSpecialEffects(
    operator,
    context
) {
    const calculator = specialCalculators[operator.id];

    return calculator
        ? calculator(context)
        : {};
}

const specialIgnoreDefCalculators = {
    blaze: getBlazeIgnoreDef
};

export function calculateOperatorSpecialIgnoreDef(
    operator,
    context
) {
    const calculator = specialIgnoreDefCalculators[operator.id];

    return calculator
        ? calculator(context)
        : 0;
}

const specialHitMultiplierCalculators = {
    lemuen: getLemuenHitMultiplier,
    wisadel: getWisadelHitMultiplier
};

export function calculateOperatorHitMultiplier(
    operator,
    hit,
    context
) {
    const calculator = specialHitMultiplierCalculators[operator.id];

    return calculator
        ? calculator(hit, context)
        : hit.multiplier;
}

const hitEnabledCalculators = {
    leizi_the_thunderbringer: isLeiziHitEnabled,
    qiubai: isQiubaiHitEnabled,
    ulpianus: isUlpianusHitEnabled,
    wisadel: isWisadelHitEnabled
};

export function isOperatorHitEnabled(
    operator,
    hit,
    context
) {
    const calculator = hitEnabledCalculators[operator.id];

    return calculator
        ? calculator(hit, context)
        : true;
}

const damageSourceCalculators = {
    raidian: calculateRaidianDamageSourceDetails
};

export function calculateOperatorDamageSourceDetails(
    operator,
    context
) {
    const calculator = damageSourceCalculators[operator.id];

    return calculator
        ? calculator(context)
        : null;
}

const specialOptionRenderers = {
    blaze: updateBlazeOptions,
    firewatch: updateFirewatchOptions,
    lemuen: updateLemuenOptions,
    Phantom: updatePhantomOptions,
    ulpianus: updateUlpianusOptions
};

const hitOptionRenderers = {
    leizi_the_thunderbringer: updateLeiziHitOptions,
    qiubai: updateQiubaiHitOptions,
    ulpianus: updateUlpianusHitOptions,
    wisadel: updateWisadelHitOptions
};

const specialOptionGetters = {
    blaze: getBlazeOptions,
    firewatch: getFirewatchOptions,
    lemuen: getLemuenOptions,
    leizi_the_thunderbringer: getLeiziOptions,
    Phantom: getPhantomOptions,
    qiubai: getQiubaiOptions,
    ulpianus: getUlpianusOptions,
    wisadel: getWisadelOptions
};

export function updateOperatorSpecialOptions(
    operator,
    area,
    context
) {
    const previousOptions = operator
        ? getOperatorSpecialOptions(operator, area.closest(".operator-card"))
        : {};

    area.innerHTML = "";

    if (!operator) return;

    const renderOptions = specialOptionRenderers[operator.id];

    if (renderOptions) {
        renderOptions(area, {
            ...context,
            previousOptions
        });
    }
}

export function updateOperatorHitOptions(
    operator,
    area,
    context
) {
    const previousOptions = operator
        ? getOperatorSpecialOptions(operator, area.closest(".operator-card"))
        : {};

    area.innerHTML = "";

    if (!operator) return;

    const renderOptions = hitOptionRenderers[operator.id];

    if (renderOptions) {
        renderOptions(area, {
            ...context,
            previousOptions
        });
    }
}

export function getOperatorSpecialOptions(operator, card) {
    if (!operator) return {};

    const getOptions = specialOptionGetters[operator.id];

    return getOptions
        ? getOptions(card)
        : {};
}
