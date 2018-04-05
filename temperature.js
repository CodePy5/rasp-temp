var cmd=require('node-cmd');
 
    cmd.get(
        '/opt/vc/bin/vcgencmd measure_temp',
        function(err, data, stderr){
            var cel = parseFloat(data.substring(5, data.length-3));
            var far = cel*1.8 +32;
            console.log(far);
        }
    );