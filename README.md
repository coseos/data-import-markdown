# Data-Import-Markdown

[https://github.com/coseos/data-import-markdown](https://github.com/coseos/data-import-markdown)

A Javascript snippet to import markdown files to HTML.

The transformer for markdown to HTML uses [Micromark](https://github.com/micromark)

## Author

Thorsten Lorenz

## Usage

To use data-import-markdown, load the *data-import-md.js* script as a javascript
module and include some tags with a data-import-md attribute.

The value of the data-import-md attribute is the name of a file with
the markdown source to import into the html page.

Here's an example HTML source ...

```
<!DOCTYPE html>
<html>
    <head>
        <title>data-import-markdown</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="canonical" href="https://github.com/coseos/data-import-markdown">
        <link rel="stylesheet" href="data-import-md.css">
        <script type="module" src="data-import-md.js"></script>
    </head>
    <body>
        <main>
            <div data-import-md="README.md"></div>
        </main>
    </body>
</html>
```

*README.md* is the filename with the markdown. If you have a web server
for static files at hand, simply clone this repository and run your web
server from the data-import-markdown folder to see data-import-markdown
in action.

## Stylesheet

A very minimal stylesheet is included to give you an idea on how to format the
HTML.

## Markdown

[README.md](README.md)

## License

[Public Domain](LICENSE)

## Refs

[Micromark](https://github.com/micromark)
