const Assign = () => {
  const points = [20, 30, 40];
  const x1 = points[0];
  const y1 = points[1];
  const z1 = points[2];

  const [x2, y2, z2] = points // x, y, z 할당
  const [x3,   , z3] = points // x,  , z 할당 | y 미할당
  console.log(x3, z3);

  const fruit = {
    a : 'apple',
    b : 'banana',
    c : 'coconut',
    d : 'drakefruit',
    e : 'entawak'
  }

  // 분해할당
  const {a, b, c, d, e} = fruit;
  console.log({a, b, c, d, e});

  const {a: a1, b: b1, c: c1, d: d1, e: e1} = fruit;
  console.log(a1, b1, c1, d1, e1);
  const areEqual = (a, b) => {
    return a === b ? 'Equal' : 'NotEqual';
  }

  const fruit1 = (fruit) => {
    console.log(`fruit.a: ${fruit.a}`);
    console.log(`fruit.b: ${fruit.b}`);
    console.log(`fruit.c: ${fruit.c}`);
    console.log(`fruit.d: ${fruit.d}`);
    console.log(`fruit.e: ${fruit.e}`);
  }

  const fruit2 = ({a, b, c, d, e}) => {
    console.log(a);
    console.log(b);
    console.log(c);
    console.log(d);
    console.log(e);
  }

  fruit1(fruit);
  fruit2(fruit);

  return (
    <>
      <p>x1 and x2 are {areEqual(x1, x2)}</p>
      <p>y1 and y2 are {areEqual(y1, y2)}</p>
      <p>z1 and z2 are {areEqual(z1, z2)}</p>
    </>
  );
}

export default Assign;