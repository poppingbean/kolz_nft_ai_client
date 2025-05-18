const contractAddress = "0xD46d9c77b91C801a9E644f779D95BC527AaBC7Cd";
const kolzTokenAddress = "0x50ce4129ca261ccde4eb100c170843c2936bc11b";
const host = "https://kolzacademygate.up.railway.app";
const replicaId = localStorage.getItem("replicaId");
const wallet = localStorage.getItem("wallet");

    if (!replicaId || !wallet) {
        alert("Missing replicaId or wallet");
        window.location.href = "index.html";
    }

    async function loadReplicaInfo() {
        const res = await fetch(`${host}/api/v1/replicas`);
        const data = await res.json();
        console.log(data);
        const replica = data.replicas.find(r => r.uuid === replicaId);
        if (replica) {
            console.log(replica);
            document.getElementById("replicaName").innerText = replica.name;
            document.getElementById("replicaAvatar").src = replica.profileImage;
        }
    }

    async function submitContribute() {
        const message = localStorage.getItem("connectionMessage");
        const trainingData = document.getElementById("contributeInput").value;
        if (!trainingData || !message) return alert("Please enter your contribution content");

        const provider = new ethers.BrowserProvider(window.ethereum);
        await provider.send("eth_requestAccounts", []);
        const signer = await provider.getSigner();

        const nft = new ethers.Contract(contractAddress, abi, signer);
        const encryptedContent = btoa(encodeURIComponent(trainingData));
        try {
            const balance = await nft.balanceOf(wallet);
            console.log("balance:", balance);
            for (let i = 0; i < balance; i++) {
                const tokenId = await nft.tokenOfOwnerByIndex(wallet, i);
                const data = await nft.getNFTData(tokenId);
                console.log(data);
                if (data.replicaId === replicaId) {
                    const tx = await nft.submitContribution(tokenId, encryptedContent);
                    await tx.wait();
                    document.getElementById("status").innerText = "✅ Contribution submitted to contract.";
                    break;
                }
                else {
                    document.getElementById("status").innerText = "❌ Cannot find Agent for this contribution.";
                }
            }   
        } catch (err) {
            console.error(err);
            document.getElementById("status").innerText = "❌ Failed to submit contribution.";
        }
    }

    function showTab(tabId) {
      document.querySelectorAll('.tab').forEach(el => el.classList.remove('active'));
      document.querySelectorAll('.tab-content').forEach(el => el.classList.remove('active'));
      document.getElementById(`tab-${tabId}`).classList.add('active');
      event.target.classList.add('active');
    }

    window.onload = loadReplicaInfo;