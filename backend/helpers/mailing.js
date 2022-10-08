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
        html:`<div style="max-width:600px;margin:0 auto"><div style="display:flex;column-gap:24px;border-bottom:1px solid #000;padding-bottom:10px"><div><img src="https://i.ibb.co/Ld0J9xw/icon-1.png" alt="icon"></div><div><p style="font-family:sans-serif">Confirm Email</p></div></div><p style="font-family:sans-serif">Hi ${name},</p><p style="font-family:sans-serif">Thanks for sign up in Facebook. Please verify your email by click confirm to continue</p><p style="font-family:sans-serif">Verification Link:</p><a href="${url}" style="text-decoration:none;display:inline-block;padding:5px 30px;color:#fff;background:#0c88ef">Confirm</a><p style="font-family:sans-serif">from CIT ©️ Facebook. CIT Platforms, Inc., Attention: Community Support, 1 Facebook Way, Menlo Park, CA 94025 Thismessage was sent to shawon@gmail.com. To help keep your account secure, please don't forward this email.</p></div>`,
    }
     
    stmp.sendMail(mailOption,(err,res)=>{
        if(err) return err
        return res
    })
}