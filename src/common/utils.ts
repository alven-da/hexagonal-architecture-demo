export const createErrorResponse = (
  statusCode: number,
  error?: string,
  message?: string
) => ({
  statusCode,
  error,
  message
});
