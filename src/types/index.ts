// InTen Platform TypeScript Types

export enum Role {
  CUSTOMER = 'CUSTOMER',
  CONSULTANT = 'CONSULTANT',
  BOTH = 'BOTH',
}

export enum BookingStatus {
  PENDING = 'PENDING',
  CONFIRMED = 'CONFIRMED',
  COMPLETED = 'COMPLETED',
  CANCELLED = 'CANCELLED',
  DISPUTED = 'DISPUTED',
}

export interface User {
  id: string;
  clerkId: string;
  email: string;
  role: Role;
  profile?: Profile;
  createdAt: Date;
}

export interface Profile {
  id: string;
  userId: string;
  displayName: string;
  bio?: string;
  avatar?: string;
  pricePerTen: number; // Price in cents for 10 minutes
  expertise: string[];
  isPublic: boolean;
  isVerified: boolean;
  rating?: number;
  reviewCount: number;
}

export interface Booking {
  id: string;
  customerId: string;
  consultantId: string;
  scheduledAt: Date;
  status: BookingStatus;
  dailyRoomUrl?: string;
  stripePaymentId?: string;
  amount: number; // Amount in cents
  platformFee: number; // Platform cut in cents
}
