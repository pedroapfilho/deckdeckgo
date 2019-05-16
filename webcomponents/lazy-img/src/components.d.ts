/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import '@stencil/core';




export namespace Components {

  interface DeckgoLazyImg {
    'imgAlt': string;
    'imgSrc': string;
    'lazyLoad': () => Promise<void>;
    'observerRootMargin': string;
    'observerThreshold': number | number[];
  }
  interface DeckgoLazyImgAttributes extends StencilHTMLAttributes {
    'imgAlt'?: string;
    'imgSrc'?: string;
    'observerRootMargin'?: string;
    'observerThreshold'?: number | number[];
    'onLazyImgDidLoad'?: (event: CustomEvent) => void;
  }
}

declare global {
  interface StencilElementInterfaces {
    'DeckgoLazyImg': Components.DeckgoLazyImg;
  }

  interface StencilIntrinsicElements {
    'deckgo-lazy-img': Components.DeckgoLazyImgAttributes;
  }


  interface HTMLDeckgoLazyImgElement extends Components.DeckgoLazyImg, HTMLStencilElement {}
  var HTMLDeckgoLazyImgElement: {
    prototype: HTMLDeckgoLazyImgElement;
    new (): HTMLDeckgoLazyImgElement;
  };

  interface HTMLElementTagNameMap {
    'deckgo-lazy-img': HTMLDeckgoLazyImgElement
  }

  interface ElementTagNameMap {
    'deckgo-lazy-img': HTMLDeckgoLazyImgElement;
  }


  export namespace JSX {
    export interface Element {}
    export interface IntrinsicElements extends StencilIntrinsicElements {
      [tagName: string]: any;
    }
  }
  export interface HTMLAttributes extends StencilHTMLAttributes {}

}
