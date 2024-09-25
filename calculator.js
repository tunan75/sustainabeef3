function calculate() {
    // Inputs
    const guestConsumption = parseFloat(document.getElementById('guestInput').value) || 0;
    const staffConsumption = parseFloat(document.getElementById('staffInput').value) || 0;

    // Full Set Model Calculation
    const guestPremiumCuts = guestConsumption * 0.2;  // 20% for premium cuts
    const guestThinSteaks = guestConsumption * 0.1;   // 10% for thin steaks
    const guestBoneInRoasts = guestConsumption * 0.1; // 10% for bone-in roasts
    const guestCubeMeat = guestConsumption * 0.15;    // 15% for cube meat
    const guestGroundMeat = guestConsumption * 0.45;  // 45% for ground meat

    const staffPremiumCuts = staffConsumption * 0.2;  // 20% for premium cuts
    const staffThinSteaks = staffConsumption * 0.1;   // 10% for thin steaks
    const staffBoneInRoasts = staffConsumption * 0.1; // 10% for bone-in roasts
    const staffCubeMeat = staffConsumption * 0.15;    // 15% for cube meat
    const staffGroundMeat = staffConsumption * 0.45;  // 45% for ground meat

    // Totals for guest and staff
    const fullSetGuestTotal = guestPremiumCuts + guestThinSteaks + guestBoneInRoasts + guestCubeMeat + guestGroundMeat;
    const fullSetStaffTotal = staffPremiumCuts + staffThinSteaks + staffBoneInRoasts + staffCubeMeat + staffGroundMeat;
    const fullSetTotal = fullSetGuestTotal + fullSetStaffTotal;

    // Number of cows needed for Full Set Model
    const fullSetCows = Math.ceil(fullSetTotal / 220); // Based on 220 kg per cow

    // Premium Only Model Calculation
    const premiumOnlyTotal = guestConsumption + staffConsumption; // Total for Premium Only Model
    const premiumOnlyCows = Math.ceil(premiumOnlyTotal / 220); // Based on 220 kg per cow

    // Display Full Set Model Results
    document.getElementById('fullSetPremiumCuts').textContent = (guestPremiumCuts + staffPremiumCuts).toFixed(2);
    document.getElementById('fullSetThinSteaks').textContent = (guestThinSteaks + staffThinSteaks).toFixed(2);
    document.getElementById('fullSetBoneInRoasts').textContent = (guestBoneInRoasts + staffBoneInRoasts).toFixed(2);
    document.getElementById('fullSetCubeMeat').textContent = (guestCubeMeat + staffCubeMeat).toFixed(2);
    document.getElementById('fullSetGroundMeat').textContent = (guestGroundMeat + staffGroundMeat).toFixed(2);
    document.getElementById('fullSetGuestTotal').textContent = fullSetGuestTotal.toFixed(2);
    document.getElementById('fullSetStaffTotal').textContent = fullSetStaffTotal.toFixed(2);
    document.getElementById('fullSetTotal').textContent = fullSetTotal.toFixed(2);
    document.getElementById('fullSetCows').textContent = fullSetCows;

    // Display Premium Only Model Results
    document.getElementById('premiumOnlyTotal').textContent = premiumOnlyTotal.toFixed(2);
    document.getElementById('premiumOnlyCows').textContent = premiumOnlyCows;
}
