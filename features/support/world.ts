import { setWorldConstructor, defineParameterType } from "cucumber";


defineParameterType({  
    name: 'color',
    regexp: /red|blue|yellow/,
    transformer: s => s
})


interface CustomWorld{
  variable: number
}


class CustomWorld {

  constructor() {
    this.variable = 0;
  }

  setTo(number) {
    this.variable = number;
  }

  incrementBy(number) {
    this.variable += number;
  }

}


setWorldConstructor(CustomWorld);