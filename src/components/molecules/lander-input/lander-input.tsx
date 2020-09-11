import { Component, Host, h, Prop, State, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'lander-input',
  styleUrl: 'lander-input.css',
  shadow: false,
})
export class LanderInput {
  @Prop() label: string;
  @Prop() hint: string;
  @Prop() type: string;
  @Prop() value: string;
  @Prop() placeholder: string;
  @State() internalValue: string;
  @Event() valueChange: EventEmitter;
  handleChange(event) {
    this.internalValue = event.target.value;
    this.valueChange.emit(this.internalValue);
  }

  render() {
    return (
      <Host>
        <div>
          <label>
            {this.label && <div class="label">{this.label}</div>}
            {this.hint && <div class="hint">{this.hint}</div>}
            {this.type === 'text' && <input placeholder={this.placeholder ? this.placeholder : ''} class="input input-text" type="text" value={this.value} onInput={event => this.handleChange(event)} />}
            {this.type === 'number' && <input class="input input-number" type="number" value={this.value} onInput={event => this.handleChange(event)} />}
          </label>
        </div>
      </Host>
    );
  }
}
