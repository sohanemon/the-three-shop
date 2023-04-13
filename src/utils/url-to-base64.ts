export default async function urlToBase64(imageUrl: string) {
  var res = await fetch(imageUrl);
  var blob = await res.blob();

  return new Promise((resolve, reject) => {
    var reader = new FileReader();
    reader.addEventListener(
      'load',
      function () {
        resolve(reader.result);
      },
      false
    );

    reader.onerror = () => {
      return reject(this);
    };
    reader.readAsDataURL(blob);
  });
}
