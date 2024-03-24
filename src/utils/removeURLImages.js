export default function removeUrlImages(obj) {
  const newObj = { ...obj };

  for (const key in newObj) {
    if (newObj.hasOwnProperty(key) && isUrl(newObj[key])) {
      delete newObj[key];
    }
  }

  return newObj;
}

function isUrl(value) {
  // Regular expression to check if the value is a URL
  const urlRegex = /^(ftp|http|https):\/\/[^ "]+$/;
  return urlRegex.test(value);
}
