document.addEventListener('DOMContentLoaded', () => {
    
    const problems = {
        1: { title: "Saludo Personalizado", difficulty: "facil", score: 50, statement: "Crea un programa que pida al usuario su nombre y luego lo salude con '¡Hola, [nombre]!'.", inputExample: "Ana", outputExample: "¡Hola, Ana!" },
        2: { title: "Tipos de Datos", difficulty: "facil", score: 60, statement: "Declara una variable con el valor 25. Imprime su edad y el tipo de dato en el formato 'Edad: [edad], Tipo: [tipo]'.", inputExample: "N/A", outputExample: "Edad: 25, Tipo: <class 'int'>" },
        3: { title: "Calculadora de Año", difficulty: "facil", score: 70, statement: "Pide al usuario su año de nacimiento y calcula el año siguiente. Imprime 'El próximo año sería: [año]'.", inputExample: "1990", outputExample: "El próximo año sería: 1991" },
        4: { title: "Repetir un Mensaje", difficulty: "facil", score: 80, statement: "Crea un programa que imprima 3 veces el mensaje 'Python es genial!' usando un bucle.", inputExample: "N/A", outputExample: "Python es genial!\nPython es genial!\nPython es genial!" },
        5: { title: "Operaciones con Listas", difficulty: "facil", score: 100, statement: "Dada la lista ['manzana', 'pera', 'naranja', 'uva'], imprime la primera, la última y luego reemplaza 'pera' por 'kiwi' e imprime la lista modificada.", inputExample: "N/A", outputExample: "Primera: manzana, Última: uva, Modificada: ['manzana', 'kiwi', 'naranja', 'uva']" },
        6: { title: "Añadir a la Lista de Compras", difficulty: "facil", score: 110, statement: "Añade 'pan' y 'leche' a la lista de compras ['manzanas', 'agua'] y luego imprímela ordenada alfabéticamente.", inputExample: "N/A", outputExample: "['agua', 'leche', 'manzanas', 'pan']" },

        14: { title: "Suma Simple", difficulty: "facil", score: 50, statement: "Pide al usuario dos números y muestra su suma.", inputExample: "5\n3", outputExample: "8" },
        15: { title: "Resta Simple", difficulty: "facil", score: 50, statement: "Pide al usuario dos números y muestra su resta (el primero menos el segundo).", inputExample: "10\n4", outputExample: "6" },
        16: { title: "Multiplicación Simple", difficulty: "facil", score: 55, statement: "Pide al usuario dos números y muestra su producto.", inputExample: "7\n6", outputExample: "42" },
        17: { title: "División Simple", difficulty: "facil", score: 55, statement: "Pide al usuario dos números y muestra su división (el primero dividido por el segundo). Asume que el segundo número no será cero.", inputExample: "20\n5", outputExample: "4.0" },
        18: { title: "Saludo con Edad", difficulty: "facil", score: 60, statement: "Pide al usuario su nombre y edad, luego muestra 'Hola [nombre], tienes [edad] años.'", inputExample: "Luis\n25", outputExample: "Hola Luis, tienes 25 años." },
        19: { title: "Longitud de Cadena", difficulty: "facil", score: 60, statement: "Pide al usuario una palabra y muestra cuántas letras tiene.", inputExample: "python", outputExample: "6" },
        20: { title: "Convertir a Mayúsculas", difficulty: "facil", score: 65, statement: "Pide al usuario una frase y muéstrala completamente en mayúsculas.", inputExample: "hola mundo", outputExample: "HOLA MUNDO" },
        21: { title: "Convertir a Minúsculas", difficulty: "facil", score: 65, statement: "Pide al usuario una frase y muéstrala completamente en minúsculas.", inputExample: "PYTHON ES GENIAL", outputExample: "python es genial" },
        22: { title: "Primer Carácter", difficulty: "facil", score: 70, statement: "Pide al usuario una palabra y muestra su primer carácter.", inputExample: "casa", outputExample: "c" },
        23: { title: "Último Carácter", difficulty: "facil", score: 70, statement: "Pide al usuario una palabra y muestra su último carácter.", inputExample: "computadora", outputExample: "a" },
        24: { title: "Número Par o Impar", difficulty: "facil", score: 75, statement: "Pide al usuario un número y muestra 'Par' si es par, o 'Impar' si es impar.", inputExample: "7", outputExample: "Impar" },
        25: { title: "Contar Vocales", difficulty: "facil", score: 80, statement: "Pide al usuario una palabra y cuenta cuántas vocales (a, e, i, o, u) tiene. No distinguir mayúsculas de minúsculas.", inputExample: "Murcielago", outputExample: "5" },
        26: { title: "Doble de un Número", difficulty: "facil", score: 50, statement: "Pide un número al usuario y muestra el doble de ese número.", inputExample: "12", outputExample: "24" },
        27: { title: "Área de un Cuadrado", difficulty: "facil", score: 60, statement: "Pide al usuario el lado de un cuadrado y calcula su área.", inputExample: "4", outputExample: "16" },
        28: { title: "Concatenar Cadenas", difficulty: "facil", score: 65, statement: "Pide al usuario dos palabras y únelas en una sola frase.", inputExample: "Hola\nMundo", outputExample: "HolaMundo" },
        29: { title: "Repetir Palabra", difficulty: "facil", score: 70, statement: "Pide al usuario una palabra y un número, luego repite la palabra ese número de veces.", inputExample: "eco\n3", outputExample: "ecoecoeco" },
        30: { title: "Verificar si es Positivo", difficulty: "facil", score: 70, statement: "Pide un número y verifica si es positivo. Muestra 'Positivo' o 'No es positivo'.", inputExample: "-5", outputExample: "No es positivo" },
        31: { title: "Lista de Números Pares", difficulty: "facil", score: 75, statement: "Crea una lista de los primeros 5 números pares (empezando desde 2) e imprímela.", inputExample: "N/A", outputExample: "[2, 4, 6, 8, 10]" },
        32: { title: "Acceder a Elemento de Lista", difficulty: "facil", score: 60, statement: "Dada la lista ['a', 'b', 'c', 'd'], imprime el segundo elemento.", inputExample: "N/A", outputExample: "b" },
        33: { title: "Longitud de Lista", difficulty: "facil", score: 60, statement: "Dada una lista ['rojo', 'verde', 'azul'], imprime cuántos elementos tiene.", inputExample: "N/A", outputExample: "3" },
        34: { title: "Comprobar si Elemento está en Lista", difficulty: "facil", score: 70, statement: "Dada la lista [1, 2, 3, 4, 5], comprueba si el número 3 está en la lista. Imprime True o False.", inputExample: "N/A", outputExample: "True" },
        35: { title: "Reemplazar Elemento en Lista", difficulty: "facil", score: 75, statement: "Dada la lista ['uno', 'dos', 'cuatro'], reemplaza 'cuatro' por 'tres' e imprime la lista.", inputExample: "N/A", outputExample: "['uno', 'dos', 'tres']" },
        36: { title: "Crear un Diccionario Simple", difficulty: "facil", score: 70, statement: "Crea un diccionario con las claves 'nombre' y 'ciudad' y asígnales tus propios valores. Imprime el diccionario.", inputExample: "N/A", outputExample: "{'nombre': 'TuNombre', 'ciudad': 'TuCiudad'}" },
        37: { title: "Acceder a Valor en Diccionario", difficulty: "facil", score: 70, statement: "Dado el diccionario {'fruta': 'manzana', 'color': 'roja'}, imprime el valor asociado a la clave 'fruta'.", inputExample: "N/A", outputExample: "manzana" },
        38: { title: "Añadir Elemento a Diccionario", difficulty: "facil", score: 75, statement: "Dado el diccionario {'item1': 10}, añade una nueva clave 'item2' con valor 20 e imprime el diccionario.", inputExample: "N/A", outputExample: "{'item1': 10, 'item2': 20}" },

        7: { title: "Diccionario de Colores", difficulty: "medio", score: 120, statement: "Dado un diccionario de colores, imprime cuántos colores hay y cuál es el primer color.", inputExample: "{'primario': 'rojo', 'secundario': 'verde'}", outputExample: "Cantidad de colores: 2, Primer color: rojo" },
        8: { title: "Calcular Descuento", difficulty: "medio", score: 150, statement: "Calcula el precio final de un producto de 100€ con un 9.55% de descuento. Imprime 'Precio final: [precio]'.", inputExample: "N/A", outputExample: "Precio final: 90.45" },
        9: { title: "Encontrar un Elemento", difficulty: "medio", score: 160, statement: "Busca e imprime el elemento en el índice 2 de la tupla (2, 4, 6, 8).", inputExample: "N/A", outputExample: "6" },
        10: { title: "Filtrar una Lista", difficulty: "medio", score: 170, statement: "Dada la lista [10, 20, 30, 40, 50], crea e imprime una nueva lista solo con los números mayores a 25.", inputExample: "N/A", outputExample: "[30, 40, 50]" },

        39: { title: "Invertir Cadena", difficulty: "medio", score: 120, statement: "Pide al usuario una palabra y muéstrala invertida.", inputExample: "python", outputExample: "nohtyp" },
        40: { title: "Contar Palabras", difficulty: "medio", score: 125, statement: "Pide al usuario una frase y cuenta cuántas palabras contiene.", inputExample: "Este es un ejemplo", outputExample: "4" },
        41: { title: "Eliminar Duplicados de Lista", difficulty: "medio", score: 130, statement: "Dada una lista con duplicados, crea una nueva lista sin duplicados y muéstrala. El orden no importa.", inputExample: "[1, 2, 2, 3, 4, 4, 4, 5]", outputExample: "[1, 2, 3, 4, 5]" },
        42: { title: "Suma de Números en Lista", difficulty: "medio", score: 130, statement: "Dada una lista de números, calcula la suma de todos sus elementos.", inputExample: "[10, 20, 30, 5]", outputExample: "65" },
        43: { title: "Promedio de Números en Lista", difficulty: "medio", score: 135, statement: "Dada una lista de números, calcula el promedio.", inputExample: "[1, 2, 3, 4, 5]", outputExample: "3.0" },
        44: { title: "Encontrar el Máximo", difficulty: "medio", score: 140, statement: "Dada una lista de números, encuentra el número más grande sin usar la función max().", inputExample: "[3, 7, 2, 9, 5]", outputExample: "9" },
        45: { title: "Encontrar el Mínimo", difficulty: "medio", score: 140, statement: "Dada una lista de números, encuentra el número más pequeño sin usar la función min().", inputExample: "[3, 7, 2, 9, 5]", outputExample: "2" },
        46: { title: "Palíndromo", difficulty: "medio", score: 145, statement: "Pide al usuario una palabra y determina si es un palíndromo (se lee igual al derecho y al revés). Ignora mayúsculas/minúsculas.", inputExample: "Anita lava la tina", outputExample: "Es un palíndromo" },
        47: { title: "Factorial de un Número", difficulty: "medio", score: 150, statement: "Pide al usuario un número entero no negativo y calcula su factorial.", inputExample: "5", outputExample: "120" },
        48: { title: "Secuencia Fibonacci", difficulty: "medio", score: 155, statement: "Pide al usuario un número N y muestra los primeros N números de la secuencia Fibonacci (empezando con 0, 1).", inputExample: "7", outputExample: "[0, 1, 1, 2, 3, 5, 8]" },
        49: { title: "Intercambiar Valores", difficulty: "medio", score: 120, statement: "Dadas dos variables 'a' y 'b', intercambia sus valores sin usar una variable temporal e imprime sus nuevos valores.", inputExample: "a = 5, b = 10", outputExample: "a: 10, b: 5" },
        50: { title: "Contar Caracter Específico", difficulty: "medio", score: 125, statement: "Pide al usuario una frase y un carácter, luego cuenta cuántas veces aparece ese carácter en la frase (sin distinguir mayúsculas/minúsculas).", inputExample: "Elefante elegante\ne", outputExample: "5" },
        51: { title: "Unir Dos Listas", difficulty: "medio", score: 130, statement: "Dadas dos listas, únelas en una sola lista e imprímela.", inputExample: "[1, 2, 3]\n[4, 5, 6]", outputExample: "[1, 2, 3, 4, 5, 6]" },
        52: { title: "Claves de un Diccionario", difficulty: "medio", score: 130, statement: "Dado un diccionario, imprime una lista con todas sus claves.", inputExample: "{'nombre': 'Ana', 'edad': 30}", outputExample: "['nombre', 'edad']" },
        53: { title: "Valores de un Diccionario", difficulty: "medio", score: 130, statement: "Dado un diccionario, imprime una lista con todos sus valores.", inputExample: "{'a': 1, 'b': 2, 'c': 3}", outputExample: "[1, 2, 3]" },
        54: { title: "Tabla de Multiplicar", difficulty: "medio", score: 135, statement: "Pide un número al usuario y muestra su tabla de multiplicar del 1 al 10.", inputExample: "7", outputExample: "7x1=7\n7x2=14\n...\n7x10=70" },
        55: { title: "Comprobar Subcadena", difficulty: "medio", score: 140, statement: "Pide al usuario dos cadenas, una frase y una subcadena, y comprueba si la subcadena está presente en la frase. Imprime True o False.", inputExample: "Hola mundo\nmundo", outputExample: "True" },
        56: { title: "Reemplazar Palabra en Frase", difficulty: "medio", score: 140, statement: "Pide al usuario una frase, una palabra a reemplazar y la nueva palabra. Imprime la frase modificada.", inputExample: "El perro corre rápido\nperro\ngato", outputExample: "El gato corre rápido" },
        57: { title: "Generador de Contraseñas Simple", difficulty: "medio", score: 150, statement: "Pide al usuario una longitud (ej. 8) y genera una contraseña aleatoria simple con letras minúsculas y números de esa longitud.", inputExample: "8", outputExample: " (Una cadena aleatoria de 8 caracteres, ej: a3f7h2k1)" },
        58: { title: "Ordenar Lista Alfabéticamente", difficulty: "medio", score: 135, statement: "Dada una lista de palabras, ordénala alfabéticamente e imprímela.", inputExample: "['banana', 'manzana', 'cereza']", outputExample: "['banana', 'cereza', 'manzana']" },
        59: { title: "Calcular Área de un Triángulo", difficulty: "medio", score: 140, statement: "Pide la base y la altura de un triángulo y calcula su área.", inputExample: "base: 10\naltura: 5", outputExample: "25.0" },
        60: { title: "Suma de Dígitos", difficulty: "medio", score: 145, statement: "Pide un número entero al usuario y calcula la suma de sus dígitos.", inputExample: "12345", outputExample: "15" },
        61: { title: "Validar Email Simple", difficulty: "medio", score: 150, statement: "Pide un email al usuario y verifica si contiene '@' y '.' (Validación muy simple). Imprime 'Válido' o 'Inválido'.", inputExample: "test@example.com", outputExample: "Válido" },
        62: { title: "Adivina el Número (Simplificado)", difficulty: "medio", score: 155, statement: "Genera un número aleatorio entre 1 y 10. Pide al usuario que adivine. Indica si es muy alto, muy bajo o correcto. (Solo 1 intento para simplificar output).", inputExample: "5 (supongamos que el número secreto es 3)", outputExample: "Demasiado alto." },
        63: { title: "Convertidor Celsius a Fahrenheit", difficulty: "medio", score: 140, statement: "Pide una temperatura en Celsius y conviértela a Fahrenheit. Fórmula: (C * 9/5) + 32.", inputExample: "25", outputExample: "77.0" },

        11: { title: "Mayúsculas y Minúsculas", difficulty: "dificil", score: 180, statement: "Convierte la cadena 'programacion python' a 'Programacion Python' (capitalizando cada palabra) e imprímela.", inputExample: "N/A", outputExample: "Programacion Python" },
        12: { title: "Formateo de Cadenas", difficulty: "dificil", score: 200, statement: "Usando f-strings, imprime 'Nombre: Maria, Edad: 30 años, Altura: 1.75m' a partir de las variables correspondientes.", inputExample: "N/A", outputExample: "Nombre: Maria, Edad: 30 años, Altura: 1.75m" },
        13: { title: "Modificar Matriz", difficulty: "dificil", score: 220, statement: "En una matriz 3x3, reemplaza el elemento en la fila 0, columna 1 por 'X' y el de la fila 2, columna 0 por 'O'. Imprime la matriz final.", inputExample: "[[1, 2, 3], [4, 5, 6], [7, 8, 9]]", outputExample: "[[1, 'X', 3], [4, 5, 6], ['O', 8, 9]]" },

        64: { title: "Anagramas", difficulty: "dificil", score: 180, statement: "Pide dos palabras al usuario y determina si son anagramas (contienen las mismas letras, misma cantidad, sin importar el orden). Ignora mayúsculas/minúsculas y espacios.", inputExample: "roma\namor", outputExample: "Son anagramas" },
        65: { title: "Compresión de Cadenas (Simple)", difficulty: "dificil", score: 185, statement: "Implementa una compresión de cadenas simple. Dada 'AAABBCDDDE', debe devolver 'A3B2C1D3E1'.", inputExample: "AAABBCDDDE", outputExample: "A3B2C1D3E1" },
        66: { title: "Descompresión de Cadenas (Simple)", difficulty: "dificil", score: 185, statement: "Implementa la descompresión de la cadena comprimida anteriormente. Dada 'A3B2C1D3E1', debe devolver 'AAABBCDDDE'.", inputExample: "A3B2C1D3E1", outputExample: "AAABBCDDDE" },
        67: { title: "Rotar Lista", difficulty: "dificil", score: 190, statement: "Dada una lista y un número k, rota la lista k posiciones hacia la derecha. Ej: [1,2,3,4,5], k=2 -> [4,5,1,2,3]", inputExample: "[1,2,3,4,5]\n2", outputExample: "[4,5,1,2,3]" },
        68: { title: "Validar Paréntesis", difficulty: "dificil", score: 200, statement: "Dada una cadena con solo '(', ')', '{', '}', '[' y ']', determina si los paréntesis son válidos (se abren y cierran correctamente).", inputExample: "{[]}", outputExample: "Válido" },
        69: { title: "Torres de Hanoi (Solo Movimientos)", difficulty: "dificil", score: 210, statement: "Pide el número de discos N (ej. 3). Imprime los movimientos para resolver las Torres de Hanoi desde la varilla 'A' a la 'C', usando 'B' como auxiliar. Formato: 'Mover disco de X a Y'", inputExample: "3", outputExample: "Mover disco de A a C\nMover disco de A a B\nMover disco de C a B\nMover disco de A a C\nMover disco de B a A\nMover disco de B a C\nMover disco de A a C" },
        70: { title: "Producto de Matrices (2x2)", difficulty: "dificil", score: 220, statement: "Dadas dos matrices 2x2, calcula su producto. Pide los elementos de cada matriz al usuario.", inputExample: "Matriz1: [[1,2],[3,4]]\nMatriz2: [[2,0],[1,2]]", outputExample: "[[4,4],[10,8]]" },
        71: { title: "Búsqueda Binaria", difficulty: "dificil", score: 200, statement: "Implementa la búsqueda binaria. Dada una lista ordenada y un elemento, encuentra el índice del elemento o indica si no está. No uses el operador 'in' o list.index().", inputExample: "[2, 5, 7, 8, 11, 12]\n7", outputExample: "Elemento encontrado en el índice 2" },
        72: { title: "Ordenamiento Burbuja", difficulty: "dificil", score: 190, statement: "Implementa el algoritmo de ordenamiento burbuja para ordenar una lista de números e imprime la lista ordenada.", inputExample: "[5, 1, 4, 2, 8]", outputExample: "[1, 2, 4, 5, 8]" },
        73: { title: "Subconjunto de Suma Máxima (Kadane)", difficulty: "dificil", score: 230, statement: "Dada una lista de enteros (positivos y negativos), encuentra el subconjunto contiguo con la suma máxima.", inputExample: "[-2, 1, -3, 4, -1, 2, 1, -5, 4]", outputExample: "6 (correspondiente al subconjunto [4, -1, 2, 1])" },
        74: { title: "Generar Permutaciones", difficulty: "dificil", score: 210, statement: "Dada una lista pequeña de elementos distintos (ej. [1,2,3]), genera todas las permutaciones posibles.", inputExample: "[1,2,3]", outputExample: "[[1,2,3], [1,3,2], [2,1,3], [2,3,1], [3,1,2], [3,2,1]]" },
        75: { title: "Merge de Dos Listas Ordenadas", difficulty: "dificil", score: 195, statement: "Dadas dos listas ordenadas, mézclalas en una sola lista ordenada.", inputExample: "[1,3,5]\n[2,4,6]", outputExample: "[1,2,3,4,5,6]" },
        76: { title: "Encontrar la Palabra Más Larga", difficulty: "dificil", score: 180, statement: "Pide una frase al usuario y encuentra la palabra más larga en ella. Si hay varias, devuelve la primera.", inputExample: "Este es un ejemplo con palabras largas", outputExample: "ejemplo" },
        77: { title: "Frecuencia de Palabras", difficulty: "dificil", score: 190, statement: "Pide una frase al usuario y muestra la frecuencia de cada palabra (cuántas veces aparece cada una). Ignora mayúsculas/minúsculas y puntuación simple.", inputExample: "Hola mundo, hola Python.", outputExample: "{'hola': 2, 'mundo': 1, 'python': 1}" },
        78: { title: "Número Primo", difficulty: "dificil", score: 185, statement: "Pide un número entero al usuario y determina si es un número primo.", inputExample: "29", outputExample: "Es primo" },
        79: { title: "Máximo Común Divisor (MCD)", difficulty: "dificil", score: 195, statement: "Pide dos números enteros al usuario y calcula su Máximo Común Divisor (MCD) usando el algoritmo de Euclides.", inputExample: "48\n18", outputExample: "6" },
        80: { title: "Simulador de Cajero Automático (Simple)", difficulty: "dificil", score: 220, statement: "Simula un cajero. Saldo inicial $1000. Permite 'consultar', 'depositar [cantidad]', 'retirar [cantidad]'. Tras cada operación, muestra el saldo. El programa termina con 'salir'. (Simplificado para output)", inputExample: "consultar\ndepositar 200\nretirar 50\nsalir", outputExample: "Saldo: 1000\nSaldo: 1200\nSaldo: 1150\nGracias." },
        81: { title: "Conteo de Islas (Matriz)", difficulty: "dificil", score: 230, statement: "Dada una matriz binaria (0s y 1s) donde 1 representa tierra y 0 agua, cuenta el número de islas (grupos de 1s conectados horizontal o verticalmente).", inputExample: "[[1,1,0,0,0],[0,1,0,0,1],[1,0,0,1,1],[0,0,0,0,0],[1,0,1,0,1]]", outputExample: "5" },
        82: { title: "Juego de la Vida (Una Generación)", difficulty: "dificil", score: 225, statement: "Implementa una generación del Juego de la Vida de Conway. Dada una matriz inicial, calcula el siguiente estado. Reglas: 1. Viva con <2 vecinas vivas muere. 2. Viva con 2-3 vecinas vivas, vive. 3. Viva con >3 vecinas vivas muere. 4. Muerta con 3 vecinas vivas, vive.", inputExample: "[[0,1,0],[0,0,1],[1,1,1]] (entrada como string de lista de listas)", outputExample: "[[0,0,0],[1,0,1],[0,1,1]] (salida como string de lista de listas)" },
        83: { title: "Balanceo de Símbolos Avanzado", difficulty: "dificil", score: 210, statement: "Verifica si una cadena con '(', ')', '{', '}', '[', ']', '<', '>' está balanceada. Ej: '([<{}>])' es válido, '[(])' no.", inputExample: "([<{}>])", outputExample: "Válido" },
        84: { title: "Distancia de Hamming", difficulty: "dificil", score: 190, statement: "Dadas dos cadenas de igual longitud, calcula la distancia de Hamming (número de posiciones en las que los caracteres difieren).", inputExample: "karolin\ncathrin", outputExample: "3" },
        85: { title: "Sudoku Validador (Simplificado)", difficulty: "dificil", score: 240, statement: "Dado un tablero de Sudoku 9x9 (como lista de listas), verifica si es una solución válida (cada fila, columna y subcuadrícula 3x3 contiene números del 1-9 sin repetir). No necesitas resolverlo, solo validarlo.", inputExample: "(Un tablero de Sudoku válido 9x9)", outputExample: "Válido" },
        86: { title: "Caballo de Ajedrez (Movimientos Posibles)", difficulty: "dificil", score: 215, statement: "Dada la posición de un caballo en un tablero de ajedrez (ej. 'a1'), calcula y muestra todas sus posibles posiciones de movimiento (ej. ['b3', 'c2']).", inputExample: "d4", outputExample: "['b3', 'b5', 'c2', 'c6', 'e2', 'e6', 'f3', 'f5']" },
        87: { title: "Sistema de Recomendación Simple (Usuarios Similares)", difficulty: "dificil", score: 235, statement: "Dados perfiles de usuarios (diccionarios de items y ratings), encuentra el usuario más similar a uno dado, basado en items en común y similitud de ratings (ej. distancia euclidiana).", inputExample: "{'user1': {'itemA': 5, 'itemB': 3}, 'user2': {'itemA': 4, 'itemC': 5}, 'user3': {'itemB': 2, 'itemA': 5}}\nuser1", outputExample: "user3" },
        88: { title: "Camino Más Corto en Laberinto (BFS)", difficulty: "dificil", score: 245, statement: "Dado un laberinto (matriz con 0 para caminos, 1 para paredes), un inicio y un fin, encuentra la longitud del camino más corto. Si no hay camino, indica -1.", inputExample: "laberinto=[[0,0,0],[1,1,0],[0,0,0]], inicio=(0,0), fin=(2,2)", outputExample: "4" }
    };
    const TIMER_INITIAL_SECONDS = 7200;

    

    const elements = {
        registrationModal: document.getElementById('registrationModal'),
        usernameInput: document.getElementById('userNameInput'), 
        registerBtn: document.getElementById('registerUserBtn'), 
        registrationError: document.getElementById('registrationError'),
        timer: document.getElementById('timer'),
        leaderboard: document.getElementById('leaderboard'),
        problemListView: document.getElementById('problem-list-view'),
        problemListContainer: document.getElementById('problem-list-container'),
        singleProblemView: document.getElementById('single-problem-view'),
        problemTitle: document.getElementById('problem-title'),
        problemStatement: document.getElementById('problem-statement'),
        problemInputExample: document.getElementById('problem-input-example'),
        problemOutputExample: document.getElementById('problem-output-example'),
        codeEditorArea: document.getElementById('code-editor-area'),
        resultsArea: document.getElementById('results-area'),
        submitCodeBtn: document.getElementById('submit-code-btn'),
        backToListBtn: document.getElementById('back-to-list-btn'),
        userInputArea: document.getElementById('user-input-area'),
        userInputField: document.getElementById('user-input-field'),
        submitInputBtn: document.getElementById('submit-input-btn'),
    };

    
    let state = {
        currentUser: null,
        currentProblemId: null,
        users: {},
        timeLeft: TIMER_INITIAL_SECONDS,
        timerInterval: null,
        inputPromiseResolver: null,
    };

    
    function showProblemListView() {
        elements.singleProblemView.style.display = 'none';
        elements.problemListView.style.display = 'block';
        state.currentProblemId = null;
        renderProblemList();
        updateLeaderboard();
    }

    function showSingleProblemView(problemId) {
        state.currentProblemId = problemId;
        const problem = problems[problemId];
        
        elements.problemTitle.textContent = `#${problemId}: ${problem.title}`;
        elements.problemStatement.textContent = problem.statement;
        elements.problemInputExample.textContent = problem.inputExample;
        elements.problemOutputExample.textContent = problem.outputExample;
        elements.resultsArea.style.display = 'none';
        
        const savedCode = state.users[state.currentUser]?.savedCode?.[problemId] || '';
        elements.codeEditorArea.value = savedCode;

        const isSolved = state.users[state.currentUser]?.solvedProblems.includes(problemId);
        elements.submitCodeBtn.disabled = isSolved;
        elements.submitCodeBtn.textContent = isSolved ? '✅ Resuelto' : 'Enviar Solución';
        elements.submitCodeBtn.style.cursor = isSolved ? 'not-allowed' : 'pointer';
        elements.codeEditorArea.readOnly = isSolved;

        elements.problemListView.style.display = 'none';
        elements.singleProblemView.style.display = 'block';
    }

    
    function renderProblemList() {
        elements.problemListContainer.innerHTML = '';
        const solvedProblems = state.users[state.currentUser]?.solvedProblems || [];

        Object.entries(problems).forEach(([id, problem]) => {
            const isSolved = solvedProblems.includes(parseInt(id));
            const item = document.createElement('div');
            item.className = `problem-list-item ${isSolved ? 'solved' : ''}`;
            item.dataset.problemId = id;
            item.innerHTML = `
                <span class="title">#${id} - ${problem.title}</span>
                <span class="difficulty ${problem.difficulty}">${problem.difficulty.charAt(0).toUpperCase() + problem.difficulty.slice(1)}</span>
            `;
            item.addEventListener('click', () => showSingleProblemView(parseInt(id)));
            elements.problemListContainer.appendChild(item);
        });
    }

    function updateLeaderboard() {
        elements.leaderboard.innerHTML = '';
        const sortedUsers = Object.entries(state.users)
            .sort(([, a], [, b]) => b.score - a.score);

        sortedUsers.forEach(([username, data], index) => {
            const studentDiv = document.createElement('div');
            studentDiv.className = 'student';
            if (index === 0) studentDiv.classList.add('first');
            else if (index === 1) studentDiv.classList.add('second');
            else if (index === 2) studentDiv.classList.add('third');
            
            studentDiv.innerHTML = `
                <span class="name">${index + 1}. ${username}</span>
                <span class="score">${data.score} pts</span>
            `;
            elements.leaderboard.appendChild(studentDiv);
        });
    }
    
    
    function runCodeWithSkulpt(code) {
        return new Promise((resolve, reject) => {
            let output = '';
            elements.resultsArea.innerHTML = 'Ejecutando...';
            elements.resultsArea.className = 'results';
            elements.resultsArea.style.display = 'block';
            
            Sk.configure({
                output: (text) => { output += text; },
                inputfun: (prompt) => {
                    elements.userInputArea.style.display = 'block';
                    elements.userInputField.focus();
                    return new Promise((resume) => { state.inputPromiseResolver = resume; });
                },
                inputfunTakesPrompt: true,
                __future__: Sk.python3
            });
            
            const executionPromise = Sk.misceval.asyncToPromise(() => Sk.importMainWithBody("<stdin>", false, code, true));
            
            
            const timeoutPromise = new Promise((_, rej) => setTimeout(() => rej(new Error("Tiempo de ejecución excedido (más de 5 segundos).")), 5000));
            
            Promise.race([executionPromise, timeoutPromise])
                .then(() => resolve(output.trim()))
                .catch((err) => reject(err))
                .finally(() => {
                    elements.userInputArea.style.display = 'none';
                    state.inputPromiseResolver = null;
                });
        });
    }








async function validateProblemSolution(problemId, code) {
    
    const validations = {
        1: () => { 
            if (!code.includes('input(') && !code.includes('input (')) {
                throw new Error("⚠️ Debes usar la función input() para solicitar el nombre del usuario.");
            }
            if (!code.toLowerCase().includes("hola")) {
                throw new Error("⚠️ El saludo debe contener la palabra 'Hola'.");
            }
            
            if (code.includes('"¡Hola, Ana!"') || code.includes("'¡Hola, Ana!'")) {
                throw new Error("⚠️ No puedes hardcodear la respuesta. Debes usar el nombre ingresado por el usuario.");
            }
        },
        
        2: () => { 
            if (!code.includes('type(') && !code.toLowerCase().includes('type ')) {
                throw new Error("⚠️ Debes usar la función type() para obtener el tipo de dato.");
            }
            if (code.includes('"Edad: 25, Tipo: <class \'int\'>"') || code.includes("'Edad: 25, Tipo: <class 'int'>'")) {
                throw new Error("⚠️ No puedes hardcodear la respuesta. Debes calcular el tipo dinámicamente.");
            }
        },
        
        3: () => { 
            const hasInput = code.includes('input(') || code.includes('input (');
            const hasConversion = /int\s*\(\s*input\s*\(/.test(code) || /float\s*\(\s*input\s*\(/.test(code);
            const hasSum = /\+\s*1/.test(code) || /1\s*\+/.test(code);
            
            if (!hasInput) {
                throw new Error("⚠️ Debes usar input() para solicitar el año de nacimiento.");
            }
            if (!hasConversion) {
                throw new Error("⚠️ Debes convertir el input a número usando int() o float().");
            }
            if (!hasSum) {
                throw new Error("⚠️ Debes sumar 1 al año ingresado.");
            }
            
            if (code.includes('1991') && !code.includes('1990')) {
                throw new Error("⚠️ No puedes hardcodear el resultado. Debes calcularlo a partir del input.");
            }
        },
        
        4: () => { 
            const hasLoop = /for\s+\w+\s+in\s+range\s*\(/.test(code) || /while\s+/.test(code) || /for\s+\w+\s+in\s+\[/.test(code);
            if (!hasLoop) {
                throw new Error("⚠️ Debes usar un bucle (for o while) para repetir el mensaje.");
            }
            if (code.includes('print("Python es genial!\\nPython es genial!\\nPython es genial!")')) {
                throw new Error("⚠️ No puedes hardcodear las 3 líneas. Debes usar un bucle.");
            }
        },
        
        5: () => { 
            if (!code.includes('[0]') && !code.includes('lista[0]')) {
                throw new Error("⚠️ Debes acceder al primer elemento usando índice [0].");
            }
            if (!code.includes('[-1]') && !code.includes('[3]')) {
                throw new Error("⚠️ Debes acceder al último elemento usando índice [-1] o [3].");
            }
            if (code.includes('"Primera: manzana, Última: uva"')) {
                throw new Error("⚠️ No puedes hardcodear la respuesta. Debes acceder a los elementos dinámicamente.");
            }
        },
        
        6: () => { 
            const hasAppend = code.includes('.append(') || code.includes('.extend(') || code.includes('+');
            const hasSort = code.includes('.sort()') || code.includes('sorted(');
            
            if (!hasAppend) {
                throw new Error("⚠️ Debes usar .append(), .extend() o + para añadir elementos a la lista.");
            }
            if (!hasSort) {
                throw new Error("⚠️ Debes usar .sort() o sorted() para ordenar la lista alfabéticamente.");
            }
        },
        
        7: () => { 
            if (!code.includes('len(') && !code.includes('len ')) {
                throw new Error("⚠️ Debes usar len() para contar los elementos del diccionario.");
            }
            if (code.includes('2') && code.includes('rojo') && !code.includes('len(')) {
                throw new Error("⚠️ No puedes hardcodear los valores. Debes calcularlos dinámicamente.");
            }
        },
        
        8: () => { 
            const hasCalculation = /100\s*\*\s*0\.9055/.test(code) || /100\s*\*\s*\(1\s*-\s*0\.0955\)/.test(code) || 
                                 /100\s*-\s*100\s*\*\s*0\.0955/.test(code) || /100\s*-\s*9\.55/.test(code);
            
            if (!hasCalculation) {
                throw new Error("⚠️ Debes calcular el descuento matemáticamente (100 * 0.9055 o 100 - 9.55).");
            }
            if (code.includes('90.45') && !code.includes('100')) {
                throw new Error("⚠️ No puedes hardcodear el resultado. Debes calcularlo.");
            }
        },
        
        9: () => { 
            if (!code.includes('[2]')) {
                throw new Error("⚠️ Debes acceder al elemento usando el índice [2].");
            }
            if (code.includes('6') && !code.includes('[2]')) {
                throw new Error("⚠️ No puedes hardcodear el resultado. Debes acceder al índice 2.");
            }
        },
        
        10: () => { 
            const hasFilter = code.includes('> 25') || code.includes('>25') || 
                             code.includes('filter(') || code.includes('comprehension');
            
            if (!hasFilter) {
                throw new Error("⚠️ Debes filtrar los números mayores a 25 usando una condición o filter().");
            }
        },
        
        11: () => { 
            if (!code.includes('.title()') && !code.includes('.capitalize()')) {
                throw new Error("⚠️ Debes usar .title() para capitalizar cada palabra.");
            }
            if (code.includes('"Programacion Python"') && !code.includes('.title()')) {
                throw new Error("⚠️ No puedes hardcodear el resultado. Debes usar métodos de string.");
            }
        },
        
        12: () => { 
            if (!code.includes('f"') && !code.includes("f'")) {
                throw new Error("⚠️ Debes usar f-strings (f\"...\") para el formateo.");
            }
            if (code.includes('"Nombre: Maria, Edad: 30 años, Altura: 1.75m"') && !code.includes('f"')) {
                throw new Error("⚠️ No puedes hardcodear el resultado. Debes usar f-strings con variables.");
            }
        },
        
        13: () => { 
            const hasIndexAccess = /\[\s*0\s*\]\s*\[\s*1\s*\]/.test(code) && /\[\s*2\s*\]\s*\[\s*0\s*\]/.test(code);
            
            if (!hasIndexAccess) {
                throw new Error("⚠️ Debes acceder a los elementos usando índices [0][1] y [2][0].");
            }
            if (code.includes("'X'") && code.includes("'O'") && !hasIndexAccess) {
                throw new Error("⚠️ No puedes hardcodear la matriz final. Debes modificar los elementos específicos.");
            }
        }
    };
    
    
    if (validations[problemId]) {
        validations[problemId]();
    }
}

async function runMultipleTestCases(problemId, code) {
    
    const testCases = {
        1: [
            { input: "Carlos", expected: "¡Hola, Carlos!" },
            { input: "Maria", expected: "¡Hola, Maria!" },
            { input: "José", expected: "¡Hola, José!" }
        ],
        3: [
            { input: "1985", expected: "El próximo año sería: 1986" },
            { input: "2000", expected: "El próximo año sería: 2001" },
            { input: "1990", expected: "El próximo año sería: 1991" }
        ]
    };
    
    if (!testCases[problemId]) return null;
    
    for (const testCase of testCases[problemId]) {
        
        const modifiedCode = code.replace(/input\([^)]*\)/g, `"${testCase.input}"`);
        
        try {
            const output = await runCodeWithSkulpt(modifiedCode);
            const normalize = (str) => str.replace(/"/g, "'").trim();
            
            if (normalize(output) !== normalize(testCase.expected)) {
                throw new Error(`Falló con input "${testCase.input}". Se esperaba: "${testCase.expected}", pero se obtuvo: "${output}"`);
            }
        } catch (error) {
            throw new Error(`Error en caso de prueba con input "${testCase.input}": ${error.message}`);
        }
    }
    
    return true;
}

async function handleSubmit() {
    if (!state.currentUser) return;
    
    const code = elements.codeEditorArea.value.trim();
    const problemId = state.currentProblemId;

    
    if (!code) {
        showResults('❌ Error', 'Debes escribir código antes de enviar la solución.', 'error');
        return;
    }

    
    const originalButtonText = elements.submitCodeBtn.textContent;
    elements.submitCodeBtn.disabled = true;
    elements.submitCodeBtn.textContent = '⏳ Procesando...';
    
    showResults('⏳ Procesando', 'Validando y ejecutando tu código...', 'processing');

    try {
        
        await validateProblemSolution(problemId, code);
        
        
        showResults('⏳ Ejecutando', 'Ejecutando tu código...', 'processing');
        const output = await runCodeWithSkulpt(code);
        const expected = problems[problemId].outputExample.replace(/\n/g, '\n');
        const normalize = (str) => str.replace(/"/g, "'").trim();

        
        if (normalize(output) !== normalize(expected)) {
            showResults('❌ Incorrecto', 
                `<strong>Tu salida:</strong> <pre>${output}</pre><br><strong>Salida esperada:</strong> <pre>${expected}</pre>`, 
                'error');
            return;
        }
        
        
        showResults('⏳ Validando', 'Ejecutando casos de prueba adicionales...', 'processing');
        try {
            await runMultipleTestCases(problemId, code);
        } catch (testError) {
            showResults('❌ Falló casos de prueba', 
                `Tu solución falló en casos de prueba adicionales:<br><pre>${testError.message}</pre>`, 
                'error');
            return;
        }
        
        
        showResults('✅ ¡Correcto!', 
            'Tu código pasó todas las validaciones y casos de prueba.', 
            'success');
        markProblemAsSolved(problemId);
        
    } catch (error) {
        console.error('Error en handleSubmit:', error);
        showResults('❌ Error en el código', 
            error.toString(), 
            'error');
    } finally {
        
        if (!state.users[state.currentUser]?.solvedProblems.includes(problemId)) {
            elements.submitCodeBtn.disabled = false;
            elements.submitCodeBtn.textContent = originalButtonText;
        }
    }
}

function showResults(title, message, type) {
    elements.resultsArea.innerHTML = `<strong>${title}</strong><br>${message}`;
    elements.resultsArea.className = `results ${type}`;
    elements.resultsArea.style.display = 'block';
    
    
    elements.resultsArea.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}







    
    function saveStateToLocalStorage() {
        localStorage.setItem('pycontestUsers', JSON.stringify(state.users));
        if (state.currentUser) {
            localStorage.setItem('lastPycontestUser', state.currentUser);
        }
    }

    function loadStateFromLocalStorage() {
        state.users = JSON.parse(localStorage.getItem('pycontestUsers')) || {};
        const lastUser = localStorage.getItem('lastPycontestUser');
        if (lastUser && state.users[lastUser]) {
            state.currentUser = lastUser;
            state.timeLeft = state.users[lastUser].timeLeft;
        }
    }

    function registerUser() {
        const username = elements.usernameInput.value.trim();
        if (username.length < 3) {
            elements.registrationError.textContent = "El nombre debe tener al menos 3 caracteres.";
            return;
        }

        if (!state.users[username]) {
            state.users[username] = { score: 0, solvedProblems: [], timeLeft: TIMER_INITIAL_SECONDS, savedCode: {} };
        }

        state.currentUser = username;
        state.timeLeft = state.users[username].timeLeft;
        elements.registrationModal.style.display = 'none';
        
        showProblemListView();
        startTimer();
        saveStateToLocalStorage();
    }

    function markProblemAsSolved(problemId) {
        const user = state.users[state.currentUser];
        if (user && !user.solvedProblems.includes(problemId)) {
            user.solvedProblems.push(problemId);
            user.score += problems[problemId].score;
            
            saveStateToLocalStorage();
            updateLeaderboard();
            showCelebration();
            showSingleProblemView(problemId); 
        }
    }

    function startTimer() {
        if (state.timerInterval) clearInterval(state.timerInterval);
        state.timerInterval = setInterval(() => {
            if (state.timeLeft > 0) {
                state.timeLeft--;
                const hours = Math.floor(state.timeLeft / 3600);
                const minutes = Math.floor((state.timeLeft % 3600) / 60);
                const seconds = state.timeLeft % 60;
                elements.timer.textContent = `⏰ Tiempo: ${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
                
                if (state.currentUser) {
                    state.users[state.currentUser].timeLeft = state.timeLeft;
                    if(state.timeLeft % 10 === 0) saveStateToLocalStorage(); 
                }
            } else {
                clearInterval(state.timerInterval);
                alert("¡Tiempo agotado!");
            }
        }, 1000);
    }
    
    function showCelebration() {
        const celebration = document.createElement('div');
        celebration.className = 'celebration-popup';
        celebration.innerHTML = '🎉 ¡Correcto! 🎉';
        document.body.appendChild(celebration);
        setTimeout(() => { celebration.remove(); }, 2500);
    }

    
    elements.registerBtn.addEventListener('click', registerUser);
    elements.usernameInput.addEventListener('keypress', (e) => e.key === 'Enter' && registerUser());
    elements.backToListBtn.addEventListener('click', showProblemListView);
    elements.submitCodeBtn.addEventListener('click', handleSubmit);
    
    elements.submitInputBtn.addEventListener('click', () => {
        if (state.inputPromiseResolver) {
            state.inputPromiseResolver(elements.userInputField.value);
            state.inputPromiseResolver = null;
            elements.userInputField.value = '';
            elements.userInputArea.style.display = 'none';
        }
    });
    elements.userInputField.addEventListener('keypress', (e) => e.key === 'Enter' && elements.submitInputBtn.click());

    elements.codeEditorArea.addEventListener('input', () => {
        if (state.currentUser && state.currentProblemId) {
            if (!state.users[state.currentUser].savedCode) {
                state.users[state.currentUser].savedCode = {};
            }
            state.users[state.currentUser].savedCode[state.currentProblemId] = elements.codeEditorArea.value;
            
            if(state.timeLeft % 5 === 0) saveStateToLocalStorage();
        }
    });
    
    
    function init() {
        loadStateFromLocalStorage();
        if (state.currentUser) {
            elements.registrationModal.style.display = 'none';
            showProblemListView();
            startTimer();
        } else {
            elements.registrationModal.style.display = 'flex';
        }
    }

    init();
});