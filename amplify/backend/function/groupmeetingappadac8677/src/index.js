/* Amplify Params - DO NOT EDIT
You can access the following resource attributes as environment variables from your Lambda function
var environment = process.env.ENV
var region = process.env.REGION
var apiGroupmeetingappGraphQLAPIIdOutput = process.env.API_GROUPMEETINGAPP_GRAPHQLAPIIDOUTPUT
var apiGroupmeetingappGraphQLAPIEndpointOutput = process.env.API_GROUPMEETINGAPP_GRAPHQLAPIENDPOINTOUTPUT

Amplify Params - DO NOT EDIT */
// incomplete - need to add cognito auth trigger (post conf)

const axios = require('axios');
const gql = require('graphql-tag');
const graphql = require('graphql');
const { print } = graphql;

// exports.handler = function (event, context) {
//   //eslint-disable-line
//   console.log(JSON.stringify(event, null, 2));
//   event.Records.forEach(record => {
//     console.log(record.eventID);
//     console.log(record.eventName);
//     console.log('DynamoDB Record: %j', record.dynamodb);
//   });
//   context.done(null, 'Successfully processed DynamoDB record'); // SUCCESS with message
// };

const createUser = gql`
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      firstName
      lastName
      email
      mobileNumber
      groups {
        nextToken
      }
    }
  }
`;

exports.handler = async event => {
  const { email, sub, phone_number } = event.request.userAttributes;

  try {
    const graphqlData = await axois({
      url: process.env.API_URL,
      method: 'post',
      headers: {
        'x-api-key': process.env.API_groupmeetingapp_GRAPHQLAPIKEYOUTPUT,
      },
      data: {
        query: print(createUser),
        variables: {
          input: {
            id: sub,
            email,
            mobileNumber: phone_number,
          },
        },
      },
    });

    // if (!graphqlData.errors) {
    //   console.log(`Successfully created user ${email}`);
    // } else {
    //   console.error(
    //     'Error creating user on confirmation:\n',
    //     graphqlData.errors,
    //   );
    // }

    console.log('Apparent success:\n', graphqlData);
  } catch (error) {
    console.error('Error creating user on confirmation:\n', error);
  }
};
