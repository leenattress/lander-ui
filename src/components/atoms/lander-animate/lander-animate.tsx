import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'lander-animate',
  styleUrl: 'lander-animate.css',
  shadow: false,
})
export class LanderAnimate {
  @Prop() type: string;
  @Prop() rotate: number;
  
  animateCss: string;
  animateRotate: any = {};

  
  render() {
    if (this.rotate) {
        this.animateRotate = { "transform": "rotate(" + this.rotate + "deg)" };
    }

    if (this.type === 'swing') {
      this.animateCss = 'swing-in-top-fwd';
    } else if (this.type === 'fade') {
      this.animateCss = 'fade-in';
    } else if (this.type === 'blur') {
      this.animateCss = 'puff-in-center';
    } else if (this.type === 'slide-blur') {
      this.animateCss = 'slide-in-blurred-top';
    } else {
      this.animateCss = 'fade-in'; // default
    }

    
    return (
      <Host>
        <div class={this.animateCss} style={this.animateRotate}>
          <slot></slot>
        </div>
      </Host>
    );
  }
}
