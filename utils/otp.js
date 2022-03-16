const axios = require('axios');

const generateOtp = (otp_length) => {
    var digits = "0123456789";
    let OTP = "";
    for(let i = 0; i < otp_length; i++) {
        OTP += digits[Math.floor(Math.random() * 10)];
    }
    return OTP;
}

const sendOtp = async(phone, otp) => {
    let apiKey = "NzQ0NjczMzU0YTRkNmMzNzQ0NDg2MTU5NDk0Zjc2NDk=";
// Message details
    let number = phone //array(918123456789, 918987654321);
    let sender = "328952";
    //let message = rawurlencode(`Testing Otp message ${otp}`);

    const msg = `Greetings from Techvanto Pvt Ltd. Your OTP is ${otp}.`
    const params = new URLSearchParams();
    console.log("params",params);
    params.append("numbers", [parseInt("91" + number)]);
    params.append(
        "message",
        msg
    );
    //https://control.textlocal.in/
    //https://api.textlocal.in/
    try {
        const httpClient = axios.create({
            baseURL: "https://api.textlocal.in/",
            params: {
                apiKey: apiKey,
                sender: sender
            }
        })
        const data = await httpClient.post("send", params)
        console.log("data==",data.data)
        return data
    } catch (e) {
        console.log("error=",e)
    }
 
// $numbers = implode(‘,’, $numbers);
 
// // Prepare data for POST request
// $data = array(‘apikey’ => $apiKey, ‘numbers’ => $numbers, “sender” => $sender, “message” => $message);
// // Send the POST request with cURL
// $ch = curl_init(‘https://api.textlocal.in/send/’);
// curl_setopt($ch, CURLOPT_POST, true);
// curl_setopt($ch, CURLOPT_POSTFIELDS, $data);
// curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
// $response = curl_exec($ch);
// curl_close($ch);
// // Process your response here
// echo $response;
 }

module.exports = {
    generateOtp,
    sendOtp
}