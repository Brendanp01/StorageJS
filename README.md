# StorageJS

## What is it?
StorageJS is a simple TypeScript/JavaScript library for managing LocalStorage and SessionStorage data.

## Using it in a project
There are two ways to use it:
#### jsDelivr
`<script src="https://cdn.jsdelivr.net/gh/brendanp01/StorageJS@1.0/StorageLib.js" />`

#### Download the ZIP Archive from GitHub and extract it into your project
Well, that's pretty self explanatory.

## The API
The API is very simple. It's essentially a wrapper for the LocalStorage and SessionStorage API's. There are two functions, and an interface for TypeScript developers. The functions are `save` and `load`. The interface is `Data` (it would probably have made more sense to call it `KeyValue`, but whatever). Here's a hello world example in TypeScript:
`
let helloworld: Data = {key: "hello", value: "world"};
save(true, helloworld);
alert(load(true, "hello"));
`
For JavaScript, just remove type annotations:
`
let helloworld = {key: "hello", value: "world"};
save(true, helloworld);
alert(load(true, "hello"));
`
The `save` function always returns true. The first parameter can be `true` or `false` and is used to tell the library whether or not it shoudl use LocalStorage. The second parameter is a JavaScript Object with a key and a value. The `load` function returns the value. The first parameter is the same thing as the first parameter of `save`, to tell the library which storage API to use. The second parameter is the key that you want to get the value of.
