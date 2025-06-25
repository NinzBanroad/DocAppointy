import jwt from 'jsonwebtoken';

//user authentication middleware
const authUser = async (req, res, next) => {
  try {
    //Get token from header
    const userToken = req.header('userToken');

    //check if token is provided
    if (!userToken) {
      return res.json({
        success: false,
        message: 'No token provided, authorization denied',
      });
    }

    const decoded = jwt.verify(userToken, process.env.JWT_SECRET);

    const { id } = decoded;
    req.body = {
      ...req.body,
      userId: id,
    };

    next();
  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      message: error.message,
    });
  }
};

export default authUser;
