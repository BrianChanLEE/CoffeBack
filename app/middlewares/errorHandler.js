// const {
//   BadRequestException,
//   NotFoundException,
// } = require("@/domain/exceptions");

// const errorHandler = (err, req, res, _next) => {
//   const obj = {
//     debug: true,
//     code: 500,
//     message: err.message,
//     user: undefined,
//   };
//   if (process.env.NODE_ENV === "production") {
//     delete obj.debug;
//     delete obj.stack;
//   } else {
//     obj.user = req.user;
//   }

//   if (err instanceof BadRequestException) {
//     obj.code = 400;
//     return res.status(200).json(obj);
//   } else if (err instanceof NotFoundException) {
//     obj.code = 404;
//     return res.status(obj.code).json(obj);
//   } else {
//     console.error(err);
//     return res.status(obj.code).json(obj);
//   }
// };

// export default errorHandler;
