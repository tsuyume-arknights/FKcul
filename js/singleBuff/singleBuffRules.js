export function canApplySingleBuff(buff, operator) {
    if (!buff.targetTags) return true;
    if (!operator) return false;

    return buff.targetTags.some(
        tag => operator.tags?.includes(tag)
    );
}
