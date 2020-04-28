import { Given, When, Then } from 'cucumber';
import { expect } from "chai";

Given("初始值为{int}", function(number) {
  this.setTo(number);
});

When("我增加{int}", function(number) {
  this.incrementBy(number);
});

Then("结果为{int}", function(number) {
  expect(this.variable).to.eql(number);
});


Given("我有{int}个鸡蛋", function(number) {
  console.log(1, number)
});

Given("我有{color}的书包", function(input) {
  console.log("颜色", input)
});