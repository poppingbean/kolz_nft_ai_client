const contractAddress = "0x4236b864974cA92d275A81cCcfEd7bebC0a9dfdb";
const melaTokenAddress = "0xC95e6cb4b0E434A58b6E41a222212AF306c5CAd5";
const host = "http://localhost:8080";
let provider, signer, contract, currentWallet;
let selectedReplicaId = null;
let selectedAvatarURI = null;
let allReplicas = [];
let ownedReplicaIds = [];

window.onload = async () => {
  provider = new ethers.BrowserProvider(window.ethereum);
  signer = await provider.getSigner();
  contract = new ethers.Contract(contractAddress, abi, signer);
  currentWallet = await signer.getAddress();
  console.log(provider.getNetwork());
  if(!currentWallet){
    await connectWallet();
  }
  document.getElementById("wallet").innerText = "Connected: " + currentWallet;
  getReplicas(currentWallet);
};
async function connectWallet() {
  if (!window.ethereum) return alert("Install MetaMask");
  provider = new ethers.BrowserProvider(window.ethereum);
  await provider.send("eth_requestAccounts", []);
  signer = await provider.getSigner();
  contract = new ethers.Contract(contractAddress, abi, signer);
  currentWallet = await signer.getAddress();
  const connectionMessage = `MELARequest::AuthRequest::${currentWallet}::${Date.now()}`;
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

async function mintNFT(replicaId) {
  const avatarURI = `https://emerald-nearby-cardinal-774.mypinata.cloud/ipfs/bafybeig4nrmhonwekgbbdppjuhoamfxgcabtzzyzgui5ychslilbzm7sia`;
  try {
    const provider = new ethers.BrowserProvider(window.ethereum);
    await provider.send("eth_requestAccounts", []);
    const signer = await provider.getSigner();

    const melaToken = new ethers.Contract(melaTokenAddress, melaAbi, signer);
    const nft = new ethers.Contract(contractAddress, abi, signer);

    // Step 1: Approve token
    const amount = await nft.STAKE_AMOUNT();
    const approveTx = await melaToken.approve(contractAddress, amount);
    await approveTx.wait();
    console.log("✅ Approved MELA");

    // Step 2: Mint NFT
    const mintTx = await nft.mint(replicaId, avatarURI);
    await mintTx.wait();
    alert("✅ NFT Minted!");
    await refreshOwnedReplicasAndUpdateUI();
  } catch (e) {
    alert("❌ Error: " + (e?.reason || e.message));
  }
}

async function getNFTInfo() {
  const tokenId = document.getElementById("infoTokenId").value;
  try {
    const data = await contract.nftMetadata(tokenId);
    const formatted = {
      originalMinter: data[0],
      replicaId: data[1],
      avatarURI: data[2],
      accessibleAPIs: data[3],
      mintedDate: new Date(Number(data[4]) * 1000).toLocaleString(),
      stakedAmount: ethers.formatUnits(data[5], 18) + " $MELA"
    };
    document.getElementById("nftOutput").innerText = JSON.stringify(formatted, null, 2);
  } catch (e) {
    alert("❌ Fetch error: " + (e?.reason || e.message));
  }
}

async function getReplicaIdsFromNFTs(wallet) {
  console.log(wallet);
  console.log(abi);
  const balance = await contract.balanceOf(wallet);
  console.log("balance:", balance);
  const ids = [];
  const onwerReplicasIds = [];

  for (let i = 0; i < balance; i++) {
    console.log("Start checking owner and usable NFT Agents")
    const tokenId = await contract.tokenOfOwnerByIndex(wallet, i);
    console.log("TokenId:", tokenId);
    const data = await contract.getNFTData(tokenId);
    console.log(data);
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

async function getReplicas(wallet) {
  try {
    allReplicas = await getAllReplicasFromServer();
    console.log("All replicas: ",allReplicas);
    // Chỉ gọi ownedReplicaIds nếu đã connect ví
    if (wallet) {
      ownedReplicaIds = await getReplicaIdsFromNFTs(wallet);
      console.log("Owned replica IDs: ", ownedReplicaIds);
    }

    renderReplicaList(allReplicas, ownedReplicaIds);
  } catch (err) {
    console.error("❌ Error loading replicas:", err.message);
  }
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
    div.classList.add("agent-card");
    //div.style = "margin-bottom:15px; padding:12px; background:#f0f0f0; border-radius:8px; display:flex; align-items:center; gap:15px;";

    const isOwned = nftReplicaIds.includes(replica.uuid);
    const isTrainable = selfOwnedRelicaIds.includes(replica.uuid);
    
    let actionButtons = `<div class="agent-actions">`;

    if (isOwned) {
      actionButtons += `<button title="Chat with" onclick="chatWith('${replica.uuid}')">💬 </button>`;
    } else {
      actionButtons += `<button title="Register" onclick="mintNFT('${replica.uuid}')">📝 </button>`;
    }

    if (isTrainable) {
      actionButtons += `<button title="Training" onclick="trainReplica('${replica.uuid}')">🧠 </button>`;
      actionButtons += `<button title="Contribution Manager" onclick="contributionManager('${replica.uuid}')">📝 </button>`
    }
    else {
      //actionButtons += `<button title="Contribute" onclick="contribute('${replica.uuid}')">📤 </button>`
    }
    //Temporary put the Contribute button here for testing
    actionButtons += `<button title="Contribute" onclick="contribute('${replica.uuid}')">📤 </button>`;
    actionButtons += `</div>`;

    div.innerHTML = `
      <img src="https://emerald-nearby-cardinal-774.mypinata.cloud/ipfs/bafybeig4nrmhonwekgbbdppjuhoamfxgcabtzzyzgui5ychslilbzm7sia" alt="avatar" width="60" height="60" style="border-radius:50%; object-fit:cover;" />
      <div class="agentName"><strong>${replica.name}</strong></div>
      <div>
        <strong>Replica ID:</strong> ${replica.uuid}<br/>
        <strong>Description:</strong> ${replica.short_description}<br/>
        <strong>Model:</strong> ${replica.llm?.model || "?"}<br/>
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
  window.location.href = "/chat";
}

function trainReplica(replicaId) {
  if (!replicaId) {
    alert("Missing replicaId");
    return;
  }

  localStorage.setItem("replicaId", replicaId);
  window.location.href = "/train";
}


function contributionManager(replicaId) {
  if (!replicaId) {
    alert("Missing replicaId");
    return;
  }

  localStorage.setItem("replicaId", replicaId);
  window.location.href = "/manage";
}

function contribute(replicaId) {
  if (!replicaId) {
    alert("Missing replicaId");
    return;
  }

  localStorage.setItem("replicaId", replicaId);
  window.location.href = "/contribute";
}
