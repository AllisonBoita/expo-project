import AsyncStorage from "@react-native-async-storage/async-storage";

const KEY = "items";

export async function getItems() {
    const data = await AsyncStorage.getItem(KEY);
    return data ? JSON.parse(data) : [];
}

export async function addItem(item: any) {
    const items = await getItems();
    items.push(item);
    await AsyncStorage.setItem(KEY, JSON.stringify(items));
}

export async function updateItem(updated: any) {
    let items = await getItems();
    items = items.map((item: any) => (item.id === updated.id ? updated : item));
    await AsyncStorage.setItem(KEY, JSON.stringify(items));
}

export async function removeItem(id: string) {
    let items = await getItems();
    items = items.filter((item: any) => item.id !== id);
    await AsyncStorage.setItem(KEY, JSON.stringify(items));
}
