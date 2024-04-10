import * as ExpoSecureStore from "expo-secure-store";

async function save(key: string, value: string) {
  await ExpoSecureStore.setItemAsync(key, value);
}

async function getValueFor(key: string) {
  console.log("getValurFor");
  // const result = await ExpoSecureStore.getItemAsync(key);
  console.log("await");
  // if (result) {
  //   console.log(result);
  // } else {
  //   console.log("No values stored under that key.");
  // }
  const res = await ExpoSecureStore.isAvailableAsync();
  console.log(res);
}

export const SecureStoreMethod = {
  save,
  getValueFor,
} as const;
