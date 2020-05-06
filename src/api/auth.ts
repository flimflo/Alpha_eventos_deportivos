export function delay(t: number) {
  return new Promise(function(resolve) {
      setTimeout(resolve.bind(null), t)
  });
}

export async function login({ user, password }) {
  await delay(1000);
  return ({
    token: 'asdfasfd',
  });
}