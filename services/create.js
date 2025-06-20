const contractAddress = "0x4236b864974cA92d275A81cCcfEd7bebC0a9dfdb";
const melaTokenAddress = "0xC95e6cb4b0E434A58b6E41a222212AF306c5CAd5";
const host = "https://melagate.up.railway.app";
const wallet = localStorage.getItem("wallet");

function generateSlug(input) {
    return input.toLowerCase()
        .normalize('NFD').replace(/\p{Diacritic}/gu, '')
        .replace(/[^\w\s-]/g, '')
        .trim()
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-');
}

document.getElementById("agentName").addEventListener("input", function () {
    const slug = generateSlug(this.value);
    document.getElementById("slugName").value = slug;
});

document.getElementById("nftForm").addEventListener("submit", function(e) {
    e.preventDefault();
    mintSelfOwnedNFT();
});

async function mintSelfOwnedNFT() {
  const selfOwnedReplicaName = document.getElementById("agentName").value;
  const replicaSlug = document.getElementById("slugName").value;
  const replicaDescription = document.getElementById("agentDescription").value;
  const replicaGreeting = document.getElementById("agentGreeting").value;
  let avatarURI = "";
  try {
    const provider = new ethers.BrowserProvider(window.ethereum);
    await provider.send("eth_requestAccounts", []);
    const signer = await provider.getSigner();

    const melaToken = new ethers.Contract(melaTokenAddress, melaAbi, signer);
    const nft = new ethers.Contract(contractAddress, abi, signer);
    
    //Step 1: Create new Replica
    const message = localStorage.getItem("connectionMessage");
    if (!wallet || !selfOwnedReplicaName || !replicaSlug) return alert("Missing wallet, Agent name or slug");
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
      const amount = await nft.STAKE_OWNER();
      const approveTx = await melaToken.approve(contractAddress, amount);
      await approveTx.wait();
      console.log("✅ Approved MELA");

      // Step 4: Mint NFT
      const mintTx = await nft.mintOwner(data.uuid, avatarURI);
      await mintTx.wait();
      console.log("✅ Minted NFT!");

      setTimeout(() => {
          window.location.href = "/";
        }, 2000);
    }


  } catch (e) {
    alert("❌ Error: " + (e?.reason || e.message));
  }
}