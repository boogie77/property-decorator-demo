import { observable } from 'mobx';

export default class State {
  @observable text: string;

  constructor() {
  	this.text = '';
  }
}

export interface StateProp {
	state?: State;
}