# Analizador
Analizador UTN - Lenguaje Simple con Bucle do-while
Alumno: Juan Pablo Echegaray
Legajo: 51963
________________________________________
ESTRUCTURA DEL PROYECTO
•	grammar/Analizador.g4: Gramática ANTLR para el lenguaje definido.
•	src/generated/: Archivos generados por ANTLR (lexer, parser, visitor).
•	src/CustomVisitor.js: Visitor personalizado para el análisis semántico o traducción.
•	index.js: Script principal que ejecuta el analizador y la traducción.
•	input.js / input.txt: Archivos para colocar el código fuente a analizar.
•	output.js: Archivo donde se genera el código traducido (JavaScript).
•	README.md: Archivo con instrucciones y descripción del proyecto.
________________________________________
INSTRUCCIONES DE USO
Generar el árbol de derivación sintáctica
1.	Colocar el código fuente que  se desea analizar en el archivo input.txt.
2.	Ejecutar el comando para generar el parser y lexer (si no se hixo anteriormente):
bash
CopiarEditar
java -jar C:\ruta\a\antlr-4.13.1-complete.jar -Dlanguage=JavaScript -visitor -o src/generated grammar/Analizador.g4
3.	Usar una extensión de VSCode para ANTLR4 para abrir el archivo grammar/Analizador.g4 y genera el árbol pulsando F5 
4.	Visualizar el árbol generado para entender la estructura del código.
________________________________________
Ejecutar análisis léxico, sintáctico y generar traducción a JavaScript
1.	Colocar el código fuente en el archivo input.js.
2.	Desde la terminal, navegar a la carpeta raíz del proyecto (donde está index.js).
3.	Ejecutar el comando:
bash
CopiarEditar
node index.js
4.	El programa analizará el código, mostrará mensajes de error o éxito, y generará el archivo output.js con la traducción.


Notas importantes
•	El lenguaje es case-sensitive: todas las palabras reservadas deben ir en minúsculas (puts, break, do, while).
•	Asegurarse de ejecutar el comando para regenerar los archivos ANTLR si se modifica la gramática.
•	El espacio y saltos de línea se van a ignorar automáticamente.
