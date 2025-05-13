const contractAddress = "0x95DEE199b24811823991A681dc6fc1F64c038016";
const kolzTokenAddress = "0x50ce4129ca261ccde4eb100c170843c2936bc11b";
const host = "http://localhost:5000";
const abi = [{"inputs":[{"internalType":"address","name":"kolzTokenAddress","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"ERC721EnumerableForbiddenBatchMint","type":"error"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"address","name":"owner","type":"address"}],"name":"ERC721IncorrectOwner","type":"error"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ERC721InsufficientApproval","type":"error"},{"inputs":[{"internalType":"address","name":"approver","type":"address"}],"name":"ERC721InvalidApprover","type":"error"},{"inputs":[{"internalType":"address","name":"operator","type":"address"}],"name":"ERC721InvalidOperator","type":"error"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"ERC721InvalidOwner","type":"error"},{"inputs":[{"internalType":"address","name":"receiver","type":"address"}],"name":"ERC721InvalidReceiver","type":"error"},{"inputs":[{"internalType":"address","name":"sender","type":"address"}],"name":"ERC721InvalidSender","type":"error"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ERC721NonexistentToken","type":"error"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"ERC721OutOfBoundsIndex","type":"error"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"OwnableInvalidOwner","type":"error"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"OwnableUnauthorizedAccount","type":"error"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"},{"indexed":false,"internalType":"string","name":"newApi","type":"string"}],"name":"APIAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"_fromTokenId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"_toTokenId","type":"uint256"}],"name":"BatchMetadataUpdate","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"unstakeAmount","type":"uint256"}],"name":"Burned","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"MetadataUpdate","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"},{"indexed":false,"internalType":"string","name":"replicaId","type":"string"},{"indexed":false,"internalType":"uint256","name":"stakeAmount","type":"uint256"}],"name":"Minted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"FEE_PERCENT","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"STAKE_AMOUNT","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"STAKE_OWNER_AMOUNT","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"burnAndUnstake","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getNFTData","outputs":[{"components":[{"internalType":"address","name":"originalMinter","type":"address"},{"internalType":"string","name":"replicaId","type":"string"},{"internalType":"string","name":"avatarURI","type":"string"},{"internalType":"string[]","name":"accessibleAPIs","type":"string[]"},{"internalType":"uint256","name":"mintedDate","type":"uint256"},{"internalType":"uint256","name":"stakedAmount","type":"uint256"},{"internalType":"uint256","name":"expiredDate","type":"uint256"}],"internalType":"struct KolzNftAi.NFTData","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"string","name":"","type":"string"}],"name":"hasReplica","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"kolzToken","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"_replicaId","type":"string"},{"internalType":"string","name":"_avatarURI","type":"string"}],"name":"mint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_replicaId","type":"string"},{"internalType":"string","name":"_avatarURI","type":"string"}],"name":"mintOwner","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"nextTokenId","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"nftMetadata","outputs":[{"internalType":"address","name":"originalMinter","type":"address"},{"internalType":"string","name":"replicaId","type":"string"},{"internalType":"string","name":"avatarURI","type":"string"},{"internalType":"uint256","name":"mintedDate","type":"uint256"},{"internalType":"uint256","name":"stakedAmount","type":"uint256"},{"internalType":"uint256","name":"expiredDate","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"periods","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"renewNFT","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_days","type":"uint256"}],"name":"setPeriods","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"newAmount","type":"uint256"}],"name":"setStakeAmount","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"newAmount","type":"uint256"}],"name":"setStakeOwnerAmount","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalFeesCollected","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"string","name":"newApi","type":"string"}],"name":"updateAccessibleAPIs","outputs":[],"stateMutability":"nonpayable","type":"function"}]
const kolzAbi = [{"inputs":[{"internalType":"string","name":"_name","type":"string"},{"internalType":"string","name":"_symbol","type":"string"},{"internalType":"address","name":"_lzEndpoint","type":"address"},{"internalType":"address","name":"_delegate","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"allowance","type":"uint256"},{"internalType":"uint256","name":"needed","type":"uint256"}],"name":"ERC20InsufficientAllowance","type":"error"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"uint256","name":"balance","type":"uint256"},{"internalType":"uint256","name":"needed","type":"uint256"}],"name":"ERC20InsufficientBalance","type":"error"},{"inputs":[{"internalType":"address","name":"approver","type":"address"}],"name":"ERC20InvalidApprover","type":"error"},{"inputs":[{"internalType":"address","name":"receiver","type":"address"}],"name":"ERC20InvalidReceiver","type":"error"},{"inputs":[{"internalType":"address","name":"sender","type":"address"}],"name":"ERC20InvalidSender","type":"error"},{"inputs":[{"internalType":"address","name":"spender","type":"address"}],"name":"ERC20InvalidSpender","type":"error"},{"inputs":[],"name":"InvalidDelegate","type":"error"},{"inputs":[],"name":"InvalidEndpointCall","type":"error"},{"inputs":[],"name":"InvalidLocalDecimals","type":"error"},{"inputs":[{"internalType":"bytes","name":"options","type":"bytes"}],"name":"InvalidOptions","type":"error"},{"inputs":[],"name":"LzTokenUnavailable","type":"error"},{"inputs":[{"internalType":"uint32","name":"eid","type":"uint32"}],"name":"NoPeer","type":"error"},{"inputs":[{"internalType":"uint256","name":"msgValue","type":"uint256"}],"name":"NotEnoughNative","type":"error"},{"inputs":[{"internalType":"address","name":"addr","type":"address"}],"name":"OnlyEndpoint","type":"error"},{"inputs":[{"internalType":"uint32","name":"eid","type":"uint32"},{"internalType":"bytes32","name":"sender","type":"bytes32"}],"name":"OnlyPeer","type":"error"},{"inputs":[],"name":"OnlySelf","type":"error"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"OwnableInvalidOwner","type":"error"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"OwnableUnauthorizedAccount","type":"error"},{"inputs":[{"internalType":"address","name":"token","type":"address"}],"name":"SafeERC20FailedOperation","type":"error"},{"inputs":[{"internalType":"bytes","name":"result","type":"bytes"}],"name":"SimulationResult","type":"error"},{"inputs":[{"internalType":"uint256","name":"amountLD","type":"uint256"},{"internalType":"uint256","name":"minAmountLD","type":"uint256"}],"name":"SlippageExceeded","type":"error"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"components":[{"internalType":"uint32","name":"eid","type":"uint32"},{"internalType":"uint16","name":"msgType","type":"uint16"},{"internalType":"bytes","name":"options","type":"bytes"}],"indexed":false,"internalType":"struct EnforcedOptionParam[]","name":"_enforcedOptions","type":"tuple[]"}],"name":"EnforcedOptionSet","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"inspector","type":"address"}],"name":"MsgInspectorSet","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"guid","type":"bytes32"},{"indexed":false,"internalType":"uint32","name":"srcEid","type":"uint32"},{"indexed":true,"internalType":"address","name":"toAddress","type":"address"},{"indexed":false,"internalType":"uint256","name":"amountReceivedLD","type":"uint256"}],"name":"OFTReceived","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"guid","type":"bytes32"},{"indexed":false,"internalType":"uint32","name":"dstEid","type":"uint32"},{"indexed":true,"internalType":"address","name":"fromAddress","type":"address"},{"indexed":false,"internalType":"uint256","name":"amountSentLD","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amountReceivedLD","type":"uint256"}],"name":"OFTSent","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint32","name":"eid","type":"uint32"},{"indexed":false,"internalType":"bytes32","name":"peer","type":"bytes32"}],"name":"PeerSet","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"preCrimeAddress","type":"address"}],"name":"PreCrimeSet","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"SEND","outputs":[{"internalType":"uint16","name":"","type":"uint16"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"SEND_AND_CALL","outputs":[{"internalType":"uint16","name":"","type":"uint16"}],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"internalType":"uint32","name":"srcEid","type":"uint32"},{"internalType":"bytes32","name":"sender","type":"bytes32"},{"internalType":"uint64","name":"nonce","type":"uint64"}],"internalType":"struct Origin","name":"origin","type":"tuple"}],"name":"allowInitializePath","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"approvalRequired","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint32","name":"_eid","type":"uint32"},{"internalType":"uint16","name":"_msgType","type":"uint16"},{"internalType":"bytes","name":"_extraOptions","type":"bytes"}],"name":"combineOptions","outputs":[{"internalType":"bytes","name":"","type":"bytes"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimalConversionRate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"endpoint","outputs":[{"internalType":"contract ILayerZeroEndpointV2","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint32","name":"eid","type":"uint32"},{"internalType":"uint16","name":"msgType","type":"uint16"}],"name":"enforcedOptions","outputs":[{"internalType":"bytes","name":"enforcedOption","type":"bytes"}],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"internalType":"uint32","name":"srcEid","type":"uint32"},{"internalType":"bytes32","name":"sender","type":"bytes32"},{"internalType":"uint64","name":"nonce","type":"uint64"}],"internalType":"struct Origin","name":"","type":"tuple"},{"internalType":"bytes","name":"","type":"bytes"},{"internalType":"address","name":"_sender","type":"address"}],"name":"isComposeMsgSender","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint32","name":"_eid","type":"uint32"},{"internalType":"bytes32","name":"_peer","type":"bytes32"}],"name":"isPeer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"internalType":"uint32","name":"srcEid","type":"uint32"},{"internalType":"bytes32","name":"sender","type":"bytes32"},{"internalType":"uint64","name":"nonce","type":"uint64"}],"internalType":"struct Origin","name":"_origin","type":"tuple"},{"internalType":"bytes32","name":"_guid","type":"bytes32"},{"internalType":"bytes","name":"_message","type":"bytes"},{"internalType":"address","name":"_executor","type":"address"},{"internalType":"bytes","name":"_extraData","type":"bytes"}],"name":"lzReceive","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"components":[{"internalType":"uint32","name":"srcEid","type":"uint32"},{"internalType":"bytes32","name":"sender","type":"bytes32"},{"internalType":"uint64","name":"nonce","type":"uint64"}],"internalType":"struct Origin","name":"origin","type":"tuple"},{"internalType":"uint32","name":"dstEid","type":"uint32"},{"internalType":"address","name":"receiver","type":"address"},{"internalType":"bytes32","name":"guid","type":"bytes32"},{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"address","name":"executor","type":"address"},{"internalType":"bytes","name":"message","type":"bytes"},{"internalType":"bytes","name":"extraData","type":"bytes"}],"internalType":"struct InboundPacket[]","name":"_packets","type":"tuple[]"}],"name":"lzReceiveAndRevert","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint32","name":"srcEid","type":"uint32"},{"internalType":"bytes32","name":"sender","type":"bytes32"},{"internalType":"uint64","name":"nonce","type":"uint64"}],"internalType":"struct Origin","name":"_origin","type":"tuple"},{"internalType":"bytes32","name":"_guid","type":"bytes32"},{"internalType":"bytes","name":"_message","type":"bytes"},{"internalType":"address","name":"_executor","type":"address"},{"internalType":"bytes","name":"_extraData","type":"bytes"}],"name":"lzReceiveSimulate","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"msgInspector","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint32","name":"","type":"uint32"},{"internalType":"bytes32","name":"","type":"bytes32"}],"name":"nextNonce","outputs":[{"internalType":"uint64","name":"nonce","type":"uint64"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"oApp","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"oAppVersion","outputs":[{"internalType":"uint64","name":"senderVersion","type":"uint64"},{"internalType":"uint64","name":"receiverVersion","type":"uint64"}],"stateMutability":"pure","type":"function"},{"inputs":[],"name":"oftVersion","outputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"},{"internalType":"uint64","name":"version","type":"uint64"}],"stateMutability":"pure","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint32","name":"eid","type":"uint32"}],"name":"peers","outputs":[{"internalType":"bytes32","name":"peer","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"preCrime","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"internalType":"uint32","name":"dstEid","type":"uint32"},{"internalType":"bytes32","name":"to","type":"bytes32"},{"internalType":"uint256","name":"amountLD","type":"uint256"},{"internalType":"uint256","name":"minAmountLD","type":"uint256"},{"internalType":"bytes","name":"extraOptions","type":"bytes"},{"internalType":"bytes","name":"composeMsg","type":"bytes"},{"internalType":"bytes","name":"oftCmd","type":"bytes"}],"internalType":"struct SendParam","name":"_sendParam","type":"tuple"}],"name":"quoteOFT","outputs":[{"components":[{"internalType":"uint256","name":"minAmountLD","type":"uint256"},{"internalType":"uint256","name":"maxAmountLD","type":"uint256"}],"internalType":"struct OFTLimit","name":"oftLimit","type":"tuple"},{"components":[{"internalType":"int256","name":"feeAmountLD","type":"int256"},{"internalType":"string","name":"description","type":"string"}],"internalType":"struct OFTFeeDetail[]","name":"oftFeeDetails","type":"tuple[]"},{"components":[{"internalType":"uint256","name":"amountSentLD","type":"uint256"},{"internalType":"uint256","name":"amountReceivedLD","type":"uint256"}],"internalType":"struct OFTReceipt","name":"oftReceipt","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"internalType":"uint32","name":"dstEid","type":"uint32"},{"internalType":"bytes32","name":"to","type":"bytes32"},{"internalType":"uint256","name":"amountLD","type":"uint256"},{"internalType":"uint256","name":"minAmountLD","type":"uint256"},{"internalType":"bytes","name":"extraOptions","type":"bytes"},{"internalType":"bytes","name":"composeMsg","type":"bytes"},{"internalType":"bytes","name":"oftCmd","type":"bytes"}],"internalType":"struct SendParam","name":"_sendParam","type":"tuple"},{"internalType":"bool","name":"_payInLzToken","type":"bool"}],"name":"quoteSend","outputs":[{"components":[{"internalType":"uint256","name":"nativeFee","type":"uint256"},{"internalType":"uint256","name":"lzTokenFee","type":"uint256"}],"internalType":"struct MessagingFee","name":"msgFee","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"components":[{"internalType":"uint32","name":"dstEid","type":"uint32"},{"internalType":"bytes32","name":"to","type":"bytes32"},{"internalType":"uint256","name":"amountLD","type":"uint256"},{"internalType":"uint256","name":"minAmountLD","type":"uint256"},{"internalType":"bytes","name":"extraOptions","type":"bytes"},{"internalType":"bytes","name":"composeMsg","type":"bytes"},{"internalType":"bytes","name":"oftCmd","type":"bytes"}],"internalType":"struct SendParam","name":"_sendParam","type":"tuple"},{"components":[{"internalType":"uint256","name":"nativeFee","type":"uint256"},{"internalType":"uint256","name":"lzTokenFee","type":"uint256"}],"internalType":"struct MessagingFee","name":"_fee","type":"tuple"},{"internalType":"address","name":"_refundAddress","type":"address"}],"name":"send","outputs":[{"components":[{"internalType":"bytes32","name":"guid","type":"bytes32"},{"internalType":"uint64","name":"nonce","type":"uint64"},{"components":[{"internalType":"uint256","name":"nativeFee","type":"uint256"},{"internalType":"uint256","name":"lzTokenFee","type":"uint256"}],"internalType":"struct MessagingFee","name":"fee","type":"tuple"}],"internalType":"struct MessagingReceipt","name":"msgReceipt","type":"tuple"},{"components":[{"internalType":"uint256","name":"amountSentLD","type":"uint256"},{"internalType":"uint256","name":"amountReceivedLD","type":"uint256"}],"internalType":"struct OFTReceipt","name":"oftReceipt","type":"tuple"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"_delegate","type":"address"}],"name":"setDelegate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"components":[{"internalType":"uint32","name":"eid","type":"uint32"},{"internalType":"uint16","name":"msgType","type":"uint16"},{"internalType":"bytes","name":"options","type":"bytes"}],"internalType":"struct EnforcedOptionParam[]","name":"_enforcedOptions","type":"tuple[]"}],"name":"setEnforcedOptions","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_msgInspector","type":"address"}],"name":"setMsgInspector","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint32","name":"_eid","type":"uint32"},{"internalType":"bytes32","name":"_peer","type":"bytes32"}],"name":"setPeer","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_preCrime","type":"address"}],"name":"setPreCrime","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"sharedDecimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"token","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}];
let provider, signer, contract, currentWallet;
let selectedReplicaId = null;
let selectedAvatarURI = null;
let allReplicas = [];
let ownedReplicaIds = [];

