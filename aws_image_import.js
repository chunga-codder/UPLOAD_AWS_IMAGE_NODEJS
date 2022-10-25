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

// the above may be deprecated

/**
 * Copyright 2010-2019 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *
 * This file is licensed under the Apache License, Version 2.0 (the "License").
 * You may not use this file except in compliance with the License. A copy of
 * the License is located at
 *
 * http://aws.amazon.com/apache2.0/
 *
 * This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
 * CONDITIONS OF ANY KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations under the License.
*/

//snippet-sourcedescription:[s3_listbuckets.js demonstrates how to list all the buckets in an AWS account.]
//snippet-service:[s3]
//snippet-keyword:[JavaScript]
//snippet-sourcesyntax:[javascript]
//snippet-keyword:[Code Sample]
//snippet-keyword:[Amazon S3]
//snippet-sourcetype:[full-example]
//snippet-sourcedate:[2018-06-02]
//snippet-sourceauthor:[AWS-JSDG]

// ABOUT THIS NODE.JS SAMPLE: This sample is part of the SDK for JavaScript Developer Guide topic at
// https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/s3-example-creating-buckets.html

// snippet-start:[s3.JavaScript.buckets.listBuckets]
// Load the AWS SDK for Node.js
var AWS = require('aws-sdk');
// Set the region 
AWS.config.update({region: 'REGION'});

// Create S3 service object
s3 = new AWS.S3({apiVersion: '2006-03-01'});

// Call S3 to list the buckets
s3.listBuckets(function(err, data) {
  if (err) {
    console.log("Error", err);
  } else {
    console.log("Success", data.Buckets);
  }
});
// snippet-end:[s3.JavaScript.buckets.listBuckets]