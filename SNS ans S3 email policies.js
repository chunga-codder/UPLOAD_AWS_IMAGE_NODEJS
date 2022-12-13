// {
//     "Version": "2012-10-17",
//     "Id": "example-ID",
//     "Statement": [
//         {
//             "Sid": "Example SNS topic policy",
//             "Effect": "Allow",
//             "Principal": {
//                 "Service": "s3.amazonaws.com"
//             },
//             "Action": [
//                 "SNS:Publish"
//             ],
//             "Resource": "SNS-topic-ARN",
//             "Condition": {
//                 "ArnLike": {
//                     "aws:SourceArn": "arn:aws:s3:*:*:bucket-name"
//                 },
//                 "StringEquals": {
//                     "aws:SourceAccount": "bucket-owner-account-id"
//                 }
//             }
//         }
//     ]
// }                  