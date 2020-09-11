import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'lander-grid',
  styleUrl: 'lander-grid.css',
  shadow: false,
})
export class LanderGrid {
  render() {
    return (
      <Host>
        <div class="container">
          <slot></slot>
        </div>
      </Host>
    );
  }
}
