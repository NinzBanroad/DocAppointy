import jwt from 'jsonwebtoken';

//admin authentication middleware
const authAdmin = async (req, res, next) => {
  try {
    //Get token from header
    const adminToken = req.header('adminToken');

    //check if token is provided
    if (!adminToken) {
      return res.json({
        success: false,
        message: 'No token provided, authorization denied',
      });
    }

    const decoded = jwt.verify(adminToken, process.env.JWT_SECRET);
    if (!decoded) {
      return res.json({
        success: false,
        message: 'Invalid token, authorization denied',
      });
    }

    next();
  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      message: error.message,
    });
  }
};

export default authAdmin;
