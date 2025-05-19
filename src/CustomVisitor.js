import AnalizadorVisitor from './generated/AnalizadorVisitor.js';

export class CustomVisitor extends AnalizadorVisitor {
    visitPrograma(ctx) {
        return this.visit(ctx.instrucciones());
    }

    visitInstrucciones(ctx) {
        if (ctx.instruccion().length > 0) {
            return ctx.instruccion().map(i => this.visit(i)).join('\n');
        }
        return this.visit(ctx.instruccion());
    }

    visitInstruccion(ctx) {
        return this.visit(ctx.bucle());
    }

    visitBucle(ctx) {
        const cuerpo = this.visit(ctx.sentencia());
        const condicion = this.visit(ctx.condicion());
        return `do {\n${cuerpo}\n} while (${condicion});`;
    }

    visitSentencia(ctx) {
        let resultado = '';
        if (ctx.salida) {
            resultado += this.visit(ctx.salida());
        }
        if (ctx.terminar) {
            resultado += this.visit(ctx.terminar());
        }
        if (ctx.sentencia && ctx.sentencia().length > 0) {
            resultado += ctx.sentencia().map(s => this.visit(s)).join('\n');
        }
        return resultado;
    }

    visitSalida(ctx) {
        const texto = this.visit(ctx.cadena());
        return `console.log(${texto});\n`;
    }

    visitTerminar(ctx) {
        return `break;\n`;
    }

    visitCondicion(ctx) {
        return ctx.getText(); // devuelve '0' o '1'
    }

    visitCadena(ctx) {
        return `"${this.visit(ctx.caracteres())}"`;
    }

    visitCaracteres(ctx) {
        if (ctx.caracter().length > 0) {
            return ctx.caracter().map(c => this.visit(c)).join('');
        }
        return this.visit(ctx.caracter());
    }

    visitCaracter(ctx) {
        return ctx.getText();
    }
}