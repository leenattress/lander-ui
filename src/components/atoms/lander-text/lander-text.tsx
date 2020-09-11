import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'lander-text',
  styleUrl: 'lander-text.css',
  shadow: false,
})
export class LanderTitle {
  @Prop() narrow: boolean;
  @Prop() color: string = 'black';
  @Prop() fontsize: string = '1em';
  @Prop() fontweight: string = 'normal';
  @Prop() alignment: string = 'left';
  @Prop() padding: string = '1em';

  landerStyle: any = {
    'color': this.color,
    'font-size': this.fontsize,
    'font-weight': this.fontweight,
    'text-align': this.alignment,
    'padding': this.padding,
  };
  render() {
    return (
      <Host>
        <p style={this.landerStyle}>
          <slot></slot>
        </p>
      </Host>
    );
  }
}
