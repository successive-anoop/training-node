import CodeMessage from './CodeMessages';
import StatusCodes from './StatusCodes';

class SystemResponse {

  static getInstance() {
    return new SystemResponse();
  }

  /**
   * This method gets message, error, and code as parameters and returns the formatted object for the error response.
   * @property {String} message Custom error message.
   * @property {String} error Custom error given.
   * @property {Int} code Error Response Code as per error type.
   * @returns {Object} Formatted object having message custom or as per code, status and error.
   */
   getErrorResponse(message, error, code) {
    return {
      message: message || CodeMessage[code],
      status: code,
      error: error || {},
    }
  }

 /**
   * This method gets the message and code as parameters and returns the formatted object.
   * @property {String} message Custom info message.
   * @property {Int} code  Response Code as per informational type.
   * @returns {Object} Formatted object having message, status.
   */
   getResponse(message, code) {
    return {
      message : message || CodeMessage[code],
      status: code
    }
  }

  //1xx Informational
  /**
   * This method gets message as paramter and returns the formatted object.
   * @param {String} message Custom informational message.
   * @returns {Object} Formatted object having message and status.
   */
  static continueInfo(message) {
      return SystemResponse.getInstance().getResponse(message, StatusCodes.CONTINUE);
  }
  /**
   * This method gets message as paramter and returns the formatted object.
   * @param {String} message Custom informational message.
   * @returns {Object} Formatted object having message and status.
   */
  static switchingProtocolsInfo(message) {
    return SystemResponse.getInstance().getResponse(message, StatusCodes.SWITCHING_PROTOCOLS);
  }
  
  // 2xx Successful
  /**
   * This method gets message as paramter and returns the formatted object.
   * @param {String} message Custom success message.
   * @returns {Object} Formatted object having message, data and status.
   */
  static success(message, data) {
    return {
      message: message || CodeMessage[StatusCodes.SUCCESS],
      status: StatusCodes.SUCCESS,
      data: data || {},
    }
  }

  // 3xx RedirectionErrors
  /**
   * This method gets message as parameter and returns the formatted object.
   * @param {String} message Custom rediractional message.
   * @returns {Object} Formatted object having message and status.
   */
  static multipleChoicesRedirect(message) {
    return SystemResponse.getInstance().getResponse(message, StatusCodes.MIULTIPLE_CHOICES);
  }
  /**
   * This method gets message as parameter and returns the formatted object.
   * @param {String} message Custom rediractional message.
   * @returns {Object} Formatted object having message and status.
   */
  static movedPermanentlyRedirect(message) {
    return SystemResponse.getInstance().getResponse(message, StatusCodes.MOVED_PERMANENTLY);
  }
  /**
   * This method gets message as parameter and returns the formatted object.
   * @param {String} message Custom rediractional message.
   * @returns {Object} Formatted object having message and status.
   */
  static foundRedirect(message) {
    return SystemResponse.getInstance().getResponse(message, StatusCodes.FOUND);
  }
  /**
   * This method gets message as parameter and returns the formatted object.
   * @param {String} message Custom rediractional message.
   * @returns {Object} Formatted object having message and status.
   */
  static seeOtherRedirect(message) {
    return SystemResponse.getInstance().getResponse(message, StatusCodes.SEE_OTHER);
  }
  /**
   * This method gets message as parameter and returns the formatted object.
   * @param {String} message Custom redirectional message.
   * @returns {Object} Formatted object having message and status.
   */
  static notModifiedRedirect(message) {
    return SystemResponse.getInstance().getResponse(message, StatusCodes.NOT_MODIFIED);
  }
  /**
   * This method gets message as parameter and returns the formatted object.
   * @param {String} message Custom redirectional message.
   * @returns {Object} Formatted object having message and status.
   */
  static useProxyRedirect(message) {
    return SystemResponse.getInstance().getResponse(message, StatusCodes.USE_PROXY);
  }
  /**
   * This method gets message as parameter and returns the formatted object.
   * @param {String} message Custom redirectional message.
   * @returns {Object} Formatted object having message and status.
   */
  static temporaryRedirect(message) {
    return SystemResponse.getInstance().getResponse(message, StatusCodes.TEMPORARY_REDIRECT);
  }
  
