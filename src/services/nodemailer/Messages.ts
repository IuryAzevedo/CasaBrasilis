export default {
    welcomeHTML(){
        return{
            from: "Casa Brasilis <casabrasiliscompany@gmail.com>",
            subject: "Bem-vindo ao Casa Brasilis!",
            html: `<!DOCTYPE html>
            <html lang="pt-br">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap" rel="stylesheet">
                <style>
                    body {
                        margin: 0;
                        padding: 0;
                        font-family: 'Montserrat', sans-serif; 
                    }
            
                    .container {
                        max-width: 100%;
                        margin: 0 auto;
                        padding: 20px;
                    }
            
                    .header {
                        border: 1px solid rgb(48, 112, 139);
                        border-radius: 8px;
                        text-align: center;
                        background-color: rgb(48, 112, 139);
                        padding: 10px;
                        display: flex;
                        flex-wrap: wrap;
                    }
            
                    .header img {
                        width: 80px;
                        height: 80px;
                        margin-right: 20px;
                    }
            
                    .header h1 {
                        font-size: 2.5rem;
                        padding-top: 15px;
                        color: #fafafa;
                        margin: 0;
                    }
            
                    .content {
                        border: 3px solid rgb(48, 112, 139);
                        border-radius: 8px;
                        background-color: #fafafa;
                        padding: 20px;
                        margin: 20px; /* Espaçamento entre o conteúdo e as bordas do contêiner */
                    }
            
                    .content p {
                        font-size: 20px;
                        color: #000;
                        margin-bottom: 20px;
                    }
            
                    .content img {
                        max-width: 100%;
                        height: auto;
                        display: block;
                        margin: 0 auto;
                        margin-top: 20px;
                        max-width: 300px;
                    }
            
                    @media (max-width: 768px) {
                        .header {
                            flex-direction: column;
                        }
            
                        .header img {
                            margin-right: 0;
                            margin-bottom: 10px;
                        }
            
                        .content img {
                            max-width: 100%; /* Garante que a imagem não sairá da div em dispositivos móveis */
                        }
                    }
            
                    @media (min-width: 769px) {
                        .header img {
                            max-width: 50%; /* Reduz o tamanho da imagem para laptops */
                        }
            
                        .header h1 {
                            flex: 1; /* Permite que o texto ocupe o espaço restante ao lado da imagem */
                        }
                    }
                </style>
            </head>
            <body>
                <div class="container">
                    <div class="header">
                        <img src="https://media.discordapp.net/attachments/1112879116375576599/1165268529956790302/CasaBrasilis_logo_png.png?ex=65463be3&is=6533c6e3&hm=db9dae54fbb8bde1e0c00a9708085d82bc0d4d873f7c30eb6e86bb4aa2f1a524&=&width=647&height=647" alt="logo Casa Brasilis">
                        <h1>Bem-vindo ao Casa Brasilis!</h1>
                    </div>
                    <div class="content">
                        <p><strong>Seja bem-vindo ao nosso site.</strong></p>
                        <p>Alugue e compre casas com um custo benefício excelente!</p>
                        <p>Confira em nosso site as propriedades que se adequam com a sua realidade.</p>
                        <img src="https://media.discordapp.net/attachments/1112879116375576599/1165300645922873404/family2png.png?ex=654659cc&is=6533e4cc&hm=9bef95668b13b182bb3021ba6a710f500560d57bf6b577e992e67d4745d47e9b&=&width=700&height=700" alt="imagem palmeira">
                    </div>
                </div>
            </body>
            </html>
            `
        }
    }
}