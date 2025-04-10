/**
 * Custom error class for AI service errors
 * Provides context about which service failed and why
 */
export class AIServiceError extends Error {
  constructor(
    message: string,
    public readonly service: string,
    public readonly originalError?: unknown
  ) {
    super(message);
    this.name = 'AIServiceError';
  }
}

/**
 * Format error message from any error type
 */
export function formatErrorMessage(error: unknown): string {
  if (error instanceof AIServiceError) {
    return `${error.service} error: ${error.message}`;
  } 
  
  if (error instanceof Error) {
    return error.message;
  }
  
  return 'An unknown error occurred';
} 