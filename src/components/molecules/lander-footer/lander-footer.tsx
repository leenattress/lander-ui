import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'lander-footer',
  styleUrl: 'lander-footer.css',
  shadow: false,
})
export class LanderFooter {
  render() {
    return (
      <Host>
        <div>
          <lander-column columns="3"> qwdqwdqwd </lander-column>
          <lander-column columns="3">
            <ul>
              <li>item</li>
              <li>item</li>
              <li>item</li>
              <li>item</li>
              <li>item</li>
            </ul>
          </lander-column>
          <lander-column columns="3">
            <ul>
              <li>item</li>
              <li>item</li>
              <li>item</li>
              <li>item</li>
              <li>item</li>
            </ul>
          </lander-column>
          <lander-column columns="3">
            <ul>
              <li>item</li>
              <li>item</li>
              <li>item</li>
              <li>item</li>
              <li>item</li>
            </ul>
          </lander-column>
          <lander-block height="60px"></lander-block>
        </div>
      </Host>
    );
  }
}
