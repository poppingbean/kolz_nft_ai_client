const contractAddress = "0x4236b864974cA92d275A81cCcfEd7bebC0a9dfdb";
const melaTokenAddress = "0xC95e6cb4b0E434A58b6E41a222212AF306c5CAd5";
const contributionAddress = "0xC74FAB690cE4f31fB18aC4F1b89558be735bc3C9";
const host = "https://melagate.up.railway.app";
const replicaId = localStorage.getItem("replicaId");
const wallet = localStorage.getItem("wallet");

let currentContribution = null;
async function loadReplicaInfo() {
      const res = await fetch(`${host}/api/v1/replicas`);
      const data = await res.json();
      const replica = data.replicas.find(r => r.uuid === replicaId);
      if (replica) {
        document.getElementById("replicaName").innerText = replica.name;
        document.getElementById("replicaAvatar").src = replica.profileImage;
      }
    }

async function loadContributions() {
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const contract = new ethers.Contract(contractAddress, abi, signer);
      const contribution = new ethers.Contract(contributionAddress, contributionAbi, signer);
      const list = document.getElementById("contributionList");
      const content = document.getElementById("fullContent");
      list.innerHTML = "";
      content.innerText = "Select a contribution to view its content.";

      try {
        const balance = await contract.balanceOf(wallet);
        for (let i = 0; i < balance; i++) {
          const tokenId = await contract.tokenOfOwnerByIndex(wallet, i);
          const data = await contract.getNFTData(tokenId);
          if (data.replicaId === replicaId) {
            const pendingContributions = await contribution.getPendingContributionsView(replicaId);
            pendingContributions.forEach((contrib, index) => {
              decodedText = decodeURIComponent((atob(contrib[1])));
              localStorage.setItem("decodedText", decodedText);
              const card = document.createElement("div");
              card.className = "contribute-card";
              card.innerText = `#${index + 1} - ${contrib[0].slice(0, 8)}...`;
              card.onclick = () => {
                document.querySelectorAll(".contribute-card").forEach(c => c.classList.remove("active"));
                card.classList.add("active");
                content.innerHTML = `
                  <div style='margin-bottom: 10px;'>${decodedText}</div>
                  <button class="approve" onclick="approveReject(${tokenId}, ${index}, true)">Approve</button>
                  <button class="reject" onclick="approveReject(${tokenId}, ${index}, false)">Reject</button>
                  <button class="verify" onclick="handleVerifyClick()" id="verifyButton">Verify</button>
                `;
              };
              list.appendChild(card);
            });
          }
        }
      } catch (err) {
        console.error("Error loading contributions:", err);
      }
    }

async function approveReject(tokenId, index, approved) {
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const contract = new ethers.Contract(contractAddress, abi, signer);
      try {
        if(approved) {
          const trainingData = localStorage.getItem("decodedText");
          const message = localStorage.getItem("connectionMessage");
          const signature = localStorage.getItem("connectionSignature");
          if (!trainingData || !message) return alert("Please enter training content");

          const res = await fetch(`${host}/api/v1/training`, {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ wallet, replicaId, message, signature, trainingData  })
          });
          const data = await res.json();
          const status = document.getElementById("status");

          if (res.ok) {
              const tx = await contract.approveRejectContribution(tokenId, index, approved);
              await tx.wait();
              status.innerText = "✅ Contribute approved successfully. The contribution content has been trained";
          } else {
              status.innerText = "❌ " + (data.error || "Contribute failed or rejected");
          }
        } else {
          const tx = await contract.approveRejectContribution(tokenId, index, approved);
          await tx.wait();
          document.getElementById("status").innerText = "❌ Contribute rejected";
        }
        loadContributions();
      } catch (err) {
        console.error("Action failed:", err);
        alert("Error: " + err.message);
      }
    }

async function verifyContribution(content) {
  try {
    const response = await fetch(`${host}/api/v1/verify`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ content })
    });

    if (!response.ok) {
        throw new Error('Verify API failed');
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error('Verify error:', error);
    return { verified: false, message: 'Verification failed' };
  }
}

async function handleVerifyClick() {
  if (!currentContribution) {
    alert('Please select a contribution first.');
    return;
  }

  const verifyResultDiv = document.getElementById('verifyResult');
  verifyResultDiv.innerText = 'Verifying...';
  verifyResultDiv.style.color = 'black';

  const verifyResult = await verifyContribution(currentContribution.content);
  verifyResultDiv.style.color = verifyResult.verified ? 'green' : 'red';
  verifyResultDiv.innerText = verifyResult.message;
}
    
 window.onload = () => {
      loadReplicaInfo();
      loadContributions();
};