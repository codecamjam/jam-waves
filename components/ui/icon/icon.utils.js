export const getCustomStyle = (spriteName) => {
  let customStyle;
  switch (spriteName) {
    case 'icon-home3':
      customStyle = 'home';
      break;
    case 'icon-headphones':
      customStyle = 'headphones';
      break;
    case 'icon-music':
      customStyle = 'music';
      break;
    case 'icon-video-camera':
      customStyle = 'video-camera';
      break;
    case 'icon-podcast':
      customStyle = 'podcast';
      break;
    case 'icon-mic':
      customStyle = 'mic';
      break;
    case 'icon-cart':
      customStyle = 'cart';
      break;
    case 'icon-phone':
      customStyle = 'phone';
      break;
    case 'icon-address-book':
      customStyle = 'address-book';
      break;
    case 'icon-envelop':
      customStyle = 'envelop';
      break;
    case 'icon-calendar':
      customStyle = 'calendar';
      break;
    case 'icon-tv':
      customStyle = 'tv';
      break;
    case 'icon-equalizer2':
      customStyle = 'equalizer';
      break;
    case 'icon-eye':
      customStyle = 'eye';
      break;
    case 'icon-star-empty':
      customStyle = 'star-empty';
      break;
    case 'icon-accessibility':
      customStyle = 'man';
      break;
    case 'icon-facebook2':
      customStyle = 'facebook';
      break;
    case 'icon-instagram':
      customStyle = 'instagram';
      break;
    case 'icon-twitter':
      customStyle = 'twitter';
      break;
    case 'icon-youtube2':
      customStyle = 'youtube';
      break;
    case 'icon-appleinc':
      customStyle = 'appleinc';
      break;
    case 'icon-soundcloud':
      customStyle = 'soundcloud';
      break;
    case 'icon-waves':
      customStyle = 'waves';
      break;
    default:
      customStyle = null;
  }
  return customStyle;
};
