import { transporter } from "../../services/nodemailer/Transport";
import messages from '../../services/nodemailer/Messages'
async function sendEmailWelcome(req, res){
    try{
        const message = messages.welcomeHTML()
        await transporter.sendMail(message)
        if (res) {
            res.status(200).json({ message: 'Email de boas vindas enviado com sucesso!' });
        }
    } catch(err){
        console.error('Erro ao enviar email de boas vindas:', err);
        if (res) {
            res.status(500).json({ error: 'Erro interno de servidor' });
        }
    }
}


export {sendEmailWelcome}