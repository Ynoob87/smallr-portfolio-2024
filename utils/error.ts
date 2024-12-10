type ErrorCode =
  | "INVALID_INPUT"
  | "NETWORK_ERROR"
  | "AUTH_ERROR"
  | "NOT_FOUND"
  | "INTERNAL_ERROR";

export class AppError extends Error {
  constructor(
    message: string,
    public code: ErrorCode,
    public status: number = 500
  ) {
    super(message);
    this.name = "AppError";
  }
}

export const handleError = (error: unknown): AppError => {
  if (error instanceof AppError) {
    return error;
  }

  console.error("Unexpected error:", error);
  return new AppError("An unexpected error occurred", "INTERNAL_ERROR", 500);
};
