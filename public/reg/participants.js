$(document).ready(function(){
    $('.comptype').change(function(){
        $('.resultcont').html('<h1 class="text-center">Processing......</h1>');
        $.post('/getParticipants',{
            type:$(this).val(),
            _csrf:$('#token').val()
        },function(res){
            $('.resultcont').html('');
            $('.resultcont').append('<h3 class="lengthpart">Total : '+res.length+'</h3><a href="#" class="btn btn-default csv-download">download spreadsheet</a>');
            $('.csv-download').click(function(){
                $.post('/getParticipants',{
                    type:$('.comptype').val(),
                    _csrf:$('#token').val()
                },function(res){
                    var data = res.data;
                    if(data == '')
                        return;

                    JSONToCSVConvertor(data, $('.comptype').val(), true);
                });
//
            });
            for(var i=0;i<res.data.length;i++){
                var status;
                var partID = "status-"+res.data[i]._id;
                if(res.data[i].status == "paid"){
                    status = '<label for="'+partID+'">Status:'+
                                    '<select id="'+partID+'" class="form-control status">'+
                                    '<option value="paid" selected="true">paid</option>'+
                                    '<option value="notpaid">not paid</option>'+
                                '</select>'+
                                '</label>';
                }else{
                    status = '<label for="'+partID+'">Status:'+
                        '<select id="'+partID+'" class="form-control status">'+
                        '<option value="paid">paid</option>'+
                        '<option value="notpaid" selected="true">not paid</option>'+
                        '</select>'+
                        '</label>';
                }
                $('.resultcont').append('<div style="padding: 10px; border: 1px solid #B6B6B6;">'+
                    status+
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
                    '<p><strong>status:</strong> '+res.data[i].status+'</p>'+
                    '</div>');
                $('.status').change(function(){
                    var data = {
                        status:$(this).val(),
                        id:$(this).attr('id').split('-')[1],
                        _csrf:$('#token').val()
                    };
                    $.post('/markstatus',data,function(res){
                        console.log(res);
                        console.log("LAZY ASS PR TEAM!!!")
                    });
                });
            }
        });
    });
    $('.status').change(function(){
        var data = {
            status:$(this).val(),
            id:$(this).attr('id').split('-')[1],
            _csrf:$('#token').val()
        };
        $.post('/markstatus',data,function(res){
            console.log(res);
            console.log("LAZY ASS PR TEAM!!!")
        });
    });
    $('.csv-download').click(function(){
        $.post('/getParticipants',{
            type:$('.comptype').val(),
            _csrf:$('#token').val()
        },function(res){
            var data = res.data;
            if(data == '')
                return;

            JSONToCSVConvertor(data, $('.comptype').val(), true);
        });
//
    });
});
function JSONToCSVConvertor(JSONData, ReportTitle, ShowLabel) {
    //If JSONData is not an object then JSON.parse will parse the JSON string in an Object
    var arrData = typeof JSONData != 'object' ? JSON.parse(JSONData) : JSONData;

    var CSV = '';
    //Set Report title in first row or line

    CSV += ReportTitle + '\r\n\n';

    //This condition will generate the Label/Header
    if (ShowLabel) {
        var row = "";

        //This loop will extract the label from 1st index of on array
        for (var index in arrData[0]) {

            //Now convert each value to string and comma-seprated
            row += index + ',';
        }

        row = row.slice(0, -1);

        //append Label row with line break
        CSV += row + '\r\n';
    }

    //1st loop is to extract each row
    for (var i = 0; i < arrData.length; i++) {
        var row = "";

        //2nd loop will extract each column and convert it in string comma-seprated
        for (var index in arrData[i]) {
            row += '"' + arrData[i][index] + '",';
        }

        row.slice(0, row.length - 1);

        //add a line break after each row
        CSV += row + '\r\n';
    }

    if (CSV == '') {
        alert("Invalid data");
        return;
    }

    //Generate a file name
    var fileName = "MyReport_";
    //this will remove the blank-spaces from the title and replace it with an underscore
    fileName += ReportTitle.replace(/ /g,"_");

    //Initialize file format you want csv or xls
    var uri = 'data:text/csv;charset=utf-8,' + escape(CSV);

    // Now the little tricky part.
    // you can use either>> window.open(uri);
    // but this will not work in some browsers
    // or you will not get the correct file extension

    //this trick will generate a temp <a /> tag
    var link = document.createElement("a");
    link.href = uri;

    //set the visibility hidden so it will not effect on your web-layout
    link.style = "visibility:hidden";
    link.download = fileName + ".csv";

    //this part will append the anchor tag and remove it after automatic click
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
