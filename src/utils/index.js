const classNames = (...args) => {
  return args.map((arg) => `${arg}`).join(' ');
};

export const getOSName = () => {
  const { userAgent } = window.navigator;
  const { platform } = window.navigator;
  const macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'];
  const windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'];
  const iosPlatforms = ['iPhone', 'iPad', 'iPod'];
  let os = null;

  if (macosPlatforms.indexOf(platform) !== -1) {
    os = 'Mac OS';
  } else if (iosPlatforms.indexOf(platform) !== -1) {
    os = 'iOS';
  } else if (windowsPlatforms.indexOf(platform) !== -1) {
    os = 'Windows';
  } else if (/Android/.test(userAgent)) {
    os = 'Android';
  } else if (!os && /Linux/.test(platform)) {
    os = 'Linux';
  }
  return os;
};

export const isMobileOS = () => {
  const os = getOSName();
  return os === 'Android' || os === 'iOS';
};

const toggleChat = () => {
  // eslint-disable-next-line no-undef
  if (!!window.$chatwoot && !!$chatwoot.hasLoaded) {
    // eslint-disable-next-line no-undef
    $chatwoot.toggle();
  }
};

export { classNames, toggleChat };
