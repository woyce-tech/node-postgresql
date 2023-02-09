const { RESPONSE_STATUS, MESSAGES } = require('../../constants/response_status');
const db = require('../../utils/db_manager');

exports.addStudent = async (params) => {
  try {
    const { sid } = params;
    if (!sid) {
      return { status: RESPONSE_STATUS.FAIL, message: MESSAGES.COMMON.INVALID_PARAMETERS };
    }
    const { rows } = await db.query('select id, name, type from students where id = $1;', [sid]);

    return {
      status: RESPONSE_STATUS.SUCCESS,
      data: rows,
    };
  } catch (error) {
    return {
      status: RESPONSE_STATUS.ERROR,
      message: error.message,
    };
  }
};
