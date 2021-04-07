const getUrlParams = url =>
  (url.match(/([^?=&]+)(=([^&#]*))/g) || []).reduce((a, v) => {
    const [key, value] = v.split('=');
    a[key] = value;
    return a;
  }, {});

getUrlParams('https://www.baidu.com?qw=123&tesr=123x#12321');
