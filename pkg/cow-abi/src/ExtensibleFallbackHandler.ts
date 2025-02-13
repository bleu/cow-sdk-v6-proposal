export const ExtensibleFallbackHandlerABI = [
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "contract Safe",
                "name": "safe",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "bytes32",
                "name": "domainSeparator",
                "type": "bytes32"
            },
            {
                "indexed": false,
                "internalType": "contract ISafeSignatureVerifier",
                "name": "verifier",
                "type": "address"
            }
        ],
        "name": "AddedDomainVerifier",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "contract Safe",
                "name": "safe",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "bytes4",
                "name": "interfaceId",
                "type": "bytes4"
            }
        ],
        "name": "AddedInterface",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "contract Safe",
                "name": "safe",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "bytes4",
                "name": "selector",
                "type": "bytes4"
            },
            {
                "indexed": false,
                "internalType": "bytes32",
                "name": "method",
                "type": "bytes32"
            }
        ],
        "name": "AddedSafeMethod",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "contract Safe",
                "name": "safe",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "bytes32",
                "name": "domainSeparator",
                "type": "bytes32"
            },
            {
                "indexed": false,
                "internalType": "contract ISafeSignatureVerifier",
                "name": "oldVerifier",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "contract ISafeSignatureVerifier",
                "name": "newVerifier",
                "type": "address"
            }
        ],
        "name": "ChangedDomainVerifier",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "contract Safe",
                "name": "safe",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "bytes4",
                "name": "selector",
                "type": "bytes4"
            },
            {
                "indexed": false,
                "internalType": "bytes32",
                "name": "oldMethod",
                "type": "bytes32"
            },
            {
                "indexed": false,
                "internalType": "bytes32",
                "name": "newMethod",
                "type": "bytes32"
            }
        ],
        "name": "ChangedSafeMethod",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "contract Safe",
                "name": "safe",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "bytes32",
                "name": "domainSeparator",
                "type": "bytes32"
            }
        ],
        "name": "RemovedDomainVerifier",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "contract Safe",
                "name": "safe",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "bytes4",
                "name": "interfaceId",
                "type": "bytes4"
            }
        ],
        "name": "RemovedInterface",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "contract Safe",
                "name": "safe",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "bytes4",
                "name": "selector",
                "type": "bytes4"
            }
        ],
        "name": "RemovedSafeMethod",
        "type": "event"
    },
    {
        "stateMutability": "nonpayable",
        "type": "fallback"
    },
    {
        "inputs": [
            {
                "internalType": "contract Safe",
                "name": "",
                "type": "address"
            },
            {
                "internalType": "bytes32",
                "name": "",
                "type": "bytes32"
            }
        ],
        "name": "domainVerifiers",
        "outputs": [
            {
                "internalType": "contract ISafeSignatureVerifier",
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
                "internalType": "bytes32",
                "name": "_hash",
                "type": "bytes32"
            },
            {
                "internalType": "bytes",
                "name": "signature",
                "type": "bytes"
            }
        ],
        "name": "isValidSignature",
        "outputs": [
            {
                "internalType": "bytes4",
                "name": "magic",
                "type": "bytes4"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            },
            {
                "internalType": "uint256[]",
                "name": "",
                "type": "uint256[]"
            },
            {
                "internalType": "uint256[]",
                "name": "",
                "type": "uint256[]"
            },
            {
                "internalType": "bytes",
                "name": "",
                "type": "bytes"
            }
        ],
        "name": "onERC1155BatchReceived",
        "outputs": [
            {
                "internalType": "bytes4",
                "name": "",
                "type": "bytes4"
            }
        ],
        "stateMutability": "pure",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            },
            {
                "internalType": "bytes",
                "name": "",
                "type": "bytes"
            }
        ],
        "name": "onERC1155Received",
        "outputs": [
            {
                "internalType": "bytes4",
                "name": "",
                "type": "bytes4"
            }
        ],
        "stateMutability": "pure",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            },
            {
                "internalType": "bytes",
                "name": "",
                "type": "bytes"
            }
        ],
        "name": "onERC721Received",
        "outputs": [
            {
                "internalType": "bytes4",
                "name": "",
                "type": "bytes4"
            }
        ],
        "stateMutability": "pure",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "contract Safe",
                "name": "",
                "type": "address"
            },
            {
                "internalType": "bytes4",
                "name": "",
                "type": "bytes4"
            }
        ],
        "name": "safeInterfaces",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "contract Safe",
                "name": "",
                "type": "address"
            },
            {
                "internalType": "bytes4",
                "name": "",
                "type": "bytes4"
            }
        ],
        "name": "safeMethods",
        "outputs": [
            {
                "internalType": "bytes32",
                "name": "",
                "type": "bytes32"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "domainSeparator",
                "type": "bytes32"
            },
            {
                "internalType": "contract ISafeSignatureVerifier",
                "name": "newVerifier",
                "type": "address"
            }
        ],
        "name": "setDomainVerifier",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes4",
                "name": "selector",
                "type": "bytes4"
            },
            {
                "internalType": "bytes32",
                "name": "newMethod",
                "type": "bytes32"
            }
        ],
        "name": "setSafeMethod",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes4",
                "name": "interfaceId",
                "type": "bytes4"
            },
            {
                "internalType": "bool",
                "name": "supported",
                "type": "bool"
            }
        ],
        "name": "setSupportedInterface",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes4",
                "name": "_interfaceId",
                "type": "bytes4"
            },
            {
                "internalType": "bytes32[]",
                "name": "handlerWithSelectors",
                "type": "bytes32[]"
            }
        ],
        "name": "setSupportedInterfaceBatch",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes4",
                "name": "interfaceId",
                "type": "bytes4"
            }
        ],
        "name": "supportsInterface",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    }
] as const
