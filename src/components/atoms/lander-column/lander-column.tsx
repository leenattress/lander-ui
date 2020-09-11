import { Component, Host, h, Prop, State } from '@stencil/core';

@Component({
  tag: 'lander-column',
  styleUrl: 'lander-column.css',
  shadow: false,
})
export class LanderColumns {
  @Prop() columns: string = '12';
  @Prop() sm: string;
  @Prop() md: string;
  @Prop() lg: string;
  @Prop() xl: string;

  @State() internalColumns: string = this.columns;

  @Prop() padding: string = '1em';
  mqSm: boolean;
  mqMd: boolean;
  mqLg: boolean;
  mqXl: boolean;

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
          <slot></slot>
        </div>
      </Host>
    );
  }
}