window.onload = () => {
  getReplicas();
};
async function connectWallet() {
  if (!window.ethereum) return alert("Install MetaMask");
  provider = new ethers.BrowserProvider(window.ethereum);
  await provider.send("eth_requestAccounts", []);
  signer = await provider.getSigner();
  contract = new ethers.Contract(contractAddress, abi, signer);
  currentWallet = await signer.getAddress();
  const connectionMessage = `KolzAI::AuthRequest::${currentWallet}::${Date.now()}`;
  const connectionSignature = await window.ethereum.request({
    method: "personal_sign",
    params: [connectionMessage, currentWallet],
  });
  localStorage.setItem("connectionMessage", connectionMessage);
  localStorage.setItem("connectionSignature", connectionSignature);
  localStorage.setItem("wallet", currentWallet);

  document.getElementById("wallet").innerText = "Connected: " + currentWallet;
  await refreshOwnedReplicasAndUpdateUI();
}

async function mintNFT() {
  const replicaId = document.getElementById("replicaId").value;
  const avatarURI = document.getElementById("avatarURI").value;

  try {
    const provider = new ethers.BrowserProvider(window.ethereum);
    await provider.send("eth_requestAccounts", []);
    const signer = await provider.getSigner();

    const kolzToken = new ethers.Contract(kolzTokenAddress, kolzAbi, signer);
    const nft = new ethers.Contract(contractAddress, abi, signer);

    // Step 1: Approve token
    const amount = await nft.STAKE_AMOUNT();
    const approveTx = await kolzToken.approve(contractAddress, amount);
    await approveTx.wait();
    console.log("✅ Approved KOLZ");

    // Step 2: Mint NFT
    const mintTx = await nft.mint(replicaId, avatarURI);
    await mintTx.wait();
    alert("✅ NFT Minted!");
    await refreshOwnedReplicasAndUpdateUI();
  } catch (e) {
    alert("❌ Error: " + (e?.reason || e.message));
  }
}

