export async function simulateApiCall(result) {
  return new Promise((resolve, reject) => {
    // Simulate a slow network request.
    setTimeout(() => {
      resolve(result);
    }, 2000);
  });
}