// Generated from grammar/Analizador.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';


const serializedATN = [4,0,14,78,6,-1,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,
4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,
12,2,13,7,13,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,2,1,2,1,2,1,3,1,3,1,3,1,3,1,3,
1,3,1,4,1,4,1,4,1,4,1,4,1,4,1,5,1,5,1,6,1,6,1,7,1,7,1,8,1,8,1,9,1,9,1,10,
1,10,1,11,1,11,1,12,1,12,1,12,1,12,3,12,70,8,12,1,13,4,13,73,8,13,11,13,
12,13,74,1,13,1,13,0,0,14,1,1,3,2,5,3,7,4,9,5,11,6,13,7,15,8,17,9,19,10,
21,11,23,12,25,13,27,14,1,0,4,2,0,65,90,97,122,1,0,48,57,5,0,33,33,44,44,
46,46,58,59,63,63,3,0,9,10,13,13,32,32,79,0,1,1,0,0,0,0,3,1,0,0,0,0,5,1,
0,0,0,0,7,1,0,0,0,0,9,1,0,0,0,0,11,1,0,0,0,0,13,1,0,0,0,0,15,1,0,0,0,0,17,
1,0,0,0,0,19,1,0,0,0,0,21,1,0,0,0,0,23,1,0,0,0,0,25,1,0,0,0,0,27,1,0,0,0,
1,29,1,0,0,0,3,31,1,0,0,0,5,36,1,0,0,0,7,39,1,0,0,0,9,45,1,0,0,0,11,51,1,
0,0,0,13,53,1,0,0,0,15,55,1,0,0,0,17,57,1,0,0,0,19,59,1,0,0,0,21,61,1,0,
0,0,23,63,1,0,0,0,25,69,1,0,0,0,27,72,1,0,0,0,29,30,5,34,0,0,30,2,1,0,0,
0,31,32,5,112,0,0,32,33,5,117,0,0,33,34,5,116,0,0,34,35,5,115,0,0,35,4,1,
0,0,0,36,37,5,100,0,0,37,38,5,111,0,0,38,6,1,0,0,0,39,40,5,119,0,0,40,41,
5,104,0,0,41,42,5,105,0,0,42,43,5,108,0,0,43,44,5,101,0,0,44,8,1,0,0,0,45,
46,5,98,0,0,46,47,5,114,0,0,47,48,5,101,0,0,48,49,5,97,0,0,49,50,5,107,0,
0,50,10,1,0,0,0,51,52,5,123,0,0,52,12,1,0,0,0,53,54,5,125,0,0,54,14,1,0,
0,0,55,56,5,40,0,0,56,16,1,0,0,0,57,58,5,41,0,0,58,18,1,0,0,0,59,60,5,59,
0,0,60,20,1,0,0,0,61,62,7,0,0,0,62,22,1,0,0,0,63,64,7,1,0,0,64,24,1,0,0,
0,65,70,7,2,0,0,66,67,5,226,0,0,67,68,5,8364,0,0,68,70,5,8482,0,0,69,65,
1,0,0,0,69,66,1,0,0,0,70,26,1,0,0,0,71,73,7,3,0,0,72,71,1,0,0,0,73,74,1,
0,0,0,74,72,1,0,0,0,74,75,1,0,0,0,75,76,1,0,0,0,76,77,6,13,0,0,77,28,1,0,
0,0,3,0,69,74,1,6,0,0];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

export default class AnalizadorLexer extends antlr4.Lexer {

    static grammarFileName = "Analizador.g4";
    static channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	static modeNames = [ "DEFAULT_MODE" ];
	static literalNames = [ null, "'\"'", "'puts'", "'do'", "'while'", "'break'", 
                         "'{'", "'}'", "'('", "')'", "';'" ];
	static symbolicNames = [ null, null, "PUTS", "DO", "WHILE", "BREAK", "LBRACE", 
                          "RBRACE", "LPAREN", "RPAREN", "SEMI", "LETRA", 
                          "DIGITO", "SIMBOLO", "WS" ];
	static ruleNames = [ "T__0", "PUTS", "DO", "WHILE", "BREAK", "LBRACE", 
                      "RBRACE", "LPAREN", "RPAREN", "SEMI", "LETRA", "DIGITO", 
                      "SIMBOLO", "WS" ];

    constructor(input) {
        super(input)
        this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.atn.PredictionContextCache());
    }
}

AnalizadorLexer.EOF = antlr4.Token.EOF;
AnalizadorLexer.T__0 = 1;
AnalizadorLexer.PUTS = 2;
AnalizadorLexer.DO = 3;
AnalizadorLexer.WHILE = 4;
AnalizadorLexer.BREAK = 5;
AnalizadorLexer.LBRACE = 6;
AnalizadorLexer.RBRACE = 7;
AnalizadorLexer.LPAREN = 8;
AnalizadorLexer.RPAREN = 9;
AnalizadorLexer.SEMI = 10;
AnalizadorLexer.LETRA = 11;
AnalizadorLexer.DIGITO = 12;
AnalizadorLexer.SIMBOLO = 13;
AnalizadorLexer.WS = 14;



