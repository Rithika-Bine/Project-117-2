var date = new Date()
let display_date = "Date : " + date.toLocaleDateString()

$(document).ready(function() {
    $("#date").html(display_date)
})

let predicted_emotion ; 

$(function(){
    $("#button").click(function(){
        //we r storing it inside input_data for having json format
        let input_data = {
            "text" : $("#text").val()
        }
        console.log(input_data)

        $.ajax({
            url : "/predict_emotion",
            type : 'POST',
            data : JSON.stringify(input_data),
            dataType : "json",
            contentType : 'application/json',
            success : function(result){
                predicted_emotion = result.data.predicted_emotion
                emo_url = result.data.predicted_emotion_img_url

                $('#sentiment').html(predicted_emotion)
                $('#sentiment').css('display','block')

                $('#emoji').attr('src', emo_url)
                $('#emoji').css('display','block')

            },
            error : function(result){
                alert(result.response.JSON.message)
            }
        })
    })
})