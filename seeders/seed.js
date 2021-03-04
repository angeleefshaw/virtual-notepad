let mongoose = require("mongoose");
let db = require("../models");

mongoose.connect("mongodb+srv://angeleeshaw:hubbert6767888@cluster0.dfpkf.mongodb.net/awsnotes?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useFindAndModify: false
});


let noteSeed = [
    {
        day: new Date().setDate(new Date().getDate()-10),
        note: [
            {
                title: "Popular AWS Services",
                text: "EC2, Lightsail, Elastic Beanstalk, Lambda, Batch."
            }
        ]
    },
    {
        day: new Date().setDate(new Date().getDate()-10),
        note: [
            {
                title: "Cloud Benefits",
                text: "Flexible speed, scale, storage space, disaster recovery."
            }
        ]
    },
    {
        day: new Date().setDate(new Date().getDate()-10),
        note: [
            {
                title: "Types of Cloud Computing",
                text: "Laas, Paas, Saas"
            }
        ]
    }
]

db.Note.deleteMany({})
  .then(() => db.Note.collection.insertMany(noteSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
