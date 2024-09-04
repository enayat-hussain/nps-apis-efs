const moment = require("moment");
// export NODE_PATH=/mnt/efs/node_modules

module.exports.hello = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "You just hit your hello worlds lambda!!",
        date: moment().toString(),
        success: true,
      },
      null,
      2
    ),
  };
};
