export const truncate = (str, MAX = 20) => {
    return str.length > MAX ? `${str.substr(0, MAX)}...` : str
}
