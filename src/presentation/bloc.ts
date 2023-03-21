import { injectable } from 'inversify';

type Subscription<T> = (state: T) => void;

@injectable()
export class Bloc<T> {
  private listeners: Subscription<T>[] = [];
  constructor(private state: T) {}
  public setState(state: Partial<T>) {
    this.state = { ...this.state, ...state };

    if (!this.listeners.length) return;

    this.listeners.forEach((listener) => listener(this.state));
  }

  public get(): T {
    return this.state;
  }

  public subscribe(listener: Subscription<T>) {
    if (this.listeners.includes(listener)) return;

    this.listeners.push(listener);
  }

  public unsubscribe(listener: Subscription<T>) {
    const index = this.listeners.indexOf(listener);
    if (index > -1) {
      this.listeners.splice(index, 1);
    }
  }
}
