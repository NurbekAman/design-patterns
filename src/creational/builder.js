/**
 * https://refactoring.guru/ru/design-patterns/builder/typescript/example
 */
class Builder {
  constructor() {
    this.product = [];
  }
  buildPart1() {}
  buildPart2() {}
}

class ConcreteBuilder1 extends Builder {
  buildPart1() {
    this.product.push('part 1');
  }

  buildPart2() {
    this.product.push('part 2');
  }

  getProduct() {
    return this.product;
  }
}

class ConcreteBuilder2 extends Builder {
  buildPart2() {
    this.product.push('part two of product 2');
  }

  getProduct() {
    return this.product;
  }
}

function runBuild(builder) {
  let _builder = builder;

  const buildProduct = () => {
    _builder.buildPart1();
    _builder.buildPart2();
  }

  const changeBuilder = (newBuilder) => _builder = newBuilder;

  return {
    buildProduct,
    changeBuilder
  }
}

const builder1 = new ConcreteBuilder1();
const { buildProduct, changeBuilder } = runBuild(builder1);
buildProduct();
const product1 = builder1.getProduct();
console.log(product1);
const builder2 = new ConcreteBuilder2();
changeBuilder(builder2);
buildProduct();
const product2 = builder2.getProduct();
console.log(product2);