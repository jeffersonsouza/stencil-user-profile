import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'profile-card',
  styleUrl: 'card.css',
  shadow: true
})
export class Card {

  @Prop() name: string;
  @Prop() avatar: string;
  @Prop() description: string;

  render() {
    // Thanks to https://codepen.io/colinkeany/pen/XJOvXz
    return (
      <div class="container">
        <div class="avatar">
          <img src={this.avatar} height="150" width="150" />
        </div>
        <h2>{this.name}</h2>
        <p>{this.description}</p>
      </div>
    );
  }
}
