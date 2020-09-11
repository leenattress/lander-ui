import { Component, Host, h, Prop, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'lander-button',
  styleUrl: 'lander-button.css',
  shadow: false,
})
export class LanderButton {
  @Prop() colour: string;
  @Prop() outline: boolean;
  @Prop() test: string;
  @Prop() size: string;
  @Event() clicked: EventEmitter;
  @Event() doubleClicked: EventEmitter;

  render() {
    var btnCssClass;

    const btnSize = this.size === 'large' ? 'btn-large' : '';
    if (this.colour) {
      if (this.outline) {
        btnCssClass = 'btn btn-' + this.colour + '-outline' + ' ' + btnSize;
      } else {
        btnCssClass = 'btn btn-' + this.colour + ' ' + btnSize;
      }
    } else {
      if (this.outline) {
        btnCssClass = 'btn btn-outline' + ' ' + btnSize;
      } else {
        btnCssClass = 'btn' + ' ' + btnSize;
      }
    }
    return (
      <Host>
        <button class={btnCssClass}>
          <slot></slot>
        </button>
      </Host>
    );
  }
}
