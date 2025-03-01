import breakpoints from './breakpoints';
import icons from './icons';

import { extendTheme, ThemeOverride } from '@chakra-ui/react';

export default extendTheme(<ThemeOverride>{
  breakpoints,

  colors: {
    black: '#16161d'
  },

  fonts: {
    //
  },

  icons,

  styles: {
    global: {
      html: {
        scrollBehavior: 'smooth'
      },
      body: {
        cursor: 'default',

        MozOsxFontSmoothing: 'grayscale',
        WebkitFontSmoothing: 'antialiased',
        textRendering: 'optimizeLegibility'
      },

      '.mapboxgl-popup-content': {
        bg: 'transparent',
        borderRadius: '6px',
        p: 0
      },
      '.mapboxgl-popup-anchor-bottom .mapboxgl-popup-tip': {
        borderTopColor: 'black'
      }
    }
  }
});
