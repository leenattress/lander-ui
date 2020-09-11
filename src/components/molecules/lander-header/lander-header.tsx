import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'lander-header',
  styleUrl: 'lander-header.css',
  shadow: false,
})
export class LanderHeader {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
