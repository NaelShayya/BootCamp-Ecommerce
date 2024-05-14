import { body, param } from 'express-validator';


const validateCreateProduct = [
  body('name')
    .notEmpty()
    .withMessage('Product name is required'),

  body('price')
    .notEmpty()
    .withMessage('Price is required')
    .isFloat({ min: 0 })
    .withMessage('Price must be a non-negative number'),

  body('slug')
    .notEmpty()
    .withMessage('Product slug is required')
    .isSlug()
    .withMessage('Product slug must be a valid slug'),

  body('description')
    .optional()
    .isLength({ max: 500 })
    .withMessage('Description cannot exceed 500 characters'),

  body('product_image.data')
    .optional()
    .isBase64()
    .withMessage('Product image data must be in Base64 format'),

  body('product_image.contentType')
    .optional()
    .matches(/^(image\/(png|jpg|jpeg|gif))$/)
    .withMessage('Invalid content type for product image'),

  body('category')
    .notEmpty()
    .withMessage('Category is required')
    .isMongoId()
    .withMessage('Category must be a valid MongoDB Object ID'),

  body('purchasedBy')
    .optional()
    .isMongoId()
    .withMessage('Purchaser must be a valid MongoDB Object ID')
];

const validateUpdateProduct = [
  body('name')
    .optional()
    .notEmpty()
    .withMessage('Product name is required if provided'),

  body('price')
    .optional()
    .isFloat({ min: 0 })
    .withMessage('Price must be a non-negative number if provided'),

  body('slug')
    .optional()
    .isSlug()
    .withMessage('Product slug must be a valid slug if provided'),

  body('description')
    .optional()
    .isLength({ max: 500 })
    .withMessage('Description cannot exceed 500 characters if provided'),

  body('product_image.data')
    .optional()
    .isBase64()
    .withMessage('Product image data must be in Base64 format if provided'),

  body('product_image.contentType')
    .optional()
    .matches(/^(image\/(png|jpg|jpeg|gif))$/)
    .withMessage('Invalid content type for product image if provided'),

  body('category')
    .optional()
    .isMongoId()
    .withMessage('Category must be a valid MongoDB Object ID if provided'),

  body('purchasedBy')
    .optional()
    .isMongoId()
    .withMessage('Purchaser must be a valid MongoDB Object ID if provided')
];



export { validateCreateProduct, validateUpdateProduct};
