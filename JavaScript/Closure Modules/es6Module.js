function myModule(spec) {
  const {member1, member2} = spec;
  const {member3, member4} = otherModule(spec);

  const myProperty = member2 + member3;

  const myFunction(params) {
    // access to members possible
  };

  return Object.freeze({
    myFunction,
    myProperty
  });
};
