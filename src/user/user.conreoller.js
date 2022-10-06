const { userData } = require("../data/users");
exports.userList = async (req, res) => {
    const data = userData.filter(eachName => eachName.name.toLocaleLowerCase() == req.query?.name?.toLocaleLowerCase());
    const age = userData.filter(eachAge => eachAge.age == req.query?.age_lt);
    console.log("data", data);
    if (data.length) {
        return res.json(data);
    }
    if (age.length) {
        return res.json(age);
    }
    else {
        return res.json(userData);
    }
}
exports.userDetail = async (req, res) => {
    console.log(req.params.id);
    const data = userData.find(eachItem => eachItem.id == req.params.id)
    return res.json(data);
}
