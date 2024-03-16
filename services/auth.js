const sessionIdUSerMap = new Map();

function setUser(id, user) {
    sessionIdUSerMap.set(id, user);
}

function getUser(id) {
    return sessionIdUSerMap.get(id);
}

module.exports = {
    setUser,
    getUser
}  // Export the setUser and getUser functions so that it can be used in other files.