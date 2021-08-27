function greet(name) {
    let retValue = '';
    if (name ==='') return 'Hello, there!';
    if (name === name.toUpperCase()) return 'HELLO, ' + name + '!';
    if (name.isArray()) return 'Hello, ' + name.toString() ;

     return 'Hello, ' + name;
}