async function mintSelfOwnedNFT() {
  const selfOwnedReplicaName = document.getElementById("selfOwnedReplicaName").value;
  const replicaSlug = document.getElementById("replicaSlug").value;
  const replicaDescription = document.getElementById("replicaDescription").value;
  const replicaGreeting = document.getElementById("replicaGreeting").value;
  const avatarURI = document.getElementById("selfOwnedAvatarURI").value;
  let wallet = localStorage.getItem("wallet");

  try {
    const provider = new ethers.BrowserProvider(window.ethereum);
    await provider.send("eth_requestAccounts", []);
    const signer = await provider.getSigner();

    const kolzToken = new ethers.Contract(kolzTokenAddress, kolzAbi, signer);
    const nft = new ethers.Contract(contractAddress, abi, signer);
    
    //Step 1: Create new Replica
    const message = localStorage.getItem("connectionMessage");
    if (!wallet || !selfOwnedReplicaName || !replicaSlug) return alert("Missing wallet, Replica name or slug");
    const signature = localStorage.getItem("connectionSignature");
    const res = await fetch(`${host}/api/v1/newreplica`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ wallet, message, signature, selfOwnedReplicaName, replicaDescription, replicaGreeting, replicaSlug })
      });
    const data = await res.json();
    console.log("✅ Replica successfully created", data);
    if(data && data.success === true && data.uuid){
      //Step 2: New replica ready to get NFT
      // Step 3: Approve token
      console.log(ethers.formatUnits);
      const amount = await nft.STAKE_OWNER_AMOUNT();
      const approveTx = await kolzToken.approve(contractAddress, amount);
      await approveTx.wait();
      console.log("✅ Approved KOLZ");

      // Step 4: Mint NFT
      const mintTx = await nft.mintOwner(data.uuid, avatarURI);
      await mintTx.wait();
      console.log("✅ Minted NFT!");
    }
     
    await refreshOwnedReplicasAndUpdateUI();
  } catch (e) {
    alert("❌ Error: " + (e?.reason || e.message));
  }
}

