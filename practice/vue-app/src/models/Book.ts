export class BookBaseData {
  title = '';
  authors = '';
}

export class Book {
  id = Math.floor(Math.random() * 1000);
  title = '';
  authors: string[] = [];
  isFavorite = false;

  constructor(baseData?: { id: number; title: string; authors: string[] }) {
    if (baseData) {
      const { id, title, authors } = baseData;
      this.id = id;
      this.title = title;
      this.authors = authors;
    }
  }

  setBaseData(bookBaseData: BookBaseData): void {
    this.title = bookBaseData.title;
    this.authors = bookBaseData.authors.split(', ');
  }

  setIsFavorite(value: boolean): void {
    this.isFavorite = value;
  }
}
