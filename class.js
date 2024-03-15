class CreativeWork
{
    #year;
    #authors;
    #title;

    constructor(authors, year, title)
    {
        this.authors = authors;
        this.year = year;
        this.title = title;
    }

    get year() { return this.#year; }
    set year(value) { this.#year = value; }

    get authors() { return this.#authors; }
    set authors(value) { this.#authors = value; }

    get title() { return this.#title; }
    set title(value) { this.#title = value; }
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