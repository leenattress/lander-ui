import { Component, Host, h, Prop, State } from '@stencil/core';

@Component({
  tag: 'lander-block',
  styleUrl: 'lander-block.css',
  shadow: false,
})
export class LanderBlock {
  @Prop() columns: string = '12';
  @Prop() sm: string;
  @Prop() md: string;
  @Prop() lg: string;
  @Prop() xl: string;
  mqSm: boolean;
  mqMd: boolean;
  mqLg: boolean;
  mqXl: boolean;
  @State() internalColumns: string = this.columns;
  @Prop() padding: string = '0';
  @Prop() margin: string = '0';

  @Prop() narrow: boolean;
  @Prop() height: string = 'auto';
  @Prop() backgroundcolor: string = 'transparent';
  @Prop() backgroundimage: string;
  @Prop() hint: string;

  landerStyle: any = {
    inner: {
      'height': this.height,
      'background-color': this.backgroundcolor,
      'background-image': 'url(' + this.backgroundimage + ')'
    },
    tint: {
      'background-color': this.hint,
    },
  };

  handleResize() {
    if (this.sm) {
      this.mqSm = window.matchMedia('(min-width: 640px)').matches;
      this.mqMd = window.matchMedia('(min-width: 768px)').matches;
      this.mqLg = window.matchMedia('(min-width: 1024px)').matches;
      this.mqXl = window.matchMedia('(min-width: 1280px)').matches;
      this.internalColumns = this.columns;

      if (!this.mqXl && this.xl) {
        this.internalColumns = this.xl;
      }
      if (!this.mqLg && this.lg) {
        this.internalColumns = this.lg;
      }
      if (!this.mqMd && this.md) {
        this.internalColumns = this.md;
      }
      if (!this.mqSm && this.sm) {
        this.internalColumns = this.sm;
      }
    }
  }
  componentWillRender() {
    window.addEventListener('resize', () => this.handleResize());
    this.handleResize();
  }

  render() {
    return (
      <Host class={'item item' + this.internalColumns}>
        <div style={{ padding: this.padding }}>
          <div class={this.narrow ? 'lander-block narrow' : 'lander-block wide'} style={this.landerStyle.inner}>
            <div class="tint" style={this.landerStyle.tint}>
              <slot></slot>
            </div>
          </div>
        </div>
      </Host>
    );
  }
}
