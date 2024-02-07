class Book {
    constructor(title, author) {
        this.title = title;
        this.aurhor = author;
    }
    getDetails() {
        console.log(`book title is ${this.title} and author${this.author}`);
    }
}
const my_book = new Book("dedaens","gogebashvili");
my_book.getDetails()