const { userData } = require("../data/users");
exports.userList = async (req, res) => {
    if(req.query?.age_lt && req.query?.age_gt) {
        const result = userData.filter(eachAge => eachAge.age <= req.query?.age_lt && eachAge.age >= req.query?.age_gt );
        return res.json(result);
    }

    else if(req.query?.age_lt) {
        const result = userData.filter(eachAge => eachAge.age <= req.query?.age_lt);
        return res.json(result);
    }

    else if(req.query?.age_gt) {
        const result = userData.filter(eachAge => eachAge.age >= req.query?.age_gt);
        return res.json(result);
    }

    else if(req.query?.name) {
        const result = userData.filter(eachName => eachName.name.toLocaleLowerCase() == req.query?.name?.toLocaleLowerCase());
        return res.json(result);
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
