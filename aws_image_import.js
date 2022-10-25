import AWS, { S3 } from 'aws-sdk';

// creating an aws s3 object instance

S3 = new AWS.S3({
    accessKeyId : process.env.AWS_S3_ACCESS_KEY_ID,
    secretAccessKey : proccess.env.AWS_S3_SECRET_ACCESSS_KEY
})
// after this stage, i have to create an IAM user and add the programatic access with AWS S3 Read only permitions and AWS Cloudfomation Full access
// creating an image blob to upload
const imageURL = 'https://url-to-my-image'
const res = await fetch(imageURL)
const blob = await res.arrayBuffer();

//now making a call to s3.upload() and calling the .promise to wait for the image to upload
const uploadedImage = await S3.upload({
    Bucket : process.env.AWS_S3_BUCKET_NAME,
    Key : req.files[0].originalFilename,
    Body: blob,
}).promise();