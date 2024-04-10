const axios = require('axios');
const fs = require('fs');

// Replace these with your actual values

const filePath = '/Users/yahuja/Demo/sgEmailValidation/spreadsheet/emailvalidation.csv'; // The path to the file you want to upload
const uploadUri = 'https://evbulkupload-prod-us-east-2-emails-csv.s3.us-east-2.amazonaws.com/25810133_01HNPW0EA2XWEH0C0TZ6ARYRZD?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=ASIAS4765TJFFO7HTIDY%2F20240203%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20240203T065530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMiJIMEYCIQDNXDJaL3Tta8VgH1X6vU%2FkNTjHFdC1M5mBox2Lc%2BkJFAIhALAhfKW4X2cfaVRXSM9T3NXr4KsxmTz3J%2FGhnqEUWRRLKosDCHAQBBoMMTk5NzEzNzI1MDAyIgxpw6miFKHjiWtMO5Qq6AKLuccBukE8Oec89Hyv6XWhgMA3VkbxA%2FGoB6WmG38fp%2BN5%2Blf2%2BP7sYn0P7jGd3S3GEbwP%2FKa2p4jVKrGw802Nvo%2BlXSlmaFlsl9t2I3Dzsh%2F63wcmc%2FrpZO6PB6bZbNsuvNrjS9s3Mp0Sj7d0v6pv7C4CSxZvS8Z56I%2BbdV7KVz5DQnSw%2Fn4%2BpIZ0xi62HFry4yGzhfoUBqedpdm5mRTeCJmqLFX0wJQRlrpEMdu3%2FaasPOOSd6E6dUYDDcKdWuGOLveTcxzqfIEvM84kp1uv2lM%2BL0ZpqY1CMpGaldjrITLaIE9PjtL7Au%2BxJR5f%2FYrG2nqmseR4LGLewOLykFoc2s7xPO1LrWbOoXav6nfzJHZMgff4Vw6QRr6auCikPDpupLzojD%2BdXsLFycPga70SuISrsT05GM8wOpYXqciacCrBUvhAmxmARzETFQOUEq6kQcKXCWhdzlCsim2FT3UcxTy%2BxRLyaVUw7cX3rQY6nAE1UydxDZ96d3oSwG%2BXBmC0jSiJkvzQkiMx0CL00NMhd%2BeISnevMT%2BCwCt5NQ9g6th6Kj97KuaO9xLHjsiwChViTZjvMasmI769jDgSErxYjz9jhAU4PWRIx1IQVexKUvD17O%2FMT7Bn%2FkRGuZxFgwdcpHlYoBU%2BWe15RYTMrlvpN8IbgKOxMMuxcDVdAtrJU%2FsGxtvbhn3A3TQtghE%3D&X-Amz-SignedHeaders=content-type%3Bhost%3Bx-amz-server-side-encryption&X-Amz-Signature=d7228a5b141f4fb2694fa63d4af93f7269f815dca78a5e0f6810c3136fbdc720'; // The URI you received from the previous request

const fileSize = fs.statSync(filePath).size;


const uploadFile = async (filePath, uploadUri) => {
  try {
    const fileStream = fs.createReadStream(filePath);

    const response = await axios.put(uploadUri, fileStream, {
      headers: {
        'x-amz-server-side-encryption': 'aws:kms',
        'content-type': 'text/csv',
        'Content-Length': fileSize
      },
    });

    console.log('File uploaded successfully', response.data);
  } catch (error) {
    console.error('Error uploading file', error.response ? error.response.data : error.message);
  }
};

uploadFile(filePath, uploadUri);