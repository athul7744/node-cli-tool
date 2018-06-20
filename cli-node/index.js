var exec = require('child_process').exec;

exec(
    'fortune', //write command to execute
    (error, stdout, stderr) => {
      if (error) {
        console.error(`exec error:\n ${error}`);
        return;
      }
      console.log(`stdout: \n ${stdout}`);
    }
);
