const axios = require("axios");
const _ = require("lodash");

//get all shopify data with pagination and cursor
const getWithPagination = async (shop, token, query, name, value, cursor) => {
  return new Promise(async (resolve, reject) => {
    try {
      value = value ? value : [];
      var query1 = query;
      query1 = JSON.parse(query1);
      if (!query1.variables) return reject("Pass variables in query properly!");

      //assign no. of first n elements and cursor
      query1.variables.first = 150;
      if (query1.variables) query1.variables.cursor = cursor;

      const options = {
        url: `https://${shop}/admin/api/${process.env.SHOPIFY_API_VERSION}/graphql.json`,
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Shopify-Access-Token": token,
        },
        responseType: "json",
        data: query1,
      };

      //API call
      const response = await axios(options);

      if (
        !(
          response &&
          response.data &&
          response.data.data &&
          _.get(response.data.data, name) &&
          _.get(response.data.data, name).edges
        )
      ) {
        return reject(
          "Not got Response data, pass name and edge properly in query!"
        );
      }

      let responseData = _.get(response.data.data, name);

      let value1 = value.concat(responseData.edges);

      if (!responseData.pageInfo) {
        return reject(
          "Not got Response data, pass pageInfo properly in query!"
        );
      }

      const hasNext = responseData.pageInfo.hasNextPage;

      //check if hasNext true then call api again with last cursor else return value
      if (!hasNext) {
        return resolve(value1);
      } else {
        return resolve(
          await getWithPagination(
            shop,
            token,
            query,
            name,
            value1,
            value1[value1.length - 1].cursor
          )
        );
      }
    } catch (error) {
      console.log("Error: ", error);
      return reject(error);
    }
  });
};

//call graphql shopify api
const callGraphQl = async (shop, token, query) => {
  const options = {
    url: `https://${shop}/admin/api/${process.env.SHOPIFY_API_VERSION}/graphql.json`,
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Shopify-Access-Token": token,
    },
    responseType: "json",
    data: query,
  };
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios(options);
      resolve(response.data);
    } catch (error) {
      reject(error.response);
    }
  });
};
module.exports = {
  getWithPagination,
  callGraphQl,
};