  // 4xx Client Errors
  /**
   * This method gets message and error as parameter and returns the formatted object.
   * @param {String} message Custom error message.
   * @param {String} error message
   * @returns {Object} Formatted object having message, status and error.
   */
  static badRequestError(message, error) {
    return SystemResponse.getInstance().getErrorResponse(message, error, StatusCodes.BAD_REQUEST);
  }
  /**
   * This method gets message and error as parameter and returns the formatted object.
   * @param {String} message Custom error message.
   * @returns {Object} Formatted object having message, status and error.
   */
  static unauthorizedError(message, error) {
    return SystemResponse.getInstance().getErrorResponse(message, error, StatusCodes.UNAUTHORIZED);
  }
  /**
   * This method gets message and error as parameter and returns the formatted object.
   * @param {String} message Custom error message.
   * @returns {Object} Formatted object having message, status and error.
   */
  static paymentRequiredError(message, error) {
    return SystemResponse.getInstance().getErrorResponse(message, error, StatusCodes.PAYMENT_REQUIRED);
  }
  /**
   * This method gets message and error as parameter and returns the formatted object.
   * @param {String} message Custom error message.
   * @returns {Object} Formatted object having message, status and error.
   */
  static forbiddenError(message, error) {
    return SystemResponse.getInstance().getErrorResponse(message, error, StatusCodes.FORBIDDEN);
  }
  /**
   * This method gets message and error as parameter and returns the formatted object.
   * @param {String} message Custom error message.
   * @returns {Object} Formatted object having message, status and error.
   */
  static notFoundError(message, error) {
    return SystemResponse.getInstance().getErrorResponse(message, error, StatusCodes.NOT_FOUND);
  }
  /**
   * This method gets message and error as parameter and returns the formatted object.
   * @param {String} message Custom error message.
   * @returns {Object} Formatted object having message, status and error.
   */
  static methodNotAllowedError(message, error) {
    return SystemResponse.getInstance().getErrorResponse(message, error, StatusCodes.METHOD_NOT_ALLOWED);
  }
  /**
   * This method gets message and error as parameter and returns the formatted object.
   * @param {String} message Custom error message.
   * @returns {Object} Formatted object having message, status and error.
   */
  static notAcceptableError(message, error) {
    return SystemResponse.getInstance().getErrorResponse(message, error, StatusCodes.NOT_ACCEPTABLE);
  }
  static proxyAuthRequiredError(message, error) {
    return SystemResponse.getInstance().getErrorResponse(message, error, StatusCodes.PROXY_AUTHENTICATION_REQUIRED);
  }
  /**
   * This method gets message and error as parameter and returns the formatted object.
   * @param {String} message Custom error message.
   * @returns {Object} Formatted object having message, status and error.
   */
  static requestTimeoutError(message, error) {
    return SystemResponse.getInstance().getErrorResponse(message, error, StatusCodes.REQUEST_TIMEOUT);
  }
  /**
   * This method gets message and error as parameter and returns the formatted object.
   * @param {String} message Custom error message.
   * @returns {Object} Formatted object having message, status and error.
   */
  static conflictError(message, error) {
    return SystemResponse.getInstance().getErrorResponse(message, error, StatusCodes.CONFLICT);
  }
  /**
   * This method gets message and error as parameter and returns the formatted object.
   * @param {String} message Custom error message.
   * @returns {Object} Formatted object having message, status and error.
   */
  static goneError(message, error) {
    return SystemResponse.getInstance().getErrorResponse(message, error, StatusCodes.GONE);
  }
  /**
   * This method gets message and error as parameter and returns the formatted object.
   * @param {String} message Custom error message.
   * @returns {Object} Formatted object having message, status and error.
   */
  static lengthRequiredError(message, error) {
    return SystemResponse.getInstance().getErrorResponse(message, error, StatusCodes.LENGTH_REQUIRED);
  }
  /**
   * This method gets message and error as parameter and returns the formatted object.
   * @param {String} message Custom error message.
   * @returns {Object} Formatted object having message, status and error.
   */
  static preconditionFailedError(message, error) {
    return SystemResponse.getInstance().getErrorResponse(message, error, StatusCodes.PRECONDITION_FAILED);
  }
  /**
   * This method gets message and error as parameter and returns the formatted object.
   * @param {String} message Custom error message.
   * @returns {Object} Formatted object having message, status and error.
   */
  static requestEntityTooLargeError(message, error) {
    return SystemResponse.getInstance().getErrorResponse(message, error, StatusCodes.REQUEST_ENTITY_TOO_LARGE);
  }
  /**
   * This method gets message and error as parameter and returns the formatted object.
   * @param {String} message Custom error message.
   * @returns {Object} Formatted object having message, status and error.
   */
  static requestUriTooLongError(message, error) {
    return SystemResponse.getInstance().getErrorResponse(message, error, StatusCodes.REQUEST_ENTITY_TOO_LARGE);
  }
  /**
   * This method gets message and error as parameter and returns the formatted object.
   * @param {String} message Custom error message.
   * @returns {Object} Formatted object having message, status and error.
   */
  static unsupportedMediaTypeError(message, error) {
    return SystemResponse.getInstance().getErrorResponse(message, error, StatusCodes.UNSUPPORTED_MEDIA_TYPE);
  }
  /**
   * This method gets message and error as parameter and returns the formatted object.
   * @param {String} message Custom error message.
   * @returns {Object} Formatted object having message, status and error.
   */
  static rangeNotSatisfiableError(message, error) {
    return SystemResponse.getInstance().getErrorResponse(message, error, StatusCodes.REQUESTED_RANGE_NOT_SATISFIABLE);
  }
  /**
   * This method gets message and error as parameter and returns the formatted object.
   * @param {String} message Custom error message.
   * @returns {Object} Formatted object having message, status and error.
   */
  static expectationFailedError(message, error) {
    return SystemResponse.getInstance().getErrorResponse(message, error, StatusCodes.EXPECTATION_FAILED);
  }
  /**
   * This method gets message and error as parameter and returns the formatted object.
   * @param {String} message Custom error message.
   * @returns {Object} Formatted object having message, status and error.
   */
  static unprocessableEntityError(message, error) {
    return SystemResponse.getInstance().getErrorResponse(message, error, StatusCodes.UNPROCESSABLE_ENTITY);
  }

