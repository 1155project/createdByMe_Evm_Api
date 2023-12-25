import { APP_CONFIG } from "src/app.config";

export class AssetCreatorFactoryAbi {
    address = APP_CONFIG.environment === 'LOCAL'
    contractName =  "AssetCreatorFactory";
    abi = [
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_nameService",
          "type": "address"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "creator",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "creatorContractAddress",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "story",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "sender",
          "type": "address"
        }
      ],
      "name": "AssetProvenanceGenerated",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_id",
          "type": "address"
        },
        {
          "internalType": "string",
          "name": "_story",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_uri",
          "type": "string"
        }
      ],
      "name": "deployCreatorContract",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "deployedCreators",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_idx",
          "type": "uint256"
        },
        {
          "internalType": "uint8",
          "name": "_pageSize",
          "type": "uint8"
        }
      ],
      "name": "getRegisteredCreators",
      "outputs": [
        {
          "internalType": "address[]",
          "name": "creatorAddresses",
          "type": "address[]"
        },
        {
          "internalType": "uint8",
          "name": "count",
          "type": "uint8"
        },
        {
          "internalType": "uint256",
          "name": "totalCount",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }
  ];
}