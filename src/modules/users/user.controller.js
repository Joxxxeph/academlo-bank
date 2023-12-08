import { catchAsync } from "../../common/errors/catchAsync.js";
import { UserService } from "./user.service.js";
import { validateLogin, validateUser } from "./user.schema.js";
import { AppError } from '../../common/errors/appError.js'
import { generateJWT } from "../../config/plugins/generate-jwt.plugin.js";

export const singUp = catchAsync( async (req, res, next) => {

  const {hasError, errorMessages, userData} = validateUser(req.body)

  if(hasError) {
    return res.status(422).json({
      status: 'error',
      message: errorMessages
    })
  }

  const { name, password } = userData
  const accountNumber = Math.floor(Math.random() * 900000) + 100000
  const user = await UserService.create({name, password, accountNumber})
  const token = await generateJWT(user.id)

  return res.status(201).json({
    token, 
    user: {
      id: user.id,
      name: user.name,
      accountNumber: user.accountNumber
    }})
});

export const login = catchAsync( async (req, res, next) => {
  const { hasError, errorMessages, userData } = validateLogin(req.body)

  if (hasError) {
    return res.status(400).json({
      status: 'error',
      message: errorMessages,
    });
  }
    const user = await UserService.findOneAccount(userData.accountNumber)

    if(!user){
      return next(new AppError('This account does not exist jajja', 404))
    }
 
    return res.status(200).json({
      message: 'Are u logged'
    })

  
});

export const getHistory = async (req, res) => {
  try {
  } catch (error) {
    return res.status(500).json({
      status: 'fail',
      message: 'Internal error',
      error,
    });
  }
};
