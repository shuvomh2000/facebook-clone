const nodemailer = require("nodemailer");
const {google} = reqquire("googleapis")
const {OAuth2} =google.auth

const accessLink = "https://developers.google.com/oauth.playground"

const {EMAIL,MAILING_ID,MAILING_SECRET,MAILING_REFRESH} = process.env

const auth = new OAuth2({
    MAILING_ID,
    MAILING_SECRET,
    MAILING_REFRESH,
    accessLink
})

exports.sendVerificationMail = (email,name,url) => {
    auth.setCredentials({
        refresh_token: MAILING_REFRESH
    })
    const accessToken = auth.getAccessToken()
    const stmp = nodemailer.createTransport({
        service:"gmail",
        auth:{
            type: "OAuth2",
            user: EMAIL,
            clientId:MAILING_ID,
            clientSecret:MAILING_SECRET,
            refreshToken:MAILING_REFRESH,
            accessToken
        }
    })
    const mailOption = {
        from: EMAIL,
        to: email,
        subject: "Verfication MAil",
        html:``,
    }
     
    stmp.sendMail(mailOption,(err,res)=>{
        if(err) return err
        return res
    })
}