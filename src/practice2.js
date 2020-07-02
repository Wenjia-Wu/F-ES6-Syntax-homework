export {inject};

const inject = (items, sections) => {
    const inputItems = items.concat();
    for (let element of sections) {
        items.splice(items.indexOf(inputItems[element.index]), 0, element.content)
    }
    return items;
}
