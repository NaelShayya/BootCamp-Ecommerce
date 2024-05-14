import { body, param } from 'express-validator';


const validateCreateCountry = [
  body('country_name')
    .trim()
    .notEmpty()
    .withMessage('Country name is required'),

  body('currency.name')
    .notEmpty()
    .withMessage('Currency name is required'),

  body('currency.symbol')
    .notEmpty()
    .withMessage('Currency symbol is required')
];


const validateUpdateCountry = [
  body('country_name')
    .optional()
    .trim()
    .notEmpty()
    .withMessage('Country name is required if provided'),

  body('currency.name')
    .optional()
    .notEmpty()
    .withMessage('Currency name is required if provided'),

  body('currency.symbol')
    .optional()
    .notEmpty()
    .withMessage('Currency symbol is required if provided')
];



export { validateCreateCountry, validateUpdateCountry };
