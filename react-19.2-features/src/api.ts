export async function simulateApiCall<T>(result: T): Promise<T> {
  return new Promise((resolve, reject) => {
    // Simulate a slow network request.
    setTimeout(() => {
      resolve(result);
    }, 2000);
  });
}