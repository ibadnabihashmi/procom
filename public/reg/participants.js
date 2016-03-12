$(document).ready(function(){
    $('.comptype').change(function(){
        $('.resultcont').html('<h1 class="text-center">Processing......</h1>');
        $.post('/getParticipants',{
            type:$(this).val(),
            _csrf:$('#token').val()
        },function(res){
            $('.resultcont').html('');
            $('.resultcont').append('<h3 class="lengthpart">Total : '+res.length+'</h3>');
            for(var i=0;i<res.data.length;i++){
                $('.resultcont').append('<div style="padding: 10px; border: 1px solid #B6B6B6;">'+
                    '<p><strong>Email:</strong> '+res.data[i].email+'</p>'+
                    '<p><strong>Phone:</strong> '+res.data[i].phone+'</p>'+
                    '<p><strong>Member1:</strong> '+res.data[i].mem1+'</p>'+
                    '<p><strong>Member2:</strong> '+res.data[i].mem2+'</p>'+
                    '<p><strong>Member3:</strong> '+res.data[i].mem3+'</p>'+
                    '<p><strong>Member4:</strong> '+res.data[i].mem4+'</p>'+
                    '<p><strong>Member5:</strong> '+res.data[i].mem5+'</p>'+
                    '<p><strong>Team name:</strong> '+res.data[i].teamname+'</p>'+
                    '<p><strong>Ambassador:</strong> '+res.data[i].ambassador+'</p>'+
                    '<p><strong>Institute:</strong> '+res.data[i].institute+'</p>'+
                    '<p><strong>Why?:</strong> '+res.data[i].why+'</p>'+
                    '<p><strong>Software:</strong> '+res.data[i].software+'</p>'+
                    '<p><strong>type:</strong> '+res.data[i].type+'</p>'+
                    '</div>');
            }
        });
    });
});
