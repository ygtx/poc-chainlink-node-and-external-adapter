const http = require("http");
const Moralis = require("moralis/node");

const serverUrl = process.env.SERVER_URL;
const appId = process.env.APP_ID;
const masterKey = process.env.MASTER_KEY;

/**
 * Return NFT owner address using Moralis.Web3API.token.getTokenIdMetadata
 * Response structure is Chainlink External Adapter format.
 *
 * @name ChainlinkExternalAdapter
 * @path {POST} /
 * @body {String} address : target NFT Address
 * @body {String} tokenId : target NFT Token Id
 * @body {String} chain : the network symbol where target NFT exists. see Moralis doc for exact value.
 * @response {Object} returnData
 * @response {String} jobRunId : must be unique for each transaction.
 * @response {Object} data
 * @response {String} found : NFT Holder Address
 */
const server = http.createServer((req, res) => {

    const jobRunId = new Date().getTime() ;

    if (req.method == "POST") {

        req.on("data", async (json) => {

            const job = await JSON.parse(json);

            console.log(job);

            await Moralis.start({ serverUrl, appId, masterKey });
            const options = {
                address: job.address, 
                token_id: job.tokenId,
                chain: job.chain,
            };

            const apiResult = await Moralis.Web3API.token.getTokenIdMetadata(options);

            console.log(apiResult);
            console.log("owner_of is : " + apiResult.owner_of);

            let returnValue = '';
            if (apiResult.owner_of != undefined && typeof apiResult.owner_of === 'string') {
                   returnValue = apiResult.owner_of;
            }

            const returnData = {
                jobRunID: jobRunId, // required and must be unique
                data: {
                    'found' : returnValue
                }                
            };

            console.log("return is : " + JSON.stringify(returnData));

            res.end(JSON.stringify(returnData));            
        });
    } else {
        res.end(JSON.stringify({jobRunID: jobRunId, status: '500', error: {}}));
    }
});

server.listen(8080, () => {
    console.log('launching the server');
});