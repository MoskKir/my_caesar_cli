# Caesar cipher CLI tool

## Clone project

```
git clone https://github.com/MoskKir/my_caesar_cli.git
```

## Installing NPM modules

```
npm install
```

## Application description

**Implement CLI tool that will encode and decode a text by [Caesar cipher](https://en.wikipedia.org/wiki/Caesar_cipher)**.

CLI tool accept 4 options (short alias and full name):

1.  **-s, --shift**: a shift
2.  **-i, --input**: an input file
3.  **-o, --output**: an output file
4.  **-a, --action**: an action encode/decode

Options description:
```bash
$ node my_caesar_cli --help
```

**Usage example:**

```bash
$ node my_caesar_cli -a encode -s 7 -i "./input.txt" -o "./output.txt"
```

```bash
$ node my_caesar_cli --action encode --shift 7 --input input.txt --output output.txt
```

```bash
$ node my_caesar_cli --action decode --shift 7 --input input.txt --output output.txt
```

**Text inside input file:**
> input.txt
> `This is secret. Message about "_" symbol!`

**Text inside output file(after encode):**
> output.txt
> `Aopz pz zljyla. Tlzzhnl hivba "_" zftivs!`
