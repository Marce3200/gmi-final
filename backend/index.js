const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const app = express();
const cors = require('cors');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(cors())



app.post('/api/form', cors(), (req, res)=> {
    nodemailer.createTestAccount((err, account) => {
        const htmlEmail =`
        <h3>Email enviado desde sitio web MGI</h3>
        <ul>
            <li>Nombre:${req.body.nombre}</li>
            <li>Email: ${req.body.mail}</li>
        </ul>
        <h3>Mensaje</h3>
        <p>${req.body.mensaje}</p>
        `;
        let transporter = nodemailer.createTransport({
            host:'smtpout.secureserver.net',//servidor de salida
            port:465,
            auth:{
                user:'contacto@mgi.cl',
                pass:'Contactocristian./',
                
            }
        });


        let mailOptions = {
            from: 'contacto@mgi.cl',
            to: 'contacto@mgi.cl',
            replyTo:'contacto@mgi.cl',
            subject:'Mail de MGI',
            html: htmlEmail
        };

        transporter.sendMail(mailOptions, (err, info)=>{
            if(err){
                return console.log(err);
            }
            console.log("Mensaje enviado", info.mensaje);
            console.log("url del mensaje", nodemailer.getTestMessageUrl(info));
        });
    });
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`Servidor a la escucha del puerto ${PORT}`);
});