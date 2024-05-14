import { body, param } from 'express-validator';

const validateCreateTransaction = [
  body('user')
    .notEmpty()
    .withMessage('User ID is required')
    .isMongoId()
    .withMessage('User ID must be a valid MongoDB Object ID'),

  body('product')
    .notEmpty()
    .withMessage('Product ID is required')
    .isMongoId()
    .withMessage('Product ID must be a valid MongoDB Object ID'),

  body('payment')
    .notEmpty()
    .withMessage('Payment ID is required')
    .isMongoId()
    .withMessage('Payment ID must be a valid MongoDB Object ID'),

  body('transactionDate')
    .optional()
    .isISO8601()
    .toDate()
    .withMessage('Transaction date must be a valid date')
];


const validateUpdateTransaction = [
  body('user')
    .optional()
    .isMongoId()
    .withMessage('User ID must be a valid MongoDB Object ID'),

  body('product')
    .optional()
    .isMongoId()
    .withMessage('Product ID must be a valid MongoDB Object ID'),

  body('payment')
    .optional()
    .isMongoId()
    .withMessage('Payment ID must be a valid MongoDB Object ID'),

  body('transactionDate')
    .optional()
    .isISO8601()
    .toDate()
    .withMessage('Transaction date must be a valid date')
];



export { validateCreateTransaction, validateUpdateTransaction};