async function burnNFT() {
  const tokenId = document.getElementById("burnTokenId").value;
  try {
    const tx = await contract.burnAndUnstake(tokenId);
    await tx.wait();
    alert("🔥 NFT burned and KOLZ unstaked!");
    await refreshOwnedReplicasAndUpdateUI();
  } catch (e) {
    alert("❌ Burn error: " + (e?.reason || e.message));
  }
}

async function getNFTInfo() {
  const tokenId = document.getElementById("infoTokenId").value;
  try {
    const data = await contract.getNFTData(tokenId);
    const formatted = {
      originalMinter: data[0],
      replicaId: data[1],
      avatarURI: data[2],
      accessibleAPIs: data[3],
      mintedDate: new Date(Number(data[4]) * 1000).toLocaleString(),
      stakedAmount: ethers.formatUnits(data[5], 18) + " KOLZ"
    };
    document.getElementById("nftOutput").innerText = JSON.stringify(formatted, null, 2);
  } catch (e) {
    alert("❌ Fetch error: " + (e?.reason || e.message));
  }
}

async function getReplicaIdsFromNFTs(wallet) {
  const nftContract = new ethers.Contract(contractAddress, abi, provider);
  const balance = await nftContract.balanceOf(wallet);
  console.log("balance:", balance);
  const ids = [];
  const onwerReplicasIds = [];

  for (let i = 0; i < balance; i++) {
    const tokenId = await nftContract.tokenOfOwnerByIndex(wallet, i);
    const data = await nftContract.getNFTData(tokenId);
    if (data.accessibleAPIs.includes("ownerReplica")) {
      onwerReplicasIds.push(data.replicaId);
    }
    if (data.replicaId) {
      ids.push(data.replicaId);
    }
  }
  localStorage.setItem("ownerReplicaIds", JSON.stringify(onwerReplicasIds));
  return ids;
}

