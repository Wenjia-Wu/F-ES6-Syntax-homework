export {parseData};

const parseData = input => {
    const {data, column} = input;
    const key = column.map(x => x.name);
    return data.map(function (x) {
        let output = {};
        for (const [index, element] of key.entries()) {
            output[element] = x[index]
        }
        return output;
    })
}