const contractAddress = "0xD46d9c77b91C801a9E644f779D95BC527AaBC7Cd";
const kolzTokenAddress = "0x50ce4129ca261ccde4eb100c170843c2936bc11b";
const host = "http://localhost:8080";
const replicaId = localStorage.getItem("replicaId");
const wallet = localStorage.getItem("wallet");

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
            const pendingContributions = await contract.getPendingContributions(tokenId);
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
 window.onload = () => {
      loadReplicaInfo();
      loadContributions();
};