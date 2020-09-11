import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'lander-page',
  styleUrl: 'lander-page.css',
  shadow: true,
})
export class LanderPage {
  @Prop() backgroundcolor: string = 'transparent';
  @Prop() backgroundimage: string;

  landerStyle: any = { 'background-color': this.backgroundcolor, "background-image": "url(" + this.backgroundimage + ")"};
  
  render() {
    return (
      <Host>
        <div class="page" style={this.landerStyle}>
          <header>
            <slot name="header"></slot>
          </header>
          <main>
            <slot name="main"></slot>
          </main>
          <footer>
            <slot name="footer"></slot>
          </footer>
        </div>
      </Host>
    );
  }
}
