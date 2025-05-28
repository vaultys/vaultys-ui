export function generateHOTP(secret: any, counter: any): string;
export function generateTOTP(secret: any, window?: number): string;
export function verifyTOTP(token: any, secret: any, window?: number): boolean;
