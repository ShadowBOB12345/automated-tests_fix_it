const myHeaders = new Headers();
myHeaders.append("accept", "application/json, text/plain, */*");
myHeaders.append("country-id", "12");
myHeaders.append("device", "pc");
myHeaders.append("experiment", "novalue");
myHeaders.append("language", "ru_RU");
myHeaders.append("referer", "https://lalafo.kg/bishkek/kompyutery/noutbuki-i-netbuki/q-%D0%BD%D0%BE%D1%83%D1%82%D0%B1%D1%83%D0%BA%D0%B8?sort_by=default&price[from]=30000&price[to]=50000");
myHeaders.append("request-id", "react-client_aa210fa9-4531-4f42-ac44-990de68de358");
myHeaders.append("sec-ch-ua", "\"Google Chrome\";v=\"131\", \"Chromium\";v=\"131\", \"Not_A Brand\";v=\"24\"");
myHeaders.append("sec-ch-ua-mobile", "?0");
myHeaders.append("sec-ch-ua-platform", "\"Windows\"");
myHeaders.append("user-agent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36");
myHeaders.append("user-hash", "ab9785ac-69cf-4fb3-98f0-b3dfab724895");
myHeaders.append("x-cache-bypass", "yes");
myHeaders.append("Cookie", "affinity=1734279239.504.382.594119|77d10e9a236642c6efd4b9ec0942933d");

const requestOptions = {
  method: "GET",
  headers: myHeaders,
  redirect: "follow"
};

fetch("https://lalafo.kg/api/search/v3/feed/search?expand=url&per-page=20&category_id=1343&q=%D0%BD%D0%BE%D1%83%D1%82%D0%B1%D1%83%D0%BA%D0%B8&city_id=103184&sort_by=default&price[from]=30000&price[to]=50000&with_feed_banner=true", requestOptions)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.error(error));
