export function check_auth(cb) {
    var token = localStorage.getItem('validToken');
    var customerData = JSON.parse(localStorage.getItem('customerData'));
    return (token && customerData) ? cb(true, token, customerData) : cb(false);
};
export function setLocalStorage(key, value) {
    var token = localStorage.setItem(key, value);
};
export function clearSession() {
    localStorage.removeItem('validToken');
    localStorage.removeItem('customerData');
};
export function getCustomerData(cb) {
    var customerData = JSON.parse(localStorage.getItem('customerData'));
    return (customerData) ? cb(true, customerData) : cb(false);
}