function editElement(ref, match, replacer) {
    const content = ref.textContent;
    const matcher = new RegExp(match, `g`);
    const edit = content.replace(matcher, replacer);
    ref.textContent = edit;
}