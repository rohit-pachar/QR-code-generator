import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";


inquirer
    .prompt([

        {
            message: "Type in your URL",
            name: "URL",
        },

    ])
    .then((answers) => {
        const url = answers.URL;
        var qr_image = qr.image(url);
        qr_image.pipe(fs.createWriteStream('qr_image.png'));
        fs.writeFile('URL.txt',url , (err) => {
            if (err) {
                console.error(err);
                return;
            }
            console.log('File has been saved!');
        });
        




    })
    .catch((error) => {
        if (error.isTtyError) {
            // Prompt couldn't be rendered in the current environment
        } else {
            // Something else went wrong
        }
    });

     