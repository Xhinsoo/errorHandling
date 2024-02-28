class AppError extends Error { //its extending the default error handler
  constructor(message, status) {
    super();
    this.message = message;
    //the default express error handler looks for .status/ statusCode property. IF it finds, it will respond with its value
    //that why we add .property value in this class
    this.status = status;
  }
}

module.exports = AppError;