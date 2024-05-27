import * as ExpoSecureStore from "expo-secure-store";

async function save(key: string, value: string) {
  await ExpoSecureStore.setItemAsync(key, value, {
    requireAuthentication: true,
  });
}

async function getValueFor(key: string) {
  const result = await ExpoSecureStore.getItemAsync(key);
  if (result) {
    alert(`Value for ${key} is ${result}`);
  } else {
    alert(`No value for ${key}`);
  }
}

export const SecureStorage = {
  save,
  getValueFor,
} as const;
