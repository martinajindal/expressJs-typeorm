
export const LoggerMidleware = async (req, res, next) => {
    console.log(`Logged  ${req.url}  ${req.method} -- ${new Date()}`)
    return next();
}