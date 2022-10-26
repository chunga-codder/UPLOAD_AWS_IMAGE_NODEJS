const aws = require ('aws-sdk');

// create s3 object

const s3 = new aws.s3({
    apiVersion: 'yr'
})

// create s3 params
const params = {
    bucket : process.argv[2]
};

// setting my region 
 AWS.config.update({
    regione : 'region'
})

// calling the s3.createbucket method aws configure

s3.createBucket(params, function(err,data){
    if (err){
        console.log(err)
    } else{
        console.log('bucket created sucessfully', data.location)
    }

})

// Deletting an s3 bucket 

const AWS = require('aws-sdk');

// setting my regione 
s3.config.update({region : 'south-east-2'})

// creating bucket ubject 

const bucket = new AWS.s3({apiVersion : 'version year'})

// creating bucket params 

const params2 = ({bucketParams:'bucket_name'})

// deleting bucket 

s3.deleteBucket(params2,function (err,data) {
    if (err) { console.log(err)
    }
    else{
        console.log('sucessfully deleted')
    }
    
})