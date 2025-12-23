import { Router } from 'express';
import {
  submitContact,
  getAllContacts,
  markAsRead,
  deleteContact,
} from '../controllers/contact.controller';
import { authenticate, authorize } from '../middleware';

const router = Router();

// Public route
router.post('/', submitContact);

// Protected routes (Admin only)
router.get('/', authenticate, authorize('ADMIN'), getAllContacts);
router.put('/:id/read', authenticate, authorize('ADMIN'), markAsRead);
router.delete('/:id', authenticate, authorize('ADMIN'), deleteContact);

export default router;