async function getReplicas() {
  try {
    allReplicas = await getAllReplicasFromServer();

    // Chỉ gọi ownedReplicaIds nếu đã connect ví
    if (currentWallet) {
      ownedReplicaIds = await getOwnedReplicaIds(currentWallet);
    }

    renderReplicaList(allReplicas, ownedReplicaIds);
  } catch (err) {
    console.error("❌ Error loading replicas:", err.message);
  }
}

function selectReplica(replica) {
  selectedReplicaId = replica.uuid;
  selectedAvatarURI = replica.profile_image || replica.profileImage || "";

  document.getElementById("replicaId").value = selectedReplicaId;
  document.getElementById("avatarURI").value = selectedAvatarURI;
}

async function refreshOwnedReplicasAndUpdateUI() {
  if (!currentWallet) return;

  ownedReplicaIds = await getReplicaIdsFromNFTs(currentWallet);
  renderReplicaList(allReplicas, ownedReplicaIds);
}

function renderReplicaList(replicas, nftReplicaIds) {
  const selfOwnedRelicaIds = JSON.parse(localStorage.getItem("ownerReplicaIds") || "[]");
  const container = document.getElementById("replicaList");
  container.innerHTML = "";

  replicas.forEach((replica) => {
    const div = document.createElement("div");
    div.classList.add("replica-card");
    div.style = "margin-bottom:15px; padding:12px; background:#f0f0f0; border-radius:8px; display:flex; align-items:center; gap:15px;";

    const isOwned = nftReplicaIds.includes(replica.uuid);
    const isTrainable = selfOwnedRelicaIds.includes(replica.uuid);
    
    let actionButtons = `<div style="display:flex; gap:10px; margin-top:6px;">`;

    if (isOwned) {
      actionButtons += `<button onclick="chatWith('${replica.uuid}')">💬 Chat with</button>`;
    }

    if (isTrainable) {
      actionButtons += `<button onclick="trainReplica('${replica.uuid}')">🧠 Train Replica</button>`;
    }

    actionButtons += `</div>`;

    div.innerHTML = `
      <img src="${replica.profile_image || replica.profileImage}" alt="avatar" width="60" height="60" style="border-radius:50%; object-fit:cover;" />
      <div>
        <strong>${replica.name}</strong><br/>
        Replica ID: ${replica.uuid}<br/>
        Model: ${replica.llm?.model || "?"}<br/>
        ${actionButtons}
      </div>
    `;

    div.onclick = () => selectReplica(replica);
    container.appendChild(div);
  });
}

async function getAllReplicasFromServer() {
  try {
    const res = await fetch(`${host}/api/v1/replicas`);
    const data = await res.json();

    return Array.isArray(data.replicas) ? data.replicas : [];
  } catch (err) {
    console.error("❌ Failed to fetch all replicas:", err.message);
    return [];
  }
}

function chatWith(replicaId) {
  if (!replicaId) {
    alert("Missing replicaId");
    return;
  }

  localStorage.setItem("replicaId", replicaId);
  window.location.href = "chat.html";
}

function trainReplica(replicaId) {
  if (!replicaId) {
    alert("Missing replicaId");
    return;
  }

  localStorage.setItem("replicaId", replicaId);
  window.location.href = "train.html";
}
