$(document).ready(function(){
    $('.reg').click(function(e){
        var canContinue = true;

        if($('#min').val() == "1"){
            if($('#phone').val() == ''){
                $('.req-phone').text('above field is required');
                canContinue = false;
            }
            if($('#email').val() == ''){
                $('.req-email').text('above field is required');
                canContinue = false;
            }
            if($('#mem1').val() == ''){
                $('.req-mem1').text('above field is required');
                canContinue = false;
            }
        }
        if($('#min').val() == "2"){
            if($('#phone').val() == ''){
                $('.req-phone').text('above field is required');
                canContinue = false;
            }
            if($('#email').val() == ''){
                $('.req-email').text('above field is required');
                canContinue = false;
            }
            if($('#mem1').val() == ''){
                $('.req-mem1').text('above field is required');
                canContinue = false;
            }
            if($('#mem2').val() == ''){
                $('.req-mem2').text('above field is required');
                canContinue = false;
            }
        }
        if($('#min').val() == "3"){
            if($('#phone').val() == ''){
                $('.req-phone').text('above field is required');
                canContinue = false;
            }
            if($('#email').val() == ''){
                $('.req-email').text('above field is required');
                canContinue = false;
            }
            if($('#mem1').val() == ''){
                $('.req-mem1').text('above field is required');
                canContinue = false;
            }
            if($('#mem2').val() == ''){
                $('.req-mem2').text('above field is required');
                canContinue = false;
            }
            if($('#mem3').val() == ''){
                $('.req-mem3').text('above field is required');
                canContinue = false;
            }
        }
        if($('#min').val() == "4"){
            if($('#phone').val() == ''){
                $('.req-phone').text('above field is required');
                canContinue = false;
            }
            if($('#email').val() == ''){
                $('.req-email').text('above field is required');
                canContinue = false;
            }
            if($('#mem1').val() == ''){
                $('.req-mem1').text('above field is required');
                canContinue = false;
            }
            if($('#mem2').val() == ''){
                $('.req-mem2').text('above field is required');
                canContinue = false;
            }
            if($('#mem3').val() == ''){
                $('.req-mem3').text('above field is required');
                canContinue = false;
            }
            if($('#mem4').val() == ''){
                $('.req-mem4').text('above field is required');
                canContinue = false;
            }
        }
        if($('#min').val() == "5"){
            if($('#phone').val() == ''){
                $('.req-phone').text('above field is required');
                canContinue = false;
            }
            if($('#email').val() == ''){
                $('.req-email').text('above field is required');
                canContinue = false;
            }if($('#mem1').val() == ''){
                $('.req-mem1').text('above field is required');
                canContinue = false;
            }
            if($('#mem2').val() == ''){
                $('.req-mem2').text('above field is required');
                canContinue = false;
            }
            if($('#mem3').val() == ''){
                $('.req-mem3').text('above field is required');
                canContinue = false;
            }
            if($('#mem4').val() == ''){
                $('.req-mem4').text('above field is required');
                canContinue = false;
            }
            if($('#mem5').val() == ''){
                $('.req-mem5').text('above field is required');
                canContinue = false;
            }

        }


        var data = {};
        data['_csrf'] = $('#token').val();
        data['type'] = window.location.pathname.split("/")[2];
        data['institute'] = $('#institute').val();

        if($('#max').val() == "1"){
            data['mem1'] = $('#mem1').val();
            data['phone'] = $('#phone').val();
            data['email'] = $('#email').val();
        }else if($('#max').val() == "2"){
            data['mem1'] = $('#mem1').val();
            data['phone'] = $('#phone').val();
            data['email'] = $('#email').val();
            data['mem2'] = $('#mem2').val();
        }else if($('#max').val() == "3"){
            data['mem1'] = $('#mem1').val();
            data['phone'] = $('#phone').val();
            data['email'] = $('#email').val();
            data['mem2'] = $('#mem2').val();
            data['mem3'] = $('#mem3').val();
        }else if($('#max').val() == "4"){
            data['mem1'] = $('#mem1').val();
            data['phone'] = $('#phone').val();
            data['email'] = $('#email').val();
            data['mem2'] = $('#mem2').val();
            data['mem3'] = $('#mem3').val();
            data['mem4'] = $('#mem4').val();
        }else if($('#max').val() == "5"){
            data['mem1'] = $('#mem1').val();
            data['phone'] = $('#phone').val();
            data['email'] = $('#email').val();
            data['mem2'] = $('#mem2').val();
            data['mem3'] = $('#mem3').val();
            data['mem4'] = $('#mem4').val();
            data['mem5'] = $('#mem5').val();
        }
        if($('#dep').val() == 'cs'){
            if($('#why').val() == ''){
                $('.req-why').text('above field is required');
                canContinue = false;

            }
            if($('#teamname').val() == ''){
                $('.req-teamname').text('above field is required');
                canContinue = false;

            }
            if($('#institute').val() == ''){
                $('.req-ins').text('above field is required');
                canContinue = false;
            }
            data['why'] = $('#why').val();
            data['teamname'] = $('#teamname').val();
            data['software'] = $('#software').val();
            data['ambassador'] = $('#ambassador').val();
            data['institute'] = $('#institute').val();
        }
        if($('#dep').val() == 'ee'){

            if($('#teamname').val() == ''){
                $('.req-teamname').text('above field is required');
                canContinue = false;

            }
            if($('#institute').val() == ''){
                $('.req-ins').text('above field is required');
                canContinue = false;
            }
            data['teamname'] = $('#teamname').val();
            data['ambassador'] = $('#ambassador').val();
            data['institute'] = $('#institute').val();
        }
        if($('#dep').val() == 'bba'){

            if($('#institute').val() == ''){
                $('.req-ins').text('above field is required');
                canContinue = false;
            }
            data['ambassador'] = $('#ambassador').val();
            data['institute'] = $('#institute').val();
        }

        if($('#dep').val() == 'gaming'){

            if($('#teamname').val() == ''){
                $('.req-teamname').text('above field is required');
                canContinue = false;

            }
            if($('#ambassador').val() != ''){
                data['ambassador'] = $('#ambassador').val();
            }
            data['teamname'] = $('#teamname').val();
        }
        if($('#dep').val() == 'general'){
            if($('#ambassador').val() != ''){
                data['ambassador'] = $('#ambassador').val();
            }
        }

        if(canContinue){
            $('.cont').html('');
            $('.cont').html('<div class="span7 offset2 text-center">' +
                '<h4 style="margin-top: 120px; margin-bottom: 350px;">Processing request.....</h4>' +
                '</div>');
            $.post('/competitions/reg',data,function(res){
                $('.cont').html('');
                $('.cont').html('<div class="span7 offset2 text-center">' +
                    '<h1 style="margin-top: 120px; margin-bottom: 350px;">Done!!</h1>' +
                    '</div>');
                setTimeout(function(){ window.location.href = '/' }, 5000);
//            if(res == 'Ok'){
//
//            }
            });
        }else{
            return;
        }
    });
});