  // 5xx Server Errors
  /**
   * This method gets message and error as parameter and returns the formatted object.
   * @param {String} message Custom error message.
   * @returns {Object} Formatted object having message, status and error.
   */
  static internalServerError(message, error) {
    return SystemResponse.getInstance().getErrorResponse(message, error, StatusCodes.INTERNAL_SERVER_ERROR);
  }
  /**
   * This method gets message and error as parameter and returns the formatted object.
   * @param {String} message Custom error message.
   * @returns {Object} Formatted object having message, status and error.
   */
  static notImplementedError(message, error) {
    return SystemResponse.getInstance().getErrorResponse(message, error, StatusCodes.NOT_IMPLEMENTED);
  }
  /**
   * This method gets message and error as parameter and returns the formatted object.
   * @param {String} message Custom error message.
   * @returns {Object} Formatted object having message, status and error.
   */
  static badGatewayError(message, error) {
    return SystemResponse.getInstance().getErrorResponse(message, error, StatusCodes.BAD_GATEWAY);
  }
  /**
   * This method gets message and error as parameter and returns the formatted object.
   * @param {String} message Custom error message.
   * @returns {Object} Formatted object having message, status and error.
   */
  static serviceUnavailableError(message, error) {
    return SystemResponse.getInstance().getErrorResponse(message, error, StatusCodes.SERVICE_UNAVAILABLE);
  }
  /**
   * This method gets message and error as parameter and returns the formatted object.
   * @param {String} message Custom error message.
   * @returns {Object} Formatted object having message, status and error.
   */
  static gatewayTimeoutError(message, error) {
    return SystemResponse.getInstance().getErrorResponse(message, error, StatusCodes.GATEWAY_TIME_OUT);
  }
  /**
   * This method gets message and error as parameter and returns the formatted object.
   * @param {String} message Custom error message.
   * @returns {Object} Formatted object having message, status and error.
   */
  static httpVersionNotSupportedError(message, error) {
    return SystemResponse.getInstance().getErrorResponse(message, error, StatusCodes.HTTP_VERSION_NOT_SUPPORTED);
  }
}

export default SystemResponse;
