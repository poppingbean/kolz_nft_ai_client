const contractAddress = "0x4236b864974cA92d275A81cCcfEd7bebC0a9dfdb";
const melaTokenAddress = "0xC95e6cb4b0E434A58b6E41a222212AF306c5CAd5";
const contributionAddress = "0xC74FAB690cE4f31fB18aC4F1b89558be735bc3C9";
const host = "http://localhost:8080";
const replicaId = localStorage.getItem("replicaId");
const wallet = localStorage.getItem("wallet");

    if (!replicaId || !wallet) {
        alert("Missing replicaId or wallet");
        window.location.href = "index.html";
    }

    async function loadReplicaInfo() {
        const provider = new ethers.BrowserProvider(window.ethereum);
        await provider.send("eth_requestAccounts", []);
        const signer = await provider.getSigner();
        
        const nft = new ethers.Contract(contractAddress, abi, signer);
        const existsTx = await nft.checkReplicaExists(replicaId);
        if (!existsTx) {
            document.getElementById("status").innerText = `❌ Agent with Id ${replicaId} does not exist.`;
            return;
        }
        document.getElementById("status").innerText = `✅ Agent with Id ${replicaId} exists.`;
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
        
        const contribution = new ethers.Contract(contributionAddress, contributionAbi, signer);
        const encryptedContent = btoa(encodeURIComponent(trainingData));
        try {
            const tx = await contribution.submitContribution(replicaId, encryptedContent);
            await tx.wait();
            document.getElementById("status").innerText = "✅ Contribution submitted to contract."; 
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