import antlr4 from 'antlr4';
import AnalizadorLexer from './src/generated/AnalizadorLexer.js';
import AnalizadorParser from './src/generated/AnalizadorParser.js';
import readline from 'readline';

// Configurar readline para entrada por consola
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function parseInput(input) {
  const chars = new antlr4.InputStream(input);
  const lexer = new AnalizadorLexer(chars);
  const tokens = new antlr4.CommonTokenStream(lexer);
  const parser = new AnalizadorParser(tokens);
  
  parser.buildParseTrees = true; // para construir árbol

  try {
    const tree = parser.programa(); // regla inicial
    console.log("Parseo exitoso!");
    console.log("Árbol de análisis:");
    console.log(tree.toStringTree(parser.ruleNames)); // imprime el árbol en texto
  } catch (error) {
    console.error("Error al parsear:", error);
  }
}

// Preguntar por código y parsear
rl.question('Ingrese código fuente:\n', (answer) => {
  parseInput(answer);
  rl.close();
});