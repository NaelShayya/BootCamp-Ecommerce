import { body } from 'express-validator';

const validateCreateCategory = [
  body('name')
    .trim()
    .isLength({ min: 3, max: 50 })
    .withMessage('Category name must be between 3 and 50 characters long')
    .notEmpty()
    .withMessage('Category name is required'),

  body('slug')
    .trim()
    .toLowerCase()
    .matches(/^[a-z0-9-]+$/)
    .withMessage('Slug can only contain lowercase letters, numbers, and dashes')
    .notEmpty()
    .withMessage('Category slug is required'),

  body('created_at')
    .optional()
    .isISO8601()
    .toDate(),

  body('modified_at')
    .optional()
    .custom((value, { req }) => {
      if (value < req.body.created_at) {
        throw new Error('Modified date cannot be earlier than the creation date');
      }
      return true;
    }),
];


const validateUpdateCategory = [
  body('name')
    .optional()
    .trim()
    .isLength({ min: 3, max: 50 })
    .withMessage('Category name must be between 3 and 50 characters long'),

  body('slug')
    .optional()
    .trim()
    .toLowerCase()
    .matches(/^[a-z0-9-]+$/)
    .withMessage('Slug can only contain lowercase letters, numbers, and dashes'),

  body('modified_at')
    .optional()
    .custom((value, { req }) => {
      if (value < req.body.created_at) {
        throw new Error('Modified date cannot be earlier than the creation date');
      }
      return true;
    }),
];

export { validateCreateCategory, validateUpdateCategory };
