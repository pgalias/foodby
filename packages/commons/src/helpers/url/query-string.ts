export class QueryString {
  private urlSearchParams: URLSearchParams;

  constructor() {
    this.urlSearchParams = new URLSearchParams();
  }

  static fromObject(params: Record<string, string>): QueryString {
    const urlSearchParams = new QueryString();
    Object.entries(params).forEach(([key, value]) => {
      urlSearchParams.append(key, value);
    });

    return urlSearchParams;
  }

  append(key: string, value: string): QueryString {
    this.urlSearchParams.append(key, value);

    return this;
  }

  toString(): string {
    return this.urlSearchParams.toString();
  }
}
