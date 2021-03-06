/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';


export namespace Components {
  interface ProfileCard {
    'avatar': string;
    'description': string;
    'name': string;
  }
}

declare global {


  interface HTMLProfileCardElement extends Components.ProfileCard, HTMLStencilElement {}
  var HTMLProfileCardElement: {
    prototype: HTMLProfileCardElement;
    new (): HTMLProfileCardElement;
  };
  interface HTMLElementTagNameMap {
    'profile-card': HTMLProfileCardElement;
  }
}

declare namespace LocalJSX {
  interface ProfileCard {
    'avatar'?: string;
    'description'?: string;
    'name'?: string;
  }

  interface IntrinsicElements {
    'profile-card': ProfileCard;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements {
      'profile-card': LocalJSX.ProfileCard & JSXBase.HTMLAttributes<HTMLProfileCardElement>;
    }
  }
}


