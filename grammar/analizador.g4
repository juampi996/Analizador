grammar Analizador;

// Lexer rules
PUTS: 'puts';
DO: 'do';
WHILE: 'while';
BREAK: 'break';

LBRACE: '{';
RBRACE: '}';
LPAREN: '(';
RPAREN: ')';
SEMI: ';';

LETRA: [a-zA-Z];
DIGITO: [0-9];
SIMBOLO: '.' | ',' | '!' | '?' | ':' | ';' | '’';

WS : [ \t\r\n]+ -> skip;

// Parser rules
programa: instrucciones ;

instrucciones: instruccion* ;

instruccion: bucle ;

bucle:
    DO LBRACE sentencia RBRACE WHILE LPAREN condicion RPAREN SEMI
;

sentencia:
    (salida)* terminar?
;

salida:
    PUTS LPAREN cadena RPAREN SEMI
;

terminar:
    BREAK SEMI
;

condicion:
    DIGITO
;

cadena:
    '"' caracteres '"'
;

caracteres:
    caracter*
;

caracter:
    LETRA | DIGITO | SIMBOLO
;