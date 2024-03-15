class CreativeWork
{   
    #author;
    #year;
    #title;

    get author() { return this.#author; }
    set author(x) { this.#author = x; }

    get year() { return this.#year; }
    set year(x) { this.#year = x; }

    get title() { return this.#title; }
    set title(x) { this.#title = x; }

    constructor(author, year, title)
    {
        this.author = author;
        this.year = year;
        this.title = title;
    }
}

class Book extends CreativeWork
{

    constructor(author, year, title, genre, publisher, cover, plot)
    {
        super(author, year, title);
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

class Company 
{
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
