const htmlString = `
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Desafío 3 - Servidores con Express</title>
    <style>
        body {
            background-color: #f0f0f0;
            color: #333;
            font-family: Arial, sans-serif;
            margin: 20px;
        }

        header {
            background-color: #3498db;
            color: #fff;
            padding: 10px;
            border: 1px solid #bdc3c7;
            text-align: center;
        }

        .subtitle {
            background-color: #3498db;
            font-family: 'Courier New', Courier, monospace;
            padding: 10px;
            overflow-x: auto;
            font-weight: bold;
        }

        .miDiv {
            display: flex;
            background-color: #b7e1cd; /* Verde pastel */
            color: #fff; /* Texto blanco */
            border: 1px dotted #1a1a1a; /* Borde punteado en color negro */
            margin: 20px; /* Margen horizontal y vertical de 20px */
            padding: 10px; /* Añadiendo relleno para separar el texto del borde */
        }

        a {
            align-self: center;
        }
    </style>
</head>
<body>
    <header>
        <h1>Desafío 3: Servidores con Express</h1>
        <p class="subtitle">
        /*----------------------------------------------------------------------------------------------------------------- */<br>
          CODERHOUSE - CURSO BACKEND - COMISION 50045.<br>
          DESAFIO: 3: Servidores con express.<br>
              ALUMNO: Guillermo Guardia.<br>
          FECHA: 21-01-2024.<br>
        
        /*-------------------------------------------------------------------------------------------------------------------*/<br>
            </p>
    </header>
    <main>
        
    <h1>PROCESO DE TESTING
    </h1>
                <div class="miDiv"> 
                    <p>Se mandará a llamar desde el navegador a la url <a href="http://localhost:8080/products">http://localhost:8080/products</a> sin query, eso debe devolver todos los 10 productos.<p>
                </div>

                <div class="miDiv"> 
                <p>Se mandará a llamar desde el navegador a la url <a href="http://localhost:8080/products?limit=5">http://localhost:8080/products?limit=5</a> , eso debe devolver sólo los primeros 5 de los 10 productos.<p>
                    </div>

            <div class="miDiv"> 
            <p>Se mandará a llamar desde el navegador a la url <a href="http://localhost:8080/products/2">http://localhost:8080/products/2</a>, eso debe devolver sólo el producto con id=2.
            <p>
            </div>

        <div class="miDiv"> 
        <p>Se mandará a llamar desde el navegador a la url <a href="http://localhost:8080/products/34123123">http://localhost:8080/products/34123123</a>, al no existir el id del producto, debe devolver un objeto con un error indicando que el producto no existe.
        <p>
    </div>
           
                      
        
    
    </<main>

</body>
</html>
`;

module.exports = htmlString