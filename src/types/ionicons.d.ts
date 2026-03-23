import * as React from 'react';

declare global {
  namespace React {
    namespace JSX {
      interface IntrinsicElements {
        'ion-icon': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & { name?: string, class?: string, className?: string }, HTMLElement>;
      }
    }
  }
  namespace JSX {
    interface IntrinsicElements {
      'ion-icon': any;
    }
  }
}
