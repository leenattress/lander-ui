import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'lander-card',
  styleUrl: 'lander-card.css',
  shadow: false,
})
export class LanderCard {
  @Prop() image: string;
  @Prop() text: string;
  @Prop() textcolor: string = 'black';
  @Prop() meta: string;
  @Prop() metacolor: string = 'black';

  render() {
    return (
      <Host>
        <div>
          {this.image && <img style={{ width: '100%' }} src={this.image} />}
          {this.text && (
            <lander-text color={this.textcolor} padding="0">
              <p>
                <strong>{this.text}</strong>
              </p>
            </lander-text>
          )}
          {this.meta && (
            <lander-text color={this.metacolor} padding="0">
              <p>
                {this.meta}
              </p>
            </lander-text>
          )}
        </div>
      </Host>
    );
  }
}
