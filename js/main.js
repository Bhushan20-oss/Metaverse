document.addEventListener("DOMContentLoaded", () => {
  const cards = [
    { icon: 'fa-rocket', label: 'Running Days', value: '6113' },         
    { icon: 'fa-wallet', label: 'Total Investments', value: '$0.00' },   
    { icon: 'fa-calendar', label: 'Project Started', value: 'Feb 21' },  
    { icon: 'fa-user', label: 'Online Visitors', value: '94' },          
    { icon: 'fa-money-bill-wave', label: 'Total Withdrawals', value: '$0.00' }, 
    { icon: 'fa-eye', label: 'Visitors Online', value: '2' }             
  ];

  const container = document.getElementById("floatingDashboardCards");

  const xOffsets = [10, 25, 40, 60, 75, 90]; // Horizontal % positions
  const yOffsets = [10, 25, 50, 50, 25, 5];  // Vertical % positions for V shape

  cards.forEach((card, i) => {
    const div = document.createElement("div");
    div.className = "dashboard-card move-fade";
    div.innerHTML = `
      <i class="fas ${card.icon}"></i>
      <p class="label">${card.label}</p>
      <p class="value">${card.value}</p>
    `;

    div.style.left = `${xOffsets[i]}%`;
    div.style.top = `${yOffsets[i]}%`;
    div.style.transform = "translate(-50%, -50%)";
    div.style.setProperty('--delay', `${i * 0.4}s`); // Stagger animation

    // Hover zoom effect
    div.addEventListener("mouseenter", () => {
      div.style.transform = "translate(-50%, -50%) scale(1.08)";
    });
    div.addEventListener("mouseleave", () => {
      div.style.transform = "translate(-50%, -50%)";
    });

    // Click toast interaction
    div.addEventListener("click", () => {
      showToast(`${card.label}: ${card.value}`);
    });

    container.appendChild(div);
  });

  // Simple toast notification
  function showToast(message) {
    const toast = document.createElement("div");
    toast.className = "dashboard-toast";
    toast.innerText = message;
    document.body.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = "0";
      setTimeout(() => toast.remove(), 500);
    }, 2000);
  }
});




document.querySelectorAll('.plan-card').forEach(card => {
  card.addEventListener('click', () => {
    alert(`You selected the ${card.innerText} plan!`);
  });
});



const plans = document.querySelectorAll(".plan");
plans.forEach((plan, i) => {
  plan.style.animation = `floatCard${i} 5s ease-in-out ${i * 0.3}s infinite`;
});
