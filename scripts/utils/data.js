export async function getData(path, subset) {
    return fetch(path)
        .then((response) => response.json())
        .then((data) => {
            return data[subset];
        })
}