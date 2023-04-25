const filterDesc = (desc) => {
    if (desc.length < 27) {
        return desc;
    }
    return `${desc.substring(0, 23)}...`;
}

export { filterDesc }