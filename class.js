class CreativeWork
{
    constructor(authors, year, title)
    {
        this.authors = authors;
        this.year = year;
        this.title = title;
    }
}

class Book extends CreativeWork
{
    constructor(authors, year, title, genre, publisher, cover, plot)
    {
        super(authors, year, title);
        this.genre = genre;
        this.publisher = publisher;
        this.cover = cover;
        this.plot = plot;
    }
}

class Person 
{
    constructor(name, year)
    {
        this.name = name;
        this.year = year;
    }
}

class Author extends Person 
{
    constructor(name, year, titles)
    {
        super(name, year);
        this.titles = titles;
    }
}

class Company {
    constructor(name, wikipedia)
    {
        this.name = name;
        this.wikipedia = wikipedia;
    }
}

class Publisher extends Company 
{
    constructor(name, wikipedia, titles) 
    {
        super(name, wikipedia);
        this.titles = titles;
    }
}