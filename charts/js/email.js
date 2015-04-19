$("#send-email").click(function(e) {
        console.log("email sent");
        $.ajax({
            type: 'POST',
            url: 'https://mandrillapp.com/api/1.0/messages/send.json',
            data: {
                'key': 'oQOJA_UoZIcbjI36Z5v2vQ',
                'message': {
                    'from_email': 'pkoullick@gmail.com',
                    'to': [
                        {
                            'email': 'pkoullick@gmail.com',
                            'type': 'to'
                        }
                    ],
                    'autotext': 'true',
                    'subject': 'This is a test email',
                    'html': 'content for your email'
                }   
            }
        }).done(function(response) {
            console.log(response);
        });
    });
