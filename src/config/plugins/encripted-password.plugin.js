import bcrypt from 'bcryptjs'

export const encryptedPassword = async (password) => {
    const salt = await bcrypt.genSalt(12)
    return await bcrypt.hash(password, salt)
}