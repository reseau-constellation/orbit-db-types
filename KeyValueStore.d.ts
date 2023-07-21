declare module "orbit-db-kvstore" {
    import Store from "orbit-db-store";

    export default class KeyValueStore<V extends {[clef: string]: unknown}> extends Store {
        get<K extends keyof V>(key: K): V[K] | undefined;

        put<K extends keyof V>(key: K, value: V[K], options?: {}): Promise<string>;
        set<K extends keyof V>(key: K, value: V[K], options?: {}): Promise<string>;

        del<K extends keyof V>(key: K, options?: {}): Promise<string>;

        all: Partial<V>;
    }
}
