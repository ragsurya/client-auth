const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

const asyncValidate = (formProps) => {
  const errors = {};
  console.log(formProps);
  return errors;
}

export default asyncValidate