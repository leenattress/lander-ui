import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'lander-headline',
  styleUrl: 'lander-headline.css',
  shadow: false,
})
export class LanderTitle {
  @Prop() narrow: boolean;
  @Prop() color: string = 'black';
  @Prop() fontsize: string = '3em';
  @Prop() fontweight: string = 'bold';
  @Prop() alignment: string = 'center';
  @Prop() padding: string = '1em';
  @Prop() lineheight: string = '1em';
  

  landerStyle: any = {
    'color': this.color,
    'font-size': this.fontsize,
    'font-weight': this.fontweight,
    'text-align': this.alignment,
    'padding': this.padding,
    'line-height': this.lineheight
  };
  render() {
    return (
      <Host>
        <div class={this.narrow ? 'title-narrow' : 'title-wide'} >
          <div style={this.landerStyle}>
            <slot></slot>
          </div>
        </div>
      </Host>
    );
  }
}
