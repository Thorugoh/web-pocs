export async function simulateApiCall() {
  return new Promise((resolve, reject) => {
    // Simulate a slow network request.
    setTimeout(() => {
      resolve(true);
    }, 2000);
  });
}