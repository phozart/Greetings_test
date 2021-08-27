var greet = utils.load('./greet.js', 'greet');

describe('GREET', () => {
   
    test('Single string value', () => {
        expect(greet('Elizabeth')).toBe('Hello, Elizabeth');
   
    });
    test('Name is null', () => {
        expect(greet('')).toBe('Hello, there!');
   
    });
    test('Name is uppercase, shout!', () => {
        expect(greet('JOE')).toBe('HELLO, JOE!');
   
    });
    test('Array with 2 values', () => {
        expect(greet(['Jose','Pep'])).toBe('Hello, Jose,Pep');
   
    });
    test('Array with arbitrary number of values', () => {
        expect(greet(['Alex','Arsene','Jose','Zidane'])).toBe('Hello, Alex, Arsene, Jose, Zidane');
   
    });
   
    
});