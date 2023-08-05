const User = require("../models/User");

//getAllUsers
exports.getAllUsers = async (filter, { skip, limit, page }, options) => {
  const users = await User.find(filter, options).skip(skip).limit(limit);
  const count = await User.countDocuments();
  return {
    users,
    pagination: {
      totalPage: Math.ceil(count / limit),
      currentPage: page,
      prevPage: page - 1 > 0 ? page - 1 : null,
      nextPage: page + 1 <= Math.ceil(count / limit) ? page + 1 : null,
    },
  };
};

//singupUser
exports.singupUser = async (userSignupInfo) => {
  console.log(userSignupInfo);
  return await User.create(userSignupInfo);
};
