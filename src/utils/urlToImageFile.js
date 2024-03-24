export default async function urlToImageFile(url) {
  // Check if the parameter is a string and it starts with "http" or "https"
  if (typeof url === "string" && url.startsWith("http")) {
    try {
      // Fetch the image data
      const response = await fetch(url);
      const blob = await response.blob();

      // Create a new File object from the Blob
      const filename = url.substring(url.lastIndexOf("/") + 1);
      const imageFile = new File([blob], filename, { type: blob.type });

      return imageFile;
    } catch (error) {
      console.error("Error converting URL to image file:", error);
      return null;
    }
  } else {
    // Return the parameter as it is if it's not a URL string
    return url;
  }
}
