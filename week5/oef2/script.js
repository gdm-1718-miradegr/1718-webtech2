let books = [
    {title: 'Harry Potter',
    author: 'J.K. Rowling',
    alreadyRead: false
    },
    {title: 'Jane Eyre',
    author: 'Charlotte Brontë',
    alreadyRead: true
    },
    {title: 'De verschrikkelijke schoolmeester.',
    author: 'Dolf Verroen',
    alreadyRead: true
    },
];

console.log(this.books);

for(let i=0;i<books.length; i++){
    console.log(books.title + ' door '+ books.author)
}