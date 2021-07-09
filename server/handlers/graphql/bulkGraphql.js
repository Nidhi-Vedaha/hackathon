const { callGraphQl } = require("../graphql");

async function delay(delayInMS) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, delayInMS);
  });
}

//get bulk data
const bulkOperationRunQueryHandle = (query, shop, token) => {
  return new Promise(async (resolve, reject) => {
    try {
      const queryBulk = JSON.stringify({
        query: `mutation {
      bulkOperationRunQuery(
       query: """
        {
         ${query}
        }
        """
      ) {
        bulkOperation {
          id
          status
        }
        userErrors {
          field
          message
        }
      }
    }`,
      });
      const response = await callGraphQl(shop, token, queryBulk);

      console.log(
        response.data,
        response.data.bulkOperationRunQuery.userErrors
      );
      if (
        !(
          response.data &&
          response.data.bulkOperationRunQuery &&
          response.data.bulkOperationRunQuery.bulkOperation &&
          response.data.bulkOperationRunQuery.bulkOperation.id &&
          response.data.bulkOperationRunQuery.bulkOperation.status === "CREATED"
        )
      ) {
        reject("Not found ID or proper status in bulkOperationRunQuery");
      }

      const { id, status } = response.data.bulkOperationRunQuery.bulkOperation;

      //check checkBulkOperation if status is RUNNING
      const responseData = await checkBulkOperation(id, shop, token, status);

      console.log("responseData", responseData);

      resolve(responseData);
    } catch (error) {
      console.log("Error :", error);

      reject(error);
    }
  });
};

const checkBulkOperation = (id, shop, token, status, responseData) => {
  return new Promise(async (resolve, reject) => {
    try {
      //check status if poll BulkOperation until status COMPLETED
      console.log("id", id, shop, token);
      if (status === "CREATED" || status === "RUNNING") {
        const query = JSON.stringify({
          query: `{
          node(id: "${id}") {
            ... on BulkOperation {
              id
              status
              errorCode
              createdAt
              completedAt
              objectCount
              fileSize
              url
              partialDataUrl
            }
          }
        }`,
        });
        const response = await callGraphQl(shop, token, query);

        if (!(response && response.data)) {
          reject("Not got the BulkOperation properly.");
        }

        await delay(3000);

        const currentStatus = response.data.node.status;
        resolve(
          await checkBulkOperation(
            id,
            shop,
            token,
            currentStatus,
            response.data.node
          )
        );
      } else {
        resolve(responseData);
      }
    } catch (error) {
      console.log("Error :", error);
      reject(error);
    }
  });
};

module.exports = {
  bulkOperationRunQueryHandle,
};
