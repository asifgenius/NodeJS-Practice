const { userData } = require("../data/users");
exports.userList = async (req, res) => {
    const data = userData.filter(eachName => eachName.name.toLocaleLowerCase() == req.query?.name?.toLocaleLowerCase());
    const age = userData.filter(eachAge => eachAge.age >= req.query?.age_lt);
    const age_gt = age.filter(eachAge_gt => eachAge_gt.age <= req.query?.age_gt);
    if (data.length) {
        return res.json(data);
    }
    if (age_gt.length) {
        return res.json(age_gt);
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
