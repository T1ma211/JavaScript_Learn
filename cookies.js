export const checkLS = () => {
    if (localStorage.getItem('w')) return true;
        return false;
}
export const ShowMess = text => {
    return `${text}! message not found`;
}