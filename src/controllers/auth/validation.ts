import { isValidEmail, isValidObjectId } from '../../libs/utilities';

export default Object.freeze({
  // POST /api/homes/create
  
  login: {
    email: {
      custom: {
        options: (emailId: string) => {
          return isValidEmail(emailId);
        },
      },
      errorMessage: 'email incorrect!',
      in: ['body'],
      isLength: {
        errorMessage: 'too short email address',
        // Multiple options would be expressed as an array
        options: { min: 4 },
      },
      
    },
    password: {
      errorMessage: 'Password is wrong!',
      in: ['body'],
      isLength: {
        errorMessage: 'Wrong Password',
        // Multiple options would be expressed as an array
        options: { min: 4 },
      },
    },
  },
});
