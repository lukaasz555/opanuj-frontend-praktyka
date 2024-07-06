export class BookBaseData {
  title = '';
  authors: string[] = [];
}

export class Book {
  id = Math.floor(Math.random() * 1000);
  title = '';
  authors: string[] = [];
  isFavorite = false;

  constructor(id: number, title: string, authors: string[]) {
    this.id = id;
    this.title = title;
    this.authors = authors;
  }

  setBaseData(bookBaseData: BookBaseData): void {
    this.title = bookBaseData.title;
    this.authors = bookBaseData.authors;
  }

  setIsFavorite(value: boolean): void {
    this.isFavorite = value;
  }
}
