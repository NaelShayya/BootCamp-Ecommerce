import { body, param } from 'express-validator';

const validateCreatePayment = [
  body('user')
    .notEmpty()
    .withMessage('User identifier is required')
    .isMongoId()
    .withMessage('User identifier must be a valid MongoDB Object ID'),

  body('amount')
    .notEmpty()
    .withMessage('Payment amount is required')
    .isFloat({ gt: 0 })
    .withMessage('Payment amount must be a positive number'),

  body('paymentDate')
    .optional()
    .isISO8601()
    .toDate()
    .withMessage('Payment date must be a valid date')
];

const validateUpdatePayment = [
  body('user')
    .optional()
    .isMongoId()
    .withMessage('User identifier must be a valid MongoDB Object ID'),

  body('amount')
    .optional()
    .isFloat({ gt: 0 })
    .withMessage('Payment amount must be a positive number'),

  body('paymentDate')
    .optional()
    .isISO8601()
    .toDate()
    .withMessage('Payment date must be a valid date')
];


export { validateCreatePayment, validateUpdatePayment};
