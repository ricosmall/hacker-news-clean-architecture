export class Story {
  constructor(
    public readonly id: number,
    public readonly title: string,
    public readonly url: string,
    public readonly author: string,
    public readonly score: number,
    public readonly createdAt: Date
  ) {}
}
